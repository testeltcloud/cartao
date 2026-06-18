import { Logo } from "./logo";
import { Container } from "@/components/ui/container";

const COLUMNS = [
  {
    title: "Plataforma",
    links: [
      { label: "White Label Master", href: "#white-label" },
      { label: "Gestão Comercial", href: "#comercial" },
      { label: "Conciliação Inteligente", href: "#conciliacao" },
      { label: "IA de Expansão", href: "#ia" },
      { label: "Pré-Compliance", href: "#compliance" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Para quem é", href: "#para-quem" },
      { label: "Tecnologia", href: "#tecnologia" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Ecossistema", href: "#ecossistema" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Solicitar Demonstração", href: "#contato" },
      { label: "Falar com Especialista", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="text-white">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              A plataforma completa para lançar, operar e escalar operações de
              pagamento com a sua marca.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pagare. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/80">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Termos
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              LGPD
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
