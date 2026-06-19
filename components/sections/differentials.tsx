import { Check, Zap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, HoverLift } from "@/components/motion";

const DIFERENCIAIS = [
  "White Label Master nativo",
  "Gestão comercial integrada",
  "IA para expansão de mercado",
  "Conciliação por captura e EDI",
  "Monitoramento pré-compliance",
  "Integração com registradoras",
  "Plataforma 100% web",
  "Escalável e segura",
];

export function Differentials() {
  return (
    <Section id="diferenciais">
      <SectionHeading
        align="center"
        eyebrow="Diferenciais"
        title="Por que escolher nossa plataforma?"
        maxWidth="max-w-2xl"
      />

      <Stagger
        className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        gap={0.05}
      >
        {/* Tile destaque — ocupa 2 colunas x 2 linhas no desktop */}
        <StaggerItem y={12} className="sm:col-span-2 lg:row-span-2">
          <HoverLift className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong hover:shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white">
              <Zap className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-ink">
                White Label em minutos
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                Pronta para crescer junto com sua operação — do primeiro
                estabelecimento à escala.
              </p>
            </div>
          </HoverLift>
        </StaggerItem>

        {DIFERENCIAIS.map((item) => (
          <StaggerItem key={item} y={12}>
            <HoverLift className="flex h-full items-center gap-3.5 rounded-xl border border-line bg-background p-4 transition-colors duration-300 hover:border-line-strong hover:bg-surface hover:shadow-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
              </span>
              <span className="text-[0.95rem] font-medium text-ink-soft">
                {item}
              </span>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
