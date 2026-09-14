import type { SpeciesItem } from "@/config/types";
import { Icon } from "@/components/ui/Icon";

export interface SpeciesCardProps {
  item: SpeciesItem;
  index: number;
  className?: string;
}

/** Single fish species card — illustration icon, name, notes. */
export function SpeciesCard({ item, index, className }: SpeciesCardProps) {
  return (
    <article className={className}>
      <div className="grid h-40 place-items-center rounded-2xl border border-line-var bg-gradient-to-b from-brand-faint to-brand-soft">
        <Icon name={item.icon} label={item.name} className="h-24 w-24 text-brand" />
      </div>
      <div className="mt-5">
        <p className="text-xs uppercase tracking-[0.16em] text-muted-var">
          Species {String(index + 1).padStart(2, "0")} · {item.latin}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{item.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-var">{item.body}</p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {item.details.map((detail) => (
          <li key={detail} className="inline-flex items-center gap-1.5 rounded-full border border-line-var bg-brand-faint px-2.5 py-1 text-xs text-muted-var">
            <Icon name="check" className="h-3 w-3 text-brand" />
            {detail}
          </li>
        ))}
      </ul>
    </article>
  );
}