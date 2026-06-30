import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { PrismHero } from "@/components/sections/solucoes/white-label/prism-hero";
import { ModularFeatures } from "@/components/sections/solucoes/white-label/modular-features";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Estrutura White Label — LTCard",
  description:
    "Opere com a sua marca e organize toda a operação em uma estrutura multiempresa e hierárquica.",
  alternates: { canonical: "/solucoes/estrutura-white-label" },
};

function SilentCta() {
  return (
    <section className="bg-[#f7f7f7] py-24 sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#0a0b0d]">
            Sua marca no centro de uma operação escalável.
          </h2>
          <p className="mt-6 text-[#5b616e] text-lg leading-relaxed">
            Abandone as limitações de sistemas rígidos. Distribua sua operação com controle absoluto de ponta a ponta.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contato"
              size="lg"
              className="bg-[#0052ff] text-white hover:bg-[#003ecc] border-none px-8 py-6 h-auto text-base"
            >
              Iniciar Integração
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default function EstruturaWhiteLabelPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#ffffff]">
        <PrismHero />
        <ModularFeatures />
        <SilentCta />
      </main>
      <Footer />
    </>
  );
}
