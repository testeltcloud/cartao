import { ShieldAlert } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeIn } from "@/components/motion";
import { Pill } from "@/components/ui/pill";

const MONITORAMENTO = [
  "Alterações bruscas de TPV",
  "Perfil transacional incompatível",
  "Operações suspeitas",
  "Análise comportamental",
  "Alertas em tempo real",
  "Monitoramento preventivo",
];

export function Compliance() {
  return (
    <Section id="compliance">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn delay={0.1} className="relative order-last lg:order-first">
          <MediaPlaceholder
            kind="animation"
            label="Painel de alertas / detecção de anomalias"
            ratio="4/3"
            className="shadow-soft"
          />
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="Pré-Compliance Inteligente"
            title="Detecte riscos antes que eles se tornem problemas"
            lead="Monitoramento contínuo das transações para identificar comportamentos fora do padrão e apoiar sua equipe de risco e compliance."
            maxWidth="max-w-xl"
          />

          <FadeIn delay={0.1} className="mt-8">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              <ShieldAlert className="h-3.5 w-3.5 text-accent" /> Monitoramento
            </p>
            <CheckList items={MONITORAMENTO} columns={2} />
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <Pill tone="accent">Mais segurança para sua operação</Pill>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
