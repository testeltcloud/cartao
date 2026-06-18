import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/page/page-hero";
import { CtaBand } from "@/components/solutions/solution-page";
import { Stagger, StaggerItem, HoverLift } from "@/components/motion";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Estrutura White Label, controle de acesso, gestão comercial, antecipação de recebíveis, conciliação, registradora, dashboards e monitoramento de risco: tudo em uma plataforma.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Soluções"
          title="Soluções completas para a sua operação de pagamentos"
          lead="Da captura ao repasse, da prevenção de fraude à estruturação de recebíveis. Escolha o que sua operação precisa e opere tudo em uma plataforma só."
          breadcrumbs={[{ label: "Início", href: "/" }, { label: "Soluções" }]}
        />

        <Section>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => {
              const Icon = s.features[0].icon;
              return (
                <StaggerItem key={s.slug}>
                  <HoverLift className="h-full">
                    <Link
                      href={`/solucoes/${s.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-background p-7 transition-colors duration-300 hover:border-line-strong hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-accent">
                        <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                      </span>
                      <h2 className="mt-5 text-lg font-semibold text-ink">
                        {s.navLabel}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {s.lead}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                        Saiba mais
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
