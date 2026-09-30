"use client";

import { AnimatePresence, motion } from "framer-motion";
import { salt } from "@/config/salt";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const SLIDES = salt.images.gallery;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Salt slider — a print-catalogue plate: sharp corners, uppercase captions and
 * a gold hairline. A typographic index rail drives a direction-aware slide of
 * the plate (left/right travel follows the way you moved through the list).
 */
export function SaltPlateSlider() {
  const { index, count, direction, autoplay, interval, goTo, next, prev, viewportProps } =
    useSlider({ count: SLIDES.length, interval: 6500 });

  const slide = SLIDES[index];

  return (
    <Section ariaLabel="Gallery slider" className="border-y border-line-var bg-brand-faint">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-brand">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              Mine to loading bay
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-ink sm:text-4xl">
              Six views of the works.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-4">
            <span className="font-display text-sm text-muted-var">
              {pad(index + 1)} <span className="text-muted-var/60">/ {pad(count)}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous view"
                className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] border border-line-var bg-paper text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next view"
                className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] border border-line-var bg-paper text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10" {...viewportProps}>
          {/* index rail */}
          <div className="lg:col-span-4">
            <ul className="divide-line-var border-y border-line-var">
              {SLIDES.map((item, i) => (
                <li key={item.src}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show ${item.caption}`}
                    aria-current={i === index ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center gap-4 border-l-2 px-4 py-3.5 text-left transition-colors",
                      i === index
                        ? "border-accent bg-paper text-brand"
                        : "border-transparent text-muted-var hover:border-line-var hover:text-ink",
                    )}
                  >
                    <span className="font-display text-sm uppercase tracking-[0.1em]">
                      {pad(i + 1)}
                    </span>
                    <span className="min-w-0 truncate text-[0.72rem] font-medium uppercase tracking-[0.14em]">
                      {item.caption}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* gold hairline progress */}
            <div className="mt-5 h-px w-full bg-line-var">
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
          </div>

          {/* plate */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--card-radius)] border border-line-var bg-paper sm:aspect-[16/10]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.src}
                  className="absolute inset-0"
                  custom={direction}
                  initial={{ x: direction > 0 ? "10%" : "-10%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? "-10%" : "10%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Figure
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 border-t border-line-var bg-paper/95 px-5 py-3">
                <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink">
                  <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                  <span className="min-w-0 truncate">{slide.caption}</span>
                  <span className="ml-auto shrink-0 text-muted-var">
                    {pad(index + 1)} / {pad(count)}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-var">
              Swipe, or use ← → keys
            </p>
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          View {index + 1} of {count}: {slide.caption}
        </p>
      </Container>
    </Section>
  );
}
