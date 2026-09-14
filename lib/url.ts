// lib/url.ts
export function toAbsoluteUrl(path: string): URL {
  // Try to construct a URL directly (works for absolute URLs).
  try {
    return new URL(path);
  } catch (err) {
    // If it's a relative path (e.g. "/"), provide an environment-derived base.
    const envBase =
      (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim()) ||
      (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`);
    const base = envBase ?? "http://localhost:3000";
    return new URL(path, base);
  }
}

export default toAbsoluteUrl;
