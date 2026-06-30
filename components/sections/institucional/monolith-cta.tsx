import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion";

export function MonolithCta() {
  return (
    <section className="bg-[#fdfdfc] py-32 border-t border-black/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />
      <Container>
        <FadeIn className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tighter text-[#0a0a0a]">
            O Veredito Final
          </h2>
          <p className="mt-6 text-black/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Abandone a infraestrutura de ontem. Transacione com a velocidade e segurança do futuro. A fundação está pronta.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contato"
              size="lg"
              className="bg-[#0a0a0a] text-white hover:bg-black/80 rounded-full px-8 py-6 text-base font-medium h-auto"
            >
              Iniciar Conversa Arquitetônica
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
