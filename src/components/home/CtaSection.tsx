import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaSection({
  title = "Ready to Find Your Scholarship?",
  description = "Start your search today and discover opportunities at top U.S. universities",
  buttonText = "Start Searching Now",
  buttonHref = "/search",
}: CtaSectionProps) {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 bg-[#6060b6] text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
