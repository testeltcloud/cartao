import { Users, Network, Target, Palette } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Pill } from "@/components/ui/pill";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const RECURSOS = [
  {
    icon: Users,
    title: "Gestão Hierárquica",
    description:
      "Controle total sobre gestores, vendedores e equipes comerciais com diferentes níveis de acesso e comissionamento.",
  },
  {
    icon: Network,
    title: "Múltiplas Unidades",
    description:
      "Organize toda a sua operação distribuindo-a em filiais, franquias e unidades de negócios regionais.",
  },
  {
    icon: Target,
    title: "Acompanhamento de Metas",
    description:
      "Dashboards precisos para medir o desempenho do seu time, acompanhando volume de vendas e alcance de metas em tempo real.",
  },
  {
    icon: Palette,
    title: "Identidade Exclusiva",
    description:
      "Muito além de um logo: configure temas, paleta de cores, tipografia e opere com o seu próprio domínio (URL).",
  },
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
      <FadeIn delay={0.1} className="relative mx-auto mt-14 max-w-7xl px-0">
        <img
          src="/image/Audience/quarto telas.svg"
          alt="Telas reais do sistema com personalização por cliente"
          className="mx-auto w-full h-auto"
        />
      </FadeIn>

      {/* Recursos detalhados em cards premium */}
      <Stagger
        className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2"
        gap={0.1}
      >
        {RECURSOS.map((r, i) => (
          <StaggerItem key={r.title} y={16}>
            <SpotlightCard className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift motion-reduce:transform-none sm:p-8">
              {/* número fantasma */}
              <span className="pointer-events-none absolute right-5 top-2 select-none text-[5.5rem] font-bold leading-none text-ink/[0.045] sm:text-[6.5rem]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* ícone que "acende" no hover */}
              <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/15 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <r.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden />
              </div>

              <h3 className="relative text-lg font-semibold text-ink">
                {r.title}
              </h3>
              {/* sublinhado que cresce */}
              <span className="relative my-3 block h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />

              <p className="relative leading-relaxed text-muted">
                {r.description}
              </p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
