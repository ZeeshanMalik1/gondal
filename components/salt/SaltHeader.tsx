"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { salt } from "@/config/salt";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function SaltHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50 bg-surface-dark text-white">
      {/* utility strip */}
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
            <BackToGroup className="text-white/80 hover:text-white" />
          </div>
        </Container>
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

        <div id="salt-menu" className={cn("border-t border-white/10", open ? "block" : "hidden")}>
          <Container className="flex flex-col gap-0.5 py-4">
            {salt.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium uppercase tracking-[0.08em]",
                  isActive(item.href) ? "bg-white/12 text-white" : "text-white/75 hover:bg-white/5 hover:text-white",
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