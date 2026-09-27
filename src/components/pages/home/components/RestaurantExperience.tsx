"use client";

import React from "react";
import Image from "next/image";
import { Meteors } from "@/components/ui/Meteors";
import { Moon } from "lucide-react";

export function RestaurantExperience() {
  return (
    <section
      id="experience"
      className="relative min-h-[90vh] bg-[#0E0A08] text-[#FFF7ED] py-28 sm:py-40 px-6 sm:px-12 md:px-16 overflow-hidden flex flex-col justify-center border-t border-[#FFF7ED]/10"
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

        {/* Huge Editorial Statement */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED]/60 font-light italic">
            Food is more than a recipe.
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight uppercase text-white">
            It is a <span className="text-[#EA580C] italic font-serif">Memory</span>.<br />
            A Sacred <span className="text-[#FACC15]">Ritual</span>.<br />
            A Reason to <span className="underline decoration-[#DC2626] decoration-wavy decoration-2">Gather</span>.
          </h2>
        </div>

        {/* Ambient Sensory Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#FFF7ED]/10 text-center">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <span className="text-[#EA580C] font-mono text-xs uppercase tracking-widest block">
              01 • AMBIENCE
            </span>
            <h4 className="font-serif text-xl font-normal text-white">Low Light &amp; Warm Vinyl</h4>
            <p className="text-xs font-sans text-[#FFF7ED]/65 leading-relaxed">
              Soft 2700K amber illumination, crackling turntable warmth, and open flame cooking acoustics.
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

        {/* Center Plating Visual Banner */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-[#FFF7ED]/15 shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85"
            alt="Intimate candlelit dining table with wine glasses and plated gourmet dishes"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A08] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-white/80">
              <span className="text-[#FACC15]">ATELIER COUNTER:</span> SEATS ONLY 12 GUESTS PER SEATING
            </div>
            <a
              href="#cta"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#EA580C] text-white border border-white/20 text-xs font-mono tracking-widest uppercase transition-colors"
            >
              REQUEST PRIVATE GUEST PASS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
