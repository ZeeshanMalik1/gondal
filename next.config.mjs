/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        // The service worker must never be served stale — it IS the update
        // mechanism. Everything else under /_next/static is immutable.
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/offline.html",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Placeholder artwork is served as raw SVG via `unoptimized` in <Figure>;
    // allow the optimizer to pass SVG through when real assets are mixed in.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  poweredByHeader: false,
};

export default nextConfig;
