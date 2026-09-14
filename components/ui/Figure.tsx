import Image from "next/image";
import { cn } from "@/lib/cn";

export interface FigureProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  /** Load eagerly when above the fold. */
  priority?: boolean;
}

/**
 * Wrapper around next/image that fills its parent responsibly.
 * Local SVG placeholders are rendered via next/image too (marked unoptimized).
 */
export function Figure({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
}: FigureProps) {
  const isSvg = src.endsWith(".svg");
  return (
    <figure className={cn("relative overflow-hidden", className)}>
      {isSvg ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes={sizes ?? "(min-width: 1024px) 66vw, 100vw"}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 66vw, 100vw"}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </figure>
  );
}