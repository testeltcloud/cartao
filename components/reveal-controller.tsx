"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Um único IntersectionObserver para TODOS os elementos de reveal da página.
 * Re-observa a cada mudança de rota (dependência em `pathname`), porque na
 * navegação SPA o layout não re-monta — sem isso, o conteúdo da nova página
 * ficaria escondido (opacity:0) até um refresh manual.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-stagger]"
    );
    if (els.length === 0) return;

    // Sem suporte a IO (ou movimento reduzido) → mostra tudo imediatamente.
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            obs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
    );

    els.forEach((el) => {
      // Já revelado em navegação anterior? ignora.
      if (!el.classList.contains("is-in")) io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
