import type { Metadata } from "next";
import { fourth } from "@/config/fourth";
import { makeMetadata } from "@/lib/metadata";
import { FourthInteriorHero } from "@/components/fourth/FourthInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Bitumen Products — ${fourth.name}`,
  description: "Bitumen product lines: penetration grade, viscosity grade, emulsions, polymer-modified and cutbacks.",
  path: "/fourth/products",
  image: fourth.metadata.ogImage,
  keywords: fourth.metadata.keywords,
});

export default function FourthProductsPage() {
  return (
    <>
      <FourthInteriorHero
        eyebrow="Bitumen products"
        title="Grade on the certificate, temperature in the tank."
        current="Products"
        lead="Product lines with indicative specs — technical data sheets issued with every quotation. Values marked […] are placeholders."
      />
      <Section ariaLabel="Product lines" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <ol className="divide-y divide-line-var border-t border-line-var">
            {fourth.products?.map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.06} className="grid gap-6 border-b border-line-var py-8 md:grid-cols-[90px_1fr_1fr]">
                <span className="font-display text-2xl font-semibold text-[#C9A227]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-eyebrow text-muted-var">{product.tag}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink">{product.name}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-var">{product.body}</p>
                </div>
                <ul className="flex flex-col gap-2 rounded-lg bg-brand-faint px-4 py-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-muted-var">
                      <Icon name="check" className="h-3.5 w-3.5 text-[#C9A227]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </ol>
          {fourth.placeholderNote ? <PlaceholderNotice note={fourth.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}