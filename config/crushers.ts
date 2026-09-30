/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GONDAL CRUSHING WORKS  (/crushers)
 *
 *  Stone crushing & construction aggregates — heavy industrial / engineering
 *  identity. Deliberately different from both fish and salt.
 *
 *  Replace the […]-wrapped placeholder values before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { BusinessConfig } from "./types";

export const crushers: BusinessConfig = {
  slug: "crushers",
  name: "Gondal Crushing Works",
  shortName: "Crushers",
  legalName: "Gondal Crushing Works (Pvt.) Ltd.",
  industry: "Stone Crushing & Construction Aggregates",
  industryTag: "Construction",
  tagline: "The foundation under every build.",
  summary:
    "Quarry-to-site stone aggregates — crushed to grade, screened and washed for roads, concrete, rail and construction across Pakistan.",
  est: "[Est. Year]",
  colors: {
    primary: "#E4A11B",
    primaryDeep: "#B97F12",
    accent: "#D96C3B",
    soft: "#ECEFE9",
    faint: "#F6F7F5",
    surface: "#F4F5F2",
    surfaceDark: "#1B1E22",
    paper: "#FFFFFF",
    ink: "#1C1E22",
    muted: "#6A7078",
    line: "#D7DADB",
    onBrand: "#16181C",
    btnRadius: "0rem",
  },
  displayFont: "Poppins",
  bodyFont: "Poppins",
  hero: {
    eyebrow: "[Est. Year] · Quarrying & crushing",
    headline: ["Strength", "in stone."],
    support:
      "We quarry, crush and screen stone into the aggregates that carry Pakistan’s roads, bridges, concrete and foundations — grade after grade, load after load.",
    image: "/images/crushers/hero-aggregate.svg",
    note: "Plants & yards · [Region], Pakistan",
    ctaPrimary: { label: "Aggregates & grades", href: "/crushers/products" },
    ctaSecondary: { label: "View projects", href: "/crushers/projects" },
  },
  intro: {
    eyebrow: "The works",
    headline: "Rock in, aggregate out. Everything else is engineering.",
    body: "Gondal Crushing Works has run quarries and crushing plants in [Region], Pakistan since [Est. Year]. We start with sound geological material and turn it into tested, sized, stackable aggregate — nothing more, nothing less, and always to spec.",
    bodySecondary:
      "Our plants feed road contractors, RMC batching plants, block makers, railways and builders. Because our yard holds the full size range in stock, a contractor can order a single grade or a complete project take-off and collect it in one trip.",
    image: "/images/crushers/plant-crusher.svg",
    points: [
      { title: "Tested material", body: "Feed rock is characterised and every grade is sieved against spec before dispatch.", icon: "lab" },
      { title: "Stock availability", body: "Full grade range held in stock — partial loads and project-scale orders alike.", icon: "yard" },
      { title: "Weighbridge honesty", body: "Loads leave weighed, ticketed and documented — no short measure.", icon: "truck" },
    ],
  },
  stats: [
    { value: 300, suffix: "K MT", label: "Annual output" },
    { value: 7, suffix: "+", label: "Standard grades" },
    { value: 60, suffix: "+", label: "Active projects served" },
    { value: 24, suffix: "/7", label: "Dispatch availability" },
  ],

  navigation: [
    { href: "/crushers", label: "Home" },
    { href: "/crushers/about", label: "About" },
    { href: "/crushers/products", label: "Products" },
    { href: "/crushers/materials", label: "Materials" },
    { href: "/crushers/projects", label: "Projects" },
    { href: "/crushers/facilities", label: "Facilities" },
    { href: "/crushers/gallery", label: "Gallery" },
    { href: "/crushers/contact", label: "Contact" },
  ],
  pages: [
    { href: "/crushers", label: "Home", changefreq: "weekly", title: "Gondal Crushing Works — Stone Aggregates in Pakistan" },
    { href: "/crushers/about", label: "About Us", title: "About — Gondal Crushing Works" },
    { href: "/crushers/products", label: "Products", title: "Products & Grades — Gondal Crushing Works" },
    { href: "/crushers/materials", label: "Materials", title: "Materials — Gondal Crushing Works" },
    { href: "/crushers/projects", label: "Projects", title: "Projects — Gondal Crushing Works" },
    { href: "/crushers/facilities", label: "Facilities", title: "Facilities — Gondal Crushing Works" },
    { href: "/crushers/gallery", label: "Gallery", title: "Gallery — Gondal Crushing Works" },
    { href: "/crushers/contact", label: "Contact", title: "Contact — Gondal Crushing Works" },
  ],
  contact: {
    phone: "+92 300 [Phone Number]",
    email: "crushers@gondalgroup.example.com",
    address: "[Plant Address], [Region], Pakistan",
    whatsapp: "+92 300 [Phone Number]",
    hours: "Plant office: Mon – Sat, 8:00 – 19:00 (PKT)",
    city: "[Plant City]",
    country: "Pakistan",
  },
  socials: {
    facebook: "https://facebook.com/gondalcrushing",
    linkedin: "https://linkedin.com/company/gondalcrushingworks",
    whatsapp: "+92 300 [Phone Number]",
  },
  metadata: {
    title: "Gondal Crushing Works — Stone Aggregates & Crushing in Pakistan",
    description:
      "Quarry and crushing company in Pakistan supplying tested construction aggregates — crushed stone, crush sand, road base and ballast for roads, concrete, rail and builders.",
    keywords: [
      "stone crusher Pakistan",
      "construction aggregates",
      "crush stone",
      "road base",
      "ballast",
      "Gondal Crushing Works",
    ],
    themeColor: "#1B1E22",
    ogImage: "/images/crushers/og.svg",
    locale: "en_PK",
  },
  images: {
    card: "/images/crushers/card-aggregate.svg",
    hero: "/images/crushers/hero-aggregate.svg",
    about: "/images/crushers/plant-crusher.svg",
    gallery: [
      { src: "/images/crushers/agg-granite.svg", alt: "Crushed granite aggregate pile", caption: "Coarse aggregate — [grade]" },
      { src: "/images/crushers/agg-limestone.svg", alt: "Crushed limestone stockpile", caption: "Base material — [grade]" },
      { src: "/images/crushers/quarry-terraces.svg", alt: "Quarry terraces at dusk", caption: "Quarry face — [site]" },
      { src: "/images/crushers/plant-crusher.svg", alt: "Crusher plant with conveyor", caption: "Plant — [line]" },
      { src: "/images/crushers/site-work.svg", alt: "Dump trucks loading onsite", caption: "Dispatch yard" },
      { src: "/images/crushers/highway-project.svg", alt: "Highway under construction", caption: "Project — [name]" },
    ],
  },
  placeholder: true,
  placeholderNote:
    "Gondal Crushing Works — demo content. Quarries, capacities, project lists and figures are placeholders; confirm and replace in config/crushers.ts before going live.",
  products: [
    {
      name: "Coarse Aggregate 40 – 20 mm",
      tag: "Concrete & structures",
      icon: "stones",
      body: "Primary coarse aggregate for structural concrete, RMC plants and bridge works.",
      specs: ["Sieve: 40 / 20 mm", "Flakiness: [spec]", "Strength (LA): [spec]"],
    },
    {
      name: "Mid Aggregate 20 – 10 mm",
      tag: "Concrete & blockwork",
      icon: "stones",
      body: "Standard mid-grade stone aggregate for general concrete, kerbs and block production.",
      specs: ["Sieve: 20 / 10 mm", "Crushing: [impact value]", "Stock: [yes]"],
    },
    {
      name: "Fine Crush 5 – 0 mm",
      tag: "Stone dust",
      icon: "dust",
      body: "Screened fine crush used in concrete mega-fines, non-structural fill and block mix.",
      specs: ["Sieve: 5 / 0 mm", "Fineness: [FM]", "Moisture: [max x%]"],
    },
    {
      name: "Road Base & Sub-base",
      tag: "Roads, highways & airfields",
      icon: "road",
      body: "Blended base course material placed under asphalt and concrete pavements.",
      specs: ["Layers: [base / sub-base]", "Grading: [spec]", "Loose / compacted: [x] t/m³"],
    },
    {
      name: "Rail Ballast",
      tag: "Railways",
      icon: "rail",
      body: "Dense, angular ballast stone supplied to [rail authority spec] for track works.",
      specs: ["Size: [x] mm", "Source: [quarry]", "Supply: [wagons / trucks]"],
    },
  ],
  materials: [
    {
      name: "[Material A — e.g. Granite]",
      tag: "Ignious rock",
      body: "Hard, dense rock crushed for high-strength concrete and rail ballast. [Confirm local quarry geology.]",
      uses: ["Structural concrete", "Rail ballast", "Bridge works"],
      image: "/images/crushers/agg-granite.svg",
    },
    {
      name: "[Material B — e.g. Limestone]",
      tag: "Sedimentary rock",
      body: "Softer sedimentary stone used for base courses, block production and lime-consuming industries.",
      uses: ["Road base", "Concrete masonry", "Cement industries"],
      image: "/images/crushers/agg-limestone.svg",
    },
    {
      name: "[Material C — e.g. Dolomite / Sandstone]",
      tag: "Secondary reserve",
      body: "Secondary reserve material being developed for mid-grade aggregate supply. [Status.]",
      uses: ["General fill", "Non-structural concrete", "TBC"],
      image: "/images/crushers/agg-granite.svg",
    },
  ],
  projects: [
    {
      title: "[Highway section X]",
      client: "[NHA / contractor name]",
      body: "Supply of crushed base and sub-base material over [duration] for a [length] km section.",
      tags: ["Roads", "Base course"],
      stat: { value: 120, suffix: "K MT", label: "Material supplied" },
    },
    {
      title: "[RMC batching plant — City]",
      client: "[RMC company name]",
      body: "Ongoing weekly supply of mid and coarse aggregate to an in-city batching plant.",
      tags: ["Concrete", "Recurring supply"],
      stat: { value: 40, suffix: "MT/wk", label: "Running supply" },
    },
    {
      title: "[Bridge / culvert works]",
      client: "[Contractor name]",
      body: "Coarse aggregate plus stone dust for substructure and deck concrete works.",
      tags: ["Structures", "Concrete"],
      stat: { value: 18, suffix: "K MT", label: "Material supplied" },
    },
    {
      title: "[Railway project — section]",
      client: "[Railways / EPC]",
      body: "Specified ballast stone supplies for track renewal works — [status].",
      tags: ["Rail", "Ballast"],
      stat: { value: 60, suffix: "K MT", label: "Ballast supplied" },
    },
  ],
  process: [
    { no: "01", title: "Blasting & extraction", body: "Rock is drilled and blasted in controlled rounds, then loaded by excavator into dumpers.", icon: "mountain" },
    { no: "02", title: "Primary crushing", body: "Feed rock is reduced in a jaw crusher to [x] mm before screening.", icon: "hammer" },
    { no: "03", title: "Screening & grading", body: "Vibrating screens split material into separate stone grades on [lines].", icon: "layers" },
    { no: "04", title: "Washing (on request)", body: "Washed grades are scrubbed and rinsed for concrete applications requiring low fines.", icon: "droplet" },
    { no: "05", title: "Stockpiling & dispatch", body: "Grades are stacked in dedicated bays, tested, weighed and loaded with delivery tickets.", icon: "yard" },
  ],
  facilities: [
    {
      title: "Quarry & faces",
      icon: "mountain",
      body: "Leased quarry areas with developed faces and licensed blasting operations — [region].",
      points: ["Lease area: [x] acres", "Faces: [x] active", "Blasting: [licence ref]"],
    },
    {
      title: "Crushing plant",
      icon: "hammer",
      body: "Jaw-and-cone circuit with [x] screening decks producing [x] simultaneous grades.",
      points: ["Capacity: [x] MT/hr", "Lines: [primary / secondary]", "Power: [grid / generator]"],
    },
    {
      title: "Screening & washing",
      icon: "layers",
      body: "Dedicated wash screens and dewatering for washed concrete aggregates.",
      points: ["Wash line: [x] MT/hr", "Water: [source]", "Fines handling: [pond / filter]"],
    },
    {
      title: "Loading & weighbridge",
      icon: "yard",
      body: "Volumetric loading bays, a calibrated weighbridge and ticket control on every load.",
      points: ["Weighbridge: [capacity]", "Loading: [wheel loaders]", "Tickets: [weighed / referred]"],
    },
    {
      title: "Quality lab",
      icon: "lab",
      body: "Sieve-analysis lab issuing grade certificates with every production lot.",
      points: ["Tests: [sieve / flakiness / LA]", "Frequency: [per shift]", "Records: [retained x yrs]"],
    },
  ],
};
