"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const EASE = [0.22, 1, 0.36, 1] as const;

const PILLARS = [
  "White Label",
  "White Label Master",
  "Conciliação Inteligente",
  "IA de Expansão Comercial",
];

export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Fundo sutil — grade pontilhada + clarão suave, sem gradiente forte */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Coluna de texto */}
          <div className="max-w-2xl">
            <motion.div {...fade(0)}>
              <Pill tone="accent" className="mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Plataforma de operações de pagamento
              </Pill>
            </motion.div>

            <motion.h1
              {...fade(0.08)}
              className="text-display font-semibold tracking-tight text-ink"
            >
              A plataforma para lançar e escalar operações de pagamento
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Crie sua própria subadquirente, fintech ou operação white label em
              minutos. Uma plataforma completa para gestão de pagamentos,
              conciliação, compliance, vendas e crescimento comercial — pronta
              para operar com a sua marca.
            </motion.p>

            <motion.div
              {...fade(0.24)}
              className="mt-7 flex flex-wrap gap-2"
            >
              {PILLARS.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </motion.div>

            <motion.div
              {...fade(0.32)}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#contato" variant="primary" size="lg">
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#contato" variant="outline" size="lg">
                Falar com Especialista
              </Button>
            </motion.div>
          </div>

          {/* Coluna visual — slot principal de mídia/animação */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="relative"
          >
            <MediaPlaceholder
              kind="animation"
              label="Dashboard / animação do produto"
              ratio="4/3"
              className="shadow-lift"
            />

            {/* Cards flutuantes — placeholders para microanimações/dados */}
            <FloatingCard
              className="-left-4 top-10 sm:-left-8"
              icon={TrendingUp}
              title="TPV em tempo real"
              value="R$ 0,00"
              delay={0.6}
              reduce={!!reduce}
            />
            <FloatingCard
              className="-right-3 bottom-10 sm:-right-6"
              icon={ShieldCheck}
              title="Pré-compliance"
              value="Monitorando"
              delay={0.8}
              reduce={!!reduce}
            />
            <FloatingCard
              className="left-6 -bottom-5"
              icon={Layers}
              title="Operações White Label"
              value="Multiempresa"
              delay={1}
              reduce={!!reduce}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCard({
  className,
  icon: Icon,
  title,
  value,
  delay,
  reduce,
}: {
  className?: string;
  icon: React.ElementType;
  title: string;
  value: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={`absolute hidden items-center gap-3 rounded-xl border border-line bg-background/90 px-3.5 py-3 shadow-lift backdrop-blur-sm sm:flex ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-[0.7rem] uppercase tracking-wide text-faint">
          {title}
        </p>
        <p className="text-sm font-semibold text-ink">{value}</p>
      </div>
    </motion.div>
  );
}
