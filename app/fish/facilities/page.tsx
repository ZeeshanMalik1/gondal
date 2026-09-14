import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Facilities — ${fish.name}`,
  description: "The farm’s facilities: hatchery, grow-out ponds, on-farm lab and packhouse.",
  path: "/fish/facilities",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishFacilitiesPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Facilities"
        title="Everything under one gate."
        lead="From hatchery to dispatch bay, the whole chain stands on the same farm. Capacities below are placeholders."
        current="Facilities"
      />

      <Section ariaLabel="Farm facilities" className="bg-surface">
        <Container className="py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {fish.facilities?.map((facility, i) => (
              <Reveal key={facility.title} delay={(i % 2) * 0.1} className="rounded-2xl border border-line-var bg-white p-8">
                <div className="flex items-center gap-3.5">
                  <span className="grid h-13 w-13 place-items-center rounded-full bg-brand-soft">
                    <Icon name={facility.icon} label={facility.title} className="h-6 w-6 text-brand" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-ink">{facility.title}</h2>
                </div>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-var">{facility.body}</p>
                <ul className="mt-5 space-y-2 border-l-2 border-brand pl-4">
                  {facility.points.map((point) => (
                    <li key={point} className="text-sm text-muted-var">{point}</li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>

          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-10" /> : null}
        </Container>
      </Section>
    </>
  );
}