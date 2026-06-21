import {
  ShieldCheck,
  Activity,
  Fingerprint,
  ShieldAlert,
  ScanLine,
  BellRing,
  Eye,
} from "lucide-react";

const SINAIS = [
  { icon: Activity, label: "Alterações bruscas de TPV", short: "TPV" },
  { icon: Fingerprint, label: "Perfil transacional incompatível", short: "Perfil" },
  { icon: ShieldAlert, label: "Operações suspeitas", short: "Suspeitas" },
  { icon: ScanLine, label: "Análise comportamental", short: "Comportamento" },
  { icon: BellRing, label: "Alertas em tempo real", short: "Alertas" },
  { icon: Eye, label: "Monitoramento preventivo", short: "Preventivo" },
];

/* Órbita de sinais — núcleo de risco com varredura girando que "passa"
   pelos 6 sinais ao redor. */
export function SignalsOrbit() {
  return (
    <div className="relative mx-auto my-2 aspect-square w-full max-w-md">
      {/* anéis */}
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-[16%] rounded-full border border-line/70" />
      <div className="absolute inset-[32%] rounded-full border border-line/50" />

      {/* varredura girando */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute inset-0 animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(14,115,97,0.22)_55deg,transparent_95deg)]" />
      </div>

      {/* núcleo */}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lift">
        <ShieldCheck className="h-6 w-6" strokeWidth={1.8} aria-hidden />
      </div>

      {/* sinais ao redor */}
      {SINAIS.map((s, i) => {
        const angle = ((-90 + i * 60) * Math.PI) / 180;
        const r = 40;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        return (
          <div
            key={s.label}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background text-accent shadow-soft">
              <s.icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            </span>
            <span className="whitespace-nowrap rounded bg-background/85 px-1.5 py-0.5 text-[11px] font-medium text-ink-soft backdrop-blur-sm">
              {s.short}
            </span>
          </div>
        );
      })}
    </div>
  );
}
