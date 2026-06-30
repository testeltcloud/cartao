import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion";
import { Pill } from "@/components/ui/pill";
import { FinancialFlow } from "./financial-flow";

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

      <FadeIn delay={0.1} className="mx-auto mt-14 max-w-none">
        <FinancialFlow />
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex justify-center">
        <Pill tone="accent">Da taxa ao repasse, tudo rastreável</Pill>
      </FadeIn>
    </Section>
  );
}
