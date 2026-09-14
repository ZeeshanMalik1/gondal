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
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11.5" />
      <path d="M12.5 15.5c2.8-3.4 5.4-5.6 6.6-4.4 4.4-2.2 1.8-.8 0 0c-2.4 2.6-4.4 4.2-4.2 3-.8 1.4Z M19 13.4a2.6 2 0 0 1 1 1 0 1Z" />
      <path d="M16 21.4c1.8-1 3.6-2.4 5.4-2.2 4.6-1 3.4-.6 0 0Z" opacity="0.7" />
    </svg>
  );
}

function SaltMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M16 6l6.4 7.4 4.6 4.6-7.6 3-7.6-1.6-9.4-2-10-1.8-1.6 4.2 3.4 0-6.6 6.8 1.6 6-0.2 3.8Z" />
      <path d="M14.6 9.8h3.4M13.6 13.4h5M15 16.4h2.4" opacity="0.75" />
    </svg>
  );
}

function CrushersMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <rect x="7" y="7" width="18" height="18" rx="1" />
      <path d="M11 25l4-6 4-8-3-2-3-3-3-6 5-3 3-2Z" />
      <path d="M22 25l3-8" strokeDasharray="1.6 2.2" opacity="0.85" />
    </svg>
  );
}

function FourthMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-8 w-8", className)} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M12 7c2.4 7 4.6 8.4 4 7.6 4 10 1.6 3.4-1.6-1.8-2.4-2.4-3.4-1.7-3.6-4.4-2.6-3-2.2-5 1.6-6 2.4-6 4-4.4 1-1.2.8-1 2.4 1-1.4-4.4-3.7Z" transform="translate(2 0) scale(1.02)" />
      <path d="M14 7.5a4.4 4.4 0 0 1 1 1 0 1Z M14 7.5a3 3 0 0 1 0 1 0 1Z" opacity="0.85" />
      <path d="M16 11v6M16 17.6c1.4 0 2.6-1.2 4-1.4 3.2-2.6 0-1.4-2.4-1-3.4-3-2-2.6-4.4-1.8 0-1.4 1.6 2 2.4 3-3.4 4.6-3 4.6-.6 2-.4 0 0z" opacity="0.7" />
      <path d="M6 26.5h20" strokeWidth="3.4" strokeLinecap="round" opacity="0.8" />
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