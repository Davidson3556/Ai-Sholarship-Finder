"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScholarLight from "./.././../public/images/errors.png";
import ScholarDark from "./.././../public/images/errors2.png";

export default function NotFound() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f5f3ea] to-[#eae6d8] dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#2d2d2d]">
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-8 md:py-20 gap-8 md:gap-16">
        <div className="w-full max-w-[400px] md:max-w-[500px] relative group">
          <Image
            src={isDark ? ScholarDark : ScholarLight}
            alt="Scholar searching through books"
            width={500}
            height={500}
            className="w-full h-auto animate-soft-bounce"
            priority
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-[#6868c7] dark:bg-[#5c5c9f] rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-md space-y-6 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl opacity-40 dark:opacity-40">
            📚
          </div>
          <h1 className="text-7xl md:text-8xl font-bold bg-[#6868c7] bg-clip-text text-transparent animate-text-fade">
            404
          </h1>
          <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-medium">
            Page Not Found
          </p>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg">
            Retrace your URL path
          </p>
          <Link href="/" className="inline-block">
            <Button
              size="lg"
              className="bg-[#6868c7] hover:bg-[#9a9ae6]  transition-all hover:scale-105 text-white shadow-lg ring-2 ring-amber-100 "
            >
              Go Home
            </Button>
          </Link>
        </div>

        <div className="hidden md:block absolute bottom-8 right-8 text-gray-300 dark:text-gray-700 text-opacity-30 dark:text-opacity-30 text-6xl rotate-12">
          ⟪ 404 ⟫
        </div>
      </main>
    </div>
  );
}
