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

      {/* About — plate and copy on a 12-column grid, then a three-up card row */}
      <Section ariaLabel="About the works" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="relative lg:col-span-7">
              <Figure
                src={salt.images.about ?? "/images/salt/crystals-pink.svg"}
                alt="Pink salt crystals — placeholder artwork"
                className="aspect-[4/3] w-full overflow-hidden rounded-[var(--card-radius)] border border-line-var"
              />
              <p className="absolute -bottom-4 left-5 inline-flex items-center gap-2 rounded-[var(--card-radius)] bg-brand px-4 py-2 text-sm font-semibold text-white">
                <Icon name="crystal" className="h-4 w-4" />
                {salt.intro.points[0].title}
              </p>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeader eyebrow={salt.intro.eyebrow} title={salt.intro.headline} />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-8 text-ink">{salt.intro.body}</p>
                <p className="mt-4 leading-8 text-muted-var">{salt.intro.bodySecondary}</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-14 grid gap-[var(--grid-gap)] md:grid-cols-3">
            {salt.intro.points.map((point, i) => (
              <Reveal key={point.title} delay={(i % 3) * 0.08} className="card card-lift">
                <span className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] bg-brand-soft text-brand">
                  <Icon name={point.icon} label={point.title} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-var">{point.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Products — boxed three-up grid on a white sheet */}
      <Section ariaLabel="Products" className="border-y border-line-var bg-brand-faint">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <SectionHeader
              eyebrow="What we make"
              title="Salt for tables, factories and roads."
              lead="Three of five lines, each milled and graded to a written specification."
            />
          </Reveal>

          <div className="mt-10 grid gap-[var(--grid-gap)] md:grid-cols-2 lg:grid-cols-3">
            {salt.products?.slice(0, 3).map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08} className="card card-lift flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[var(--card-radius)] bg-brand-soft text-brand">
                    <Icon name={product.icon} label={product.name} className="h-5 w-5" />
                  </span>
                  <span className="font-eyebrow text-muted-var">{product.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-ink">{product.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-var">{product.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2 border-t border-line-var pt-4">
                  {product.specs.slice(0, 2).map((spec) => (
                    <li key={spec} className="chip">{spec}</li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-10">
            <Button href="/salt/products" size="lg">
              Full product list
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Process — five steps plus a CTA cell to close a six-up grid */}
      <Section ariaLabel="Processing" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <SectionHeader
              eyebrow="Mine to market"
              title="Five controlled steps to dependable salt."
              className="max-w-2xl"
            />
          </Reveal>

          <ol className="mt-10 grid gap-[var(--grid-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {salt.process?.map((step, i) => (
              <Reveal
                key={step.no}
                delay={(i % 3) * 0.07}
                className="card flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-3xl font-medium text-brand">{step.no}</span>
                  <Icon name={step.icon} label={step.title} className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-var">{step.body}</p>
              </Reveal>
            )) ?? null}

            <Reveal delay={0.14} className="card flex flex-col justify-between gap-6 bg-brand text-white">
              <p className="font-display text-3xl font-medium text-accent">06</p>
              <div>
                <h3 className="font-display text-lg font-medium text-white">See the plant</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Buyers are welcome to walk the mill. Ask for a visit date with your enquiry.
                </p>
              </div>
              <Button href="/salt/processing" variant="ghost-light">
                Inside the plant
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </Reveal>
          </ol>
        </Container>
      </Section>

      {/* Quality and export — two wide cards */}
      <Section ariaLabel="Quality and export" className="border-y border-line-var bg-brand-faint">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-[var(--grid-gap)] lg:grid-cols-2">
            {[
              {
                eyebrow: "Quality",
                title: "Certificates, not adjectives.",
                body: "Every lot leaves with a certificate of analysis, and every bag carries a batch code that ties it back to the mine face.",
                href: "/salt/quality",
                label: "Our quality promise",
                icon: "lab" as const,
              },
              {
                eyebrow: "Export",
                title: "Packed for buyers abroad.",
                body: "Documentation, labelling and packing built around the paperwork an importer actually has to file.",
                href: "/salt/export",
                label: "Export capability",
                icon: "ship" as const,
              },
            ].map((block, i) => (
              <Reveal key={block.href} delay={i * 0.1} className="card card-lift flex flex-col">
                <span className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] bg-brand text-white">
                  <Icon name={block.icon} label={block.eyebrow} className="h-5 w-5" />
                </span>
                <Eyebrow className="mt-5">{block.eyebrow}</Eyebrow>
                <h3 className="mt-2 font-display text-2xl font-medium text-ink">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-var">{block.body}</p>
                <div className="mt-6">
                  <Button href={block.href} variant="outline">
                    {block.label}
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Statistics */}
      <Section ariaLabel="Works statistics" className="bg-surface-dark text-white">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Eyebrow className="text-accent">At a glance</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium text-white sm:text-4xl">
              Measured in tonnes, shipped in confidence.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <StatBlock
              stats={salt.stats}
              itemClassName="rounded-[var(--card-radius)] border border-white/12 bg-white/5 px-5 py-4"
              valueClassName="font-display text-3xl font-medium text-white sm:text-4xl"
              labelClassName="text-white/55"
            />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap gap-3">
            <Button href="/salt/contact" size="lg">Talk to commercial</Button>
            <Button href="/salt/products" variant="ghost-light" size="lg">See the product list</Button>
          </Reveal>
          {salt.placeholderNote ? (
            <Reveal className="mt-8">
              <PlaceholderNotice note={salt.placeholderNote} dark />
            </Reveal>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
