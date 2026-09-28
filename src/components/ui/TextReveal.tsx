"use client";

import React, { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  subtext?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className, subtext }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <div className="mx-auto max-w-5xl py-8">
        {subtext && (
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#EA580C] mb-4">
            {subtext}
          </p>
        )}
        <p className="flex flex-wrap font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight uppercase">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mx-1.5 lg:mx-2.5 my-1">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }} className="text-current">
        {children}
      </motion.span>
    </span>
  );
};
