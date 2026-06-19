"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/**
 * Contador animado — efeito "carregando / ganhando valor".
 *
 * Sobe de 0 até `to` no load (easeOutCubic). Com `live`, segue somando
 * incrementos pequenos pra simular TPV em tempo real. Usa algarismos
 * tabulares pra os dígitos não "pularem" de largura — padrão de número
 * financeiro (Coinbase/Binance/Stripe). Respeita prefers-reduced-motion
 * (mostra o valor final sem animar).
 */
export function CountUp({
  to,
  durationMs = 1800,
  live = false,
  className,
}: {
  to: number;
  durationMs?: number;
  live?: boolean;
  className?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setValue(to);
      return;
    }

    let raf = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(to * eased);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else if (live) {
        // Após preencher, segue "recebendo" transações.
        interval = setInterval(
          () => setValue((v) => v + Math.random() * 800 + 50),
          2400
        );
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (interval) clearInterval(interval);
    };
  }, [to, durationMs, live]);

  return (
    <span className={cn("tabular-nums", className)}>{BRL.format(value)}</span>
  );
}
