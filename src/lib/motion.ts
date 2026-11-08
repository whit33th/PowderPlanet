import type { Transition, Variants } from "motion/react";

export const enterEase = [0.16, 1, 0.3, 1] as const;

export const enterTransition: Transition = {
  duration: 0.4,
  ease: enterEase,
};

export const hoverTransition: Transition = {
  duration: 0.18,
  ease: enterEase,
};

export const viewport = { once: true, margin: "-8% 0px" } as const;

export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, ease: enterEase } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: enterTransition,
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const imageSettle: Variants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: enterEase },
  },
};
