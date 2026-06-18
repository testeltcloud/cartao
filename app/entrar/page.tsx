import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export const metadata: Metadata = {
  title: "Entrar",
  description: "Acesse a área do cliente da LTCard.",
  alternates: { canonical: "/entrar" },
};

const fieldBase =
  "w-full rounded-xl border border-line bg-background px-4 py-2.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function EntrarPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center py-32 sm:py-36">
        <Container className="max-w-md">
          <div className="rounded-2xl border border-line bg-background p-8 shadow-soft">
            <div className="flex justify-center">
              <Logo />
            </div>
            <h1 className="mt-6 text-center text-xl font-semibold tracking-tight text-ink">
              Área do cliente
            </h1>
            <p className="mt-2 text-center text-sm text-muted">
              Acesse o painel da sua operação.
            </p>

            <div className="mt-7 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  E-mail
                </label>
                <input id="email" type="email" className={fieldBase} placeholder="voce@empresa.com" />
              </div>
              <div>
                <label htmlFor="senha" className="mb-1.5 block text-sm font-medium text-ink-soft">
                  Senha
                </label>
                <input id="senha" type="password" className={fieldBase} placeholder="••••••••" />
              </div>
              <Button href="#" variant="primary" size="lg" className="w-full">
                Entrar
              </Button>
            </div>

            <p className="mt-6 text-center text-xs text-faint">
              Portal em configuração. Ainda não tem acesso?{" "}
              <Link href="/contato" className="font-medium text-accent hover:underline">
                Fale com um especialista
              </Link>
              .
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
