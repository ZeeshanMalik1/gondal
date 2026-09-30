"use client";

import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/config/site";
import { businesses } from "@/config";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Hero background slides — the group terrain plate, then each business. */
const SLIDES = [
  {
    src: "/images/corporate/hero-topo.svg",
    label: site.hero.eyebrow,
    alt: "Decorative topographical line-work of Pakistan’s terrain",
  },
  ...businesses.map((business) => ({
    src: business.images.card,
    label: business.name,
    alt: `${business.name} — ${business.tagline}`,
  })),
];

const pad = (value: number) => String(value).padStart(2, "0");

/** Corporate landing hero — dark backdrop driven by a full-bleed image slider. */
export function CorporateHero() {
  const { index, count, goTo, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 7000,
  });

  const slide = SLIDES[index];

  return (
    <section
      className="relative overflow-hidden bg-surface-dark text-white"
      aria-label="Group hero gallery"
      {...viewportProps}
    >
      {/* background image slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 8, ease: "linear" } }}
        >
          <Figure src={slide.src} alt={slide.alt} className="h-full w-full" priority />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-dark to-transparent" aria-hidden="true" />

      <Container className="relative pb-40 pt-24 sm:pb-56 sm:pt-32">
        <Reveal>
          <p className="inline-flex items-center gap-3 font-eyebrow text-accent">
            <span className="h-px w-14 border-accent" aria-hidden="true" />
            {site.hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.6rem]">
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
            <Button
              href={site.hero.ctaSecondary.href}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-accent hover:text-accent"
            >
              {site.hero.ctaSecondary.label}
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/50">{site.hero.note}</p>
        </Reveal>

        {/* hero image-slider controls */}
        <Reveal delay={0.32}>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-1">
              {SLIDES.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${item.label}`}
                  aria-current={i === index ? "true" : undefined}
                  className="group flex min-h-[44px] items-center px-0.5"
                >
                  <span
                    className={cn(
                      "block h-[3px] w-7 transition-colors duration-300 lg:w-9",
                      i === index ? "bg-accent" : "bg-white/25 group-hover:bg-white/50",
                    )}
                  />
                </button>
              ))}
            </div>
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/55">
              {pad(index + 1)} / {pad(count)} · <span className="text-accent">{slide.label}</span>
            </p>
            <div className="flex items-center gap-2 sm:ml-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous hero image"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:text-accent"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next hero image"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition hover:border-accent hover:text-accent"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            Hero image {index + 1} of {count}: {slide.label}
          </p>
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