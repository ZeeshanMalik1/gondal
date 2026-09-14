import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `About — ${crushers.name}`,
  description: "The company behind the crushing works — quarries, plants and the discipline of making aggregate to grade.",
  path: "/crushers/about",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersAboutPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="About the works" title="ROCK IN. AGGREGATE OUT." current="About" lead={crushers.intro.body} />
      <Section ariaLabel="About" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 leading-8 text-[1.02rem] text-ink">
              <p>{crushers.intro.body}</p>
              <p>{crushers.intro.bodySecondary}</p>
              <p>
                We run a simple operating doctrine: test the rock, crush to grade, screen to spec,
                weigh every load. Anyone can pile up stone; we are paid to deliver a grade that
                a contract can sign off on.
              </p>
            </div>
            <Reveal className="border border-line-var bg-white p-8">
              <SectionHeader eyebrow="Operating doctrine" title="Spec sheet first, heap second." titleClassName="text-2xl" />
              <ul className="mt-6 space-y-3">
                {crushers.intro.points.map((point) => (
                  <li key={point.title} className="flex items-start gap-4 border-l-[6px] border-[#E4A11B] pl-4">
                    <p className="text-sm leading-relaxed text-muted-var"><span className="font-bold text-ink">{point.title} — </span>{point.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}