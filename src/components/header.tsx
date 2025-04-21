'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={cn(
      'header1',
      'header2',
      className
    )}>
      <div className="container flex items-center justify-between mx-auto">
        <Link 
          href="/" 
          className="flex items-center space-x-3 group transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="logo">
            S
          </div>
          <span className="font-bold text-2xl ">
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
              className="relative font-medium hover:text-[#6868c7] "
            >
              About
            </Link>
            
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full w-10 h-10 hover:text-[#6868c7] "
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 hover:text-[#6868c7]  " />
            ) : (
              <MoonIcon className="h-5 w-5 hover:text-[#6868c7] " />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};