import type { MetadataRoute } from "next";

/** Install metadata. The existing SVG app icon is deliberately reused so no
 * generated or unverified raster media is introduced. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gondal Group of Companies",
    short_name: "Gondal Group",
    description: "A diversified Pakistani business group.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5EF",
    theme_color: "#1D2A3A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
