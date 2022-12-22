import { Variants } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: { type: "spring", stiffness: 300, damping: 140 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.5 },
  },
};

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-200%" : direction === "right" ? "200%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (
  delayChildren: number,
  staggerChildren: number
) => ({
  hidden: {},
  show: {
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const textVariant = (delay: number = 0) => ({
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textVariant2: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const planetVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-150%" : "150%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: { type: "spring", duration: 2.2, delay: 0.5 },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 250,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
