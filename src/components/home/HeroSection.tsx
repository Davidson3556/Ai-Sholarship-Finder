'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';

export const HeroSection = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <section className="bg-hero-custom bg-cover bg-center min-h-[600px] flex items-center py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#6868c7]">Find</span> Your{' '}
            <span className="text-[#6868c7]">Perfect</span> Scholarship
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover scholarships for international students at top U.S. universities with our AI-powered search
          </p>
          <div className="w-full max-w-2xl">
            <div className="flex flex-col md:flex-row gap-4 items-stretch w-full">
              <SearchInput
                placeholder="Search by school, location, or scholarship type..."
                className="h-12 md:h-14 text-base md:text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button 
                className="h-12  w-full rounded-3xl md:w-auto px-8 text-base md:text-lg"
                onClick={handleSearch}
              >
                Find Scholarships
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};