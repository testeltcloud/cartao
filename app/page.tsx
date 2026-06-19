import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Audience } from "@/components/sections/audience";
import { WhiteLabel } from "@/components/sections/white-label";
import { Commercial } from "@/components/sections/commercial";
import { Financial } from "@/components/sections/financial";
import { Reconciliation } from "@/components/sections/reconciliation";
import { AiExpansion } from "@/components/sections/ai-expansion";
import { Compliance } from "@/components/sections/compliance";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Differentials } from "@/components/sections/differentials";
import { CtaFinal } from "@/components/sections/cta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LTCard",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "Plataforma completa para lançar e escalar operações de pagamento: White Label, conciliação, pré-compliance, gestão comercial e IA de expansão.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Folha que sobe sobre o hero (sticky) ao rolar — topo arredondado +
            sombra dão o efeito de "tela nova" deslizando por cima. */}
        <div className="relative z-10 -mt-6 overflow-clip rounded-t-[1.75rem] bg-background shadow-[0_-22px_50px_-28px_rgba(14,23,38,0.4)] sm:-mt-8 sm:rounded-t-[2.5rem]">
          <Audience />
          <WhiteLabel />
          <Commercial />
          <Financial />
          <Reconciliation />
          <AiExpansion />
          <Compliance />
          <Ecosystem />
          <Differentials />
          <CtaFinal />
        </div>
      </main>
      <Footer />
    </>
  );
}
