"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export function KineticText({
  children,
  className,
  as: Component = "span",
}: KineticTextProps) {
  const characters = Array.from(children);

  return (
    <Component className={cn("inline-flex flex-wrap select-none", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            scale: 1.25,
            y: -4,
            color: "#EA580C",
            transition: { type: "spring", stiffness: 500, damping: 12 },
          }}
          className="inline-block transition-colors cursor-default"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Component>
  );
}
