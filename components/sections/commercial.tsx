import Image from "next/image";
import { ArrowRight, LineChart } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { FadeIn, HoverLift } from "@/components/motion";
import { cn } from "@/lib/utils";

const VIEWS = ["Visão geral", "Metas & ranking", "Carteira", "Crescimento"];

type Card = { title: string; status: string; live?: boolean };
type Column = { label: string; offset: string; cards: Card[] };

const BOARD: Column[] = [
  {
    label: "Metas",
    offset: "lg:pt-4",
    cards: [
      { title: "Metas por vendedor", status: "Por vendedor" },
      { title: "Metas por equipe", status: "Por equipe" },
      { title: "Metas por gestor", status: "Por gestor" },
    ],
  },
  {
    label: "Performance",
    offset: "lg:pt-12",
    cards: [
      { title: "Ranking comercial", status: "Tempo real", live: true },
      { title: "Performance por região", status: "Por região" },
    ],
  },
  {
    label: "Carteira & TPV",
    offset: "lg:pt-7",
    cards: [
      { title: "Controle de TPV", status: "Tempo real", live: true },
      { title: "Gestão de carteira", status: "Carteira" },
    ],
  },
  {
    label: "Crescimento",
    offset: "lg:pt-16",
    cards: [
      { title: "Indicadores de crescimento", status: "Tempo real", live: true },
    ],
  },
];

function BoardCard({ title, status, live }: Card) {
  return (
    <HoverLift className="overflow-hidden rounded-xl border border-line bg-background shadow-soft transition-colors duration-300 hover:border-line-strong hover:shadow-lift">
      <span
        className={cn("block h-[3px] w-full", live ? "bg-accent" : "bg-line-strong")}
        aria-hidden
      />
      <div className="p-3.5">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="mt-2.5 flex items-center gap-1.5">
          {live ? (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ) : (
            <span className="h-1.5 w-1.5 rounded-full bg-faint/60" aria-hidden />
          )}
          <span className="text-xs text-muted">{status}</span>
        </div>
      </div>
    </HoverLift>
  );
}

export function Commercial() {
  return (
    <Section
      id="comercial"
      tone="surface"
      className="pt-4 pb-10 sm:pt-6 sm:pb-12 lg:pt-6 lg:pb-10"
      containerClassName="max-w-none px-4 sm:px-6"
    >
      <FadeIn>
        <div className="relative">
          {/* Imagem (hero) — texto dentro da imagem */}
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-line shadow-lift sm:rounded-[2.5rem]">
            <Image
              src="/image/Audience/grafic.jpg"
              alt=""
              fill
              sizes="(max-width: 1344px) 96vw, 1344px"
              className="absolute inset-0 -z-20 object-cover"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/40"
              aria-hidden
            />

            <div className="mx-auto max-w-2xl px-6 pb-28 pt-12 text-center sm:px-8 sm:pb-36 sm:pt-16">
              <Eyebrow tone="onDark" className="justify-center">
                Gestão Comercial
              </Eyebrow>
              <h2 className="mt-5 text-h2 font-semibold tracking-tight text-white">
                Transforme vendas em crescimento previsível
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                Muito além da tecnologia financeira: gerencie equipes,
                vendedores e canais comerciais através de indicadores em tempo
                real.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/contato" variant="accent" size="lg">
                  Falar com especialista
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Janela completa — sobrepõe a base da imagem e vaza para baixo */}
          <div className="relative z-10 mx-3 -mt-20 overflow-hidden rounded-[1.5rem] border border-line bg-background shadow-lift sm:mx-8 sm:-mt-28">
            {/* Barra da janela */}
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden />
              <span className="ml-3 text-xs font-medium text-faint">
                Painel comercial — LTCard
              </span>
            </div>

            <div className="flex min-h-[20rem] lg:min-h-[24rem]">
              {/* Sidebar */}
              <aside className="hidden w-52 shrink-0 flex-col border-r border-line p-4 lg:flex">
                <div className="flex items-center gap-2 px-1">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <LineChart className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="text-sm font-semibold text-ink">
                    Painel Comercial
                  </span>
                </div>
                <nav className="mt-5 space-y-1">
                  {VIEWS.map((v, i) => (
                    <div
                      key={v}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm transition-colors",
                        i === 0
                          ? "bg-surface font-medium text-ink"
                          : "text-muted hover:bg-surface/70"
                      )}
                    >
                      {v}
                    </div>
                  ))}
                </nav>
                <p className="mt-auto px-3 pt-8 text-xs text-faint">
                  8 indicadores
                </p>
              </aside>

              {/* Board */}
              <div className="min-w-0 flex-1 overflow-x-auto flex flex-col">
                <div className="min-w-[680px] flex-1 flex flex-col">
                  <div className="grid grid-cols-4 border-b border-line">
                    {BOARD.map((col, i) => (
                      <div
                        key={col.label}
                        className={cn(
                          "px-4 py-3 text-xs font-medium text-faint",
                          i > 0 && "border-l border-line"
                        )}
                      >
                        {col.label}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 flex-1">
                    {BOARD.map((col, i) => (
                      <div
                        key={col.label}
                        className={cn(
                          "space-y-3 p-3",
                          col.offset,
                          i > 0 && "border-l border-line"
                        )}
                      >
                        {col.cards.map((c) => (
                          <BoardCard key={c.title} {...c} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
