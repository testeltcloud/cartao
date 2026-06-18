import { cn } from "@/lib/utils";

export function Pill({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "onDark";
}) {
  const tones = {
    default: "border-line bg-background text-ink-soft",
    accent: "border-accent/20 bg-accent-soft text-accent-strong",
    onDark: "border-white/15 bg-white/[0.06] text-white/80",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
