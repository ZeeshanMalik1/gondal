import type { Metadata } from "next";
import { crushers } from "@/config/crushers";
import { makeMetadata } from "@/lib/metadata";
import { CrushersInteriorHero } from "@/components/crushers/CrushersInteriorHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata: Metadata = makeMetadata({
  title: `Contact — ${crushers.name}`,
  description: "Order aggregate, arrange site visits and request technical data from the crushing works.",
  path: "/crushers/contact",
  image: crushers.metadata.ogImage,
  keywords: crushers.metadata.keywords,
});

export default function CrushersContactPage() {
  return (
    <>
      <CrushersInteriorHero eyebrow="Contact" title="QUOTES MOVE IN LOADS, NOT LETTERS." current="Contact" />
      <Section ariaLabel="Contact the works" className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold uppercase text-ink">Request a quote</h2>
              <ContactForm businessName={crushers.name} businessSlug={crushers.slug} recipientEmail={crushers.contact.email} className="mt-8" />
            </Reveal>
            <Reveal delay={0.12} className="self-start lg:sticky lg:top-8">
              <div className="border border-line-var bg-[#1B1E22] p-8 text-white">
                <p className="font-eyebrow text-[#E4A11B]">Plant office</p>
                <ul className="mt-6 divide-y divide-white/10">
                  {([
                    ["phone", "Phone", crushers.contact.phone, `tel:${crushers.contact.phone.replace(/\s/g, "")}`],
                    ["whatsapp", "WhatsApp", crushers.contact.whatsapp ?? "", crushers.contact.whatsapp ? `https://wa.me/${crushers.contact.whatsapp.replace(/\D/g, "")}` : ""],
                    ["mail", "Email", crushers.contact.email, `mailto:${crushers.contact.email}`],
                    ["pin", "Address", crushers.contact.address, ""],
                    ["clock", "Hours", crushers.contact.hours, ""],
                  ] as const).map(([icon, label, value, href]) => (
                    <li key={label} className="flex items-center gap-4 py-4">
                      <Icon name={icon} label={label} className="h-5 w-5 shrink-0 text-[#E4A11B]" />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/55">{label}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 block truncate text-sm font-medium text-white hover:text-white">{value}</a>
                        ) : (
                          <p className="mt-0.5 block text-sm font-medium text-white">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {crushers.placeholderNote ? <PlaceholderNotice note={crushers.placeholderNote} className="mt-5" /> : null}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}