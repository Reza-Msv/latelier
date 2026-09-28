"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface DiaTextRevealProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string;
  duration?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function DiaTextReveal({
  children,
  className,
  gradientColors = "from-[#F97316] via-[#FACC15] to-[#EA580C]",
  duration = 1.2,
  delay = 0.2,
  as: Component = "h2",
}: DiaTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  return (
    <div ref={containerRef} className="relative inline-block overflow-hidden isolate">
      <Component className={cn("relative inline-block", className)}>
        {children}

        {/* Sliding Color Band Mask */}
        <motion.div
          aria-hidden="true"
          initial={{ x: "-100%", opacity: 0.9 }}
          animate={isInView ? { x: "100%", opacity: 0 } : { x: "-100%", opacity: 0.9 }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "absolute inset-0 z-10 pointer-events-none bg-gradient-to-r mix-blend-color-dodge",
            gradientColors
          )}
        />
      </Component>
    </div>
  );
}
