"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Flame, Sparkles, ChefHat } from "lucide-react";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { HyperText } from "@/components/ui/HyperText";
import { DiaTextReveal } from "@/components/ui/DiaTextReveal";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import { GlareHover } from "@/components/ui/GlareHover";
import { NumberTicker } from "@/components/ui/NumberTicker";

const AVATARS = [
  {
    imageUrl: "/images/avatars/avatar-1.jpg",
    name: "Elena Rostova",
  },
  {
    imageUrl: "/images/avatars/avatar-2.jpg",
    name: "Marcus Vance",
  },
  {
    imageUrl: "/images/avatars/avatar-3.jpg",
    name: "Clara Dubois",
  },
  {
    imageUrl: "/images/avatars/avatar-4.jpg",
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
      {/* Background Image with Cinematic Grading (Optimized Local Image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-steak.jpg"
          alt="Artisanal steak and roasted herbs plated on dark ceramic"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Editorial Vignette & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120F] via-[#17120F]/70 to-[#17120F]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(23,18,15,0.75)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-dark-noise opacity-35 pointer-events-none" />
      </div>

      {/* Floating Decorative Badge with Animated Shiny Text & HyperText */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#17120F]/80 border border-[#FFF7ED]/20 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] uppercase shadow-lg">
          <Flame className="w-3.5 h-3.5 text-[#EA580C] animate-bounce" />
          <AnimatedShinyText className="text-[#F97316] font-semibold">
            AUTUMN / WINTER TASTING COMPENDIUM
          </AnimatedShinyText>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFF7ED]/60">
          <HyperText duration={600} delay={400}>PARIS</HyperText>
          <span>•</span>
          <HyperText duration={600} delay={600}>TOKYO</HyperText>
          <span>•</span>
          <HyperText duration={600} delay={800}>NEW YORK</HyperText>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline with DiaTextReveal & TextAnimate */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#FACC15]">
                <Sparkles className="w-4 h-4 text-[#FACC15]" />
                <HyperText duration={800} delay={300} className="text-[#FACC15]">
                  THE ART OF IMMERSIVE GASTRONOMY
                </HyperText>
              </div>

              <DiaTextReveal
                as="h1"
                duration={1.4}
                delay={0.3}
                className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[0.92] tracking-tight uppercase"
              >
                Cook <br />
                <span className="italic font-serif text-[#F97316] selection:text-white">
                  Something
                </span>{" "}
                <br />
                Unforgettable<span className="text-[#EA580C]">.</span>
              </DiaTextReveal>
            </div>

            <TextAnimate
              type="blurIn"
              by="word"
              delay={0.6}
              stagger={0.03}
              as="p"
              className="max-w-xl text-base sm:text-lg md:text-xl font-sans text-[#FFF7ED]/80 font-light leading-relaxed"
            >
              Michelin-inspired artisanal recipes, sensory ingredients, and slow-cooking rituals
              curated for those who treat dining as pure creative expression.
            </TextAnimate>
          </div>

          {/* Right Action & Feature Panel with GlareHover */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-8"
          >
            {/* Quick Teaser Card wrapped in GlareHover */}
            <GlareHover
              glareColor="rgba(249, 115, 22, 0.25)"
              glareOpacity={0.7}
              className="w-full max-w-sm rounded-2xl bg-[#17120F]/85 border border-[#FFF7ED]/15 backdrop-blur-xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#FFF7ED]/60">
                <span className="flex items-center gap-1.5 text-[#F97316]">
                  <ChefHat className="w-4 h-4" /> CHEF SELECTION
                </span>
                <span className="flex items-center gap-1">
                  ISSUE № <NumberTicker value={48} className="font-bold text-white" />
                </span>
              </div>
              <p className="font-serif text-xl font-normal text-[#FFF7ED] leading-snug">
                Wood-Fired Truffle Gnocchi with Brown Butter &amp; Sage
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#FFF7ED]/10 text-xs font-mono text-[#FFF7ED]/70">
                <span>PREP: 35 MIN</span>
                <span className="text-[#FACC15]">LEVEL: MASTER</span>
              </div>
            </GlareHover>

            {/* CTAs with InteractiveHoverButton */}
            <div className="flex flex-wrap items-center gap-4 w-full lg:justify-end">
              <InteractiveHoverButton
                text="EXPLORE RECIPES"
                onClick={scrollToExplore}
                data-cursor="view"
                data-cursor-text="DISCOVER"
                className="w-full sm:w-auto"
              />

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

      {/* Bottom Bar: Social Proof with NumberTicker & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#FFF7ED]/15 pt-6">
        <div className="flex items-center gap-4">
          <AvatarCircles
            avatarUrls={AVATARS}
            numPeople={14}
            className="text-[#FFF7ED]/90"
          />
          <span className="text-xs font-mono text-[#FFF7ED]/80">
            <NumberTicker value={14000} suffix="+" className="font-bold text-[#FACC15]" /> home chefs creating unforgettable tables
          </span>
        </div>

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
