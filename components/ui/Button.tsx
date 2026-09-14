import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  /** true for external / mailto / tel links. */
  external?: boolean;
  variant?: "brand" | "outline" | "ghost-light" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Shared button primitive. Renders an <a> when `href` is given, otherwise a
 * <button>. Visual variants read the brand tokens set by each business layout.
 */
export function Button({
  children,
  href,
  external = false,
  variant = "brand",
  size = "md",
  className,
  ariaLabel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn("btn", `btn-${variant}`, `btn-${size}`, className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}