"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";
import { Pointer } from "@/components/ui/Pointer";

interface Ingredient {
  id: string;
  name: string;
  botanicalName: string;
  origin: string;
  flavorNote: string;
  sensoryProfile: string[];
  imageUrl: string;
  accentColor: string;
  xOffset: string;
  yOffset: string;
}

const INGREDIENTS: Ingredient[] = [
  {
    id: "san-marzano",
    name: "San Marzano D.O.P. Heirloom Tomatoes",
    botanicalName: "Solanum lycopersicum",
    origin: "Agro Sarnese-Nocerino, Mount Vesuvius Volcanic Soil",
    flavorNote: "Low acidity, bittersweet caramelization, intense sun-kissed sweetness with rich natural pectin.",
    sensoryProfile: ["Volcanic Umami", "Vibrant Sweetness", "Sun-Drenched"],
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=85",
    accentColor: "#DC2626",
    xOffset: "lg:translate-y-0",
    yOffset: "0px",
  },
  {
    id: "genovese-basil",
    name: "Sweet Genovese Micro Basil",
    botanicalName: "Ocimum basilicum",
    origin: "Liguria Coastal Terraces, Italy",
    flavorNote: "Peppery clove aroma with refreshing anise undertones. Harvested before morning dew evaporates.",
    sensoryProfile: ["Herbaceous Crisp", "Aromatic Anise", "Clove Notes"],
    imageUrl: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=85",
    accentColor: "#16A34A",
    xOffset: "lg:translate-y-8",
    yOffset: "10px",
  },
  {
    id: "calabrian-chili",
    name: "Calabrian Diavolicchio Pepper",
    botanicalName: "Capsicum annuum",
    origin: "Calabrian Hillsides, Southern Italy",
    flavorNote: "Smoky, fruity slow warmth that lingers with a deep mineral complexity without blinding heat.",
    sensoryProfile: ["Slow Warmth", "Smoked Fruit", "Rich Capsaicin"],
    imageUrl: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=85",
    accentColor: "#EA580C",
    xOffset: "lg:-translate-y-4",
    yOffset: "-10px",
  },
  {
    id: "cold-pressed-oil",
    name: "First Cold-Pressed Nocellara Olive Oil",
    botanicalName: "Olea europaea",
    origin: "Valle del Belice, Sicily",
    flavorNote: "Emerald-green cold extraction. Notes of artichoke heart, green tomato skin, and peppery finish.",
    sensoryProfile: ["Artichoke Green", "Velvet Body", "Peppery Finish"],
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=85",
    accentColor: "#FACC15",
    xOffset: "lg:translate-y-12",
    yOffset: "15px",
  },
  {
    id: "amalfi-lemon",
    name: "Sfusato Amalfitano Lemon",
    botanicalName: "Citrus limon",
    origin: "Amalfi Coast Terraced Orchards",
    flavorNote: "Intense fragrant essential oils in thick sweet rind. Gentle bright citric balance with zero bitterness.",
    sensoryProfile: ["Essential Citrus", "Floral Bloom", "High Brightness"],
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=85",
    accentColor: "#F59E0B",
    xOffset: "lg:translate-y-2",
    yOffset: "5px",
  },
];

export function IngredientsSection() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(INGREDIENTS[0]);

  return (
    <section
      id="ingredients"
      className="relative bg-[#FFF7ED] text-[#17120F] py-24 sm:py-36 px-6 sm:px-12 md:px-16 overflow-hidden border-t border-[#17120F]/10"
    >
      {/* Background Subtle Noise */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#17120F]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#EA580C]">
              <Compass className="w-4 h-4 text-[#EA580C]" />
              <span>THE PURITY OF ORIGIN • BOTANICAL ATLAS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight uppercase">
              The Soul of <br />
              <span className="italic font-serif text-[#EA580C]">Pure</span> Ingredients.
            </h2>
          </div>

          <p className="max-w-md text-sm font-sans text-[#17120F]/70 leading-relaxed">
            Great cooking is not complex chemistry — it is honoring the sun, the soil, and the season.
            Every dish begins with uncompromised provenance.
          </p>
        </div>

        {/* Interactive Floating / Layered Ingredient Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {INGREDIENTS.map((item) => {
            const isSelected = selectedIngredient.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIngredient(item)}
                className={`cursor-pointer transition-transform duration-500 ${item.xOffset}`}
              >
                <Pointer name="INSPECT ORIGIN">
                  <div
                    className={`relative rounded-2xl overflow-hidden border transition-all duration-300 p-3 bg-white ${
                      isSelected
                        ? "border-[#EA580C] ring-2 ring-[#EA580C]/40 shadow-xl -translate-y-2"
                        : "border-[#17120F]/10 hover:border-[#EA580C]/50 shadow-sm hover:-translate-y-1"
                    }`}
                  >
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span
                        style={{ backgroundColor: item.accentColor }}
                        className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full shadow-md"
                      />
                      <span className="absolute bottom-2 left-2 right-2 text-white font-serif text-sm font-medium leading-tight line-clamp-1">
                        {item.name.split(" ")[0]}
                      </span>
                    </div>

                    <div className="mt-2.5 text-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#17120F]/60 block truncate">
                        {item.origin.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </Pointer>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Ingredient Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIngredient.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#17120F] text-[#FFF7ED] p-8 sm:p-12 border border-[#FFF7ED]/15 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: selectedIngredient.accentColor }} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview */}
              <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#FFF7ED]/20 shadow-lg">
                <Image
                  src={selectedIngredient.imageUrl}
                  alt={selectedIngredient.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Description & Taste Note */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#FACC15] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BOTANICAL PROFILE • {selectedIngredient.botanicalName}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-normal text-white">
                    {selectedIngredient.name}
                  </h3>
                  <p className="text-xs font-mono text-[#FFF7ED]/60 mt-1">
                    TERROIR: {selectedIngredient.origin}
                  </p>
                </div>

                <p className="text-sm sm:text-base font-sans text-[#FFF7ED]/85 leading-relaxed font-light">
                  {selectedIngredient.flavorNote}
                </p>

                {/* Sensory Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedIngredient.sensoryProfile.map((profile, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-wider uppercase text-amber-200"
                    >
                      ✦ {profile}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
