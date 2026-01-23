import type { TMotion } from "../types";
import { Variants } from "framer-motion";

export const textVariant = () => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
  };
};

export const fadeIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
): Variants => {
  return {
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
  };
};

export const zoomIn = (
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
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
  };
};

export const slideIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
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
  };
};

// TYPING EFFECT - SINGLE
export const typingEffect = (
  duration: TMotion["duration"] = 1,
  delay: TMotion["delay"] = 0
): Variants => {
  return {
    hidden: {
      opacity: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "tween",
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  };
};

// TYPING EFFECT - REPEAT (berulang dengan mirror)
export const typingEffectRepeat = (
  duration: TMotion["duration"] = 1,
  delay: TMotion["delay"] = 0,
  repeatDelay: number = 1
): Variants => {
  return {
    hidden: {
      opacity: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "tween",
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const,
        repeatDelay,
      },
    },
  };
};

// TYPING EFFECT - LOOP (berulang dari awal)
export const typingEffectLoop = (
  duration: TMotion["duration"] = 1,
  delay: TMotion["delay"] = 0,
  repeatDelay: number = 1
): Variants => {
  return {
    hidden: {
      opacity: 0,
      width: 0,
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "tween",
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay,
      },
    },
  };
};

// CURSOR BLINK ANIMATION
export const cursorBlink: Variants = {
  blink: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};

// LETTER BY LETTER (untuk karakter individual)
export const letterVariant = (index: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.05,
        delay: index * 0.05,
      },
    },
  };
};