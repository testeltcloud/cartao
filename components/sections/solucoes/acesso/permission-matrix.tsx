import { Container } from "@/components/ui/container";
import { Users, KeyRound, Layers, Lock, ClipboardCheck, Eye } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const FEATURES = [
  {
    icon: Users,
    title: "Multiusuário",
    desc: "Usuários por nível e por operação, sob a mesma instância.",
    tag: "scope: org",
  },
  {
    icon: KeyRound,
    title: "Grupos de acesso",
    desc: "Perfis de permissão configuráveis e reutilizáveis.",
    tag: "roles",
  },
  {
    icon: Layers,
    title: "Escopo operacional",
    desc: "Acesso por marca, unidade e hierarquia da operação.",
    tag: "scope: brand",
  },
  {
    icon: Lock,
    title: "Controle granular",
    desc: "Permissões finas por funcionalidade, módulo a módulo.",
    tag: "granular",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoria de acessos",
    desc: "Trilhas de quem acessou o quê, quando e com qual escopo.",
    tag: "audit",
  },
  {
    icon: Eye,
    title: "Visibilidade por escopo",
    desc: "Cada operação enxerga apenas o que lhe compete.",
    tag: "least-priv",
  },
];

export function PermissionMatrix() {
  return (
    <section className="border-b border-white/5 bg-[#010102] py-28 text-white sm:py-32">
      <Container>
        <FadeIn className="max-w-2xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-emerald-400/70">
            // Matriz de permissões
          </span>
          <h2 className="font-display text-4xl font-normal tracking-tight sm:text-5xl">
            Cada recurso é um{" "}
            <span className="text-white/45">painel de controle.</span>
          </h2>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group flex h-full flex-col bg-[#050608] p-6 transition-colors duration-300 hover:bg-[#0a0c11] sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-emerald-400 transition-colors duration-300 group-hover:border-emerald-500/40">
                    <f.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  {/* toggle "concedido" */}
                  <span className="inline-flex h-5 w-9 items-center rounded-full bg-emerald-500/90 px-0.5">
                    <span className="ml-auto h-4 w-4 rounded-full bg-white" />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/45">
                  {f.desc}
                </p>
                <p className="mt-5 font-mono text-[11px] text-emerald-400/60">
                  {f.tag}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
