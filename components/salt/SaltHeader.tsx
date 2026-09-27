"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { salt } from "@/config/salt";
import { useScrolled } from "@/lib/useScrolled";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function SaltHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header
      data-sticky-header
      className={cn(
        "sticky top-0 z-50 bg-surface-dark text-white transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
      )}
    >
      {/* utility strip — collapses while scrolled to reclaim vertical space */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100",
        )}
      >
        <div className="border-b border-white/10">
          <Container className="flex items-center justify-between gap-4 py-2.5">
            <p className="inline-flex items-center gap-2 text-xs text-white/70">
              <Icon name="crystal" className="h-3.5 w-3.5 text-[#D6A08A]" />
              <span>{salt.name} · {salt.est}</span>
            </p>
            <div className="flex items-center gap-5">
              <a href={`tel:${salt.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white">
                <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
                {salt.contact.phone}
              </a>
              <BackToGroup className="hidden text-white/80 hover:text-white sm:inline-flex" />
            </div>
          </Container>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b border-white/10">
        <Container className="flex items-center justify-between gap-6 py-4.5">
          <Link href="/salt" aria-label={`${salt.name} — home`} className="shrink-0">
            <BrandLockup mark="salt" name={salt.shortName} sub={salt.tagline} tone="on-dark" />
          </Link>

          <nav aria-label="Salt Works" className="hidden lg:flex lg:items-center lg:gap-0.5">
            {salt.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "px-4 py-2.5 text-[0.9rem] font-medium uppercase tracking-[0.08em] transition-colors",
                  isActive(item.href) ? "bg-white/12 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/salt/contact"
            className="hidden shrink-0 rounded-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#D6A08A] hover:text-[#D6A08A] md:inline-flex"
          >
            Request a quote
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="salt-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>
      </div>

      {/* mobile drawer */}
      <MobileMenu
        id="salt-menu"
        open={open}
        onClose={() => setOpen(false)}
        label="Salt Works"
        tone="dark"
        title={salt.name}
      >
        <ul className="flex flex-col">
          {salt.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-[48px] items-center justify-between px-4 py-3 text-sm font-medium uppercase tracking-[0.08em]",
                  isActive(item.href) ? "bg-white/12 text-white" : "text-white/75 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
                <Icon name="chevron-right" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-2">
          <Link
            href="/salt/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-[48px] items-center justify-center border border-white/25 px-4 text-sm font-semibold text-white hover:border-[#D6A08A] hover:text-[#D6A08A]"
          >
            Request a quote
          </Link>
          <a
            href={`tel:${salt.contact.phone.replace(/\s/g, "")}`}
            className="flex min-h-[48px] items-center gap-3 border border-white/10 px-4 text-sm text-white/80 hover:bg-white/5"
          >
            <Icon name="phone" className="h-4 w-4 text-[#D6A08A]" />
            {salt.contact.phone}
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}
