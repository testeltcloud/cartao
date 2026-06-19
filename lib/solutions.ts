import {
  Boxes,
  Network,
  Building2,
  Palette,
  Globe,
  ShieldCheck,
  Users,
  KeyRound,
  Layers,
  Lock,
  ClipboardCheck,
  Eye,
  UserCog,
  Target,
  Trophy,
  TrendingUp,
  Wallet,
  MapPin,
  HandCoins,
  CalendarClock,
  Percent,
  SlidersHorizontal,
  Route,
  ScanLine,
  FileSpreadsheet,
  Landmark,
  SearchCheck,
  Database,
  LayoutDashboard,
  BarChart3,
  FileText,
  ScrollText,
  Filter,
  Sparkles,
  Activity,
  Lightbulb,
  Fingerprint,
  ShieldAlert,
  Bell,
  Gauge,
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
    slug: "estrutura-white-label",
    navLabel: "Estrutura White Label",
    eyebrow: "Estrutura White Label",
    title: "Opere com a sua marca em uma estrutura hierárquica",
    lead: "Opere com a sua marca e organize toda a operação em uma estrutura multiempresa e hierárquica: sub-adquirente, white labels, operadores e estabelecimentos, com personalização de marca, tema e domínio.",
    intro:
      "Cada grupo opera em um ambiente isolado, com hierarquia própria — do white label ao grupo econômico e ao estabelecimento — e identidade visual sob a sua marca.",
    features: [
      { icon: Boxes, title: "Multiempresa", desc: "White label, grupo econômico e estabelecimento em uma só hierarquia." },
      { icon: Network, title: "Hierarquia própria", desc: "sub-adquirente, white labels, operadores e estabelecimentos por nível." },
      { icon: Building2, title: "Unidades internas e regionais", desc: "Organize a operação por unidades e regiões." },
      { icon: Palette, title: "Personalização de marca", desc: "Tema, logo e identidade visual sob a sua marca." },
      { icon: Globe, title: "Domínio próprio", desc: "Cada operação no seu próprio domínio." },
      { icon: ShieldCheck, title: "Ambiente isolado", desc: "Isolamento por operação, com gestão independente." },
    ],
    benefits: [
      "Operação 100% com a sua marca",
      "Ambientes isolados por grupo",
      "Gestão independente por operação",
      "Distribuição para parceiros e grupos",
      "Identidade visual personalizada",
    ],
    mediaLabel: "Estrutura hierárquica / white label",
    closing: "Sua marca no centro de uma operação organizada e escalável.",
  },
  {
    slug: "controle-de-acesso",
    navLabel: "Controle de Acesso e Permissões",
    eyebrow: "Acesso e Permissões",
    title: "Controle de acesso e permissões por perfil",
    lead: "Gerencie usuários em estrutura multiusuário com grupos de acesso por perfil, marca e escopo operacional, garantindo que cada operação enxergue apenas o que lhe compete.",
    intro:
      "Defina exatamente o que cada usuário pode ver e fazer, com granularidade por perfil, marca e nível da operação.",
    features: [
      { icon: Users, title: "Multiusuário", desc: "Usuários por nível e por operação." },
      { icon: KeyRound, title: "Grupos de acesso", desc: "Perfis de permissão configuráveis." },
      { icon: Layers, title: "Escopo operacional", desc: "Acesso por marca, unidade e hierarquia." },
      { icon: Lock, title: "Controle granular", desc: "Permissões finas por funcionalidade." },
      { icon: ClipboardCheck, title: "Auditoria de acessos", desc: "Trilhas de quem acessou o quê." },
      { icon: Eye, title: "Visibilidade por escopo", desc: "Cada operação enxerga apenas o que lhe compete." },
    ],
    benefits: [
      "Segregação de funções",
      "Menos risco operacional",
      "Conformidade e auditoria",
      "Gestão por marca e nível",
      "Onboarding de usuários simplificado",
    ],
    mediaLabel: "Gestão de usuários e permissões",
    closing: "Cada operação enxerga só o que lhe compete.",
  },
  {
    slug: "gestao-comercial",
    navLabel: "Gestão Comercial",
    eyebrow: "Gestão Comercial",
    title: "Estruture e acompanhe o seu time comercial",
    lead: "Estruture sua área comercial com gestor, vendedor, consultor, regional e unidade interna, e acompanhe metas comerciais e desempenho de cada nível da operação.",
    intro:
      "Transforme o esforço comercial em crescimento previsível, com metas e indicadores em tempo real por vendedor, equipe, gestor e região.",
    features: [
      { icon: UserCog, title: "Estrutura comercial", desc: "Gestor, vendedor, consultor, regional e unidade interna." },
      { icon: Target, title: "Metas por nível", desc: "Metas por vendedor, equipe e gestor." },
      { icon: Trophy, title: "Ranking comercial", desc: "Acompanhe a performance e estimule o time." },
      { icon: TrendingUp, title: "Controle de TPV", desc: "Volume transacionado por carteira e região." },
      { icon: Wallet, title: "Gestão de carteira", desc: "Distribuição e acompanhamento de carteiras." },
      { icon: MapPin, title: "Performance por região", desc: "Indicadores de crescimento por território." },
    ],
    benefits: [
      "Crescimento previsível",
      "Visão por vendedor, equipe e gestor",
      "Metas e ranking em tempo real",
      "Gestão de carteira e TPV",
      "Performance por região",
    ],
    mediaLabel: "Painel comercial / metas e ranking",
    closing: "Vendas convertidas em crescimento mensurável.",
  },
  {
    slug: "antecipacao-de-recebiveis",
    navLabel: "Antecipação de Recebíveis",
    eyebrow: "Antecipação",
    title: "Antecipação de recebíveis de cartão",
    lead: "Gerencie a antecipação das vendas de cartão, oferecendo aos seus estabelecimentos a possibilidade de adiantar valores a receber dentro das regras da sua operação.",
    intro:
      "Ofereça liquidez aos seus estabelecimentos antecipando os recebíveis de cartão, com regras, taxas e limites sob o controle da sua operação.",
    features: [
      { icon: HandCoins, title: "Antecipação de vendas", desc: "Adiante valores a receber das vendas de cartão." },
      { icon: CalendarClock, title: "Agenda de recebíveis", desc: "Visão dos recebíveis futuros por estabelecimento." },
      { icon: Percent, title: "Regras e taxas", desc: "Defina taxas e condições de antecipação." },
      { icon: SlidersHorizontal, title: "Limites por operação", desc: "Controle de elegibilidade e limites." },
      { icon: Route, title: "Rastreabilidade", desc: "Do pedido de antecipação ao repasse." },
      { icon: ShieldCheck, title: "Dentro das regras", desc: "Antecipação conforme as regras da operação." },
    ],
    benefits: [
      "Liquidez para os estabelecimentos",
      "Nova fonte de receita para a operação",
      "Regras e taxas sob seu controle",
      "Agenda de recebíveis integrada",
      "Rastreabilidade até o repasse",
    ],
    mediaLabel: "Antecipação / agenda de recebíveis",
    closing: "Liquidez para o estabelecimento, receita para a sua operação.",
  },
  {
    slug: "conciliacao",
    navLabel: "Conciliação",
    eyebrow: "Conciliação Inteligente",
    title: "Controle total da captura ao repasse",
    lead: "Concilie vendas, taxas e repasses com precisão, cruzando informações de captura, arquivos de liquidação (EDI) e extratos bancários em uma única plataforma.",
    intro:
      "A conciliação deixa de ser uma tarefa manual e sujeita a erros para se tornar a base de sustentação da integridade financeira da sua operação. Identifique divergências antes que virem prejuízo.",
    features: [
      { icon: ScanLine, title: "Conciliação por captura", desc: "Cruza cada transação capturada na ponta com o que foi processado pelo adquirente." },
      { icon: FileSpreadsheet, title: "Conciliação por EDI", desc: "Leitura estruturada dos arquivos de liquidação para máxima precisão." },
      { icon: Landmark, title: "Conciliação bancária", desc: "Importe extratos (OFX) e concilie o que entrou na conta com o repasse esperado." },
      { icon: Percent, title: "Conferência de taxas", desc: "Identifique cobranças indevidas e divergências de MDR automaticamente." },
      { icon: SearchCheck, title: "Detecção de inconsistências", desc: "Alertas automáticos para divergências entre venda, liquidação e repasse." },
      { icon: Route, title: "Rastreabilidade completa", desc: "Acompanhe o ciclo de vida de cada transação, ponta a ponta." },
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
    slug: "registradora",
    navLabel: "Registradora de Recebíveis",
    eyebrow: "Recebíveis",
    title: "Registro e gestão de recebíveis de cartão",
    lead: "Opere em conformidade com a regulação do Banco Central, integrando-se às registradoras de recebíveis (como a CERC) para registrar, consultar e gerenciar a agenda de recebíveis.",
    intro:
      "A estruturação de recebíveis deixou de ser opcional. Conecte-se às registradoras de forma nativa e transforme a agenda de recebíveis em acesso a crédito e garantias.",
    features: [
      { icon: Database, title: "Integração com registradoras", desc: "Conexão nativa com a CERC." },
      { icon: CalendarClock, title: "Agenda de recebíveis", desc: "Visão consolidada dos recebíveis futuros por estabelecimento." },
      { icon: Lock, title: "Travas e onerações", desc: "Gestão de contratos, garantias e onerações sobre recebíveis." },
      { icon: HandCoins, title: "Antecipação", desc: "Estruture operações de antecipação com base na agenda registrada." },
      { icon: ShieldCheck, title: "Conformidade regulatória", desc: "Aderência às resoluções do Banco Central sobre recebíveis." },
      { icon: Route, title: "Rastreabilidade", desc: "Acompanhe o registro e a liquidação de cada unidade de recebível." },
    ],
    benefits: [
      "Conformidade com o Banco Central",
      "Acesso a crédito via recebíveis",
      "Gestão de garantias e onerações",
      "Transparência na agenda de recebíveis",
      "Integração com a CERC",
    ],
    mediaLabel: "Agenda de recebíveis / registradoras",
    closing: "Recebíveis registrados, gerenciados e prontos para crescer.",
  },
  {
    slug: "dashboards-e-relatorios",
    navLabel: "Dashboards e Relatórios",
    eyebrow: "Dashboards e Relatórios",
    title: "Dashboards e relatórios de ponta a ponta",
    lead: "Acompanhe a operação com dashboards operacionais e gerenciais, relatórios detalhados e auditoria completa de ponta a ponta.",
    intro:
      "Tenha a operação inteira sob controle: indicadores em tempo real, relatórios detalhados e trilhas de auditoria para cada movimento.",
    features: [
      { icon: LayoutDashboard, title: "Dashboards operacionais", desc: "Visão em tempo real do dia a dia da operação." },
      { icon: BarChart3, title: "Dashboards gerenciais", desc: "Indicadores estratégicos para a tomada de decisão." },
      { icon: FileText, title: "Relatórios detalhados", desc: "Exporte e analise os dados em profundidade." },
      { icon: ClipboardCheck, title: "Auditoria completa", desc: "Rastreabilidade de ponta a ponta." },
      { icon: ScrollText, title: "Logs transacionais", desc: "Histórico de cada transação." },
      { icon: Filter, title: "Filtros e segmentação", desc: "Recorte por marca, unidade e período." },
    ],
    benefits: [
      "Decisões orientadas por dados",
      "Visão operacional e gerencial",
      "Relatórios sob demanda",
      "Auditoria de ponta a ponta",
      "Transparência por operação",
    ],
    mediaLabel: "Dashboards / relatórios",
    closing: "A operação inteira em uma visão só.",
  },
  {
    slug: "inteligencia-de-mercado",
    navLabel: "Inteligência de Mercado e Operação",
    eyebrow: "Inteligência (IA)",
    title: "IA de mercado e de operação",
    lead: "Use IA para análise de mercado por segmento e análise operacional, identificando oportunidades de expansão e pontos de atenção da sua operação.",
    intro:
      "Modelos de IA cruzam dados de mercado e da sua operação para apontar onde crescer e o que ajustar.",
    features: [
      { icon: Sparkles, title: "Análise de mercado", desc: "Segmentos e regiões com maior potencial." },
      { icon: Building2, title: "Análise por CNAE", desc: "Oportunidades por segmento econômico." },
      { icon: TrendingUp, title: "Potencial de TPV", desc: "Estimativa de volume por região." },
      { icon: Activity, title: "Análise operacional", desc: "Pontos de atenção na sua operação." },
      { icon: Target, title: "Oportunidades de aquisição", desc: "Onde focar a expansão comercial." },
      { icon: Lightbulb, title: "Insights acionáveis", desc: "Dados que viram estratégia." },
    ],
    benefits: [
      "Expansão orientada por dados",
      "Identificação de oportunidades",
      "Pontos de atenção da operação",
      "Priorização de aquisição",
      "Crescimento de TPV",
    ],
    mediaLabel: "IA / mapa de oportunidades",
    closing: "Dados de mercado e operação viram estratégia.",
  },
  {
    slug: "monitoramento-de-risco",
    navLabel: "Monitoramento de Risco",
    eyebrow: "Risco e Compliance",
    title: "Monitoramento de risco e pré-compliance",
    lead: "Monitore continuamente o comportamento transacional para detectar operações fora do padrão e apoiar sua equipe de risco e compliance (pré-compliance).",
    intro:
      "Detecte comportamentos fora do padrão antes que virem problema, com monitoramento contínuo e alertas em tempo real.",
    features: [
      { icon: Activity, title: "Monitoramento de TPV", desc: "Variações bruscas de volume transacionado." },
      { icon: Fingerprint, title: "Perfil transacional", desc: "Detecção de perfis incompatíveis." },
      { icon: ShieldAlert, title: "Operações suspeitas", desc: "Sinais de comportamento atípico." },
      { icon: Bell, title: "Alertas em tempo real", desc: "Notificações imediatas de risco." },
      { icon: Gauge, title: "Análise comportamental", desc: "Padrão de cada estabelecimento." },
      { icon: ShieldCheck, title: "Apoio ao compliance", desc: "Pré-compliance para o seu time de risco." },
    ],
    benefits: [
      "Detecção precoce de risco",
      "Apoio ao time de compliance",
      "Alertas em tempo real",
      "Monitoramento contínuo",
      "Mais segurança para a operação",
    ],
    mediaLabel: "Monitoramento / alertas de risco",
    closing: "Risco identificado antes de virar problema.",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
