"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

// Âncoras com prefixo "/" para funcionar a partir de qualquer rota (ex.: /blog).
const NAV = [
  { label: "Plataforma", href: "/#para-quem" },
  { label: "White Label", href: "/#white-label" },
  { label: "Comercial", href: "/#comercial" },
  { label: "Conciliação", href: "/#conciliacao" },
  { label: "IA & Risco", href: "/#ia" },
  { label: "Tecnologia", href: "/#tecnologia" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <Link href="/" className="shrink-0" aria-label="Pagare — início">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/#contato" variant="ghost" size="sm">
              Falar com Especialista
            </Button>
            <Button href="/#contato" variant="primary" size="sm">
              Solicitar Demonstração
            </Button>
          </div>

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

      {/* Menu mobile — animação de altura via grid-rows (CSS puro) */}
      <div
        className={cn(
          "grid overflow-hidden bg-background transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open
            ? "grid-rows-[1fr] border-b border-line opacity-100"
            : "grid-rows-[0fr] border-b border-transparent opacity-0"
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-ink-soft transition-colors hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button
                href="/#contato"
                variant="outline"
                size="md"
                onClick={() => setOpen(false)}
              >
                Falar com Especialista
              </Button>
              <Button
                href="/#contato"
                variant="primary"
                size="md"
                onClick={() => setOpen(false)}
              >
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
