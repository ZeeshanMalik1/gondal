import { salt } from "@/config/salt";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Salt Works hero — dark mineral band, pink-crystal accent, spec strip. */
export function SaltHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#D6A08A]/25 bg-surface-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#211F1C] via-transparent to-[#3A302C]" aria-hidden="true" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-10" viewBox="0 0 900 600" fill="none" stroke="#D6A08A" strokeWidth="1">
        <path d="M0 90l150 60 220 130 380 60 480 140 620 90 760 60 860 120 900 90" opacity="0.5" />
        <path d="M0 180l120 70 300 110 460 60 640 130 780 70 900 110" opacity="0.7" />
        <path d="M0 470l200 60 420 110 700 70 900 100" />
      </svg>

      <Container className="relative grid items-center gap-12 pt-14 pb-24 lg:grid-cols-[1fr_0.9fr] lg:pt-20 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#D6A08A]">
              <span className="h-px w-10 bg-[#D6A08A]" aria-hidden="true" />
              {salt.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.07] tracking-tight text-white sm:text-5xl md:text-6xl">
              {salt.hero.headline[0]}{" "}
              <span className="italic text-[#D6A08A]">{salt.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{salt.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href={salt.hero.ctaPrimary.href} size="lg">
                {salt.hero.ctaPrimary.label}
                <Icon name="crystal" className="h-4 w-4" />
              </Button>
              <Button href={salt.hero.ctaSecondary.href} variant="outline" size="lg">
                {salt.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/55">
              <Icon name="pin" className="h-3.5 w-3.5 text-[#D6A08A]" />
              {salt.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <Figure
            src={salt.images.hero}
            alt="Cluster of pink rock-salt crystals — placeholder artwork"
            className="aspect-[4/3] w-full rounded-md border border-white/15"
            priority
          />
          <p className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-sm bg-[#211F1C] px-4 py-2 text-sm font-semibold text-[#D6A08A]">
            <Icon name="gem" className="h-4 w-4" />
            Traceable to the mine
          </p>
        </Reveal>
      </Container>

      {/* grade strip */}
      <Container className="relative">
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
          {[
            ["01", "Food grade", "Himalayan pink & iodised table salt"],
            ["02", "Industrial", "Rock salt for chemical & processing"],
            ["03", "Infrastructure", "De-icing & road salt for cold markets"],
          ].map(([no, grade, line], i) => (
            <Reveal key={grade} delay={i * 0.08} className="bg-[#211F1C] px-6 py-5">
              <p className="font-display text-3xl font-semibold text-[#D6A08A]">{no}<span className="text-white/50"> /</span></p>
              <h2 className="mt-1 font-display text-lg font-semibold text-white">{grade}</h2>
              <p className="mt-1 text-xs leading-relaxed text-white/60">{line}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}