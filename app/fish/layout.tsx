import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

import { fish } from "@/config/fish";
import { siteUrl } from "@/lib/metadata";
import { layoutStyle } from "@/lib/tokens";
import { FishHeader } from "@/components/fish/FishHeader";
import { FishFooter } from "@/components/fish/FishFooter";

export const metadata: Metadata = {
  title: { default: fish.metadata.title, template: `%s — ${fish.name}` },
  description: fish.metadata.description,
  keywords: fish.metadata.keywords,
  alternates: { canonical: siteUrl("/fish") },
  other: { "og:site_name": fish.name },
  openGraph: {
    type: "website",
    siteName: fish.name,
    locale: "en_US",
    url: siteUrl("/fish"),
    title: fish.metadata.title,
    description: fish.metadata.description,
    images: [
      { url: siteUrl(fish.metadata.ogImage), width: 1200, height: 630, alt: fish.name },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: fish.metadata.themeColor,
};

export default function FishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={layoutStyle(fish.displayFont, fish.colors) as CSSProperties}
      className="flex min-h-screen flex-col bg-surface"
    >
      <FishHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <FishFooter />
    </div>
  );
}