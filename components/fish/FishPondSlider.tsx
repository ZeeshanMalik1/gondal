"use client";

import { AnimatePresence, motion } from "framer-motion";
import { fish } from "@/config/fish";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const SLIDES = fish.images.gallery;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Fish slider — soft and rounded: a matted, deep-cornered frame holding a
 * long crossfade, a floating caption pill, droplet pager dots and circular
 * controls. Deliberately gentle next to the industrial sites.
 */
export function FishPondSlider() {
  const { index, count, goTo, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 6000,
  });

  const slide = SLIDES[index];

  return (
    <Section ariaLabel="Gallery slider" className="overflow-hidden bg-brand-soft">
      <div
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Inside the farm"
            title="A look across the ponds."
            lead="Hatchery, grow-out lakes, harvest and packing — swiped, one frame at a time."
            titleClassName="text-4xl lg:text-[2.9rem]"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative rounded-[2rem] border border-line-var bg-white/80 p-2 shadow-[0_24px_70px_rgba(12,59,65,0.14)] backdrop-blur-sm sm:rounded-[2.75rem] sm:p-3">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] outline-none sm:aspect-[16/9] sm:rounded-[2.25rem]"
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
                  <Figure
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full"
                    sizes="(min-width: 1024px) 80vw, 100vw"
                  />
                  <span
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-deep/70 to-transparent"
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>

              {/* floating caption pill */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={slide.src}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="inline-flex max-w-full items-center gap-2.5 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink shadow-[0_10px_30px_rgba(12,59,65,0.22)]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    <span className="truncate">{slide.caption}</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>

        {/* droplet pager + circular controls */}
        <Reveal delay={0.16} className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            {SLIDES.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${item.caption}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  i === index ? "w-9 bg-brand" : "w-2.5 bg-brand/25 hover:bg-brand/50",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-display text-sm text-muted-var">
              {pad(index + 1)} <span className="text-muted-var/60">/ {pad(count)}</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="grid h-11 w-11 place-items-center rounded-full border border-line-var bg-white text-brand transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="grid h-11 w-11 place-items-center rounded-full border border-line-var bg-white text-brand transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Photo {index + 1} of {count}: {slide.caption}
        </p>
      </Container>
    </Section>
  );
}
