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
import { Technology } from "@/components/sections/technology";
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
        <Audience />
        <WhiteLabel />
        <Commercial />
        <Financial />
        <Reconciliation />
        <AiExpansion />
        <Compliance />
        <Ecosystem />
        <Technology />
        <Differentials />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
