import Link from "next/link";
import { crushers } from "@/config/crushers";
import { site } from "@/config";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function CrushersFooter() {
  return (
    <footer className="border-t-4 border-[#E4A11B] bg-[#16181C] text-white">
      <Container className="grid gap-10 border-t border-white/10 pt-14 pb-14 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <BrandLockup mark="crushers" name={crushers.shortName.toUpperCase()} sub={crushers.industryTag.toUpperCase()} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{crushers.summary}</p>
        </div>

        <nav aria-label="Crushing Works footer">
          <h2 className="font-eyebrow text-white/60">Works</h2>
          <ul className="mt-4 space-y-2.5">
            {crushers.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2.5 text-[0.85rem] font-medium text-white/80 hover:text-white">
                  <span className="font-mono text-xs text-[#E4A11B]">§</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-eyebrow text-white/60">Plant office</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5"><Icon name="pin" className="h-4 w-4 shrink-0 text-[#E4A11B]" /><span>{crushers.contact.address}</span></li>
            <li className="flex items-center gap-2.5"><Icon name="phone" className="h-4 w-4 shrink-0 text-[#E4A11B]" /><a href={`tel:${crushers.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{crushers.contact.phone}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="mail" className="h-4 w-4 shrink-0 text-[#E4A11B]" /><a href={`mailto:${crushers.contact.email}`} className="hover:text-white">{crushers.contact.email}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="clock" className="h-4 w-4 shrink-0 text-[#E4A11B]" /><span>{crushers.contact.hours}</span></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {crushers.legalName}. Part of the {site.name}.</p>
          <BackToGroup dark />
        </Container>
        {crushers.placeholderNote ? (
          <Container className="pb-5">
            <PlaceholderNotice note={crushers.placeholderNote} dark />
          </Container>
        ) : null}
      </div>
    </footer>
  );
}