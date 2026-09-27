"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page is scrolled past `threshold` px.
 * Used by every site header to add a shadow / solid background on scroll
 * (passive listener + rAF throttle — no layout thrash on mobile).
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return scrolled;
}
