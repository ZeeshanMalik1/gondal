"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { fourth } from "@/config/fourth";
import { useScrolled } from "@/lib/useScrolled";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FourthHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header
      data-sticky-header
      className={cn(
        "sticky top-0 z-50 border-b border-[#C9A227] bg-[#14151A] text-white transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.45)]",
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
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" aria-hidden="true" />
              {fourth.name} · {fourth.est}
            </p>
            <div className="flex items-center gap-5">
              <a href={`tel:${fourth.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white">
                <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
                {fourth.contact.phone}
              </a>
              <BackToGroup className="hidden text-white/80 hover:text-white sm:inline-flex" />
            </div>
          </Container>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b border-white/10">
        <Container className="flex items-center justify-between gap-6 py-4.5">
          <Link href="/fourth" aria-label={`${fourth.name} — home`} className="shrink-0">
            <BrandLockup mark="fourth" name="Black Gold Supply" sub={fourth.tagline} tone="on-dark" />
          </Link>

          <nav aria-label="Black Gold Supply" className="hidden lg:flex lg:items-center lg:gap-1">
            {fourth.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "border-b-[3px] border-transparent px-3 py-2.5 text-[0.9rem] font-medium text-white/75 transition hover:text-white",
                  isActive(item.href) && "border-[#C9A227] text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/fourth/contact"
            className="hidden shrink-0 bg-[#C9A227] px-4 py-2.5 text-sm font-semibold text-[#14151A] transition hover:bg-[#8F6F14] md:inline-flex"
          >
            Request supply
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="fourth-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>
      </div>

      {/* mobile drawer */}
      <MobileMenu
        id="fourth-menu"
        open={open}
        onClose={() => setOpen(false)}
        label="Black Gold Supply"
        tone="dark"
        title={fourth.name}
      >
        <ul className="flex flex-col">
          {fourth.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-[48px] items-center justify-between border-b border-white/10 px-4 py-3 text-sm font-medium text-white/80 hover:text-white",
                  isActive(item.href) && "bg-white/5 text-white",
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
            href="/fourth/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-[48px] items-center justify-center bg-[#C9A227] px-4 text-sm font-semibold text-[#14151A] hover:bg-[#8F6F14]"
          >
            Request supply
          </Link>
          <a
            href={`tel:${fourth.contact.phone.replace(/\s/g, "")}`}
            className="flex min-h-[48px] items-center gap-3 border border-white/10 px-4 text-sm text-white/80 hover:bg-white/5"
          >
            <Icon name="phone" className="h-4 w-4 text-[#C9A227]" />
            {fourth.contact.phone}
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}
