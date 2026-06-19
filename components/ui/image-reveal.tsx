"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Mídia com carregamento profissional: skeleton shimmer enquanto carrega e
 * "blur-up" (fade + desfoque + leve zoom) quando a imagem termina de carregar.
 * Mantém o layout estável via aspect-ratio (sem layout shift).
 */
export function ImageReveal({
  src,
  alt,
  ratio = "16/9",
  zoom = 1,
  objectPosition,
  objectFit = "cover",
  bare = false,
  className,
}: {
  src: string;
  alt: string;
  ratio?: string;
  /** Crop/aproximação da arte (1 = sem zoom). Útil quando a imagem tem margem vazia. */
  zoom?: number;
  objectPosition?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Sem moldura (borda/fundo/sombra) — a imagem aparece "solta". */
  bare?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Caso a imagem já esteja em cache antes da hidratação, onLoad não dispara.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden",
        !bare && "rounded-2xl border border-line bg-surface shadow-lift",
        className
      )}
    >
      {!bare && (
        <div
          className={cn(
            "skeleton-shimmer pointer-events-none absolute inset-0 transition-opacity duration-700",
            loaded && "opacity-0"
          )}
          aria-hidden
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          objectPosition,
          objectFit,
          transform: `scale(${loaded ? zoom : zoom * 1.04})`,
        }}
        className={cn(
          "absolute inset-0 h-full w-full transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        )}
      />
    </div>
  );
}
