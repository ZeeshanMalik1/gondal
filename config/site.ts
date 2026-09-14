/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  GONDAL GROUP — CORPORATE / GROUP-WIDE CONFIGURATION
 *
 *  Drives the main landing page (/), corporate header/footer, SEO metadata,
 *  the sitemap and the "our businesses" panels.
 *
 *  All names, figures, addresses and contact details below are PLACEHOLDERS.
 *  Replace the […]-wrapped values before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface CorporateStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface CorporateLocation {
  city: string;
  province: string;
  role: string;
  line: string;
}

export interface CorporateSite {
  slug: string;
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  est: string;
  hero: {
    eyebrow: string;
    headline: [string, string?];
    support: string;
    note: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  manifesto: {
    eyebrow: string;
    headline: string;
    body: string;
    bodySecondary: string;
    quote: string;
  };
  history: { period: string; title: string; body: string }[];
  values: { title: string; body: string; icon: string }[];
  whyUs: { index: string; title: string; body: string; icon: string }[];
  stats: CorporateStat[];
  locations: CorporateLocation[];
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    hours: string;
  };
  socials: { label: string; url: string }[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    themeColor: string;
    ogImage: string;
  };
  placeholderNote: string;
}

export const site: CorporateSite = {
  slug: "",
  name: "Gondal Group",
  shortName: "Gondal",
  legalName: "Gondal Group of Companies",
  tagline: "A diversified Pakistani business group",
  est: "[Est. Year]",
  hero: {
    eyebrow: "Gondal Group of Companies",
    headline: ["Building businesses", "that build Pakistan."],
    support:
      "A Pakistani business group running independent companies across aquaculture, minerals and construction — quietly turning the country’s natural resources into industries that last generations.",
    note: "[Est. Year] · Pakistan",
    ctaPrimary: { label: "Explore our businesses", href: "#businesses" },
    ctaSecondary: { label: "Contact the group", href: "#contact" },
  },
  manifesto: {
    eyebrow: "Who we are",
    headline: "One family of companies. Four independent industries.",
    body: "The group was founded in [City], Pakistan in [Est. Year]. What began as a single trading family has grown into a group that owns and operates businesses in aquaculture, salt mining, stone crushing and new ventures — each run as its own company, with its own brand and its own people, under one standard of honest, long-term business.",
    bodySecondary:
      "We do not chase fashions. We build things that have to work: farms that feed, minerals that move, stone that holds roads and buildings together. Every business is designed to stand on its own — and to fit a portfolio that grows together.",
    quote:
      "A business is built the same way a road is: one honest kilometre at a time.",
  },
  history: [
    {
      period: "[Est. Year]",
      title: "The group is founded",
      body: "Founded in [City] as a family trading concern, built on personal relationships and a reputation for fair dealing.",
    },
    {
      period: "[Year + 1]",
      title: "First industrial foothold",
      body: "The group invested in its first processing operation, moving from trade into production and manufacturing.",
    },
    {
      period: "[Year + 2]",
      title: "Freshwater aquaculture begins",
      body: "Natural water bodies were developed into managed fish farms, supplying nearby cities through a short supply chain.",
    },
    {
      period: "[Year + 3]",
      title: "Minerals & crushing operations",
      body: "Salt works and stone crushing plants added heavy-industry capacity, serving food, agriculture and construction sectors.",
    },
    {
      period: "Today",
      title: "Four businesses, one standard",
      body: "A group of independent companies — each a complete business in its own right — sharing capital, standards and a name people trust.",
    },
  ],
  values: [
    {
      title: "Integrity",
      body: "We keep our word to customers, workers and partners — the oldest asset a Pakistani business can own.",
      icon: "shield",
    },
    {
      title: "Quality",
      body: "Every operation is built around standards that survive inspection, testing and time.",
      icon: "gem",
    },
    {
      title: "Reliability",
      body: "Supply that arrives, grades that stay consistent, and commitments that hold.",
      icon: "clock",
    },
    {
      title: "Long-term thinking",
      body: "We build companies meant to outlast their founders — not to flip at the first bid.",
      icon: "tree",
    },
    {
      title: "Community",
      body: "Our businesses employ and buy from the regions they operate in, and take care of those communities as our own.",
      icon: "people",
    },
  ],
  whyUs: [
    {
      index: "01",
      title: "Proven experience",
      body: "Decades of operating businesses across production, farming and heavy industry — with the scars to show for it.",
      icon: "layers",
    },
    {
      index: "02",
      title: "Quality as a default",
      body: "From fish to minerals to aggregate, every product leaves under a standard we are willing to be measured by.",
      icon: "gem",
    },
    {
      index: "03",
      title: "Reliability of supply",
      body: "Consistent volume, consistent grade, consistent delivery — the basis of every long customer relationship we keep.",
      icon: "clock",
    },
    {
      index: "04",
      title: "Local expertise",
      body: "We know the terrain, the markets and the people of Pakistan’s industrial regions from decades of working in them.",
      icon: "pin",
    },
    {
      index: "05",
      title: "Production capacity",
      body: "Integrated farms, plants and yards give customers a single accountable source rather than a chain of middlemen.",
      icon: "factory",
    },
  ],
  stats: [
    { value: 38, suffix: "+", label: "Years of building" },
    { value: 4, prefix: "0", label: "Operating businesses" },
    { value: 850, suffix: "+", label: "People employed" },
    { value: 240, suffix: "K MT", label: "Annual production" },
  ],
  locations: [
    {
      city: "[City A]",
      province: "[Province]",
      role: "Group head office",
      line: "Registered office and central management for all group companies.",
    },
    {
      city: "[City B]",
      province: "[Province]",
      role: "Fish farms",
      line: "Freshwater farm sites, hatchery and cold-chain dispatch.",
    },
    {
      city: "[City C]",
      province: "[Province]",
      role: "Salt works",
      line: "Rock salt mining, processing and export packing operations.",
    },
    {
      city: "[City D]",
      province: "[Province]",
      role: "Crushing works",
      line: "Quarry leases, stone crushing plants and aggregate dispatch yards.",
    },
  ],
  contact: {
    phone: "+92 300 [Phone Number]",
    email: "info@gondalgroup.example.com",
    address: "[Head Office Address], [City], Pakistan",
    whatsapp: "+92 300 [Phone Number]",
    hours: "Monday – Saturday, 9:00 – 18:00 (PKT)",
  },
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/company/gondalgroup" },
    { label: "Facebook", url: "https://facebook.com/gondalgroup" },
    { label: "Instagram", url: "https://instagram.com/gondalgroup" },
  ],
  metadata: {
    title: "Gondal Group of Companies — Building Businesses That Build Pakistan",
    description:
      "A diversified Pakistani business group operating independent companies in aquaculture, salt mining, stone crushing and new ventures — building industries that last.",
    keywords: [
      "Gondal Group",
      "Pakistani business group",
      "aquaculture Pakistan",
      "salt mining Pakistan",
      "stone crushing",
      "construction aggregates",
    ],
    themeColor: "#1D2A3A",
    ogImage: "/images/corporate/og.svg",
  },
  placeholderNote:
    "All group names, figures, addresses and contact details on this page are placeholders. Replace them in config/site.ts before going live.",
};