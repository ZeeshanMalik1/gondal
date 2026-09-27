import type { MetadataRoute } from "next";

/**
 * Install metadata for the PWA.
 *
 * PNG icons are generated from app/icon.svg by `scripts/generate-pwa-icons.mjs`
 * (run `npm run icons`); the SVG stays listed as a final fallback so the
 * manifest remains valid on a fresh checkout before generation.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Gondal Group of Companies",
    short_name: "Gondal Group",
    description: "A diversified Pakistani business group.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "any",
    lang: "en",
    dir: "ltr",
    categories: ["business", "finance"],
    background_color: "#F8F5EF",
    theme_color: "#1D2A3A",
    icons: [
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
    shortcuts: [
      { name: "Our Businesses", short_name: "Businesses", url: "/#businesses" },
      { name: "Contact the Group", short_name: "Contact", url: "/#contact" },
      { name: "Locations", short_name: "Locations", url: "/#locations" },
    ],
  };
}

