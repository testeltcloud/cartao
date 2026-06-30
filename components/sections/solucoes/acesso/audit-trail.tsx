"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "SUCCESS" | "GRANTED" | "BLOCKED";
type Log = { id: number; time: string; text: string; status: Status };

const POOL: { text: string; status: Status }[] = [
  { text: "user 'lucas' accessed 'Regional Dashboard'", status: "SUCCESS" },
  { text: "role 'gestor' updated permissions on 'unit_sp'", status: "GRANTED" },
  { text: "user 'ana' requested 'billing_access'", status: "BLOCKED" },
  { text: "scope 'brand:acme' isolated 1.204 records", status: "SUCCESS" },
  { text: "user 'rafael' rotated 'api_keys'", status: "GRANTED" },
  { text: "login from 'unknown_device' at 'op_17'", status: "BLOCKED" },
  { text: "user 'maria' exported 'audit_logs'", status: "SUCCESS" },
  { text: "permission 'split_payments' granted to 'op_42'", status: "GRANTED" },
  { text: "user 'joao' tried 'master_settings'", status: "BLOCKED" },
];

const STATUS_CLS: Record<Status, string> = {
  SUCCESS: "text-emerald-400",
  GRANTED: "text-emerald-400",
  BLOCKED: "text-rose-400",
};

function clock() {
  return new Date().toTimeString().slice(0, 8);
}

export function AuditTrail() {
  const [logs, setLogs] = useState<Log[]>([]);
  const cursor = useRef(0);
  const nextId = useRef(0);

  useEffect(() => {
    const seed: Log[] = POOL.slice(0, 4).map((l) => ({
      ...l,
      id: nextId.current++,
      time: clock(),
    }));
    setLogs(seed);
    cursor.current = 4;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const t = setInterval(() => {
      const item = POOL[cursor.current % POOL.length];
      cursor.current++;
      setLogs((prev) => [
        ...prev.slice(-7),
        { ...item, id: nextId.current++, time: clock() },
      ]);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#010102] py-28 text-white sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeIn>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-emerald-400/70">
              // Trilha de auditoria
            </span>
            <h2 className="font-display text-4xl font-normal tracking-tight sm:text-5xl">
              Rastreabilidade <br />
              <span className="text-white/45">de cada acesso.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/50">
              Toda ação fica registrada: quem acessou o quê, quando e com qual
              escopo. Auditoria pronta para compliance, em tempo real.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050608] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 flex items-center gap-1.5 font-mono text-[11px] text-white/40">
                  <TerminalSquare className="h-3 w-3" aria-hidden /> audit.log —
                  tail -f
                </span>
              </div>

              <div className="h-[20rem] overflow-hidden p-4 font-mono text-[12.5px] leading-relaxed sm:p-5 sm:text-[13px]">
                <AnimatePresence initial={false}>
                  {logs.map((l) => (
                    <motion.div
                      key={l.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-wrap items-center gap-x-2 py-1"
                    >
                      <span className="text-white/30">[{l.time}]</span>
                      <span className="text-white/70">{l.text}</span>
                      <span className="text-white/25">→</span>
                      <span className={cn("font-semibold", STATUS_CLS[l.status])}>
                        {l.status}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <span className="mt-1 inline-block h-3.5 w-2 animate-pulse bg-emerald-400/80 align-middle" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
