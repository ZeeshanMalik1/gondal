"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/**
 * Thin top-of-page progress bar for client-side navigations.
 *
 * App Router has no built-in progress indicator, so we derive it:
 * 1. a capture-phase click listener detects taps on internal <a> links
 *    (Next.js <Link> renders real anchors) and starts the bar;
 * 2. the pathname change completes it — fade out after a short beat;
 * 3. a safety timeout guarantees it can never get stuck if a navigation
 *    fails or is a same-path hash change we misjudged.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  /* 1 — start on internal link activation */
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor || anchor.target === "_blank") return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return; // #hash / mailto: / tel: / external
      const [path] = href.split("#");
      if (path === window.location.pathname) return; // same-page anchor jump
      setActive(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  /* 2 — pathname changed: navigation resolved */
  useEffect(() => {
    setActive(false);
  }, [pathname]);

  /* 3 — failsafe */
  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => setActive(false), 8000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[110] h-[3px] overflow-hidden",
        "transition-opacity duration-300",
        active ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="route-progress-bar h-full w-full bg-accent" />
    </div>
  );
}
