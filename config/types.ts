/**
 * Shared configuration types for the Gondal Group platform.
 *
 * All business information (names, contact, navigation, copy, colors) is
 * configured centrally under /config. Components read from these objects —
 * never hard-code business details inside components.
 */

import type { IconName } from "@/components/ui/Icon";

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  /** Display phone, e.g. "+92 300 0000000" */
  phone: string;
  phoneLabel?: string;
  email: string;
  /** Full street / site address */
  address: string;
  /** WhatsApp number in international format, if any */
  whatsapp?: string;
  /** Office hours text */
  hours: string;
  /** City used for metadata / location blocks */
  city: string;
  country?: string;
}

export interface SocialMap {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  whatsapp?: string;
}

/** Design tokens — applied as CSS custom properties on each business layout. */
export interface BrandColors {
  /** Primary brand color (buttons, links, accents). */
  primary: string;
  /** Darkened brand color (hover states, dark fills). */
  primaryDeep: string;
  /** Secondary accent color, used sparingly. */
  accent: string;
  /** Light tinted wash (soft section backgrounds). */
  soft: string;
  /** Very light tint (hairline fills). */
  faint: string;
  /** Main light page background. */
  surface: string;
  /** Dark section background. */
  surfaceDark: string;
  /** Card / paper background. */
  paper: string;
  /** Heading text color. */
  ink: string;
  /** Body text color. */
  muted: string;
  /** Hairline border color. */
  line: string;
  /** Text color rendered on `primary`. */
  onBrand: string;
  /** Border radius for shared buttons, e.g. "9999px" (fish) or "0" (crushers). */
  btnRadius: string;
  /** Border radius for cards and chips; defaults to the button radius. */
  cardRadius?: string;
  /** Base gap for card grids, e.g. "1.25rem". Defaults to 1.25rem. */
  gridGap?: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface PageRoute {
  href: string;
  label: string;
  /** SEO overrides for the page (defaults to business metadata). */
  title?: string;
  description?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}

export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  /** Browser tab / theme color. */
  themeColor: string;
  /** Site-relative OG image path. */
  ogImage: string;
  locale?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface BusinessImages {
  /** Card image used on the corporate homepage and cross links. */
  card: string;
  /** Hero art used at the top of the business home page. */
  hero: string;
  /** Optional about / intro image. */
  about?: string;
  gallery: GalleryItem[];
}

/**
 * Structured content blocks used by business pages. All fields are optional —
 * a business simply leaves out the blocks it does not use (e.g. a "projects"
 * section currently used by crushers and fourth).
 */

export interface SpeciesItem {
  name: string;
  latin: string;
  icon: IconName;
  body: string;
  details: string[];
}

export interface ProductItem {
  name: string;
  tag: string;
  icon: IconName;
  body: string;
  specs: string[];
}

export interface ProcessStep {
  no: string;
  title: string;
  body: string;
  icon: IconName;
}

export interface FacilityItem {
  title: string;
  icon: IconName;
  body: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  client: string;
  body: string;
  tags: string[];
  stat?: { value: number; suffix: string; label: string };
}

export interface MaterialItem {
  name: string;
  tag: string;
  body: string;
  uses: string[];
  image: string;
}

export interface BusinessConfig {
  slug: string;
  name: string;
  shortName: string;
  legalName?: string;
  industry: string;
  /** Short uppercase industry tag for eyebrows. */
  industryTag: string;
  tagline: string;
  /** 1–2 sentence summary for cards and SEO. */
  summary: string;
  est?: string;
  colors: BrandColors;
  /** Display font family name (loaded by each business layout via @fontsource). */
  displayFont: string;
  /** Layouts with `upper` set data-display-case on their wrapper, which renders
   *  headings in caps — for Roman titling faces, which read best that way. */
  displayCase?: "upper" | "none";
  hero: {
    eyebrow: string;
    /** Headline lines; the optional second line is styled as accent text. */
    headline: [string, string?];
    support: string;
    image: string;
    note?: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    bodySecondary?: string;
    image?: string;
    points: { title: string; body: string; icon: IconName }[];
  };
  stats: StatItem[];
  /** Main navigation (order matters). */
  navigation: NavLink[];
  /** Every route of the business; also drives the sitemap. */
  pages: PageRoute[];
  contact: ContactInfo;
  socials: SocialMap;
  metadata: MetaData;
  images: BusinessImages;
  /** True while demo/placeholder copy is used. */
  placeholder: boolean;
  /** Shown as a visible note whenever `placeholder` is true. */
  placeholderNote: string;

  /* ---- Optional structured content blocks -------------------------------- */
  species?: SpeciesItem[];
  products?: ProductItem[];
  process?: ProcessStep[];
  facilities?: FacilityItem[];
  projects?: ProjectItem[];
  materials?: MaterialItem[];
}