"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeaturedScholarshipCard } from "@/components/scholarship/FeaturedScholarshipCard";
import { motion } from "framer-motion";

interface Scholarship {
  id: string;
  name: string;
  school: string;
  amount: string;
  category: string;
  deadline: string;
  applicationUrl: string;
  schoolId: string;
}

interface FeaturedScholarshipsSectionProps {
  featuredScholarships: Scholarship[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedScholarshipsSection({
  featuredScholarships,
}: FeaturedScholarshipsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Scholarships
          </h2>
          <motion.div whileHover={{ x: 5 }}>
            <Button
              variant="link"
              className="text-scholar-700 font-medium flex items-center gap-2 p-0"
              asChild
            >
              <Link href="/search">
                View all scholarships
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredScholarships.map((scholarship) => (
            <FeaturedScholarshipCard key={scholarship.id} {...scholarship} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
