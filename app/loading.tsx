/**
 * Loading UI — shown while / streams. Uses the corporate tokens so it matches
 * the page it precedes.
 */
export default function Loading() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-surface" id="main-content" aria-busy="true">
      <div
        role="status"
        aria-label="Loading"
        className="flex flex-col items-center gap-5"
      >
        <span
          aria-hidden="true"
          className="h-10 w-10 animate-spin rounded-full border-2 border-brand border-r-transparent"
        />
        <p className="text-sm text-muted-var">Loading the group&#8230;</p>
      </div>
    </main>
  );
}