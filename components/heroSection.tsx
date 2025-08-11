"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { Link } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">

        Nitin Swami
          </span>
         <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight mt-10">full-stack developer.</h1>
          <p className="text-lg md:text-xl text-center">
            crafting seamless experiences with expertise in both frontend and backend development.
          </p>
        </div>

      <RetroGrid />
    </div>
  );
}


