import React from "react";
import { ArrowUp, ArrowUpRight, Sparkles, MapPin, Clock, ChefHat, Heart, Compass } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { HyperText } from "@/components/ui/HyperText";
import { DiaTextReveal } from "@/components/ui/DiaTextReveal";
import { KineticText } from "@/components/ui/KineticText";
import { InteractiveHoverButton } from "@/components/ui/InteractiveHoverButton";

export function Footer() {
  const navLinks = [
    { number: "01", name: "Seasonal Creations", href: "#featured-recipes" },
    { number: "02", name: "Master Class Dish", href: "#showcase" },
    { number: "03", name: "Botanical Ingredients", href: "#ingredients" },
    { number: "04", name: "Curated Disciplines", href: "#categories" },
    { number: "05", name: "Slow Dining Philosophy", href: "#experience" },
    { number: "06", name: "Tasting Table Access", href: "#cta" },
  ];

  return (
    <footer className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#17120F] text-[#FFF7ED] border-t border-[#FFF7ED]/15 pt-20 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden isolate">
      {/* Background Noise & Ambient Glow */}
      <div className="absolute inset-0 bg-dark-noise opacity-40 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Header Bar inside Full-Screen Footer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-[#FFF7ED]/15 pb-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#EA580C] flex items-center justify-center text-white font-serif text-sm font-bold shadow-[0_0_20px_rgba(234,88,12,0.6)]">
            ✦
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
              <HyperText duration={600}>L&apos;ATELIER</HyperText>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#FFF7ED]/60 -mt-1">
              &amp; TABLE • PARIS • ARCHIVE 2026
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <AnimatedShinyText className="text-[#FACC15] font-medium">
              MICHELIN REPUTATION &amp; SLOW FOOD CULTURE
            </AnimatedShinyText>
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#FFF7ED]/20 hover:border-[#EA580C] bg-[#FFF7ED]/5 hover:bg-[#EA580C] text-[#FFF7ED] transition-all duration-300 text-xs font-mono uppercase tracking-widest shadow-lg"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-[#EA580C] group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Main Center Editorial Spread: Monumental Typography & Architectural Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Span 7): Giant Editorial Callout & Quick Reservation */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-[#F97316] text-[11px] font-mono tracking-widest uppercase">
                <ChefHat className="w-3.5 h-3.5" />
                <span>CULINARY MANIFESTO</span>
              </div>

              <DiaTextReveal
                as="h2"
                duration={1.5}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight uppercase text-white leading-[0.95]"
              >
                Cook with <br />
                <span className="italic font-serif text-[#F97316]">Intention</span>.<br />
                Savor Every Second.
              </DiaTextReveal>

              <p className="max-w-xl text-sm sm:text-base font-sans text-[#FFF7ED]/75 font-light leading-relaxed pt-2">
                An international culinary sanctuary connecting curious home chefs with Michelin-grade
                disciplines, heritage terroir, and unhurried dining rituals.
              </p>
            </div>

            {/* Quick Reservation / Dispatch Action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <InteractiveHoverButton
                text="REQUEST PRIVATE PASS"
                href="#cta"
                dotColor="bg-[#FACC15]"
                bgColor="bg-[#EA580C]"
                textColor="text-white"
                className="w-full sm:w-auto text-xs"
              />

              <div className="flex items-center gap-2 text-xs font-mono text-[#FFF7ED]/60">
                <Compass className="w-4 h-4 text-[#EA580C]" />
                <span>48.8566° N, 2.3522° E • Paris, France</span>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5): Large Menu-Style Navigation & Atelier Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:border-l lg:border-[#FFF7ED]/15 lg:pl-12">
            {/* Architectural Folio Links */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FACC15] mb-4 flex items-center gap-2">
                <span>✦ FOLIO INDEX</span>
              </p>
              <div className="flex flex-col divide-y divide-[#FFF7ED]/10">
                {navLinks.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    className="group py-3.5 flex items-center justify-between text-sm font-serif text-[#FFF7ED]/80 hover:text-[#EA580C] hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#FFF7ED]/40 group-hover:text-[#EA580C]">
                        {item.number}
                      </span>
                      <span className="text-base sm:text-lg font-normal tracking-wide">
                        <KineticText>{item.name}</KineticText>
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#EA580C]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Service & Location Quick Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#FFF7ED]/10 text-xs font-sans text-[#FFF7ED]/70">
              <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-white font-mono text-[11px] uppercase font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>DINNER SERVICE</span>
                </div>
                <p className="text-[#FFF7ED]/80">Tue — Sun, 18:00 – 23:30</p>
                <p className="text-[#FFF7ED]/50 text-[11px]">12 Seats by Reservation</p>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-white font-mono text-[11px] uppercase font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>PARIS ATELIER</span>
                </div>
                <p className="text-[#FFF7ED]/80">14 Rue de la Gastronomie</p>
                <p className="text-[#EA580C] font-mono text-[11px]">atelier@latelier-table.fr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#FFF7ED]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#FFF7ED]/50">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} L&apos;ATELIER &amp; TABLE.</span>
          <span className="hidden md:inline">• CRAFTED FOR GASTRONOMY ENTHUSIASTS</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">PRIVACY</span>
          <span className="hover:text-white cursor-pointer transition-colors">TERMS</span>
          <span className="hover:text-white cursor-pointer transition-colors">ETHICS</span>
          <span className="text-[#EA580C] flex items-center gap-1">
            <Heart className="w-3 h-3 fill-[#EA580C]" /> PARIS
          </span>
        </div>
      </div>
    </footer>
  );
}
