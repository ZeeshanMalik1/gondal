import Link from "next/link";
import { fish } from "@/config/fish";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Fish-branded 404 — shown for any unknown route under /fish/**. */
export default function FishNotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-brand-soft">
      <Container className="py-24 text-center">
        <p className="font-eyebrow text-brand">404 · Not found</p>
        <h1 className="mt-5 font-display text-5xl font-semibold text-ink sm:text-6xl">
          This pond has no fish in it.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-var">
          The page you were looking for doesn’t exist on the fish farm website. Try the hatch below.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/fish">
            <Icon name="fish" className="h-4 w-4" />
            Back to {fish.shortName}
          </Button>
          <Button href="/" variant="outline">
            <Icon name="chevron-left" className="h-4 w-4" />
            Back to the group
          </Button>
        </div>
      </Container>
    </section>
  );
}