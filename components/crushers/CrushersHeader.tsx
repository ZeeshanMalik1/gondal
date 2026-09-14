"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { crushers } from "@/config/crushers";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function CrushersHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50 border-b-4 border-[#E4A11B] bg-[#1B1E22] text-white">
      {/* utility strip */}
      <div className="border-b border-white/10">
        <Container className="flex items-center justify-between gap-4 py-2.5">
          <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/70">
            <span className="h-2 w-2 bg-[#E4A11B]" aria-hidden="true" />
            {crushers.name} · {crushers.est}
          </p>
          <div className="flex items-center gap-5">
            <a href={`tel:${crushers.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
              {crushers.contact.phone}
            </a>
            <BackToGroup className="text-white/80 hover:text-white" />
          </div>
        </Container>
      </div>

      {/* main bar */}
      <div className="border-b border-white/10">
        <Container className="flex items-center justify-between gap-6 py-4">
          <Link href="/crushers" aria-label={`${crushers.name} — home`} className="shrink-0">
            <BrandLockup mark="crushers" name={crushers.shortName.toUpperCase()} sub={crushers.industryTag.toUpperCase()} tone="on-dark" />
          </Link>

          <nav aria-label="Crushing Works" className="hidden lg:flex lg:items-center">
            {crushers.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "px-3.5 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.08em] transition-colors",
                  isActive(item.href) ? "bg-[#E4A11B] text-[#16181C]" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/crushers/contact"
            className="hidden shrink-0 bg-[#E4A11B] px-4 py-2.5 text-sm font-bold uppercase tracking-[0.06em] text-[#16181C] transition hover:bg-[#B97F12] md:inline-flex"
          >
            Order aggregate
          </Link>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/20 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="crushers-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>

        <div id="crushers-menu" className={cn("border-t border-white/10", open ? "block" : "hidden")}>
          <Container className="flex flex-col py-4">
            {crushers.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-bold uppercase tracking-[0.08em]",
                  isActive(item.href) ? "bg-[#E4A11B] text-[#16181C]" : "text-white/75 hover:bg-white/5",
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </div>
      </div>
    </header>
  );
}