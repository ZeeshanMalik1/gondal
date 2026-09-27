import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export interface SaltInteriorHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  current: string;
}

/**
 * Interior page header for the salt site — crimson band, breadcrumb, a bronze
 * rule and an uppercase display title.
 */
export function SaltInteriorHero({ eyebrow, title, lead, current }: SaltInteriorHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/70 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative py-14 sm:py-18">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70">
            <Link href="/salt" className="hover:text-white">Salt Works</Link>
            <Icon name="chevron-right" className="h-3 w-3" />
            <span className="text-accent" aria-current="page">{current}</span>
          </nav>
          <div className="mt-5 h-px w-24 bg-accent" aria-hidden="true" />
          {eyebrow ? <p className="mt-4 font-eyebrow text-accent">{eyebrow}</p> : null}
          <h1 className="mt-3 max-w-4xl font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}
