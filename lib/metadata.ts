import type { Metadata } from "next";
import { site } from "@/config";

/** Absolute base URL — override with NEXT_PUBLIC_SITE_URL in production. */
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
  "https://gondalgroup.example.com";

/** Build an absolute URL from a site-relative path. */
export function siteUrl(path = ""): string {
  return path.startsWith("/") ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;
}

export interface PageMetaInput {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/salt/products". */
  path: string;
  keywords?: string[];
  /** Site-relative image path, e.g. "/images/salt/og.svg". Defaults to the corporate OG image. */
  image?: string;
  type?: "website" | "article";
  robots?: string;
}

/** Build consistent, non-duplicated SEO metadata for any page. */
export function makeMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  robots,
}: PageMetaInput): Metadata {
  const url = siteUrl(path);
  const ogImage = image ? siteUrl(image) : siteUrl(site.metadata.ogImage);
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(robots?.includes("noindex")
      ? { robots: { index: false, follow: robots.includes("nofollow") ? false : undefined } }
      : {}),
  };
}

/** Copy for a logical "back to the group" link inside a business site. */
export const BACK_TO_GROUP_LABEL = "Gondal Group";