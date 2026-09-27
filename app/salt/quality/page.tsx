import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Quality — ${salt.name}`,
  description: "How the works protects quality: raw material control, in-process checks, lab verification and traceability.",
  path: "/salt/quality",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

const PILLARS: { icon: IconName; title: string; body: string }[] = [
  { icon: "mountain", title: "Raw material control", body: "Only material from leased, mapped deposits enters the plant. Every extraction batch is logged against its mine face." },
  { icon: "gauge", title: "In-process checks", body: "Sieve, moisture and visual checks run per shift on every line — deviations stop the line, not the paperwork." },
  { icon: "lab", title: "Lab verification", body: "Product lots are sampled and verified in the on-works lab for the parameters in the published spec sheet." },
  { icon: "trace", title: "Traceability", body: "Lots carry batch codes linking bag to mill to mine face, so any customer claim can be answered in one phone call." },
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
          <div className="grid gap-[var(--grid-gap)] sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 2) * 0.08} className="card card-lift">
                <span className="grid h-12 w-12 place-items-center rounded-[var(--card-radius)] bg-brand text-white">
                  <Icon name={pillar.icon} label={pillar.title} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-medium text-ink">{pillar.title}</h2>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-var">{pillar.body}</p>
              </Reveal>
            )) ?? null}
          </div>

          <Reveal className="mt-12 grid gap-[var(--grid-gap)] lg:grid-cols-12">
            <div className="card bg-brand-soft lg:col-span-7">
              <h2 className="font-display text-2xl font-medium text-ink">Documents we stand behind.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-var">
                Certification status and numbers are placeholders — replace with the works’ real
                certificates ([Food Safety], [ISO], [Export Registration]) and issue numbers when
                available.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["[Certificate A]", "[Certificate B]", "[Export Reg.]", "[Test Reports]"].map((c) => (
                  <li key={c} className="chip">{c}</li>
                ))}
              </ul>
            </div>

            <div className="card flex flex-col justify-between bg-surface-dark text-white lg:col-span-5">
              <div>
                <p className="font-eyebrow text-accent">Every lot, every time</p>
                <h2 className="mt-3 font-display text-2xl font-medium text-white">
                  A certificate with the invoice.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Ask for the analysis sheet with your order — it travels with the consignment, not
                  after it.
                </p>
              </div>
              <ul className="mt-7 grid gap-2.5">
                {["Purity (NaCl)", "Moisture", "Granulation", "Insolubles", "Iodine"].map((test) => (
                  <li key={test} className="flex items-center gap-2.5 text-sm text-white/75">
                    <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                    {test}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-8" /> : null}
        </Container>
      </Section>
    </>
  );
}
