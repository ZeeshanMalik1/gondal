# Gondal Group — Multi-Business Corporate Website Platform

A production-ready **Next.js 15 + TypeScript + Tailwind CSS 4** platform for a
Pakistani business group. One domain hosts a corporate group homepage plus four
completely independent business websites — each with its own branding, design
system, navigation, typography, imagery and pages — all sharing a single
codebase, deployment and URL architecture.

```text
/                            → Corporate group homepage
/fish/…                      → Gondal Freshwater Farms   (aquaculture)
/salt/…                      → Gondal Salt Works         (minerals)
/crushers/…                  → Gondal Crushers           (aggregate & crushing)
/fourth/…                    → Gondal Black Gold Supply  (bitumen & road materials)
```

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm run start
```

> **Node 20+** required. If the `public/images/` placeholder set is missing
> (e.g. a fresh checkout), regenerate it with `node scripts/generate-images.mjs`.

## Architecture

| Layer | Location | Purpose |
|---|---|---|
| Route tree | `app/` | Corporate homepage + four business route subtrees |
| Business configs | `config/fish.ts`, `salt.ts`, `crushers.ts`, `fourth.ts`, `site.ts` | **All** business facts live here — copy, colors, navigation, contact, metadata |
| Types | `config/types.ts` | Shared `BusinessConfig`, `ContactInfo`, design-token types |
| Registry | `config/index.ts` | Business list driving corporate panels + sitemap |
| Shared primitives | `components/ui/` | Button, Container, Section, Figure, Modal, GalleryGrid, ContactForm, Icon… |
| Corporate site | `components/corporate/` | Group header, hero, businesses panels, stats, locations, contact |
| Per-business site | `components/fish/`, `salt/`, `crushers/`, `fourth/` | Independent headers, heroes, footers with distinct design languages |
| Motion | `components/motion/` | `Reveal`, `Counter` (Framer Motion, reduced-motion aware) |
| Sliders | `lib/useSlider.ts` + `components/*/*Slider.tsx` | One headless slider engine, five deliberately different designs |
| SEO | `lib/metadata.ts` | Per-page metadata, canonical URLs, OG/Twitter, `makeMetadata()` |
| Design tokens | `lib/tokens.ts` | Maps each business's `colors` + fonts onto CSS variables per layout |

Every business has its own `app/<slug>/layout.tsx`, which applies its fonts,
CSS-variable theme, header, footer and metadata — so `/salt/products` gets the
full Salt Works experience even on direct entry.

#### Typography — Poppins, group-wide

Poppins is loaded **once** in the root layout (`app/layout.tsx`, weights 300–700
plus italics) and every site points at it:

- `app/globals.css` → `--font-sans: "Poppins"`
- `app/layout.tsx` (corporate) → `--font-display` / `--font-body`
- each `config/*.ts` → `displayFont: "Poppins"`, `bodyFont: "Poppins"`

`layoutStyle(displayFont, bodyFont, colors)` still emits both custom properties,
so a site can be re-typed later by editing its config and adding the matching
`@fontsource` import to that site's layout — no component changes required.

#### Sliders — hero first, then in-page galleries

Every site's **hero section** is image-slider driven: the hero artwork rotates
(crossfade, direction-aware slide, or conveyor track depending on the site) with
its own pager and prev/next controls, auto-advance, swipe and ←/→ keys.

| Site | Hero slider | In-page slider |
|---|---|---|
| Corporate | Full-bleed background crossfade (group plate → each business) with gold bar pager | `GroupSlider` — editorial showcase with numbered rail + progress rule |
| Fish | Rounded framed plate crossfade with droplet pager | `FishPondSlider` — matted frame, caption pill |
| Salt | Sharp plate, direction-aware slide, gold hairline pager | `SaltPlateSlider` — uppercase index rail catalogue |
| Crushers | Conveyor track + numbered bay tabs | `CrushersYardSlider` — two-bay track with tick progress |
| Fourth | Cinematic crossfade with slow drift, gold diamond pager | `FourthHighwaySlider` — full-bleed Ken-Burns stage |

`lib/useSlider.ts` is the single behaviour engine behind all of them (see above);
the in-page sliders can be removed per site by deleting their component usage
from that site's `app/<slug>/page.tsx`.


### Adding a fifth business

1. Copy `config/fourth.ts` → `config/fifth.ts`, rename the identity and set
   `slug: "fifth"` plus its `navigation` / `pages` hrefs.
2. Register it in `config/index.ts` (`businesses` array).
3. Duplicate `app/fourth/` → `app/fifth/`, swap the imports to the new config,
   and create matching `components/fifth/` header/hero/footer.
4. `npm run build` — sitemap, robots, corporate cards all pick it up.

## Placeholder content

All names, figures, addresses and phone numbers are bracketed placeholders
(e.g. `[Est. Year]`, `[Phone Number]`) marked in-page by a
`PlaceholderNotice`. Replace them **in the `config/*.ts` files only** —
components never hard-code business facts. Imagery under `public/images/` is
generated abstract SVG (`scripts/generate-images.mjs`); swap the files for real
photography keeping the same names and aspect ratios. Logos are inline React
components in `components/branding/Logos.tsx`.

## Contact form backend

`/api/contact` is an honest stub: it validates and returns
`{"ok":false,"code":"NOT_CONFIGURED"}` until `CONTACT_WEBHOOK_URL` is set
(see `.env.example`). The UI communicates this truthfully — no fake
"message sent" states. Point it at any webhook/email provider later.

## PWA (installable, offline-capable)

The site is a full progressive web app:

| Piece | Location | Behaviour |
|---|---|---|
| Manifest | `app/manifest.ts` | `standalone`, scope/id, shortcuts, 192/512 PNG + maskable icons |
| Icons | `scripts/generate-pwa-icons.mjs` | PNGs derived from `app/icon.svg` → `public/icons/` (`npm run icons`) |
| Service worker | `public/sw.js` | network-first pages, cache-first hashed assets, SWR images; offline fallback to `/offline.html` |
| Offline page | `public/offline.html` | fully self-contained (inline CSS) so it renders with zero connectivity |
| Provider | `components/pwa/PwaProvider.tsx` | registers the SW (production only), captures `beforeinstallprompt`, iOS "Add to Home Screen" help, dismiss-forever banner, update toast with `SKIP_WAITING` handshake |

Notes:

- The SW registers only when `NODE_ENV === "production"` — `npm run dev`
  never caches, so hot reload always works.
- `sw.js` is served with `Cache-Control: max-age=0, must-revalidate`
  (see `next.config.mjs`) — the worker itself is the update channel.
- Regenerate icons after editing `app/icon.svg`: `npm run icons`
  (requires `sharp`, already present via Next.js; degrades gracefully).

## Navigation & mobile-first behaviour

- **Sticky headers** on all five sites: shadow on scroll, utility strip
  collapses to reclaim vertical space on small screens.
- **Shared drawer** (`components/ui/MobileMenu.tsx`) replaces the five
  hand-rolled mobile panels: slide-in from the right, focus trap,
  Escape/backdrop/route-change/resize-to-desktop dismissal, background
  scroll lock (`body[data-scroll-locked]`), safe-area padding, ≥44px
  touch targets. The corporate drawer passes `hideBackLink` — it *is* the
  group site, so it doesn't offer a link back to itself.
- **Route progress bar** (`components/navigation/RouteProgress.tsx`) —
  thin top indicator during client-side navigations, with an 8s failsafe.
- **Route scroll discipline** (`components/navigation/RouteChangeHandler.tsx`) —
  instant scroll-to-top on path change (hash links land on their section,
  offset by `scroll-padding-top` under the sticky header).
- Per-business `loading.tsx` streams a brand-tokened spinner while pages
  resolve; `min-h-dvh` and `overflow-x: clip` keep mobile browser chrome
  and stray overflow from breaking layouts.

## Environment

```bash
NEXT_PUBLIC_SITE_URL=https://gondalgroup.example.com  # canonical/OG base URL
CONTACT_WEBHOOK_URL=                                  # optional enquiry sink
```

## Quality gates

- `npx tsc --noEmit` — strict type check
- `npm run build` — full static prerender of all 38 routes
- Sitemap at `/sitemap.xml`, robots at `/robots.txt`
- `prefers-reduced-motion` respected across all animation
