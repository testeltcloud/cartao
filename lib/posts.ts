/**
 * Fonte de dados dos artigos do blog.
 * Substitua por um CMS/MDX quando quiser — a estrutura
 * (slug, title, excerpt, content, date, author, category) já está pronta.
 */
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  /** Corpo do artigo, um parágrafo por item. */
  content: string[];
  /** ISO (YYYY-MM-DD) */
  date: string;
  author: string;
  category: string;
};

export const POSTS_PER_PAGE = 6;

const AUTHOR = "LTCard Conteúdo";

export const posts: Post[] = [
  {
    slug: "papel-da-conciliacao-de-recebiveis",
    title: "O papel da conciliação de recebíveis na infraestrutura financeira",
    excerpt:
      "A conciliação de recebíveis não é só tarefa administrativa: é a base da integridade financeira da operação, da captura ao repasse.",
    date: "2026-06-15",
    author: AUTHOR,
    category: "Conciliação",
    content: [
      "No ecossistema de pagamentos, a conciliação de recebíveis não é apenas uma tarefa administrativa: é a base de sustentação da integridade financeira da operação. É ela que garante que cada venda capturada tenha o valor, a taxa e o prazo corretos quando chega o momento do repasse.",
      "O desafio está no volume e na fragmentação dos dados. As informações de captura chegam pela ponta, os valores liquidados vêm nos arquivos de liquidação (EDI) e o crédito efetivo aparece nos extratos bancários. Sem cruzar essas três fontes, divergências passam despercebidas e corroem a margem da operação.",
      "Uma conciliação inteligente automatiza esse cruzamento e aponta inconsistências assim que elas surgem: diferenças de taxa, valores não liquidados, repasses divergentes. O resultado é mais precisão operacional, menos perda silenciosa e rastreabilidade completa da captura ao repasse.",
      "Para quem opera sub-adquirente ou white label, isso significa transformar a conciliação de um gargalo manual em um controle contínuo, confiável e auditável.",
    ],
  },
  {
    slug: "white-label-master-para-redes-comerciais",
    title: "White Label Master: como distribuir operações para redes comerciais",
    excerpt:
      "A estrutura White Label Master permite criar e distribuir novas operações com a sua marca para parceiros, representantes e grupos comerciais.",
    date: "2026-05-27",
    author: AUTHOR,
    category: "White Label",
    content: [
      "A estrutura White Label permite operar com a sua própria marca. A estrutura White Label Master vai além: ela permite que você crie e distribua novas operações White Label para parceiros, representantes e grupos comerciais.",
      "Na prática, isso transforma sua operação em uma plataforma. Cada parceiro recebe um ambiente próprio, com identidade visual, domínio e gestão independente, enquanto você mantém a visão consolidada e o controle hierárquico de toda a rede.",
      "Esse modelo é multiempresa e multiusuário por natureza: cada operação enxerga apenas o seu escopo, com permissões definidas por perfil, marca e nível operacional. É o que viabiliza escalar de uma única operação para uma rede de operações sem perder governança.",
      "Para redes comerciais e grupos que querem crescer distribuindo marca, o White Label Master é o que separa um sistema fechado de uma verdadeira infraestrutura de expansão.",
    ],
  },
  {
    slug: "pre-compliance-monitoramento-transacional",
    title: "Pré-compliance: monitoramento transacional para antecipar riscos",
    excerpt:
      "Detectar comportamentos fora do padrão antes que virem problema: o papel do pré-compliance, com monitoramento contínuo e alertas em tempo real.",
    date: "2026-05-20",
    author: AUTHOR,
    category: "Compliance",
    content: [
      "Detectar comportamentos fora do padrão antes que se tornem problemas é o que separa uma operação reativa de uma operação preventiva. Esse é o papel do pré-compliance: monitorar continuamente as transações para sinalizar riscos enquanto ainda há tempo de agir.",
      "Em vez de esperar o prejuízo aparecer, o monitoramento observa sinais como alterações bruscas de TPV, perfis transacionais incompatíveis e operações suspeitas. Quando algo destoa do comportamento esperado, alertas em tempo real direcionam a atenção da equipe de risco para o ponto certo.",
      "Mais do que uma camada de segurança, o pré-compliance é um instrumento de governança. Ele dá à operação a capacidade de explicar e justificar decisões, fortalecendo a relação com bancos, parceiros e órgãos reguladores.",
      "Para quem opera no mercado financeiro, antecipar risco não é custo: é proteção da continuidade do negócio.",
    ],
  },
  {
    slug: "ia-na-expansao-comercial-de-adquirencia",
    title: "IA na expansão comercial: onde sua operação de adquirência deve crescer",
    excerpt:
      "IA cruza CNAE, volume e comportamento para revelar segmentos, regiões e oportunidades de aquisição com maior potencial de crescimento.",
    date: "2026-05-14",
    author: AUTHOR,
    category: "Mercado",
    content: [
      "Crescer no mercado de adquirência não é só vender mais: é vender nos lugares certos. A Inteligência Artificial entra exatamente nesse ponto, cruzando dados para revelar onde está o maior potencial de crescimento.",
      "Modelos de IA analisam CNAE, volume transacionado e comportamento comercial para identificar segmentos com maior potencial, regiões pouco exploradas e oportunidades de aquisição. Em vez de prospectar no escuro, a equipe comercial passa a agir sobre dados.",
      "Esse tipo de análise transforma a expansão em estratégia. Mapear a concentração de estabelecimentos e o potencial de TPV por região permite priorizar esforço, alocar time e definir metas com base em evidência, não em intuição.",
      "O resultado é uma operação que cresce de forma orientada por dados, com mais previsibilidade e menos desperdício comercial.",
    ],
  },
  {
    slug: "edi-e-arquivos-de-liquidacao",
    title: "EDI e arquivos de liquidação: precisão da captura ao repasse",
    excerpt:
      "A leitura estruturada dos arquivos de liquidação (EDI) garante rastreabilidade e reduz divergências entre a venda e o crédito.",
    date: "2026-05-08",
    author: AUTHOR,
    category: "Conciliação",
    content: [
      "A leitura estruturada dos arquivos de liquidação (EDI) é o que garante rastreabilidade completa e redução de divergências no repasse. É nesses arquivos que o adquirente informa, oficialmente, o que foi liquidado e em quais condições.",
      "Sem processá-los de forma automatizada, a operação fica cega entre a venda e o crédito. Pequenas diferenças de taxa, ajustes e valores retidos se acumulam e só aparecem, quando aparecem, muito depois do prejuízo já ter ocorrido.",
      "Ao integrar os dados de captura com o EDI, cada transação passa a ter uma trilha verificável: capturada, liquidada e repassada. Inconsistências são identificadas automaticamente e tratadas antes de impactar o resultado.",
      "Essa precisão da captura ao repasse é o que dá segurança financeira para a operação escalar sem perder o controle.",
    ],
  },
  {
    slug: "registradoras-de-recebiveis-cerc",
    title: "Registradoras de recebíveis: integrando a CERC à sua operação",
    excerpt:
      "Conectar-se às registradoras virou parte estrutural da operação. Integre a CERC de forma nativa para registrar e gerir a agenda de recebíveis.",
    date: "2026-04-30",
    author: AUTHOR,
    category: "Tecnologia",
    content: [
      "Conectar-se às registradoras deixou de ser opcional. A regulação do Banco Central tornou o registro de recebíveis parte estrutural de qualquer operação de pagamentos, e isso muda a arquitetura de quem opera no mercado.",
      "Integrar-se à CERC de forma nativa permite registrar, consultar e gerenciar a agenda de recebíveis dentro da própria plataforma, sem processos paralelos e manuais. A operação ganha conformidade e, ao mesmo tempo, visibilidade sobre os recebíveis que lastreiam suas vendas.",
      "Na camada de infraestrutura, isso significa tratar o registro como parte do fluxo, e não como uma etapa externa. Cada recebível tem origem rastreável e situação atualizada, sustentando antecipação, conciliação e auditoria.",
      "Para a operação, estar em conformidade com a CERC é condição de existência, e fazê-lo de forma nativa é o que mantém a eficiência.",
    ],
  },
  {
    slug: "gestao-comercial-metas-e-ranking",
    title: "Gestão comercial: transformando metas e ranking em crescimento previsível",
    excerpt:
      "Indicadores por vendedor, equipe, gestor e região convertem o esforço comercial em um pipeline mensurável e crescimento previsível.",
    date: "2026-04-22",
    author: AUTHOR,
    category: "Mercado",
    content: [
      "Tecnologia financeira sozinha não cresce uma operação: quem cresce é o time comercial. Por isso, a gestão comercial precisa ser tão estruturada quanto a esteira de pagamentos.",
      "Indicadores em tempo real por vendedor, equipe, gestor e região convertem o esforço comercial em um pipeline mensurável. Metas deixam de ser planilhas isoladas e passam a ser acompanhadas no mesmo ambiente onde a operação acontece.",
      "O ranking comercial cria referência e direção: mostra quem está performando, onde estão as lacunas e quais regiões merecem mais foco. Combinado ao controle de TPV e à gestão de carteira, ele transforma vendas em crescimento previsível.",
      "Operar com gestão comercial integrada é o que permite escalar mantendo previsibilidade, do primeiro estabelecimento credenciado à operação de grande escala.",
    ],
  },
  {
    slug: "subadquirencia-do-zero-em-minutos",
    title: "Como lançar uma operação de sub-adquirente do zero em minutos",
    excerpt:
      "Uma base multiempresa e multiadquirente coloca uma nova operação no ar, com a sua marca, por configuração — não por desenvolvimento.",
    date: "2026-04-15",
    author: AUTHOR,
    category: "White Label",
    content: [
      "Lançar uma operação de sub-adquirente sempre foi sinônimo de projeto longo e caro. Uma plataforma multiempresa e multiadquirente muda essa realidade: é possível colocar uma nova operação no ar, com a sua marca, em tempo recorde.",
      "O segredo está em partir de uma base tecnológica pronta. Em vez de construir esteira de captura, conciliação, taxas e gestão financeira do zero, a operação é configurada sobre uma infraestrutura que já entrega tudo isso.",
      "Personalização de marca, tema e domínio, estrutura comercial, planos de taxa e controle de acesso são definidos por configuração, não por desenvolvimento. Isso reduz o tempo de lançamento de meses para minutos.",
      "Para quem quer entrar no mercado de pagamentos com a própria marca, velocidade de lançamento é vantagem competitiva direta.",
    ],
  },
  {
    slug: "multi-tenant-e-cloud-native-em-pagamentos",
    title: "Arquitetura multi-tenant e cloud native para operações críticas",
    excerpt:
      "Escalabilidade, isolamento e alta disponibilidade: os pilares de uma arquitetura multi-tenant e cloud native para operações críticas.",
    date: "2026-04-07",
    author: AUTHOR,
    category: "Tecnologia",
    content: [
      "Operações financeiras não toleram instabilidade. Por trás de cada transação existe uma exigência silenciosa: escalabilidade, isolamento e alta disponibilidade. São esses os pilares de uma arquitetura multi-tenant e cloud native.",
      "O modelo multi-tenant permite que múltiplas operações convivam na mesma plataforma com isolamento por operação. Cada white label, grupo econômico e estabelecimento enxerga apenas o seu ambiente, com segurança e independência.",
      "Ser cloud native significa escalar conforme a demanda, manter alta disponibilidade e sustentar picos de volume sem degradar a experiência. Para o mercado financeiro, isso é requisito, não diferencial.",
      "Somada à auditoria completa e aos logs transacionais, essa arquitetura entrega a confiabilidade que operações críticas exigem para crescer com segurança.",
    ],
  },
  {
    slug: "analise-comportamental-monitoramento-tpv",
    title: "Análise comportamental e monitoramento de TPV: o papel do pré-compliance",
    excerpt:
      "Alterações bruscas de TPV e perfis incompatíveis são sinais. A análise comportamental aplicada ao pré-compliance os captura em tempo real.",
    date: "2026-03-31",
    author: AUTHOR,
    category: "Compliance",
    content: [
      "Alterações bruscas de TPV e perfis transacionais incompatíveis são sinais, e quem os captura em tempo real opera com vantagem. Esse é o terreno da análise comportamental aplicada ao pré-compliance.",
      "Em vez de olhar transações isoladas, a análise comportamental observa padrões: como aquele estabelecimento costuma transacionar, em que volume, com que frequência. Quando o comportamento foge do esperado, o sistema sinaliza.",
      "Monitorar o TPV continuamente permite distinguir o crescimento legítimo de um movimento atípico que merece atenção da equipe de risco. É o que transforma dados transacionais em inteligência preventiva.",
      "Mais do que reagir a incidentes, o pré-compliance dá à operação a capacidade de antecipá-los, protegendo resultado, reputação e conformidade.",
    ],
  },
  {
    slug: "auditoria-financeira-e-rastreabilidade",
    title: "Auditoria financeira e rastreabilidade ponta a ponta",
    excerpt:
      "Logs e trilhas de auditoria completas sustentam a confiança de bancos, parceiros e reguladores: em pagamentos, é preciso poder comprovar.",
    date: "2026-03-17",
    author: AUTHOR,
    category: "Conciliação",
    content: [
      "Logs transacionais e trilhas de auditoria completas são o que sustentam a confiança de bancos, parceiros e órgãos reguladores. Em pagamentos, não basta estar correto: é preciso ser capaz de comprovar.",
      "Rastreabilidade ponta a ponta significa que cada transação tem história: quando foi capturada, como foi liquidada, qual taxa foi aplicada e como foi repassada. Nada acontece sem registro.",
      "Essa trilha não serve apenas à conformidade. Ela acelera a resolução de divergências, fundamenta decisões e dá segurança para auditorias internas e externas. Quando algo é questionado, a resposta está documentada.",
      "Para uma operação que quer crescer com credibilidade, auditoria completa não é burocracia: é o alicerce da confiança.",
    ],
  },
  {
    slug: "potencial-de-tpv-por-regiao",
    title: "Potencial de TPV por região: dados que viram estratégia comercial",
    excerpt:
      "Mapear a concentração de estabelecimentos e o potencial de TPV por região transforma a prospecção em decisão orientada por dados.",
    date: "2026-03-10",
    author: AUTHOR,
    category: "Mercado",
    content: [
      "Mapear a concentração de estabelecimentos e o potencial de TPV por região transforma a prospecção em uma decisão orientada por dados. Em vez de espalhar esforço, a operação foca onde o retorno é maior.",
      "A análise por região revela camadas que a intuição não enxerga: onde há mercado pouco explorado, onde a concorrência já está saturada e onde existe volume transacional latente esperando ser capturado.",
      "Quando esses dados se conectam à gestão comercial, eles deixam de ser relatório e viram direção. Metas por região, alocação de time e priorização de canais passam a ter base concreta.",
      "Transformar potencial de TPV em estratégia é o que diferencia uma expansão planejada de uma expansão por tentativa e erro.",
    ],
  },
  {
    slug: "planos-de-taxa-precificacao",
    title: "Planos de taxa por estabelecimento e white label: como estruturar a precificação",
    excerpt:
      "Um motor de planos de taxa por estabelecimento e white label estrutura a precificação por modalidade, bandeira, produto e prazo.",
    date: "2026-03-03",
    author: AUTHOR,
    category: "Financeiro",
    content: [
      "A taxa é o coração financeiro de qualquer operação de cartões. É ela que define a margem entre o que o estabelecimento paga e o que a operação recebe, e por isso precisa ser gerida com precisão, não improvisada.",
      "Um motor de planos de taxa permite configurar precificação por estabelecimento e por white label, considerando modalidade, bandeira, produto e prazo. Cada operação pode ter sua própria política comercial, dentro das regras definidas pela estrutura.",
      "Essa flexibilidade é o que viabiliza modelos diferentes de negócio na mesma plataforma: um white label agressivo em preço, outro focado em margem, cada um com seus planos. Tudo rastreável e auditável.",
      "Estruturar bem os planos de taxa é o que garante que crescimento em volume signifique também crescimento em resultado, e não o contrário.",
    ],
  },
  {
    slug: "antecipacao-de-recebiveis-adiantamento",
    title: "Antecipação de recebíveis: adiantamento de vendas com regras sob controle",
    excerpt:
      "Transformar vendas futuras em capital agora só funciona com regras claras: controle quais recebíveis, em que condições e com qual custo.",
    date: "2026-02-24",
    author: AUTHOR,
    category: "Financeiro",
    content: [
      "A antecipação de recebíveis é uma das ferramentas mais valiosas que uma operação pode oferecer ao estabelecimento: transformar vendas futuras em capital disponível agora. Mas só funciona quando há regras claras por trás.",
      "Gerir antecipação dentro da própria plataforma significa controlar quais recebíveis podem ser antecipados, em que condições e com qual custo. A operação define a política; o sistema executa com consistência.",
      "Conectada à conciliação e ao registro de recebíveis, a antecipação ganha lastro e rastreabilidade: cada valor adiantado tem origem verificável e situação atualizada. Isso reduz risco e dá segurança financeira à operação.",
      "Oferecer antecipação com regras sob controle é o que permite gerar liquidez para o estabelecimento sem comprometer a saúde da operação.",
    ],
  },
  {
    slug: "contas-a-pagar-mensalidades-lancamentos",
    title: "Contas a pagar, mensalidades e lançamentos: a gestão financeira do repasse",
    excerpt:
      "Contas a pagar, mensalidades e lançamentos são as engrenagens do ciclo financeiro entre a venda e o crédito ao estabelecimento.",
    date: "2026-02-17",
    author: AUTHOR,
    category: "Financeiro",
    content: [
      "Entre a venda e o crédito final ao estabelecimento existe um ciclo financeiro inteiro, e é ele que define se a operação fecha as contas com precisão. Contas a pagar, mensalidades e lançamentos são as engrenagens desse ciclo.",
      "A gestão de contas a pagar organiza o que a operação deve repassar e quando. As mensalidades estruturam cobranças recorrentes. Os lançamentos registram ajustes, créditos e débitos que afetam o saldo de cada parte.",
      "Centralizar tudo isso na mesma plataforma evita controles paralelos e divergências. Cada movimento financeiro tem registro, fluxo de aprovação e rastreabilidade, do cálculo ao repasse efetivo.",
      "Uma gestão financeira completa é o que transforma o repasse de uma dor operacional em um processo confiável e auditável.",
    ],
  },
  {
    slug: "controle-de-acesso-multiempresa",
    title: "Controle de acesso por perfil, marca e escopo: segurança em operações multiempresa",
    excerpt:
      "Em uma plataforma multiempresa, segurança começa em quem vê o quê. Permissões por perfil, marca e escopo sustentam a governança.",
    date: "2026-02-10",
    author: AUTHOR,
    category: "Tecnologia",
    content: [
      "Em uma plataforma multiempresa, segurança começa em quem vê o quê. Quando várias operações convivem no mesmo ambiente, o controle de acesso deixa de ser detalhe e passa a ser fundamento.",
      "Um modelo de permissões por perfil, marca e escopo operacional garante que cada usuário enxergue apenas o que lhe compete. Um operador, um gestor de white label e um estabelecimento têm visões e poderes distintos por definição, não por exceção.",
      "Isso protege dados sensíveis, evita interferências entre operações e sustenta a estrutura hierárquica da rede. Cada nível tem autonomia dentro do seu limite, sem comprometer a governança do todo.",
      "Em operações financeiras, controle granular de acesso não é burocracia: é a condição que torna o modelo multiempresa seguro e escalável.",
    ],
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
