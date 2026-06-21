import { ShieldCheck, Check, Clock, Ban } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { BlockedCounter } from "@/components/ui/blocked-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";
import { SignalsOrbit } from "./compliance-signals";

type Status = "ok" | "review" | "blocked";

const ROWS: { m: string; v: string; s: Status }[] = [
  { m: "Mercado União", v: "R$ 1.240,00", s: "ok" },
  { m: "Posto Avenida", v: "R$ 320,00", s: "ok" },
  { m: "Loja Premium Eletro", v: "R$ 47.800,00", s: "review" },
  { m: "Farmácia Vida", v: "R$ 89,90", s: "ok" },
  { m: "Tech Imports Ltda", v: "R$ 230.000,00", s: "blocked" },
  { m: "Restaurante do Sol", v: "R$ 540,00", s: "ok" },
  { m: "AutoPeças Brasil", v: "R$ 6.150,00", s: "ok" },
  { m: "Joalheria Ouro Fino", v: "R$ 18.900,00", s: "review" },
  { m: "Padaria Central", v: "R$ 75,00", s: "ok" },
  { m: "Distribuidora Norte", v: "R$ 12.500,00", s: "ok" },
];

const STATUS: Record<
  Status,
  { label: string; icon: React.ElementType; cls: string }
> = {
  ok: { label: "Aprovada", icon: Check, cls: "bg-accent-soft text-accent" },
  review: { label: "Em análise", icon: Clock, cls: "bg-amber-50 text-amber-700" },
  blocked: { label: "Bloqueada", icon: Ban, cls: "bg-rose-50 text-rose-700" },
};

function StatusPill({ s }: { s: Status }) {
  const st = STATUS[s];
  const Icon = st.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium",
        st.cls
      )}
    >
      <Icon className="h-3 w-3" strokeWidth={2.4} aria-hidden />
      {st.label}
    </span>
  );
}

function FeedRow({ m, v, s }: { m: string; v: string; s: Status }) {
  return (
    <div className="grid grid-cols-[1fr_auto_7rem] items-center gap-3 border-b border-line/60 px-5 py-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[11px] font-semibold text-ink-soft">
          {m.charAt(0)}
        </span>
        <span className="truncate text-sm text-ink-soft">{m}</span>
      </div>
      <span className="font-mono text-sm tabular-nums text-ink">{v}</span>
      <span className="flex justify-end">
        <StatusPill s={s} />
      </span>
    </div>
  );
}

function Kpi({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-end leading-tight">
      {children}
      <span className="text-[10px] uppercase tracking-wide text-faint">
        {label}
      </span>
    </div>
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

        {/* Feed de transações ao vivo */}
        <FadeIn y={0} delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="wipe-in overflow-hidden rounded-[1.75rem] border border-line bg-background shadow-soft">
            {/* Cabeçalho + KPIs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.9} aria-hidden />
                </span>
                Fluxo de transações
                <span className="ml-1 hidden items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent sm:inline-flex">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  pré-compliance ativo
                </span>
              </span>
              <div className="hidden items-center gap-5 sm:flex">
                <Kpi label="Aprovadas">
                  <span className="font-mono text-sm font-semibold tabular-nums text-accent">
                    1.284
                  </span>
                </Kpi>
                <Kpi label="Em análise">
                  <span className="font-mono text-sm font-semibold tabular-nums text-amber-600">
                    37
                  </span>
                </Kpi>
                <Kpi label="Bloqueadas">
                  <BlockedCounter
                    start={12}
                    intervalMs={5200}
                    className="font-mono text-sm font-semibold tabular-nums text-rose-600"
                  />
                </Kpi>
              </div>
            </div>

            {/* Cabeçalho da tabela */}
            <div className="grid grid-cols-[1fr_auto_7rem] items-center gap-3 border-b border-line bg-surface/60 px-5 py-2 text-[10px] font-semibold uppercase tracking-wider text-faint">
              <span>Estabelecimento</span>
              <span>Valor</span>
              <span className="text-right">Status</span>
            </div>

            {/* Feed rolando (vertical) */}
            <div className="marquee-pause relative h-[19rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_7%,#000_93%,transparent)]">
              <div className="animate-marquee-y">
                {[...ROWS, ...ROWS].map((r, i) => (
                  <FeedRow key={i} {...r} />
                ))}
              </div>
            </div>

            {/* Sinais monitorados — órbita */}
            <div className="border-t border-line px-5 py-8 sm:px-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                  Sinais monitorados
                </p>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  6 ativos
                </span>
              </div>
              <SignalsOrbit />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-10 flex justify-center">
          <Pill tone="accent">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            Mais segurança para sua operação
          </Pill>
        </FadeIn>
      </Container>
    </section>
  );
}
