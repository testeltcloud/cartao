"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
const EASE = [0.22, 1, 0.36, 1] as const;

type FadeInProps = HTMLMotionProps<"div"> & {
  /** Atraso em segundos */
  delay?: number;
  /** Deslocamento vertical inicial (px) */
  y?: number;
  /** Dispara só uma vez */
  once?: boolean;
};

/** Aparece com fade + leve subida ao entrar na viewport. */
export function FadeIn({
  children,
  delay = 0,
  y = 18,
  once = true,
  ...props
}: FadeInProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Container que orquestra a entrada escalonada dos filhos <StaggerItem>. */
export function Stagger({
  children,
  delay = 0,
  gap = 0.08,
  once = true,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; gap?: number; once?: boolean }) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  y = 18,
  ...props
}: HTMLMotionProps<"div"> & { y?: number }) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

/** Pequeno realce ao passar o mouse — usado em cards. */
export function HoverLift({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
