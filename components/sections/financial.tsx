import { Percent, Calculator, HandCoins, Wallet, Receipt, Route } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, FadeIn } from "@/components/motion";
import { FeatureCard } from "@/components/ui/feature-card";
import { Pill } from "@/components/ui/pill";

const RECURSOS = [
  {
    icon: Percent,
    title: "Planos de taxa",
    desc: "Configuração de taxas por modalidade, bandeira e produto.",
  },
  {
    icon: Calculator,
    title: "Motor de cálculo",
    desc: "Define o que cada operação recebe e o que repassa.",
  },
  {
    icon: HandCoins,
    title: "Antecipação de recebíveis",
    desc: "Adiante as vendas de cartão dentro das regras da operação.",
  },
  {
    icon: Wallet,
    title: "Contas a pagar",
    desc: "Controle do pagamento de recebíveis e do ciclo financeiro.",
  },
  {
    icon: Receipt,
    title: "Mensalidades e lançamentos",
    desc: "Cobranças recorrentes e lançamentos avulsos da operação.",
  },
  {
    icon: Route,
    title: "Rastreabilidade até o repasse",
    desc: "Acompanhe cada valor, da captura ao repasse.",
  },
];

export function Financial() {
  return (
    <Section id="financeiro">
      <SectionHeading
        align="center"
        eyebrow="Gestão Financeira e de Recebíveis"
        title="Taxas, antecipação e financeiro sob controle"
        lead="Configure planos de taxa, gerencie a antecipação de recebíveis e controle todo o ciclo financeiro, das contas a pagar ao repasse, com rastreabilidade completa."
        maxWidth="max-w-3xl"
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECURSOS.map((r) => (
          <StaggerItem key={r.title}>
            <FeatureCard icon={r.icon} title={r.title} description={r.desc} />
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn delay={0.15} className="mt-10 flex justify-center">
        <Pill tone="accent">Da taxa ao repasse, tudo rastreável</Pill>
      </FadeIn>
    </Section>
  );
}
