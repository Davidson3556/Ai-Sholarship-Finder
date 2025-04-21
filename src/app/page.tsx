import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { FeaturedScholarshipsSection } from '@/components/home/FeaturedScholarshipsSection';
import { CtaSection } from '@/components/home/CtaSection';
import { ScholarshipService } from '@/services/scholarshipService';

export default async function HomePage() {
  const featuredScholarships = await ScholarshipService.getScholarships().then(scholarships => 
    scholarships.slice(0, 3)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <FeaturedScholarshipsSection featuredScholarships={featuredScholarships} />
        <CtaSection />
      </main>
    </div>
  );
}