import {
  ScanLine,
  FileSpreadsheet,
  Landmark,
  Percent,
  SearchCheck,
  Route,
  Smartphone,
  PlugZap,
  Network,
  CreditCard,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  SlidersHorizontal,
  Activity,
  Bell,
  FileWarning,
  Fingerprint,
  RefreshCw,
  GitBranch,
  Coins,
  KeyRound,
  BarChart3,
  Database,
  CalendarClock,
  Lock,
  HandCoins,
  type LucideIcon,
} from "lucide-react";

export type SolutionFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Solution = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  features: SolutionFeature[];
  benefits: string[];
  mediaLabel: string;
  closing: string;
};

export const solutions: Solution[] = [
  {
    slug: "conciliacao",
    navLabel: "Conciliação",
    eyebrow: "Conciliação Inteligente",
    title: "Controle total da captura ao repasse",
    lead: "Concilie vendas, taxas e repasses com precisão, cruzando informações de captura, arquivos de liquidação (EDI) e extratos bancários em uma única plataforma.",
    intro:
      "A conciliação deixa de ser uma tarefa manual e sujeita a erros para se tornar a base de sustentação da integridade financeira da sua operação. Identifique divergências antes que virem prejuízo.",
    features: [
      {
        icon: ScanLine,
        title: "Conciliação por captura",
        desc: "Cruza cada transação capturada na ponta com o que foi processado pelo adquirente.",
      },
      {
        icon: FileSpreadsheet,
        title: "Conciliação por EDI",
        desc: "Leitura estruturada dos arquivos de liquidação para máxima precisão.",
      },
      {
        icon: Landmark,
        title: "Conciliação bancária",
        desc: "Importe extratos (OFX) e concilie o que entrou na conta com o repasse esperado.",
      },
      {
        icon: Percent,
        title: "Conferência de taxas",
        desc: "Identifique cobranças indevidas e divergências de MDR automaticamente.",
      },
      {
        icon: SearchCheck,
        title: "Detecção de inconsistências",
        desc: "Alertas automáticos para divergências entre venda, liquidação e repasse.",
      },
      {
        icon: Route,
        title: "Rastreabilidade completa",
        desc: "Acompanhe o ciclo de vida de cada transação, ponta a ponta.",
      },
    ],
    benefits: [
      "Redução de divergências e perdas financeiras",
      "Auditoria financeira simplificada",
      "Monitoramento de repasses em tempo real",
      "Fechamento contábil mais rápido",
      "Visão consolidada multiadquirente",
    ],
    mediaLabel: "Painel de conciliação / divergências",
    closing: "Menos divergências, mais previsibilidade no seu fluxo de caixa.",
  },
  {
    slug: "pos-e-tef",
    navLabel: "POS e TEF",
    eyebrow: "Captura presencial",
    title: "POS e TEF integrados à sua operação",
    lead: "Una o varejo físico e o digital: capture pagamentos presenciais com terminais POS e integre o TEF ao seu PDV, ERP ou automação comercial.",
    intro:
      "Ofereça uma experiência de balcão fluida e conectada à mesma plataforma que processa suas vendas online, com captura multiadquirente e conciliação automática.",
    features: [
      {
        icon: Smartphone,
        title: "Terminais POS",
        desc: "Gestão de maquininhas e pinpads com captura multiadquirente.",
      },
      {
        icon: PlugZap,
        title: "TEF integrado",
        desc: "Conecte o pagamento presencial ao seu PDV ou ERP via TEF.",
      },
      {
        icon: Network,
        title: "Multiadquirente",
        desc: "Roteie a captura entre adquirentes conforme custo e disponibilidade.",
      },
      {
        icon: CreditCard,
        title: "Crédito, débito e Pix",
        desc: "Aceite todas as formas de pagamento no balcão.",
      },
      {
        icon: Wrench,
        title: "Gestão de terminais",
        desc: "Provisionamento, parametrização e monitoramento remoto dos equipamentos.",
      },
      {
        icon: ClipboardCheck,
        title: "Conciliação automática",
        desc: "A captura presencial já entra conciliada na plataforma.",
      },
    ],
    benefits: [
      "Varejo físico e digital unificados",
      "Maior taxa de aprovação presencial",
      "Menos tempo de fila no balcão",
      "Suporte a múltiplos adquirentes",
      "Conciliação da captura automática",
    ],
    mediaLabel: "Terminal POS / integração TEF",
    closing: "Uma só plataforma para o balcão e para o online.",
  },
  {
    slug: "antifraude",
    navLabel: "Antifraude",
    eyebrow: "Gestão de risco",
    title: "Antifraude e gestão de disputas",
    lead: "Proteja sua operação com análise de risco em tempo real, regras configuráveis e gestão de chargeback, reduzindo perdas sem travar vendas legítimas.",
    intro:
      "Uma camada de segurança própria que aprende o comportamento de cada estabelecimento e age em tempo real, equilibrando proteção e conversão.",
    features: [
      {
        icon: ShieldCheck,
        title: "Score de risco",
        desc: "Avaliação automática de cada transação com base em comportamento e histórico.",
      },
      {
        icon: SlidersHorizontal,
        title: "Regras configuráveis",
        desc: "Monte políticas de aprovação, revisão e negação por perfil de risco.",
      },
      {
        icon: Activity,
        title: "Monitoramento de TPV",
        desc: "Detecte alterações bruscas de volume e perfis transacionais incompatíveis.",
      },
      {
        icon: Bell,
        title: "Alertas em tempo real",
        desc: "Notificações imediatas para operações suspeitas.",
      },
      {
        icon: FileWarning,
        title: "Gestão de chargeback",
        desc: "Controle de disputas e contestações ponta a ponta.",
      },
      {
        icon: Fingerprint,
        title: "Análise comportamental",
        desc: "Modelos que aprendem o padrão de cada estabelecimento.",
      },
    ],
    benefits: [
      "Redução de fraude e chargeback",
      "Menos falsos positivos",
      "Aprovação de vendas legítimas",
      "Resposta rápida a incidentes",
      "Camada de segurança própria",
    ],
    mediaLabel: "Painel antifraude / score de risco",
    closing: "Mais segurança, sem sacrificar a conversão.",
  },
  {
    slug: "orquestracao",
    navLabel: "Orquestração de Pagamento",
    eyebrow: "Orquestração",
    title: "Roteamento inteligente entre adquirentes",
    lead: "Aumente a taxa de aprovação e reduza o custo por transação roteando cada pagamento para o melhor adquirente, com retentativas automáticas em cascata.",
    intro:
      "Em vez de depender de um único adquirente, a orquestração distribui as transações de forma inteligente, recuperando vendas e otimizando custos a cada operação.",
    features: [
      {
        icon: Route,
        title: "Roteamento multiadquirente",
        desc: "Direciona cada transação para o adquirente ideal por custo e performance.",
      },
      {
        icon: RefreshCw,
        title: "Retentativa em cascata",
        desc: "Recupera vendas negadas tentando automaticamente outro adquirente.",
      },
      {
        icon: GitBranch,
        title: "Split de pagamento",
        desc: "Divida o valor entre múltiplos recebedores de forma automática.",
      },
      {
        icon: Coins,
        title: "Múltiplos meios",
        desc: "Pix, cartão e boleto orquestrados em um só fluxo.",
      },
      {
        icon: KeyRound,
        title: "Tokenização",
        desc: "Cofre de cartões para recorrência e one-click com segurança.",
      },
      {
        icon: BarChart3,
        title: "Otimização por dados",
        desc: "Decisões de roteamento baseadas em taxa de aprovação histórica.",
      },
    ],
    benefits: [
      "Maior taxa de aprovação",
      "Menor custo por transação",
      "Resiliência a indisponibilidades",
      "Recorrência e one-click",
      "Menos vendas perdidas",
    ],
    mediaLabel: "Fluxo de orquestração / roteamento",
    closing: "Cada transação no melhor caminho possível.",
  },
  {
    slug: "registradora",
    navLabel: "Registradora de Recebíveis",
    eyebrow: "Recebíveis",
    title: "Registro e gestão de recebíveis de cartão",
    lead: "Opere em conformidade com a regulação do Banco Central, integrando-se às registradoras (CERC e Núclea) para registrar, consultar e gerenciar a agenda de recebíveis.",
    intro:
      "A estruturação de recebíveis deixou de ser opcional. Conecte-se às registradoras de forma nativa e transforme a agenda de recebíveis em acesso a crédito e garantias.",
    features: [
      {
        icon: Database,
        title: "Integração com registradoras",
        desc: "Conexão nativa com CERC e Núclea.",
      },
      {
        icon: CalendarClock,
        title: "Agenda de recebíveis",
        desc: "Visão consolidada dos recebíveis futuros por estabelecimento.",
      },
      {
        icon: Lock,
        title: "Travas e onerações",
        desc: "Gestão de contratos, garantias e onerações sobre recebíveis.",
      },
      {
        icon: HandCoins,
        title: "Antecipação",
        desc: "Estruture operações de antecipação com base na agenda registrada.",
      },
      {
        icon: ShieldCheck,
        title: "Conformidade regulatória",
        desc: "Aderência às resoluções do Banco Central sobre recebíveis.",
      },
      {
        icon: Route,
        title: "Rastreabilidade",
        desc: "Acompanhe o registro e a liquidação de cada unidade de recebível.",
      },
    ],
    benefits: [
      "Conformidade com o Banco Central",
      "Acesso a crédito via recebíveis",
      "Gestão de garantias e onerações",
      "Transparência na agenda de recebíveis",
      "Integração com CERC e Núclea",
    ],
    mediaLabel: "Agenda de recebíveis / registradoras",
    closing: "Recebíveis registrados, gerenciados e prontos para crescer.",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
