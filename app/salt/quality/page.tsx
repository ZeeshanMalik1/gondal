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
  title: `Quality — ${salt.name}`,
  description: "How the works protects quality: raw material control, in-process checks, lab verification and traceability.",
  path: "/salt/quality",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

const PILLARS = [
  { icon: "mountain", title: "Raw material control", body: "Only material from leased, mapped deposits enters the plant. Every extraction batch is logged against its mine face." },
  { icon: "gauge", title: "In-process checks", body: "Sieve, moisture and visual checks run per shift on every line — deviations stop the line, not the paperwork." },
  { icon: "lab", title: "Lab verification", body: "Product lots are sampled and verified in the on-works lab for the parameters in the published spec sheet." },
  { icon: "net", title: "Traceability", body: "Lots carry batch codes linking bag to mill to mine face, so any customer claim can be answered in one phone call." },
];

export default function SaltQualityPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Quality"
        title="Quality you can measure, not just admire."
        current="Quality"
        lead="We treat every certificate of analysis as a promise. These pillars are how the promise is kept."
      />
      <Section ariaLabel="Quality pillars" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 border-t border-line-var lg:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 2) * 0.1} className="rounded-sm border border-line-var bg-white p-8">
                <div className="flex items-center gap-3.5">
                  <Icon name={pillar.icon} label={pillar.title} className="h-6 w-6 text-[#D6A08A]" />
                  <h2 className="font-display text-xl font-semibold text-ink">{pillar.title}</h2>
                </div>
                <p className="mt-4 leading-relaxed text-[0.98rem] text-muted-var">{pillar.body}</p>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-12 rounded-sm border border-line-var bg-brand-soft p-8">
            <SectionHeader eyebrow="Certifications" title="Documents we stand behind." titleClassName="text-2xl" />
            <p className="mt-4 text-sm leading-relaxed text-muted-var">
              Certification status and numbers are placeholders — replace with the works’ real
              certificates ([Food Safety], [ISO], [Export Registration]) and issue numbers when available.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {["[Certificate A]", "[Certificate B]", "[Export Reg.]", "[Test Reports]"].map((c) => (
                <li key={c} className="rounded-sm border border-line-var bg-white px-3 py-1.5 text-xs text-muted-var">{c}</li>
              ))}
            </ul>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}