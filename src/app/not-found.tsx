import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SmoothCursor } from "@/components/ui/SmoothCursor";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#17120F] flex flex-col">
      <SmoothCursor />
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center py-20 px-6 sm:px-12 text-center overflow-hidden">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight uppercase text-[#EA580C] mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#17120F] mb-6">
          Recipe Not Found
        </h2>
        <p className="max-w-md mx-auto text-[#17120F]/70 text-lg mb-10 font-sans">
          The page you are looking for has been misplaced in our pantry or doesn&apos;t exist. Let&apos;s get you back to the main menu.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
