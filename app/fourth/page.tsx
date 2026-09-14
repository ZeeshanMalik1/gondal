import type { Metadata } from "next";
import { fourth } from "@/config/fourth";
import { makeMetadata } from "@/lib/metadata";
import { FourthHero } from "@/components/fourth/FourthHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StatBlock } from "@/components/motion/StatBlock";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: fourth.metadata.title,
  description: fourth.metadata.description,
  path: "/fourth",
  image: fourth.metadata.ogImage,
  keywords: fourth.metadata.keywords,
});

export default function FourthHomePage() {
  return (
    <>
      <FourthHero />

      <Section ariaLabel="About the supply house" className="bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeader eyebrow={fourth.intro.eyebrow} title={fourth.intro.headline} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-ink">{fourth.intro.body}</p>
                <p className="mt-4 leading-8 text-muted-var">{fourth.intro.bodySecondary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                  {fourth.intro.points.map((point) => (
                    <li key={point.title} className="flex flex-col gap-2.5 rounded-lg border border-line-var bg-white p-5">
                      <Icon name={point.icon} label={point.title} className="h-5 w-5 text-[#C9A227]" />
                      <h3 className="text-sm font-semibold text-ink">{point.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-var">{point.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="relative">
              <Figure src={fourth.images.about ?? "/images/fourth/depot-tanks.svg"} alt="Depot storage tanks at dusk — placeholder artwork" className="aspect-[4/3] w-full border border-line-var" />
              <p className="absolute -bottom-5 right-5 inline-flex items-center gap-2 rounded-lg bg-[#C9A227]/15 px-4 py-2 text-sm font-semibold text-[#20231F]">
                <Icon name="gauge" className="h-4 w-4" />
                {fourth.intro.points[0].title}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section ariaLabel="Bitumen products" className="bg-brand-soft">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="What we supply" title="Grades that keep the paving train moving." titleClassName="text-4xl" />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line-var bg-surface-dark sm:grid-cols-2 lg:grid-cols-3">
            {fourth.products?.slice(0, 3).map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08} className="flex flex-col gap-4 bg-white p-7">
                <div className="flex items-center gap-3">
                  <Icon name={product.icon} label={product.name} className="h-5 w-5 text-[#C9A227]" />
                  <span className="font-eyebrow text-muted-var">{product.tag}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-var">{product.body}</p>
              </Reveal>
            )) ?? null}
          </div>
          <Reveal className="mt-10">
            <Button href="/fourth/products" variant="outline" size="lg">
              Full bitumen range <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </Section>
      <Section ariaLabel="Supply runs" className="border-t border-line-var bg-surface">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="On the ground" title="Supply runs we’re proud to schedule." />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {fourth.projects?.slice(0, 2).map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.1} className="border border-line-var bg-white p-6">
                <p className="font-eyebrow text-muted-var">{project.client}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-var">{project.body}</p>
              </Reveal>
            )) ?? null}
          </div>
          <Reveal className="mt-8">
            <Button href="/fourth/projects" variant="outline">All supply runs</Button>
          </Reveal>
        </Container>
      </Section>

      <Section ariaLabel="Supply house statistics" className="bg-[#14151A] text-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Eyebrow className="text-[#C9A227]">The supply house in numbers</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Throughput you can schedule against.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <StatBlock stats={fourth.stats} className="grid-cols-2 lg:grid-cols-4" valueClassName="font-display text-4xl font-semibold text-white" labelClassName="text-white/55" />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button href="/fourth/contact" variant="ghost-light">Request a supply quote</Button>
          </Reveal>
          {fourth.placeholderNote ? <Reveal className="mt-8"><PlaceholderNotice note={fourth.placeholderNote} dark /></Reveal> : null}
        </Container>
      </Section>
    </>
  );
}