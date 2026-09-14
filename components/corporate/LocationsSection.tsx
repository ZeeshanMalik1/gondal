import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Operational locations across Pakistan — easy to replace in config. */
export function LocationsSection() {
  return (
    <Section id="locations" ariaLabel="Locations" className="bg-surface">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Where we operate"
            title="A national footprint, quietly maintained."
            lead="Group companies run from the sites below. Actual addresses and regions replace the placeholders in config/site.ts."
            titleClassName="text-4xl lg:text-[2.9rem]"
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-surface-dark sm:grid-cols-2 lg:grid-cols-4">
          {site.locations.map((location, i) => (
            <Reveal key={location.city} delay={(i % 4) * 0.07} className="flex flex-col gap-4 bg-paper p-7">
              <div className="flex items-center gap-3">
                <Icon name="pin" className="h-5 w-5 text-brand" />
                <span className="text-xs uppercase tracking-[0.16em] text-muted-var">{location.role}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold">{location.city}</h3>
              <p className="text-sm text-muted-var">{location.province}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-var">{location.line}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-var">
          Placeholder locations — update the list in config/site.ts.
        </p>
      </Container>
    </Section>
  );
}