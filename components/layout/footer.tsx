import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "@/components/ui/container";

const COLUMNS = [
  {
    title: "Soluções",
    links: [
      { label: "Conciliação", href: "/solucoes/conciliacao" },
      { label: "POS e TEF", href: "/solucoes/pos-e-tef" },
      { label: "Antifraude", href: "/solucoes/antifraude" },
      { label: "Orquestração de Pagamento", href: "/solucoes/orquestracao" },
      { label: "Registradora de Recebíveis", href: "/solucoes/registradora" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Institucional", href: "/institucional" },
      { label: "Produtos", href: "/produtos" },
      { label: "Blog", href: "/blog" },
      { label: "Suporte", href: "/suporte" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Fale Conosco", href: "/contato" },
      { label: "Entrar", href: "/entrar" },
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
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              A plataforma completa para lançar, operar e escalar operações de
              pagamento com a sua marca.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LTCard. Todos os direitos reservados.</p>
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
