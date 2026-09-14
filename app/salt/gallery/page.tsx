import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Gallery — ${salt.name}`,
  description: "Crystals, mines and mills — a visual look at the salt works.",
  path: "/salt/gallery",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltGalleryPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Gallery"
        title="The mineral world of the works."
        current="Gallery"
        lead="Placeholder artwork for now — replace with real photography in public/images/salt/."
      />
      <Section ariaLabel="Works gallery" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <GalleryGrid items={salt.images.gallery} itemClassName="rounded-sm" />
          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-10" /> : null}
        </Container>
      </Section>
    </>
  );
}