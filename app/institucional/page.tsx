import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Handshake } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/solutions/solution-page";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conheça a LTCard: a infraestrutura completa para lançar e escalar operações de pagamento com a sua marca.",
  alternates: { canonical: "/institucional" },
};

const VALORES = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Democratizar o acesso à infraestrutura de pagamentos, para que qualquer empresa opere com a sua marca.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser a base tecnológica das próximas grandes operações financeiras do país.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Compliance, auditoria e monitoramento contínuo em cada camada da plataforma.",
  },
  {
    icon: Handshake,
    title: "Parceria",
    description:
      "Crescemos junto com a sua operação, do primeiro estabelecimento à escala.",
  },
];

const DIFERENCIAIS = [
  "Tecnologia White Label e White Label Master nativa",
  "Arquitetura cloud native e multi-tenant",
  "Conciliação por captura, EDI e bancária",
  "Monitoramento de risco e pré-compliance integrados",
  "Integração com registradoras (CERC)",
  "Plataforma 100% web, escalável e segura",
];

export default function InstitucionalPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Institucional"
          title="A infraestrutura que move operações de pagamento"
          lead="A LTCard nasceu para que empresas possam lançar e escalar suas próprias operações de pagamento, com tecnologia white label, conciliação inteligente e conformidade de ponta a ponta."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Institucional" },
          ]}
        />

        {/* Sobre */}
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Quem somos"
                title="Uma plataforma completa para o mercado financeiro"
                maxWidth="max-w-xl"
              />
              <FadeIn delay={0.1} className="mt-6 space-y-4 text-muted">
                <p>
                  Centralizamos gestão de pagamentos, conciliação, compliance,
                  vendas e crescimento comercial em uma única plataforma,
                  pronta para operar com a sua marca.
                </p>
                <p>
                  Da captura ao repasse, do monitoramento de risco à
                  estruturação de recebíveis, entregamos a base tecnológica para
                  subadquirentes, fintechs, bancos digitais e redes comerciais
                  crescerem com previsibilidade.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <MediaPlaceholder
                kind="image"
                label="Time / escritório / produto"
                ratio="4/3"
                className="shadow-soft"
              />
            </FadeIn>
          </div>
        </Section>

        {/* Valores */}
        <Section tone="surface">
          <SectionHeading
            align="center"
            eyebrow="O que nos move"
            title="Missão, visão e valores"
            maxWidth="max-w-2xl"
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v) => (
              <StaggerItem key={v.title}>
                <FeatureCard
                  icon={v.icon}
                  title={v.title}
                  description={v.description}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* Diferenciais */}
        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Diferenciais"
              title="Por que escolher a LTCard"
              lead="Tecnologia, segurança e escala em uma plataforma pronta para crescer junto com a sua operação."
              maxWidth="max-w-xl"
            />
            <FadeIn delay={0.1}>
              <CheckList items={DIFERENCIAIS} columns={1} />
            </FadeIn>
          </div>
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
