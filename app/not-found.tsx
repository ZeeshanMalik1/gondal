import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Corporate 404 — any unknown route outside a business prefix. */
export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-surface-dark text-white">
      <Container className="py-24 text-center">
        <p className="font-eyebrow text-accent">404 · Page not found</p>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          Nothing built on this road yet.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">
          The page you are looking for does not exist — or has not been built yet.
          The group’s companies all start from the homepage.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">
            <Icon name="chevron-left" className="h-4 w-4" />
            Back to the group
          </Button>
          <Button href="/#businesses" variant="ghost-light">
            Explore our businesses
          </Button>
        </div>
      </Container>
    </section>
  );
}