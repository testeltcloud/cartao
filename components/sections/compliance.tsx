import { ShieldCheck, CreditCard, ArrowRight, Radar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion";

const SINAIS = [
  "Alterações bruscas de TPV",
  "Perfil incompatível",
  "Operações suspeitas",
  "Análise comportamental",
  "Alertas em tempo real",
  "Monitoramento preventivo",
];

function Arrow() {
  return (
    <ArrowRight
      className="mx-auto h-4 w-4 shrink-0 rotate-90 text-faint sm:rotate-0"
      aria-hidden
    />
  );
}

export function Compliance() {
  return (
    <section
      id="compliance"
      className="relative z-10 -mt-10 scroll-mt-24 overflow-hidden rounded-t-[2rem] bg-surface py-20 shadow-[0_-22px_50px_-30px_rgba(14,23,38,0.25)] sm:-mt-14 sm:rounded-t-[2.75rem] sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Pré-Compliance Inteligente"
          title="Detecte riscos antes que eles se tornem problemas"
          lead="Monitoramento contínuo das transações para identificar comportamentos fora do padrão e apoiar sua equipe de risco e compliance."
          maxWidth="max-w-3xl"
        />

        {/* Stepper de fluxo: Transação → Análise → Decisão */}
        <FadeIn
          delay={0.1}
          className="mx-auto mt-14 flex max-w-4xl flex-col items-stretch gap-3 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-background px-4 py-3 shadow-soft">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 text-ink-soft">
              <CreditCard className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Transação</p>
              <p className="text-xs text-muted">recebida</p>
            </div>
          </div>

          <Arrow />

          <div className="flex-1 rounded-2xl border border-accent/25 bg-accent-soft/40 p-4">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
              <Radar className="h-3.5 w-3.5" strokeWidth={1.9} aria-hidden />
              Análise · 6 sinais
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SINAIS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-accent/20 bg-background px-2.5 py-1 text-xs text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Arrow />

          <div className="flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent px-4 py-3 text-white shadow-soft">
            <ShieldCheck className="h-5 w-5" strokeWidth={1.9} aria-hidden />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Aprovada</p>
              <p className="text-xs text-white/70">sem risco</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12 flex justify-center">
          <Pill tone="accent">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Mais segurança para sua operação
          </Pill>
        </FadeIn>
      </Container>
    </section>
  );
}
