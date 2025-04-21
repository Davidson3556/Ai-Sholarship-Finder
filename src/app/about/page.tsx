'use client'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, BookOpenText, Code2, Users, Rocket, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-6xl space-y-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section
          variants={itemVariants}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <BookOpenText className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            About ScholarSeeker AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Empowering students worldwide to find their ideal scholarships through AI technology
          </p>
          <Badge variant="outline" className="mt-4 bg-yellow-100 text-yellow-800">
            Currently using mock data for demonstration
          </Badge>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4 mt-15 md:mt-30">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 justify-center">
            <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Project Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center">
            ScholarSeeker AI is an assessment exercise for VisaCompanion.ai. It helps international students find 
            relevant scholarships. This platform leverages advanced AI algorithms to simplify the 
            search process, providing accurate, up-to-date scholarship information from top U.S. 
            universities.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-6 mt-15 md:mt-30">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 justify-center">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'AI-Powered Search', content: 'Natural language processing for intuitive scholarship discovery' },
              { title: 'Comprehensive Database', content: 'Thousands of scholarships updated regularly' },
              { title: 'Smart Filters', content: 'Filter by location, degree level, amount, and more' },
              { title: 'School Insights', content: 'Detailed university profiles with scholarship information' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-6 bg-muted rounded-lg relative"
              >
                <Badge variant="secondary" className="absolute -top-2 -right-2 bg-purple-100 text-purple-800">
                  Mock Data
                </Badge>
                <h3 className="font-semibold mb-2 text-sm sm:text-base md:text-lg">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4 text-center mt-15 md:mt-30">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 justify-center">
            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Open Source
          </h2>
          <p className="text-base sm:text-lg">
            ScholarSeeker AI is an assessment project built for VisaCompanion.ai.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a 
                href="https://github.com/Davidson3556/Ai-Sholarship-Finder" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/construction" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Contribution Guidelines
              </Link>
            </Button>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4 mt-15 md:mt-30">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 justify-center">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Lucide', 'Vercel', 'Framer motion'].map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-muted rounded-full text-sm sm:text-base text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4 text-center mt-15 md:mt-30">
          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 justify-center">
            <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Get Involved
          </h2>
          <p className="text-base sm:text-lg">
            Have questions or suggestions?  I&apos;d love to hear from you!
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a 
                href="mailto:contact@olawaledavidson1@gmail.com" 
                className="flex items-center gap-2"
              >
                Contact me
              </a>
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
