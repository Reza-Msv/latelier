import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { SmoothCursor } from "@/components/ui/SmoothCursor";

export default function Loading() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#17120F] flex flex-col">
      <SmoothCursor />
      <Header />
      <main className="flex-1 w-full animate-pulse flex flex-col pt-32 pb-20 px-6 sm:px-12 md:px-24">
        {/* Hero Skeleton */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 z-10 relative">
            <div className="w-48 h-8 bg-[#E5E5E5] rounded-full"></div>
            <div className="space-y-4">
              <div className="h-24 sm:h-32 bg-[#E5E5E5] rounded-xl w-3/4"></div>
              <div className="h-24 sm:h-32 bg-[#E5E5E5] rounded-xl w-full"></div>
            </div>
            <div className="h-6 bg-[#E5E5E5] rounded w-2/3 max-w-lg"></div>
            <div className="flex gap-4">
              <div className="w-40 h-12 bg-[#E5E5E5] rounded-full"></div>
              <div className="w-40 h-12 bg-[#E5E5E5] rounded-full"></div>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[500px] lg:h-[700px] bg-[#E5E5E5] rounded-2xl overflow-hidden">
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
