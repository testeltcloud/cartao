import {
  Cloud,
  Braces,
  Boxes,
  ClipboardCheck,
  ScrollText,
  KeyRound,
  Activity,
  Radar,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { FeatureCard } from "@/components/ui/feature-card";

const RECURSOS = [
  { icon: Cloud, title: "Arquitetura Cloud Native" },
  { icon: Braces, title: "APIs REST" },
  { icon: Boxes, title: "Multi Tenant" },
  { icon: ClipboardCheck, title: "Auditoria completa" },
  { icon: ScrollText, title: "Logs transacionais" },
  { icon: KeyRound, title: "Controle granular de acesso" },
  { icon: Activity, title: "Alta disponibilidade" },
  { icon: Radar, title: "Monitoramento 24x7" },
];

export function Technology() {
  return (
    <Section id="tecnologia" tone="ink" className="bg-grid-lines">
      <SectionHeading
        align="center"
        tone="onDark"
        eyebrow="Tecnologia Empresarial"
        title="Escalabilidade, segurança e performance"
        lead="Infraestrutura projetada para operações críticas do mercado financeiro."
        maxWidth="max-w-2xl"
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RECURSOS.map((r) => (
          <StaggerItem key={r.title}>
            <FeatureCard icon={r.icon} title={r.title} tone="onDark" />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
