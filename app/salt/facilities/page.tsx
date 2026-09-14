import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Facilities — ${salt.name}`,
  description: "The works’ facilities: mines, crushing and milling, refining, lab, packing and warehouse.",
  path: "/salt/facilities",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltFacilitiesPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Facilities"
        title="The physical plant behind the product."
        current="Facilities"
        lead="Capacities and locations are placeholders until the works confirms its real assets."
      />
      <Section ariaLabel="Facilities list" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 border-t border-line-var lg:grid-cols-2">
            {salt.facilities?.map((facility, i) => (
              <Reveal key={facility.title} delay={(i % 2) * 0.08} className="rounded-sm border border-line-var bg-white p-8">
                <div className="flex items-center gap-3.5">
                  <Icon name={facility.icon} label={facility.title} className="h-6 w-6 text-brand" />
                  <h2 className="font-display text-xl font-semibold text-ink">{facility.title}</h2>
                </div>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-var">{facility.body}</p>
                <ul className="mt-5 space-y-2">
                  {facility.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-var">
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#D6A08A]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>
          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}