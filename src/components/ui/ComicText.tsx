"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComicTextProps {
  children: React.ReactNode;
  className?: string;
  shadowColor?: string;
  textColor?: string;
}

export function ComicText({
  children,
  className,
  shadowColor = "#17120F",
  textColor = "#FACC15",
}: ComicTextProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, rotate: -1.5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "inline-block font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border-2 border-[#17120F] select-none",
        className
      )}
      style={{
        backgroundColor: textColor,
        color: "#17120F",
        boxShadow: `3px 3px 0px ${shadowColor}`,
      }}
    >
      {children}
    </motion.span>
  );
}
