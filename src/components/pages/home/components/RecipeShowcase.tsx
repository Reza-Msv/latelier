"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChefHat, Sparkles, Wine, Flame, CheckCircle2, Eye } from "lucide-react";
import { Lens } from "@/components/ui/Lens";
import { VideoText } from "@/components/ui/VideoText";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { GlareHover } from "@/components/ui/GlareHover";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";
import { ComicText } from "@/components/ui/ComicText";

const INGREDIENT_LIST = [
  { name: "San Marzano D.O.P. Heirloom Tomatoes", note: "Slow-roasted at 160°C with thyme & sea salt" },
  { name: "Smoked Pugliese Stracciatella / Burrata", note: "Hand-torn at room temperature for silkiness" },
  { name: "Bronze-Cut Rigatoni di Gragnano", note: "Boiled in sea salted water (2 min before al dente)" },
  { name: "Calabrian Crushed Pepperoncino Oil", note: "Infused with garlic confit & rosemary sprigs" },
  { name: "24-Month Parmigiano-Reggiano Crisp", note: "Microplaned fresh over sizzling pasta water" },
];

export function RecipeShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "01. Caramelize the Sofrito", detail: "Gently simmer shallots, garlic slivers & Calabrian chili in cold-pressed olive oil until fragrant and amber." },
    { title: "02. Roast & Emulsify", detail: "Fold in the wood-roasted tomatoes, crushing lightly with a wooden spoon until glossy and rich." },
    { title: "03. The Mantecatura", detail: "Toss pasta directly into sauce with starchy water and butter until emulsified into velvet." },
  ];

  return (
    <section
      id="showcase"
      className="relative bg-[#17120F] text-[#FFF7ED] py-24 sm:py-36 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* Editorial Background Noise & Gradient Glow */}
      <div className="absolute inset-0 bg-dark-noise opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#EA580C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Editorial Eyebrow with ComicText */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FFF7ED]/15 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#EA580C]">
              TODAY&apos;S MASTERPIECE SPREAD
            </span>
            <ComicText textColor="#FACC15" shadowColor="#EA580C">
              CHEF SIGNATURE
            </ComicText>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFF7ED]/60">
            <Eye className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>HOVER OVER IMAGE TO ACTIVATE GASTRONOMY LENS</span>
          </div>
        </div>

        {/* Two-Column Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Lens Image & Plating Inspection */}
          <div className="lg:col-span-7 space-y-4">
            <GlareHover
              glareColor="rgba(250, 204, 21, 0.2)"
              className="rounded-3xl"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#FFF7ED]/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
                <Lens zoomFactor={2.4} lensSize={200} className="w-full aspect-[4/3] rounded-3xl">
                  <div className="relative w-full h-full min-h-[380px] sm:min-h-[500px]">
                    <Image
                      src="/images/recipes/spicy-rigatoni.jpg"
                      alt="Spicy Rigatoni with creamy tomato sauce, smoked burrata and fresh basil"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </Lens>

                {/* In-Image Floating Plating Card */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
                  <div className="bg-[#17120F]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-xs font-mono">
                    <span className="text-[#FACC15]">ORIGIN:</span> EMILIA-ROMAGNA, ITALY
                  </div>
                  <div className="bg-[#EA580C] text-white px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold shadow-lg">
                    ★ SIGNATURE № 01
                  </div>
                </div>
              </div>
            </GlareHover>

            <p className="text-center text-xs font-mono text-[#FFF7ED]/50 tracking-wider">
              ✦ Magnify to inspect blistered tomato skins, Grana Padano flakes &amp; hand-torn basil
            </p>
          </div>

          {/* Right Column: Editorial Recipe Details with VideoText & TextAnimate */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#F97316] text-[11px] font-mono tracking-widest uppercase">
                <Flame className="w-3.5 h-3.5" />
                <span>CHEF DE CUISINE SELECTION</span>
              </div>

              {/* VideoText for Master Headline */}
              <div>
                <VideoText
                  text="SPICY RIGATONI"
                  videoSrc="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-wine-being-poured-into-a-glass-42352-large.mp4"
                  fallbackImage="/images/recipes/spicy-rigatoni.jpg"
                  className="font-serif text-4xl sm:text-6xl font-normal leading-[1.0] tracking-tight block"
                />
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFF7ED]/90 italic mt-1">
                  with Smoked Burrata &amp; Heirloom Pomodoro
                </h2>
              </div>

              <TextAnimate
                type="blurIn"
                by="word"
                delay={0.2}
                as="p"
                className="text-sm sm:text-base font-sans text-[#FFF7ED]/80 leading-relaxed font-light"
              >
                An homage to slow Italian summers. Rigatoni pasta extruded through bronze dies, tossed
                in a velvety emulsion of fire-roasted San Marzanos, spicy Calabrian oil, and crowned with
                cool, creamy smoked burrata.
              </TextAnimate>
            </div>

            {/* Quick Metrics Bar with NumberTicker */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#FFF7ED]/5 border border-[#FFF7ED]/10 text-center font-mono text-xs">
              <div>
                <span className="text-[#FFF7ED]/50 text-[10px] block">COOK TIME</span>
                <span className="text-[#FFF7ED] font-bold text-sm flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                  <NumberTicker value={25} suffix=" MIN" />
                </span>
              </div>
              <div className="border-x border-[#FFF7ED]/10">
                <span className="text-[#FFF7ED]/50 text-[10px] block">DIFFICULTY</span>
                <span className="text-[#FACC15] font-bold text-sm flex items-center justify-center gap-1 mt-0.5">
                  <ChefHat className="w-3.5 h-3.5 text-[#FACC15]" /> MASTER
                </span>
              </div>
              <div>
                <span className="text-[#FFF7ED]/50 text-[10px] block">WINE PAIRING</span>
                <span className="text-[#FFF7ED] font-bold text-xs flex items-center justify-center gap-1 mt-0.5">
                  <Wine className="w-3.5 h-3.5 text-[#EF4444]" /> Chianti
                </span>
              </div>
            </div>

            {/* Curated Ingredient Checklist */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[#FACC15] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KEY INGREDIENT HARMONY</span>
              </h3>

              <div className="space-y-2">
                {INGREDIENT_LIST.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 transition-colors text-xs"
                  >
                    <p className="font-serif font-medium text-sm text-[#FFF7ED] flex items-center gap-2">
                      <span className="text-[#EA580C] font-mono text-xs">0{index + 1}.</span>
                      {item.name}
                    </p>
                    <p className="text-[11px] text-[#FFF7ED]/60 mt-0.5 pl-6">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Culinary Steps Interactive Tabs */}
            <div className="space-y-3 pt-2">
              <div className="flex gap-2 relative">
                {steps.map((st, i) => {
                  const isActive = activeStep === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`relative flex-1 py-2 px-3 rounded-lg text-[11px] font-mono tracking-wider uppercase transition-colors duration-300 z-10 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-[#FFF7ED]/60 hover:text-white bg-[#FFF7ED]/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeShowcaseStep"
                          className="absolute inset-0 bg-[#EA580C] rounded-lg -z-10 shadow-md"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span>STEP 0{i + 1}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-4 rounded-xl bg-[#FFF7ED]/5 border border-[#FFF7ED]/10"
                >
                  <p className="font-serif text-sm font-semibold text-[#FFF7ED]">
                    {steps[activeStep].title}
                  </p>
                  <p className="text-xs text-[#FFF7ED]/70 mt-1 leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Actions with InteractiveHoverButton */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <InteractiveHoverButton
                text="SAVE MASTER FORMULA"
                dotColor="bg-[#FACC15]"
                bgColor="bg-[#EA580C]"
                textColor="text-white"
                className="w-full sm:w-auto"
              />

              <div className="flex items-center gap-2 text-xs font-mono text-[#FFF7ED]/60">
                <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                <span>Includes High-Res Printable Recipe Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
