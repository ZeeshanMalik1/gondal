import type { Metadata } from "next";
import { fourth } from "@/config/fourth";
import { makeMetadata } from "@/lib/metadata";
import { FourthInteriorHero } from "@/components/fourth/FourthInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Contact — ${fourth.name}`,
  description: "Request bitumen quotations, samples and yard visits from the Black Gold Supply yard.",
  path: "/fourth/contact",
  image: fourth.metadata.ogImage,
  keywords: fourth.metadata.keywords,
});

export default function FourthContactPage() {
  return (
    <>
      <FourthInteriorHero
        eyebrow="Contact & quotations"
        title="Quotes in working days, supply on the day."
        current="Contact"
      />
      <Section ariaLabel="Contact the yard" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink">Request a supply quote</h2>
              <ContactForm businessName={fourth.name} businessSlug={fourth.slug} recipientEmail={fourth.contact.email} className="mt-8" />
            </Reveal>
            <Reveal delay={0.12} className="self-start lg:sticky lg:top-8">
              <div className="rounded-lg border border-line-var bg-[#14151A] p-8 text-white">
                <p className="font-eyebrow text-[#C9A227]">Yard office</p>
                <ul className="mt-6 divide-y divide-white/10">
                  {[
                    ["phone", "Phone", fourth.contact.phone, `tel:${fourth.contact.phone.replace(/\s/g, "")}`],
                    ["whatsapp", "WhatsApp", fourth.contact.whatsapp ?? "", fourth.contact.whatsapp ? `https://wa.me/${fourth.contact.whatsapp.replace(/\D/g, "")}` : ""],
                    ["mail", "Email", fourth.contact.email, `mailto:${fourth.contact.email}`],
                    ["pin", "Address", fourth.contact.address, ""],
                    ["clock", "Hours", fourth.contact.hours, ""],
                  ].map(([icon, label, value, href]) => (
                    <li key={label} className="flex items-center gap-4 py-4">
                      <Icon name={icon} label={label} className="h-5 w-5 shrink-0 text-[#C9A227]" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/55">{label}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 block truncate text-sm font-medium text-white">{value}</a>
                        ) : (
                          <p className="mt-0.5 block text-sm font-medium text-white">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {fourth.placeholderNote ? <PlaceholderNotice note={fourth.placeholderNote} className="mt-5" /> : null}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}