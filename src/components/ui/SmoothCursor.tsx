"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SmoothCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "pointer" | "view">("default");
  const [cursorText, setCursorText] = useState("");
  const [isFinePointer, setIsFinePointer] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.5 };
  const cursorX = useSpring(rawX, springConfig);
  const cursorY = useSpring(rawY, springConfig);

  const dotConfig = { damping: 40, stiffness: 450, mass: 0.2 };
  const dotX = useSpring(rawX, dotConfig);
  const dotY = useSpring(rawY, dotConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    
    const updatePointerMode = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsFinePointer(e.matches);
    };

    updatePointerMode(mediaQuery);
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const cursorLabel = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (cursorLabel) {
        setCursorState("view");
        setCursorText(cursorLabel);
      } else if (cursorAttr === "view") {
        setCursorState("view");
        setCursorText("TASTE");
      } else if (cursorAttr === "lens") {
        setCursorState("view");
        setCursorText("INSPECT");
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']")
      ) {
        setCursorState("pointer");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isFinePointer, rawX, rawY]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Outer reactive circle */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState === "view" ? 80 : cursorState === "pointer" ? 44 : 28,
          height: cursorState === "view" ? 80 : cursorState === "pointer" ? 44 : 28,
          backgroundColor:
            cursorState === "view"
              ? "rgba(234, 88, 12, 0.9)"
              : cursorState === "pointer"
              ? "rgba(234, 88, 12, 0.15)"
              : "rgba(23, 18, 15, 0.08)",
          borderColor:
            cursorState === "view"
              ? "rgba(255, 255, 255, 0.8)"
              : cursorState === "pointer"
              ? "rgba(234, 88, 12, 0.6)"
              : "rgba(23, 18, 15, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-solid backdrop-blur-[1px] flex items-center justify-center text-white text-[10px] font-bold tracking-widest uppercase shadow-sm"
      >
        {cursorState === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none tracking-widest font-sans"
          >
            {cursorText || "EXPLORE"}
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      {cursorState !== "view" && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 rounded-full bg-[#EA580C]"
        />
      )}
    </>
  );
}
