import {
  Network,
  Smartphone,
  Landmark,
  Handshake,
  Store,
  CreditCard,
  Boxes,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { FeatureCard } from "@/components/ui/feature-card";

const AUDIENCES = [
  { icon: Network, title: "Subadquirentes" },
  { icon: Smartphone, title: "Fintechs" },
  { icon: Landmark, title: "Bancos Digitais" },
  { icon: Handshake, title: "ISOs e Correspondentes" },
  { icon: Store, title: "Redes Comerciais" },
  { icon: CreditCard, title: "Empresas de Meios de Pagamento" },
  { icon: Boxes, title: "Grupos que desejam operar White Label" },
];

export function Audience() {
  return (
    <Section id="para-quem" tone="surface">
      <SectionHeading
        eyebrow="Para quem é"
        title="Desenvolvido para empresas que querem crescer no mercado financeiro"
        lead="Uma base tecnológica única que se adapta ao seu modelo de negócio do primeiro estabelecimento credenciado à operação de grande escala."
        maxWidth="max-w-3xl"
      />

      <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {AUDIENCES.map((a) => (
          <StaggerItem key={a.title}>
            <FeatureCard icon={a.icon} title={a.title} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
