import Link from "next/link";
import { site } from "@/config/site";
import { businesses } from "@/config";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { BrandLockup } from "@/components/branding/Logos";

const QUICK_LINKS = [
  { href: "/#about", label: "About the group" },
  { href: "/#why", label: "Why choose us" },
  { href: "/#numbers", label: "Group statistics" },
  { href: "/#locations", label: "Locations" },
  { href: "/#contact", label: "Contact" },
];

const SOCIAL_ICONS: Record<string, IconName> = {
  LinkedIn: "linkedin",
  Facebook: "facebook",
  Instagram: "instagram",
  YouTube: "youtube",
};

export function CorporateFooter() {
  return (
    <footer className="bg-surface-dark text-white">
      <Container className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1fr_1fr_1.1fr]">
        <div>
          <BrandLockup mark="group" name={site.shortName} sub={site.tagline} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {site.manifesto.body.split(".")[0]}.
          </p>
          <div className="mt-5 flex gap-3">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              >
                <Icon name={SOCIAL_ICONS[social.label] ?? "plus"} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer — businesses">
          <h2 className="font-eyebrow text-white/50">Our businesses</h2>
          <ul className="mt-4 space-y-3">
            {businesses.map((b) => (
              <li key={b.slug}>
                <Link href={`/${b.slug}`} className="group flex items-baseline gap-3 text-sm">
                  <span className="text-white/85 group-hover:text-white">{b.name}</span>
                  <span className="flex-1 border-b border-dotted border-white/20" aria-hidden="true" />
                  <span className="text-xs text-white/45">{b.industryTag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-eyebrow text-white/50">Head office</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-accent" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:+${site.contact.phone.replace(/\D/g, "")}`} className="hover:text-white">{site.contact.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="whatsapp" className="h-4 w-4 shrink-0 text-accent" />
              <span>{site.contact.whatsapp} <span className="text-white/45">(WhatsApp)</span></span>
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-accent" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {QUICK_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-accent hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/40">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/55">
            <a href="/#contact" className="hover:text-white">Contact</a>
            <a href="mailto:info@gondalgroup.example.com" className="hover:text-white">Careers</a>
          </div>
        </Container>
        {site.placeholderNote ? (
          <Container className="pb-5">
            <PlaceholderNotice note={site.placeholderNote} dark />
          </Container>
        ) : null}
      </div>
    </footer>
  );
}