"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

const formatNumber = (value: number) => value.toLocaleString("en-US");

export interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Animated count-up number, triggered when scrolled into view.
 * Renders the final value immediately for reduced-motion users.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(textRef, { once: true, margin: "-60px 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = textRef.current;
    if (!node) return;
    if (!inView || reduce) {
      node.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = `${prefix}${formatNumber(Math.round(latest))}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, duration, prefix, suffix]);

  return (
    <span ref={textRef} className={cn("tabular-nums", className)}>
      {`${prefix}${formatNumber(value)}${suffix}`}
    </span>
  );
}