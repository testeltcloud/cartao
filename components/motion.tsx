"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Reveal on scroll sem dependências de animação.
   Usa um único IntersectionObserver compartilhado + classes CSS.
   A API (FadeIn / Stagger / StaggerItem / HoverLift) é mantida para
   não exigir mudanças nas seções.
   ------------------------------------------------------------------ */

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callbacks.get(entry.target)?.();
            sharedObserver!.unobserve(entry.target);
            callbacks.delete(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
    );
  }
  return sharedObserver;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => el.classList.add("is-in");
    const obs = getObserver();
    if (!obs) {
      reveal(); // sem suporte a IO → mostra direto
      return;
    }
    callbacks.set(el, reveal);
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);
  return ref;
}

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** Fade + leve subida ao entrar na viewport. */
export function FadeIn({
  children,
  delay = 0,
  y = 18,
  className,
  style,
  ...rest
}: DivProps & { delay?: number; y?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
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
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
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

/** Realce sutil ao passar o mouse (CSS puro, sem JS). */
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
