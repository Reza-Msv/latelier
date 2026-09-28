"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChefHat, Sparkles, ArrowUpRight } from "lucide-react";
import { GlareCard } from "@/components/ui/GlareCard";
import { GlareHover } from "@/components/ui/GlareHover";
import { ConfettiButton } from "@/components/ui/ConfettiButton";
import { Pointer } from "@/components/ui/Pointer";
import { DiaTextReveal } from "@/components/ui/DiaTextReveal";
import { ComicText } from "@/components/ui/ComicText";
import { PixelImage } from "@/components/ui/PixelImage";
import { NumberTicker } from "@/components/ui/NumberTicker";

interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  time: string;
  difficulty: "Easy" | "Medium" | "Master" | "Artisanal";
  calories: number;
  servings: string;
  imageUrl: string;
  chefPick?: boolean;
  featured?: boolean;
  palette: string;
}

const RECIPES: Recipe[] = [
  {
    id: "pan-seared-scallops",
    title: "Pan-Seared Hokkaido Scallops with Saffron Corn Velouté",
    subtitle: "Caramelized crust, crispy prosciutto crumble & herb emulsion",
    category: "SEAFOOD & MAINS",
    time: "25 MIN",
    difficulty: "Master",
    calories: 420,
    servings: "2 PORTIONS",
    imageUrl: "/images/recipes/scallops.jpg",
    featured: true,
    chefPick: true,
    palette: "#EA580C",
  },
  {
    id: "smoked-duck-breast",
    title: "Smoked Cherry Glazed Magret de Canard",
    subtitle: "Parsnip mousseline, blistered blackberries & thyme jus",
    category: "SIGNATURE ROASTS",
    time: "40 MIN",
    difficulty: "Artisanal",
    calories: 580,
    servings: "4 PORTIONS",
    imageUrl: "/images/recipes/duck-breast.jpg",
    palette: "#DC2626",
  },
  {
    id: "wild-mushroom-risotto",
    title: "Chanterelle & Aged Parmigiano Risotto",
    subtitle: "Slow-simmered arborio, white truffle essence & crisp sage",
    category: "PASTA & GRAINS",
    time: "35 MIN",
    difficulty: "Medium",
    calories: 490,
    servings: "2 PORTIONS",
    imageUrl: "/images/recipes/risotto.jpg",
    chefPick: true,
    palette: "#F59E0B",
  },
  {
    id: "citrus-tart",
    title: "Caramelized Amalfi Lemon & Yuzu Meringue Tart",
    subtitle: "Buttery sable crust, torch-kissed meringue peaks & micro basil",
    category: "PASTRY & DESSERTS",
    time: "50 MIN",
    difficulty: "Master",
    calories: 340,
    servings: "6 PORTIONS",
    imageUrl: "/images/recipes/citrus-tart.jpg",
    palette: "#FACC15",
  },
  {
    id: "wood-fired-burrata-pizza",
    title: "48-Hour Sourdough with Smoked Stracciatella & San Marzano",
    subtitle: "Charred leopard crust, cold-pressed olive oil & hot honey drizzle",
    category: "HEIRLOOM BAKERY",
    time: "20 MIN",
    difficulty: "Easy",
    calories: 620,
    servings: "3 PORTIONS",
    imageUrl: "/images/recipes/burrata-pizza.jpg",
    palette: "#EA580C",
  },
];

const CATEGORY_TABS = ["ALL CREATIONS", "SEAFOOD & MAINS", "PASTA & GRAINS", "SIGNATURE ROASTS", "PASTRY & DESSERTS"];

export function FeaturedRecipes() {
  const [activeTab, setActiveTab] = useState("ALL CREATIONS");

  const filteredRecipes =
    activeTab === "ALL CREATIONS"
      ? RECIPES
      : RECIPES.filter((r) => r.category.toLowerCase().includes(activeTab.toLowerCase().split(" ")[0]));

  const heroRecipe = filteredRecipes[0] || RECIPES[0];
  const sideRecipes = filteredRecipes.slice(1);

  return (
    <section
      id="featured-recipes"
      className="relative bg-[#FDFBF7] text-[#17120F] py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* Subtle Noise */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header with DiaTextReveal & ComicText */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#17120F]/10 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#EA580C]">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <span>EDITORIAL ARCHIVE • ISSUE NO. 48</span>
              </div>
              <ComicText textColor="#FACC15" shadowColor="#EA580C">
                AUTUMN SELECTION
              </ComicText>
            </div>

            <DiaTextReveal
              as="h2"
              className="font-serif text-4xl sm:text-6xl font-normal tracking-tight uppercase"
            >
              Handcrafted <br />
              <span className="italic font-serif text-[#EA580C]">Seasonal</span> Recipes.
            </DiaTextReveal>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Pill Filters with Framer Motion layoutId */}
            <div className="flex flex-wrap gap-2 relative">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-300 z-10 ${
                      isActive
                        ? "text-[#FFF7ED]"
                        : "text-[#17120F]/70 hover:text-[#17120F] border border-[#17120F]/10 bg-[#FFF7ED]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFeaturedTab"
                        className="absolute inset-0 bg-[#17120F] rounded-full -z-10 shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Large Hero Recipe with GlareHover and GlareCard (Left / Span 7) */}
            <motion.div
              layout
              className="lg:col-span-7"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Pointer name="CHEF OF THE SEASON" className="h-full">
                <GlareHover
                  glareColor="rgba(255, 255, 255, 0.3)"
                  className="rounded-2xl"
                >
                  <GlareCard className="bg-[#17120F] text-[#FFF7ED] p-4 sm:p-6 shadow-2xl group border border-black/5">
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl">
                      <Image
                        src={heroRecipe.imageUrl}
                        alt={heroRecipe.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-[#17120F]/30 to-transparent" />

                      {/* Top floating badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#EA580C] text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                          FEATURED COMPOSITION
                        </span>
                        <ConfettiButton recipeName={heroRecipe.title} variant="icon" />
                      </div>

                      {/* Bottom details on image */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs font-mono tracking-widest uppercase text-[#FACC15]">
                          {heroRecipe.category}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight mt-1 group-hover:text-[#F97316] transition-colors">
                          {heroRecipe.title}
                        </h3>
                      </div>
                    </div>

                    {/* Sub details */}
                    <div className="pt-5 space-y-4">
                      <p className="text-sm font-sans text-[#FFF7ED]/75 leading-relaxed">
                        {heroRecipe.subtitle}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#FFF7ED]/10 text-xs font-mono text-[#FFF7ED]/70">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#EA580C]" /> {heroRecipe.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <ChefHat className="w-3.5 h-3.5 text-[#FACC15]" /> {heroRecipe.difficulty}
                          </span>
                          <span className="flex items-center gap-1">
                            <NumberTicker value={heroRecipe.calories} suffix=" KCAL" />
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#EA580C] font-semibold text-xs group-hover:translate-x-1 transition-transform cursor-pointer">
                          <span>VIEW FULL FORMULA</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </GlareCard>
                </GlareHover>
              </Pointer>
            </motion.div>

            {/* Right Side Asymmetric Column with PixelImage & GlareHover (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {sideRecipes.map((recipe, index) => (
                <motion.div
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <GlareHover glareColor="rgba(234, 88, 12, 0.15)" className="rounded-2xl">
                    <GlareCard className="bg-[#FFF7ED] p-4 sm:p-5 border border-[#17120F]/10 hover:border-[#EA580C]/40 transition-all duration-300 shadow-sm hover:shadow-xl group">
                      <div className="flex flex-col sm:flex-row gap-5">
                        {/* Thumbnail with PixelImage hover transition */}
                        <div className="relative aspect-[4/3] sm:aspect-square w-full sm:w-36 shrink-0 overflow-hidden rounded-xl">
                          <PixelImage
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            pixelSize={14}
                            aspectRatio="aspect-square"
                            className="w-full h-full rounded-xl"
                          />
                          {recipe.chefPick && (
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#17120F]/80 backdrop-blur-sm text-white text-[9px] font-mono tracking-wider z-10">
                              ✦ PICK
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between space-y-2 flex-1">
                          <div>
                            <div className="flex items-center justify-between text-[11px] font-mono text-[#EA580C] uppercase tracking-wider">
                              <span>{recipe.category}</span>
                              <span className="text-[#17120F]/50">{recipe.time}</span>
                            </div>
                            <h4 className="font-serif text-lg font-normal leading-snug mt-1 text-[#17120F] group-hover:text-[#EA580C] transition-colors">
                              {recipe.title}
                            </h4>
                            <p className="text-xs text-[#17120F]/65 line-clamp-2 mt-1 font-sans">
                              {recipe.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-[#17120F]/10">
                            <span className="text-[11px] font-mono text-[#17120F]/70 flex items-center gap-1">
                              DIFFICULTY: <strong className="text-[#17120F]">{recipe.difficulty}</strong>
                            </span>
                            <ConfettiButton recipeName={recipe.title} variant="pill">
                              Save
                            </ConfettiButton>
                          </div>
                        </div>
                      </div>
                    </GlareCard>
                  </GlareHover>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
