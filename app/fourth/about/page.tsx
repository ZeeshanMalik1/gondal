import type { Metadata } from "next";
import { fourth } from "@/config/fourth";
import { makeMetadata } from "@/lib/metadata";
import { FourthInteriorHero } from "@/components/fourth/FourthInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `About — ${fourth.name}`,
  description: "The supply house behind the tar — history, approach and operating principles of the bitumen business.",
  path: "/fourth/about",
  image: fourth.metadata.ogImage,
  keywords: fourth.metadata.keywords,
});

export default function FourthAboutPage() {
  return (
    <>
      <FourthInteriorHero
        eyebrow="About the supply house"
        title="The black gold under every highway."
        current="About"
        lead={fourth.intro.body}
      />
      <Section ariaLabel="About" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 leading-8 text-[1.02rem] text-ink">
              <p>{fourth.intro.body}</p>
              <p>{fourth.intro.bodySecondary}</p>
              <p>
                A paving job cannot wait for a cold tanker or a mis-graded drum. Our whole yard is
                organised around the road calendar — material in stock, storage at temperature,
                and dispatch tickets that match the contract.
              </p>
            </div>
            <Reveal className="rounded-lg border border-line-var bg-white p-8">
              <SectionHeader eyebrow="Operating principles" title="A supply house keeps its word." titleClassName="text-2xl" />
              <ul className="mt-6 space-y-3.5">
                {fourth.intro.points.map((point) => (
                  <li key={point.title} className="border-l-[3px] border-[#C9A227] pl-4 text-sm leading-relaxed text-muted-var">
                    <span className="font-semibold text-ink">{point.title}: </span>{point.body}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          {fourth.placeholderNote ? <PlaceholderNotice note={fourth.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}