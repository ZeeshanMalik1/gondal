"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { crushers } from "@/config/crushers";
import { useScrolled } from "@/lib/useScrolled";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function CrushersHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header
      data-sticky-header
      className={cn(
        "sticky top-0 z-50 border-b-4 border-[#E4A11B] bg-[#1B1E22] text-white transition-shadow duration-300",
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
          <Container className="flex items-center justify-between gap-3 py-2.5">
            <p className="inline-flex min-w-0 items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/70">
              <span className="h-2 w-2 shrink-0 bg-[#E4A11B]" aria-hidden="true" />
              <span className="truncate">{crushers.name} · {crushers.est}</span>
            </p>
            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
              <a href={`tel:${crushers.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white">
                <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
                {crushers.contact.phone}
              </a>
              <BackToGroup className="hidden text-white/80 hover:text-white sm:inline-flex" />
            </div>
          </Container>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b border-white/10">
        <Container className="flex items-center justify-between gap-3 py-3.5 sm:gap-6 sm:py-4">
          <Link href="/crushers" aria-label={`${crushers.name} — home`} className="min-w-0">
            <BrandLockup mark="crushers" name={crushers.shortName.toUpperCase()} sub={crushers.industryTag.toUpperCase()} tone="on-dark" />
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <nav aria-label="Crushing Works" className="hidden lg:flex lg:items-center lg:gap-0.5 xl:gap-1">
              {crushers.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "px-2.5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-colors xl:px-3.5",
                    isActive(item.href) ? "bg-[#E4A11B] text-[#16181C]" : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/crushers/contact"
              className="hidden shrink-0 bg-[#E4A11B] px-4 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-[#16181C] transition hover:bg-[#B97F12] md:inline-flex lg:hidden xl:inline-flex"
            >
              Order aggregate
            </Link>

            <button
              type="button"
              className="relative z-10 grid h-11 w-11 shrink-0 place-items-center border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="crushers-menu"
              aria-haspopup="dialog"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </div>

      {/* mobile drawer */}
      <MobileMenu
        id="crushers-menu"
        open={open}
        onClose={() => setOpen(false)}
        label="Crushing Works"
        tone="dark"
        title={crushers.name}
      >
        <ul className="flex flex-col">
          {crushers.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-[48px] items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-[0.08em]",
                  isActive(item.href)
                    ? "bg-[#E4A11B] text-[#16181C]"
                    : "text-white/75 hover:bg-white/5",
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
            href="/crushers/contact"
            onClick={() => setOpen(false)}
            className="flex min-h-[48px] items-center justify-center bg-[#E4A11B] px-4 text-sm font-bold uppercase tracking-[0.06em] text-[#16181C] hover:bg-[#B97F12]"
          >
            Order aggregate
          </Link>
          <a
            href={`tel:${crushers.contact.phone.replace(/\s/g, "")}`}
            className="flex min-h-[48px] items-center gap-3 border border-white/10 px-4 text-sm text-white/80 hover:bg-white/5"
          >
            <Icon name="phone" className="h-4 w-4 text-[#E4A11B]" />
            {crushers.contact.phone}
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}
