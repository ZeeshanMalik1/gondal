"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { fourth } from "@/config/fourth";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FourthHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50 border-b border-[#C9A227] bg-[#14151A] text-white">
      {/* utility strip */}
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
            <BackToGroup className="text-white/80 hover:text-white" />
          </div>
        </Container>
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

        <div id="fourth-menu" className={cn("border-t border-white/10", open ? "block" : "hidden")}>
          <Container className="flex flex-col py-4">
            {fourth.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block border-b border-white/10 px-4 py-3 text-sm font-medium text-white/80 hover:text-white",
                  isActive(item.href) && "bg-white/5 text-white",
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