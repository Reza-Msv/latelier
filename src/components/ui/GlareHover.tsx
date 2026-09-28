"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlareHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareWidth?: number;
  interactive?: boolean;
}

export function GlareHover({
  children,
  className,
  glareColor = "rgba(255, 255, 255, 0.25)",
  glareOpacity = 0.6,
  glareAngle = 125,
  glareWidth = 60,
  interactive = true,
  ...props
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden group isolate", className)}
      style={
        {
          "--glare-x": `${coords.x}%`,
          "--glare-y": `${coords.y}%`,
          "--glare-angle": `${glareAngle}deg`,
          "--glare-width": `${glareWidth}%`,
          "--glare-color": glareColor,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}

      {/* Diagonal Glare Sweep Overlay */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 ease-out",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: `radial-gradient(circle at var(--glare-x) var(--glare-y), var(--glare-color) 0%, transparent var(--glare-width)), linear-gradient(var(--glare-angle), transparent 20%, var(--glare-color) 50%, transparent 80%)`,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
