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
        <path
          d="M11 9.5h7.2a4.3 4.3 0 0 1 0 8.6H14v4.4"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22.2" cy="13.8" r="1.5" className="fill-accent" />
      </svg>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Pagare</span>
      )}
    </span>
  );
}
