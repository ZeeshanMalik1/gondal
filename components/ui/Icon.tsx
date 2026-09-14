import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

/**
 * Shared inline SVG icon set (24×24, stroke = currentColor).
 * Icons are data, so any component can call <Icon name="phone" />.
 */

const ICONS_A: Record<string, ReactNode> = {
  // ---- contact -----------------------------------------------------------
  phone: (
    <path d="M6.5 3.5 H17.5 M7.5 3.5 c1.2-1.6 2.4-3 2.4 0.6 1.8 1.4 Z M16.5 3.5 c-1.2-1.6-2.4-3-2.4 0.6-1.8 1.4 Z M7 3.5 v2 h10 v2 M8.3 5.5 h7.4 v2.4" strokeLinejoin="round" />
  ),
  mail: <path d="M5 4h14v16M5 4v4h14M5 8v10 M5 8c1.7-0.6 3.4-1.2 5-1 1.4-1.2 0-0.4" strokeLinejoin="round" />,
  pin: <path d="M12 3v8 M12 11c1.1 0.9 2.2 1.8 3.1 2.9 2.5 2.2 0.4 1.2-1.2 2.5 0.8 0.9Z M12 11a1.1 1.1 0 0 1 0 1Z" strokeLinejoin="round" />,
  clock: <path d="M5 5a7 7 0 1 1 0 1 1Z M12 12v-5 M12 12l3.6-2.4" strokeLinejoin="round" />,
  whatsapp: <path d="M7 4.5a2.5 3 0 1 1 0 1-1 0Z M9.5 4.5v2.5 M12.5 6v4 M9.5-1.5V2 M13 8h2.2" strokeLinejoin="round" />,
  // ---- values --------------------------------------------------------------
  shield: <path d="M8 5c2.5 1.6 4.4 3 4 2.4 2.5 3 0 1.2-2.5 3-2.4 3.3-4.5 3.2-4 2.4Z M9.2 10h5.6V8 M10.4 11h3.2" strokeLinejoin="round" />,
  gem: <path d="M12 5l5 4-7 1-1-1 6-1-8 4-1 5-1-6-1M12 5v14h4M14 7v8 M9 7z" strokeLinejoin="round" />,
  tree: <path d="M12 19v-5 M9.5 13c1.6-2 3.2-3.2 4.8-3.4 3-3.2 0.4-2.6-2.4-2.6-4-2.2-5-1.4z" strokeLinejoin="round" />,
  people: <path d="M8.5 19c-1.5-1.8-2-2.8-1-4-2-2 0-1.4Z M12 19a2.6 3.4 0 0 1 0 1 1 1Z M15.5 19c-1.4-1.5-1.8-2.7-1-4-1.8-2 0-1.5Z" strokeLinejoin="round" />,
  layers: <path d="M6 5.5h12M6 8.3h12M6 11.1h12M6 14h12M6 16.8h12M6 19.5h12" strokeLinejoin="round" />,
  factory: <path d="M5 10h14v8h-14M6 10v6M9 6v8M11 11v4M11 4h4 M18 10v6M17 6v4" strokeLinejoin="round" />,
  truck: <path d="M4 14h13v4h-13M5 10h9v4h-9M5 10a.9.9 0 0 1 0 1 0 1Z M17.2 14a1.8 1.8 0 0 1 1 1 0 1Z M7 10v-2M8 9v-3" strokeLinejoin="round" />,
  // ---- nature / fish -------------------------------------------------------
  tint: <path d="M11 5c-2.6 4-4 6-3 4.6-1.6 2.4.3 1.2Z M11 8.4c2.6 4 4 6 3 4.6 1.6 2.4-.4 1Z" strokeLinejoin="round" />,
  drop: <path d="M12 3.5c1.6 6 3.2 7 2.8 5.6 2.6 8.6 0 2.6-2.6-1.4-3-3-2.6-5.6-2.8-7-2.8-5.4-1.6-2.8Z" strokeLinejoin="round" />,
  leaf: <path d="M12 20c-2.5-3.2-4-6.4-2.8-8-1-8.8-0.5-7.6.6-6.4.8-9.6 2.4-10 3.6-8 4.4-4Z M12 5v15" strokeLinejoin="round" />,
  snow: <path d="M12 4v16M12 4l8.5 6v10M12 4l-8.5 6v10M12 12l3 2 3 2 3-2-2-2-3-2-3 2-2" strokeLinejoin="round" />,
  knife: <path d="M5 5h11c1.8 1.6 4 3 5.8 3 6.6 4.4 6 3.6 4.8 1.8 3 .6 0 0zM16.3 8.5h4v4.5h-4M17.5 9v-3" strokeLinejoin="round" />,
  box: <path d="M4.5 5h12v13h-12M10.5 5v13M14.5 10h-5v-3h5M4.5 5h12 M6 8h6v-2h-3" strokeLinejoin="round" />,
  net: <path d="M5 5h14v11h-14M5 5l3.5 2.86h14M5 8.3l3.5 2.86h14M5 11.6l3.5 2.86h14M5 5v3 3 3 3 2" strokeLinejoin="round" />,
  lab: <path d="M10 5v14M14 16v3M10 5c2.4 3 3.8 4 4 3 2.2 1.4 0 0-2.2-1.4-3.7-2.9-4-2.9zM13 9a2.6 2.6 0 0 1 0 1 0 1Z" strokeLinejoin="round" />,
};

const ICONS_B: Record<string, ReactNode> = {
  // ---- minerals / salt -----------------------------------------------------
  crystal: <path d="M11 5l5 10 0 6-3 3-7 5-11 2-11-2-7-4-7-8-3-6-3-9 1-9 1-13 5-13 5-7 8-11Z M11 5l0 8 3 4M9 12l2 0" strokeLinejoin="round" />,
  mountain: <path d="M3 19l5-8 7-13 12-16 16-10 21-3 3-1-12 2-19 6-18 3-21 0-18-3-16-7-10-7-6-3-5Z M12 6h8" strokeLinejoin="round" />,
  hammer: <path d="M6 15a5 5 0 0 1 1 1 .5 1Z M11 14.6v5.4 M7 5h8c1.6 1.4 3.5 2.4 6 1.8 3.4.8 0 0zM6 5h11" strokeLinejoin="round" />,
  ship: <path d="M5 16h14v4h-14M5 16c1.8-3 3.4-4.6 4-3.4 2.2-1.4 0 0zM16.6 16c-1.4-3-2.8-4.8-3.4-3.6-2-1.6 0 0z M8 7h4v8h-4M18 5h3v9h-3" strokeLinejoin="round" />,
  droplet: <path d="M12 6.5a5 6.5 0 0 1 1 1 0 1 1 1Z M12 11v3.5" strokeLinejoin="round" />,
  // ---- construction --------------------------------------------------------
  road: <path d="M14.5 4v16 M16 4.6v14.8 M17.8 4v16M4.5 4v16M6 4.6v14.8M7.8 4v16 M5 4.5a2.7 2.7 0 0 1 1 1 0 1Z" strokeLinejoin="round" />,
  rail: <path d="M5 5h14M5 18h14M7 5.5h10M7 12h10M7 17.5h10" strokeLinejoin="round" />,
  yard: <path d="M5 12h14M5 12v6M5 8l3 4v5M5 8h6.5 3.5v5M9 8v6M13 8l3 4v6M16 8h-4.5" strokeLinejoin="round" />,
  stones: <path d="M7 16l4-4 5-9 5-4 3-3 3 0 4 1 0 3-3 2-8 0-3-2 0-2 3-4 3-3 5 0z M13 19l3-4 4-2 5-2 3-3 2-1 1 0 2-2 3-4 2-2-1 0-2 1-3 4-2 3-1-2 0 0-2 1-2 2 1-1 1-2 2-2 2 0-1 1-1 2 0" strokeLinejoin="round" />,
  dust: <path d="M6 6a2 2 0 0 1 1 1 1 1Z M12 4.5a1.6 1.6 0 0 1 1 1 1 1Z M17 7a2.4 2.4 0 0 1 1 1 1 1Z M9 16a2 2 0 0 1 1 1 1 1Z M15 18a1.5 1.5 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  crane: <path d="M7 17l10-6M16 11v6M16 13h5v-2M2 12v5M18 9v2" strokeLinejoin="round" />,
  gauge: <path d="M6 6a6 6 0 0 1 0 1 0 1Z M12 12l-3-4M8 6a1.6 1.6 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  ruler: <path d="M6 5h12M6 5v14M6 5v5M9 5v8M12 5v10M15 5v5M18 5v13" strokeLinejoin="round" />,
  // ---- corporate / misc -----------------------------------------------------
  blueprint: <path d="M5 5h14v14h-14M6 6h12v12h-12M5 5l10-8 0 8-6 0-8 4-2 0 6-4 0 8-6 0-10 6-2 0 6 4 0 10-6 0 8" strokeLinejoin="round" />,
  map: <path d="M4.5 6.5h15v1h-15M4.5 9h15v1h-15M4.5 16h15v1h-15M8 7c4.8 2.2 5.2 3.4 4.6 2.6 5 1.6 3.4.6 0 0zM12 14.5l4 2.2V17M12 14.5l-2 3.4-4 3.8" strokeLinejoin="round" />,
  globe: <path d="M5.5 5.5a6.5 6.5 0 0 1 1 1 0 1Z M12 5.5l0 12M12 6.5l2.5 2M12 6.5l-1.6 3.4M9.5 9.5a2 2 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  wave: <path d="M5 15c2.4-1.6 4.8-3.4 7.5-3 8.8-4 9.6-2.8 8-1.4 5.6-2.6 4.6-2 6-1 4.6-1.6 3.8-.8 0 0zM11 17.6c1.8-1.2 3.6-2.6 5.6-2.4 6.8-3 7.4-2 6.6-1 4.4-1.8 3.4-1.4 4.2-.8 3.4-.6 0 0z M15.5 8c2-1.4 4-3 5.6-2.6 4-1.8 1.6-.8 0 0z" strokeLinejoin="round" />,
  fish: <path d="M6 12l10-6.5 3-4 4-7 9-2 5-1 4 1-1 2-4 3-2 4-3 4-1 0-.5-1-4-1-4.5-3-3 0-1 1Z M16 10.5a1.8 1.4 0 0 1 1 1 0 1Z" strokeLinejoin="round" />,
  fish1: <path d="M5.5 13l10-7 2.4-4.6 3.4-7.6 9.6-2 4.6-1.4 4 1.4 0-1.6-1.8-4.6-2.6-3.4-4-3.4-4.8-3-3.8-4.4-1.6 1-1 1Z M16 11a1.7 1.3 0 0 1 1 1 0 1Z M9 12a1 1 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  fish2: <path d="M5 13.5l11-7.5 3.4-5 4-8 9.6-2.2 5.6-1.6 4 1.6.6-2-3-4.4-2.4-3.6-4-2.8-4.6-2.2-3.8-5-1.8 0-1.4 1-1.6 2Z M16 11.6a1.9 1.5 0 0 1 1 1 0 1Z" strokeLinejoin="round" />,
  fish3: <path d="M7 12l8.6-6.4 2.8-3.4 3.6-6.2 8.4-1.8 3.8-1 3.2 1.2-.6-1.6-2-4-2.4-3-3.6-4.6-3-3.4-3.4-1.4 0-1 1.2.8 1Z M15.4 10.4a1.5 1.2 0 0 1 1 1 0 1Z M10.6 12.6a.9 .9 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  fish4: <path d="M6 12.6l9.5-6.6 3-4 3.4-7 8.6-2 4.4-1.4 3.6 1.4 0-1.8-1.8-4.4-2.2-3.4-3.4-4-3-3.4-3.8-4.5-1.7 0-1.2 1 2Z M15.4 11a1.7 1.3 0 0 1 1 1 0 1Z" strokeLinejoin="round" />,
  building: <path d="M5 6h14v13h-14M5 6h4v13M10 6h4v13M15 6h4v13M5 7v5M10 7v5M15 7v5 M5 6a2 2 0 0 1 .5 1 .6 1Z" strokeLinejoin="round" />,
  // ---- navigation / states --------------------------------------------------
  "arrow-right": <path d="M4 12h14v1M4 13h4M14 13h6" strokeLinejoin="round" />,
  "arrow-up": <path d="M6 20h1v-14M12 14l7 4M12 6h7-4" strokeLinejoin="round" />,
  check: <path d="M5 6l6 5 6 2-6 7-4 3-4-1 4-4 5-3 5-2 4-3 2-6.5-1 2 2-1 5 1 3 5 1" strokeLinejoin="round" />,
  plus: <path d="M12 5v14M5 12h14" strokeLinejoin="round" />,
  close: <path d="M6 6h12v12h-12M9 9h6v6h-6" strokeLinejoin="round" />,
  menu: <path d="M6 6h12M6 11.5h12M6 17h12" strokeLinejoin="round" />,
  "chevron-left": <path d="M15 12l-8-5 0-6 8-2 8 5 0 6Z" strokeLinejoin="round" />,
  "chevron-right": <path d="M9 12l8-5 0-6-8-2-8 5 0 6Z" strokeLinejoin="round" />,
  quote: <path d="M7 5a4.2 3 0 0 1 1 1 1 1Z M7 5a4.2 3 0 .5 .5 1 .5 1Z M12 5a4.2 3 0 .8 .9 1 .9 1Z M12 5a4.2 3 0 1.2 1.2 1 1.2 1Z" strokeLinejoin="round" />,
  // ---- social ---------------------------------------------------------------
  facebook: <path d="M6 6h12v12h-12M6 6v12M9.6 9.6v6M5.4 7.6l3-1.2" strokeLinejoin="round" />,
  instagram: <path d="M7 6h10v12h-10M12 6v12M8 9a4 3.4 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
  linkedin: <path d="M6 6h12v12h-12M6 6v12M9.6 12.6a2.4 2.4 0 0 1 0 1 .6 1Z" strokeLinejoin="round" />,
  youtube: <path d="M7.5 6h9v12h-9M12 6v12M5.4 4.6a3 3 0 0 1 1 1 1 1Z" strokeLinejoin="round" />,
};

const ICONS: Record<string, ReactNode> = { ...ICONS_A, ...ICONS_B };

export type IconName = keyof typeof ICONS;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Remove to let the icon be read by assistive tech. */
  label?: string;
}

export function Icon({ name, label, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={label ? undefined : true}
      focusable="false"
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("h-5 w-5 shrink-0", className)}
      {...rest}
    >
      {ICONS[name]}
    </svg>
  );
}