"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 16, className }: MeteorsProps) {
  const meteors = useMemo(() => {
    return Array.from({ length: number }).map((_, index) => {
      // Deterministic calculation based on index to ensure SSR purity
      const top = ((index * 37 + 13) % 80) + "%";
      const left = ((index * 43 + 7) % 90) + "%";
      const delay = (((index * 17) % 8) * 0.1 + 0.2).toFixed(2) + "s";
      const duration = (((index * 23) % 6) + 4) + "s";

      return {
        id: index,
        top,
        left,
        animationDelay: delay,
        animationDuration: duration,
      };
    });
  }, [number]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-200 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:bg-gradient-to-r before:from-orange-500/80 before:to-transparent before:content-['']"
          )}
        />
      ))}
    </div>
  );
}
