import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { RevealController } from "@/components/reveal-controller";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Fonte de display (apenas para títulos) — mais caráter, menos "engessado".
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "LTCard — Plataforma de Operações de Pagamento";
const siteDescription =
  "Lance e escale sua subadquirente, fintech ou operação White Label em minutos. Gestão de pagamentos, conciliação, compliance, vendas e IA de expansão comercial em uma plataforma só.";

export const metadata: Metadata = {
  metadataBase: new URL("https://LTCard.com.br"),
  title: {
    default: siteName,
    template: "%s — LTCard",
  },
  description: siteDescription,
  applicationName: "LTCard",
  keywords: [
    "subadquirente",
    "white label pagamentos",
    "conciliação financeira",
    "fintech",
    "meios de pagamento",
    "pré-compliance",
    "IA expansão comercial",
  ],
  authors: [{ name: "LTCard" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LTCard",
    title: siteName,
    description: siteDescription,
    url: "https://LTCard.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1726",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-ink flex flex-col overflow-x-hidden">
        {/* Progressive enhancement: marca que há JS antes da primeira pintura,
            para que as animações de reveal só escondam conteúdo quando puderem
            revelá-lo. Sem JS, tudo aparece normalmente. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
        <RevealController />
      </body>
    </html>
  );
}
