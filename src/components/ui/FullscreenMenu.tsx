"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Clock, MapPin, Sparkles } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  { number: "01", title: "HOME", href: "#top", subtitle: "Culinary Atelier & Philosophy" },
  { number: "02", title: "FEATURED RECIPES", href: "#featured-recipes", subtitle: "Handcrafted Seasonal Creations" },
  { number: "03", title: "MASTER DISH", href: "#showcase", subtitle: "Spicy Tomato & Burrata Rigatoni" },
  { number: "04", title: "PURE INGREDIENTS", href: "#ingredients", subtitle: "Artisanal Farm-to-Table Origin" },
  { number: "05", title: "CATEGORIES", href: "#categories", subtitle: "Curated Culinary Disciplines" },
  { number: "06", title: "MICHELIN EXPERIENCE", href: "#experience", subtitle: "Atmosphere, Sound & Slow Gastronomy" },
  { number: "07", title: "TASTING TABLE", href: "#cta", subtitle: "Join Our Worldwide Kitchen Table" },
];

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
      }
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          exit={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#17120F] text-[#FFF7ED] p-6 sm:p-12 md:p-16 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Artistic restaurant navigation menu"
        >
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-dark-noise opacity-40 pointer-events-none" />

          {/* Top Bar inside Menu */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#FFF7ED]/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#EA580C] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#FFF7ED]/70">
                L&apos;ATELIER &amp; TABLE • CULINARY FOLIO
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="group flex items-center justify-center min-h-[44px] min-w-[44px] gap-2.5 px-4 py-2 rounded-full border border-[#FFF7ED]/20 hover:border-[#EA580C] bg-[#FFF7ED]/5 hover:bg-[#EA580C]/20 transition-all duration-300 text-xs uppercase tracking-widest text-[#FFF7ED]"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90 text-[#EA580C]" />
            </button>
          </div>

          {/* Main Menu Links & Editorial Spread */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 items-center">
            {/* Navigation List */}
            <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-6">
              {MENU_LINKS.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.06,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="group flex items-baseline gap-4 sm:gap-8 hover:text-[#EA580C] transition-colors duration-300"
                  >
                    <span className="font-mono text-xs sm:text-sm text-[#FFF7ED]/40 group-hover:text-[#EA580C] transition-colors">
                      {item.number}
                    </span>
                    <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase group-hover:translate-x-3 transition-transform duration-300 flex items-center gap-3">
                      {item.title}
                      <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#EA580C]" />
                    </span>
                    <span className="hidden xl:inline-block font-sans text-xs uppercase tracking-widest text-[#FFF7ED]/40 ml-auto group-hover:text-[#FFF7ED]/80">
                      {item.subtitle}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Editorial Side Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#FFF7ED]/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-[#EA580C] text-xs font-mono tracking-widest uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Chef&apos;s Tasting Philosophy</span>
                </div>
                <blockquote className="font-serif text-xl sm:text-2xl text-[#FFF7ED]/90 italic leading-snug">
                  &ldquo;A dish is not merely ingredients arranged on porcelain. It is memory captured in steam, acidity, and time.&rdquo;
                </blockquote>
                <p className="mt-3 text-xs tracking-wider uppercase text-[#FFF7ED]/50 font-mono">
                  — Chef Antoine Dubois, Head of Gastronomy
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#FFF7ED]/10 text-xs tracking-wider text-[#FFF7ED]/70 font-sans">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFF7ED]">Service Hours</p>
                    <p className="text-[#FFF7ED]/50">Dinner: Tue — Sun, 18:00 – 23:30</p>
                    <p className="text-[#FFF7ED]/50">Atelier Kitchen: Daily Online 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#FFF7ED]">Physical Atelier</p>
                    <p className="text-[#FFF7ED]/50">14 Rue de la Gastronomie, 75003 Paris</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick("#cta")}
                  className="w-full py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.5)]"
                >
                  RESERVE PRIVATE TASTING TABLE
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-[#FFF7ED]/10 pt-6 text-xs text-[#FFF7ED]/40 font-mono">
            <span>© {new Date().getFullYear()} L&apos;ATELIER &amp; TABLE • ALL RIGHTS RESERVED</span>
            <span className="mt-2 sm:mt-0 tracking-widest">PRESS ESC TO CLOSE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
