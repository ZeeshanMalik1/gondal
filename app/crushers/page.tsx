import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersHero } from "@/components/crushers/CrushersHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StatBlock } from "@/components/motion/StatBlock";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: crushers.metadata.title,
  description: crushers.metadata.description,
  path: "/crushers",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersHomePage() {
  return (
    <>
      <CrushersHero />

      <Section ariaLabel="About the works" className="bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeader eyebrow={crushers.intro.eyebrow} title={crushers.intro.headline} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-ink">{crushers.intro.body}</p>
                <p className="mt-4 leading-8 text-muted-var">{crushers.intro.bodySecondary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-7 grid gap-3.5">
                  {crushers.intro.points.map((point) => (
                    <li key={point.title} className="flex items-start gap-4 border-l-[6px] border-[#E4A11B] bg-white px-5 py-4">
                      <Icon name={point.icon} label={point.title} className="h-5 w-5 shrink-0 text-[#E4A11B]" />
                      <p className="text-sm leading-relaxed text-muted-var"><span className="font-bold uppercase text-ink">{point.title} — </span>{point.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="relative">
              <Figure src={crushers.images.about ?? "/images/crushers/plant-crusher.svg"} alt="Crusher plant with conveyor — placeholder artwork" className="aspect-[4/3] w-full border border-line-var" />
              <p className="absolute -bottom-5 left-5 inline-flex items-center gap-2 bg-[#E4A11B] px-4 py-2 text-sm font-bold uppercase text-[#16181C]">
                <Icon name="hammer" className="h-4 w-4" />
                {crushers.hero.headline[0]}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section ariaLabel="Products" className="border-t-[6px] border-[#E4A11B] bg-[#1B1E22] text-white">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="Products & grades" title="GRADES THAT MATCH THE SPEC." titleClassName="text-white" />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
            {crushers.products?.slice(0, 3).map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08} className="flex flex-col gap-4 bg-[#23262B] p-7">
                <div className="flex items-center gap-3">
                  <Icon name={product.icon} label={product.name} className="h-5 w-5 text-[#E4A11B]" />
                  <span className="font-eyebrow text-white/60">{product.tag}</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white">{product.name}</h3>
                <p className="text-sm leading-relaxed text-white/70">{product.body}</p>
              </Reveal>
            )) ?? null}
          </div>
          <Reveal className="mt-10">
            <Button href="/crushers/products" variant="ghost-light" size="lg">
              Full grade list <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </Section>
      <Section ariaLabel="Projects" className="bg-brand-faint">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="Recent jobs" title="Material where the machines are." />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {crushers.projects?.slice(0, 2).map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.1} className="border border-line-var bg-white p-6">
                <p className="font-eyebrow text-muted-var">{project.client}</p>
                <h3 className="mt-1 font-display text-xl font-bold uppercase text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-var">{project.body}</p>
              </Reveal>
            )) ?? null}
          </div>
          <Reveal className="mt-8">
            <Button href="/crushers/projects" variant="outline">All projects</Button>
          </Reveal>
        </Container>
      </Section>

      <Section ariaLabel="Works statistics" className="bg-[#1B1E22] text-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Eyebrow className="text-[#E4A11B]">The numbers</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white">Output you can plan on.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <StatBlock stats={crushers.stats} className="grid-cols-2 lg:grid-cols-4" valueClassName="text-4xl text-white" labelClassName="text-white/55" />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button href="/crushers/materials" variant="ghost-light">Materials & geology</Button>
            <Button href="/crushers/contact">Order a quote</Button>
          </Reveal>
          {crushers.placeholderNote ? <Reveal className="mt-8"><PlaceholderNotice note={crushers.placeholderNote} dark /></Reveal> : null}
        </Container>
      </Section>
    </>
  );
}