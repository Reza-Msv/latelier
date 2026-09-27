"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
  numCopies?: number;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
  numCopies = 4,
}: {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  numCopies?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className={cn("inline-flex whitespace-nowrap", className)} style={{ x }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <span key={i} className="inline-block pr-8">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  text,
  default_velocity = 3,
  className,
  numCopies = 5,
}: VelocityScrollProps) {
  return (
    <section className="relative w-full overflow-hidden py-4 select-none">
      <ParallaxText baseVelocity={default_velocity} className={className} numCopies={numCopies}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={-default_velocity} className={className} numCopies={numCopies}>
        {text}
      </ParallaxText>
    </section>
  );
}
