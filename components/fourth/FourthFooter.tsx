import Link from "next/link";
import { fourth } from "@/config/fourth";
import { site } from "@/config";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FourthFooter() {
  return (
    <footer className="border-t border-[#C9A227] bg-[#14151A] text-white">
      <Container className="grid gap-10 border-t border-white/10 pt-14 pb-14 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <BrandLockup mark="fourth" name="Black Gold Supply" sub={fourth.tagline} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{fourth.summary}</p>
          <p className="mt-4 text-xs text-white/50">Part of the {site.name} · bitumen & road materials.</p>
        </div>

        <nav aria-label="Black Gold footer">
          <h2 className="font-eyebrow text-white/55">Supply house</h2>
          <ul className="mt-4 space-y-2.5">
            {fourth.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-eyebrow text-white/55">Yard office</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5"><Icon name="pin" className="h-4 w-4 shrink-0 text-[#C9A227]" /><span>{fourth.contact.address}</span></li>
            <li className="flex items-center gap-2.5"><Icon name="phone" className="h-4 w-4 shrink-0 text-[#C9A227]" /><a href={`tel:${fourth.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{fourth.contact.phone}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="mail" className="h-4 w-4 shrink-0 text-[#C9A227]" /><a href={`mailto:${fourth.contact.email}`} className="hover:text-white">{fourth.contact.email}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="clock" className="h-4 w-4 shrink-0 text-[#C9A227]" /><span>{fourth.contact.hours}</span></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {fourth.legalName}. Part of the {site.name}.</p>
          <BackToGroup dark />
        </Container>
        {fourth.placeholderNote ? (
          <Container className="pb-5">
            <PlaceholderNotice note={fourth.placeholderNote} dark />
          </Container>
        ) : null}
      </div>
    </footer>
  );
}