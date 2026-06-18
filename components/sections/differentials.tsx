import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, HoverLift } from "@/components/motion";

const DIFERENCIAIS = [
  "White Label em minutos",
  "White Label Master nativo",
  "Gestão comercial integrada",
  "IA para expansão de mercado",
  "Conciliação por captura e EDI",
  "Monitoramento pré-compliance",
  "Integração com registradoras",
  "Plataforma 100% web",
  "Escalável e segura",
  "Pronta para crescer junto com sua operação",
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
        className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2"
        gap={0.05}
      >
        {DIFERENCIAIS.map((item) => (
          <StaggerItem key={item} y={12}>
            <HoverLift className="flex h-full items-center gap-3.5 rounded-xl border border-line bg-background p-4 transition-colors duration-300 hover:border-line-strong hover:shadow-soft">
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
