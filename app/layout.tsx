import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";

import { site } from "@/config/site";
import { siteUrl } from "@/lib/metadata";
import { colorTokens } from "@/lib/tokens";
import type { BrandColors } from "@/config/types";
import { PwaProvider } from "@/components/pwa/PwaProvider";
import { RouteChangeHandler } from "@/components/navigation/RouteChangeHandler";
import { RouteProgress } from "@/components/navigation/RouteProgress";

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
  // iOS home-screen support: apple-touch-icon is generated with the manifest
  // icons by scripts/generate-pwa-icons.mjs.
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: site.shortName,
    statusBarStyle: "default",
  },
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
  // Fill the display on notched phones inside the installed app…
  viewportFit: "cover",
  // …and let the page reflow when the on-screen keyboard opens, so form
  // fields are never hidden behind it.
  interactiveWidget: "resizes-content",
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
        <PwaProvider>
          <RouteChangeHandler />
          <RouteProgress />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          {children}
        </PwaProvider>
      </body>
    </html>
  );
}