"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const SOLUCOES = [
  { label: "Estrutura White Label", href: "/solucoes/estrutura-white-label" },
  { label: "Controle de Acesso e Permissões", href: "/solucoes/controle-de-acesso" },
  { label: "Gestão Comercial", href: "/solucoes/gestao-comercial" },
  { label: "Antecipação de Recebíveis", href: "/solucoes/antecipacao-de-recebiveis" },
  { label: "Conciliação", href: "/solucoes/conciliacao" },
  { label: "Registradora de Recebíveis", href: "/solucoes/registradora" },
  { label: "Dashboards e Relatórios", href: "/solucoes/dashboards-e-relatorios" },
  { label: "Inteligência de Mercado e Operação", href: "/solucoes/inteligencia-de-mercado" },
  { label: "Monitoramento de Risco", href: "/solucoes/monitoramento-de-risco" },
];

const NAV = [
  { label: "Início", href: "/" },
  { label: "Institucional", href: "/institucional" },
  { label: "Soluções", href: "/solucoes", children: SOLUCOES },
  { label: "Blog", href: "/blog" },
  { label: "Suporte", href: "/suporte" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-line bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between lg:h-18">
          <Link href="/" className="shrink-0" aria-label="LTCard — início">
            <Logo />
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors hover:bg-surface hover:text-ink",
                      isActive(item.href) ? "text-ink" : "text-muted"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </Link>
                  {/* Painel do dropdown (CSS hover + focus-within) */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-background p-2 shadow-lift">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={cn(
                            "block rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-surface",
                            isActive(c.href)
                              ? "bg-surface text-ink"
                              : "text-ink-soft"
                          )}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors hover:bg-surface hover:text-ink",
                    isActive(item.href) ? "text-ink" : "text-muted"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTAs desktop */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/entrar" variant="ghost" size="sm">
              Entrar
            </Button>
            <Button href="/contato" variant="primary" size="sm">
              Fale Conosco
            </Button>
          </div>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "grid overflow-hidden bg-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open
            ? "grid-rows-[1fr] border-b border-line opacity-100"
            : "grid-rows-[0fr] border-b border-transparent opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container-page max-h-[calc(100vh-4rem)] overflow-y-auto py-4">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.href} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-base font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                    <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-ink-soft transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-4 flex flex-col gap-2">
              <Button
                href="/entrar"
                variant="outline"
                size="md"
                onClick={() => setOpen(false)}
              >
                Entrar
              </Button>
              <Button
                href="/contato"
                variant="primary"
                size="md"
                onClick={() => setOpen(false)}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
