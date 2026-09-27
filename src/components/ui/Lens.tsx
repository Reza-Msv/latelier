"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  className?: string;
  lensClassName?: string;
}

export function Lens({
  children,
  zoomFactor = 2,
  lensSize = 170,
  isStatic = false,
  className,
  lensClassName,
}: LensProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  const [containerDimensions, setContainerDimensions] = useState<{ width: number; height: number }>({
    width: 600,
    height: 450,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (containerRef.current) {
      setContainerDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
    setIsHovering(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden cursor-crosshair select-none", className)}
    >
      {children}
      <AnimatePresence>
        {(isHovering || isStatic) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: `${mousePosition.x - lensSize / 2}px`,
              top: `${mousePosition.y - lensSize / 2}px`,
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              pointerEvents: "none",
            }}
            className={cn(
              "rounded-full border-2 border-white/80 shadow-[0_0_25px_rgba(234,88,12,0.35)] backdrop-brightness-110 overflow-hidden z-30",
              lensClassName
            )}
          >
            <div
              style={{
                position: "absolute",
                width: `${containerDimensions.width}px`,
                height: `${containerDimensions.height}px`,
                transform: `translate(-${mousePosition.x * zoomFactor - lensSize / 2}px, -${
                  mousePosition.y * zoomFactor - lensSize / 2
                }px) scale(${zoomFactor})`,
                transformOrigin: "0 0",
              }}
              className="pointer-events-none"
            >
              {children}
            </div>
            {/* Crosshair indicator */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-2 h-2 rounded-full bg-white ring-2 ring-orange-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
