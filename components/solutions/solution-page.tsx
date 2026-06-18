import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { FeatureCard } from "@/components/ui/feature-card";
import { CheckList } from "@/components/ui/check-list";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PageHero } from "@/components/page/page-hero";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { solutions, type Solution } from "@/lib/solutions";

export function SolutionPage({ solution }: { solution: Solution }) {
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={solution.eyebrow}
          title={solution.title}
          lead={solution.lead}
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Soluções", href: "/solucoes" },
            { label: solution.navLabel },
          ]}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contato" variant="primary" size="lg">
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contato" variant="outline" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </PageHero>

        {/* Recursos */}
        <Section>
          <SectionHeading
            eyebrow="Recursos"
            title="O que está incluído"
            lead={solution.intro}
            maxWidth="max-w-3xl"
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((f) => (
              <StaggerItem key={f.title}>
                <FeatureCard
                  icon={f.icon}
                  title={f.title}
                  description={f.desc}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* Benefícios + mídia */}
        <Section tone="surface">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Benefícios"
                title="O impacto na sua operação"
                maxWidth="max-w-xl"
              />
              <FadeIn delay={0.1} className="mt-8">
                <CheckList items={solution.benefits} columns={1} />
              </FadeIn>
              <FadeIn delay={0.2} className="mt-8">
                <Pill tone="accent">{solution.closing}</Pill>
              </FadeIn>
            </div>
            <FadeIn delay={0.1} className="relative">
              <MediaPlaceholder
                kind="image"
                label={solution.mediaLabel}
                ratio="4/3"
                className="shadow-soft"
              />
            </FadeIn>
          </div>
        </Section>

        {/* Outras soluções */}
        <Section>
          <SectionHeading
            eyebrow="Soluções"
            title="Explore outras soluções"
            maxWidth="max-w-2xl"
          />
          <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/solucoes/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-colors duration-300 hover:border-line-strong hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="text-base font-semibold text-ink">
                    {s.navLabel}
                  </span>
                  <span className="mt-2 line-clamp-2 text-sm text-muted">
                    {s.lead}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>

        {/* CTA */}
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

/** Faixa de CTA reaproveitável nas páginas internas. */
export function CtaBand() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-50" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Pronto para lançar sua operação?
            </h2>
            <p className="mt-4 text-white/70">
              Agende uma demonstração e descubra como operar com a sua marca em
              poucos minutos.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contato" variant="onDark" size="lg">
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="/contato"
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
