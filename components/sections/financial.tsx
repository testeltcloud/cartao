import { Percent, Calculator, HandCoins, Wallet, Receipt, Route } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";

const RECURSOS = [
  { icon: Percent, title: "Planos de taxa", pos: "left-3 top-5 sm:left-5 sm:top-7" },
  { icon: Calculator, title: "Motor de cálculo", pos: "right-3 top-7 sm:right-6 sm:top-10" },
  { icon: HandCoins, title: "Antecipação de recebíveis", pos: "left-3 top-[43%] sm:left-7" },
  { icon: Wallet, title: "Contas a pagar", pos: "right-3 top-[40%] sm:right-5" },
  { icon: Receipt, title: "Mensalidades e lançamentos", pos: "left-3 bottom-6 sm:left-6 sm:bottom-8" },
  { icon: Route, title: "Rastreabilidade até o repasse", pos: "right-3 bottom-5 sm:right-6 sm:bottom-7" },
];

function Chip({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/55 bg-background/70 px-3 py-2 shadow-lift backdrop-blur-md backdrop-saturate-150">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-ink [text-shadow:0_1px_2px_rgba(255,255,255,0.55)]">
        {title}
      </span>
    </div>
  );
}

export function Financial() {
  return (
    <Section id="financeiro" className="relative overflow-hidden">
      {/* Fundo decorativo */}
      <div
        className="pointer-events-none absolute left-1/2 top-28 -z-10 h-[440px] w-[860px] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_55%_at_50%_35%,#000_20%,transparent_75%)]"
        aria-hidden
      />

      <SectionHeading
        align="center"
        eyebrow="Gestão Financeira e de Recebíveis"
        title="Taxas, antecipação e financeiro sob controle"
        lead="Configure planos de taxa, gerencie a antecipação de recebíveis e controle todo o ciclo financeiro, das contas a pagar ao repasse, com rastreabilidade completa."
        maxWidth="max-w-3xl"
      />

      <FadeIn delay={0.1} className="mx-auto mt-14 max-w-6xl">
        {/* Vídeo com chips finos espalhados por cima */}
        <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-lift bg-surface-2 isolation-isolate [mask-image:-webkit-radial-gradient(white,black)]">
          <video
            className="block aspect-video w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/videoMaquininha-poster.jpg"
          >
            <source src="/videoMaquininha.mp4" type="video/mp4" />
          </video>

          {/* Chips (desktop) — aparecem em cascata */}
          {RECURSOS.map((r, i) => (
            <FadeIn
              key={r.title}
              delay={0.15 + i * 0.1}
              className={cn("absolute hidden lg:block", r.pos)}
            >
              <Chip icon={r.icon} title={r.title} />
            </FadeIn>
          ))}
        </div>

        {/* Fallback mobile — lista compacta abaixo do vídeo */}
        <Stagger
          className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:hidden"
          gap={0.06}
        >
          {RECURSOS.map((r) => (
            <StaggerItem key={r.title} y={10}>
              <Chip icon={r.icon} title={r.title} />
            </StaggerItem>
          ))}
        </Stagger>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex justify-center">
        <Pill tone="accent">Da taxa ao repasse, tudo rastreável</Pill>
      </FadeIn>
    </Section>
  );
}
