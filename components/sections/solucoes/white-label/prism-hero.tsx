"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Layers, Network, Store } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { motion } from "framer-motion";

export function PrismHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0a0b0d] text-white pt-32 pb-24 border-b border-white/5">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_70%_50%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content (Left) */}
          <div className="lg:w-1/2">
            <FadeIn>
              <span className="text-xs font-mono tracking-widest uppercase text-white/40 mb-6 block">
                Soluções // Estrutura White Label
              </span>
              {/* Using weight 400 for Coinbase editorial calm */}
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white mb-8">
                Opere com a <br />
                <span className="text-white/60">sua marca.</span>
              </h1>
              
              <p className="text-lg text-white/50 font-light tracking-wide leading-relaxed max-w-lg mb-12">
                Organize toda a sua operação em uma estrutura hierárquica robusta: sub-adquirente, white labels, operadores e estabelecimentos. Cada grupo operando em seu ambiente isolado, com identidade visual própria.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href="/contato"
                  size="lg"
                  className="bg-white text-[#0a0b0d] hover:bg-white/90 border-none transition-colors duration-300 px-8 h-14"
                >
                  Solicitar Demonstração
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  href="/contato"
                  size="lg"
                  className="bg-transparent border border-white/10 text-white hover:bg-white/5 transition-colors duration-300 px-8 h-14"
                >
                  Falar com Especialista
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Prism Stack (Right) */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0 relative perspective-1000 mt-16 lg:mt-0">
            <FadeIn delay={0.2} className="relative h-[400px] sm:h-[500px]">
              
              {/* Layer 1: Sub-adquirente */}
              <div className="absolute inset-x-0 bottom-0 bg-[#16181c] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Network className="h-5 w-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Nível Master</div>
                    <div className="text-xs text-white/40">Visão global da operação</div>
                  </div>
                </div>
              </div>

              {/* Layer 2: White Label */}
              <motion.div 
                className="absolute inset-x-4 bottom-16 bg-[#1a1c20] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] z-20"
                animate={{ y: [0, -40, -40, 0, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", times: [0, 0.11, 0.66, 0.77, 1], repeat: Infinity }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">White Label / Partner</div>
                    <div className="text-xs text-white/40">Isolamento multi-tenant</div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 3: Operador / Regional */}
              <motion.div 
                className="absolute inset-x-8 bottom-32 bg-[#1e2025] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] z-30"
                animate={{ y: [0, -80, -80, 0, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", times: [0, 0.11, 0.66, 0.77, 1], repeat: Infinity }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Operador Regional</div>
                    <div className="text-xs text-white/60">Controle de portfólio</div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 4: Estabelecimento */}
              <motion.div 
                className="absolute inset-x-12 bottom-48 bg-[#ffffff] rounded-2xl p-6 sm:p-8 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.8)] z-40"
                animate={{ y: [0, -120, -120, 0, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", times: [0, 0.11, 0.66, 0.77, 1], repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#0a0b0d] flex items-center justify-center">
                    <Store className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#0a0b0d]">Estabelecimento</div>
                    <div className="text-xs text-[#0a0b0d]/60">Interface final do cliente</div>
                  </div>
                </div>
                {/* Decorative UI elements inside top card */}
                <div className="mt-6 space-y-3">
                  <div className="h-2 w-full bg-[#f7f7f7] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[#0a0b0d] rounded-full" />
                  </div>
                  <div className="h-2 w-4/5 bg-[#f7f7f7] rounded-full" />
                </div>
              </motion.div>

            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
