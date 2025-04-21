'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

import {

    Button
  } from '@/components/ui/button';

  import {

    Badge,
  } from '@/components/ui/badge';


import { ScholarshipCard } from '@/components/ScholarshipCard';
import { ScholarshipService } from '@/services/scholarshipService';
import { School, Scholarship } from '@/types/scholarship';
import {
  Loader2,
  ExternalLink,
  Info,
  MapPin,
  Building,
  Award,
  GraduationCap,
  Users,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

export default function SchoolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [school, setSchool] = useState<School | null>(null);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchoolData = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const schoolData = await ScholarshipService.getSchoolById(id);
        const schoolScholarships = await ScholarshipService.getScholarshipsBySchool(id);

        if (schoolData) {
          setSchool(schoolData);
          setScholarships(schoolScholarships);
        }
      } catch (error) {
        console.error('Error fetching school data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin" />
        </main>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">School Not Found</h1>
            <p className="mb-6">
              The school you are looking for does not exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/search">Back to Search</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-scholar-800 to-scholar-900 text-white py-10">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-3 rounded-lg">
                <img
                  src={school.logoUrl}
                  alt={`${school.name} logo`}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{school.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{school.location}</span>
                  <Badge variant="secondary" className="ml-2 bg-opacity-20">
                    {school.type}
                  </Badge>
                  {school.ranking && (
                    <Badge variant="secondary" className="bg-opacity-20">
                      Ranking: #{school.ranking}
                    </Badge>
                  )}
                </div>
                <p className="max-w-2xl mb-4">{school.description}</p>
                <Button className="gap-2" asChild>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* School Details */}
        <div className="container py-10">
          <Tabs defaultValue="overview">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="scholarships">
                Scholarships ({scholarships.length})
              </TabsTrigger>
              <TabsTrigger value="tuition">Tuition & Fees</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                  icon={<Building className="h-5 w-5 text-scholar-600" />}
                  title="Type"
                  value={school.type}
                />
                <StatCard
                  icon={<Award className="h-5 w-5 text-scholar-600" />}
                  title="Ranking"
                  value={`#${school.ranking}`}
                />
                <StatCard
                  icon={<Users className="h-5 w-5 text-scholar-600" />}
                  title="Enrollment"
                  value={school.enrollmentSize.toLocaleString()}
                />
                <StatCard
                  icon={<GraduationCap className="h-5 w-5 text-scholar-600" />}
                  title="Acceptance Rate"
                  value={`${(school.acceptanceRate * 100).toFixed(1)}%`}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Popular Majors</h2>
                <div className="flex flex-wrap gap-2">
                  {school.popular_majors.map((major, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {major}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Available Scholarships</h2>
                <p className="mb-4">
                  {school.name} offers {scholarships.length} scholarships for
                  international students. View the scholarships tab for more
                  details.
                </p>
                <Button variant="outline" asChild>
                  <Link href="#scholarships">View Scholarships</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="scholarships" id="scholarships">
              <h2 className="text-2xl font-bold mb-6">Available Scholarships</h2>

              {scholarships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scholarships.map((scholarship) => (
                    <ScholarshipCard
                      key={scholarship.id}
                      scholarship={scholarship}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <Info className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-medium mb-2">
                    No Scholarships Found
                  </h3>
                  <p className="text-muted-foreground">
                    There are currently no scholarships available for this school
                    in our database.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="tuition">
              <h2 className="text-2xl font-bold mb-6">Tuition & Fees</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TuitionCard
                  title="In-State Tuition"
                  amount={school.tuition.inState}
                  description="For residents of the state"
                />
                <TuitionCard
                  title="Out-of-State Tuition"
                  amount={school.tuition.outOfState}
                  description="For U.S. residents from other states"
                />
                <TuitionCard
                  title="International Tuition"
                  amount={school.tuition.international}
                  description="For international students"
                  highlighted
                />
              </div>

              <div className="mt-8 p-4 bg-scholar-50 rounded-lg border border-scholar-100">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-scholar-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-scholar-800">
                      Additional Costs to Consider
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Remember that total cost of attendance includes tuition,
                      fees, room and board, books, supplies, transportation, and
                      personal expenses. International students should also budget
                      for travel, visa fees, and health insurance.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

// Helper Components
const StatCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="font-medium text-muted-foreground">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const TuitionCard = ({
  title,
  amount,
  description,
  highlighted = false,
}: {
  title: string;
  amount: number;
  description: string;
  highlighted?: boolean;
}) => (
  <div
    className={`p-6 rounded-lg border ${
      highlighted
        ? 'bg-white border-scholar-200 shadow-md'
        : 'bg-gray-50 border-gray-100'
    }`}
  >
    <h3 className={`font-medium mb-1 ${highlighted ? 'text-scholar-700' : ''}`}>
      {title}
    </h3>
    <p className="text-2xl font-bold mb-2">
      ${amount.toLocaleString()}
      <span className="text-sm font-normal text-muted-foreground">/year</span>
    </p>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);