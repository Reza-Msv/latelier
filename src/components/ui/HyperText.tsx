"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em";
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: string;
}

const DEFAULT_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTERS,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const iterationsRef = useRef(0);

  const triggerAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    iterationsRef.current = 0;

    const intervalTime = duration / (children.length * 2);

    const interval = setInterval(() => {
      setDisplayText(() =>
        children
          .split("")
          .map((char, index) => {
            if (char === " " || char === "•" || char === "/" || char === "-" || char === "'" || char === "&") {
              return char;
            }
            if (index < iterationsRef.current) {
              return children[index];
            }
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
          .join("")
      );

      iterationsRef.current += 0.5;

      if (iterationsRef.current >= children.length) {
        clearInterval(interval);
        setDisplayText(children);
        setIsAnimating(false);
      }
    }, intervalTime);
  }, [children, characterSet, duration, isAnimating]);

  useEffect(() => {
    if (startOnView && isInView) {
      const timer = setTimeout(() => {
        triggerAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, startOnView, delay, triggerAnimation]);

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLSpanElement & HTMLDivElement & HTMLHeadingElement & HTMLParagraphElement>}
      onMouseEnter={() => {
        if (animateOnHover) triggerAnimation();
      }}
      className={cn("inline-block font-mono select-none cursor-default", className)}
    >
      {displayText}
    </Component>
  );
}
