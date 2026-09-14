import { crushers } from "@/config/crushers";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Crushers-branded 404 for unknown routes under /crushers/**. */
export default function CrushersNotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-[#1B1E22] text-white">
      <Container className="py-24 text-center">
        <p className="font-eyebrow text-[#E4A11B]">404 · SCREENED OUT</p>
        <h1 className="mt-5 font-display text-6xl font-bold uppercase tracking-[-0.01em]">No grade here.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/75">
          This route comes up empty — like a screen with nothing left to pass.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/crushers">
            <Icon name="stones" className="h-4 w-4" />
            Back to {crushers.shortName}
          </Button>
          <Button href="/" variant="ghost-light">
            <Icon name="chevron-left" className="h-4 w-4" />
            Back to the group
          </Button>
        </div>
      </Container>
    </section>
  );
}