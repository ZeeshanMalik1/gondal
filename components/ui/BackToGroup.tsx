import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/config";
import { Icon } from "@/components/ui/Icon";

/**
 * "Back to the group" link used at the top of every business site and in the
 * business footers. Keeps the parent-group connection visible but subtle.
 */
export interface BackToGroupProps {
  className?: string;
  /** Adds a separator line before the link (utility-strip look). */
  separators?: boolean;
  dark?: boolean;
}

export function BackToGroup({ className, separators = false, dark = false }: BackToGroupProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity",
        className,
      )}
      aria-label={`Back to ${site.name} — the parent group`}
    >
      <Icon name="chevron-left" className="h-4 w-4" />
      <span>
        Back to <span className={dark ? "text-surface-dark" : "text-brand"}>Gondal Group</span>
      </span>
      {separators ? <span className="mx-1 text-muted-var" aria-hidden="true">·</span> : null}
    </Link>
  );
}