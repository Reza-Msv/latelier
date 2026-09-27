"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Sparkles, ChefHat } from "lucide-react";
import { AvatarCircles } from "@/components/ui/AvatarCircles";

const AVATARS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    name: "Elena Rostova",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    name: "Marcus Vance",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
    name: "Clara Dubois",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    name: "Kenji Takahashi",
  },
];

export function HeroSection() {
  const scrollToExplore = () => {
    const el = document.getElementById("featured-recipes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#17120F] text-[#FFF7ED] pt-28 pb-12 px-6 sm:px-12 md:px-16"
    >
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2400&q=85"
          alt="Artisanal steak and roasted herbs plated on dark ceramic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Editorial Vignette & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-[#17120F]/65 to-[#17120F]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(23,18,15,0.75)_100%)]" />
        <div className="absolute inset-0 bg-dark-noise opacity-35" />
      </div>

      {/* Floating Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17120F]/80 border border-[#FFF7ED]/20 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] text-[#F97316] uppercase shadow-lg">
          <Flame className="w-3.5 h-3.5 text-[#EA580C] animate-bounce" />
          <span>AUTUMN / WINTER TASTING COMPENDIUM</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFF7ED]/60">
          <span>PARIS</span>
          <span>•</span>
          <span>TOKYO</span>
          <span>•</span>
          <span>NEW YORK</span>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#FACC15]">
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <span>THE ART OF IMMERSIVE GASTRONOMY</span>
              </div>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[0.92] tracking-tight uppercase">
                Cook <br />
                <span className="italic font-serif text-[#F97316] selection:text-white">
                  Something
                </span>{" "}
                <br />
                Unforgettable<span className="text-[#EA580C]">.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl text-base sm:text-lg md:text-xl font-sans text-[#FFF7ED]/80 font-light leading-relaxed"
            >
              Michelin-inspired artisanal recipes, sensory ingredients, and slow-cooking rituals
              curated for those who treat dining as pure creative expression.
            </motion.p>
          </div>

          {/* Right Action & Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-8"
          >
            {/* Quick Teaser Card */}
            <div className="w-full max-w-sm rounded-2xl bg-[#17120F]/80 border border-[#FFF7ED]/15 backdrop-blur-xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#FFF7ED]/60">
                <span className="flex items-center gap-1.5 text-[#F97316]">
                  <ChefHat className="w-4 h-4" /> CHEF SELECTION
                </span>
                <span>ISSUE № 48</span>
              </div>
              <p className="font-serif text-xl font-normal text-[#FFF7ED] leading-snug">
                Wood-Fired Truffle Gnocchi with Brown Butter &amp; Sage
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#FFF7ED]/10 text-xs font-mono text-[#FFF7ED]/70">
                <span>PREP: 35 MIN</span>
                <span className="text-[#FACC15]">LEVEL: MASTER</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:justify-end">
              <button
                onClick={scrollToExplore}
                data-cursor="view"
                data-cursor-text="DISCOVER"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_10px_35px_rgba(234,88,12,0.45)] hover:shadow-[0_15px_45px_rgba(234,88,12,0.6)] hover:-translate-y-0.5"
              >
                <span>EXPLORE RECIPES</span>
                <span className="w-2 h-2 rounded-full bg-[#FACC15] group-hover:scale-125 transition-transform" />
              </button>

              <a
                href="#showcase"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#FFF7ED]/25 hover:border-[#FFF7ED] text-[#FFF7ED] font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
              >
                MASTER DISH
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Social Proof & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#FFF7ED]/15 pt-6">
        <AvatarCircles
          avatarUrls={AVATARS}
          numPeople={14}
          headline="14,000+ home chefs creating unforgettable tables"
          className="text-[#FFF7ED]/90"
        />

        <button
          onClick={scrollToExplore}
          aria-label="Scroll to discover recipes"
          className="group flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FFF7ED]/60 hover:text-[#EA580C] transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-8 h-8 rounded-full border border-[#FFF7ED]/20 group-hover:border-[#EA580C] flex items-center justify-center transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-[#FFF7ED]/80 group-hover:text-[#EA580C] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
}
