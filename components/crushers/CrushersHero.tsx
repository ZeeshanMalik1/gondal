"use client";

import { crushers } from "@/config/crushers";
import { cn } from "@/lib/cn";
import { useSlider } from "@/lib/useSlider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Hero slides — the aggregate plate first, then the plant & yard gallery. */
const SLIDES = [
  {
    src: crushers.images.hero,
    alt: "Aggregate stone pile with machinery — placeholder artwork",
    caption: `${crushers.name} · ${crushers.est}`,
  },
  ...crushers.images.gallery.slice(0, 3),
];

const pad = (value: number) => String(value).padStart(2, "0");

/** Crushers hero — heavy graphite slab, hazard accent, conveyor-track slider. */
export function CrushersHero() {
  const { index, count, goTo, next, prev, viewportProps } = useSlider({
    count: SLIDES.length,
    interval: 5500,
  });

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden border-b-[6px] border-[#E4A11B] bg-[#1B1E22] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#23262B] via-transparent to-[#101216]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-[#E4A11B]" aria-hidden="true" />
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 900 600" fill="none" stroke="#E4A11B" strokeWidth="1.2">
        <path d="M0 80L900 80M0 170L900 170M0 260L900 260M0 80Q225 260 450 80Q675 260 900 80M0 430Q225 560 450 430Q675 560 900 430" strokeDasharray="14 10" />
      </svg>

      <Container className="relative grid items-center gap-12 pt-14 pb-24 lg:grid-cols-[1fr_0.9fr] lg:pt-20 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-3 font-eyebrow text-[#E4A11B]">
              <span className="h-[7px] w-[7px] bg-[#E4A11B]" aria-hidden="true" />
              {crushers.hero.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-7xl">
              {crushers.hero.headline[0]}
              <span className="mt-1 block text-[#E4A11B]">{crushers.hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">{crushers.hero.support}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={crushers.hero.ctaPrimary.href} size="lg">
                {crushers.hero.ctaPrimary.label}
                <Icon name="stones" className="h-4 w-4" />
              </Button>
              <Button href={crushers.hero.ctaSecondary.href} variant="ghost-light" size="lg">
                {crushers.hero.ctaSecondary.label}
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/55">
              <Icon name="pin" className="h-3.5 w-3.5 text-[#E4A11B]" />
              {crushers.hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          {/* hero image slider — the frames travel like a conveyor */}
          <div
            className="relative aspect-[4/3] w-full overflow-hidden border border-white/15 outline-none"
            {...viewportProps}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((item, i) => (
                <div
                  key={item.src}
                  aria-hidden={i !== index ? "true" : undefined}
                  className="relative h-full w-full shrink-0 basis-full"
                >
                  <Figure src={item.src} alt={item.alt} className="h-full w-full" priority={i === 0} />
                </div>
              ))}
            </div>
            <span className="absolute left-4 top-4 bg-[#E4A11B] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#16181C]">
              Frame {pad(index + 1)} / {pad(count)}
            </span>
          </div>

          <div className="absolute -bottom-5 left-4 inline-flex items-center gap-2 bg-[#E4A11B] px-4 py-2 text-sm font-bold uppercase tracking-[0.04em] text-[#16181C]">
            <Icon name="gauge" className="h-4 w-4" />
            Tested per lot
          </div>

          {/* numbered bay tabs + square arrows */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {SLIDES.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${item.caption}`}
                  aria-current={i === index ? "true" : undefined}
                  className={cn(
                    "grid h-10 w-10 place-items-center text-[0.7rem] font-bold transition",
                    i === index
                      ? "bg-[#E4A11B] text-[#16181C]"
                      : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white",
                  )}
                >
                  {pad(i + 1)}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous hero image"
                className="grid h-10 w-10 place-items-center border border-white/25 text-white transition hover:bg-[#E4A11B] hover:text-[#16181C]"
              >
                <Icon name="chevron-left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next hero image"
                className="grid h-10 w-10 place-items-center border border-white/25 text-white transition hover:bg-[#E4A11B] hover:text-[#16181C]"
              >
                <Icon name="chevron-right" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="mt-3 truncate text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/55">
            {slide.caption}
          </p>
          <p className="sr-only" aria-live="polite">
            Hero image {index + 1} of {count}: {slide.caption}
          </p>
        </Reveal>
      </Container>

      {/* grade strip */}
      <Container className="relative">
        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
          {[
            ["01", "Under-spec hold", "No un-tested grade leaves the yard."],
            ["02", "Weighed loads", "Ticket on every vehicle, every time."],
            ["03", "Stock on hand", "Order one grade or a full take-off."],
          ].map(([no, title, line], i) => (
            <Reveal key={title} delay={i * 0.08} className="bg-[#1B1E22] px-6 py-5">
              <p className="font-display text-3xl font-bold text-[#E4A11B]">{no}</p>
              <h2 className="mt-1 font-display text-lg font-bold uppercase text-white">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-white/60">{line}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}