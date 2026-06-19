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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIO = "IntersectionObserver" in window;

    const io = hasIO
      ? new IntersectionObserver(
          (entries, obs) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                obs.unobserve(entry.target);
              }
            }
          },
          { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
        )
      : null;

    const observeNode = (el: HTMLElement) => {
      if (reduce || !hasIO) {
        el.classList.add("is-in");
      } else if (!el.classList.contains("is-in") && io) {
        io.observe(el);
      }
    };

    const scanAndObserve = (root: HTMLElement | Document = document) => {
      const els = root.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]");
      els.forEach(observeNode);
      // If the root itself is a target
      if (root instanceof HTMLElement && (root.hasAttribute("data-reveal") || root.hasAttribute("data-stagger"))) {
        observeNode(root);
      }
    };

    // Initial scan
    scanAndObserve();

    // Watch for new elements added to the DOM
    const mo = new MutationObserver((mutations) => {
      let shouldScan = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldScan = true;
          break;
        }
      }
      if (shouldScan) scanAndObserve();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (io) io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
