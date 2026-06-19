"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, HoverLift } from "@/components/motion";

type Item = { title: string; image: string };

const AUDIENCES: Item[] = [
  { title: "Sub-adquirente", image: "/image/Audience/sub-adquirente.png" },
  { title: "Fintechs", image: "/image/Audience/fintechs.jpeg" },
  { title: "Bancos Digitais", image: "/image/Audience/bancos Digitais.jpg" },
  { title: "Redes Comerciais", image: "/image/Audience/Redes Comerciais.jpg" },
  {
    title: "Empresas de Meios de Pagamento",
    image: "/image/Audience/Meios de Pagamento.PNG",
  },
  {
    title: "Grupos que desejam operar White Label",
    image: "/image/Audience/whitelabel.PNG",
  },
];

// Frente = 3 primeiros · verso = 3 de baixo.
const PAIRS: [Item, Item][] = [
  [AUDIENCES[0], AUDIENCES[3]],
  [AUDIENCES[1], AUDIENCES[4]],
  [AUDIENCES[2], AUDIENCES[5]],
];

const HEADING = {
  eyebrow: "Para quem é",
  title:
    "Desenvolvido para empresas que querem crescer no mercado financeiro",
  lead: "Uma base tecnológica única que se adapta ao seu modelo de negócio do primeiro estabelecimento credenciado à operação de grande escala.",
};

/** Face do card (mesmo visual da frente e do verso). */
function CardFace({ title, image }: Item) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-background shadow-soft">
      <div className="flex min-h-[4.75rem] items-start gap-2.5 px-5 pb-4 pt-5">
        <span
          className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
          aria-hidden
        />
        <h3 className="text-base font-semibold leading-snug text-ink">
          {title}
        </h3>
      </div>
      <div className="relative mx-2 mb-2 flex-1 overflow-hidden rounded-xl bg-surface">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
}

function FlipCard({
  front,
  back,
  innerRef,
}: {
  front: Item;
  back: Item;
  innerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="[perspective:1400px]">
      <div
        ref={innerRef}
        className="relative h-[clamp(19rem,44vh,26rem)] [transform-style:preserve-3d] will-change-transform"
      >
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:translateZ(0.1px)]">
          <CardFace {...front} />
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <CardFace {...back} />
        </div>
      </div>
    </div>
  );
}

/** Grade estática (mobile / prefers-reduced-motion) — mostra os 6. */
function StaticGrid() {
  return (
    <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {AUDIENCES.map((a) => (
        <StaggerItem key={a.title}>
          <HoverLift className="h-[20rem] transition-transform duration-300">
            <CardFace {...a} />
          </HoverLift>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

// Faixas de progresso (escalonadas) por card + easing.
const RANGES: [number, number][] = [
  [0.0, 0.6],
  [0.18, 0.78],
  [0.36, 0.96],
];
const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function Audience() {
  const [simple, setSimple] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const c0 = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const cards = [c0, c1, c2];

  // Mobile (<lg) ou movimento reduzido → grade estática (sem pin/flip).
  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 1023px)");
    const sync = () => setSimple(mqReduce.matches || mqMobile.matches);
    sync();
    mqReduce.addEventListener("change", sync);
    mqMobile.addEventListener("change", sync);
    return () => {
      mqReduce.removeEventListener("change", sync);
      mqMobile.removeEventListener("change", sync);
    };
  }, []);

  // Scroll → flip escalonado dos 3 cards.
  useEffect(() => {
    if (simple) return;
    const track = trackRef.current;
    if (!track) return;
    const refs = [c0, c1, c2];

    let raf = 0;
    const update = () => {
      raf = 0;
      const dist = track.offsetHeight - window.innerHeight;
      if (dist <= 0) return;
      const p = clamp(-track.getBoundingClientRect().top / dist, 0, 1);
      RANGES.forEach(([s, e], i) => {
        const raw = clamp((p - s) / (e - s), 0, 1);
        const k = easeInOut(raw);
        const lift = Math.sin(raw * Math.PI); // 0→1→0 (dá um "respiro" no meio)
        const el = refs[i].current;
        if (el) {
          el.style.transform = `rotateY(${k * 180}deg) scale(${1 - lift * 0.06})`;
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [simple]);

  return (
    <section id="para-quem" className="relative bg-surface">
      {simple ? (
        <Container className="py-20 sm:py-24 lg:py-28">
          <SectionHeading {...HEADING} maxWidth="max-w-3xl" />
          <StaticGrid />
        </Container>
      ) : (
        // Trilho alto: o conteúdo fica fixo (sticky) e o scroll vira flip.
        <div ref={trackRef} className="h-[220vh]">
          <div className="sticky top-0 flex h-screen flex-col justify-center py-16">
            <Container>
              <SectionHeading {...HEADING} maxWidth="max-w-3xl" />
              <div className="mt-10 grid grid-cols-3 gap-6">
                {PAIRS.map(([front, back], i) => (
                  <FlipCard
                    key={front.title}
                    front={front}
                    back={back}
                    innerRef={cards[i]}
                  />
                ))}
              </div>
            </Container>
          </div>
        </div>
      )}
    </section>
  );
}
