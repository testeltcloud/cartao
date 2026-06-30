"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { motion, useReducedMotion } from "framer-motion";

const PERMISSIONS = [
  "regional_dashboard",
  "split_payments",
  "user_management",
  "audit_logs",
  "billing_access",
  "api_keys",
];

function PermToggle({
  label,
  i,
  reduce,
}: {
  label: string;
  i: number;
  reduce: boolean;
}) {
  const timing = {
    duration: 5,
    times: [0, 0.12, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 0.4,
    delay: i * 0.35,
    ease: "easeInOut" as const,
  };
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 py-2.5 last:border-0">
      <span className="font-mono text-[13px] text-white/55">{label}</span>
      <motion.span
        className="relative inline-flex h-5 w-9 shrink-0 items-center rounded-full px-0.5"
        initial={{ backgroundColor: "#1b1e25" }}
        animate={
          reduce
            ? { backgroundColor: "#10b981" }
            : { backgroundColor: ["#1b1e25", "#10b981", "#10b981", "#1b1e25"] }
        }
        transition={reduce ? undefined : timing}
      >
        <motion.span
          className="h-4 w-4 rounded-full bg-white shadow-sm"
          initial={{ x: 0 }}
          animate={reduce ? { x: 16 } : { x: [0, 16, 16, 0] }}
          transition={reduce ? undefined : timing}
        />
      </motion.span>
    </div>
  );
}

export function SecurityHero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden border-b border-white/5 bg-[#010102] pb-24 pt-32 text-white">
      {/* Malha + glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_70%_40%,#000_15%,transparent_72%)]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[620px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Copy */}
          <FadeIn>
            <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-emerald-400/70">
              Soluções // Controle de Acesso
            </span>
            <h1 className="mb-8 font-display text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Precisão <br />
              <span className="text-white/45">granular.</span>
            </h1>
            <p className="mb-12 max-w-lg text-lg font-light leading-relaxed tracking-wide text-white/50">
              Defina exatamente o que cada usuário vê e faz — por perfil, marca e
              escopo operacional. Cada operação enxerga apenas o que lhe compete.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href="/contato"
                size="lg"
                className="h-14 border-none bg-emerald-500 px-8 text-[#010102] hover:bg-emerald-400"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                href="/contato"
                size="lg"
                className="h-14 border border-white/10 bg-transparent px-8 text-white hover:bg-white/5"
              >
                Falar com Especialista
              </Button>
            </div>
          </FadeIn>

          {/* Frame de vidro com painel de permissões animado */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {/* Chrome da janela */}
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 flex items-center gap-1.5 font-mono text-[11px] text-white/40">
                    <Lock className="h-3 w-3" aria-hidden /> access-control · permissões
                  </span>
                </div>

                {/* ===== Troque este bloco por <img src="/print.png" /> para um print real ===== */}
                <div className="p-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
                    Perfil · Gestor Regional
                  </p>
                  {PERMISSIONS.map((p, i) => (
                    <PermToggle key={p} label={p} i={i} reduce={reduce} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
