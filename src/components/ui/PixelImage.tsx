"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PixelImageProps {
  src: string;
  alt: string;
  className?: string;
  pixelSize?: number;
  hoverToClear?: boolean;
  aspectRatio?: string;
}

export function PixelImage({
  src,
  alt,
  className,
  pixelSize = 16,
  hoverToClear = true,
  aspectRatio = "aspect-[4/3]",
}: PixelImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      // Draw low-res then scale up for pixelation
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      const scaledW = Math.max(1, Math.floor(w / pixelSize));
      const scaledH = Math.max(1, Math.floor(h / pixelSize));

      offCanvas.width = scaledW;
      offCanvas.height = scaledH;

      offCtx.drawImage(img, 0, 0, scaledW, scaledH);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(offCanvas, 0, 0, scaledW, scaledH, 0, 0, w, h);
    };
  }, [src, pixelSize]);

  return (
    <div
      onMouseEnter={() => hoverToClear && setIsHovered(true)}
      onMouseLeave={() => hoverToClear && setIsHovered(false)}
      className={cn("relative overflow-hidden group isolate", aspectRatio, className)}
    >
      {/* High Res Crisp Image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          "object-cover transition-opacity duration-700 ease-in-out",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Pixelated Canvas Overlay */}
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out pointer-events-none",
          isLoaded && !isHovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
