/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GONDAL SALT WORKS  (/salt)
 *
 *  Salt mining & processing site configuration — a premium industrial/mineral
 *  identity, deliberately different from the fish farm.
 *
 *  Replace the […]-wrapped placeholder values before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { BusinessConfig } from "./types";

export const salt: BusinessConfig = {
  slug: "salt",
  name: "Gondal Salt Works",
  shortName: "Salt Works",
  legalName: "Gondal Salt Works (Pvt.) Ltd.",
  industry: "Salt Mining, Processing & Export",
  industryTag: "Minerals",
  tagline: "From the mountains to the world.",
  summary:
    "Rock salt mining and processing — food-grade, industrial and de-icing grades, milled, graded and packed to order from Pakistan.",
  est: "[Est. Year]",
  colors: {
    primary: "#961C23",
    primaryDeep: "#6B1117",
    accent: "#C08A4E",
    soft: "#F7EEE4",
    faint: "#FBF6F0",
    surface: "#F6F3EF",
    surfaceDark: "#1F1616",
    paper: "#FFFFFF",
    ink: "#241C1C",
    muted: "#6B6058",
    line: "#E7DED2",
    onBrand: "#FFFFFF",
    btnRadius: "0.3125rem",
    cardRadius: "0.3125rem",
    gridGap: "1.25rem",
  },
  displayFont: "Poppins",
  bodyFont: "Poppins",
  displayCase: "upper",
  hero: {
    eyebrow: "[Est. Year] · Salt mining & processing",
    headline: ["From the mountains,", "to the world."],
    support:
      "We mine, mill and grade rock salt — from food-grade Himalayan pink to industrial and road salt — with consistent quality and serious export discipline.",
    image: "/images/salt/hero5.webp",
    note: "Mines & mills · [Region], Pakistan",
    ctaPrimary: { label: "Browse our products", href: "/salt/products" },
    ctaSecondary: { label: "Our quality promise", href: "/salt/quality" },
  },
  intro: {
    eyebrow: "The company",
    headline: "A mineral business built on a mountain of salt.",
    body: "Gondal Salt Works was established in [Est. Year] to do one thing properly: take rock salt out of the mountain and turn it into dependable product for tables, factories and roads. From [Mine Region], Pakistan, we supply food-grade, industrial and de-icing grades to buyers across the country and, increasingly, to export markets.",
    bodySecondary:
      "Our control runs from mine to packing floor, so every bag we dispatch can be traced back to the rock it came from. Food companies care about that. Chemical plants care about that. And it has made us the kind of supplier people quietly stop worrying about — which is exactly what we intend to be.",
    image: "/images/salt/Ban1.jpg",
    points: [
      { title: "Mineral heritage", body: "Native rock salt from [Salt Range], Pakistan — pure and traceable to source.", icon: "crystal" },
      { title: "Full control", body: "Owned mining, milling and packing keeps quality and supply in one hand.", icon: "factory" },
      { title: "Export discipline", body: "Documentation, grade specs and packing built for international buyers.", icon: "ship" },
    ],
  },
  stats: [
    { value: 100, suffix: "K MT", label: "Milling capacity / yr" },
    { value: 5, suffix: "+", label: "Product lines" },
    { value: 14, suffix: "+", label: "Customer sectors" },
    { value: 98, suffix: "%", label: "On-spec dispatch" },
  ],

  navigation: [
    { href: "/salt", label: "Home" },
    { href: "/salt/about", label: "About" },
    { href: "/salt/products", label: "Products" },
    { href: "/salt/quality", label: "Quality" },
    { href: "/salt/processing", label: "Processing" },
    { href: "/salt/export", label: "Export" },
    { href: "/salt/gallery", label: "Gallery" },
    { href: "/salt/contact", label: "Contact" },
  ],
  pages: [
    { href: "/salt", label: "Home", changefreq: "weekly", title: "Gondal Salt Works — Salt Mining & Processing in Pakistan" },
    { href: "/salt/about", label: "About Us", title: "About — Gondal Salt Works" },
    { href: "/salt/products", label: "Products", title: "Products — Gondal Salt Works" },
    { href: "/salt/quality", label: "Quality", title: "Quality — Gondal Salt Works" },
    { href: "/salt/processing", label: "Processing", title: "Processing — Gondal Salt Works" },
    { href: "/salt/export", label: "Export", title: "Export — Gondal Salt Works" },
    { href: "/salt/facilities", label: "Facilities", title: "Facilities — Gondal Salt Works" },
    { href: "/salt/gallery", label: "Gallery", title: "Gallery — Gondal Salt Works" },
    { href: "/salt/contact", label: "Contact", title: "Contact — Gondal Salt Works" },
  ],
  contact: {
    phone: "+92 300 [Phone Number]",
    email: "salt@gondalgroup.example.com",
    address: "[Mills Address], [Region], Pakistan",
    whatsapp: "+92 300 [Phone Number]",
    hours: "Works office: Mon – Sat, 9:00 – 18:00 (PKT)",
    city: "[Mine City]",
    country: "Pakistan",
  },
  socials: {
    facebook: "https://facebook.com/gondalsaltworks",
    linkedin: "https://linkedin.com/company/gondalsaltworks",
    whatsapp: "+92 300 [Phone Number]",
  },
  metadata: {
    title: "Gondal Salt Works — Salt Mining & Processing in Pakistan",
    description:
      "Rock salt mining and processing company in Pakistan: Himalayan pink salt, food-grade, industrial and de-icing grades — mined, milled and packed from source.",
    keywords: [
      "salt mining Pakistan",
      "Himalayan pink salt",
      "rock salt",
      "industrial salt",
      "iodised table salt",
      "Gondal Salt Works",
    ],
    themeColor: "#961C23",
    ogImage: "/images/salt/og-hero.jpg",
    locale: "en_PK",
  },
  images: {
    card: "/images/salt/hero1.webp",
    hero: "/images/salt/hero5.webp",
    about: "/images/salt/hero3.webp",
    gallery: [
      { src: "/images/salt/Ban1.jpg", alt: "Milled pink Himalayan salt served in a wooden bowl", caption: "Milled pink salt — food grade" },
      { src: "/images/salt/hero1.webp", alt: "Branded pack of Gondal pink salt with a wooden spoon", caption: "Gondal pink salt — retail pack" },
      { src: "/images/salt/hero3.webp", alt: "Gondal salt shaker sets displayed with their packaging", caption: "Shaker sets — ready to ship" },
      { src: "/images/salt/hero2.webp", alt: "Gondal Salt Company stand at a trade exhibition", caption: "Buyer meetings — trade fair" },
      { src: "/images/salt/hero5.webp", alt: "Large pile of pink rock salt at the works yard", caption: "Bulk rock salt at the yard" },
      { src: "/images/salt/hero.jpg", alt: "Close-up of pink rock-salt lumps", caption: "Rock salt — run of mine" },
      { src: "/images/salt/gondalsaltcompany2005_1714656456_3359104282991601043_51843885830.webp", alt: "Gift box holding two Himalayan salt lamps", caption: "Salt lamps — gift set" },
      { src: "/images/salt/lampgondalsaltcompany2005_1714657216_3359110658719581388_51843885830.webp", alt: "Tall polished Himalayan salt lamp on a metal base", caption: "Tall salt lamp — polished" },
      { src: "/images/salt/gondalsaltcompany2005_1714657099_3359109670155784213_51843885830.webp", alt: "Wall display of Himalayan salt lamps in many shapes", caption: "Lamp range on display" },
      { src: "/images/salt/lampgondalsaltcompany2005_1714247740_3355675720414642760_51843885830.webp", alt: "Glowing Himalayan salt bowl lamp", caption: "Glowing salt bowl lamp" },
      { src: "/images/salt/lamp84.jpg", alt: "Black marble candle holder lit with six tealights", caption: "Marble & onyx candle holder" },
      { src: "/images/salt/lamp73.jpg", alt: "Hand-carved stone sphere candle holder with a lit tealight", caption: "Carved holder — sphere" },
    ],
  },
  placeholder: true,
  placeholderNote:
    "Gondal Salt Works — demo content. Mines, capacities, grades and figures are placeholders; confirm and replace in config/salt.ts before going live.",
  products: [
    {
      name: "Himalayan Pink Salt",
      tag: "Food grade",
      icon: "crystal",
      body: "Hand-sorted pink rock salt for food processing and premium retail — milled to requested granulation.",
      specs: ["Purity: [x]% NaCl", "Granulation: [0.2 – 2 mm and up]", "Packing: [25 / 50 / 1,000 kg]"],
    },
    {
      name: "Rock Salt — Industrial",
      tag: "Industrial / chemical",
      icon: "factory",
      body: "Run-of-mine and crushed rock salt for chemical, tanning, water conditioning and textile use.",
      specs: ["Grade: [industrial #1 / #2]", "Size: [lump / crushed]", "Moisture: [max x%]"],
    },
    {
      name: "Iodised Table Salt",
      tag: "Retail & food industry",
      icon: "box",
      body: "Refined, iodised cooking salt produced under [standard] for retail packs and food manufacturers.",
      specs: ["Iodine: [x] ppm", "Anti-caking: [yes / no]", "Pack sizes: [250 g – 25 kg]"],
    },
    {
      name: "De-icing & Road Salt",
      tag: "Infrastructure",
      icon: "road",
      body: "Coarse salt for snow and ice control on roads and airport surfaces in cold-weather markets.",
      specs: ["Granulation: [2 – 8 mm]", "Bulk / bagged", "Certificates: [on request]"],
    },
    {
      name: "Feed & Ag Salt",
      tag: "Agriculture",
      icon: "leaf",
      body: "Granular and block salt for livestock nutrition — [confirm grade pack].",
      specs: ["Grade: [feed]", "Form: [granules / blocks]", "Markets: [domestic / export]"],
    },
  ],
  process: [
    { no: "01", title: "Mining & transport", body: "Rock salt is extracted from [Salt Range] and trucked to the works in controlled batches.", icon: "mountain" },
    { no: "02", title: "Crushing & grading", body: "Primary and secondary crushers reduce rock to product-specific sieve grades.", icon: "hammer" },
    { no: "03", title: "Washing & refining", body: "Food and refining lines wash, dry and (where specified) refine salt to specification.", icon: "droplet" },
    { no: "04", title: "Iodisation & additives", body: "Food-grade salt is iodised and treated to [national standard] on a metered dosing line.", icon: "lab" },
    { no: "05", title: "Packing & dispatch", body: "Product is packed, palletised, sealed and dispatched with full grade documentation.", icon: "box" },
  ],
  facilities: [
    {
      title: "Mine & extraction",
      icon: "mountain",
      body: "Leased salt deposits with controlled extraction faces in the [Salt Range] region.",
      points: ["Extraction: [method]", "Reserves: [x] years", "Logistics: [road / rail]"],
    },
    {
      title: "Crushing & milling",
      icon: "hammer",
      body: "Multi-stage crushers and mills producing [x] product grades from lump to fine powder.",
      points: ["Lines: [primary / secondary]", "Sieve range: [mm – mm]", "Capacity: [x] MT/day"],
    },
    {
      title: "Refining & iodisation",
      icon: "droplet",
      body: "Wash-and-refine line and a metered iodisation facility for food-grade output.",
      points: ["Wash capacity: [x] MT/day", "Iodine dosing: [method]", "Standard: [national / [ISO]]"],
    },
    {
      title: "Quality laboratory",
      icon: "lab",
      body: "On-site lab verifying [NaCl purity], moisture, insolubles and iodine on every production lot.",
      points: ["Tests: [purity / moisture / iodine]", "Sampling: per lot", "Records: [x] years"],
    },
    {
      title: "Packing & warehouse",
      icon: "box",
      body: "Bagging lines and covered storage for bulk and packed salt in [municipalities].",
      points: ["Pack sizes: [as per product]", "Storage: [x] MT", "Dispatch: [trucks / containers]"],
    },
  ],
};
