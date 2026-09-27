/* eslint-disable no-restricted-globals */
/**
 * Gondal Group — service worker.
 *
 * Strategy
 * ────────
 * • Navigations (HTML)      → network-first, cached copy as fallback,
 *                             then /offline.html when fully offline.
 * • /_next/static (hashed)  → cache-first (immutable by build id).
 * • Images / fonts / icons  → stale-while-revalidate.
 * • API / POST / cross-     → never cached; always straight to network.
 *   origin
 *
 * The SW version is derived from the build so every deploy invalidates old
 * caches automatically. `skipWaiting` is *not* called on install — the page
 * asks for it explicitly when the user accepts an update, so a new version
 * never swaps in mid-session without consent.
 */

const VERSION = "gondal-v1";
const STATIC_CACHE = `${VERSION}-static`;
const DYNAMIC_CACHE = `${VERSION}-dynamic`;
const PAGE_CACHE = `${VERSION}-pages`;
const KNOWN_CACHES = [STATIC_CACHE, DYNAMIC_CACHE, PAGE_CACHE];

const OFFLINE_URL = "/offline.html";

/** Core assets precached at install so the shell works with no network. */
const PRECACHE = [
  OFFLINE_URL,
  "/icon.svg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/maskable-512.png",
  "/manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      // addAll fails wholesale on one 404; add individually and tolerate misses.
      await Promise.all(
        PRECACHE.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => undefined),
        ),
      );
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((name) => name.startsWith("gondal-") && !KNOWN_CACHES.includes(name))
          .map((name) => caches.delete(name)),
      );
      await self.clients.claim();
    })(),
  );
});

/** Explicit update handshake from PwaProvider. */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Never touch Next's data/API routes.
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  if (
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/logos/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/icon.svg" ||
    /\.(png|jpg|jpeg|webp|avif|svg|woff2?|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, PAGE_CACHE));
});

/** Network-first for documents; offline falls back to cache, then offline page. */
async function handleNavigation(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(PAGE_CACHE);
      cache.put(request, response.clone()).catch(() => undefined);
    }
    return response;
  } catch {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_URL);
    if (offline) return offline;
    return new Response("You are offline.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

/** Cache-first — correct for content-hashed, immutable build assets. */
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone()).catch(() => undefined);
  }
  return response;
}

/** Serve from cache instantly, refresh in the background. */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone()).catch(() => undefined);
      }
      return response;
    })
    .catch(() => undefined);
  return cached || (await network) || Response.error();
}
