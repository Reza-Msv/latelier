"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#17120F] text-[#FFF7ED] border-t border-[#FFF7ED]/10 pt-16 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Subtle background noise texture */}
      <div className="absolute inset-0 bg-dark-noise opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-[#FFF7ED]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#EA580C]">
                CULINARY ATELIER &amp; EPICUREAN TABLE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FFF7ED]">
              Cook with intention. <br />
              <span className="italic text-[#F97316]">Savor every second.</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-3 px-5 py-3 rounded-full border border-[#FFF7ED]/20 hover:border-[#EA580C] bg-[#FFF7ED]/5 hover:bg-[#EA580C]/20 transition-all duration-300 text-xs font-mono uppercase tracking-widest text-[#FFF7ED]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1 text-[#EA580C]" />
          </button>
        </div>

        {/* Middle Links & Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans text-[#FFF7ED]/60">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#FFF7ED] mb-3">
              KITCHEN ATELIER
            </p>
            <p>14 Rue de la Gastronomie</p>
            <p>75003 Paris, France</p>
            <p className="mt-2 text-[#EA580C]">atelier@latelier-table.fr</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#FFF7ED] mb-3">
              DISCOVERY
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="#featured-recipes" className="hover:text-[#FFF7ED] transition-colors">
                  Seasonal Dishes
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#FFF7ED] transition-colors">
                  Master Class Dish
                </a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-[#FFF7ED] transition-colors">
                  Farm Ingredients
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#FFF7ED] transition-colors">
                  Curated Categories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#FFF7ED] mb-3">
              EDITORIAL
            </p>
            <ul className="space-y-1.5">
              <li>
                <a href="#experience" className="hover:text-[#FFF7ED] transition-colors">
                  Slow Dining Culture
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FFF7ED] transition-colors">
                  Chef Tasting Notes
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-[#FFF7ED] transition-colors">
                  Private Reservations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#FFF7ED] mb-3">
              DISPATCH
            </p>
            <div className="flex gap-4 text-xs font-mono uppercase tracking-wider">
              <span className="hover:text-[#EA580C] cursor-pointer transition-colors">IG</span>
              <span className="hover:text-[#EA580C] cursor-pointer transition-colors">PIN</span>
              <span className="hover:text-[#EA580C] cursor-pointer transition-colors">YT</span>
              <span className="hover:text-[#EA580C] cursor-pointer transition-colors">SUB</span>
            </div>
            <p className="mt-3 text-[11px] text-[#FFF7ED]/40">
              Michelin Guide Recommended • 2026
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#FFF7ED]/10 text-[11px] text-[#FFF7ED]/40 font-mono">
          <p>© {new Date().getFullYear()} L&apos;ATELIER &amp; TABLE. CRAFTED FOR GASTRONOMY ENTHUSIASTS.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="hover:text-[#FFF7ED] cursor-pointer transition-colors">PRIVACY</span>
            <span className="hover:text-[#FFF7ED] cursor-pointer transition-colors">TERMS</span>
            <span className="hover:text-[#FFF7ED] cursor-pointer transition-colors">ETHICS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
