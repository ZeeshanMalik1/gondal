import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Gallery — ${crushers.name}`,
  description: "Quarries, plants and yards — a visual look at the crushing works.",
  path: "/crushers/gallery",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersGalleryPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Gallery" title="DIRT, ROCK AND MACHINERY." current="Gallery" lead="Placeholder artwork for now — replace with real site photography in public/images/crushers/." />
      <Section ariaLabel="Works gallery" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <GalleryGrid items={crushers.images.gallery} itemClassName="border-0" />
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-10" /> : null}
        </Container>
      </Section>
    </>
  );
}