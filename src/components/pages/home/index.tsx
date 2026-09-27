import React from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import {
  HeroSection,
  MarqueeSection,
  FeaturedRecipes,
  RecipeShowcase,
  IngredientsSection,
  CategoriesSection,
  RestaurantExperience,
  FinalCTA,
} from "./components";

export function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#17120F] flex flex-col">
      <SmoothCursor />
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <MarqueeSection />
        <FeaturedRecipes />
        <RecipeShowcase />
        <IngredientsSection />
        <CategoriesSection />
        <RestaurantExperience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
