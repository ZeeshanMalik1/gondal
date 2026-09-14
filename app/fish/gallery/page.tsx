import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Gallery — ${fish.name}`,
  description: "A look at the farm: ponds, hatchery, harvest days and the people behind them.",
  path: "/fish/gallery",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishGalleryPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Gallery"
        title="Life on the farm."
        lead="Placeholder artwork until real farm photography replaces it (see public/images/fish/)."
        current="Gallery"
      />

      <Section ariaLabel="Farm gallery" className="bg-surface">
        <Container className="py-20">
          <GalleryGrid items={fish.images.gallery} itemClassName="rounded-[1.25rem]" />
          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-10" /> : null}
        </Container>
      </Section>
    </>
  );
}