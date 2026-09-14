import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Corporate landing hero — dark, topographic backdrop, serif headline. */
export function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      <Figure
        src="/images/corporate/hero-topo.svg"
        alt="Decorative topographical line-work of Pakistan’s terrain"
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-dark to-transparent" aria-hidden="true" />

      <Container className="relative pb-40 pt-24 sm:pb-56 sm:pt-32">
        <Reveal>
          <p className="inline-flex items-center gap-3 font-eyebrow text-accent">
            <span className="h-px w-14 border-accent" aria-hidden="true" />
            {site.hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight text-balance sm:text-6xl lg:text-[4.6rem]">
            {site.hero.headline[0]}{" "}
            {site.hero.headline[1] ? <em className="italic text-accent">{site.hero.headline[1]}</em> : null}
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">{site.hero.support}</p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={site.hero.ctaPrimary.href} variant="accent" size="lg">
              {site.hero.ctaPrimary.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <Button href={site.hero.ctaSecondary.href} variant="outline" size="lg">
              {site.hero.ctaSecondary.label}
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50">{site.hero.note}</p>
        </Reveal>
      </Container>

      {/* hero meta strip */}
      <div className="relative border-t border-white/10 bg-black/30">
        <Container className="grid grid-cols-2 gap-10 py-8 lg:grid-cols-4">
          {[
            { value: site.est, label: "Established in" },
            { value: "04", label: "Operating businesses" },
            { value: "38+", label: "Years of building" },
            { value: "[x]", label: "Operational locations" },
          ].map((item) => (
            <Reveal key={item.label} delay={0.1} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-semibold text-white">{item.value}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-white/55">{item.label}</span>
            </Reveal>
          ))}
        </Container>
      </div>
    </section>
  );
}