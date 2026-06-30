"use client";

import { Container } from "@/components/ui/container";

const milestones = [
  {
    year: "2019",
    title: "A Gênese",
    desc: "A percepção de que a infraestrutura financeira legada estava travando o futuro das fintechs latino-americanas.",
  },
  {
    year: "2021",
    title: "O Primeiro Nó",
    desc: "Processamento da primeira transação em nossa rede proprietária, com tempo de autorização sub-30ms.",
  },
  {
    year: "2023",
    title: "Escala Monolítica",
    desc: "Atingimos 1 Bilhão de transações processadas com zero segundos de downtime sistêmico.",
  },
  {
    year: "2025",
    title: "Inteligência Intrínseca",
    desc: "Incorporação de modelos de ML direto no fluxo de autorização para detecção de anomalias em tempo real.",
  },
];

export function SculpturalTimeline() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <Container>
        <div className="max-w-xl mb-24 mx-auto text-center relative z-10">
          <span className="text-xs font-mono tracking-widest uppercase text-white/40 mb-4 block">
            02 // Jornada
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white">
            A História do Fluxo
          </h2>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex flex-col md:flex-row items-center mb-24 last:mb-0 group">
              <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-16 md:text-right' : 'md:order-2 md:justify-start md:pl-16 text-left'} w-full mb-8 md:mb-0`}>
                <div>
                  <h3 className="font-display text-2xl font-medium mb-3 text-white transition-colors duration-500">
                    {m.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-sm max-w-[280px] md:ml-auto group-hover:text-white/70 transition-colors duration-500">
                    {m.desc}
                  </p>
                </div>
              </div>
              
              <div className={`md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-start md:pl-16' : 'md:order-1 md:justify-end md:pr-16'}`}>
                <span className="font-display text-7xl md:text-8xl font-bold tracking-tighter text-white/10 group-hover:text-white/30 transition-colors duration-700">
                  {m.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
