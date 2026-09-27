"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { fish } from "@/config/fish";
import { useScrolled } from "@/lib/useScrolled";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FishHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const isActive = (href: string) =>
    href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header
      data-sticky-header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(12,59,65,0.18)]",
      )}
    >
      {/* utility strip — hidden while scrolled to reclaim vertical space */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100",
        )}
      >
        <div className="bg-brand-deep text-white">
          <Container className="flex items-center justify-between gap-4 py-2.5">
            <p className="inline-flex items-center gap-2 text-xs text-white/75">
              <Icon name="tint" className="h-3.5 w-3.5 text-brand" />
              <span>{fish.name} · {fish.est}</span>
            </p>
            <div className="flex items-center gap-5">
              <a href={`tel:${fish.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 text-xs text-white/85 hover:text-white">
                <Icon name="phone" className="h-3.5 w-3.5" label="Phone" />
                {fish.contact.phone}
              </a>
              <BackToGroup className="hidden text-white/85 hover:text-white sm:inline-flex" />
            </div>
          </Container>
        </div>
      </div>

      {/* main bar */}
      <div
        className={cn(
          "border-b border-line-var transition-colors duration-300",
          scrolled ? "bg-white" : "bg-white/85 backdrop-blur-sm",
        )}
      >
        <Container className="flex items-center justify-between gap-6 py-4">
          <Link href="/fish" aria-label={`${fish.name} — home`} className="shrink-0">
            <BrandLockup mark="fish" name={fish.shortName} sub={fish.tagline} tone="on-light" />
          </Link>

          <nav aria-label="Fish Farm" className="hidden lg:flex lg:items-center lg:gap-1">
            {fish.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition",
                  isActive(item.href)
                    ? "bg-brand-soft text-brand"
                    : "text-muted-var hover:bg-brand-faint hover:text-brand",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button href="/fish/contact" size="sm" className="hidden md:inline-flex">
            <Icon name="fish" className="h-4 w-4" />
            Order fish
          </Button>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-var text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="fish-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>
      </div>

      {/* mobile drawer */}
      <MobileMenu
        id="fish-menu"
        open={open}
        onClose={() => setOpen(false)}
        label="Fish Farm"
        tone="light"
        title={fish.name}
      >
        <ul className="flex flex-col gap-1">
          {fish.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-[48px] items-center justify-between rounded-full px-4 py-3 text-[0.95rem] font-medium",
                  isActive(item.href) ? "bg-brand-soft text-brand" : "text-ink",
                )}
              >
                {item.label}
                <Icon name="chevron-right" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-2">
          <Button href="/fish/contact" onClick={() => setOpen(false)} className="w-full">
            <Icon name="fish" className="h-4 w-4" />
            Order fish
          </Button>
          <a
            href={`tel:${fish.contact.phone.replace(/\s/g, "")}`}
            className="flex min-h-[48px] items-center gap-3 rounded-full border border-line-var px-4 text-sm text-ink hover:border-brand"
          >
            <Icon name="phone" className="h-4 w-4 text-brand" />
            {fish.contact.phone}
          </a>
        </div>
      </MobileMenu>
    </header>
  );
}
