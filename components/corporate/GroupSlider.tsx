"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { businesses } from "@/config";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const SLIDES = businesses.map((business) => ({
  slug: business.slug,
  name: business.name,
  tagline: business.tagline,
  industry: business.industry,
  summary: business.summary,
  image: business.images.card,
  highlight: business.stats[0],
}));

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Corporate showcase slider — editorial, unhurried, gold-on-charcoal.
 *
 * The plate crossfades while slowly settling out of a 6% zoom (never a hard
 * cut), the copy swaps between slides, and a hairline rule under the numbered
 * rail fills across the auto-advance interval.
 */
export function GroupSlider() {
  const { index, count, direction, autoplay, interval, goTo, next, prev, viewportProps } =
    useSlider({ count: SLIDES.length, interval: 7000 });

  const slide = SLIDES[index];

  return (
    <Section
      ariaLabel="The group at a glance"
      className="border-y border-white/10 bg-surface-dark text-white"
    >
      <Container className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-accent">
              <span className="h-px w-12 bg-accent" aria-hidden="true" />
              The group at a glance
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Four companies, four industries —{" "}
              <em className="italic text-accent">one standard.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-4">
            <span className="font-display text-sm text-white/50">
              {pad(index + 1)} / {pad(count)}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous business"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-accent hover:text-accent"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next business"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-accent hover:text-accent"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-12 grid gap-10 outline-none lg:grid-cols-12 lg:items-center lg:gap-14"
          {...viewportProps}
        >
          {/* copy */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.slug}
                initial={{ opacity: 0, y: 20 * direction }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 * direction }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="font-eyebrow text-white/45">{slide.industry}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {slide.name}
                </h3>
                <p className="mt-3 font-display text-lg italic text-accent">{slide.tagline}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-white/70">{slide.summary}</p>

                {slide.highlight ? (
                  <p className="mt-7 flex items-baseline gap-3 border-l-2 border-accent pl-4">
                    <span className="font-display text-3xl font-semibold text-white">
                      {slide.highlight.prefix}
                      {slide.highlight.value}
                      {slide.highlight.suffix}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                      {slide.highlight.label}
                    </span>
                  </p>
                ) : null}

                <Link
                  href={`/${slide.slug}`}
                  className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-accent transition-all hover:gap-3.5 hover:text-white"
                >
                  Visit {slide.name}
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* numbered rail */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {SLIDES.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${item.name}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors",
                    i === index ? "text-accent" : "text-white/40 hover:text-white/70",
                  )}
                >
                  <span className="font-display text-sm">{pad(i + 1)}</span>
                  <span className="hidden max-w-[6rem] truncate sm:inline">
                    {item.name.split(" ").slice(-1)[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* auto-advance rule */}
            <div className="relative mt-5 h-[2px] w-full bg-white/15">
              {autoplay ? (
                <motion.span
                  key={index}
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: interval / 1000, ease: "linear" }}
                />
              ) : (
                <span
                  className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-500"
                  style={{ width: `${((index + 1) / count) * 100}%` }}
                />
              )}
            </div>
          </div>

          {/* plate */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/12 bg-black/30">
              <AnimatePresence initial={false}>
                <motion.div
                  key={slide.slug}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.7 }, scale: { duration: 7, ease: "linear" } }}
                >
                  <Figure
                    src={slide.image}
                    alt={`${slide.name} — ${slide.tagline}`}
                    className="h-full w-full"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <p className="sr-only" aria-live="polite">
              Business {index + 1} of {count}: {slide.name}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
