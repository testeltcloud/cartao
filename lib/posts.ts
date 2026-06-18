/**
 * Fonte de dados dos artigos do blog (placeholder).
 * Substitua por um CMS/MDX quando tiver o conteúdo real — a estrutura
 * (slug, title, excerpt, date, author, category) já está pronta.
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO (YYYY-MM-DD) */
  date: string;
  author: string;
  category: string;
};

export const POSTS_PER_PAGE = 6;

export const posts: Post[] = [
  {
    slug: "papel-da-conciliacao-de-recebiveis",
    title: "O papel da conciliação de recebíveis na infraestrutura financeira",
    excerpt:
      "No ecossistema de pagamentos, a conciliação de recebíveis não é apenas uma tarefa administrativa, mas a base de sustentação da integridade financeira da operação.",
    date: "2026-06-15",
    author: "Pagare Conteúdo",
    category: "Conciliação",
  },
  {
    slug: "link-de-pagamento-camada-de-infraestrutura",
    title: "Arquitetura e funcionamento do link de pagamento na camada de infraestrutura",
    excerpt:
      "Com a expansão das transações digitais, o link de pagamento consolidou-se como um componente de software crítico para a saúde da operação.",
    date: "2026-06-11",
    author: "Pagare Conteúdo",
    category: "Tecnologia",
  },
  {
    slug: "pix-e-boleto-liquidez-e-recebiveis",
    title: "Integração de Pix e Boleto: a convergência da liquidez com a estruturação de recebíveis",
    excerpt:
      "A coexistência entre Pix e Boleto não representa uma redundância, mas sim uma simetria estratégica para a gestão de liquidez.",
    date: "2026-06-02",
    author: "Pagare Conteúdo",
    category: "Pagamentos",
  },
  {
    slug: "white-label-master-para-redes-comerciais",
    title: "White Label Master: como distribuir operações para redes comerciais",
    excerpt:
      "Entenda como uma estrutura White Label Master permite criar e distribuir novas operações com marca própria para parceiros e representantes.",
    date: "2026-05-27",
    author: "Pagare Conteúdo",
    category: "White Label",
  },
  {
    slug: "pre-compliance-monitoramento-transacional",
    title: "Pré-compliance: monitoramento transacional para antecipar riscos",
    excerpt:
      "Detectar comportamentos fora do padrão antes que se tornem problemas é o que separa uma operação reativa de uma operação preventiva.",
    date: "2026-05-20",
    author: "Pagare Conteúdo",
    category: "Compliance",
  },
  {
    slug: "ia-na-expansao-comercial-de-adquirencia",
    title: "IA na expansão comercial: onde sua operação de adquirência deve crescer",
    excerpt:
      "Modelos de IA cruzam CNAE, volume transacionado e comportamento comercial para revelar regiões e segmentos com maior potencial de TPV.",
    date: "2026-05-14",
    author: "Pagare Conteúdo",
    category: "Mercado",
  },
  {
    slug: "edi-e-arquivos-de-liquidacao",
    title: "EDI e arquivos de liquidação: precisão da captura ao repasse",
    excerpt:
      "A leitura estruturada dos arquivos de liquidação é o que garante rastreabilidade completa e redução de divergências no repasse.",
    date: "2026-05-08",
    author: "Pagare Conteúdo",
    category: "Conciliação",
  },
  {
    slug: "registradoras-de-recebiveis-cerc-nuclea",
    title: "Registradoras de recebíveis: integrando CERC e Núclea à sua operação",
    excerpt:
      "Conectar-se às registradoras deixou de ser opcional. Veja o que muda na arquitetura ao integrar CERC e Núclea de forma nativa.",
    date: "2026-04-30",
    author: "Pagare Conteúdo",
    category: "Tecnologia",
  },
  {
    slug: "gestao-comercial-metas-e-ranking",
    title: "Gestão comercial: transformando metas e ranking em crescimento previsível",
    excerpt:
      "Indicadores em tempo real por vendedor, equipe e região convertem o esforço comercial em um pipeline de crescimento mensurável.",
    date: "2026-04-22",
    author: "Pagare Conteúdo",
    category: "Mercado",
  },
  {
    slug: "subadquirencia-do-zero-em-minutos",
    title: "Como lançar uma operação de subadquirência do zero em minutos",
    excerpt:
      "Uma plataforma multiempresa e multiadquirente permite colocar uma nova operação no ar com a sua marca em tempo recorde.",
    date: "2026-04-15",
    author: "Pagare Conteúdo",
    category: "White Label",
  },
  {
    slug: "multi-tenant-e-cloud-native-em-pagamentos",
    title: "Arquitetura multi-tenant e cloud native para operações críticas",
    excerpt:
      "Escalabilidade, isolamento por operação e alta disponibilidade: os pilares técnicos que sustentam operações financeiras modernas.",
    date: "2026-04-07",
    author: "Pagare Conteúdo",
    category: "Tecnologia",
  },
  {
    slug: "antifraude-e-analise-comportamental",
    title: "Antifraude e análise comportamental no monitoramento de TPV",
    excerpt:
      "Alterações bruscas de TPV e perfis transacionais incompatíveis são sinais que a análise comportamental captura em tempo real.",
    date: "2026-03-31",
    author: "Pagare Conteúdo",
    category: "Compliance",
  },
  {
    slug: "orquestracao-de-pagamentos-multiadquirente",
    title: "Orquestração de pagamentos: roteamento inteligente multiadquirente",
    excerpt:
      "Distribuir transações entre adquirentes com base em custo e disponibilidade aumenta a taxa de aprovação e reduz o custo por transação.",
    date: "2026-03-24",
    author: "Pagare Conteúdo",
    category: "Pagamentos",
  },
  {
    slug: "auditoria-financeira-e-rastreabilidade",
    title: "Auditoria financeira e rastreabilidade ponta a ponta",
    excerpt:
      "Logs transacionais e trilhas de auditoria completas são o que sustentam a confiança de bancos, parceiros e órgãos reguladores.",
    date: "2026-03-17",
    author: "Pagare Conteúdo",
    category: "Conciliação",
  },
  {
    slug: "potencial-de-tpv-por-regiao",
    title: "Potencial de TPV por região: dados que viram estratégia comercial",
    excerpt:
      "Mapear a concentração de estabelecimentos e o potencial de TPV por região transforma a prospecção em uma decisão orientada por dados.",
    date: "2026-03-10",
    author: "Pagare Conteúdo",
    category: "Mercado",
  },
];

export const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

/** Retorna os posts de uma página (1-indexada). */
export function getPostsPage(page: number): Post[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return posts.slice(start, start + POSTS_PER_PAGE);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** URL canônica de cada página da paginação. */
export function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

/** Formata "2026-06-15" → "15/06/2026". */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
