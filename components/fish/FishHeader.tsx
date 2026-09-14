"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { fish } from "@/config/fish";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { BackToGroup } from "@/components/ui/BackToGroup";
import { BrandLockup } from "@/components/branding/Logos";

export function FishHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === pathname || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50">
      {/* utility strip */}
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
            <BackToGroup className="text-white/85 hover:text-white" />
          </div>
        </Container>
      </div>

      {/* main bar */}
      <div className="border-b border-line-var bg-white/85 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-6 py-4">
          <Link href="/fish" aria-label={`${fish.name} — home`} className="shrink-0">
            <BrandLockup mark="fish" name={fish.shortName} sub={fish.tagline} tone="on-light" />
          </Link>

          <nav aria-label="Fish Farm" className="hidden overflow-x-auto lg:flex lg:items-center lg:gap-1">
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

        {/* mobile panel */}
        <div id="fish-menu" className={cn("border-t border-line-var bg-white", open ? "block" : "hidden")}>
          <Container className="flex flex-col gap-1 py-4">
            {fish.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-full px-4 py-3 text-[0.95rem] font-medium",
                  isActive(item.href) ? "bg-brand-soft text-brand" : "text-ink",
                )}
              >
                {item.label}
                <Icon name="chevron-right" className="h-4 w-4" />
              </Link>
            ))}
            <div className="mt-3">
              <Button href="/fish/contact" className="w-full">
                <Icon name="fish" className="h-4 w-4" />
                Order fish
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}