import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export interface FourthInteriorHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  current: string;
}

/** Interior header for the black gold site — oil band with gold rule. */
export function FourthInteriorHero({ eyebrow, title, lead, current }: FourthInteriorHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#C9A227] bg-[#14151A] text-white">
      <Container className="pt-14 pb-16 sm:pt-16 sm:pb-20">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/fourth" className="hover:text-white">Black Gold Supply</Link>
            <Icon name="chevron-right" className="h-3 w-3" />
            <span className="text-[#C9A227]" aria-current="page">{current}</span>
          </nav>
          <div className="mt-5 h-[3px] w-24 bg-[#C9A227]" aria-hidden="true" />
          {eyebrow ? <p className="mt-4 font-eyebrow text-[#C9A227]">{eyebrow}</p> : null}
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}