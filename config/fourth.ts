/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GONDAL BLACK GOLD SUPPLY  (/fourth)
 *
 *  Bitumen & road-materials supply — the group's road-building supply arm.
 *  Black gold = bitumen: the dark binder under every highway.
 *
 *  RENAMING / CHANGING THE URL  (e.g. moving this site to /black-gold):
 *    1. Rename  config/fourth.ts  →  config/black-gold.ts
 *    2. In this file set  slug: "black-gold";  update  navigation/pages hrefs.
 *    3. Rename  app/fourth/  →  app/black-gold/  and update the layout import.
 *    4. Register the new config in  config/index.ts  (uses business.slug).
 *    5. Update / public URLs elsewhere (sitemap builds itself).
 *
 *  Replace the […]-wrapped placeholder values before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { BusinessConfig } from "./types";

export const fourth: BusinessConfig = {
  slug: "fourth",
  name: "Gondal Black Gold Supply",
  shortName: "Black Gold Supply",
  legalName: "Gondal Black Gold Supply (Pvt.) Ltd.",
  industry: "Bitumen & Road-Materials Supply",
  industryTag: "Road Supply",
  tagline: "The black gold under every highway.",
  summary:
    "Bitumen, emulsions and road-building materials — sourced, stored, heated and delivered to contractors, agencies and asphalt plants across Pakistan.",
  est: "[Est. Year]",
  colors: {
    primary: "#C9A227",
    primaryDeep: "#8F6F14",
    accent: "#1E383C",
    soft: "#F4EFE3",
    faint: "#FAF7F0",
    surface: "#FAF6ED",
    surfaceDark: "#14151A",
    paper: "#FFFDF6",
    ink: "#20231F",
    muted: "#6A6F63",
    line: "#E3DCC8",
    onBrand: "#14151A",
    btnRadius: "0.25rem",
  },
  displayFont: "Poppins",
  bodyFont: "Poppins",
  hero: {
    eyebrow: "[Est. Year] · Bitumen & road materials",
    headline: ["Black gold under", "every highway."],
    support:
      "We source, store and deliver bitumen and road-building materials to contractors, plants and agencies — heated, sampled and documented on every dispatch.",
    image: "/images/fourth/hero-bitumen.svg",
    note: "Storage & fleet · [Region], Pakistan",
    ctaPrimary: { label: "Browse bitumen products", href: "/fourth/products" },
    ctaSecondary: { label: "How we supply", href: "/fourth/about" },
  },
  intro: {
    eyebrow: "The supply house",
    headline: "Played on spec. Delivered on time.",
    body: "Gondal Black Gold Supply began in [Est. Year] to solve one recurring problem in Pakistani road works: good materials arriving late, or worst, out of spec. We hold the black gold — bitumen and its working grades — in heated storage, keep it sampled, and move it to plants and sites on a schedule contractors can plan around.",
    bodySecondary:
      "Our yard is a supply house, not a refinery: we work with [supplier/refiner] partners, guarantee the grade on the certificate, and take full responsibility for storage temperature, handling and delivery condition between the gate and the job.",
    image: "/images/fourth/depot-tanks.svg",
    points: [
      { title: "Heated storage", body: "Bitumen stays liquid and workable in temperature-controlled tanks, never over- or under-heated.", icon: "gauge" },
      { title: "Sampled every time", body: "Every delivery leaves with a sample and a batch certificate tied to our storage log.", icon: "lab" },
      { title: "Dispatch record", body: "Weighed, ticketed and scheduled — a supply record as clean as the material.", icon: "truck" },
    ],
  },
  stats: [
    { value: 4, suffix: "+", label: "Bitumen product lines" },
    { value: 25, suffix: "K MT", label: "Annual throughput" },
    { value: 9, suffix: "/10", label: "Batching plants served" },
    { value: 92, suffix: "%", label: "On-time dispatch" },
  ],
  navigation: [
    { href: "/fourth", label: "Home" },
    { href: "/fourth/about", label: "About" },
    { href: "/fourth/products", label: "Products" },
    { href: "/fourth/projects", label: "Projects" },
    { href: "/fourth/contact", label: "Contact" },
  ],
  pages: [
    { href: "/fourth", label: "Home", changefreq: "weekly", title: "Gondal Black Gold Supply — Bitumen & Road Materials in Pakistan" },
    { href: "/fourth/about", label: "About Us", title: "About — Gondal Black Gold Supply" },
    { href: "/fourth/products", label: "Bitumen Products", title: "Bitumen Products — Gondal Black Gold Supply" },
    { href: "/fourth/projects", label: "Projects", title: "Projects & Supply Runs — Gondal Black Gold Supply" },
    { href: "/fourth/contact", label: "Contact", title: "Contact — Gondal Black Gold Supply" },
  ],
  contact: {
    phone: "+92 300 [Phone Number]",
    email: "fourth@gondalgroup.example.com",
    address: "[Yard Address], [City], Pakistan",
    whatsapp: "+92 300 [Phone Number]",
    hours: "Yard office: Mon – Sat, 8:00 – 18:00 (PKT)",
    city: "[Yard City]",
    country: "Pakistan",
  },
  socials: {
    linkedin: "https://linkedin.com/company/gondalblackgold",
    facebook: "https://facebook.com/gondalblackgold",
    whatsapp: "+92 300 [Phone Number]",
  },
  metadata: {
    title: "Gondal Black Gold Supply — Bitumen & Road Materials in Pakistan",
    description:
      "Bitumen and road-materials supply company in Pakistan: penetration and viscosity grades, emulsions and road-building inputs — stored heated, sampled and delivered on schedule.",
    keywords: ["bitumen Pakistan", "bitumen supply", "road materials", "asphalt", "emulsions", "Gondal Black Gold"],
    themeColor: "#14151A",
    ogImage: "/images/fourth/og.svg",
    locale: "en_PK",
  },
  images: {
    card: "/images/fourth/card-bitumen.svg",
    hero: "/images/fourth/hero-bitumen.svg",
    about: "/images/fourth/depot-tanks.svg",
    gallery: [
      { src: "/images/fourth/depot-tanks.svg", alt: "Heated bitumen storage tanks at the yard", caption: "Storage tanks — [yard site]" },
      { src: "/images/fourth/barrels.svg", alt: "Stacked bitumen barrels", caption: "Drummed supply — [grade]" },
      { src: "/images/fourth/truck-tanker.svg", alt: "Bitumen tanker on the highway", caption: "Dispatch — [route]" },
      { src: "/images/fourth/lab-samples.svg", alt: "Bitumen samples in the lab", caption: "Batch sampling" },
      { src: "/images/fourth/asphalt-plant.svg", alt: "Asphalt batching plant receiving material", caption: "Plant delivery — [site]" },
      { src: "/images/fourth/highway-lay.svg", alt: "Paving train on a highway section", caption: "Paving day — [project]" },
    ],
  },
  placeholder: true,
  placeholderNote:
    "Gondal Black Gold Supply — demo content. Grades, capacities, clients and figures are placeholders; confirm and replace in config/fourth.ts before going live.",
  products: [
    {
      name: "Penetration Grade Bitumen",
      tag: "Road surfacing",
      icon: "droplet",
      body: "Standard paving grade for hot-mix asphalt — [confirm grade list, e.g. 60/70, 80/100].",
      specs: ["Grade: [60/70, 80/100]", "Penetration: [spec]", "Form: bulk tanker / drummed"],
    },
    {
      name: "Viscosity Grade Bitumen",
      tag: "Hot-mix batching plants",
      icon: "factory",
      body: "Viscosity-graded binder for plant-produced asphalt where tighter specs matter.",
      specs: ["Grade: [VG-30 / VG-40]", "Test: [as per standard]", "Supply: [bulk]"],
    },
    {
      name: "Bitumen Emulsions",
      tag: "Sealing & primer coats",
      icon: "road",
      body: "Anionic/cationic emulsions for tack coats, seals and surface treatments — [grade list].",
      specs: ["Type: [anionic / cationic]", "Break: [RS / MS / SS]", "Packing: [bulk / drums]"],
    },
    {
      name: "Polymer Modified Bitumen",
      tag: "Heavy-traffic pavements",
      icon: "gauge",
      body: "Polymer-blended binder for high-stress sections — produced and tested on request.",
      specs: ["Modifier: [polymer type]", "Status: [on request]", "Certificates: [per lot]"],
    },
    {
      name: "Cutback & Primers",
      tag: "Spray works",
      icon: "truck",
      body: "Solvent-diluted cutbacks and primers for spraying operations — [availability].",
      specs: ["Grades: [RC / MC]", "Supply: [bulk / drum]", "Note: [confirm stock]"],
    },
  ],
  projects: [
    {
      title: "[Highway section — surfacing]",
      client: "[Contractor/agency name]",
      body: "Scheduled bitumen supply for surfacing works over [duration] at [x] MT/week.",
      tags: ["Asphalt", "Recurring supply"],
      stat: { value: 120, suffix: " MT", label: "Delivered to date" },
    },
    {
      title: "[Batching plant — city]",
      client: "[Asphalt company]",
      body: "Standing viscosity-grade supply agreement with a city batching plant.",
      tags: ["VG bitumen", "Contract"],
      stat: { value: 40, suffix: " MT/wk", label: "Contract rate" },
    },
    {
      title: "[Paving depot — region]",
      client: "[Public works / agency]",
      body: "Framed supply of emulsions and primers for surface treatments in [region].",
      tags: ["Emulsions", "Primers"],
      stat: { value: 60, suffix: " MT", label: "Committed" },
    },
  ],
};
