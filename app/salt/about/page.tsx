import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `About — ${salt.name}`,
  description: "The company behind the salt works — history, approach and operating principles.",
  path: "/salt/about",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltAboutPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="About the works"
        title="A mineral business, built on a mountain."
        current="About"
        lead={salt.intro.body}
      />
      <Section ariaLabel="Company profile" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 leading-8 text-[1.02rem] text-ink">
              <p>{salt.intro.body}</p>
              <p>{salt.intro.bodySecondary}</p>
              <p>
                The works runs under a simple rule: ownership from mine to market. What we cannot
                control, we do not claim — and what we do control, we warrant in writing on every
                load.
              </p>
            </div>
            <Reveal className="rounded-sm border border-line-var bg-white p-8">
              <SectionHeader eyebrow="Operating principles" title="Boring on purpose." titleClassName="text-2xl" />
              <ul className="mt-6 space-y-3.5">
                {salt.intro.points.map((point) => (
                  <li key={point.title} className="border-l-[3px] border-[#D6A08A] pl-4 text-sm leading-relaxed text-muted-var">
                    <span className="font-semibold text-ink">{point.title}: </span>{point.body}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}