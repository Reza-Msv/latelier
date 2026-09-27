"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Send } from "lucide-react";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { ConfettiButton } from "@/components/ui/ConfettiButton";

const TASTING_AVATARS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    name: "Sophie Laurent",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    name: "Henri Morel",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    name: "Amara Chen",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
    name: "Julian Alvarez",
  },
];

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative bg-[#FDFBF7] text-[#17120F] py-28 sm:py-40 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#EA580C]/10 via-[#FACC15]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/30 text-[#EA580C] text-xs font-mono uppercase tracking-[0.25em]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>JOIN THE EPICUREAN CIRCLE</span>
        </motion.div>

        {/* Oversized Cinematic Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight uppercase">
            What Are You <br />
            <span className="italic font-serif text-[#EA580C]">Cooking</span> Today?
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-sans text-[#17120F]/70 font-light leading-relaxed">
            Receive each week&apos;s master formula, secret wine pairings, and private invitation to our
            seasonal pop-up dining seatings.
          </p>
        </motion.div>

        {/* Newsletter Subscription or Recipe Exploration Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto w-full"
        >
          {subscribed ? (
            <div className="p-6 rounded-2xl bg-[#17120F] text-[#FFF7ED] border border-[#EA580C] flex items-center justify-center gap-3 font-mono text-sm shadow-xl">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>WELCOME TO THE ATELIER. FIRST FORMULA SENT.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-full bg-white border border-[#17120F]/15 shadow-2xl hover:border-[#EA580C]/50 transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Enter your email for the weekly dispatch..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3.5 text-sm font-sans bg-transparent outline-none text-[#17120F] placeholder:text-[#17120F]/40"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>JOIN CIRCLE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <ConfettiButton
              recipeName="Full Tasting Menu"
              variant="pill"
              onClick={scrollToTop}
            >
              Bookmark Compendium
            </ConfettiButton>
          </div>
        </motion.div>

        {/* Social Proof Avatars */}
        <div className="pt-6 flex justify-center">
          <AvatarCircles
            avatarUrls={TASTING_AVATARS}
            numPeople={28}
            headline="28,000+ chefs, sommeliers and epicures enrolled worldwide"
            className="text-[#17120F]/80"
          />
        </div>
      </div>
    </section>
  );
}
