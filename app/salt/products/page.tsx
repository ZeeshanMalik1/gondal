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
          <ol className="divide-y divide-line-var border-t border-line-var">
            {salt.products?.map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.06} className="grid gap-6 border-b border-line-var py-9 md:grid-cols-[120px_1fr_1fr]">
                <span className="font-display text-3xl font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-eyebrow text-muted-var">{product.tag}</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{product.name}</h2>
                  <p className="mt-3 leading-relaxed text-[0.98rem] text-muted-var">{product.body}</p>
                </div>
                <ul className="flex flex-col gap-2 rounded-sm bg-brand-faint px-4 py-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-muted-var">
                      <Icon name="check" className="h-3.5 w-3.5 text-brand" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </ol>
          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}