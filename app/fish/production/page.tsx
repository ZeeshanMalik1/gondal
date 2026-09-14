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
  title: `Production & Supply — ${fish.name}`,
  description: "How the farm produces and supplies fish — from hatchery and grow-out to chilled dispatch.",
  path: "/fish/production",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishProductionPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Production & supply"
        title="Short chain. Handled once. No waiting around."
        lead="We keep the chain as short as physics allows — every step below exists to protect one thing: freshness."
        current="Production"
      />

      <Section ariaLabel="Production process" className="bg-surface">
        <Container className="py-20">
          <ol className="grid gap-8 border-t border-line-var">
            {fish.process?.map((step, i) => (
              <Reveal key={step.no} delay={(i % 2) * 0.08} className="grid items-start gap-6 border-b border-line-var md:grid-cols-[110px_1fr_1fr]">
                <span className="font-display text-3xl font-semibold text-brand">{step.no}</span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">{step.title}</h2>
                  <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-var">{step.body}</p>
                </div>
                <span className="hidden gap-2 rounded-full border border-line-var bg-brand-faint px-4 py-2 text-xs text-muted-var md:inline-flex">
                  <Icon name={step.icon} label={step.title} className="h-4 w-4 text-brand" />
                  {step.title}
                </span>
              </Reveal>
            )) ?? null}
          </ol>

          <Reveal className="mt-14 rounded-2xl border border-line-var bg-brand-soft p-8 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-ink">Freshness is the product.</h2>
            <p className="mt-4 leading-relaxed text-muted-var">
              Fish that reaches the buyer within hours of leaving the pond simply does not need
              heavy preservation — it needs speed and ice. That single decision shapes our whole
              farm design: ponds near the packhouse, dispatch before midday every operating day,
              and a cold chain that never waits for a full truck.
            </p>
          </Reveal>

          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}