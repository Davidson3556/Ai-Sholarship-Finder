"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode if no theme saved
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <header className={cn("header1", "header2", className)}>
      <div className="container flex items-center justify-between mx-auto py-4 px-3">
        <Link
          href="/"
          className="flex items-center space-x-3 group transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="logo">S</div>
          <span className="hidden md:inline font-bold text-2xl">
            ScholarSeeker AI
          </span>
        </Link>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/search"
              className="relative font-medium hover:text-[#6868c7]"
            >
              Search
            </Link>
            <Link
              href="/about"
              className="relative font-medium hover:text-[#6868c7]"
            >
              About
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 hover:text-[#6868c7]"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background dark:bg-slate-900 shadow-lg md:hidden">
          <nav className="container mx-auto py-4">
            <Link
              href="/search"
              className="block py-2 px-4 hover:text-[#6868c7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 hover:text-[#6868c7]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
