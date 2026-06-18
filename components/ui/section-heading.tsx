import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { FadeIn } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "default",
  className,
  maxWidth = "max-w-2xl",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  className?: string;
  maxWidth?: string;
}) {
  const onDark = tone === "onDark";
  return (
    <FadeIn
      className={cn(
        align === "center" && "mx-auto text-center",
        maxWidth,
        className
      )}
    >
      {eyebrow && (
        <Eyebrow
          tone={onDark ? "onDark" : "default"}
          className={cn("mb-5", align === "center" && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-h2 font-semibold tracking-tight",
          onDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            onDark ? "text-white/70" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      )}
    </FadeIn>
  );
}
