import { Users, Network, Target, Palette } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Pill } from "@/components/ui/pill";
import { ImageReveal } from "@/components/ui/image-reveal";
import { FadeIn, Stagger, StaggerItem, HoverLift } from "@/components/motion";

const RECURSOS = [
  {
    icon: Users,
    text: "Gestão de gestores, vendedores e equipes comerciais",
  },
  { icon: Network, text: "Estrutura de unidades internas e regionais" },
  { icon: Target, text: "Acompanhamento de metas e desempenho" },
  { icon: Palette, text: "Personalização de tema, marca e domínio" },
];

export function WhiteLabel() {
  return (
    <Section id="white-label" containerClassName="max-w-[84rem] px-4 sm:px-6">
      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Pill tone="accent" className="mb-6">
          <Palette className="h-3.5 w-3.5" aria-hidden />
          White Label
        </Pill>

        <h2 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          Cada cliente com a sua{" "}
          <span className="text-accent">própria identidade</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Mais do que uma marca aplicada por cima: tema, cores, logo e domínio
          próprios. As telas abaixo são do sistema real —{" "}
          <strong className="font-semibold text-ink">
            personalizadas por cliente
          </strong>.
        </p>
      </FadeIn>

      {/* Showcase — ênfase total na imagem */}
      <FadeIn delay={0.1} className="relative mx-auto mt-14 max-w-5xl px-4">
        <img
          src="/image/Audience/quarto telas.svg"
          alt="Telas reais do sistema com personalização por cliente"
          className="mx-auto w-full h-auto"
        />
      </FadeIn>

      {/* Recursos em linha */}
      <Stagger
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        gap={0.06}
      >
        {RECURSOS.map((r) => (
          <StaggerItem key={r.text} y={12}>
            <HoverLift className="h-full rounded-xl border border-line bg-background p-5 transition-colors duration-300 hover:border-line-strong hover:bg-surface hover:shadow-soft">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <r.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
              </span>
              <p className="text-sm font-medium leading-snug text-ink-soft">
                {r.text}
              </p>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
