import { cn } from "@/lib/utils";

/** Marca + wordmark. Monocromático (herda currentColor), troque livremente. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="none"
        aria-hidden
        role="img"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="9"
          className="fill-ink"
        />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          className="fill-white"
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "-0.3px",
            fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
          }}
        >
          LT
        </text>
        <circle cx="24.5" cy="9.5" r="1.6" className="fill-accent" />
      </svg>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">LTCard</span>
      )}
    </span>
  );
}
