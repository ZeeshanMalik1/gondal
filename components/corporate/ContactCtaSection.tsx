import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

/** Corporate contact / enquiry CTA band. */
export function ContactCtaSection() {
  const contact = site.contact;
  return (
    <Section id="contact" ariaLabel="Contact the group" className="bg-surface">
      <Container className="rounded-2xl bg-brand-soft py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Start a conversation</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance lg:text-[2.9rem]">
              Let’s talk about building something together.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-var">
              Whether you are a buyer, a supplier, a contractor or a prospective team member,
              the surest way to reach the group is through the contact details below.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="mailto:info@gondalgroup.example.com" external>
                <Icon name="mail" className="h-4 w-4" />
                Email the group
              </Button>
              <Button href={`tel:+${contact.phone.replace(/\D/g, "")}`} external variant="outline">
                <Icon name="phone" className="h-4 w-4" />
                Call {site.shortName} Group
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="divide-y divide-line-var rounded-xl border border-line-var bg-paper">
              {[
                { icon: "phone", label: "Phone", value: contact.phone, href: `tel:+${contact.phone.replace(/\D/g, "")}` },
                { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                { icon: "whatsapp", label: "WhatsApp", value: contact.whatsapp ?? "", href: contact.whatsapp ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}` : "" },
                { icon: "pin", label: "Address", value: contact.address },
                { icon: "clock", label: "Office hours", value: contact.hours },
              ].map((row) => (
                <li key={row.label} className="flex items-center gap-4 px-5 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-soft">
                    <Icon name={row.icon} label={row.label} className="h-5 w-5 text-brand" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-var">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-0.5 block truncate text-sm font-medium text-ink">
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 block text-sm font-medium text-ink">{row.value}</p>
                    )}
                  </div>
                  {row.href ? <Icon name="arrow-up" className="ml-auto h-4 w-4 text-brand" /> : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}