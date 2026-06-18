import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Pagare — Plataforma de Operações de Pagamento";
const siteDescription =
  "Lance e escale sua subadquirente, fintech ou operação White Label em minutos. Gestão de pagamentos, conciliação, compliance, vendas e IA de expansão comercial em uma plataforma só.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pagare.com.br"),
  title: {
    default: siteName,
    template: "%s — Pagare",
  },
  description: siteDescription,
  applicationName: "Pagare",
  keywords: [
    "subadquirente",
    "white label pagamentos",
    "conciliação financeira",
    "fintech",
    "meios de pagamento",
    "pré-compliance",
    "IA expansão comercial",
  ],
  authors: [{ name: "Pagare" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Pagare",
    title: siteName,
    description: siteDescription,
    url: "https://pagare.com.br",
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
      className={`${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-ink flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
