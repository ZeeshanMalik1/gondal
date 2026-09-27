import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "@fontsource-variable/space-grotesk";

import { crushers } from "@/config/crushers";
import { siteUrl } from "@/lib/metadata";
import { layoutStyle } from "@/lib/tokens";
import { CrushersHeader } from "@/components/crushers/CrushersHeader";
import { CrushersFooter } from "@/components/crushers/CrushersFooter";

export const metadata: Metadata = {
  title: { default: crushers.metadata.title, template: `%s — ${crushers.name}` },
  description: crushers.metadata.description,
  keywords: crushers.metadata.keywords,
  alternates: { canonical: siteUrl("/crushers") },
  other: { "og:site_name": crushers.name },
  openGraph: {
    type: "website",
    siteName: crushers.name,
    locale: "en_US",
    url: siteUrl("/crushers"),
    title: crushers.metadata.title,
    description: crushers.metadata.description,
    images: [
      { url: siteUrl(crushers.metadata.ogImage), width: 1200, height: 630, alt: crushers.name },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: crushers.metadata.themeColor,
};

export default function CrushersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={layoutStyle(crushers.displayFont, crushers.colors) as CSSProperties}
      className="flex min-h-dvh flex-col bg-surface"
    >
      <CrushersHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <CrushersFooter />
    </div>
  );
}