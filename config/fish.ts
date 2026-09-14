/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GONDAL FRESHWATER FARMS  (/fish)
 *
 *  Aquaculture / freshwater fisheries site configuration.
 *
 *  Everything a page or component needs to know about this business lives
 *  here: identity, colors, fonts, navigation, contact, SEO and content.
 *  Replace the […]-wrapped placeholder values before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { BusinessConfig } from "./types";

export const fish: BusinessConfig = {
  slug: "fish",
  name: "Gondal Freshwater Farms",
  shortName: "Fish Farms",
  legalName: "Gondal Freshwater Farms (Pvt.) Ltd.",
  industry: "Aquaculture & Freshwater Fisheries",
  industryTag: "Aquaculture",
  tagline: "Fresh from clean waters.",
  summary:
    "Pond-to-market freshwater fish farming — hatchery, grow-out lakes and a short, fast cold-chain built around Pakistan’s rivers.",
  est: "[Est. Year]",
  colors: {
    primary: "#0E5C66",
    primaryDeep: "#0A3339",
    accent: "#E08A4B",
    soft: "#E7F0EC",
    faint: "#F2F7F4",
    surface: "#F6F3EC",
    surfaceDark: "#0C3B41",
    paper: "#FFFFFF",
    ink: "#123B40",
    muted: "#4E6B70",
    line: "#D6E3DC",
    onBrand: "#F2F7F4",
    btnRadius: "9999px",
  },
  displayFont: "Instrument Serif",
  hero: {
    eyebrow: `${"[Est. Year]"} · Freshwater aquaculture`,
    headline: ["Fresh from", "clean waters."],
    support:
      "We raise quality freshwater fish in natural pond systems and move it to market through a short, fast supply chain — from water to table in hours, not days.",
    image: "/images/fish/hero-water.svg",
    note: "Pond-to-market · [Farm Area] acres · [Region], Pakistan",
    ctaPrimary: { label: "Browse our fish", href: "/fish/fish-species" },
    ctaSecondary: { label: "Visit the farm", href: "/fish/facilities" },
  },
  intro: {
    eyebrow: "The farm",
    headline: "A quiet farm, working every day.",
    body: "Gondal Freshwater Farms was started in [Est. Year] around a simple idea: good fish, raised close to the market, with as few hands between the water and the table as possible. Today the farm runs its own hatchery, nursery and grow-out lakes in [Region], Pakistan.",
    bodySecondary:
      "Our ponds are managed on traditional practices refined by modern feeding and water-quality checks. We grow [Species names] suited to local waters and local tastes, and dispatch to markets, restaurants and wholesale buyers across the region.",
    image: "/images/fish/pond-aerial.svg",
    points: [
      { title: "Natural waters", body: "Earth ponds fed and maintained as natural water bodies, not tanks.", icon: "tint" },
      { title: "Responsible farming", body: "Feeding, stocking density and water checks managed per pond.", icon: "leaf" },
      { title: "Local supply", body: "Dispatch within hours to nearby cities — short travel, fresh fish.", icon: "truck" },
    ],
  },
  stats: [
    { value: 12, suffix: "+", label: "Named species & lines" },
    { value: 40, suffix: "ac", label: "Farm water area" },
    { value: 6, suffix: "+", label: "Harvest cycles / year" },
    { value: 90, suffix: "%", label: "Dispatch within 24h" },
  ],

  navigation: [
    { href: "/fish", label: "Home" },
    { href: "/fish/about", label: "About" },
    { href: "/fish/fish-species", label: "Fish Species" },
    { href: "/fish/facilities", label: "Facilities" },
    { href: "/fish/production", label: "Production" },
    { href: "/fish/gallery", label: "Gallery" },
    { href: "/fish/contact", label: "Contact" },
  ],
  pages: [
    { href: "/fish", label: "Home", changefreq: "weekly", title: "Gondal Freshwater Farms — Fresh from Clean Waters" },
    { href: "/fish/about", label: "About Us" },
    { href: "/fish/fish-species", label: "Fish Species", title: "Fish Species — Gondal Freshwater Farms" },
    { href: "/fish/products", label: "Products & Formats", title: "Products & Formats — Gondal Freshwater Farms" },
    { href: "/fish/facilities", label: "Facilities", title: "Facilities — Gondal Freshwater Farms" },
    { href: "/fish/production", label: "Production", title: "Production & Supply — Gondal Freshwater Farms" },
    { href: "/fish/gallery", label: "Gallery", title: "Gallery — Gondal Freshwater Farms" },
    { href: "/fish/contact", label: "Contact", title: "Contact — Gondal Freshwater Farms" },
  ],
  contact: {
    phone: "+92 300 [Phone Number]",
    email: "fish@gondalgroup.example.com",
    address: "[Farm Address], [Region], Pakistan",
    whatsapp: "+92 300 [Phone Number]",
    hours: "Farm office: Sat – Thu, 8:00 – 17:00 (PKT)",
    city: "[Farm City]",
    country: "Pakistan",
  },
  socials: {
    facebook: "https://facebook.com/gondalfreshwater",
    instagram: "https://instagram.com/gondalfreshwater",
    whatsapp: "+92 300 [Phone Number]",
  },
  metadata: {
    title: "Gondal Freshwater Farms — Fresh from Clean Waters",
    description:
      "Freshwater fish farm in Pakistan: hatchery, nursery and grow-out lakes producing quality fish for local markets, restaurants and wholesale buyers.",
    keywords: [
      "fish farm Pakistan",
      "freshwater aquaculture",
      "hatchery",
      "Rohu",
      "fresh fish supply",
      "Gondal Freshwater Farms",
    ],
    themeColor: "#0E5C66",
    ogImage: "/images/fish/og.svg",
    locale: "en_PK",
  },
  images: {
    card: "/images/fish/card-pond.svg",
    hero: "/images/fish/hero-water.svg",
    about: "/images/fish/pond-aerial.svg",
    gallery: [
      { src: "/images/fish/pond-aerial.svg", alt: "Aerial view of rectangular fish ponds", caption: "Grow-out ponds — [Farm Site]" },
      { src: "/images/fish/hatchery.svg", alt: "Fish hatchery tanks", caption: "Hatchery & nursery — [Site]" },
      { src: "/images/fish/species-rohu.svg", alt: "Illustration of a Rohu fish", caption: "Rohu — [species entry]" },
      { src: "/images/fish/species-carp.svg", alt: "Illustration of a grass carp fish", caption: "Grass Carp — [species entry]" },
      { src: "/images/fish/harvest.svg", alt: "Fish harvest netting scene", caption: "Harvest day — [date]" },
      { src: "/images/fish/packhouse.svg", alt: "Packing and cold-store building", caption: "Packhouse & cold store" },
    ],
  },
  placeholder: true,
  placeholderNote:
    "Gondal Freshwater Farms — demo content. Species lists, capacities and figures are placeholders; confirm and replace in config/fish.ts before going live.",
  species: [
    {
      name: "Rohu",
      latin: "[Labeo rohita]",
      icon: "fish1",
      body: "A fast-growing river carp and the backbone of pond culture across the subcontinent, valued for its firm, flaky flesh.",
      details: ["Grow-out: [x] months", "Harvest size: [x] kg", "Markets: [Local / regional]"],
    },
    {
      name: "Mori",
      latin: "[Cirrhinus mrigala]",
      icon: "fish2",
      body: "A bottom-feeding carp kept alongside Rohu in polyculture ponds, adding balance to natural feeding systems.",
      details: ["Grow-out: [x] months", "Feeding: natural + [supplement]", "Markets: [Wholesale]"],
    },
    {
      name: "Thaila",
      latin: "[Catla catla]",
      icon: "fish3",
      body: "A large surface-feeding carp preferred for family meals and occasion cooking across Punjab and Sindh.",
      details: ["Grow-out: [x] months", "Harvest size: [x] kg", "Markets: [Retail / restaurants]"],
    },
    {
      name: "Grass Carp",
      latin: "[Ctenopharyngodon idella]",
      icon: "fish4",
      body: "A vegetarian pond fish kept for vegetation control and food alike — [confirm local demand and list].",
      details: ["Role: [vegetation / food]", "Grow-out: [x] months", "Markets: [On request]"],
    },
  ],
  products: [
    {
      name: "Live Fish",
      tag: "Pond-fresh",
      icon: "drop",
      body: "Whole live fish dispatched in oxygenated water carriers to wholesale and market buyers within hours of harvest.",
      specs: ["Form: live, whole", "Packing: [oxygen bags / tanks]", "Lead time: [x] hours"],
    },
    {
      name: "Chilled Whole",
      tag: "Hygienically processed",
      icon: "snow",
      body: "Whole fish gutted, cleaned and chilled on ice for retail, restaurants and institutional buyers.",
      specs: ["Form: whole, gutted (optional)", "Chill: ice + [cold store]", "Sizes: [grade sizes]"],
    },
    {
      name: "Fillets & Portions",
      tag: "On request",
      icon: "knife",
      body: "Skinless fillets and portion cuts prepared to order for hotels, caterers and processors.",
      specs: ["Yield: [x]%", "Cut: [per spec]", "Minimum order: [kg]"],
    },
    {
      name: "Value-Added",
      tag: "Under development",
      icon: "box",
      body: "Marinated, smoked and other value-added ranges planned with local partners — [status].",
      specs: ["Status: [planned / pilot]", "Formats: [TBC]", "Markets: [TBC]"],
    },
  ],
  process: [
    { no: "01", title: "Hatchery & nursery", body: "Fry are raised through nursery stages under controlled feeding and water-quality care.", icon: "drop" },
    { no: "02", title: "Stocking & grow-out", body: "Fingerlings are stocked into grow-out ponds and managed through natural and supplemented feeding.", icon: "tint" },
    { no: "03", title: "Pond management", body: "Daily water checks, aeration and feeding routines keep ponds healthy through the season.", icon: "leaf" },
    { no: "04", title: "Harvest", body: "Ponds are harvested to order using seine nets at first light, so fish are handled only once.", icon: "net" },
    { no: "05", title: "Cold-chain dispatch", body: "Fish moves to ice-chilled packing and onto dispatch within hours — never left to wait.", icon: "truck" },
  ],
  facilities: [
    {
      title: "Hatchery & nurseries",
      icon: "drop",
      body: "Controlled breeding and larval-rearing rooms with dedicated nursery ponds for every spawn group.",
      points: ["Breeding room — [capacity]", "Nursery ponds — [count]", "Water supply: [source]"],
    },
    {
      title: "Grow-out lakes",
      icon: "tint",
      body: "Earth ponds of [hectares] divided by water source and species to keep stocking clean and traceable.",
      points: ["Pond count — [x]", "Average size — [x] ac", "Aeration — [method]"],
    },
    {
      title: "Water & quality lab",
      icon: "lab",
      body: "A small on-farm lab runs routine water and fish-health checks rather than guessing by eye.",
      points: ["Checks: pH, [dissolved O₂], [ammonia]", "Frequency: [daily / weekly]", "Records: pond-by-pond"],
    },
    {
      title: "Harvest & packhouse",
      icon: "snow",
      body: "Covered packing floor, ice storage and dispatch bay sized to move a harvest in one morning.",
      points: ["Packing floor — [m²]", "Ice bunker — [capacity]", "Dispatch: [timing]"],
    },
  ],
};
