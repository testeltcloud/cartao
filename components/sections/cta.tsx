import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/motion";

export function CtaFinal() {
  return (
    <section id="contato" className="bg-background py-20 sm:py-24">
      <Container>
        <FadeIn className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Textura sutil de fundo (sem cor gritante) */}
          <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-50" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <Eyebrow tone="onDark" className="mb-6 justify-center">
              Vamos começar
            </Eyebrow>
            <h2 className="text-h2 font-semibold tracking-tight text-white">
              Sua operação financeira merece mais do que um sistema
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Tenha uma plataforma preparada para crescer, vender, conciliar,
              monitorar e escalar sua operação de pagamentos.
            </p>
            <p className="mt-4 text-base font-medium text-white/90">
              Agende uma demonstração e descubra como lançar sua operação White
              Label em poucos minutos.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#" variant="onDark" size="lg">
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button
                href="#"
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
