"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/config/site";
import { businesses } from "@/config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-50 bg-surface-dark text-white">
      {/* utility strip */}
      <div className="hidden border-b border-white/10 lg:block">
        <Container className="flex items-center justify-between py-2.5">
          <p className="text-xs tracking-wide text-white/60">
            {site.legalName} · {site.est}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/75">
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

      {/* main bar */}
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" aria-label={`${site.name} — home`} className="shrink-0">
          <BrandLockup mark="group" name={site.shortName} sub={site.tagline} tone="on-dark" />
        </Link>

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
          className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="corp-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      {/* mobile panel */}
      <div
        id="corp-menu"
        className={cn(
          "border-t border-white/10 bg-surface-dark lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-3 text-[0.95rem] font-medium text-white/85 hover:text-white"
            >
              {item.label}
              <Icon name="arrow-right" className="h-4 w-4 text-brand" />
            </a>
          ))}
          <div className="mt-4 grid gap-1.5">
            {businesses.map((b) => (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-md border border-white/10 px-3 py-2.5 text-sm text-white/80 hover:bg-white/5"
              >
                <span className="text-accent" aria-hidden="true">◆</span>
                {b.name}
                <span className="ml-auto text-xs text-white/40">{b.industryTag}</span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}