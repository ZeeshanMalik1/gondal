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
| SEO | `lib/metadata.ts` | Per-page metadata, canonical URLs, OG/Twitter, `makeMetadata()` |
| Design tokens | `lib/tokens.ts` | Maps each business's `colors` onto CSS variables per layout |

Every business has its own `app/<slug>/layout.tsx`, which applies its fonts,
CSS-variable theme, header, footer and metadata — so `/salt/products` gets the
full Salt Works experience even on direct entry.

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
