"use client";

import { useEffect, useRef } from "react";

/** Vídeo do hero rodando em câmera lenta (0.5x). */
export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = 0.5;
  }, []);

  return (
    <video
      ref={ref}
      src="/video.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Demonstração do produto"
      // O playbackRate pode ser reiniciado ao carregar a mídia; reforça aqui.
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = 0.5;
      }}
      className={className}
    />
  );
}
