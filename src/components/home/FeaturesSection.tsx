"use client";
import React from "react";
import { GraduationCap, BookOpen, Globe } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          How ScholarSeeker AI Works
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={cardVariants}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-scholar-100/80 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Find Schools
              </h3>
              <p className="text-muted-foreground text-center max-w-xs mx-auto">
                Discover top U.S. universities offering scholarships for
                international students
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-scholar-100/80 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                Match Scholarships
              </h3>
              <p className="text-muted-foreground text-center max-w-xs  mx-auto">
                AI-powered matching based on your academic profile and
                preferences
              </p>
            </div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-scholar-100/80 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 md:h-10 md:w-10 text-black" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
                Apply Confidently
              </h3>
              <p className="text-muted-foreground text-center max-w-xs mx-auto">
                Get detailed requirements and deadlines for successful
                applications
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
