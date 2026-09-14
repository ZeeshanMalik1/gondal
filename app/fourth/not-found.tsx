import { fourth } from "@/config/fourth";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Black Gold–branded 404 for unknown routes under /fourth/**. */
export default function FourthNotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-[#14151A] text-white">
      <Container className="py-24 text-center">
        <p className="font-eyebrow text-[#C9A227]">404 · EMPTY TANKER</p>
        <h1 className="mt-5 font-display text-5xl font-semibold sm:text-6xl">Nothing on this route.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">
          No material, no page — this route ships nothing.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/fourth">
            <Icon name="droplet" className="h-4 w-4" />
            Back to {fourth.shortName}
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