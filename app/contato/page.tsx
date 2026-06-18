import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/page/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description:
    "Fale com um especialista da LTCard e descubra como lançar a sua operação de pagamentos.",
  alternates: { canonical: "/contato" },
};

const CANAIS = [
  { icon: Mail, label: "E-mail", value: "contato@LTCard.com.br", href: "mailto:contato@LTCard.com.br" },
  { icon: Phone, label: "Telefone", value: "(00) 0000-0000", href: "tel:+550000000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "Fale agora", href: "#" },
  { icon: MapPin, label: "Endereço", value: "Brasil", href: undefined },
];

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Fale Conosco"
          title="Vamos lançar a sua operação juntos"
          lead="Preencha o formulário e um especialista vai falar com você para entender a sua operação e montar a melhor proposta."
          breadcrumbs={[{ label: "Início", href: "/" }, { label: "Fale Conosco" }]}
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <FadeIn>
              <ContactForm />
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-lg font-semibold text-ink">
                Outros canais
              </h2>
              <p className="mt-2 text-sm text-muted">
                Prefere falar direto? Use um dos canais abaixo.
              </p>
              <ul className="mt-6 space-y-4">
                {CANAIS.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <span className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-accent">
                        <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-faint">
                          {c.label}
                        </span>
                        <span className="block text-sm font-medium text-ink">
                          {c.value}
                        </span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="block rounded-xl transition-colors hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
