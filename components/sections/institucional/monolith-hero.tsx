"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MonolithHero() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="monolith-hero relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0a0a0a] text-white pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),transparent)]" />
      <span className="spotlight-glow-monolith" aria-hidden />

      <Container className="relative z-10">
        <div className="max-w-[90%] sm:max-w-6xl">
          <h1 className="anim-fade-up font-display text-[clamp(2.25rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 break-words">
            A INFRAESTRUTURA
            <br />
            QUE MOVE O SEU
            <br />
            FUTURO.
          </h1>
          
          <p
            className="anim-fade-up mt-8 max-w-2xl text-lg sm:text-xl text-white/50 font-light tracking-wide leading-relaxed"
            style={{ "--anim-delay": "0.15s" } as React.CSSProperties}
          >
            Sólida como um monolito, ágil como o fluxo do capital.
            Construímos o alicerce para operações financeiras globais que não podem falhar.
          </p>

          <div
            className="anim-fade-up mt-12 flex flex-wrap items-center gap-6"
            style={{ "--anim-delay": "0.3s" } as React.CSSProperties}
          >
            <Button
              href="/contato"
              size="lg"
              className="bg-[#00ff66] text-black hover:bg-[#00cc52] border-none shadow-[0_0_20px_rgba(0,255,102,0.3)] transition-all duration-300"
            >
              Iniciar Integração
              <ArrowRight className="h-4 w-4" />
            </Button>
            <span className="text-white/40 text-sm font-mono tracking-widest uppercase">
              Latência de ~14ms
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
