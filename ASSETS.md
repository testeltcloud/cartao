# Guia de Mídias (fotos, SVGs, animações)

O site já está pronto com **placeholders** em todos os pontos onde entram
imagens, ilustrações SVG, vídeos e animações. Cada placeholder mantém o
`aspect-ratio` correto para **não causar layout shift** quando você trocar
pelo arquivo final.

## Onde colocar os arquivos

Coloque os arquivos em `public/assets/`. Eles ficam disponíveis em
`/assets/nome-do-arquivo.ext`.

## Como substituir um placeholder

Todos os slots usam o componente
[`MediaPlaceholder`](components/ui/media-placeholder.tsx)
(busque por `data-media-slot` no código) e os logos usam `data-logo-slot`.

### 1) Foto / imagem → use `next/image`

```tsx
import Image from "next/image";

<div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
  <Image
    src="/assets/dashboard.png"
    alt="Dashboard do produto"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
    priority // só no hero
  />
</div>
```

### 2) SVG / ilustração

```tsx
import Grafico from "@/public/assets/grafico.svg"; // ou <img src="/assets/..."/>
<Grafico className="h-full w-full" />
```

### 3) Animação (Lottie / vídeo)

- **Lottie**: `npm i lottie-react` e renderize dentro do frame.
- **Vídeo**: `<video autoPlay muted loop playsInline className="h-full w-full object-cover" />`

## Mapa dos slots por seção

| Seção                | Arquivo (componente)                                   | Slot sugerido                              | Proporção |
| -------------------- | ------------------------------------------------------ | ------------------------------------------ | --------- |
| Hero                 | [hero.tsx](components/sections/hero.tsx)               | Dashboard / animação do produto + 3 cards  | 4/3       |
| White Label Master   | [white-label.tsx](components/sections/white-label.tsx) | Diagrama de hierarquia multiempresa        | 4/3       |
| Gestão Comercial     | [commercial.tsx](components/sections/commercial.tsx)   | Painel de ranking / metas                  | 4/3       |
| IA de Expansão       | [ai-expansion.tsx](components/sections/ai-expansion.tsx)| Mapa de calor / oportunidades             | 4/3       |
| Pré-Compliance       | [compliance.tsx](components/sections/compliance.tsx)   | Painel de alertas / anomalias              | 4/3       |
| Ecossistema          | [ecosystem.tsx](components/sections/ecosystem.tsx)     | Logos reais (CERC, Núclea, etc.) na faixa  | livre     |

## Logo

A marca é um SVG inline em [logo.tsx](components/layout/logo.tsx). Troque o
`<svg>` pela sua marca (mantenha `currentColor` para herdar as cores).
