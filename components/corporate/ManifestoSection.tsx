import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** "Who we are" manifesto block with values and a condensed history rail. */
export function ManifestoSection() {
  return (
    <Section id="about" ariaLabel="About the group" className="bg-surface">
      <Container className="py-24 sm:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow={site.manifesto.eyebrow}
                title={site.manifesto.headline}
                titleClassName="text-4xl lg:text-[2.9rem]"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-[1.05rem] leading-8 text-ink">{site.manifesto.body}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-[1.05rem] leading-8 text-muted-var">{site.manifesto.bodySecondary}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="rounded-lg border border-line-var bg-paper p-7">
            <Eyebrow>Our values</Eyebrow>
            <ul className="mt-5 space-y-5">
              {site.values.map((value) => (
                <li key={value.title} className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line-var bg-brand-soft">
                    <Icon name={value.icon} label={value.title} className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-var">{value.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* history rail */}
        <div className="mt-16 border-t border-line-var">
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-3">
            {site.history.map((entry, i) => (
              <Reveal key={entry.title} delay={(i % 3) * 0.08} className="border-t-[3px] border-brand pt-6">
                <p className="font-display text-sm font-semibold text-brand">{entry.period}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{entry.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-var">{entry.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}