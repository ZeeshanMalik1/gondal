"use client";

import type { StatItem } from "@/config/types";
import { cn } from "@/lib/cn";
import { Counter } from "@/components/motion/Counter";

/**
 * Config-driven row of animated statistics. Presentational, so visual styling
 * is fully controlled by the className props of the calling site.
 */
export interface StatBlockProps {
  stats: StatItem[];
  className?: string;
  itemClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function StatBlock({
  stats,
  className,
  itemClassName,
  valueClassName,
  labelClassName,
}: StatBlockProps) {
  return (
    <dl className={cn("grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {stats.map((s) => (
        <div key={s.label} className={itemClassName}>
          <dt className="sr-only">{s.label}</dt>
          <dd className={cn("font-display text-3xl sm:text-4xl font-semibold", valueClassName)}>
            <Counter value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
          </dd>
          <p className={cn("mt-2 text-sm text-muted-var", labelClassName)}>{s.label}</p>
        </div>
      ))}
    </dl>
  );
}