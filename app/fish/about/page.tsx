import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `About — ${fish.name}`,
  description: "How the farm works: history, approach, values and responsible freshwater aquaculture.",
  path: "/fish/about",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

const MILESTONES = [
  { period: "[Est. Year]", title: "First ponds dug", body: "The farm began with a handful of earthen ponds in [Region], Pakistan." },
  { period: "[Year + 1]", title: "Own hatchery added", body: "Breeding and nursery capability allowed the farm to control its own stock." },
  { period: "[Year + 2]", title: "Cold chain starts", body: "Refrigerated dispatch opened nearby city markets beyond the farm gate." },
  { period: "Today", title: "A full farm in one place", body: "Hatchery, nursery, grow-out, harvesting and dispatch under one management." },
];

export default function FishAboutPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="About the farm"
        title="A quiet farm, working every day."
        lead={fish.intro.body}
        current="About"
      />

      <Section ariaLabel="The farm story" className="bg-surface">
        <Container className="py-20">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-[1.02rem] leading-8 text-ink">
              <p>{fish.intro.body}</p>
              <p>{fish.intro.bodySecondary}</p>
              <p>
                The farm is managed as one integrated unit — the same people who stock a pond
                are the people who deliver its fish. That keeps quality decisions close to the
                water and responsibilities impossible to hide behind.
              </p>
            </div>

            <Reveal className="rounded-xl border border-line-var bg-brand-soft p-7">
              <SectionHeader eyebrow="Our approach" title="Farm discipline, day one." titleClassName="text-2xl" />
              <ul className="mt-6 space-y-4">
                {fish.intro.points.map((point) => (
                  <li key={point.title} className="flex items-start gap-3.5">
                    <Icon name={point.icon} label={point.title} className="h-5 w-5 shrink-0 text-brand" />
                    <p className="text-sm leading-relaxed text-muted-var">
                      <span className="font-semibold text-ink">{point.title} — </span>
                      {point.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section ariaLabel="Milestones" className="bg-brand-faint">
        <Container className="py-20">
          <Reveal>
            <SectionHeader eyebrow="Milestones" title="Steps along the way." />
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((step, i) => (
              <Reveal key={step.title} delay={(i % 4) * 0.08} className="border-t-[3px] border-brand bg-white p-6">
                <p className="font-display text-sm font-semibold text-brand">{step.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-var">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-10" /> : null}
        </Container>
      </Section>
    </>
  );
}