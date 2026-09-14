"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Travel distance in px; set 0 for a pure fade. */
  y?: number;
  duration?: number;
  once?: boolean;
}

/**
 * Subtle, performant scroll-reveal. Fully disabled (content always visible)
 * when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}