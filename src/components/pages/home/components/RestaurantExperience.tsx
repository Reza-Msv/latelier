"use client";

import React from "react";
import Image from "next/image";
import { Meteors } from "@/components/ui/Meteors";
import { Moon } from "lucide-react";
import { VideoText } from "@/components/ui/VideoText";
import { TextReveal } from "@/components/ui/TextReveal";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";

export function RestaurantExperience() {
  return (
    <section
      id="experience"
      className="relative min-h-[100svh] bg-[#0E0A08] text-[#FFF7ED] py-28 sm:py-40 px-6 sm:px-12 md:px-16 overflow-hidden flex flex-col justify-center border-t border-[#FFF7ED]/10"
    >
      {/* Subtle Meteors in Dark Space */}
      <Meteors number={18} />

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-dark-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-16">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="h-[1px] w-12 bg-[#EA580C]" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#EA580C] flex items-center gap-2">
            <Moon className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>THE PHILOSOPHY OF THE TABLE</span>
          </span>
          <div className="h-[1px] w-12 bg-[#EA580C]" />
        </div>

        {/* Huge Editorial Statement with VideoText */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED]/60 font-light italic">
            Food is more than a recipe.
          </p>
          <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight uppercase text-white">
            <span>It is a </span>
            <span className="text-[#EA580C] italic font-serif">Memory</span>.<br />
            <div className="my-2">
              <VideoText
                text="A SACRED RITUAL"
                videoSrc="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-wine-being-poured-into-a-glass-42352-large.mp4"
                fallbackImage="/images/experience/candlelit-dining.jpg"
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight inline-block text-white"
              />
            </div>
            <span>A Reason to </span>
            <span className="underline decoration-[#DC2626] decoration-wavy decoration-2">Gather</span>.
          </div>
        </div>

        {/* Scroll-driven TextReveal */}
        <div className="border-y border-[#FFF7ED]/10 py-6 text-center">
          <TextReveal
            text="AN INVITATION TO SLOW TIME • THREE HOURS AT THE COUNTER • SIX COURSES OF MEMORY"
            subtext="THE DINING RITUAL"
            className="text-white"
          />
        </div>

        {/* Ambient Sensory Triad with NumberTicker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 text-center">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[#EA580C] font-mono text-xs uppercase tracking-widest block">
              01 • AMBIENCE
            </span>
            <h4 className="font-serif text-xl font-normal text-white">
              <NumberTicker value={2700} suffix="K" className="font-bold text-[#FACC15]" /> Amber &amp; Vinyl
            </h4>
            <p className="text-xs font-sans text-[#FFF7ED]/65 leading-relaxed">
              Warm amber illumination, crackling turntable vinyl acoustics, and open flame cooking.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[#FACC15] font-mono text-xs uppercase tracking-widest block">
              02 • RHYTHM
            </span>
            <h4 className="font-serif text-xl font-normal text-white">The Unhurried Feast</h4>
            <p className="text-xs font-sans text-[#FFF7ED]/65 leading-relaxed">
              Courses designed to be savored across hours with deep dialogue, wine pairings, and zero haste.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[#DC2626] font-mono text-xs uppercase tracking-widest block">
              03 • PROVENANCE
            </span>
            <h4 className="font-serif text-xl font-normal text-white">Hyper-Seasonal Harvest</h4>
            <p className="text-xs font-sans text-[#FFF7ED]/65 leading-relaxed">
              Direct partnership with biodynamic growers, artisanal cheesemakers, and coastal fishermen.
            </p>
          </div>
        </div>

        {/* Center Plating Visual Banner with InteractiveHoverButton & Next.js Image */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-[#FFF7ED]/15 shadow-2xl">
          <Image
            src="/images/experience/candlelit-dining.jpg"
            alt="Intimate candlelit dining table with wine glasses and plated gourmet dishes"
            fill
            loading="lazy"
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A08] via-transparent to-black/40 pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
            <div className="text-xs font-mono text-white/80">
              <span className="text-[#FACC15]">ATELIER COUNTER:</span> SEATS ONLY{" "}
              <NumberTicker value={12} className="font-bold text-white" /> GUESTS PER SEATING
            </div>
            <InteractiveHoverButton
              text="REQUEST GUEST PASS"
              href="#cta"
              dotColor="bg-[#EA580C]"
              bgColor="bg-white/10 hover:bg-[#EA580C]"
              textColor="text-white border border-white/20"
              className="text-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
