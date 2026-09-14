import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export interface CrushersInteriorHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  current: string;
}

/** Interior header for the crushers site — graphite slab with amber tick. */
export function CrushersInteriorHero({ eyebrow, title, lead, current }: CrushersInteriorHeroProps) {
  return (
    <section className="relative overflow-hidden border-b-[6px] border-[#E4A11B] bg-[#1B1E22] text-white">
      <Container className="pt-14 pb-16 sm:pt-16 sm:pb-20">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/crushers" className="hover:text-white">Crushers</Link>
            <span className="text-[#E4A11B]">/</span>
            <span className="text-white" aria-current="page">{current}</span>
          </nav>
          <div className="mt-5 h-[7px] w-20 bg-[#E4A11B]" aria-hidden="true" />
          {eyebrow ? <p className="mt-4 font-eyebrow text-[#E4A11B]">{eyebrow}</p> : null}
          <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[1.02] tracking-[-0.01em] sm:text-6xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{lead}</p> : null}
        </Reveal>
      </Container>
    </section>
  );
}