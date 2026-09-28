"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Send } from "lucide-react";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { ConfettiButton } from "@/components/ui/ConfettiButton";
import { DiaTextReveal } from "@/components/ui/DiaTextReveal";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { NumberTicker } from "@/components/ui/NumberTicker";

const TASTING_AVATARS = [
  {
    imageUrl: "/images/avatars/avatar-5.jpg",
    name: "Sophie Laurent",
  },
  {
    imageUrl: "/images/avatars/avatar-6.jpg",
    name: "Henri Morel",
  },
  {
    imageUrl: "/images/avatars/avatar-1.jpg",
    name: "Amara Chen",
  },
  {
    imageUrl: "/images/avatars/avatar-7.jpg",
    name: "Julian Alvarez",
  },
];

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulate network request
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a validation error for a specific email
          if (email === "error@example.com") {
            reject(new Error("This email is already registered in our circle."));
          } else {
            resolve(true);
          }
        }, 1500);
      });

      setStatus("success");
    } catch (error: unknown) {
      setStatus("error");
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      className="relative min-h-[90svh] flex flex-col justify-center bg-[#FDFBF7] text-[#17120F] py-28 sm:py-40 px-6 sm:px-12 md:px-16 overflow-hidden"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Decorative Warm Backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#EA580C]/10 via-[#FACC15]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Eyebrow with AnimatedShinyText */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EA580C]/10 border border-[#EA580C]/30 text-xs font-mono uppercase tracking-[0.25em]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
          <AnimatedShinyText className="text-[#EA580C] font-semibold">
            JOIN THE EPICUREAN CIRCLE
          </AnimatedShinyText>
        </motion.div>

        {/* Oversized Cinematic Heading with DiaTextReveal & TextAnimate */}
        <div className="space-y-4">
          <DiaTextReveal
            as="h2"
            duration={1.4}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight uppercase"
          >
            What Are You <br />
            <span className="italic font-serif text-[#EA580C]">Cooking</span> Today?
          </DiaTextReveal>

          <TextAnimate
            type="blurIn"
            by="word"
            delay={0.3}
            as="p"
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-sans text-[#17120F]/70 font-light leading-relaxed"
          >
            Receive each week&apos;s master formula, secret wine pairings, and private invitation to our
            seasonal pop-up dining seatings.
          </TextAnimate>
        </div>

        {/* Newsletter Subscription or Recipe Exploration Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto w-full relative"
        >
          {/* Accessible Live Region for Announcements */}
          <div aria-live="polite" className="sr-only">
            {status === "loading" && "Submitting your subscription..."}
            {status === "success" && "Successfully subscribed to The Atelier."}
            {status === "error" && `Error: ${errorMessage}`}
          </div>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-[#17120F] text-[#FFF7ED] border border-[#EA580C] flex items-center justify-center gap-3 font-mono text-sm shadow-xl animate-in fade-in zoom-in duration-500">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>WELCOME TO THE ATELIER. FIRST FORMULA SENT.</span>
            </div>
          ) : (
            <div className="space-y-3">
              <form
                onSubmit={handleSubmit}
                className={`flex flex-col sm:flex-row items-center gap-3 p-2 rounded-full bg-white border shadow-2xl transition-all duration-300 ${
                  status === "error"
                    ? "border-red-400 hover:border-red-500"
                    : "border-[#17120F]/15 hover:border-[#EA580C]/50"
                }`}
              >
                <input
                  type="email"
                  required
                  disabled={status === "loading"}
                  placeholder="Enter your email for the weekly dispatch..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="w-full px-6 py-3.5 text-sm font-sans bg-transparent outline-none text-[#17120F] placeholder:text-[#17120F]/40 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>JOINING...</span>
                    </>
                  ) : (
                    <>
                      <span>JOIN CIRCLE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm font-sans px-4 text-left"
                >
                  {errorMessage}
                </motion.p>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <ConfettiButton
              recipeName="Full Tasting Menu"
              variant="pill"
              onClick={scrollToTop}
            >
              Bookmark Compendium
            </ConfettiButton>
          </div>
        </motion.div>

        {/* Social Proof Avatars with NumberTicker */}
        <div className="pt-6 flex flex-col items-center justify-center gap-2">
          <AvatarCircles
            avatarUrls={TASTING_AVATARS}
            numPeople={28}
            className="text-[#17120F]/80"
          />
          <span className="text-xs font-mono text-[#17120F]/70">
            <NumberTicker value={28000} suffix="+" className="font-bold text-[#EA580C]" /> chefs, sommeliers and epicures enrolled worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
