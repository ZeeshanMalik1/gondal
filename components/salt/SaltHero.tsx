"use client";

import { AnimatePresence, motion } from "framer-motion";
import { salt } from "@/config/salt";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Hero slides — the yard plate first, then the mine-to-market gallery. */
const SLIDES = [
  {
    src: salt.images.hero,
    alt: "Large pile of pink rock salt at the works yard",
    caption: "Rock salt — bulk supply",
  },
  ...salt.images.gallery.slice(0, 4),
];

const pad = (value: number) => String(value).padStart(2, "0");

const GRADES = [
  {
    no: "01",
    grade: "Food grade",
    line: "Himalayan pink & iodised table salt",
  },
  {
    no: "02",
    grade: "Industrial",
    line: "Rock salt for chemical & processing",
  },
  {
    no: "03",
    grade: "Infrastructure",
    line: "De-icing & road salt for cold markets",
  },
];

/**
 * Home hero — dark mineral band with a two-column grid: headline block beside
 * the hero plate, closed by a three-up grade strip on the same grid.
 */
export function SaltHero() {
  const { index, count, direction, autoplay, interval, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 6500,
  });

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-surface-dark text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-deep via-surface-dark to-surface-dark"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-accent">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              {salt.hero.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              {salt.hero.headline[0]}
              <span className="mt-2 block text-accent">{salt.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{salt.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={salt.hero.ctaPrimary.href} size="lg">
                {salt.hero.ctaPrimary.label}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href={salt.hero.ctaSecondary.href} variant="outline" size="lg" className="border-white/30 text-white hover:border-accent hover:text-accent">
                {salt.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/50">
              <Icon name="pin" className="h-3.5 w-3.5 text-accent" />
              {salt.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          {/* hero image slider — sharp plate, direction-aware slide */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--card-radius)] border border-white/15 outline-none"
            {...viewportProps}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slide.src}
                className="absolute inset-0"
                custom={direction}
                initial={{ x: direction > 0 ? "8%" : "-8%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? "-8%" : "8%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              >
                <Figure src={slide.src} alt={slide.alt} className="h-full w-full" priority />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-[var(--card-radius)] bg-brand px-4 py-2 text-sm font-semibold text-white">
            <Icon name="gem" className="h-4 w-4" />
            Traceable to the mine
          </p>

          {/* pager: caption, gold hairline, square arrows */}
          <div className="mt-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={slide.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="truncate text-[0.68rem] uppercase tracking-[0.18em] text-white/60"
              >
                <span className="text-accent">{pad(index + 1)}</span> · {slide.caption}
              </motion.p>
            </AnimatePresence>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
              <div className="h-px w-32 bg-white/15 sm:w-44">
                {autoplay ? (
                  <motion.span
                    key={index}
                    className="block h-px bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: interval / 1000, ease: "linear" }}
                  />
                ) : (
                  <span
                    className="block h-px bg-accent transition-[width] duration-500"
                    style={{ width: `${((index + 1) / count) * 100}%` }}
                  />
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous hero image"
                  className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] border border-white/25 text-white transition hover:bg-white hover:text-surface-dark"
                >
                  <Icon name="chevron-left" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next hero image"
                  className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] border border-white/25 text-white transition hover:bg-white hover:text-surface-dark"
                >
                  <Icon name="chevron-right" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="sr-only" aria-live="polite">
              Hero image {index + 1} of {count}: {slide.caption}
            </p>
          </div>
        </Reveal>
      </Container>

      {/* grade strip — same grid, boxed cells on a hairline */}
      <Container className="relative pb-16 lg:pb-24">
        <div className="grid gap-[var(--grid-gap)] sm:grid-cols-3">
          {GRADES.map((item, i) => (
            <Reveal
              key={item.grade}
              delay={i * 0.08}
              className="rounded-[var(--card-radius)] border border-white/12 bg-white/5 px-5 py-5"
            >
              <p className="font-display text-2xl font-medium text-accent">
                {item.no}
                <span className="text-white/35"> /</span>
              </p>
              <h2 className="mt-2 font-display text-lg font-medium text-white">{item.grade}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">{item.line}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
