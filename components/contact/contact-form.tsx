"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldBase =
  "w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <Check className="h-6 w-6" strokeWidth={3} aria-hidden />
        </span>
        <h2 className="mt-5 text-lg font-semibold text-ink">
          Recebemos seu contato
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Em breve um especialista vai falar com você. Obrigado pelo interesse na
          LTCard.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Placeholder: conectar a um endpoint/CRM/e-mail quando disponível.
        setSent(true);
      }}
      className="rounded-2xl border border-line bg-background p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-ink-soft">
            Nome
          </label>
          <input id="nome" name="nome" required className={fieldBase} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-ink-soft">
            Empresa
          </label>
          <input id="empresa" name="empresa" className={fieldBase} placeholder="Nome da empresa" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
            E-mail
          </label>
          <input id="email" name="email" type="email" required className={fieldBase} placeholder="voce@empresa.com" />
        </div>
        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-ink-soft">
            Telefone
          </label>
          <input id="telefone" name="telefone" type="tel" className={fieldBase} placeholder="(00) 00000-0000" />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-ink-soft">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          className={fieldBase}
          placeholder="Conte um pouco sobre sua operação"
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="mt-6 w-full sm:w-auto">
        Enviar mensagem
      </Button>
    </form>
  );
}
