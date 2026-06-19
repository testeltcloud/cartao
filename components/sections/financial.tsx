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
    <Section id="financeiro" className="relative overflow-hidden">
      {/* Fundo decorativo — dá textura para o vidro do box "frostar" */}
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

      {/* Box com fundo de vidro (mesmo estilo dos cards do hero) */}
      <FadeIn
        delay={0.1}
        className="mt-14 rounded-[2rem] border border-white/60 bg-background/45 p-5 shadow-[0_18px_50px_-20px_rgba(14,23,38,0.3),inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150 sm:p-7"
      >
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RECURSOS.map((r) => (
            <StaggerItem key={r.title}>
              <FeatureCard icon={r.icon} title={r.title} description={r.desc} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Vídeo passando embaixo dos cards */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/50 shadow-soft">
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
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10 flex justify-center">
        <Pill tone="accent">Da taxa ao repasse, tudo rastreável</Pill>
      </FadeIn>
    </Section>
  );
}
