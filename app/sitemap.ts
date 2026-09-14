import type { MetadataRoute } from "next";
import { sitemapRoutes } from "@/config";
import { siteUrl } from "@/lib/metadata";

/** /sitemap.xml — every route is derived from the central config. */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes().map((route) => ({
    url: siteUrl(route.href),
    lastModified: new Date(),
    changeFrequency: route.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));
}