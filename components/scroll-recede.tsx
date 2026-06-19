"use client";

import { useEffect, useRef } from "react";

/**
 * Liga o progresso do scroll a uma CSS var `--p` (0 → 1 ao longo de ~85vh).
 * O efeito visual vive no CSS (.hero-recede) — aqui só atualizamos um número,
 * com requestAnimationFrame e listener passivo. Respeita prefers-reduced-motion
 * (não anima; deixa --p em 0).
 */
export function ScrollRecede({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const span = window.innerHeight * 0.85;
      const p = Math.min(Math.max(window.scrollY / span, 0), 1);
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
