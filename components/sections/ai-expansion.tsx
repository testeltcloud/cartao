import { Sparkles, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ImageReveal } from "@/components/ui/image-reveal";
import { GsapParallax } from "@/components/gsap-parallax";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Pill } from "@/components/ui/pill";

const IDENTIFICA = [
  "Segmentos com maior potencial",
  "Regiões pouco exploradas",
  "Oportunidades de aquisição",
  "Tendências de mercado",
  "Concentração de estabelecimentos",
  "Potencial de TPV por região",
];

export function AiExpansion() {
  return (
    <section
      id="ia"
      className="relative scroll-mt-24 overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Fundo com onda azul — gradiente forte embaixo, clareando para o topo */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <svg
          className="absolute inset-x-0 top-0 w-full"
          viewBox="0 0 1440 720"
          preserveAspectRatio="xMidYMin meet"
          fill="none"
        >
          <defs>
            <linearGradient id="iaWave" x1="0" y1="0" x2="0.12" y2="1">
              <stop offset="0%" stopColor="#a8d6ec" stopOpacity="0" />
              <stop offset="62%" stopColor="#a8d6ec" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#a8d6ec" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#iaWave)"
            d="M0 0 H1440 V430 C1230 560 1062 392 835 474 C604 566 360 426 0 556 Z"
          />
        </svg>
      </div>

      {/* Linha de crescimento — entra por trás da foto */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
        <svg
          className="h-full w-full filter-[drop-shadow(0_3px_8px_rgba(46,144,204,0.22))]"
          viewBox="0 0 1440 760"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="iaLine" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#2e90cc" stopOpacity="0" />
              <stop offset="22%" stopColor="#2e90cc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#36a6e0" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M-40 695 C 150 695, 235 600, 360 615 S 560 675, 690 600 S 905 465, 1085 478 S 1360 470, 1520 300"
            stroke="url(#iaLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <Pill
                tone="accent"
                className="mb-5 border-[#2f93cf]/25 bg-[#e4f1fb] text-[#1f6ea1]"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                IA para Expansão Comercial
              </Pill>
              <h2 className="text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
                Descubra onde sua operação deve{" "}
                <span className="text-[#2f93cf]">crescer</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Usamos Inteligência Artificial para analisar o mercado e
                identificar oportunidades de expansão com base em CNAE, volume
                transacionado e comportamento comercial.
              </p>
            </FadeIn>

            {/* Console de análise da IA */}
            <FadeIn delay={0.1} className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1726] shadow-[0_28px_60px_-26px_rgba(13,23,38,0.55)]">
                {/* Barra da janela */}
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-2 font-mono text-xs text-white/45">
                    analise-mercado.ia
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-[#4cb5e8]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4cb5e8] opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4cb5e8]" />
                    </span>
                    analisando
                  </span>
                </div>

                {/* Saída */}
                <div className="p-4">
                  <p className="mb-3 font-mono text-xs text-white/40">
                    › identificando oportunidades de expansão…
                  </p>
                  <Stagger className="space-y-2" gap={0.08}>
                    {IDENTIFICA.map((item) => (
                      <StaggerItem key={item} y={8}>
                        <div className="flex items-center gap-2.5 font-mono text-sm">
                          <Check
                            className="h-3.5 w-3.5 shrink-0 text-[#4cb5e8]"
                            strokeWidth={3}
                            aria-hidden
                          />
                          <span className="text-white/85">{item}</span>
                          <span className="ml-auto hidden text-[10px] uppercase tracking-wider text-white/25 sm:inline">
                            detectado
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>

                  {/* Linha final com cursor */}
                  <div className="mt-3.5 flex items-center gap-2 border-t border-white/10 pt-3.5 font-mono text-sm text-white/75">
                    <span className="text-[#4cb5e8]">›</span>
                    Transforme dados em estratégia comercial
                    <span
                      className="ml-0.5 inline-block h-4 w-[7px] animate-pulse bg-[#4cb5e8]/80"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="relative lg:mt-12">
            <GsapParallax amount={7}>
              <ImageReveal
                src="/image/Audience/ia2.jpeg"
                alt="Inteligência Artificial analisando dados de mercado"
                ratio="16/9"
                className="rounded-[2rem] sm:rounded-[2.5rem]"
              />
            </GsapParallax>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
