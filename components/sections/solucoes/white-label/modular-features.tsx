import { Container } from "@/components/ui/container";
import { Boxes, Globe, Network, Palette, ShieldCheck, Building2 } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: Palette,
    title: "Personalização de Marca",
    desc: "Tema, logo e identidade visual sob a sua marca. O cliente final interage com a sua empresa, não com a infraestrutura.",
  },
  {
    icon: Globe,
    title: "Domínio Próprio",
    desc: "Cada white label opera em seu próprio domínio web e infraestrutura de e-mail transacional isolada.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente Isolado",
    desc: "Segregação total de dados entre diferentes operações e grupos econômicos na mesma instância.",
  },
  {
    icon: Boxes,
    title: "Multiempresa",
    desc: "Gerencie múltiplas empresas debaixo do mesmo guarda-chuva, com regras de negócio independentes.",
  },
  {
    icon: Network,
    title: "Hierarquia Própria",
    desc: "Sub-adquirente, white labels, operadores e estabelecimentos por nível. A árvore de repasses flui automaticamente.",
  },
  {
    icon: Building2,
    title: "Unidades Regionais",
    desc: "Organize a operação comercial por unidades internas e regiões, com metas e comissionamento descentralizados.",
  },
];

export function ModularFeatures() {
  return (
    <section className="bg-[#ffffff] py-32 border-b border-[#eef0f3]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Section Header */}
          <div className="lg:w-1/3">
            <FadeIn className="sticky top-32">
              <span className="text-xs font-mono tracking-widest uppercase text-[#7c828a] mb-6 block">
                01 // Modularidade
              </span>
              <h2 className="font-display text-4xl font-normal tracking-tight text-[#0a0b0d] mb-6 leading-tight">
                Ambientes isolados. Gestão unificada.
              </h2>
              <p className="text-[#5b616e] text-lg leading-relaxed">
                A estrutura White Label foi projetada com princípios de arquitetura modular. 
                Construímos as paredes que separam as operações, mantendo o controle consolidado nas suas mãos.
              </p>
            </FadeIn>
          </div>

          {/* Swiss Modernism Grid */}
          <div className="lg:w-2/3">
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((f, i) => (
                <StaggerItem key={i} className="flex flex-col relative group">
                  {/* Subtle hover line indicator */}
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-transparent group-hover:bg-[#0052ff] transition-colors duration-300 hidden md:block" />
                  
                  <div className="h-12 w-12 rounded-xl bg-[#f7f7f7] flex items-center justify-center mb-6 text-[#0a0b0d] group-hover:text-[#0052ff] transition-colors duration-300">
                    <f.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-display text-xl font-medium text-[#0a0b0d] mb-3">
                    {f.title}
                  </h3>
                  
                  <p className="text-[#5b616e] leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

        </div>
      </Container>
    </section>
  );
}
