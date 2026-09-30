"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { crushers } from "@/config/crushers";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const SLIDES = crushers.images.gallery;

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Crushers slider — a conveyor, not a slideshow: the cards travel sideways as
 * one blocky track (two bays deep on desktop), the ticks below fill up like a
 * weighbridge readout, and nothing fades — it slides.
 */
export function CrushersYardSlider() {
  /* How many bays fit side by side (1 up to lg, 2 beyond). */
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const apply = () => setPerView(query.matches ? 2 : 1);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const count = SLIDES.length;
  const maxIndex = Math.max(0, count - perView);

  const { index, goTo, next, prev, viewportProps } = useSlider({
    count,
    interval: 5000,
    wrap: false,
    maxIndex,
  });

  const position = Math.min(index, maxIndex);
  const step = 100 / perView;

  return (
    <Section
      ariaLabel="Gallery slider"
      className="border-t-[6px] border-[#E4A11B] bg-[#1B1E22] text-white"
    >
      <Container className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#E4A11B]">
              <span className="h-2 w-2 bg-[#E4A11B]" aria-hidden="true" />
              Plant &amp; yard
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Rock in. Aggregate out.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-4">
            <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-white/60">
              Load {pad(position + 1)}
              <span className="text-white/35">
                {perView > 1 ? `–${pad(Math.min(position + perView, count))}` : ""} / {pad(count)}
              </span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                disabled={position === 0}
                aria-label="Previous bay"
                className="grid h-11 w-11 place-items-center border border-white/25 text-white transition hover:bg-[#E4A11B] hover:text-[#16181C] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={position >= maxIndex}
                aria-label="Next bay"
                className="grid h-11 w-11 place-items-center border border-white/25 text-white transition hover:bg-[#E4A11B] hover:text-[#16181C] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-10">
          <div
            className="overflow-hidden border border-white/15 bg-[#23262B] outline-none"
            {...viewportProps}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ transform: `translateX(-${position * step}%)` }}
            >
              {SLIDES.map((item, i) => (
                <article
                  key={item.src}
                  aria-hidden={i < position || i >= position + perView ? "true" : undefined}
                  className="w-full shrink-0 basis-full border-white/10 sm:border-r lg:basis-1/2"
                >
                  <Figure
                    src={item.src}
                    alt={item.alt}
                    className="aspect-[4/3] w-full"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="flex items-start justify-between gap-4 border-t border-white/10 px-5 py-4">
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-base font-bold uppercase tracking-[0.04em] text-white">
                        {item.caption}
                      </h3>
                      <p className="mt-1 truncate text-xs text-white/55">{item.alt}</p>
                    </div>
                    <span className="shrink-0 border border-[#E4A11B] px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#E4A11B]">
                      Bay {pad(i + 1)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        {/* weighbridge ticks + jump controls */}
        <Reveal delay={0.18} className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <ul className="flex items-center gap-1">
            {SLIDES.slice(0, maxIndex + 1).map((item, i) => (
              <li key={item.src}>
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show bay ${i + 1}`}
                  aria-current={i === position ? "true" : undefined}
                  className="group flex min-h-[44px] items-center px-1"
                >
                  <span
                    className={cn(
                      "block h-1.5 w-6 transition-colors duration-300 lg:w-8",
                      i <= position ? "bg-[#E4A11B]" : "bg-white/20 group-hover:bg-white/40",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          <Link
            href="/crushers/facilities"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[#E4A11B] transition hover:gap-3.5 hover:text-white"
          >
            Inside the plant
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing bay {position + 1} of {count}: {SLIDES[position]?.caption}
        </p>
      </Container>
    </Section>
  );
}
