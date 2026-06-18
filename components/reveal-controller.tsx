"use client";

import { useEffect } from "react";

/**
 * Um único IntersectionObserver para TODOS os elementos de reveal da página.
 * Substitui dezenas de componentes client por uma só peça — reduz JS e o
 * tempo de bloqueio da thread principal (TBT). Não renderiza nada.
 */
export function RevealController() {
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

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
