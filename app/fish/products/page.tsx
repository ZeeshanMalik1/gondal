import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Products & Formats — ${fish.name}`,
  description: "How we sell our fish — live, chilled whole, fillets and value-added formats, packed for market.",
  path: "/fish/products",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

export default function FishProductsPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Products & formats"
        title="From water to order, in hours."
        lead="Every format below is produced to order. Confirm today’s availability, sizes and packing with the farm office."
        current="Products"
      />

      <Section ariaLabel="Product formats" className="bg-surface">
        <Container className="py-20">
          <div className="grid gap-x-10 gap-y-14 border-t border-line-var md:grid-cols-2">
            {fish.products?.map((product, i) => (
              <Reveal key={product.name} delay={(i % 2) * 0.1} className="flex flex-col border-b border-line-var">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft">
                    <Icon name={product.icon} label={product.name} className="h-6 w-6 text-brand" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-var">{product.tag}</p>
                    <h2 className="font-display text-2xl font-semibold text-ink">{product.name}</h2>
                  </div>
                </div>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-var">{product.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="rounded-full border border-line-var bg-brand-faint px-3 py-1 text-xs text-muted-var">{spec}</li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <a href="/fish/production" className="link-underline text-sm font-medium text-brand">See how our fish is produced →</a>
            <a href="/fish/contact" className="link-underline text-sm font-medium text-muted-var">Request today’s rate card →</a>
          </Reveal>

          {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}