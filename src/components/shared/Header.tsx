"use client";

import React, { useState, useEffect } from "react";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-6 sm:px-12 md:px-16 py-5 md:py-6",
          isScrolled
            ? "bg-[#17120F]/85 backdrop-blur-md border-b border-[#FFF7ED]/10 shadow-sm py-4 md:py-4.5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3 select-none"
            aria-label="L'Atelier & Table home"
          >
            <div className="h-7 w-7 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-serif text-sm font-bold tracking-tighter shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FFF7ED] group-hover:text-[#F97316] transition-colors">
                L&apos;ATELIER
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#FFF7ED]/60 -mt-1">
                &amp; TABLE • PARIS
              </span>
            </div>
          </a>

          {/* Clean Menu Action */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            className={cn(
              "group relative flex items-center gap-3 px-5 py-2.5 min-h-[44px] rounded-full border transition-all duration-300 text-xs font-mono tracking-[0.2em] uppercase",
              isScrolled
                ? "bg-[#FFF7ED]/10 hover:bg-[#EA580C] text-[#FFF7ED] border-[#FFF7ED]/20 hover:border-[#EA580C]"
                : "bg-black/30 hover:bg-[#EA580C] text-[#FFF7ED] border-white/20 hover:border-[#EA580C] backdrop-blur-md shadow-lg"
            )}
          >
            <span className="relative z-10 transition-colors">MENU</span>
            <div className="flex flex-col gap-1 w-4">
              <span className="h-[1.5px] w-full bg-[#FFF7ED] transition-transform group-hover:translate-x-0.5" />
              <span className="h-[1.5px] w-2.5 bg-[#EA580C] group-hover:w-full group-hover:bg-[#FFF7ED] transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Modal */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
