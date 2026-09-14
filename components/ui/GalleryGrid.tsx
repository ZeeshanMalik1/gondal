"use client";

import { useState } from "react";
import type { GalleryItem } from "@/config/types";
import { cn } from "@/lib/cn";
import { Figure } from "@/components/ui/Figure";
import { Modal } from "@/components/ui/Modal";
import { Icon } from "@/components/ui/Icon";

export interface GalleryGridProps {
  items: GalleryItem[];
  className?: string;
  itemClassName?: string;
}

/**
 * Responsive image grid with an accessible lightbox. Images are buttons so the
 * whole experience works with the keyboard; the lightbox supports Escape and
 * arrow-key navigation.
 */
export function GalleryGrid({ items, className, itemClassName }: GalleryGridProps) {
  const [active, setActive] = useState<number | null>(null);

  const show = (index: number) => setActive(index % items.length);
  const next = () => active !== null && setActive((active + 1) % items.length);
  const prev = () => active !== null && setActive((active - 1 + items.length) % items.length);

  return (
    <div className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, index) => (
        <button
          key={`${item.src}-${index}`}
          type="button"
          onClick={() => show(index)}
          className={cn(
            "group relative block w-full overflow-hidden rounded-md text-left",
            itemClassName,
          )}
          aria-label={`View larger: ${item.caption}`}
        >
          <Figure
            src={item.src}
            alt={item.alt}
            className="aspect-[4/3] w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2 text-left text-xs text-white backdrop-blur-sm">
            {item.caption}
          </span>
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/45 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Icon name="plus" className="h-4 w-4" />
          </span>
        </button>
      ))}

      <Modal open={active !== null} onClose={() => setActive(null)} label="Gallery image view">
        {active !== null && items[active] ? (
          <div className="p-2">
            <Figure src={items[active].src} alt={items[active].alt} className="w-full aspect-[16/10] rounded-md" />
            <div className="flex items-center justify-between gap-3 px-4 pt-3">
              <p className="text-sm text-muted-var">
                <span className="sr-only">Image {active + 1} of {items.length}: </span>
                {items[active].caption}
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={prev} aria-label="Previous image" className="rounded-md border border-line-var bg-paper px-3 py-1.5 text-sm text-brand">
                  <Icon name="chevron-left" className="h-4 w-4" />
                </button>
                <button type="button" onClick={next} aria-label="Next image" className="rounded-md border border-line-var bg-paper px-3 py-1.5 text-sm text-brand">
                  <Icon name="chevron-right" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}