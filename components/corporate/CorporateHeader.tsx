"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/config/site";
import { businesses } from "@/config";
import { useScrolled } from "@/lib/useScrolled";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { BrandLockup } from "@/components/branding/Logos";

const NAV = [
  { href: "/#about", label: "The Group" },
  { href: "/#businesses", label: "Businesses" },
  { href: "/#why", label: "Why Us" },
  { href: "/#locations", label: "Locations" },
  { href: "/#contact", label: "Contact" },
];

export function CorporateHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      data-sticky-header
      className={cn(
        "sticky top-0 z-50 bg-surface-dark text-white transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
      )}
    >
      {/* utility strip */}
      <div className="hidden border-b border-white/10 lg:block">
        <Container className="flex items-center justify-between gap-3 py-2.5">
          <p className="min-w-0 truncate text-xs tracking-wide text-white/60">
            {site.legalName} · {site.est}
          </p>
          <div className="flex shrink-0 items-center gap-4 text-xs text-white/75 sm:gap-6">
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" label="Email" />
              {site.contact.email}
            </a>
          </div>
        </Container>
      </div>

      {/* main bar — the wordmark truncates and the control cluster never
          shrinks, so the mobile toggle is always on-screen and tappable. */}
      <Container className="flex items-center justify-between gap-3 py-3.5 sm:gap-6 sm:py-4">
        <Link href="/" aria-label={`${site.name} — home`} className="min-w-0">
          <BrandLockup mark="group" name={site.shortName} sub={site.tagline} tone="on-dark" />
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.9rem] font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button href="/#businesses" size="sm" variant="accent" className="hidden sm:inline-flex">
            Explore businesses
          </Button>

          {/* mobile toggle */}
          <button
            type="button"
            className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="corp-menu"
            aria-haspopup="dialog"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {/* mobile drawer */}
      <MobileMenu
        id="corp-menu"
        open={open}
        onClose={() => setOpen(false)}
        label="Primary"
        tone="dark"
        title={site.legalName}
        hideBackLink
      >
        <ul className="flex flex-col">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center justify-between border-b border-white/10 py-3 text-[0.95rem] font-medium text-white/85 hover:text-white"
              >
                {item.label}
                <Icon name="arrow-right" className="h-4 w-4 text-accent" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-eyebrow text-white/45">Our businesses</p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {businesses.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/${b.slug}`}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center gap-2.5 rounded-md border border-white/10 px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
              >
                <span aria-hidden="true" className="text-accent">◆</span>
                {b.name}
                <span className="ml-auto text-xs text-white/40">{b.industryTag}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-2">
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            className="flex min-h-[48px] items-center gap-3 rounded-md border border-white/10 px-3 text-sm text-white/80 hover:bg-white/5"
          >
            <Icon name="phone" className="h-4 w-4 text-accent" />
            {site.contact.phone}
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="flex min-h-[48px] items-center gap-3 rounded-md border border-white/10 px-3 text-sm text-white/80 hover:bg-white/5"
          >
            <Icon name="mail" className="h-4 w-4 text-accent" />
            <span className="truncate">{site.contact.email}</span>
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}
