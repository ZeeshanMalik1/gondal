import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Materials — ${crushers.name}`,
  description: "The geological materials behind our aggregates — placeholder rock types and their applications.",
  path: "/crushers/materials",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersMaterialsPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Materials" title="KNOW THE ROCK, TRUST THE ROCK." current="Materials" lead="Rock types and their applications below are placeholders pending the works’ confirmed quarry geology." />
      <Section ariaLabel="Materials" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 border-t border-line-var lg:grid-cols-3">
            {crushers.materials?.map((material, i) => (
              <Reveal key={material.name} delay={(i % 3) * 0.08} className="flex flex-col overflow-hidden border border-line-var bg-white">
                <Figure src={material.image} alt={`${material.name} — placeholder artwork`} className="aspect-[4/3] w-full" />
                <div className="flex flex-col gap-3 p-6">
                  <p className="font-eyebrow text-muted-var">{material.tag}</p>
                  <h2 className="font-display text-xl font-bold uppercase text-ink">{material.name}</h2>
                  <p className="text-sm leading-relaxed text-muted-var">{material.body}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {material.uses.map((use) => (
                      <li key={use} className="bg-[#F6F7F5] px-2.5 py-1 text-xs text-muted-var">{use}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )) ?? null}
          </div>
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}