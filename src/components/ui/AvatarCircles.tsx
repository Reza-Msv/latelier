"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl?: string;
  name?: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
  headline?: string;
}

export function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
  headline = "Loved by 12,000+ passionate home chefs & Michelin gourmands",
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex flex-wrap items-center gap-3", className)}>
      <div className="flex -space-x-3 rtl:space-x-reverse">
        {avatarUrls.map((url, index) => (
          <div
            key={index}
            className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#FDFBF7] shadow-sm transition-transform duration-300 hover:scale-110 hover:z-20"
          >
            <Image
              src={url.imageUrl}
              alt={url.name || `Chef avatar ${index + 1}`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ))}
        {numPeople !== undefined && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FDFBF7] bg-[#EA580C] text-[11px] font-semibold text-white tracking-wider">
            +{numPeople}k
          </div>
        )}
      </div>
      {headline && (
        <span className="text-xs tracking-tight font-medium text-[#17120F]/80 sm:text-sm">
          {headline}
        </span>
      )}
    </div>
  );
}
