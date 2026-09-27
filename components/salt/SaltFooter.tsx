import Link from "next/link";
import { salt } from "@/config/salt";
import { site } from "@/config";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function SaltFooter() {
  return (
    <footer className="bg-surface-dark text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <BrandLockup mark="salt" name={salt.shortName} sub={salt.tagline} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{salt.summary}</p>
          <p className="mt-4 text-xs text-white/45">From [Salt Range], Pakistan — mine to market under one hand.</p>
        </div>

        <nav aria-label="Salt Works footer" className="lg:col-span-4">
          <h2 className="font-eyebrow text-accent">Works</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {salt.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
                  <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/salt/facilities" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                Facilities
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-eyebrow text-accent">Contact the works</h2>
          <ul className="mt-5 grid gap-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{salt.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${salt.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{salt.contact.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${salt.contact.email}`} className="hover:text-white">{salt.contact.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="clock" className="h-4 w-4 shrink-0 text-accent" />
              <span>{salt.contact.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">© {new Date().getFullYear()} {salt.legalName}. Part of the {site.name}.</p>
          <BackToGroup dark />
        </Container>
        {salt.placeholderNote ? (
          <Container className="pb-5">
            <PlaceholderNotice note={salt.placeholderNote} dark />
          </Container>
        ) : null}
      </div>
    </footer>
  );
}
