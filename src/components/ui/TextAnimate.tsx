"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "blurIn" | "fadeIn" | "slideUp" | "scaleUp";

interface TextAnimateProps {
  children: string;
  className?: string;
  type?: AnimationType;
  by?: "character" | "word" | "line";
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  once?: boolean;
}

const animationVariants: Record<AnimationType, { container: Variants; item: Variants }> = {
  blurIn: {
    container: {
      hidden: { opacity: 0 },
      show: (stagger = 0.04) => ({
        opacity: 1,
        transition: { staggerChildren: stagger },
      }),
    },
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 8 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      show: (stagger = 0.04) => ({
        opacity: 1,
        transition: { staggerChildren: stagger },
      }),
    },
    item: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  },
  slideUp: {
    container: {
      hidden: { opacity: 0 },
      show: (stagger = 0.04) => ({
        opacity: 1,
        transition: { staggerChildren: stagger },
      }),
    },
    item: {
      hidden: { opacity: 0, y: 24 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },
  scaleUp: {
    container: {
      hidden: { opacity: 0 },
      show: (stagger = 0.04) => ({
        opacity: 1,
        transition: { staggerChildren: stagger },
      }),
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      },
    },
  },
};

export function TextAnimate({
  children,
  className,
  type = "blurIn",
  by = "word",
  delay = 0,
  stagger = 0.04,
  as: Component = "span",
  once = true,
}: TextAnimateProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, margin: "-10% 0px -10% 0px" });

  const selectedAnimation = animationVariants[type] || animationVariants.blurIn;

  let segments: string[] = [];
  if (by === "character") {
    segments = Array.from(children);
  } else if (by === "word") {
    segments = children.split(" ");
  } else {
    segments = children.split("\n");
  }

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        ref={containerRef}
        variants={selectedAnimation.container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        custom={stagger}
        transition={{ delayChildren: delay }}
        className="inline-block"
      >
        {segments.map((segment, index) => (
          <motion.span
            key={index}
            variants={selectedAnimation.item}
            className="inline-block"
          >
            {segment}
            {by === "word" && index < segments.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
