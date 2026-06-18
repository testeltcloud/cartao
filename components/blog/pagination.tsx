import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { pageHref } from "@/lib/posts";

/** Monta a lista de páginas com reticências quando há muitas. */
function buildItems(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const items = new Set<number>([1, total, current]);
  if (current - 1 > 1) items.add(current - 1);
  if (current + 1 < total) items.add(current + 1);
  const sorted = [...items].sort((a, b) => a - b);

  const out: (number | "...")[] = [];
  let prev = 0;
  for (const n of sorted) {
    if (prev && n - prev > 1) out.push("...");
    out.push(n);
    prev = n;
  }
  return out;
}

const cellBase =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export function Pagination({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  if (total <= 1) return null;
  const items = buildItems(current, total);
  const hasPrev = current > 1;
  const hasNext = current < total;

  return (
    <nav
      aria-label="Paginação do blog"
      className="mt-14 flex items-center justify-center gap-1.5"
    >
      {/* Anterior */}
      {hasPrev ? (
        <Link
          href={pageHref(current - 1)}
          rel="prev"
          aria-label="Página anterior"
          className={cn(cellBase, "border border-line text-ink hover:bg-surface")}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </Link>
      ) : (
        <span
          aria-hidden
          className={cn(cellBase, "border border-line text-faint opacity-50")}
        >
          <ChevronLeft className="h-4 w-4" />
        </span>
      )}

      {/* Números */}
      {items.map((item, i) =>
        item === "..." ? (
          <span
            key={`gap-${i}`}
            className="inline-flex h-10 min-w-10 items-center justify-center text-sm text-faint"
            aria-hidden
          >
            …
          </span>
        ) : item === current ? (
          <span
            key={item}
            aria-current="page"
            className={cn(cellBase, "bg-ink text-white")}
          >
            {item}
          </span>
        ) : (
          <Link
            key={item}
            href={pageHref(item)}
            aria-label={`Página ${item}`}
            className={cn(cellBase, "border border-line text-ink hover:bg-surface")}
          >
            {item}
          </Link>
        )
      )}

      {/* Próxima */}
      {hasNext ? (
        <Link
          href={pageHref(current + 1)}
          rel="next"
          aria-label="Próxima página"
          className={cn(cellBase, "border border-line text-ink hover:bg-surface")}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : (
        <span
          aria-hidden
          className={cn(cellBase, "border border-line text-faint opacity-50")}
        >
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}
