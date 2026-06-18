import type { Metadata } from "next";
import {
  Globe,
  Link as LinkIcon,
  Repeat,
  PlugZap,
  Smartphone,
  GitBranch,
  Zap,
  Barcode,
  CreditCard,
  KeyRound,
  Receipt,
  ScanLine,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/solutions/solution-page";
import { Stagger, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Gateway, link de pagamento, recorrência, TEF, POS, split, Pix, boleto, cartões e mais: todos os produtos da plataforma LTCard.",
  alternates: { canonical: "/produtos" },
};

const PRODUTOS = [
  { icon: Globe, title: "Gateway de pagamento", desc: "Processe pagamentos online com alta disponibilidade e segurança." },
  { icon: LinkIcon, title: "Link de pagamento", desc: "Cobre sem integração: gere e compartilhe links de cobrança." },
  { icon: Repeat, title: "Recorrência", desc: "Assinaturas e cobranças recorrentes com retentativa automática." },
  { icon: PlugZap, title: "TEF", desc: "Integração da captura presencial ao seu PDV, ERP ou automação." },
  { icon: Smartphone, title: "POS", desc: "Terminais e pinpads com captura multiadquirente." },
  { icon: GitBranch, title: "Split de pagamento", desc: "Divida valores entre múltiplos recebedores automaticamente." },
  { icon: Zap, title: "Pix", desc: "Cobrança e recebimento via Pix, com QR Code dinâmico." },
  { icon: Barcode, title: "Boleto", desc: "Emissão e conciliação de boletos integradas." },
  { icon: CreditCard, title: "Cartões", desc: "Crédito e débito das principais bandeiras." },
  { icon: KeyRound, title: "Cofre / Tokenização", desc: "Armazenamento seguro de cartões para one-click e recorrência." },
  { icon: Receipt, title: "Cobrança", desc: "Gestão de faturas, vencimentos e notificações." },
  { icon: ScanLine, title: "Conciliação", desc: "Concilie captura, liquidação e repasse em um só lugar." },
];

export default function ProdutosPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Produtos"
          title="Tudo o que sua operação de pagamentos precisa"
          lead="Um conjunto completo de produtos para aceitar, processar, conciliar e gerenciar pagamentos, do online ao presencial, em uma plataforma única."
          breadcrumbs={[{ label: "Início", href: "/" }, { label: "Produtos" }]}
        />

        <Section>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUTOS.map((p) => (
              <StaggerItem key={p.title}>
                <FeatureCard icon={p.icon} title={p.title} description={p.desc} />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        <Section tone="surface">
          <SectionHeading
            align="center"
            eyebrow="Integração"
            title="APIs REST e documentação para o seu time"
            lead="Todos os produtos são acessíveis via APIs REST, com ambiente de testes (sandbox) e documentação completa para acelerar a integração."
            maxWidth="max-w-2xl"
          />
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
