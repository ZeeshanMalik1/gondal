import Link from "next/link";
import { fish } from "@/config/fish";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export interface FishInteriorHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  current: string;
}

/** Interior page header for the fish site — sea band + wave rule. */
export function FishInteriorHero({ eyebrow, title, lead, current }: FishInteriorHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line-var bg-gradient-to-b from-brand-deep via-brand-soft to-surface">
      <Container className="pt-14 pb-16 sm:pt-16 sm:pb-20">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-var">
            <Link href="/fish" className="hover:text-brand">Fish Farm</Link>
            <Icon name="chevron-right" className="h-3 w-3" />
            <span className="text-brand" aria-current="page">{current}</span>
          </nav>
          {eyebrow ? <p className="mt-4 font-eyebrow text-brand">{eyebrow}</p> : null}
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-var">{lead}</p> : null}
        </Reveal>
      </Container>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-brand-soft to-transparent" />
    </section>
  );
}