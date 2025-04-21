import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Scholarship } from "@/types/scholarship";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  className?: string;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship, className }) => {
  const hasApplicationUrl = !!scholarship.applicationUrl;
  
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{scholarship.name}</CardTitle>
          <Badge variant="outline" className="bg-[#6868c7] text-white border-scholar-200">
            {scholarship.amount}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {scholarship.school}, {scholarship.location}
        </p>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm line-clamp-3 mb-2">{scholarship.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="secondary" className="text-xs">
            {scholarship.degreeLevel}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {scholarship.category}
          </Badge>
          {scholarship.international && (
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
              International
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/school/${scholarship.schoolId}`}>
            View School
          </Link>
        </Button>
        <Button 
          size="sm" 
          className={cn("gap-2 bg-[#6868c7]", !hasApplicationUrl && "opacity-50 cursor-not-allowed")}
          disabled={!hasApplicationUrl}
          asChild={hasApplicationUrl}
        >
          {hasApplicationUrl ? (
            <a
              href={scholarship.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center "
            >
              Apply <ExternalLink className="h-3 w-3 " />
            </a>
          ) : (
            <span className="inline-flex items-center">
              Apply <ExternalLink className="h-3 w-3 ml-2" />
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};