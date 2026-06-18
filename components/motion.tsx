import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Componentes de reveal — agora SERVER COMPONENTS (zero JS/hidratação).
   Eles apenas marcam o DOM com data-attributes + CSS vars.
   Um único <RevealController> (client) observa tudo de uma vez.
   A API (FadeIn / Stagger / StaggerItem / HoverLift) é mantida.
   ------------------------------------------------------------------ */

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** Fade + leve subida ao entrar na viewport (animado via CSS). */
export function FadeIn({
  children,
  delay = 0,
  y = 18,
  className,
  style,
  ...rest
}: DivProps & { delay?: number; y?: number }) {
  return (
    <div
      data-reveal
      className={className}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}s`,
          "--reveal-y": `${y}px`,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}

/** Container que escalona a entrada dos filhos diretos (<StaggerItem>). */
export function Stagger({
  children,
  gap = 0.08,
  delay = 0,
  className,
  style,
  ...rest
}: DivProps & { gap?: number; delay?: number }) {
  return (
    <div
      data-stagger
      className={className}
      style={
        {
          ...style,
          "--stagger-gap": `${gap}s`,
          "--stagger-delay": `${delay}s`,
        } as React.CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  y = 18,
  className,
  style,
  ...rest
}: DivProps & { y?: number }) {
  return (
    <div
      className={className}
      style={{ ...style, "--reveal-y": `${y}px` } as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Realce sutil ao passar o mouse (CSS puro). */
export function HoverLift({ children, className, ...rest }: DivProps) {
  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
