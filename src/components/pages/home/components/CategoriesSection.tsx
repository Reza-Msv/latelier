"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface CategoryItem {
  number: string;
  title: string;
  subtitle: string;
  count: string;
  image: string;
  vibe: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    number: "01",
    title: "HAND-ROLLED PASTA & GRAINS",
    subtitle: "Bronze-cut durum, seasonal risottos & stuffed agnolotti",
    count: "42 RECIPES",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85",
    vibe: "Warm, comforting, artisanal starch alchemy",
  },
  {
    number: "02",
    title: "WOOD-FIRED SEAFOOD & CRUSTACEANS",
    subtitle: "Charred langoustines, sea bass en papillote & scallop veloutés",
    count: "28 RECIPES",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85",
    vibe: "Briny, smoky, pure oceanic salinity",
  },
  {
    number: "03",
    title: "HEIRLOOM SOURDOUGH & BAKERY",
    subtitle: "48-hour levain loaves, lamination & focaccia barese",
    count: "35 RECIPES",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    vibe: "Crusty, open crumb, wild yeast fermentation",
  },
  {
    number: "04",
    title: "BOTANICAL COCKTAILS & APÉRITIFS",
    subtitle: "Herbaceous shrubs, smoked mezcals & low-ABV infusions",
    count: "19 FORMULAS",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
    vibe: "Crisp, aromatic, evening ritual elixirs",
  },
  {
    number: "05",
    title: "FRENCH PATISSERIE & DOLCI",
    subtitle: "Mirror-glaze entremets, soufflés & burnt citrus tarts",
    count: "31 DESSERTS",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85",
    vibe: "Delicate, caramelized, golden decadence",
  },
  {
    number: "06",
    title: "FORAGED GREENS & PLANT MASTERY",
    subtitle: "Charred brassicas, mushroom garums & botanical broths",
    count: "24 CREATIONS",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    vibe: "Earthy, vibrant, deeply nourishing terroir",
  },
];

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryItem>(CATEGORIES[0]);

  return (
    <section
      id="categories"
      className="relative bg-[#17120F] text-[#FFF7ED] py-24 sm:py-36 px-6 sm:px-12 md:px-16 overflow-hidden border-t border-[#FFF7ED]/10"
    >
      {/* Background Dark Texture */}
      <div className="absolute inset-0 bg-dark-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#FFF7ED]/15 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#F97316]">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span>CULINARY DISCIPLINES &amp; INDEX</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight uppercase">
              Curated <br />
              <span className="italic font-serif text-[#EA580C]">Recipe</span> Disciplines.
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#FFF7ED]/70 leading-relaxed">
            Hover across our curated repertoire to preview formulas crafted with restaurant precision
            and tailored for unhurried home kitchens.
          </p>
        </div>

        {/* Interactive Dual Spread: Links on Left, Dynamic High-Res Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Categories List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#FFF7ED]/10">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory.number === category.number;
              return (
                <div
                  key={category.number}
                  onMouseEnter={() => setActiveCategory(category)}
                  className="group py-6 sm:py-7 cursor-pointer transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
                          isActive ? "text-[#EA580C]" : "text-[#FFF7ED]/40 group-hover:text-[#EA580C]"
                        }`}
                      >
                        {category.number}
                      </span>
                      <div>
                        <h3
                          className={`font-serif text-2xl sm:text-3xl md:text-4xl uppercase transition-transform duration-300 flex items-center gap-3 ${
                            isActive
                              ? "text-[#EA580C] translate-x-2"
                              : "text-[#FFF7ED] group-hover:text-[#F97316] group-hover:translate-x-2"
                          }`}
                        >
                          {category.title}
                          <ArrowUpRight
                            className={`w-5 h-5 transition-all duration-300 ${
                              isActive ? "opacity-100 text-[#EA580C]" : "opacity-0 group-hover:opacity-100 text-[#F97316]"
                            }`}
                          />
                        </h3>
                        <p className="text-xs font-sans text-[#FFF7ED]/60 mt-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#FFF7ED]/40 shrink-0">
                      {category.count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image Display Box */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.number}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#FFF7ED]/20 shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
                >
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-[#17120F]/20 to-transparent" />

                  {/* Floating Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#FACC15]">{activeCategory.number} / 06</span>
                      <span className="bg-[#EA580C] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                        {activeCategory.count}
                      </span>
                    </div>
                    <p className="font-serif text-xl font-normal leading-snug">
                      {activeCategory.title}
                    </p>
                    <p className="text-xs font-sans text-[#FFF7ED]/75 italic">
                      &ldquo;{activeCategory.vibe}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
