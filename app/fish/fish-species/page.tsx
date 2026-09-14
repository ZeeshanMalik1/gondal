import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { SpeciesCard } from "@/components/fish/SpeciesCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Fish Species — ${fish.name}`,
  description: "The species raised on the farm — freshwater carp suited to local waters and markets.",
  path: "/fish/fish-species",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishSpeciesPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Fish species"
        title="A short list, kept well."
        lead="We raise a compact range of freshwater species suited to local waters and local demand. Names, grow-out periods and sizes are placeholders pending the farm’s confirmed stock list."
        current="Fish Species"
      />

      <Section ariaLabel="Species list" className="bg-surface">
        <Container className="py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {fish.species?.map((item, i) => (
              <Reveal key={item.name} delay={(i % 2) * 0.1}>
                <SpeciesCard item={item} index={i} className="flex h-full flex-col" />
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-14 rounded-xl border border-line-var bg-brand-soft p-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Buying by species or by season?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-var">
              Availability follows the grow-out season and the water temperature. Call or message
              us and we’ll tell you exactly which species are at harvest weight today.
            </p>
            <div className="mt-5 flex flex-wrap gap-3.5">
              <Button href="/fish/contact">
                Ask about availability
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
              <Button href="/fish/products" variant="outline">
                Product formats
              </Button>
            </div>
          </Reveal>

          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}