import {
  Database,
  Building2,
  Webhook,
  Cpu,
  ScanLine,
  Landmark,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion";
import { FeatureCard } from "@/components/ui/feature-card";
import { Pill } from "@/components/ui/pill";

const INTEGRATIONS = [
  { icon: Database, title: "Registradoras de recebíveis" },
  { icon: Building2, title: "CERC" },
  { icon: Webhook, title: "APIs financeiras" },
  { icon: Cpu, title: "Motores de liquidação" },
  { icon: ScanLine, title: "Sistemas de captura" },
  { icon: Landmark, title: "Plataformas bancárias" },
];

/** Nomes para a faixa rolante (placeholders — troque por logos reais). */
const MARQUEE = [
  "CERC",
  "Registradoras",
  "APIs Financeiras",
  "Motores de Liquidação",
  "Captura",
  "Bancos",
];

export function Ecosystem() {
  return (
    <Section id="ecossistema" tone="surface">
      <SectionHeading
        align="center"
        eyebrow="Ecossistema Financeiro Integrado"
        title="Conectado às principais infraestruturas do mercado"
        lead="Integrações desenvolvidas para suportar operações financeiras modernas, com alta disponibilidade e escalabilidade."
        maxWidth="max-w-3xl"
      />

      {/* Faixa rolante de logos (placeholders) */}
      <FadeIn
        delay={0.1}
        className="marquee-pause relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div className="no-scrollbar flex w-max animate-marquee gap-4">
          {[...MARQUEE, ...MARQUEE].map((name, i) => (
            <div
              key={`${name}-${i}`}
              data-logo-slot
              className="flex h-16 items-center gap-3 rounded-xl border border-line bg-background px-6"
            >
              <span className="h-6 w-6 rounded-md bg-surface-2" aria-hidden />
              <span className="whitespace-nowrap text-sm font-medium text-muted">
                {name}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Grade detalhada */}
      <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {INTEGRATIONS.map((item) => (
          <StaggerItem key={item.title}>
            <FeatureCard icon={item.icon} title={item.title} />
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn delay={0.15} className="mt-10 flex justify-center">
        <Pill tone="accent">Tudo centralizado em uma única plataforma</Pill>
      </FadeIn>
    </Section>
  );
}
