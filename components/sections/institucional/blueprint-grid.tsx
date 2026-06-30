import { Container } from "@/components/ui/container";
import { FadeIn, HoverLift } from "@/components/motion";
import { Layers, ShieldCheck, Zap, Globe } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança por Design",
    desc: "Criptografia de ponta a ponta e conformidade com PCI-DSS integrada na arquitetura base.",
  },
  {
    icon: Zap,
    title: "Performance Extrema",
    desc: "Autorização de transações em milissegundos. Arquitetura distribuída para alta vazão.",
  },
  {
    icon: Layers,
    title: "APIs Primitivas",
    desc: "Blocos de montar granulares. Construa qualquer lógica de negócio sem amarras monolíticas.",
  },
  {
    icon: Globe,
    title: "Operação Global",
    desc: "Multi-moeda, multi-adquirente. Escalonamento transparente sem refatoração de código.",
  },
];

export function BlueprintGrid() {
  return (
    <section
      className="relative bg-[#fdfdfc] bg-cover bg-center py-32 border-b border-black/5"
      style={{ backgroundImage: "url('/pexels-towfiqu-barbhuiya-3440682-9122014.jpg')" }}
    >
      {/* Overlay claro para manter o título legível sobre a foto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fdfdfc] via-[#fdfdfc]/80 to-[#fdfdfc]/20" />
      <Container className="relative z-10">
        <div className="max-w-xl mb-16">
          <FadeIn>
            <span className="text-xs font-mono tracking-widest uppercase text-black/40 mb-4 block">
              01 // Anatomia da Plataforma
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#0a0a0a]">
              Fundamentação Arquitetônica
            </h2>
            <p className="mt-4 text-black/60 text-lg leading-relaxed">
              Não adaptamos sistemas legados. Construímos do zero uma máquina
              de processamento financeiro para a nova economia.
            </p>
          </FadeIn>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black/5">
          {pillars.map((pillar, i) => (
            <HoverLift key={i} className="group relative border-r border-b border-black/5 bg-[#fdfdfc] p-10 md:p-14 hover:bg-black/[0.02] transition-colors duration-500">
              <pillar.icon className="h-6 w-6 text-black/30 group-hover:text-black transition-colors duration-500" />
              <h3 className="font-display text-xl font-medium tracking-tight text-[#0a0a0a] mt-8 mb-3">
                {pillar.title}
              </h3>
              <p className="text-black/60 leading-relaxed text-sm max-w-[280px]">
                {pillar.desc}
              </p>
            </HoverLift>
          ))}
        </div>
      </Container>
    </section>
  );
}
