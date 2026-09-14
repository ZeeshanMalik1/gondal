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

/** Interior page header for the salt site — charcoal band, thin rose rule. */
export function SaltInteriorHero({ eyebrow, title, lead, current }: SaltInteriorHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#D6A08A]/25 bg-surface-dark text-white">
      <Container className="pt-14 pb-16 sm:pt-16 sm:pb-20">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/salt" className="hover:text-white">Salt Works</Link>
            <Icon name="chevron-right" className="h-3 w-3" />
            <span className="text-[#D6A08A]" aria-current="page">{current}</span>
          </nav>
          <div className="mt-5 h-px w-24 bg-[#D6A08A]" aria-hidden="true" />
          {eyebrow ? <p className="mt-4 font-eyebrow text-[#D6A08A]">{eyebrow}</p> : null}
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}