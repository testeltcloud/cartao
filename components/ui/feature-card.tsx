import { cn } from "@/lib/utils";
import { HoverLift } from "@/components/motion";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone = "default",
  className,
}: {
  icon: React.ElementType;
  title: string;
  description?: string;
  tone?: "default" | "onDark";
  className?: string;
}) {
  const onDark = tone === "onDark";
  return (
    <HoverLift
      className={cn(
        "h-full rounded-2xl border p-6 transition-colors duration-300",
        onDark
          ? "border-white/10 bg-white/[0.03] hover:border-white/20"
          : "border-line bg-background hover:border-line-strong hover:shadow-soft",
        className
      )}
    >
      <span
        className={cn(
          "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl",
          onDark ? "bg-white/[0.06] text-white" : "bg-surface text-accent"
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
      </span>
      <h3
        className={cn(
          "text-base font-semibold",
          onDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            onDark ? "text-white/60" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </HoverLift>
  );
}
