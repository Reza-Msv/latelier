"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { VelocityScroll } from "@/components/ui/VelocityScroll";
import { Sparkles, Utensils, Heart } from "lucide-react";

export function MarqueeSection() {
  const statementItems = [
    "FRESH INGREDIENTS",
    "SLOW COOKING RITUALS",
    "MICHELIN DISCIPLINE",
    "HANDCRAFTED RECIPES",
    "PURE SENSORY GASTRONOMY",
    "HEIRLOOM FLAVORS",
  ];

  return (
    <section className="relative overflow-hidden bg-[#EA580C] text-[#FFF7ED] py-6 sm:py-8 border-y border-[#17120F]/20 select-none">
      {/* Editorial Velocity Scroll Text with slow, graceful velocity */}
      <div className="relative z-10">
        <VelocityScroll
          text="COOK WITH PASSION • EAT WITH CURIOSITY • SHARE WITH EVERYONE • SLOW FOOD • "
          default_velocity={0.8}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase text-white/95"
        />
      </div>

      {/* High impact secondary marquee bar with graphic badges (very slow speed) */}
      <div className="mt-4 pt-4 border-t border-white/15">
        <Marquee reverse speed={85} className="[--gap:3.5rem]">
          {statementItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-amber-100 font-semibold"
            >
              <span>{item}</span>
              {index % 3 === 0 && <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
              {index % 3 === 1 && <Utensils className="w-3.5 h-3.5 text-amber-200" />}
              {index % 3 === 2 && <Heart className="w-3.5 h-3.5 text-rose-200" />}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
