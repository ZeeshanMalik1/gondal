/**
 * Generates the PWA icon set for the Gondal Group website from app/icon.svg.
 *
 *   node scripts/generate-pwa-icons.mjs
 *
 * Outputs (all derived from the single committed SVG source, so re-runs are
 * deterministic and no binary source assets need to be hand-managed):
 *
 *   public/icons/icon-192.png        — manifest "any" purpose
 *   public/icons/icon-512.png        — manifest "any" purpose
 *   public/icons/maskable-512.png    — full-bleed background, logo in the
 *                                      80% safe zone (Android adaptive icons)
 *   public/icons/apple-touch-icon.png— 180px, opaque background (iOS)
 *
 * Requires `sharp` (already present as a transitive dependency of Next.js).
 * If sharp is unavailable the script exits gracefully — the SVG icon is
 * still referenced in the manifest as a fallback.
 */
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC = join(root, "app", "icon.svg");
const OUT = join(root, "public", "icons");

/** Background color — matches --surface-dark / manifest theme_color. */
const BG = "#1D2A3A";

if (!existsSync(SRC)) {
  console.error("icon source missing:", SRC);
  process.exit(1);
}

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("sharp is not installed — skipping PNG icon generation.");
  console.warn("Run `npm install` and re-run this script before shipping the PWA.");
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
const svg = readFileSync(SRC, "utf8");

/** Plain icon: transparent background, full artwork. */
async function render(size, file) {
  await sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toFile(join(OUT, file));
  console.log("✓", file);
}

/** Maskable icon: solid background with the mark in the 60% safe zone. */
async function renderMaskable(size, file) {
  const inner = Math.round(size * 0.6);
  const offset = Math.round((size - inner) / 2);
  const padded = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
      `<rect width="${size}" height="${size}" fill="${BG}"/>` +
      `<g transform="translate(${offset} ${offset}) scale(${inner / 64})">` +
      svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "") +
      `</g></svg>`,
  );
  await sharp(padded).png().toFile(join(OUT, file));
  console.log("✓", file);
}

await render(192, "icon-192.png");
await render(512, "icon-512.png");
await renderMaskable(512, "maskable-512.png");
await renderMaskable(180, "apple-touch-icon.png");
console.log("PWA icons written to public/icons/");
