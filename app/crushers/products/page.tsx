import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Products & Grades — ${crushers.name}`,
  description: "Standard aggregate grades: coarse, mid, fine crush, road base and rail ballast with indicative specs.",
  path: "/crushers/products",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersProductsPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Products & grades" title="AGGREGATE BY THE SPEC, NOT BY THE EYE." current="Products" lead="Grade lines with indicative specs — technical data sheets issued with each quotation. Values marked […] are placeholders." />
      <Section ariaLabel="Grade list" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="divide-y divide-line-var border-t border-line-var">
            {crushers.products?.map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.06} className="grid gap-6 border-b border-line-var py-8 md:grid-cols-[90px_1fr_1fr]">
                <span className="font-display text-2xl font-bold text-[#E4A11B]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-eyebrow text-muted-var">{product.tag}</p>
                  <h2 className="mt-1 font-display text-xl font-bold uppercase text-ink">{product.name}</h2>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-var">{product.body}</p>
                </div>
                <ul className="flex flex-col gap-2 bg-[#1B1E22] px-4 py-4 text-sm">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2.5 text-white/85">
                      <span className="h-2 w-2 bg-[#E4A11B]" aria-hidden="true" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )) ?? null}
          </div>
          {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}