import { salt } from "@/config/salt";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Salt-branded 404 for unknown routes under /salt/**. */
export default function SaltNotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-surface-dark text-white">
      <Container className="py-24 text-center">
        <p className="font-eyebrow text-[#D6A08A]">404 · Not found</p>
        <h1 className="mt-5 font-display text-5xl font-semibold sm:text-6xl">A seam that isn’t there.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">
          No ore, no page — this route doesn’t exist in the works’ catalogue.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/salt">
            <Icon name="crystal" className="h-4 w-4" />
            Back to {salt.shortName}
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