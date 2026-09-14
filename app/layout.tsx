import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";

import { site } from "@/config/site";
import { siteUrl } from "@/lib/metadata";
import { colorTokens } from "@/lib/tokens";
import type { BrandColors } from "@/config/types";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: site.metadata.title,
    template: `%s — ${site.name}`,
  },
  description: site.metadata.description,
  keywords: site.metadata.keywords,
  applicationName: site.legalName,
  other: { "og:site_name": site.name },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: siteUrl("/"),
    title: site.metadata.title,
    description: site.metadata.description,
    images: [
      { url: siteUrl(site.metadata.ogImage), width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: site.metadata.themeColor,
};

/**
 * Corporate brand tokens. Business layouts override these on their own
 * wrappers, so the same domain serves five different visual identities.
 */
const corporateColors: BrandColors = {
  primary: "#1D2A3A",
  primaryDeep: "#111A26",
  accent: "#B08D4C",
  soft: "#F3EEE6",
  faint: "#FAF7F1",
  surface: "#F8F5EF",
  surfaceDark: "#10141B",
  paper: "#FFFFFF",
  ink: "#171A1E",
  muted: "#5C6472",
  line: "#E4DED2",
  onBrand: "#FFFFFF",
  btnRadius: "0.375rem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={
        {
          "--font-display": '"Playfair Display Variable"',
          ...colorTokens(corporateColors),
        } as CSSProperties
      }
    >
      <body className="font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}