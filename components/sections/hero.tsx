import Image from "next/image";
import { ArrowRight, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { CountUp } from "@/components/ui/count-up";
// Vídeo do hero temporariamente desativado (componente mantido para reativar depois).
// import { HeroVideo } from "./hero-video";

const PILLARS = [
  "White Label",
  "Estrutura White Label",
  "Conciliação Inteligente",
  "IA de Expansão Comercial",
  "Gestão de Taxas e Antecipação",
];

/** Helper para a animação de entrada via CSS (classe + atraso). */
function anim(delay: number): React.CSSProperties {
  return { "--anim-delay": `${delay}s` } as React.CSSProperties;
}

export function Hero() {
  return (
    <section
      id="top"
      className="sticky top-0 z-0 overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Fundo sutil — grade pontilhada + clarão suave, sem gradiente forte */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl" />

      <Container>
        <div className="lg:-mt-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Coluna de texto */}
          <div className="max-w-2xl">
            <div className="anim-fade-up" style={anim(0)}>
              <Pill tone="accent" className="mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Plataforma de gestão de cartões e white label
              </Pill>
            </div>

            <h1
              className="anim-fade-up text-[clamp(2.125rem,4.4vw,4.5rem)] font-semibold leading-[1.07] tracking-[-0.02em] text-ink"
              style={anim(0.08)}
            >
              Gestão completa para operações de cartões, sub-adquirente e{" "}
              <span className="text-accent">white label</span>
            </h1>

            <p
              className="anim-fade-up mt-6 max-w-xl text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed text-muted"
              style={anim(0.16)}
            >
              Transforme sua marca em uma operação completa de cartões. Gerencie
              cartões, estabelecimentos, vendas, conciliação, compliance,
              antecipação e performance comercial em uma plataforma white label
              preparada para crescer junto com o seu negócio.
            </p>

            <div
              className="anim-fade-up mt-7 flex flex-wrap gap-2"
              style={anim(0.24)}
            >
              {PILLARS.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </div>

            <div
              className="anim-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
              style={anim(0.32)}
            >
              <Button href="/contato" variant="primary" size="lg">
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contato" variant="outline" size="lg">
                Falar com Especialista
              </Button>
            </div>
          </div>

          {/* Coluna visual — slot principal de mídia/animação */}
          <div className="anim-fade-up relative lg:-mt-50" style={anim(0.25)}>
            <MediaPlaceholder kind="animation" ratio="18/12" className="shadow-lift">
              <Image
               src="/Gemini_Generated_Image_mb46dvmb46dvmb46.png"
                alt="Operação de cartões e white label da LTCard"
                fill
                priority
                sizes="(max-width: 1224px) 92vw, 56vw"
                className="object-cover"
              />
            </MediaPlaceholder>

            {/* Cards flutuantes — placeholders para microanimações/dados */}
            <FloatingCard
              className="-left-3 -top-3 sm:-left-5 sm:-top-5"
              icon={TrendingUp}
              title="TPV em tempo real"
              value={<CountUp to={1284503.9} live />}
              delay={0.6}
            />
            <FloatingCard
              className="-right-3 -bottom-3 sm:-right-5 sm:-bottom-5"
              icon={ShieldCheck}
              title="Pré-compliance"
              value="Monitorando"
              delay={0.75}
            />
            <FloatingCard
              className="-left-3 bottom-8 sm:-left-5 sm:bottom-12"
              icon={Layers}
              title="Operações White Label"
              value="Multiempresa"
              delay={0.9}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FloatingCard({
  className,
  icon: Icon,
  title,
  value,
  delay,
}: {
  className?: string;
  icon: React.ElementType;
  title: string;
  value: React.ReactNode;
  delay: number;
}) {
  return (
    <div
      style={anim(delay)}
      className={`anim-fade-up absolute flex items-center gap-2 rounded-xl border border-white/50 bg-background/40 px-2.5 py-1.5 shadow-[0_10px_30px_-10px_rgba(14,23,38,0.5),inset_0_1px_0_0_rgba(255,255,255,0.65)] backdrop-blur-2xl backdrop-saturate-150 [text-shadow:0_1px_2px_rgba(255,255,255,0.45)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 ${className}`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent shadow-sm sm:h-9 sm:w-9 sm:rounded-lg">
        <Icon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.8} aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-[0.5rem] font-semibold uppercase tracking-wide text-ink-soft sm:text-[0.7rem]">
          {title}
        </p>
        <p className="text-[0.65rem] font-bold text-ink sm:text-sm">{value}</p>
      </div>
    </div>
  );
}
