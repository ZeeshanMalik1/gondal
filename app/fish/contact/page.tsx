import type { Metadata } from "next";
import { fish } from "@/config/fish";
import { makeMetadata } from "@/lib/metadata";
import { FishInteriorHero } from "@/components/fish/FishInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Contact — ${fish.name}`,
  description: "Order fish, ask about availability, or visit the farm — contact the farm office.",
  path: "/fish/contact",
  image: fish.metadata.ogImage,
  keywords: fish.metadata.keywords,
});

const ROWS: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Phone", value: fish.contact.phone, href: `tel:${fish.contact.phone.replace(/\s/g, "")}` },
  { icon: "whatsapp", label: "WhatsApp", value: fish.contact.whatsapp ?? "", href: fish.contact.whatsapp ? `https://wa.me/${fish.contact.whatsapp.replace(/\D/g, "")}` : "" },
  { icon: "mail", label: "Email", value: fish.contact.email, href: `mailto:${fish.contact.email}` },
  { icon: "pin", label: "Farm address", value: fish.contact.address },
  { icon: "clock", label: "Office hours", value: fish.contact.hours },
];

export default function FishContactPage() {
  return (
    <>
      <FishInteriorHero
        eyebrow="Contact & orders"
        title="Talk to the farm, not a call centre."
        lead="Orders, rates and visits all run through the farm office — a human being answers."
        current="Contact"
      />

      <Section ariaLabel="Contact details" className="bg-surface">
        <Container className="py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink">Send an enquiry</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-var">
                Your message is labelled with the <strong className="text-ink">fish farm</strong> so it reaches the right desk.
              </p>
              <ContactForm
                businessName={fish.name}
                businessSlug={fish.slug}
                recipientEmail={fish.contact.email}
                className="mt-8"
              />
            </Reveal>

            <Reveal delay={0.12} className="lg:sticky lg:top-8 self-start">
              <div className="rounded-2xl border border-line-var bg-white p-8">
                <p className="font-eyebrow text-brand">Farm office</p>
                <ul className="mt-6 divide-y divide-line-var">
                  {ROWS.map((row) => (
                    <li key={row.label} className="flex items-center gap-4 py-4">
                      <Icon name={row.icon} label={row.label} className="h-5 w-5 shrink-0 text-brand" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.14em] text-muted-var">{row.label}</p>
                        {row.href ? (
                          <a href={row.href} className="mt-0.5 block truncate text-sm font-medium text-ink hover:text-brand">{row.value}</a>
                        ) : (
                          <p className="mt-0.5 block text-sm font-medium text-ink">{row.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid place-items-center rounded-xl border border-dashed border-line-var bg-brand-faint py-12">
                  <div className="text-center">
                    <Icon name="pin" className="h-7 w-7 text-brand" />
                    <p className="mt-3 text-sm font-medium text-ink">Map placeholder</p>
                    <p className="mt-1 text-xs text-muted-var">Embed farm location — {fish.contact.city}</p>
                  </div>
                </div>
              </div>
              {fish.placeholderNote ? <PlaceholderNotice note={fish.placeholderNote} className="mt-5" /> : null}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}