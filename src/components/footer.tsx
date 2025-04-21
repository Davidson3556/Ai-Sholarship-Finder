'use client'
import React from "react";
import Link from "next/link";
import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container  py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">

          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="logo">
                S
              </div>
              <span className="font-bold text-xl text-white dark:text-gray-900">
                ScholarSeeker AI
              </span>
            </Link>
            <p className="text-gray-400 dark:text-gray-600 text-sm mt-4">
            Discover scholarships for international students at top U.S. universities with our AI-powered search
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/search" className="text-gray-400 dark:text-gray-600 hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                Advanced Search
              </Link>
              <Link href="/about" className="text-gray-400 dark:text-gray-600  hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                How It Works
              </Link>
              <Link href="/construction" className="text-gray-400 dark:text-gray-600  hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                Pricing
              </Link>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-white dark:text-gray-900 font-semibold">Legal</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/construction" className="text-gray-400 dark:text-gray-600  hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                Privacy Policy
              </Link>
              <Link href="/construction" className="text-gray-400 dark:text-gray-600  hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                Terms of Service
              </Link>
              <Link href="/construction" className="text-gray-400 dark:text-gray-600  hover:text-[#6868c7]  dark:hover:text-[#6868c7]">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
      <h3 className="text-white dark:text-gray-900 font-semibold">Connect</h3>
      <div className="flex space-x-4">
        <Button variant="ghost" size="icon" asChild aria-label="Twitter">
          <Link
            href="https://twitter.com/awokoyad"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full "
          >
            <TwitterIcon className="h-5 w-5 text-gray-400 " />
          </Link>
        </Button>

        {/* GitHub */}
        <Button variant="ghost" size="icon" asChild aria-label="GitHub">
          <Link
            href="https://github.com/Davidson3556"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:bg-scholar-600/20"
          >
            <GithubIcon className="h-5 w-5 text-gray-400 hover:text-scholar-600" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/olawaedavidson"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:bg-scholar-600/20"
          >
            <LinkedinIcon className="h-5 w-5 text-gray-400 hover:text-scholar-600" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" asChild aria-label="Email">
          <a
            href="mailto:olawaledavidson1@gmail.com"
            className="rounded-full hover:bg-scholar-600/20"
          >
            <MailIcon className="h-5 w-5 text-gray-400 hover:text-scholar-600" />
          </a>
        </Button>
      </div>
    </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 dark:text-gray-600 text-sm">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} ScholarSeeker AI. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed bottom-8 right-8 rounded-full bg-scholar-600/20 hover:bg-scholar-600/30 backdrop-blur-lg shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-scholar-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </Button>
    </footer>
  );
};