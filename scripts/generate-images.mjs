/**
 * Generates the placeholder SVG asset set for the Gondal Group website.
 *
 *   node scripts/generate-images.mjs
 *
 * Every file is abstract, self-drawn artwork (no external assets, no
 * copyright concerns). When real Pakistani business photography becomes
 * available, replace the files under public/images/<business>/ keeping the
 * same file names and aspect ratios — no code changes are required.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT = join(root, "public", "images");

/** Deterministic PRNG so re-runs produce identical files. */
const hash = (s) => {
  let h = 2166136261;
  for (const ch of s) {
    h ^= ch.charCodeAt(0);
    h = (h * 16777619) >>> 0;
  }
  return h;
};
const rand = (seed) => {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
};

/** Per-business palettes matching the CSS design tokens. */
const palettes = {
  corporate: { a: "#0e2318", b: "#1e3d2c", c: "#d8b25a" },
  fish: { a: "#06283a", b: "#0c5e73", c: "#7fd3c8" },
  salt: { a: "#3b2b33", b: "#8a6f7b", c: "#f3d3d8" },
  crushers: { a: "#1b1d22", b: "#3a4048", c: "#f59e0b" },
  fourth: { a: "#131114", b: "#2c2721", c: "#f2a71b" },
};

/* ------------------------------------------------------------------ */
/* Motif layers — each returns SVG elements drawn over the gradient.  */
/* ------------------------------------------------------------------ */
const M = {
  /** Topographic contour rings (corporate group). */
  topo: (w, h, p, r) => {
    const out = [];
    const cx = w * 0.7, cy = h * 0.45;
    for (let i = 0; i < 16; i++) {
      const rx = w * 0.07 + i * w * 0.045, ry = rx * (0.5 + r() * 0.25);
      const jx = (r() - 0.5) * w * 0.06, jy = (r() - 0.5) * h * 0.07;
      out.push(
        `<ellipse cx="${(cx + jx).toFixed(0)}" cy="${(cy + jy).toFixed(0)}" rx="${rx.toFixed(0)}" ry="${ry.toFixed(0)}" fill="none" stroke="${p.c}" stroke-opacity="${(0.05 + (i % 4) * 0.035).toFixed(2)}" stroke-width="1.5"/>`,
      );
    }
    return out;
  },

  /** Soft wave bands + ripples (fish farm). */
  waves: (w, h, p, r) => {
    const out = [];
    const bands = 9, seg = w / 4;
    for (let i = 0; i < bands; i++) {
      const y = (h / bands) * i + h * 0.08;
      const amp = h * 0.02 + r() * h * 0.045;
      let d = `M -20 ${y.toFixed(0)}`;
      for (let x = 0; x <= w + seg; x += seg) {
        const dy = (x / seg) % 2 === 0 ? -amp : amp;
        d += ` Q ${(x + seg / 2).toFixed(0)} ${(y + dy * 2).toFixed(0)} ${(x + seg).toFixed(0)} ${y.toFixed(0)}`;
      }
      d += ` L ${w + 20} ${h + 20} L -20 ${h + 20} Z`;
      out.push(`<path d="${d}" fill="${p.c}" fill-opacity="${(0.03 + i * 0.013).toFixed(3)}"/>`);
    }
    for (let i = 0; i < 7; i++) {
      const x = -40 + r() * w * 0.5, y = r() * h, len = w * (0.08 + r() * 0.1);
      out.push(
        `<path d="M ${x.toFixed(0)} ${y.toFixed(0)} q ${(len / 2).toFixed(0)} ${(-h * 0.02).toFixed(0)} ${len.toFixed(0)} 0" fill="none" stroke="${p.c}" stroke-opacity="0.45" stroke-width="2" stroke-linecap="round"/>`,
      );
    }
    return out;
  },

  /** Faceted crystal shards (salt). */
  crystals: (w, h, p, r) => {
    const out = [];
    for (let i = 0; i < 26; i++) {
      const cx = r() * w, cy = r() * h;
      const s = w * 0.02 + r() * w * 0.07, rot = r() * 90;
      const pts = [[0, -1], [0.7, -0.2], [0.45, 0.9], [-0.45, 0.9], [-0.7, -0.2]]
        .map(([x, y]) => `${(cx + x * s).toFixed(0)},${(cy + y * s).toFixed(0)}`)
        .join(" ");
      out.push(
        `<polygon points="${pts}" fill="${i % 3 ? p.c : "#ffffff"}" fill-opacity="${(0.05 + r() * 0.14).toFixed(2)}" stroke="${p.c}" stroke-opacity="0.35" stroke-width="1" transform="rotate(${rot.toFixed(0)} ${cx.toFixed(0)} ${cy.toFixed(0)})"/>`,
      );
    }
    return out;
  },

  /** Angular aggregate rock piles + debris (crushers). */
  rocks: (w, h, p, r) => {
    const out = [];
    for (let i = 0; i < 18; i++) {
      const cx = r() * w, cy = h * 0.35 + r() * h * 0.6;
      const s = w * 0.03 + r() * w * 0.08;
      const pts = [[-1, 0.4], [-0.4, -0.8], [0.5, -1], [1, -0.1], [0.6, 0.9]]
        .map(([x, y]) => `${(cx + x * s).toFixed(0)},${(cy + y * s * 0.7).toFixed(0)}`)
        .join(" ");
      out.push(
        `<polygon points="${pts}" fill="${p.b}" fill-opacity="${(0.25 + r() * 0.3).toFixed(2)}" stroke="${p.c}" stroke-opacity="0.25" stroke-width="1.2"/>`,
      );
    }
    for (let i = 0; i < 40; i++) {
      const x = r() * w, y = r() * h, s = 3 + r() * 8;
      out.push(`<polygon points="${x.toFixed(0)},${y.toFixed(0)} ${(x + s).toFixed(0)},${(y + s * 0.6).toFixed(0)} ${(x - s * 0.5).toFixed(0)},${(y + s).toFixed(0)}" fill="${p.c}" fill-opacity="0.18"/>`);
    }
    return out;
  },

  /** Stepped terrace bands (quarries / pond layouts). */
  terraces: (w, h, p, r) => {
    const out = [];
    const rows = 7, rowH = (h * 0.68) / rows;
    for (let i = 0; i < rows; i++) {
      const y = h * 0.22 + i * rowH;
      out.push(`<rect x="-10" y="${y.toFixed(0)}" width="${w + 20}" height="${(rowH + 2).toFixed(0)}" fill="${p.c}" fill-opacity="${(0.04 + i * 0.02).toFixed(2)}"/>`);
      out.push(`<line x1="-10" y1="${y.toFixed(0)}" x2="${w + 10}" y2="${y.toFixed(0)}" stroke="${p.c}" stroke-opacity="0.3" stroke-width="1.5"/>`);
    }
    for (let i = 0; i < 10; i++) {
      out.push(`<circle cx="${(r() * w).toFixed(0)}" cy="${(h * 0.25 + r() * h * 0.6).toFixed(0)}" r="${(4 + r() * 10).toFixed(0)}" fill="none" stroke="${p.c}" stroke-opacity="0.25"/>`);
    }
    return out;
  },

  /** Rows of lab sample vials. */
  vials: (w, h, p) => {
    const out = [];
    for (let i = 0; i < 2; i++) for (let j = 0; j < 6; j++) {
      const x = w * 0.12 + (j * w * 0.76) / 6, y = h * (0.25 + i * 0.3);
      const vw = w * 0.05, vh = h * 0.18;
      out.push(`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${vw.toFixed(0)}" height="${vh.toFixed(0)}" rx="${(vw / 2).toFixed(0)}" fill="rgba(255,255,255,0.08)" stroke="${p.c}" stroke-opacity="0.5" stroke-width="2"/>`);
      out.push(`<rect x="${x.toFixed(0)}" y="${(y + vh * 0.35).toFixed(0)}" width="${vw.toFixed(0)}" height="${(vh * 0.65).toFixed(0)}" rx="${(vw / 2).toFixed(0)}" fill="${p.c}" fill-opacity="0.35"/>`);
    }
    return out;
  },

  /** Heated storage tanks (depot). */
  tanks: (w, h, p, r) => {
    const out = [];
    for (let i = 0; i < 4; i++) {
      const x = w * 0.1 + i * w * 0.2, tw = w * 0.13;
      const th = h * (0.3 + r() * 0.2), y = h * 0.78 - th;
      out.push(`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${tw.toFixed(0)}" height="${th.toFixed(0)}" rx="${(tw * 0.12).toFixed(0)}" fill="rgba(255,255,255,0.06)" stroke="${p.c}" stroke-opacity="0.45" stroke-width="2"/>`);
      out.push(`<rect x="${(x + tw * 0.15).toFixed(0)}" y="${(y + th * 0.08).toFixed(0)}" width="${(tw * 0.18).toFixed(0)}" height="${(th * 0.84).toFixed(0)}" rx="${(tw * 0.09).toFixed(0)}" fill="${p.c}" fill-opacity="0.25"/>`);
      out.push(`<line x1="${(x + tw * 0.5).toFixed(0)}" y1="${(y - h * 0.04).toFixed(0)}" x2="${(x + tw * 0.5).toFixed(0)}" y2="${y.toFixed(0)}" stroke="${p.c}" stroke-opacity="0.5" stroke-width="2"/>`);
    }
    out.push(`<line x1="0" y1="${(h * 0.78).toFixed(0)}" x2="${w}" y2="${(h * 0.78).toFixed(0)}" stroke="${p.c}" stroke-opacity="0.4" stroke-width="2"/>`);
    return out;
  },

  /** Stacked barrels / sacks (packhouse, drums). */
  drums: (w, h, p) => {
    const out = [];
    const bw = w * 0.09, bh = h * 0.14;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) {
      const x = w * 0.18 + j * (bw + w * 0.03) + (i % 2) * bw * 0.4;
      const y = h * 0.78 - bh - i * (bh * 0.92);
      out.push(`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${bw.toFixed(0)}" height="${bh.toFixed(0)}" rx="${(bw * 0.14).toFixed(0)}" fill="${i === 3 ? p.c : "rgba(255,255,255,0.1)"}" fill-opacity="${i === 3 ? 0.45 : 1}" stroke="${p.c}" stroke-opacity="0.4" stroke-width="1.5"/>`);
    }
    return out;
  },

  /** Crusher plant / tanker silhouette on a conveyor line. */
  machine: (w, h, p, r) => {
    const out = [];
    const by = h * 0.72;
    out.push(`<line x1="${(w * 0.05).toFixed(0)}" y1="${by.toFixed(0)}" x2="${(w * 0.95).toFixed(0)}" y2="${by.toFixed(0)}" stroke="${p.c}" stroke-opacity="0.5" stroke-width="3"/>`);
    for (let i = 0; i < 5; i++) {
      const x = w * (0.12 + i * 0.19);
      out.push(`<circle cx="${x.toFixed(0)}" cy="${(by + h * 0.06).toFixed(0)}" r="${(h * 0.035).toFixed(0)}" fill="none" stroke="${p.c}" stroke-opacity="0.6" stroke-width="2.5"/>`);
    }
    out.push(`<polygon points="${(w * 0.55).toFixed(0)},${(by - h * 0.05).toFixed(0)} ${(w * 0.68).toFixed(0)},${(by - h * 0.05).toFixed(0)} ${(w * 0.75).toFixed(0)},${(by - h * 0.42).toFixed(0)} ${(w * 0.48).toFixed(0)},${(by - h * 0.42).toFixed(0)}" fill="rgba(255,255,255,0.08)" stroke="${p.c}" stroke-opacity="0.55" stroke-width="2.5"/>`);
    out.push(`<rect x="${(w * 0.59).toFixed(0)}" y="${(by - h * 0.16).toFixed(0)}" width="${(w * 0.05).toFixed(0)}" height="${(h * 0.12).toFixed(0)}" fill="${p.c}" fill-opacity="0.3"/>`);
    for (let i = 0; i < 8; i++) {
      out.push(`<circle cx="${(w * (0.6 + r() * 0.03)).toFixed(0)}" cy="${(by + h * (0.02 + r() * 0.05)).toFixed(0)}" r="${(3 + r() * 5).toFixed(0)}" fill="${p.c}" fill-opacity="0.4"/>`);
    }
    return out;
  },

  /** Fish silhouettes + bubbles. */
  fish: (w, h, p, r) => {
    const out = [];
    for (let i = 0; i < 3; i++) {
      const cx = w * (0.2 + r() * 0.55), cy = h * (0.3 + r() * 0.4);
      const bw = w * (0.08 + r() * 0.07), bh = bw * 0.45;
      out.push(`<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${bw.toFixed(0)}" ry="${bh.toFixed(0)}" fill="${p.c}" fill-opacity="0.3" stroke="${p.c}" stroke-opacity="0.6" stroke-width="2"/>`);
      out.push(`<polygon points="${(cx - bw).toFixed(0)},${cy.toFixed(0)} ${(cx - bw * 1.5).toFixed(0)},${(cy - bh * 0.9).toFixed(0)} ${(cx - bw * 1.5).toFixed(0)},${(cy + bh * 0.9).toFixed(0)}" fill="${p.c}" fill-opacity="0.35" stroke="${p.c}" stroke-opacity="0.6" stroke-width="2"/>`);
      out.push(`<circle cx="${(cx + bw * 0.65).toFixed(0)}" cy="${(cy - bh * 0.25).toFixed(0)}" r="${Math.max(3, bh * 0.08).toFixed(0)}" fill="${p.a}"/>`);
    }
    for (let i = 0; i < 20; i++) {
      out.push(`<circle cx="${(r() * w).toFixed(0)}" cy="${(r() * h).toFixed(0)}" r="${(2 + r() * 6).toFixed(0)}" fill="none" stroke="${p.c}" stroke-opacity="0.35"/>`);
    }
    return out;
  },

  /** One-point-perspective highway dashes (roads). */
  chevrons: (w, h, p) => {
    const out = [];
    out.push(`<polygon points="${(w * 0.1).toFixed(0)},0 ${(w * 0.9).toFixed(0)},0 ${w},${h} 0,${h}" fill="rgba(255,255,255,0.05)"/>`);
    const lanes = 6, half = w * 0.35;
    for (let i = 0; i < lanes; i++) {
      const y0 = (i / lanes + 0.05) * h, y1 = ((i + 0.55) / lanes) * h;
      const w0 = half0(y0, h), w1 = half0(y1, h);
      out.push(`<polygon points="${(w / 2 - w0).toFixed(0)},${y0.toFixed(0)} ${(w / 2 + w0).toFixed(0)},${y0.toFixed(0)} ${(w / 2 + w1).toFixed(0)},${y1.toFixed(0)} ${(w / 2 - w1).toFixed(0)},${y1.toFixed(0)}" fill="${p.c}" fill-opacity="0.5"/>`);
    }
    return out;
  },

  /** Bitumen droplet with sheen (Black Gold Supply). */
  droplet: (w, h, p) => {
    const cx = w / 2, cy = h * 0.52, s = Math.min(w, h) * 0.3;
    return [
      `<path d="M ${cx} ${cy - s * 1.25} C ${(cx + s * 0.9).toFixed(0)} ${(cy - s * 0.2).toFixed(0)} ${(cx + s).toFixed(0)} ${(cy + s * 0.4).toFixed(0)} ${cx} ${(cy + s * 0.95).toFixed(0)} C ${(cx - s).toFixed(0)} ${(cy + s * 0.4).toFixed(0)} ${(cx - s * 0.9).toFixed(0)} ${(cy - s * 0.2).toFixed(0)} ${cx} ${cy - s * 1.25} Z" fill="${p.c}" fill-opacity="0.85"/>`,
      `<ellipse cx="${(cx - s * 0.3).toFixed(0)}" cy="${(cy + s * 0.15).toFixed(0)}" rx="${(s * 0.18).toFixed(0)}" ry="${(s * 0.3).toFixed(0)}" fill="rgba(255,255,255,0.35)" transform="rotate(-20 ${cx} ${cy})"/>`,
      `<ellipse cx="${cx}" cy="${(cy + s * 1.15).toFixed(0)}" rx="${(s * 0.75).toFixed(0)}" ry="${(s * 0.1).toFixed(0)}" fill="${p.c}" fill-opacity="0.3"/>`,
    ];
  },
};

/** Width of the perspective road dash at a given y (half-width). */
const half0 = (y, h) => ((y / h) - 0.05) * 0.35;

/* ------------------------------------------------------------------ */
/* Asset manifest — one entry per placeholder file in /public/images. */
/* ------------------------------------------------------------------ */
const files = [
  // corporate group
  { file: "corporate/hero-topo.svg", w: 1920, h: 1080, motif: "topo", pal: "corporate" },
  { file: "corporate/og.svg", w: 1200, h: 630, motif: "topo", pal: "corporate" },

  // fish farm
  { file: "fish/hero-water.svg", w: 1920, h: 1080, motif: "waves", pal: "fish" },
  { file: "fish/card-pond.svg", w: 1200, h: 900, motif: "waves", pal: "fish" },
  { file: "fish/pond-aerial.svg", w: 1200, h: 800, motif: "terraces", pal: "fish" },
  { file: "fish/hatchery.svg", w: 1200, h: 800, motif: "tanks", pal: "fish" },
  { file: "fish/harvest.svg", w: 1200, h: 800, motif: "waves", pal: "fish" },
  { file: "fish/species-rohu.svg", w: 1200, h: 800, motif: "fish", pal: "fish" },
  { file: "fish/species-carp.svg", w: 1200, h: 800, motif: "fish", pal: "fish" },
  { file: "fish/packhouse.svg", w: 1200, h: 800, motif: "drums", pal: "fish" },
  { file: "fish/og.svg", w: 1200, h: 630, motif: "waves", pal: "fish" },

  // salt company
  { file: "salt/hero-crystals.svg", w: 1920, h: 1080, motif: "crystals", pal: "salt" },
  { file: "salt/card-crystals.svg", w: 1200, h: 900, motif: "crystals", pal: "salt" },
  { file: "salt/crystals-pink.svg", w: 1200, h: 800, motif: "crystals", pal: "salt" },
  { file: "salt/mine-quarry.svg", w: 1200, h: 800, motif: "terraces", pal: "salt" },
  { file: "salt/mill-feed.svg", w: 1200, h: 800, motif: "rocks", pal: "salt" },
  { file: "salt/lab-vials.svg", w: 1200, h: 800, motif: "vials", pal: "salt" },
  { file: "salt/packhouse.svg", w: 1200, h: 800, motif: "drums", pal: "salt" },
  { file: "salt/export-ship.svg", w: 1200, h: 800, motif: "chevrons", pal: "salt" },
  { file: "salt/og.svg", w: 1200, h: 630, motif: "crystals", pal: "salt" },

  // crushers
  { file: "crushers/hero-aggregate.svg", w: 1920, h: 1080, motif: "rocks", pal: "crushers" },
  { file: "crushers/card-aggregate.svg", w: 1200, h: 900, motif: "rocks", pal: "crushers" },
  { file: "crushers/agg-granite.svg", w: 1200, h: 800, motif: "rocks", pal: "crushers" },
  { file: "crushers/agg-limestone.svg", w: 1200, h: 800, motif: "rocks", pal: "crushers" },
  { file: "crushers/quarry-terraces.svg", w: 1200, h: 800, motif: "terraces", pal: "crushers" },
  { file: "crushers/plant-crusher.svg", w: 1200, h: 800, motif: "machine", pal: "crushers" },
  { file: "crushers/site-work.svg", w: 1200, h: 800, motif: "machine", pal: "crushers" },
  { file: "crushers/highway-project.svg", w: 1200, h: 800, motif: "chevrons", pal: "crushers" },
  { file: "crushers/og.svg", w: 1200, h: 630, motif: "rocks", pal: "crushers" },

  // fourth — Gondal Black Gold Supply (bitumen)
  { file: "fourth/hero-bitumen.svg", w: 1920, h: 1080, motif: "chevrons", pal: "fourth" },
  { file: "fourth/card-bitumen.svg", w: 1200, h: 900, motif: "droplet", pal: "fourth" },
  { file: "fourth/depot-tanks.svg", w: 1200, h: 800, motif: "tanks", pal: "fourth" },
  { file: "fourth/barrels.svg", w: 1200, h: 800, motif: "drums", pal: "fourth" },
  { file: "fourth/truck-tanker.svg", w: 1200, h: 800, motif: "machine", pal: "fourth" },
  { file: "fourth/lab-samples.svg", w: 1200, h: 800, motif: "vials", pal: "fourth" },
  { file: "fourth/asphalt-plant.svg", w: 1200, h: 800, motif: "machine", pal: "fourth" },
  { file: "fourth/highway-lay.svg", w: 1200, h: 800, motif: "chevrons", pal: "fourth" },
  { file: "fourth/og.svg", w: 1200, h: 630, motif: "droplet", pal: "fourth" },
];

for (const { file, w, h, motif, pal } of files) {
  const p = palettes[pal];
  const r = rand(hash(file));
  const parts = [
    `<defs><linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stop-color="${p.a}"/><stop offset="1" stop-color="${p.b}"/></linearGradient>`,
    `<radialGradient id="glow" cx="0.72" cy="0.2" r="0.95"><stop offset="0" stop-color="${p.c}" stop-opacity="0.18"/><stop offset="1" stop-color="rgba(0,0,0,0)"/></radialGradient></defs>`,
    `<rect width="${w}" height="${h}" fill="url(#g)"/>`,
    `<rect width="${w}" height="${h}" fill="url(#glow)"/>`,
    ...M[motif](w, h, p, r),
  ];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Placeholder artwork">\n${parts.join("\n")}\n</svg>\n`;
  const path = join(OUT, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg);
  console.log("  ✓", file);
}

console.log(`\nGenerated ${files.length} placeholder images in public/images/`);

