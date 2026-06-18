import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion";

export function CheckList({
  items,
  columns = 1,
  tone = "default",
  className,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
  tone?: "default" | "onDark";
  className?: string;
}) {
  const onDark = tone === "onDark";
  const cols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <Stagger className={cn("grid gap-x-8 gap-y-3.5", cols, className)} gap={0.05}>
      {items.map((item) => (
        <StaggerItem key={item} className="flex items-start gap-3" y={10}>
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              onDark ? "bg-white/10 text-white" : "bg-accent-soft text-accent"
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span
            className={cn(
              "text-[0.95rem] leading-snug",
              onDark ? "text-white/75" : "text-ink-soft"
            )}
          >
            {item}
          </span>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
