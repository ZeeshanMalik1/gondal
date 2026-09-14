import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/700.css";

import { fourth } from "@/config/fourth";
import { siteUrl } from "@/lib/metadata";
import { layoutStyle } from "@/lib/tokens";
import { FourthHeader } from "@/components/fourth/FourthHeader";
import { FourthFooter } from "@/components/fourth/FourthFooter";

export const metadata: Metadata = {
  title: { default: fourth.metadata.title, template: `%s — ${fourth.name}` },
  description: fourth.metadata.description,
  keywords: fourth.metadata.keywords,
  alternates: { canonical: siteUrl("/fourth") },
  other: { "og:site_name": fourth.name },
  openGraph: {
    type: "website",
    siteName: fourth.name,
    locale: "en_US",
    url: siteUrl("/fourth"),
    title: fourth.metadata.title,
    description: fourth.metadata.description,
    images: [
      { url: siteUrl(fourth.metadata.ogImage), width: 1200, height: 630, alt: fourth.name },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: fourth.metadata.themeColor,
};

export default function FourthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={layoutStyle(fourth.displayFont, fourth.colors) as CSSProperties}
      className="flex min-h-screen flex-col bg-surface"
    >
      <FourthHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <FourthFooter />
    </div>
  );
}