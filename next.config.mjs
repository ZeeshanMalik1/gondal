/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  eslint: { ignoreDuringBuilds: true },
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
