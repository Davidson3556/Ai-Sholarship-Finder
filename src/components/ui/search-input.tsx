'use client';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface SearchInputProps extends ComponentPropsWithoutRef<typeof Input> {
  onSearch?: (value: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div className={cn('relative w-full', className)}>
        <Input
          className="pl-10 h-12 bg-background rounded-full border-2 border-scholar-200 focus:border-scholar-400 search-shadow"
          ref={ref}
          onKeyDown={handleKeyDown}
          {...props}
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };