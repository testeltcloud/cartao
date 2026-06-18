import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeIn } from "@/components/motion";

const RECURSOS = [
  "Multiempresa",
  "Multiadquirente",
  "Multiusuário",
  "Gestão hierárquica",
  "Controle por marca",
  "Gestão independente por operação",
  "Portal administrativo dedicado",
];

export function WhiteLabel() {
  return (
    <Section id="white-label">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="White Label Master"
            title="Crie sua própria rede de operações White Label"
            lead="Nossa estrutura permite criar uma operação completa com a sua marca e, além disso, distribuir novas operações White Label para parceiros, representantes e grupos comerciais."
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
