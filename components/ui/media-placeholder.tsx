import { cn } from "@/lib/utils";
import { ImageIcon, Sparkles, Play, Shapes } from "lucide-react";

type Kind = "image" | "animation" | "video" | "svg";

const kindMeta: Record<Kind, { icon: React.ElementType; label: string }> = {
  image: { icon: ImageIcon, label: "Imagem" },
  animation: { icon: Sparkles, label: "Animação" },
  video: { icon: Play, label: "Vídeo" },
  svg: { icon: Shapes, label: "SVG / Ilustração" },
};

/**
 * Placeholder de mídia.
 *
 * Marca exatamente onde entram fotos, SVGs, vídeos e animações.
 * Para substituir: troque este componente por <Image .../> do next/image,
 * um <video/>, um Lottie ou o seu SVG. O frame mantém o layout estável
 * (sem layout shift) graças ao aspect-ratio definido.
 */
export function MediaPlaceholder({
  kind = "image",
  label,
  ratio = "16/9",
  className,
  tone = "default",
  children,
}: {
  kind?: Kind;
  label?: string;
  ratio?: string;
  className?: string;
  tone?: "default" | "onDark";
  children?: React.ReactNode;
}) {
  const meta = kindMeta[kind];
  const Icon = meta.icon;
  const onDark = tone === "onDark";

  return (
    <div
      data-media-slot={kind}
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        onDark
          ? "border border-white/10 bg-white/[0.03]"
          : "border border-line bg-surface",
        className
      )}
    >
      {/* Conteúdo final (foto/svg/animação) entra aqui. */}
      {children ?? (
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center",
            onDark ? "text-white/40" : "text-faint"
          )}
        >
          <div
            className={cn(
              "absolute inset-3 rounded-xl border border-dashed",
              onDark ? "border-white/15" : "border-line-strong"
            )}
            aria-hidden
          />
          <div
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-full",
              onDark ? "bg-white/[0.06]" : "bg-background"
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
          </div>
          <div className="relative">
            <p className="text-sm font-medium">{label ?? meta.label}</p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.16em]">
              {meta.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
