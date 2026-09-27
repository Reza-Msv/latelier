"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PointerProps {
  children: React.ReactNode;
  name?: string;
  className?: string;
  badgeClassName?: string;
}

export function Pointer({
  children,
  name = "CHEF'S PICK",
  className,
  badgeClassName,
}: PointerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden group", className)}
    >
      {children}
      <AnimatePresence>
        {isInside && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              left: `${position.x + 12}px`,
              top: `${position.y + 12}px`,
            }}
            className={cn(
              "pointer-events-none absolute z-40 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#17120F]/90 text-white text-[10px] font-mono uppercase tracking-widest backdrop-blur-md shadow-lg border border-white/20",
              badgeClassName
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            <span>{name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
