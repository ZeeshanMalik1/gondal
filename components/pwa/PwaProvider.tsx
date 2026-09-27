"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/**
 * PwaProvider — everything the app needs to be installable and self-updating:
 *
 * • Registers /sw.js (production builds only; `npm run dev` stays SW-free so
 *   hot reload is never served stale).
 * • Captures `beforeinstallprompt` and exposes `promptInstall()`; a built-in
 *   banner appears after a short delay unless dismissed (localStorage) or the
 *   app is already running standalone.
 * • On iOS (no beforeinstallprompt) it shows "Share → Add to Home Screen".
 * • When a new service worker is waiting, an update toast performs the
 *   SKIP_WAITING handshake and reloads on `controllerchange`.
 */

interface PwaContextValue {
  /** Native install can be triggered (Chromium family). */
  canInstall: boolean;
  /** iOS Safari — install is manual via the Share sheet. */
  isIos: boolean;
  /** Running as an installed app. */
  isStandalone: boolean;
  /** A new version is downloaded and waiting. */
  updateReady: boolean;
  /** The install banner should be shown. */
  installVisible: boolean;
  promptInstall: () => Promise<void>;
  dismissInstall: () => void;
  applyUpdate: () => void;
}

const PwaContext = createContext<PwaContextValue | null>(null);

/** Read once per mount; SSR never touches localStorage. */
function readDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem("gondal:pwa-install-dismissed") === "1";
  } catch {
    return false;
  }
}

function detectStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(display-mode: standalone)").matches === true ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function detectIos(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  const ios = /iphone|ipad|ipod/i.test(ua);
  // iPadOS 13+ reports as Mac but supports multi-touch — treat as iOS.
  const ipadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return (ios || ipadOs) && !detectStandalone();
}

export function PwaProvider({ children }: { children: ReactNode }) {
  const deferredPrompt = useRef<Event | null>(null);
  const swRef = useRef<ServiceWorkerRegistration | null>(null);

  const [canInstall, setCanInstall] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [updateReady, setUpdateReady] = useState(false);
  const [installVisible, setInstallVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  /* ---- service worker registration + update detection ---- */
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    let cancelled = false;

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
        if (cancelled) return;
        swRef.current = reg;

        // Waiting from a previous visit → offer the update immediately.
        if (reg.waiting && navigator.serviceWorker.controller) setUpdateReady(true);

        reg.addEventListener("updatefound", () => {
          const installing = reg.installing;
          if (!installing) return;
          installing.addEventListener("statechange", () => {
            // "installed" with an existing controller = update available.
            if (installing.state === "installed" && navigator.serviceWorker.controller) {
              if (!cancelled) setUpdateReady(true);
            }
          });
        });
      } catch {
        // Registration failure must never break the page.
      }
    };

    // Re-check for updates whenever the tab regains focus.
    const onVisibility = () => {
      if (document.visibilityState === "visible") swRef.current?.update().catch(() => undefined);
    };

    register();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  /* ---- standalone / dismissed / iOS state ---- */
  useEffect(() => {
    setIsStandalone(detectStandalone());
    setIsIos(detectIos());
    setDismissed(readDismissed());
  }, []);

  /* ---- beforeinstallprompt capture ---- */
  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      deferredPrompt.current = event;
      setCanInstall(true);
    };
    const onInstalled = () => {
      deferredPrompt.current = null;
      setCanInstall(false);
      setInstallVisible(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  /* ---- show the banner after a short, non-intrusive delay ---- */
  useEffect(() => {
    if (isStandalone || dismissed) return;
    const timer = window.setTimeout(() => {
      setInstallVisible((prev) => prev || canInstall || detectIos());
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [canInstall, dismissed, isStandalone]);

  const promptInstall = useCallback(async () => {
    const prompt = deferredPrompt.current as
      | (Event & { prompt?: () => Promise<void> })
      | null;
    if (prompt && typeof prompt.prompt === "function") {
      try {
        await prompt.prompt();
        deferredPrompt.current = null;
        setCanInstall(false);
        return;
      } catch {
        /* user dismissed the native sheet — keep the help banner */
      }
    }
    // No native prompt (iOS / already used): surface the manual steps.
    setInstallVisible(true);
  }, []);

  const dismissInstall = useCallback(() => {
    setInstallVisible(false);
    setDismissed(true);
    try {
      window.localStorage.setItem("gondal:pwa-install-dismissed", "1");
    } catch {
      /* private mode — dismissal just won't persist */
    }
  }, []);

  const applyUpdate = useCallback(() => {
    const waiting = swRef.current?.waiting;
    if (!waiting) {
      setUpdateReady(false);
      return;
    }
    const onControllerChange = () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    waiting.postMessage({ type: "SKIP_WAITING" });
  }, []);

  const value = useMemo<PwaContextValue>(
    () => ({
      canInstall,
      isIos,
      isStandalone,
      updateReady,
      installVisible,
      promptInstall,
      dismissInstall,
      applyUpdate,
    }),
    [canInstall, isIos, isStandalone, updateReady, installVisible, promptInstall, dismissInstall, applyUpdate],
  );

  return (
    <PwaContext.Provider value={value}>
      {children}
      {!isStandalone && installVisible ? <InstallBanner /> : null}
      {updateReady ? <UpdateToast /> : null}
    </PwaContext.Provider>
  );
}

/** Safe accessor — inert defaults if the provider is missing. */
export function usePwa(): PwaContextValue {
  const ctx = useContext(PwaContext);
  return (
    ctx ?? {
      canInstall: false,
      isIos: false,
      isStandalone: false,
      updateReady: false,
      installVisible: false,
      promptInstall: async () => undefined,
      dismissInstall: () => undefined,
      applyUpdate: () => undefined,
    }
  );
}

/* ------------------------------------------------------------------ */
/* Install banner — bottom sheet on mobile, corner card on desktop.    */
/* ------------------------------------------------------------------ */

function InstallBanner() {
  const { canInstall, isIos, promptInstall, dismissInstall } = usePwa();

  return (
    <div
      role="region"
      aria-label="Install app"
      data-pwa-float
      className="fixed inset-x-0 bottom-0 z-[85] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[22rem]"
    >
      <div className="flex items-start gap-3 rounded-xl border border-line-var bg-paper p-4 shadow-[0_12px_40px_rgba(16,20,27,0.22)]">
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-dark text-accent"
        >
          <Icon name="arrow-up" className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-ink">Install Gondal Group</p>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-var">
            {isIos && !canInstall
              ? "Tap Share, then “Add to Home Screen” for instant access."
              : "Add the app to your home screen for one-tap access."}
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={promptInstall} className="btn btn-brand btn-sm">
              {isIos && !canInstall ? "How to install" : "Install"}
            </button>
            <button type="button" onClick={dismissInstall} className="btn btn-outline btn-sm">
              Not now
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismissInstall}
          aria-label="Dismiss install prompt"
          className="-m-1 grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-var transition hover:text-ink"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Update toast                                                        */
/* ------------------------------------------------------------------ */

function UpdateToast() {
  const { applyUpdate } = usePwa();
  return (
    <div
      role="status"
      data-pwa-float
      className={cn(
        "fixed inset-x-0 bottom-0 z-[86] px-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
        "sm:inset-x-auto sm:left-4 sm:bottom-4 sm:w-[20rem]",
      )}
    >
      <div className="flex items-center gap-3 rounded-xl bg-surface-dark p-3.5 text-white shadow-[0_12px_40px_rgba(16,20,27,0.35)]">
        <p className="flex-1 text-sm">A new version of the app is ready.</p>
        <button type="button" onClick={applyUpdate} className="btn btn-accent btn-sm">
          Update
        </button>
      </div>
    </div>
  );
}


