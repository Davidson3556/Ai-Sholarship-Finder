"use client";
import { ScholarshipCard } from "@/components/ScholarshipCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { ScholarshipService } from "@/services/scholarshipService";
import { Scholarship } from "@/types/scholarship";
import { SlidersHorizontal, Search, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    states: searchParams.get("states")?.split(",") || [],
    degreeLevels: searchParams.get("degreeLevels")?.split(",") || [],
    categories: searchParams.get("categories")?.split(",") || [],
    international: searchParams.get("international") === "true",
    minAmount: Number(searchParams.get("minAmount")) || 0,
    maxAmount: Number(searchParams.get("maxAmount")) || 50000,
  });

  useEffect(() => {
    const fetchScholarships = async () => {
      setIsLoading(true);
      try {
        const results = await ScholarshipService.searchScholarships(
          searchQuery,
          filters,
        );
        setScholarships(results);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchScholarships();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, filters]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (filters.states.length) params.set("states", filters.states.join(","));
    if (filters.degreeLevels.length)
      params.set("degreeLevels", filters.degreeLevels.join(","));
    if (filters.categories.length)
      params.set("categories", filters.categories.join(","));
    if (filters.international) params.set("international", "true");
    if (filters.minAmount > 0)
      params.set("minAmount", filters.minAmount.toString());
    if (filters.maxAmount < 50000)
      params.set("maxAmount", filters.maxAmount.toString());

    router.push(`/search?${params.toString()}`);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col min-h-screen items-center px-3">
      <main className="flex-grow">
        <div className="bg-scholar-50 border-b">
          <div className="container py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-3xl font-bold mb-6">Find Scholarships</h1>
              <div className="flex gap-3">
                <SearchInput
                  placeholder="Search scholarships..."
                  className="flex-grow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onSearch={handleSearch}
                />
                <Button onClick={handleSearch} className="hidden md:flex">
                  <Search className="h-4 w-4 mr-2" /> Search
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsFilterOpen(true)}
                  disabled={isLoading}
                >
                  <SlidersHorizontal className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Filters</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onFilterChange={handleFilterChange}
          isLoading={isLoading}
        />

        <div className="container py-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-10 w-10 text-primary animate-spin" />
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 flex justify-between items-center"
              >
                <h2 className="text-xl font-medium">
                  {scholarships.length}{" "}
                  {scholarships.length === 1 ? "Scholarship" : "Scholarships"}{" "}
                  Found
                  {searchQuery && (
                    <span className="font-normal text-muted-foreground">
                      for &quot;{searchQuery}&quot;
                    </span>
                  )}
                </h2>
              </motion.div>

              {scholarships.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {scholarships.map((scholarship) => (
                    <motion.div
                      key={scholarship.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <ScholarshipCard scholarship={scholarship} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <h3 className="text-xl font-medium mb-2">
                    No scholarships found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or filters to find more
                    results.
                  </p>
                  <Button
                    onClick={() => {
                      setFilters({
                        states: [],
                        degreeLevels: [],
                        categories: [],
                        international: false,
                        minAmount: 0,
                        maxAmount: 50000,
                      });
                      setSearchQuery("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-20 text-center">
          Loading scholarships...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
