import { cn } from "@/lib/cn";

/**
 * Honest placeholder banner. Shown anywhere a business still uses demo copy so
 * that "placeholder" content is never mistaken for facts about the business.
 */
export interface PlaceholderNoticeProps {
  note: string;
  className?: string;
  dark?: boolean;
}

export function PlaceholderNotice({ note, className, dark = false }: PlaceholderNoticeProps) {
  return (
    <div
      role="note"
      className={cn(
        "mt-4 flex items-start gap-2 rounded-md border px-3 py-2.5",
        dark ? "border-white/15 bg-white/10" : "border-line-var bg-brand-faint",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("text-sm leading-none", dark ? "text-white" : "text-accent")}>
        ◆
      </span>
      <p className={cn("text-xs leading-relaxed", dark ? "text-white/70" : "text-muted-var")}>
        {note}
      </p>
    </div>
  );
}