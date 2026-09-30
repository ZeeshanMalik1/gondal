"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** id referenced by the header toggle's aria-controls. */
  id: string;
  /** Accessible name for the drawer. */
  label: string;
  children: ReactNode;
  /** Visual theme — matches the owning site's tokens. */
  tone?: "dark" | "light";
  /** Headline shown at the top of the drawer (usually the brand). */
  title?: string;
  /** Hide the pinned "Back to Gondal Group" footer (corporate drawer). */
  hideBackLink?: boolean;
}

/**
 * Shared full-height navigation drawer used by all five site headers.
 *
 * • slides in from the right over a dimmed backdrop (reduced-motion aware)
 * • locks background scrolling while open (`body[data-scroll-locked]`)
 * • closes on Escape, backdrop tap, route change, or resize to ≥1024px
 * • moves focus into the drawer and traps Tab within it
 *
 * Render as a direct child of the site `<header>` (never inside a
 * backdrop-blur element) so `position: fixed` resolves against the viewport
 * while brand CSS variables still inherit from the layout wrapper.
 */
export function MobileMenu({
  open,
  onClose,
  id,
  label,
  children,
  tone = "dark",
  title,
  hideBackLink = false,
}: MobileMenuProps) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Close automatically on route change (drawer <Link> taps; same-page hash
  // links close via their own onClick).
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    onCloseRef.current();
  }, [pathname]);

  /* Scroll lock + Escape + focus lifecycle + desktop-resize close. */
  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement as HTMLElement | null;
    document.body.setAttribute("data-scroll-locked", "");
    panelRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      // Minimal focus trap: cycle Tab inside the drawer.
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => {
      if (desktop.matches) onCloseRef.current();
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.removeAttribute("data-scroll-locked");
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
      previousFocus.current?.focus();
    };
  }, [open]);

  const dark = tone === "dark";

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[95]" id={id}>
          {/* backdrop */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          {/* panel */}
          <motion.aside
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className={cn(
              "absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col outline-none",
              "shadow-[-16px_0_48px_rgba(0,0,0,0.35)]",
              dark ? "bg-surface-dark text-white" : "border-l border-line-var bg-paper text-ink",
            )}
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "tween", duration: 0.26, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* header row */}
            <div
              className={cn(
                "flex items-center justify-between gap-3 border-b px-5 py-4",
                dark ? "border-white/10" : "border-line-var",
              )}
            >
              {title ? (
                <span className="truncate text-sm font-semibold tracking-wide">{title}</span>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition",
                  dark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-line-var text-ink hover:bg-brand-faint",
                )}
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            {/* scrollable content */}
            <nav aria-label={label} className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
              {children}
            </nav>

            {/* back link pinned to the bottom, above the home indicator */}
            <div
              className={cn(
                "border-t px-5 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom,0px))]",
                hideBackLink && "hidden",
                dark ? "border-white/10" : "border-line-var",
              )}
            >
              <Link
                href="/"
                onClick={onClose}
                className={cn(
                  "inline-flex min-h-[44px] items-center gap-2 text-sm font-medium",
                  dark ? "text-white/75 hover:text-white" : "text-muted-var hover:text-ink",
                )}
              >
                <Icon name="chevron-left" className="h-4 w-4" />
                Back to Gondal Group
              </Link>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}

