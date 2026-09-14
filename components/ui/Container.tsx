import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Use a wider measure (full-bleed sections). */
  wide?: boolean;
}

export function Container({ children, className, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        wide ? "max-w-[1600px]" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}