import Link from "next/link";
import { fish } from "@/config/fish";
import { site } from "@/config";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FishFooter() {
  return (
    <footer className="bg-brand-deep text-white">
      <Container className="grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <BrandLockup mark="fish" name={`${fish.name.split(" ")[0]} ${fish.name.split(" ")[1] ?? "Fish"}`} sub={fish.tagline} tone="on-dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{fish.summary}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(fish.socials).map(([key, value]) => {
              const icon: IconName = key === "facebook" ? "facebook" : key === "instagram" ? "instagram" : key === "whatsapp" ? "whatsapp" : "plus";
              return (
                <a key={key} href={value.startsWith("+") ? `https://wa.me/${value.replace(/\D/g, "")}` : value} target="_blank" rel="noreferrer" aria-label={`${fish.name} on ${key}`} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:text-white">
                  <Icon name={icon} className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Fish Farm footer">
          <h2 className="font-eyebrow text-white/55">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {fish.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <Icon name="chevron-right" className="h-3.5 w-3.5 text-white/40 group-hover:text-white" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/fish/products" className="group inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <Icon name="chevron-right" className="h-3.5 w-3.5 text-white/40 group-hover:text-white" />
                Products & Formats
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-eyebrow text-white/55">Farm office</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5"><Icon name="pin" className="h-4 w-4 shrink-0 text-white/60" /><span>{fish.contact.address}</span></li>
            <li className="flex items-center gap-2.5"><Icon name="phone" className="h-4 w-4 shrink-0 text-white/60" /><a href={`tel:${fish.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{fish.contact.phone}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="mail" className="h-4 w-4 shrink-0 text-white/60" /><a href={`mailto:${fish.contact.email}`} className="hover:text-white">{fish.contact.email}</a></li>
            <li className="flex items-center gap-2.5"><Icon name="clock" className="h-4 w-4 shrink-0 text-white/60" /><span>{fish.contact.hours}</span></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} {fish.legalName}. Part of the {site.name}.</p>
          <BackToGroup dark />
        </Container>
        {fish.placeholderNote ? (
          <Container className="pb-5">
            <PlaceholderNotice note={fish.placeholderNote} dark />
          </Container>
        ) : null}
      </div>
    </footer>
  );
}