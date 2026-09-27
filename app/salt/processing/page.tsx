import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
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
          <ol className="grid gap-[var(--grid-gap)] sm:grid-cols-2">
            {salt.process?.map((step, i) => (
              <Reveal key={step.no} delay={(i % 2) * 0.08} className="card card-lift flex gap-5">
                <span className="font-display text-4xl font-medium leading-none text-accent">
                  {step.no}
                </span>
                <div>
                  <div className="flex items-center gap-2.5">
                    <Icon name={step.icon} label={step.title} className="h-4 w-4 text-brand" />
                    <h2 className="font-display text-xl font-medium text-ink">{step.title}</h2>
                  </div>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-var">{step.body}</p>
                </div>
              </Reveal>
            )) ?? null}
          </ol>

          <Reveal className="mt-12 grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <div className="card flex flex-col justify-between gap-6 bg-brand text-white lg:col-span-7">
              <div>
                <h2 className="font-display text-2xl font-medium text-white">
                  What we will and won’t claim.
                </h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-white/75">
                  We will tell you exactly what our plant can produce, which tests we run, and every
                  tolerance in the spec. We will not invent capacity, purity or certifications we
                  cannot show you on paper.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/salt/contact" variant="accent" size="lg">
                  Ask for a plant visit
                </Button>
                <Button href="/salt/quality" variant="ghost-light" size="lg">
                  See the lab
                </Button>
              </div>
            </div>

            <div className="card lg:col-span-5">
              <p className="font-eyebrow text-brand">Line facts</p>
              <ul className="mt-5 grid gap-3">
                {["Multi-stage crushing and milling", "Washed, dried and graded to sieve", "Metered iodisation for food grade", "Palletised, sealed and documented"].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-sm text-muted-var">
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 text-brand" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}
