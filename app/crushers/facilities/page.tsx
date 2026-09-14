import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Facilities — ${crushers.name}`,
  description: "Quarry, crushing plant, screens, weighbridge and lab — the physical works behind every load.",
  path: "/crushers/facilities",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersFacilitiesPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Facilities" title="THE PLANT IS THE PROMISE." current="Facilities" lead="Capacities and locations are placeholders until the works confirms its real assets." />
      <Section ariaLabel="Facilities" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 border-t border-line-var lg:grid-cols-2">
            {crushers.facilities?.map((facility, i) => (
              <Reveal key={facility.title} delay={(i % 2) * 0.08} className="border border-line-var bg-white p-8">
                <div className="flex items-center gap-3.5">
                  <Icon name={facility.icon} label={facility.title} className="h-6 w-6 text-[#E4A11B]" />
                  <h2 className="font-display text-xl font-bold uppercase text-ink">{facility.title}</h2>
                </div>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-var">{facility.body}</p>
                <ul className="mt-5 space-y-2">
                  {facility.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-var">
                      <span className="h-2 w-2 shrink-0 bg-[#E4A11B]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}