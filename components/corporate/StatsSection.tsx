import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { StatBlock } from "@/components/motion/StatBlock";
import { Reveal } from "@/components/motion/Reveal";

/** Group statistics with animated counters. */
export function StatsSection() {
  return (
    <Section id="numbers" ariaLabel="Group statistics" className="bg-surface-dark text-white">
      <Container className="py-24 sm:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="At a glance"
            title="A group of measurable size."
            titleClassName="text-white"
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <StatBlock
            stats={site.stats}
            className="grid-cols-2 lg:grid-cols-4"
            valueClassName="text-4xl text-white"
            labelClassName="text-white/55"
          />
          <p className="mt-6 text-xs text-white/45">
            Placeholder figures — replace in config/site.ts before going live.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}