import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishHero } from "@/components/fish/FishHero";
import { SpeciesCard } from "@/components/fish/SpeciesCard";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StatBlock } from "@/components/motion/StatBlock";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: fish.metadata.title,
  description: fish.metadata.description,
  path: "/fish",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishHomePage() {
  const preview = fish.species?.slice(0, 3) ?? [];
  return (
    <>
      <FishHero />

      {/* Who we are */}
      <Section ariaLabel="About the farm" className="bg-surface">
        <Container className="py-24 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <Figure
                src={fish.images.about ?? "/images/fish/pond-aerial.svg"}
                alt="Aerial view of the farm's grow-out ponds — placeholder artwork"
                className="aspect-[4/3] w-full rounded-[1.5rem] border border-line-var"
              />
              <div className="absolute -bottom-5 right-6 rounded-full bg-brand-soft px-5 py-2.5 text-sm font-semibold text-brand">
                <Icon name="leaf" className="h-4 w-4" />
                {fish.intro.points[0].title}
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeader eyebrow={fish.intro.eyebrow} title={fish.intro.headline} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-ink">{fish.intro.body}</p>
                <p className="mt-4 leading-8 text-muted-var">{fish.intro.bodySecondary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                  {fish.intro.points.map((point) => (
                    <li key={point.title} className="flex flex-col gap-2 rounded-xl border border-line-var bg-white p-4">
                      <Icon name={point.icon} label={point.title} className="h-5 w-5 text-brand" />
                      <h3 className="text-sm font-semibold text-ink">{point.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-var">{point.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Species preview */}
      <Section ariaLabel="Our fish species" className="bg-brand-soft">
        <Container className="py-24 sm:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="What we grow"
              title="Fish built for Pakistani waters and tastes."
              lead="A small, well-managed species list — confirmed stock and sizes are placeholders until the farm’s real catalogue is finalised."
              titleClassName="text-4xl lg:text-[2.9rem]"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 0.1}>
                <SpeciesCard item={item} index={i} className="flex h-full flex-col" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/fish/fish-species" variant="outline" size="lg">
              Full species list
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <Button href="/fish/products" size="lg">
              Products & formats
            </Button>
          </Reveal>
        </Container>
      </Section>
      {/* Process strip */}
      <Section ariaLabel="How we produce" className="border-t border-line-var bg-surface">
        <Container className="py-24 sm:py-28">
          <Reveal>
            <SectionHeader
              eyebrow="From water to market"
              title="Five steps, no corners cut."
              className="max-w-2xl"
            />
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line-var bg-surface-dark sm:grid-cols-2 lg:grid-cols-5">
            {fish.process?.map((step, i) => (
              <Reveal key={step.no} delay={(i % 5) * 0.07} className="flex flex-col gap-3 bg-white p-6">
                <div className="flex items-center justify-between">
                  <Icon name={step.icon} label={step.title} className="h-5 w-5 text-brand" />
                  <span className="font-display text-sm text-muted-var">{step.no}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-var">{step.body}</p>
              </Reveal>
            )) ?? null}
          </ol>
          <Reveal className="mt-10">
            <Button href="/fish/production" variant="outline">
              See full production story
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Numbers + CTA */}
      <Section ariaLabel="Farm statistics" className="bg-brand-deep text-white">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <Eyebrow className="text-brand-soft">At a glance</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">A farm with scale to supply, size to stay consistent.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <StatBlock
              stats={fish.stats}
              className="grid-cols-2 lg:grid-cols-4"
              valueClassName="text-4xl text-white"
              labelClassName="text-white/55"
            />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button href="/fish/facilities" variant="outline">
              Tour the facilities
            </Button>
            <Button href="/fish/contact">
              Get today’s rates
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
          {fish.placeholderNote ? (
            <Reveal className="mt-8">
              <PlaceholderNotice note={fish.placeholderNote} dark />
            </Reveal>
          ) : null}
        </Container>
      </Section>
    </>
  );
}