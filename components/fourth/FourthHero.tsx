import { fourth } from "@/config/fourth";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Black Gold Supply hero — deep oil slab, gold rules, tank-yard artwork. */
export function FourthHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#C9A227] bg-[#14151A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1B1B20] via-[#14151A] to-[#0C0C0F]" aria-hidden="true" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-10" viewBox="0 0 900 600" fill="none" stroke="#C9A227" strokeWidth="1.1">
        <path d="M0 120C220 300 420 200 680 380 900 260" strokeDasharray="16 12" />
        <path d="M0 420C240 540 480 470 720 580 900 500" strokeDasharray="16 12" />
      </svg>

      <Container className="relative grid items-center gap-12 pt-14 pb-24 lg:grid-cols-[1fr_0.9fr] lg:pt-20 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#C9A227]">
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" aria-hidden="true" />
              {fourth.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {fourth.hero.headline[0]}<span className="mt-1 block italic text-[#C9A227]">{fourth.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{fourth.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={fourth.hero.ctaPrimary.href} size="lg">
                {fourth.hero.ctaPrimary.label}
                <Icon name="droplet" className="h-4 w-4" />
              </Button>
              <Button href={fourth.hero.ctaSecondary.href} variant="ghost-light" size="lg">
                {fourth.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55">
              <Icon name="pin" className="h-3.5 w-3.5 text-[#C9A227]" />
              {fourth.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <Figure
            src={fourth.images.hero}
            alt="Heated bitumen storage tanks — placeholder artwork"
            className="aspect-[4/3] w-full border border-[#C9A227]/40"
            priority
          />
          <p className="absolute -bottom-5 left-4 inline-flex items-center gap-2 rounded-md bg-[#C9A227] px-4 py-2 text-sm font-semibold text-[#14151A]">
            <Icon name="gauge" className="h-4 w-4" />
            Sampled on every dispatch
          </p>
        </Reveal>
      </Container>

      {/* product-line strip */}
      <Container className="relative">
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
          {[
            ["Bulk", "Heated tanker & storage supply"],
            ["Drummed", "Barrel line for worksite delivery"],
            ["Monthly", "Standing agreements for plants"],
          ].map(([title, line], i) => (
            <Reveal key={title} delay={i * 0.08} className="bg-[#17171C] px-6 py-5">
              <p className="font-display text-lg font-bold uppercase text-[#C9A227]">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">{line}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}