"use client";

import React, { useState } from "react";
import { Bookmark, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConfettiButtonProps {
  children?: React.ReactNode;
  recipeName?: string;
  className?: string;
  variant?: "primary" | "secondary" | "pill" | "icon";
  onClick?: () => void;
}

export function ConfettiButton({
  children,
  recipeName = "recipe",
  className,
  variant = "pill",
  onClick,
}: ConfettiButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Trigger culinary celebration confetti
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x, y },
        colors: ["#F97316", "#EA580C", "#FACC15", "#DC2626", "#FFF7ED"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
        scalar: 0.9,
      });
    });

    setIsSaved((prev) => !prev);
    if (onClick) onClick();
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        aria-label={isSaved ? `Remove ${recipeName} from saved` : `Save ${recipeName} to recipe book`}
        className={cn(
          "relative flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 backdrop-blur-md",
          isSaved
            ? "bg-[#EA580C] text-white shadow-[0_0_15px_rgba(234,88,12,0.4)]"
            : "bg-white/80 text-[#17120F] hover:bg-white hover:scale-105 border border-black/5 shadow-sm",
          className
        )}
      >
        {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        onClick={handleClick}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 overflow-hidden",
          isSaved
            ? "bg-[#17120F] text-white ring-2 ring-[#EA580C]"
            : "bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_15px_35px_rgba(234,88,12,0.45)] hover:-translate-y-0.5",
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isSaved ? (
            <>
              <Check className="w-4 h-4 text-amber-300" />
              <span>SAVED TO TASTEBOOK</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-200 transition-transform group-hover:rotate-12" />
              <span>{children || "SAVE MASTER RECIPE"}</span>
            </>
          )}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 backdrop-blur-md border",
        isSaved
          ? "bg-[#EA580C] text-white border-transparent shadow-md"
          : "bg-white/80 hover:bg-white text-[#17120F] border-[#17120F]/10 hover:border-[#EA580C]/40 hover:shadow-sm",
        className
      )}
    >
      {isSaved ? (
        <>
          <Check className="w-3.5 h-3.5 text-amber-300" />
          <span>Saved</span>
        </>
      ) : (
        <>
          <Bookmark className="w-3.5 h-3.5 text-[#EA580C] transition-transform group-hover:scale-110" />
          <span>{children || "Save Recipe"}</span>
        </>
      )}
    </button>
  );
}
