# LTCard — Plataforma de Operações de Pagamento

Landing page de alta performance inspirada em [aditum.com.br](https://www.aditum.com.br/),
para uma plataforma que permite lançar e escalar operações de pagamento
(subadquirente, fintech, White Label).

## Stack

- **Next.js 16** (App Router) + **React 19** — geração estática (SSG)
- **Tailwind CSS v4** — design tokens em [`app/globals.css`](app/globals.css)
- **motion** (Framer Motion) — animações de entrada / scroll-reveal
- **lucide-react** — ícones (SVG)
- **TypeScript**

## Princípios de design

- Paleta **sóbria**, sem cores gritantes nem gradientes coloridos
  (neutros grafite/branco + 1 acento teal discreto)
- **100% responsivo** (mobile, tablet, desktop)
- Performance: fontes via `next/font`, página estática, JS de cliente
  isolado em pequenas "ilhas" (header, hero, wrappers de animação)
- Acessibilidade: respeita `prefers-reduced-motion`, foco visível, HTML semântico

## Rodando

```bash
npm install
npm run dev      # desenvolvimento  → http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

## Estrutura

```
app/
  layout.tsx        # fontes, metadata/SEO, <html lang="pt-BR">
  globals.css       # design tokens (cores, tipografia, utilitários)
  page.tsx          # composição de todas as seções
components/
  layout/           # Header (menu mobile), Footer, Logo
  sections/         # uma seção por arquivo (hero, white-label, ...)
  ui/               # primitivos (Button, Section, Pill, CheckList, ...)
  motion.tsx        # FadeIn, Stagger, HoverLift (animações)
lib/utils.ts        # helper cn()
```

## Adicionar fotos, SVGs e animações

Os pontos de mídia já estão prontos como placeholders.
Veja **[ASSETS.md](ASSETS.md)** para o mapa de slots e como substituir.
