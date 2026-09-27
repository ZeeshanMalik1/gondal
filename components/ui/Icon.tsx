import type { ComponentType, SVGProps } from "react";
import {
  ArrowRight,
  ArrowUp,
  Boxes,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Droplet,
  Droplets,
  Factory,
  Fish,
  FishSymbol,
  FishingRod,
  FlaskConical,
  Gauge,
  Gem,
  Hammer,
  Hexagon,
  Layers,
  Leaf,
  Link2,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Package,
  Phone,
  Plus,
  Route,
  ShieldCheck,
  Ship,
  Snowflake,
  TrainTrack,
  TreePine,
  Truck,
  Users,
  Utensils,
  Warehouse,
  Waves,
  Wind,
  X,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/cn";

/**
 * Central icon registry.
 *
 * Every icon is a real, tree-shakeable component: lucide-react for UI glyphs and
 * react-icons for brand marks (lucide ships no brand logos). The registry is
 * `as const`, so `IconName` is a closed union — a typo in an icon name is a
 * compile error instead of a silently blank spot on the page.
 *
 * Sizes default to `size` (rendered as the SVG width/height presentation
 * attributes) rather than a default utility class. Presentation attributes lose
 * to any CSS class, so a caller's `h-4 w-4` reliably wins — with a default
 * `h-5 w-5` class both utilities would land on the element and the winner would
 * depend on Tailwind's source order instead of the call.
 */

const DEFAULT_SIZE = 20;

type GlyphProps = SVGProps<SVGSVGElement> & {
  /** Supported by both lucide-react and react-icons. */
  size?: string | number;
};

const ICONS = {
  // ---- contact ------------------------------------------------------------
  phone: Phone,
  mail: Mail,
  pin: MapPin,
  clock: Clock,
  whatsapp: FaWhatsapp,
  // ---- values -------------------------------------------------------------
  shield: ShieldCheck,
  gem: Gem,
  tree: TreePine,
  people: Users,
  layers: Layers,
  factory: Factory,
  truck: Truck,
  // ---- nature / fish ------------------------------------------------------
  tint: Droplets,
  drop: Droplet,
  leaf: Leaf,
  snow: Snowflake,
  knife: Utensils,
  box: Package,
  net: FishingRod,
  lab: FlaskConical,
  // ---- minerals / salt ----------------------------------------------------
  crystal: Hexagon,
  mountain: Mountain,
  hammer: Hammer,
  ship: Ship,
  droplet: Droplet,
  // ---- construction -------------------------------------------------------
  road: Route,
  rail: TrainTrack,
  yard: Warehouse,
  stones: Boxes,
  dust: Wind,
  gauge: Gauge,
  // ---- corporate / misc ----------------------------------------------------
  wave: Waves,
  trace: Link2,
  fish: Fish,
  fish1: Fish,
  fish2: FishSymbol,
  fish3: Fish,
  fish4: FishSymbol,
  // ---- navigation / states ------------------------------------------------
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  check: Check,
  plus: Plus,
  close: X,
  menu: Menu,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  // ---- social (brand marks) ------------------------------------------------
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
} as const satisfies Record<string, ComponentType<GlyphProps>>;

export type IconName = keyof typeof ICONS;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Remove to let the icon be read by assistive tech. */
  label?: string;
  /** Pixel size used only when the caller supplies no `h-*`/`w-*` class. */
  size?: number;
}

export function Icon({ name, label, className, size = DEFAULT_SIZE, ...rest }: IconProps) {
  const Glyph = ICONS[name];

  return (
    <Glyph
      size={size}
      className={cn("shrink-0", className)}
      aria-hidden={label ? undefined : true}
      focusable="false"
      role={label ? "img" : undefined}
      aria-label={label}
      {...rest}
    />
  );
}
