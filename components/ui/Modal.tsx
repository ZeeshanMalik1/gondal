"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the dialog. */
  label: string;
  children: ReactNode;
}

/**
 * Lightweight, accessible modal dialog. Closes on Escape or backdrop click;
 * locks body scroll while open and returns focus when closed by the caller.
 */
export function Modal({ open, onClose, label, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-paper outline-none"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
              aria-label="Close image view"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}