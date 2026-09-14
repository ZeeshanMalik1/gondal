import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "@fontsource-variable/cormorant";

import { salt } from "@/config/salt";
import { siteUrl } from "@/lib/metadata";
import { layoutStyle } from "@/lib/tokens";
import { SaltHeader } from "@/components/salt/SaltHeader";
import { SaltFooter } from "@/components/salt/SaltFooter";

export const metadata: Metadata = {
  title: { default: salt.metadata.title, template: `%s — ${salt.name}` },
  description: salt.metadata.description,
  keywords: salt.metadata.keywords,
  alternates: { canonical: siteUrl("/salt") },
  other: { "og:site_name": salt.name },
  openGraph: {
    type: "website",
    siteName: salt.name,
    locale: "en_US",
    url: siteUrl("/salt"),
    title: salt.metadata.title,
    description: salt.metadata.description,
    images: [
      { url: siteUrl(salt.metadata.ogImage), width: 1200, height: 630, alt: salt.name },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: salt.metadata.themeColor,
};

export default function SaltLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={layoutStyle(salt.displayFont, salt.colors) as CSSProperties}
      className="flex min-h-screen flex-col bg-surface"
    >
      <SaltHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SaltFooter />
    </div>
  );
}