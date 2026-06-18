import type { Metadata } from "next";
import { LifeBuoy, BookOpen, Activity, Headset, ShieldCheck, Rocket } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/solutions/solution-page";
import { Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Suporte",
  description:
    "Central de ajuda, documentação de API, status da plataforma e atendimento especializado para a sua operação.",
  alternates: { canonical: "/suporte" },
};

const RECURSOS = [
  { icon: LifeBuoy, title: "Central de ajuda", desc: "Artigos e tutoriais para resolver dúvidas rapidamente." },
  { icon: BookOpen, title: "Documentação e API", desc: "Referência completa das APIs REST com ambiente de testes." },
  { icon: Activity, title: "Status da plataforma", desc: "Acompanhe a disponibilidade dos serviços em tempo real." },
  { icon: Headset, title: "Atendimento especializado", desc: "Time técnico e comercial para apoiar a sua operação." },
  { icon: ShieldCheck, title: "SLA e níveis de serviço", desc: "Compromissos claros de disponibilidade e resposta." },
  { icon: Rocket, title: "Onboarding e implantação", desc: "Acompanhamento dedicado para colocar sua operação no ar." },
];

const FAQ = [
  {
    q: "Em quanto tempo consigo lançar minha operação?",
    a: "Com a tecnologia White Label, é possível colocar uma nova operação no ar em minutos, com a sua marca e parametrizações.",
  },
  {
    q: "A plataforma integra com mais de um adquirente?",
    a: "Sim. A arquitetura é multiadquirente, permitindo roteamento e captura entre diferentes adquirentes.",
  },
  {
    q: "Como funciona a conciliação?",
    a: "A conciliação cruza informações de captura, arquivos de liquidação (EDI) e extratos bancários, identificando divergências automaticamente.",
  },
  {
    q: "Vocês integram com registradoras de recebíveis?",
    a: "Sim, oferecemos integração nativa com as principais registradoras de recebíveis, como a CERC.",
  },
];

export default function SuportePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Suporte"
          title="Estamos com você em cada etapa"
          lead="Da implantação ao dia a dia da operação, você conta com documentação, monitoramento e um time pronto para ajudar."
          breadcrumbs={[{ label: "Início", href: "/" }, { label: "Suporte" }]}
        />

        <Section>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RECURSOS.map((r) => (
              <StaggerItem key={r.title}>
                <FeatureCard icon={r.icon} title={r.title} description={r.desc} />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* FAQ — accordion nativo (acessível, sem JS) */}
        <Section tone="surface">
          <SectionHeading
            align="center"
            eyebrow="Dúvidas frequentes"
            title="Perguntas frequentes"
            maxWidth="max-w-2xl"
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-background">
            {FAQ.map((item) => (
              <details key={item.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:hidden">
                  {item.q}
                  <span className="text-faint transition-transform duration-300 group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
