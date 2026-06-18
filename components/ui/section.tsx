import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "default" | "surface" | "ink";

const tones: Record<Tone, string> = {
  default: "bg-background text-ink",
  surface: "bg-surface text-ink",
  ink: "bg-ink text-white",
};

export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-28",
        tones[tone],
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
