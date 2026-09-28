"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  href?: string;
  target?: string;
  dotColor?: string;
  bgColor?: string;
  textColor?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text = "EXPLORE",
      className,
      href,
      target,
      dotColor = "bg-[#FACC15]",
      bgColor = "bg-[#EA580C]",
      textColor = "text-white",
      onClick,
      ...props
    },
    ref
  ) => {
    const content = (
      <>
        {/* Default State */}
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 font-mono text-xs uppercase tracking-[0.2em]">
          {text}
        </span>

        {/* Floating Expanding Dot */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center">
          <div
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-[100] group-hover:opacity-100",
              dotColor
            )}
          />
        </div>

        {/* Hovered State with Arrow */}
        <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#17120F] opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100 font-mono text-xs uppercase tracking-[0.2em] font-bold">
          <span>{text}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </>
    );

    const baseClassNames = cn(
      "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 shadow-[0_10px_35px_rgba(234,88,12,0.35)] hover:shadow-[0_15px_45px_rgba(234,88,12,0.5)] active:scale-95",
      bgColor,
      textColor,
      className
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          className={baseClassNames}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        className={baseClassNames}
        {...props}
      >
        {content}
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
