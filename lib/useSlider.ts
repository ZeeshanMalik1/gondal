"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Headless slider engine shared by every site's slider.
 *
 * The five sliders look completely different by design — this hook only owns
 * the behaviour they have in common:
 *  • index + direction state (direction lets a slider animate "forward" vs
 *    "back" — used by the salt plate and the crushers track)
 *  • auto-advance, restarted whenever the slide changes so a progress bar can
 *    be keyed off `index`
 *  • pointer swipe (horizontal drags only, vertical scrolling stays native)
 *  • ← / → keyboard control
 *  • pause while hovered, and no auto-advance at all under reduced motion
 *
 * Spread `viewportProps` onto the element that wraps the slides.
 */
export interface UseSliderOptions {
  /** Number of slides. */
  count: number;
  /** Auto-advance delay in ms; 0 (default) disables auto-advance. */
  interval?: number;
  /** First slide shown. */
  initial?: number;
  /** Pause auto-advance while the pointer rests on the slider (default true). */
  pauseOnHover?: boolean;
  /** Wrap around at the ends (true) or stop on the last reachable slide. */
  wrap?: boolean;
  /** Highest reachable index when `wrap` is false (peeking tracks). */
  maxIndex?: number;
}

export interface SliderViewportProps {
  role: "group";
  tabIndex: number;
  "aria-roledescription": string;
  style: CSSProperties;
  onKeyDown: (event: ReactKeyboardEvent<HTMLElement>) => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onPointerDown: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerCancel: () => void;
}

export interface SliderApi {
  index: number;
  count: number;
  /** 1 = moving forward, -1 = moving backward. */
  direction: 1 | -1;
  /** True while auto-advance is running (used to drive progress bars). */
  autoplay: boolean;
  /** Auto-advance delay in ms, or 0 when disabled. */
  interval: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  viewportProps: SliderViewportProps;
}

export function useSlider({
  count,
  interval = 0,
  initial = 0,
  pauseOnHover = true,
  wrap = true,
  maxIndex,
}: UseSliderOptions): SliderApi {
  const reduce = useReducedMotion();
  const last = Math.max(0, Math.min(maxIndex ?? count - 1, count - 1));

  const [index, setIndex] = useState(() => Math.max(0, Math.min(initial, count - 1)));
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  /** Mirrors `index` so the callbacks below stay stable across slides. */
  const indexRef = useRef(index);
  indexRef.current = index;

  const goTo = useCallback(
    (target: number) => {
      if (count < 2) {
        setIndex(0);
        return;
      }
      const current = indexRef.current;
      const resolved = wrap
        ? ((target % count) + count) % count
        : Math.max(0, Math.min(target, last));
      if (resolved === current) return;
      setDirection(resolved > current ? 1 : -1);
      setIndex(resolved);
    },
    [count, wrap, last],
  );

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  /* Keep the index legal when the slide count (or visible-card count) changes. */
  useEffect(() => {
    if (index > last) setIndex(last);
  }, [index, last]);

  const autoplay = Boolean(interval) && count > 1 && !paused && !reduce;

  useEffect(() => {
    if (!autoplay) return;
    if (!wrap && index >= last) return;
    const timer = window.setTimeout(next, interval);
    return () => window.clearTimeout(timer);
  }, [autoplay, interval, index, last, wrap, next]);

  const viewportProps: SliderViewportProps = {
    role: "group",
    tabIndex: 0,
    "aria-roledescription": "carousel",
    // Horizontal drags are ours, vertical scroll stays with the page.
    style: { touchAction: "pan-y" },
    onKeyDown: (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    },
    onPointerEnter: () => {
      if (pauseOnHover) setPaused(true);
    },
    onPointerLeave: () => {
      swipe.current = null;
      if (pauseOnHover) setPaused(false);
    },
    onPointerDown: (event) => {
      swipe.current = { x: event.clientX, y: event.clientY };
    },
    onPointerUp: (event) => {
      const start = swipe.current;
      swipe.current = null;
      if (!start) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (Math.abs(dx) < 44 || Math.abs(dx) <= Math.abs(dy)) return;
      if (dx < 0) next();
      else prev();
    },
    onPointerCancel: () => {
      swipe.current = null;
    },
  };

  return { index, count, direction, autoplay, interval, next, prev, goTo, viewportProps };
}
