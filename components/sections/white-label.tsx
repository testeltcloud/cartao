import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeIn } from "@/components/motion";

const RECURSOS = [
  "Gestão de gestores, vendedores e equipes comerciais",
  "Estrutura de unidades internas e regionais",
  "Acompanhamento de metas e desempenho",
  "Personalização de tema, marca e domínio",
];

export function WhiteLabel() {
  return (
    <Section id="white-label">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Estrutura White Label"
            title="Estrutura White Label"
            lead="Organize sua operação com uma estrutura pensada para gestão, expansão comercial e personalização da sua marca. A plataforma permite configurar ambientes White Label com mais controle sobre times, unidades e identidade visual, mantendo uma operação mais organizada e alinhada ao seu modelo de negócio."
            maxWidth="max-w-xl"
          />
          <FadeIn delay={0.1} className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Recursos
            </p>
            <CheckList items={RECURSOS} columns={2} />
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="relative">
          <MediaPlaceholder
            kind="image"
            label="Estrutura multiempresa / hierarquia White Label"
            ratio="4/3"
            className="shadow-soft"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
