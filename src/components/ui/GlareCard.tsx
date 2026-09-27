"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

export function GlareCard({
  children,
  className,
  glareColor = "rgba(249, 115, 22, 0.12)",
}: GlareCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<{
    transform: string;
    glareX: number;
    glareY: number;
    glareOpacity: number;
  }>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: 0.7,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: style.transform,
        transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
        transformStyle: "preserve-3d",
      }}
      className={cn("relative overflow-hidden rounded-2xl will-change-transform", className)}
    >
      {children}
      {/* Glare overlay */}
      <div
        style={{
          background: `radial-gradient(circle 280px at ${style.glareX}% ${style.glareY}%, ${glareColor}, transparent 80%)`,
          opacity: style.glareOpacity,
          transition: "opacity 0.3s ease-out",
        }}
        className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay"
      />
    </div>
  );
}
