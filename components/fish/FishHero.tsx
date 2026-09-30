"use client";

import { AnimatePresence, motion } from "framer-motion";
import { fish } from "@/config/fish";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Hero slides — the farm plate first, then the pond gallery. */
const SLIDES = [
  {
    src: fish.images.hero,
    alt: "Freshwater fish pond with clear water — placeholder artwork",
    caption: `${fish.name} · ${fish.est}`,
  },
  ...fish.images.gallery.slice(0, 4),
];

const pad = (value: number) => String(value).padStart(2, "0");

/** Fish Farm hero — light aquatic split with a framed pond image slider. */
export function FishHero() {
  const { index, count, goTo, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 6000,
  });

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden border-b border-line-var bg-gradient-to-br from-brand-soft via-surface to-white">
      {/* faint wave lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-brand opacity-[0.08]"
        viewBox="0 0 800 600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M0 140 C 130 120 260 150 400 130 C 530 100 660 140 800 120" />
        <path d="M0 210 C 130 190 260 220 400 200 C 530 170 660 210 800 190" />
        <path d="M0 300 C 130 280 260 310 400 290 C 530 260 660 300 800 280" />
        <path d="M0 520 C 130 500 260 530 400 510 C 530 480 660 520 800 500" transform="translate(0 40)" />
      </svg>

      <Container className="relative grid items-center gap-12 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16 lg:pb-24">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-brand">
              <Icon name="wave" className="h-4 w-4" />
              {fish.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {fish.hero.headline[0]}{" "}
              <em className="italic font-medium text-brand">{fish.hero.headline[1]}</em>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-var">{fish.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button href={fish.hero.ctaPrimary.href} size="lg">
                {fish.hero.ctaPrimary.label}
                <Icon name="fish" className="h-4 w-4" />
              </Button>
              <Button href={fish.hero.ctaSecondary.href} variant="outline" size="lg">
                {fish.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-var">
              <Icon name="pin" className="h-3.5 w-3.5 text-brand" />
              {fish.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          {/* hero image slider */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-line-var outline-none"
            {...viewportProps}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.9 }, scale: { duration: 7, ease: "linear" } }}
              >
                <Figure src={slide.src} alt={slide.alt} className="h-full w-full" priority />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute left-4 top-4 max-w-[75%]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={slide.src}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-medium text-ink shadow-[0_8px_24px_rgba(12,59,65,0.18)]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <span className="truncate">{slide.caption}</span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-brand/30 bg-brand-faint" aria-hidden="true" />
          <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full bg-brand-soft px-5 py-2.5 text-sm font-semibold text-brand">
            <Icon name="drop" className="h-4 w-4" />
            Water-to-market in hours
          </div>

          {/* droplet pager + circular controls */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1.5">
              {SLIDES.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${item.caption}`}
                  aria-current={i === index ? "true" : undefined}
                  className="group flex min-h-[44px] items-center px-0.5"
                >
                  <span
                    className={cn(
                      "block h-2.5 rounded-full transition-all duration-300",
                      i === index ? "w-9 bg-brand" : "w-2.5 bg-brand/25 group-hover:bg-brand/50",
                    )}
                  />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-display text-sm text-muted-var">
                {pad(index + 1)} <span className="opacity-60">/ {pad(count)}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous hero image"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-var bg-white text-brand transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon name="chevron-left" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next hero image"
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-var bg-white text-brand transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <Icon name="chevron-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            Hero image {index + 1} of {count}: {slide.caption}
          </p>
        </Reveal>
      </Container>

      {/* stat chips */}
      <Container className="relative">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line-var bg-surface-dark sm:grid-cols-3">
          {fish.stats.slice(0, 3).map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="bg-white px-6 py-5">
              <p className="font-display text-3xl font-semibold text-ink">
                <span>{stat.prefix ?? ""}</span>{stat.value}<span className="text-ink">{stat.suffix ?? ""}</span>
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted-var">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}