import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltHero } from "@/components/salt/SaltHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StatBlock } from "@/components/motion/StatBlock";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: salt.metadata.title,
  description: salt.metadata.description,
  path: "/salt",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltHomePage() {
  return (
    <>
      <SaltHero />

      <Section ariaLabel="About the works" className="bg-surface">
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <Figure src={salt.images.about ?? "/images/salt/crystals-pink.svg"} alt="Pink salt crystals — placeholder artwork" className="aspect-[4/3] w-full rounded-sm border border-line-var" />
              <p className="absolute -bottom-5 right-6 inline-flex items-center gap-2 rounded-sm bg-[#D6A08A]/10 px-5 py-2.5 text-sm font-semibold text-[#8A5F4E]">
                <Icon name="crystal" className="h-4 w-4" />
                {salt.intro.points[0].title}
              </p>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeader eyebrow={salt.intro.eyebrow} title={salt.intro.headline} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-ink">{salt.intro.body}</p>
                <p className="mt-4 leading-8 text-muted-var">{salt.intro.bodySecondary}</p>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="mt-7 divide-y divide-line-var border border-line-var">
                  {salt.intro.points.map((point) => (
                    <li key={point.title} className="flex items-start gap-4 px-5 py-4">
                      <Icon name={point.icon} label={point.title} className="h-5 w-5 shrink-0 text-brand" />
                      <p className="text-sm leading-relaxed text-muted-var"><span className="font-semibold text-ink">{point.title} — </span>{point.body}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
      <Section ariaLabel="Products" className="bg-brand-faint">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="What we make" title="Salt for tables, factories and roads." />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line-var bg-surface-dark sm:grid-cols-3">
            {salt.products?.slice(0, 3).map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08} className="flex flex-col gap-4 bg-white p-7">
                <div className="flex items-center gap-3">
                  <Icon name={product.icon} label={product.name} className="h-5 w-5 text-accent" />
                  <span className="font-eyebrow text-muted-var">{product.tag}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-var">{product.body}</p>
              </Reveal>
            )) ?? null}
          </div>
          <Reveal className="mt-10">
            <Button href="/salt/products" variant="outline" size="lg">
              Full product list <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section ariaLabel="Processing" className="border-t border-line-var bg-surface">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <SectionHeader eyebrow="Mine to market" title="Six controlled steps to dependable salt." className="max-w-2xl" />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {salt.process?.map((step, i) => (
              <Reveal key={step.no} delay={(i % 6) * 0.06} className="flex flex-col gap-2.5 border border-line-var bg-white p-5">
                <span className="font-display text-2xl font-semibold text-brand">{step.no}</span>
                <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-var">{step.body}</p>
              </Reveal>
            )) ?? null}
          </ol>
          <Reveal className="mt-10 flex flex-wrap gap-4">
            <Button href="/salt/processing">Inside the plant</Button>
            <Button href="/salt/export" variant="outline">Export capability</Button>
          </Reveal>
        </Container>
      </Section>

      <Section ariaLabel="Works statistics" className="bg-surface-dark text-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Eyebrow className="text-[#D6A08A]">At a glance</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white">Measured in tonnes, shipped in confidence.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <StatBlock stats={salt.stats} className="grid-cols-2 lg:grid-cols-4" valueClassName="text-4xl text-white" labelClassName="text-white/55" />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-4">
            <Button href="/salt/quality" variant="outline">Our quality promise</Button>
            <Button href="/salt/contact">Talk to commercial</Button>
          </Reveal>
          {salt.placeholderNote ? <Reveal className="mt-8"><PlaceholderNotice note={salt.placeholderNote} dark /></Reveal> : null}
        </Container>
      </Section>
    </>
  );
}