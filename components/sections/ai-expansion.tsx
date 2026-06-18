import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeIn } from "@/components/motion";
import { Pill } from "@/components/ui/pill";

const IDENTIFICA = [
  "Segmentos com maior potencial",
  "Regiões pouco exploradas",
  "Oportunidades de aquisição",
  "Tendências de mercado",
  "Concentração de estabelecimentos",
  "Potencial de TPV por região",
];

export function AiExpansion() {
  return (
    <Section id="ia" tone="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="IA para Expansão Comercial"
            title="Descubra onde sua operação deve crescer"
            lead="Usamos Inteligência Artificial para analisar o mercado e identificar oportunidades de expansão com base em CNAE, volume transacionado e comportamento comercial."
            maxWidth="max-w-xl"
          />

          <FadeIn delay={0.1} className="mt-8">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> A IA identifica
            </p>
            <CheckList items={IDENTIFICA} columns={2} />
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8">
            <Pill tone="accent">Transforme dados em estratégia comercial</Pill>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="relative">
          <MediaPlaceholder
            kind="animation"
            label="Mapa de calor / oportunidades por região"
            ratio="4/3"
            className="shadow-soft"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
