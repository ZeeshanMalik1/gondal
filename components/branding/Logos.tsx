import { cn } from "@/lib/cn";

/**
 * Brand marks + wordmark lockups for the group and each business.
 *
 * Wordmarks are real HTML text so they inherit the site's display font and
 * remain crisp at any size; marks are inline SVG strokes using currentColor.
 */

type Tone = "on-dark" | "on-light";

/* ---- Marks ---------------------------------------------------------------- */

function CorporateMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="8" y="8" width="16" height="16" transform="rotate(45 16 16)" rx="1" />
      <path d="M16 8v16 M13.2 11.2h5.6" />
    </svg>
  );
}

function FishMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="16" cy="16" r="11.5" />
      <path d="M8.5 16c4-5.2 11-5.2 15 0-4 5.2-11 5.2-15 0Z" />
      <path d="M8.5 16 5.6 12.4M8.5 16 5.6 19.6" />
      <path d="M18.5 12.4c1.5 2.1 1.5 5.1 0 7.2" />
      <circle cx="21.4" cy="15" r="0.95" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SaltMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 6 26 11.5 16 17 6 11.5Z" />
      <path d="M6 11.5 16 17v9.5L6 21Z" />
      <path d="M26 11.5 16 17v9.5l10-5.5Z" />
      <path d="M16 6v11" opacity="0.55" />
    </svg>
  );
}

function CrushersMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 5 23 8 27 15 24.5 23 17 27 9 24 5 17 9 8.5Z" />
      <path d="M20.5 7.2 16.5 16 20 26.2" />
    </svg>
  );
}

function FourthMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 4.5C20.5 10.5 23.5 14.3 23.5 17.7A7.5 7.5 0 0 1 8.5 17.7C8.5 14.3 11.5 10.5 16 4.5Z" />
      <path d="M12.2 19.4a4.6 4.6 0 0 0 3.1 4" opacity="0.7" />
      <path d="M5 28h22" strokeWidth="3" opacity="0.8" />
    </svg>
  );
}

/* ---- Lockup ---------------------------------------------------------------- */

export interface BrandLockupProps {
  mark: "group" | "fish" | "salt" | "crushers" | "fourth";
  name: string;
  sub?: string;
  tone?: Tone;
  className?: string;
  /** Compact height (default h-8). */
  markClassName?: string;
}

const MARKS = {
  group: CorporateMark,
  fish: FishMark,
  salt: SaltMark,
  crushers: CrushersMark,
  fourth: FourthMark,
};

export function BrandLockup({
  mark,
  name,
  sub,
  tone = "on-dark",
  className,
  markClassName,
}: BrandLockupProps) {
  const Mark = MARKS[mark];
  const primary = tone === "on-dark" ? "text-white" : "text-ink";
  const muted = tone === "on-dark" ? "text-white/60" : "text-muted-var";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className={markClassName} />
      <span className="leading-none">
        <span className={cn("font-display text-xl font-semibold tracking-tight block", primary)}>
          {name}
        </span>
        {sub ? (
          <span className={cn("mt-0.5 block text-[0.62rem] uppercase tracking-[0.22em]", muted)}>
            {sub}
          </span>
        ) : null}
      </span>
    </span>
  );
}