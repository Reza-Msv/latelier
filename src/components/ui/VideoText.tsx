"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  videoSrc: string;
  fallbackImage?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export function VideoText({
  text,
  videoSrc,
  fallbackImage = "/images/hero/hero-steak.jpg",
  className,
  as: Component = "h2",
  ...props
}: VideoTextProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted on low power mode, fallback remains active
      });
    }
  }, []);

  return (
    <div className="relative inline-block isolate select-none">
      {/* Hidden Video Source that paints into background clip via modern CSS / Canvas overlay */}
      <div className="relative overflow-hidden inline-block">
        <Component
          className={cn(
            "relative font-serif font-bold uppercase tracking-tight bg-cover bg-center text-transparent bg-clip-text [-webkit-background-clip:text]",
            className
          )}
          style={{
            backgroundImage: `url(${fallbackImage})`,
          }}
          {...props}
        >
          {text}

          {/* Seamless video mask overlay container */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 block text-transparent bg-clip-text [-webkit-background-clip:text] transition-opacity duration-1000",
              videoLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            {/* The video element positioned inside text mask */}
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10 mix-blend-screen"
            />
            {text}
          </span>
        </Component>
      </div>
    </div>
  );
}
