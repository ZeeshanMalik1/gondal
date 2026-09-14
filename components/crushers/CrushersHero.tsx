import { crushers } from "@/config/crushers";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Crushers hero — heavy graphite slab, condensed headline, hazard accent. */
export function CrushersHero() {
  return (
    <section className="relative overflow-hidden border-b-[6px] border-[#E4A11B] bg-[#1B1E22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#23262B] via-transparent to-[#101216]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[#E4A11B]" aria-hidden="true" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 900 600" fill="none" stroke="#E4A11B" strokeWidth="1.2">
        <path d="M0 80L900 80M0 170L900 170M0 260L900 260M0 80Q225 260 450 80Q675 260 900 80M0 430Q225 560 450 430Q675 560 900 430" strokeDasharray="14 10" />
      </svg>

      <Container className="relative grid items-center gap-12 pt-14 pb-24 lg:grid-cols-[1fr_0.9fr] lg:pt-20 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#E4A11B]">
              <span className="h-[7px] w-[7px] bg-[#E4A11B]" aria-hidden="true" />
              {crushers.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.96] tracking-[-0.02em] sm:text-7xl">
              {crushers.hero.headline[0]}
              <span className="mt-1 block text-[#E4A11B]">{crushers.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">{crushers.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={crushers.hero.ctaPrimary.href} size="lg">
                {crushers.hero.ctaPrimary.label}
                <Icon name="stones" className="h-4 w-4" />
              </Button>
              <Button href={crushers.hero.ctaSecondary.href} variant="ghost-light" size="lg">
                {crushers.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              <Icon name="pin" className="h-3.5 w-3.5 text-[#E4A11B]" />
              {crushers.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <Figure
            src={crushers.images.hero}
            alt="Aggregate stone pile with machinery — placeholder artwork"
            className="aspect-[4/3] w-full border border-white/15"
            priority
          />
          <div className="absolute -bottom-5 left-4 inline-flex items-center gap-2 bg-[#E4A11B] px-4 py-2 text-sm font-bold uppercase tracking-[0.04em] text-[#16181C]">
            <Icon name="gauge" className="h-4 w-4" />
            Tested per lot
          </div>
        </Reveal>
      </Container>

      {/* grade strip */}
      <Container className="relative">
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
          {[
            ["01", "Under-spec hold", "No un-tested grade leaves the yard."],
            ["02", "Weighed loads", "Ticket on every vehicle, every time."],
            ["03", "Stock on hand", "Order one grade or a full take-off."],
          ].map(([no, title, line], i) => (
            <Reveal key={title} delay={i * 0.08} className="bg-[#1B1E22] px-6 py-5">
              <p className="font-display text-3xl font-bold text-[#E4A11B]">{no}</p>
              <h2 className="mt-1 font-display text-lg font-bold uppercase text-white">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-white/60">{line}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}