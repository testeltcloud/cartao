import { ArrowRight, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const PILLARS = [
  "White Label",
  "White Label Master",
  "Conciliação Inteligente",
  "IA de Expansão Comercial",
];

/** Helper para a animação de entrada via CSS (classe + atraso). */
function anim(delay: number): React.CSSProperties {
  return { "--anim-delay": `${delay}s` } as React.CSSProperties;
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Fundo sutil — grade pontilhada + clarão suave, sem gradiente forte */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-soft/70 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Coluna de texto */}
          <div className="max-w-2xl">
            <div className="anim-fade-up" style={anim(0)}>
              <Pill tone="accent" className="mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Plataforma de operações de pagamento
              </Pill>
            </div>

            <h1
              className="anim-fade-up text-display font-semibold tracking-tight text-ink"
              style={anim(0.08)}
            >
              A plataforma para lançar e escalar operações de pagamento
            </h1>

            <p
              className="anim-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
              style={anim(0.16)}
            >
              Crie sua própria subadquirente, fintech ou operação white label em
              minutos. Uma plataforma completa para gestão de pagamentos,
              conciliação, compliance, vendas e crescimento comercial — pronta
              para operar com a sua marca.
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
              <Button href="#contato" variant="primary" size="lg">
                Solicitar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <Button href="#contato" variant="outline" size="lg">
                Falar com Especialista
              </Button>
            </div>
          </div>

          {/* Coluna visual — slot principal de mídia/animação */}
          <div className="anim-fade-up relative" style={anim(0.25)}>
            <MediaPlaceholder
              kind="animation"
              label="Dashboard / animação do produto"
              ratio="4/3"
              className="shadow-lift"
            />

            {/* Cards flutuantes — placeholders para microanimações/dados */}
            <FloatingCard
              className="-left-4 top-10 sm:-left-8"
              icon={TrendingUp}
              title="TPV em tempo real"
              value="R$ 0,00"
              delay={0.6}
            />
            <FloatingCard
              className="-right-3 bottom-10 sm:-right-6"
              icon={ShieldCheck}
              title="Pré-compliance"
              value="Monitorando"
              delay={0.75}
            />
            <FloatingCard
              className="left-6 -bottom-5"
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
  value: string;
  delay: number;
}) {
  return (
    <div
      style={anim(delay)}
      className={`anim-fade-up absolute hidden items-center gap-3 rounded-xl border border-line bg-background/90 px-3.5 py-3 shadow-lift backdrop-blur-sm sm:flex ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
      </span>
      <div className="leading-tight">
        <p className="text-[0.7rem] uppercase tracking-wide text-faint">
          {title}
        </p>
        <p className="text-sm font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
}
