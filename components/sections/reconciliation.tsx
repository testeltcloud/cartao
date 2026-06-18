import {
  ScanLine,
  FileSpreadsheet,
  Banknote,
  ArrowRight,
  SearchCheck,
  FileSearch,
  ShieldCheck,
  Route,
  Repeat,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion";
import { FeatureCard } from "@/components/ui/feature-card";

const FLOW = [
  { icon: ScanLine, title: "Captura", desc: "Transações capturadas na ponta" },
  {
    icon: FileSpreadsheet,
    title: "Liquidação (EDI)",
    desc: "Arquivos de liquidação processados",
  },
  { icon: Banknote, title: "Repasse", desc: "Conciliação e monitoramento" },
];

const BENEFITS = [
  {
    icon: SearchCheck,
    title: "Identificação automática de inconsistências",
  },
  { icon: ScanLine, title: "Conciliação por captura" },
  { icon: FileSearch, title: "Conciliação por EDI" },
  { icon: ShieldCheck, title: "Auditoria financeira" },
  { icon: Route, title: "Rastreabilidade completa" },
  { icon: Repeat, title: "Monitoramento de repasses" },
];

export function Reconciliation() {
  return (
    <Section id="conciliacao">
      <SectionHeading
        align="center"
        eyebrow="Conciliação Inteligente"
        title="Controle total da captura ao repasse"
        lead="Realizamos a conciliação utilizando informações de captura e arquivos de liquidação, proporcionando maior precisão operacional e redução de divergências."
        maxWidth="max-w-3xl"
      />

      {/* Fluxo */}
      <FadeIn delay={0.1} className="mx-auto mt-14 max-w-4xl">
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {FLOW.map((step, i) => (
            <div key={step.title} className="contents">
              <div className="rounded-2xl border border-line bg-background p-6 text-center shadow-soft">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <step.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.desc}</p>
              </div>
              {i < FLOW.length - 1 && (
                <div className="flex items-center justify-center text-line-strong">
                  <ArrowRight className="hidden h-5 w-5 sm:block" aria-hidden />
                  <ArrowRight className="h-5 w-5 rotate-90 sm:hidden" aria-hidden />
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Benefícios */}
      <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b) => (
          <StaggerItem key={b.title}>
            <FeatureCard icon={b.icon} title={b.title} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
