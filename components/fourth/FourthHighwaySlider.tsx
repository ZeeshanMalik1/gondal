"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { fourth } from "@/config/fourth";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const SLIDES = fourth.images.gallery;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Black Gold slider — cinematic: a full-bleed stage where the frame drifts in a
 * slow Ken-Burns zoom behind letterboxing gradients, captions are letterspaced
 * gold, and a vertical rail on the right edge tracks the run.
 */
export function FourthHighwaySlider() {
  const { index, count, autoplay, interval, goTo, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 6500,
  });

  const slide = SLIDES[index];

  return (
    <Section ariaLabel="Gallery slider" className="bg-[#14151A] text-white">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#C9A227]">
              <span className="h-px w-12 bg-[#C9A227]" aria-hidden="true" />
              On the road
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              From storage tanks to the paving train.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/fourth/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A227] transition hover:gap-3.5 hover:text-white"
            >
              Where the loads went
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>

      {/* full-bleed stage */}
      <div
        className="relative w-full overflow-hidden outline-none sm:mt-14"
        {...viewportProps}
      >
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.09 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.1, ease: "linear" },
                scale: { duration: 9, ease: "linear" },
              }}
            >
              <Figure
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* letterboxing */}
          <div className="pointer-events-none absolute inset-0 bg-black/35" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#14151A] to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#14151A] via-[#14151A]/70 to-transparent"
            aria-hidden="true"
          />

          {/* caption rail */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 sm:px-8 sm:pb-9">
            <div className="mx-auto w-full max-w-[1600px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#C9A227]">
                    <span className="h-px w-8 bg-[#C9A227]" aria-hidden="true" />
                    {pad(index + 1)} · {slide.alt}
                  </p>
                  <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {slide.caption}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* vertical rail */}
          <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex sm:right-5">
            {SLIDES.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.caption}`}
                aria-current={i === index ? "true" : undefined}
                className="grid h-8 w-6 place-items-center"
              >
                <span
                  className={cn(
                    "block w-[3px] rounded-full transition-all duration-300",
                    i === index ? "h-7 bg-[#C9A227]" : "h-2.5 bg-white/35 hover:bg-white/70",
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* run progress */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
          {autoplay ? (
            <motion.span
              key={index}
              className="block h-[3px] bg-[#C9A227]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: interval / 1000, ease: "linear" }}
            />
          ) : (
            <span
              className="block h-[3px] bg-[#C9A227] transition-[width] duration-500"
              style={{ width: `${((index + 1) / count) * 100}%` }}
            />
          )}
        </div>
      </div>

      {/* controls */}
      <Container className="mt-6 flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm text-white/50">
            {pad(index + 1)} / {pad(count)}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#C9A227] hover:text-[#C9A227]"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-white/40">
          Swipe · ← → keys
        </p>
      </Container>

      <p className="sr-only" aria-live="polite">
        Photo {index + 1} of {count}: {slide.caption}
      </p>
    </Section>
  );
}
