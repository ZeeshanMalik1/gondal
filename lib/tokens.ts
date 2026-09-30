import type { CSSProperties } from "react";
import type { BrandColors } from "@/config/types";

/**
 * Maps a BrandColors config onto CSS custom properties consumed by the shared
 * primitives in globals.css. Each layout applies these on its own wrapper, so
 * the same component base renders with completely different palettes.
 */
export function colorTokens(colors: BrandColors): Record<string, string> {
  return {
    "--brand-primary": colors.primary,
    "--brand-deep": colors.primaryDeep,
    "--accent": colors.accent,
    "--brand-soft": colors.soft,
    "--brand-faint": colors.faint,
    "--surface": colors.surface,
    "--surface-dark": colors.surfaceDark,
    "--paper": colors.paper,
    "--ink": colors.ink,
    "--muted": colors.muted,
    "--line": colors.line,
    "--on-brand": colors.onBrand,
    "--btn-radius": colors.btnRadius,
    "--card-radius": colors.cardRadius ?? colors.btnRadius,
    "--grid-gap": colors.gridGap ?? "1.25rem",
  };
}

/**
 * Full style map for a layout wrapper: display + body font and the entire brand
 * palette. The wrapper also resolves its own `font-family` from `--font-body`,
 * because the inherited value from <body> is already computed and cannot be
 * re-evaluated with the wrapper's local variable.
 */
export function layoutStyle(
  displayFont: string,
  bodyFont: string,
  colors: BrandColors,
): CSSProperties {
  return {
    "--font-display": `"${displayFont}"`,
    "--font-body": `"${bodyFont}"`,
    fontFamily: "var(--font-body, var(--font-sans))",
    ...colorTokens(colors),
  } as CSSProperties;
}