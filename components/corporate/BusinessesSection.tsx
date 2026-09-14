import { site } from "@/config/site";
import { businesses } from "@/config";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BusinessCard } from "@/components/corporate/BusinessCard";
import { Reveal } from "@/components/motion/Reveal";

/** "Our Businesses" — the heart of the corporate homepage. */
export function BusinessesSection() {
  return (
    <Section id="businesses" ariaLabel="Our businesses" className="bg-surface">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Explore the group"
            title="Four businesses. One standard."
            lead="Each company below is a complete, independent business with its own brand, its own operations and its own people — follow the link to visit its dedicated website."
            titleClassName="text-4xl lg:text-[2.9rem]"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {businesses.map((business, index) => (
            <Reveal key={business.slug} delay={(index % 2) * 0.12}>
              <BusinessCard business={business} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-2xl border border-line-var bg-brand-soft p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-muted-var">
            <span className="font-semibold text-brand">{site.shortName} Group</span> also evaluates new
            industries under the same disciplines — quality, reliability and long-term thinking.
            {site.placeholderNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}