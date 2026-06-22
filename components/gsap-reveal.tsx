"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Reveal ligado ao scroll com GSAP ScrollTrigger (scrub): o elemento sobe,
 * escala e aparece conforme entra na viewport — sincronizado com o scroll.
 * `useGSAP` faz o cleanup automático (reverte tudo) ao desmontar.
 * Respeita prefers-reduced-motion via gsap.matchMedia.
 */
export function GsapReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          opacity: 0,
          y: 80,
          scale: 0.94,
          transformOrigin: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            end: "top 42%",
            scrub: 0.6,
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
