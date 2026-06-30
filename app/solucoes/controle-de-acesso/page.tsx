import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

import { SecurityHero } from "@/components/sections/solucoes/acesso/security-hero";
import { PermissionMatrix } from "@/components/sections/solucoes/acesso/permission-matrix";
import { AuditTrail } from "@/components/sections/solucoes/acesso/audit-trail";

export const metadata: Metadata = {
  title: "Controle de Acesso e Permissões — LTCard",
  description:
    "Precisão granular: defina o que cada usuário vê e faz por perfil, marca e escopo operacional, com auditoria de acessos em tempo real.",
  alternates: { canonical: "/solucoes/controle-de-acesso" },
};

function SecurityCta() {
  return (
    <section className="border-t border-white/5 bg-[#010102] py-28 text-white sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="mb-5 block font-mono text-xs uppercase tracking-widest text-emerald-400/70">
            // Acesso sob controle
          </span>
          <h2 className="font-display text-4xl font-normal tracking-tight sm:text-5xl">
            Do gestor ao vendedor,{" "}
            <span className="text-white/45">cada um no seu escopo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg font-light leading-relaxed text-white/50">
            Segregação de funções, menos risco operacional e conformidade pronta
            para auditoria — com a granularidade que a sua operação exige.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              href="/contato"
              size="lg"
              className="h-14 border-none bg-emerald-500 px-8 text-[#010102] hover:bg-emerald-400"
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

export default function ControleDeAcessoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#010102]">
        <SecurityHero />
        <PermissionMatrix />
        <AuditTrail />
        <SecurityCta />
      </main>
      <Footer />
    </>
  );
}
