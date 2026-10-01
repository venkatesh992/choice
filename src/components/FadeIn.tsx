"use client";

import { motion, HTMLMotionProps, Transition } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  effect?: "blur" | "scale" | "spring" | "basic";
  fullWidth?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up",
  effect = "spring",
  fullWidth = false,
  className = "",
  ...props
}: FadeInProps) {
  
  // Directional offsets
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  // Base starting states based on selected effect
  const getInitialState = () => {
    const base = { opacity: 0, ...directions[direction] };
    if (effect === "blur") return { ...base, filter: "blur(12px)", scale: 0.98 };
    if (effect === "scale" || effect === "spring") return { ...base, scale: 0.94 };
    return base;
  };

  // Base ending states
  const getInViewState = () => {
    const base = { opacity: 1, x: 0, y: 0 };
    if (effect === "blur") return { ...base, filter: "blur(0px)", scale: 1 };
    if (effect === "scale" || effect === "spring") return { ...base, scale: 1 };
    return base;
  };

  // Transitions
  const getTransition = (): Transition => {
    if (effect === "spring") {
      return {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        mass: 1,
        delay: delay,
      };
    }
    
    // Smooth ease for blur and scale
    return {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1], // Custom sleek ease-out
    };
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getInViewState()}
      viewport={{ once: true, margin: "-10%" }}
      transition={getTransition()}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
