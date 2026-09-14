import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

/**
 * "Why us" band for the corporate landing page (dark surface, numbered
 * features, hairline grid). Reads entirely from config/site.ts.
 */
export function WhyUsSection() {
  return (
    <Section id="why" className="bg-surface-dark">
      <Container className="py-24 sm:py-32">
        <Reveal>
          <SectionHeader
            eyebrow="Why choose the group"
            title="Serious operators for serious partners."
            lead="Anyone can open a plant. Running companies for decades — and keeping customers through the ups and downs of Pakistani markets — is a different skill entirely."
            titleClassName="text-white"
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {site.whyUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className="group flex h-full flex-col justify-between border-b border-white/10 p-7"
            >
              <div className="flex items-center justify-between">
                <Icon name={item.icon} label={item.title} className="h-6 w-6 text-accent" />
                <span className="font-display text-lg text-white/40">{item.index}</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1} className="flex h-full flex-col justify-between p-7">
            <Eyebrow className="text-brand">In one line</Eyebrow>
            <p className="font-display text-lg leading-snug text-white">
              “{site.manifesto.quote}”
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}