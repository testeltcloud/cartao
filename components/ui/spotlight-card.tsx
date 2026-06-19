"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card com "spotlight" que segue o cursor: um brilho radial (accent) acende
 * onde o mouse está. Atualiza CSS vars direto no DOM (sem re-render) — o
 * visual mora no CSS (.spotlight-glow). Acessível: o brilho é decorativo.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("spotlight-card group", className)}
    >
      <span className="spotlight-glow" aria-hidden />
      {children}
    </div>
  );
}
