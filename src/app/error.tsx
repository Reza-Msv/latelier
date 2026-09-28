"use client";

import { useEffect } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#17120F] flex flex-col">
      <SmoothCursor />
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center py-20 px-6 sm:px-12 text-center overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#17120F] mb-4">
          Something went wrong!
        </h2>
        <p className="max-w-md mx-auto text-[#17120F]/70 text-lg mb-10 font-sans">
          We encountered an unexpected issue while preparing this page.
          {error.message && (
            <span className="block mt-2 text-sm text-red-600/80 bg-red-50 p-2 rounded border border-red-100 break-words">
              {error.message}
            </span>
          )}
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#17120F] hover:bg-[#333] text-white font-semibold text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try again</span>
        </button>
      </main>
      <Footer />
    </div>
  );
}
