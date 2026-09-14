import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Semantic <section> wrapper. Spacing is left to the caller. */
export interface SectionProps {
  id?: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export function Section({ id, className, ariaLabel, children }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("relative", className)}>
      {children}
    </section>
  );
}

export interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Render as inline element (e.g. inside a card). */
  as?: "p" | "span";
}

export function Eyebrow({ children, className, as = "p" }: EyebrowProps) {
  const Tag = as === "span" ? "span" : "p";
  return <Tag className={cn("font-eyebrow text-brand", className)}>{children}</Tag>;
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  titleClassName,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mt-1">{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-var">{lead}</p>
      ) : null}
    </div>
  );
}