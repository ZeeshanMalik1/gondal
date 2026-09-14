import type { Metadata } from "next";
import { salt } from "@/config/salt";
import { makeMetadata } from "@/lib/metadata";
import { SaltInteriorHero } from "@/components/salt/SaltInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Contact — ${salt.name}`,
  description: "Request quotations, samples and plant visits from the salt works.",
  path: "/salt/contact",
  image: salt.metadata.ogImage,
  keywords: salt.metadata.keywords,
});

export default function SaltContactPage() {
  return (
    <>
      <SaltInteriorHero
        eyebrow="Contact & quotations"
        title="Quotations answered in working days, not weeks."
        current="Contact"
      />
      <Section ariaLabel="Contact the works" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink">Request a quote or sample</h2>
              <ContactForm businessName={salt.name} businessSlug={salt.slug} recipientEmail={salt.contact.email} className="mt-8" />
            </Reveal>
            <Reveal delay={0.12} className="self-start lg:sticky lg:top-8">
              <div className="rounded-sm border border-line-var bg-white p-8">
                <p className="font-eyebrow text-brand">Works office</p>
                <ul className="mt-6 divide-y divide-line-var">
                  {[
                    ["phone", "Phone", salt.contact.phone, `tel:${salt.contact.phone.replace(/\s/g, "")}`],
                    ["whatsapp", "WhatsApp", salt.contact.whatsapp ?? "", salt.contact.whatsapp ? `https://wa.me/${salt.contact.whatsapp.replace(/\D/g, "")}` : ""],
                    ["mail", "Email", salt.contact.email, `mailto:${salt.contact.email}`],
                    ["pin", "Address", salt.contact.address, ""],
                    ["clock", "Hours", salt.contact.hours, ""],
                  ].map(([icon, label, value, href]) => (
                    <li key={label} className="flex items-center gap-4 py-4">
                      <Icon name={icon} label={label} className="h-5 w-5 shrink-0 text-brand" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.14em] text-muted-var">{label}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 block truncate text-sm font-medium text-ink hover:text-brand">{value}</a>
                        ) : (
                          <p className="mt-0.5 block text-sm font-medium text-ink">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {salt.placeholderNote ? <PlaceholderNotice note={salt.placeholderNote} className="mt-5" /> : null}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}