"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FeaturedScholarshipCardProps {
  name: string;
  school: string;
  amount: string;
  category: string;
  deadline: string;
  applicationUrl: string;
  schoolId: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  hover: { scale: 1.02 },
};

export const FeaturedScholarshipCard = ({
  name,
  school,
  amount,
  category,
  deadline,
  applicationUrl,
}: FeaturedScholarshipCardProps) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, amount: 0.1 }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border border-gray-100"
  >
    <div className="p-6 h-full flex flex-col">
      <h3 className="font-bold text-lg md:text-xl mb-2 line-clamp-2 text-black">
        {name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{school}</p>

      <div className="flex justify-between items-center mb-4 gap-2">
        <span className="text-base font-semibold text-[#6060b6]">{amount}</span>
        <motion.span
          className="text-xs bg-[#8d8df1] text-scholar-800 px-3 py-1 rounded-full whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          {category}
        </motion.span>
      </div>

      <div className="mt-auto">
        <div className="text-sm text-muted-foreground mb-3">
          Deadline: <span className="font-medium">{deadline}</span>
        </div>
        <motion.div whileHover={{ x: 5 }}>
          <Button
            variant="link"
            className="text-[#6868c7] p-0 h-auto font-medium w-full md:w-auto text-left md:text-center"
            asChild
          >
            <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
              Learn more <span className="ml-2">→</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  </motion.div>
);
