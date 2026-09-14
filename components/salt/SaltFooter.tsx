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
    <footer className="border-t border-[#D6A08A]/30 bg-surface-dark text-white">
      <Container className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <BrandLockup mark="salt" name={salt.shortName} sub={salt.tagline} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{salt.summary}</p>
          <p className="mt-4 text-xs text-white/50">From [Salt Range], Pakistan — mine to market under one hand.</p>
        </div>

        <nav aria-label="Salt Works footer">
          <h2 className="font-eyebrow text-white/55">Works</h2>
          <ul className="mt-4 space-y-2.5">
            {salt.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <span className="h-1.5 w-1.5 bg-[#D6A08A]" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/salt/facilities" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <span className="h-1.5 w-1.5 bg-[#D6A08A]" aria-hidden="true" />
                Facilities
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-eyebrow text-white/55">Contact the works</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5"><Icon name="pin" className="h-4 w-4 shrink-0 text-[#D6A08A]" /><span>{salt.contact.address}</span></li>
            <li className="flex items-center gap-2.5"><Icon name="phone" className="h-4 w-4 shrink-0 text-[#D6A08A]" /><a href={`tel:${salt.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{salt.contact.phone}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="mail" className="h-4 w-4 shrink-0 text-[#D6A08A]" /><a href={`mailto:${salt.contact.email}`} className="hover:text-white">{salt.contact.email}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="clock" className="h-4 w-4 shrink-0 text-[#D6A08A]" /><span>{salt.contact.hours}</span></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {salt.legalName}. Part of the {site.name}.</p>
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