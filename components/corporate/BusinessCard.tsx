import Link from "next/link";
import type { CSSProperties } from "react";
import type { BusinessConfig } from "@/config/types";
import { cn } from "@/lib/cn";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";

export interface BusinessCardProps {
  business: BusinessConfig;
  index: number;
  className?: string;
  large?: boolean;
}

/**
 * Large interactive panel for the corporate homepage "Our Businesses" section.
 * The business's own colours are applied to the card subtree via custom
 * properties, so each panel previews its business's visual identity.
 */
export function BusinessCard({ business, index, className, large=false }: BusinessCardProps) {
  return (
    <Link
      href={`/${business.slug}`}
      aria-label={`Explore ${business.name} — ${business.industry}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-surface-dark text-left text-white",
        className,
      )}
      style={
        {
          "--brand-primary": business.colors.primary,
          "--accent": business.colors.accent,
        } as CSSProperties
      }
    >
      <Figure
        src={business.images.card}
        alt={`${business.name} — placeholder artwork`}
        className={cn("w-full", large ? "aspect-[16/9]" : "aspect-[16/10]")}
        imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
      />

      {/* top meta row */}
      <div className="absolute inset-x-3 top-0 flex items-center justify-between p-3">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70">
          Business {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border px-2.5 py-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-white/80" style={{ borderColor: "var(--brand-primary)" }}>
          {business.industryTag}
        </span>
      </div>

      {/* bottom caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {business.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-snug text-white/75">
          {business.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
          <span className="border-b-[3px] border-brand pb-0.5 transition-[padding] duration-300 group-hover:pb-1">
            Explore business
          </span>
          <Icon
            name="arrow-right"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}