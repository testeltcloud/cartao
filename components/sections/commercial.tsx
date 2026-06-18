import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeIn } from "@/components/motion";

const RECURSOS = [
  "Metas por vendedor",
  "Metas por equipe",
  "Metas por gestor",
  "Ranking comercial",
  "Controle de TPV",
  "Gestão de carteira",
  "Performance por região",
  "Indicadores de crescimento",
];

export function Commercial() {
  return (
    <Section id="comercial" tone="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Mídia primeiro no desktop, depois do texto no mobile */}
        <FadeIn delay={0.1} className="relative order-last lg:order-first">
          <MediaPlaceholder
            kind="image"
            label="Painel comercial / ranking e metas"
            ratio="4/3"
            className="shadow-soft"
          />
        </FadeIn>

        <div>
          <SectionHeading
            eyebrow="Gestão Comercial"
            title="Transforme vendas em crescimento previsível"
            lead="Muito além da tecnologia financeira: gerencie equipes, vendedores e canais comerciais através de indicadores em tempo real."
            maxWidth="max-w-xl"
          />
          <FadeIn delay={0.1} className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Recursos
            </p>
            <CheckList items={RECURSOS} columns={2} />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
