/**
 * Central registry for the Gondal Group platform.
 *
 * - `site`      : corporate/group configuration (landing page, header, footer)
 * - `businesses`: the ordered list of business sites (drives the corporate
 *                 "Our Businesses" panels and the sitemap)
 *
 * Adding a fifth business = drop its config into /config, register it here,
 * and add its /app layout — nothing else in the codebase needs to change.
 */

import { site } from "./site";
import { fish } from "./fish";
import { salt } from "./salt";
import { crushers } from "./crushers";
import { fourth } from "./fourth";
import type { BusinessConfig } from "./types";

export { site };

export const businesses: BusinessConfig[] = [fish, salt, crushers, fourth];

const bySlug = new Map<string, BusinessConfig>(businesses.map((b) => [b.slug, b]));

export function getBusiness(slug: string): BusinessConfig | undefined {
  return bySlug.get(slug);
}

export interface SitemapRoute {
  href: string;
  changefreq: string;
  priority: number;
}

/** Every addressable route on the platform, for /sitemap.xml. */
export const sitemapRoutes = (): SitemapRoute[] => [
  { href: "/", changefreq: "weekly", priority: 1 },
  ...businesses.flatMap((b) =>
    b.pages.map((p) => ({
      href: p.href,
      changefreq: p.changefreq ?? "monthly",
      priority: p.href === `/${b.slug}` ? 0.9 : 0.6,
    })),
  ),
];

/** Human-readable list of the group's industries (corporate homepage). */
export const industrySummary = (): { name: string; link: string; blurb: string }[] =>
  businesses.map((b) => ({
    name: b.name,
    link: `/${b.slug}`,
    blurb: b.summary,
  }));