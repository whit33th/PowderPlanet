"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeOnly, fadeUp, stagger, viewport } from "@/lib/motion";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={reduce ? fadeOnly : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </m.div>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={reduce ? fadeOnly : stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <m.div className={className} variants={reduce ? fadeOnly : fadeUp}>
      {children}
    </m.div>
  );
}

export function MaskHeading({
  children,
  className,
  level = "h2",
}: {
  children: ReactNode;
  className?: string;
  level?: "h1" | "h2";
}) {
  const reduce = useReducedMotion();
  const Outer = level === "h1" ? m.h1 : m.h2;

  return (
    <Outer
      className="block overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <m.span
        className={`block pb-[0.12em] ${className ?? ""}`}
        variants={{
          hidden: reduce ? { opacity: 0 } : { y: "110%" },
          show: reduce ? { opacity: 1 } : { y: "0%" },
        }}
        transition={{ duration: reduce ? 0.2 : 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.span>
    </Outer>
  );
}
