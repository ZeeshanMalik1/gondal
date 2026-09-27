/**
 * Verifies that every icon name referenced in the codebase resolves to a real,
 * renderable component in the central registry.
 *
 *   node scripts/check-icons.mjs
 *
 * Guards against the two failure modes that leave blank spots on the page:
 * a name used in config/JSX that is missing from the registry, and a registry
 * entry that is undefined (bad lucide/react-icons import).
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN = ["app", "components", "config", "lib"];
const FILE = /\.(tsx?|mjs)$/;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (FILE.test(entry)) out.push(full);
  }
  return out;
}

// Pull the registry keys straight out of the source of truth.
const registrySource = readFileSync(join(ROOT, "components/ui/Icon.tsx"), "utf8");
const registryBody = registrySource.split("const ICONS = {")[1].split("\n} as const")[0];
const names = new Set(
  [...registryBody.matchAll(/^\s{2}"?([A-Za-z0-9-]+)"?:\s*([A-Za-z0-9]+),/gm)].map((m) => m[1]),
);

const used = new Map();
for (const dir of SCAN) {
  for (const file of walk(join(ROOT, dir))) {
    const src = readFileSync(file, "utf8");
    const add = (n) => {
      if (!used.has(n)) used.set(n, new Set());
      used.get(n).add(relative(ROOT, file));
    };
    for (const m of src.matchAll(/<Icon\s+name="([a-z0-9-]+)"/g)) add(m[1]);
    for (const m of src.matchAll(/\bicon:\s*"([a-z0-9-]+)"/g)) add(m[1]);
    for (const m of src.matchAll(/name=\{[^}]*\}/g)) {
      for (const lit of m[0].matchAll(/"([a-z0-9-]+)"/g)) add(lit[1]);
    }
    for (const m of src.matchAll(/SOCIAL_ICONS[^=]*=\s*\{([^}]*)\}/g)) {
      for (const lit of m[1].matchAll(/:\s*"([a-z0-9-]+)"/g)) add(lit[1]);
    }
    // Icon-name lookup maps and icon-typed ternaries: only lines that declare
    // icon names, so Tailwind class ternaries are never mistaken for icons.
    for (const line of src.split("\n")) {
      if (!/IconName|SOCIAL_ICONS/.test(line)) continue;
      for (const lit of line.matchAll(/"([a-z0-9-]+)"/g)) add(lit[1]);
    }
  }
}

const missing = [...used.keys()].filter((n) => !names.has(n));
const unused = [...names].filter((n) => !used.has(n));

console.log(`registry: ${names.size} names | referenced: ${used.size} names`);
if (unused.length) console.log(`\nunused registry entries (${unused.length}):\n  ${unused.join(", ")}`);
if (missing.length) {
  console.error(`\nMISSING FROM REGISTRY (${missing.length}):`);
  for (const n of missing) console.error(`  ${n}\n    used in: ${[...used.get(n)].join(", ")}`);
  process.exit(1);
}
console.log(`\nOK — every referenced icon resolves.`);
