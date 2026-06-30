"use client";

import { useRef, useState } from "react";
import {
  CreditCard,
  Coins,
  Shield,
  UserCheck,
  Users,
  Banknote,
  RefreshCw,
  FileSearch,
  CheckCircle,
} from "lucide-react";

type Node = {
  id: number;
  title: string;
  desc: string;
  x: number;
  y: number;
  icon: React.ElementType;
};

const nodesData: Node[] = [
  { id: 0, title: "Captura da Transação", desc: "Processamento instantâneo", x: 15, y: 15, icon: CreditCard },
  { id: 1, title: "Split de Pagamentos", desc: "Divisão automática de comissão", x: 50, y: 15, icon: Coins },
  { id: 2, title: "White Label Master", desc: "Operação principal creditada", x: 85, y: 15, icon: Shield },
  { id: 3, title: "Gestor da Conta", desc: "Comissão do gestor/operação", x: 85, y: 45, icon: UserCheck },
  { id: 4, title: "Vendedor Responsável", desc: "Comissão direta do vendedor", x: 50, y: 45, icon: Users },
  { id: 5, title: "Liquidação Financeira", desc: "Processamento e envio de saldos", x: 15, y: 45, icon: Banknote },
  { id: 6, title: "Conciliação EDI", desc: "Conciliação automatizada de arquivos", x: 15, y: 75, icon: RefreshCw },
  { id: 7, title: "Auditoria de Divergências", desc: "Identificação rápida no fluxo", x: 50, y: 75, icon: FileSearch },
  { id: 8, title: "Rastreabilidade Completa", desc: "Fluxo concluído com segurança", x: 85, y: 75, icon: CheckCircle },
];

// Tempos da cascata (em segundos), sincronizados com o vídeo.
const animationStartTime = 3.5; // começa quando o celular se afasta
const nodePauseDuration = 0.4;
const lineDrawDuration = 0.3;
const cycleLength = nodePauseDuration + lineDrawDuration;

const ACCENT = "#0e7361";

export function FinancialFlow() {
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);
  const [lines, setLines] = useState<{ index: number; progress: number }[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;

    if (t < animationStartTime) {
      setVisibleNodes([]);
      setLines([]);
      return;
    }

    const nodes = [0];
    const newLines: { index: number; progress: number }[] = [];

    for (let i = 1; i < nodesData.length; i++) {
      const lineStart =
        animationStartTime + (i - 1) * cycleLength + nodePauseDuration;
      const nodeStart = lineStart + lineDrawDuration;
      if (t >= lineStart) {
        newLines.push({
          index: i - 1,
          progress: Math.min((t - lineStart) / lineDrawDuration, 1),
        });
      }
      if (t >= nodeStart) nodes.push(i);
    }

    setVisibleNodes(nodes);
    setLines(newLines);
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-lift">
      <video
        ref={videoRef}
        className="block aspect-video w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/video-cartao-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/video-cartao-web.mp4" type="video/mp4" />
      </video>

      {/* Linhas de rastreabilidade */}
      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        aria-hidden
      >
        <defs>
          <filter id="flow-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Guia permanente (caminho pontilhado) */}
        {nodesData.map((node, i) => {
          if (i === nodesData.length - 1) return null;
          const next = nodesData[i + 1];
          return (
            <line
              key={`bg-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke={ACCENT}
              strokeWidth="1.5"
              strokeDasharray="3 6"
              opacity="0.3"
            />
          );
        })}

        {/* Linhas ativas com fluxo de dados */}
        {lines.map((line) => {
          const n1 = nodesData[line.index];
          const n2 = nodesData[line.index + 1];
          const cx = n1.x + (n2.x - n1.x) * line.progress;
          const cy = n1.y + (n2.y - n1.y) * line.progress;
          return (
            <line
              key={`active-${line.index}`}
              x1={`${n1.x}%`}
              y1={`${n1.y}%`}
              x2={`${cx}%`}
              y2={`${cy}%`}
              stroke={ACCENT}
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#flow-glow)"
              className="flow-dash opacity-95"
            />
          );
        })}
      </svg>

      {/* Pop-ups (cards de notificação sobre o vídeo) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {nodesData.map((node) => {
          const isVisible = visibleNodes.includes(node.id);
          const Icon = node.icon;
          return (
            <div
              key={`node-${node.id}`}
              className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-700 ease-out ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "translate-y-6 scale-50 opacity-0"
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {/* ponto luminoso */}
              <span className="absolute z-10 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(14,115,97,0.8)]" />

              {/* card glass */}
              <div className="z-20 mt-8 flex w-max max-w-[150px] items-center gap-1.5 rounded-lg border border-white/50 bg-white/65 px-2 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.7)] backdrop-blur-2xl backdrop-saturate-150 sm:max-w-[190px] sm:gap-2 sm:rounded-xl sm:px-2.5 sm:py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-black/5 bg-white/60 text-accent sm:h-8 sm:w-8">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.4} aria-hidden />
                </span>
                <div className="min-w-0 text-left leading-tight">
                  <p className="text-[0.48rem] font-extrabold uppercase tracking-wider text-ink sm:text-[0.56rem]">
                    {node.title}
                  </p>
                  <p className="mt-0.5 text-[0.58rem] font-semibold text-muted sm:text-[0.68rem]">
                    {node.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
