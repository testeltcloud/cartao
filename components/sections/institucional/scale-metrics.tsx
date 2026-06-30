import { Container } from "@/components/ui/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const metrics = [
  {
    value: "R$ 15Bi+",
    label: "Volume Transacionado",
    desc: "Capital fluindo através de nossa infraestrutura de ponta a ponta.",
  },
  {
    value: "99.999%",
    label: "Uptime Arquitetônico",
    desc: "Disponibilidade ininterrupta, garantida por design distribuído.",
  },
  {
    value: "<14ms",
    label: "Latência Máxima",
    desc: "Autorização de transações em tempo sub-crítico.",
  },
];

export function ScaleMetrics() {
  return (
    <section className="bg-[#fdfdfc] text-[#0a0a0a] py-32 border-b border-black/5 relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <FadeIn className="md:w-1/3">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              A Escala da Confiança
            </h2>
            <p className="mt-4 text-black/50 text-base leading-relaxed">
              Números não mentem. Eles são o resultado de uma engenharia
              obsessiva por precisão, segurança e disponibilidade absoluta.
            </p>
          </FadeIn>

          <Stagger className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
            {metrics.map((m) => (
              <StaggerItem key={m.label} className="flex flex-col">
                <span className="font-display text-5xl lg:text-7xl font-bold tracking-tighter text-[#0a0a0a]">
                  {m.value}
                </span>
                <span className="mt-4 font-semibold text-sm tracking-wide uppercase text-black/40">
                  {m.label}
                </span>
                <span className="mt-2 text-sm text-black/60 leading-relaxed max-w-[250px]">
                  {m.desc}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

        </div>
      </Container>
    </section>
  );
}
