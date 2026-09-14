import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Export — ${salt.name}`,
  description: "Export capabilities of the salt works: documentation, packing, grade consistency and port logistics for international buyers.",
  path: "/salt/export",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltExportPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Export"
        title="Built for buyers who can’t visit the mine."
        current="Export"
        lead="Export buyers live on documents as much as product. Everything below is designed for that reality — destinations and coverage remain placeholders."
      />
      <Section ariaLabel="Export capability" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-sm border border-line-var bg-white p-8">
              <SectionHeader eyebrow="How we pack" title="Documents first, bags second." titleClassName="text-2xl" />
              <ul className="mt-5 space-y-3">
                {[
                  "Certificate of analysis with every lot",
                  "Packing list, bill of lading and origin docs on one ticket",
                  "Labelling per buyer spec (language, marks, lot codes)",
                  "Palletised, stretch-wrapped or bulk options",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-muted-var">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-brand" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-line-var bg-white p-8">
              <SectionHeader eyebrow="Destinations" title="Where we deliver." titleClassName="text-2xl" />
              <p className="mt-4 text-sm leading-relaxed text-muted-var">
                Current and targeted markets are placeholders pending the works’ confirmed export list.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {["[Region A]", "[Region B]", "[Market C]", "[Market D]", "[Volume buyer]"].map((m) => (
                  <li key={m} className="rounded-sm border border-line-var bg-brand-faint px-3 py-1.5 text-xs text-muted-var">{m}</li>
                ))}
              </ul>
            </div>
          </div>
          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}