import { cn } from "@/lib/utils";

/** Rótulo curto em caixa-alta sobre o título de cada seção. */
export function Eyebrow({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "onDark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em]",
        tone === "onDark" ? "text-white/60" : "text-muted",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "onDark" ? "bg-white/30" : "bg-accent"
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}
