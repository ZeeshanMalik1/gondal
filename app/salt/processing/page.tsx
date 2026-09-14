import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Processing — ${salt.name}`,
  description: "Inside the plant: how rock salt moves from the mountain through crushing, refining, iodisation and packing.",
  path: "/salt/processing",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltProcessingPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Processing"
        title="From mountain face to packed pallet."
        current="Processing"
        lead="Capacities and line details are placeholders — the sequence below is how the works actually runs."
      />
      <Section ariaLabel="Processing steps" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="mt-8 border-t border-line-var">
            {salt.process?.map((step, i) => (
              <Reveal key={step.no} delay={(i % 3) * 0.06} className="grid items-baseline gap-8 border-b border-line-var py-8 md:grid-cols-[90px_1fr]">
                <span className="font-display text-4xl font-semibold text-brand">{step.no}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon name={step.icon} label={step.title} className="h-5 w-5 text-[#D6A08A]" />
                    <h2 className="font-display text-2xl font-semibold text-ink">{step.title}</h2>
                  </div>
                  <p className="mt-3 leading-relaxed text-[0.98rem] text-muted-var">{step.body}</p>
                </div>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-14 rounded-sm border border-line-var bg-brand-soft p-8 sm:p-10">
            <SectionHeader eyebrow="Staying honest" title="What we will and won’t claim." titleClassName="text-2xl" />
            <p className="mt-4 leading-relaxed text-[0.98rem] text-muted-var">
              We will tell you exactly what our plant can produce, which tests we run, and every
              tolerance in the spec. We will not invent capacity, purity or certifications we
              cannot show you on paper.
            </p>
            <div className="mt-6">
              <Button href="/salt/contact">Ask for a plant visit</Button>
            </div>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}