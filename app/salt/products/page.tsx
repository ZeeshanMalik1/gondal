import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Products — ${salt.name}`,
  description: "Rock salt products and grades: Himalayan pink, industrial rock salt, iodised table salt, de-icing and feed salt.",
  path: "/salt/products",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltProductsPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Products"
        title="Five product lines, one source."
        current="Products"
        lead="Each line below shows indicative specs. Full technical data sheets are issued with every quotation. Figures marked […] are placeholders."
      />

      <Section ariaLabel="Product lines" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-[var(--grid-gap)] md:grid-cols-2">
            {salt.products?.map((product, i) => (
              <Reveal key={product.name} delay={(i % 2) * 0.08} className="card card-lift flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--card-radius)] bg-brand-soft text-brand">
                    <Icon name={product.icon} label={product.name} className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-5 font-eyebrow text-muted-var">{product.tag}</p>
                <h2 className="mt-2 font-display text-2xl font-medium text-ink">{product.name}</h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-var">{product.body}</p>

                <ul className="mt-5 grid gap-2 border-t border-line-var pt-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2.5 text-sm text-muted-var">
                      <Icon name="check" className="h-3.5 w-3.5 text-brand" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-12">
            <div className="card flex flex-col gap-5 bg-brand text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl font-medium text-white">Need a grade we don’t list?</h2>
                <p className="mt-1.5 text-sm text-white/70">
                  Send us the specification — we will tell you honestly whether we can mill it.
                </p>
              </div>
              <a
                href={`mailto:${salt.contact.email}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-[var(--card-radius)] bg-accent px-5 py-3 text-sm font-semibold text-surface-dark transition hover:bg-white"
              >
                <Icon name="mail" className="h-4 w-4" />
                Send a specification
              </a>
            </div>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}
