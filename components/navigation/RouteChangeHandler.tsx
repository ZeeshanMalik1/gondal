"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Route-change housekeeping, mounted once in the root layout:
 *
 * • Scrolls to the top instantly when the path changes. The global
 *   `scroll-behavior: smooth` (which makes in-page anchor jumps pleasant)
 *   would otherwise animate a long, nauseating scroll back up on every
 *   navigation — so we force `behavior: "instant"` here.
 * • Hash targets (`/#businesses`, `/salt#contact`) are left to the browser so
 *   they land on the section, below the sticky header (scroll-padding-top).
 * • First render is skipped — the browser's own restore/back-forward scroll
 *   handling stays intact.
 */
export function RouteChangeHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // Let the browser scroll to the target (after paint so the element
      // exists — Next streams the new page before this effect runs).
      requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
