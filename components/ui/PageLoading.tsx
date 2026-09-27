/**
 * Shared route-level loading UI. Rendered inside the owning business layout,
 * so it inherits that site's brand tokens (bg-surface, border-brand …) and
 * reads like part of the site while a page streams in.
 */
export function PageLoading({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="grid min-h-[60vh] place-items-center bg-surface"
    >
      <div className="flex flex-col items-center gap-4">
        <span
          aria-hidden="true"
          className="h-9 w-9 animate-spin rounded-full border-2 border-brand border-r-transparent motion-reduce:animate-none"
        />
        <p className="text-sm text-muted-var">{label}&#8230;</p>
      </div>
    </div>
  );
}
