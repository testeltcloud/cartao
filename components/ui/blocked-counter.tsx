"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Contador de "bloqueados" que sobe +1 a cada ciclo da animação de queda do
 * chip de risco (sincronizado com `risk-drop`). Só conta enquanto o painel
 * está visível; respeita prefers-reduced-motion (fica estático).
 */
export function BlockedCounter({
  start = 0,
  intervalMs = 4200,
  delayMs = 2000,
  className,
}: {
  start?: number;
  intervalMs?: number;
  delayMs?: number;
  className?: string;
}) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout: ReturnType<typeof setTimeout> | undefined;
    let interval: ReturnType<typeof setInterval> | undefined;
    const stop = () => {
      if (timeout) clearTimeout(timeout);
      if (interval) clearInterval(interval);
      timeout = interval = undefined;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timeout && !interval) {
          // alinha o 1º incremento com a "aterrissagem" do chip
          timeout = setTimeout(() => {
            setCount((c) => c + 1);
            interval = setInterval(() => setCount((c) => c + 1), intervalMs);
          }, delayMs);
        } else if (!entry.isIntersecting) {
          stop();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [intervalMs, delayMs]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {count}
    </span>
  );
}
