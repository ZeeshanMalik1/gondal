"use client";

import { Button } from "@/components/ui/Button";

export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global error boundary. Kept intentionally calm and brand-neutral so it works
 * for any business; route-level not-found pages keep each site's identity.
 */
export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-surface" id="main-content">
      <section className="mx-auto max-w-xl py-24 text-center">
        <p className="font-eyebrow text-brand">Something went wrong</p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight">
          An unexpected error occurred.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-var">
          The page could not be rendered on this attempt. This is usually temporary —
          you can retry, or head back to the group homepage.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="outline">
            Back to the group
          </Button>
        </div>
      </section>
    </main>
  );
}