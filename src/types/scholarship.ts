export interface Tuition {
    inState: number;
    outOfState: number;
    international: number;
  }
  
  export interface School {
    id: string;
    name: string;
    location: string;
    description: string;
    website: string;
    logoUrl: string;
    type: 'Public' | 'Private';
    ranking: number;
    tuition: Tuition;
    acceptanceRate: number;
    enrollmentSize: number;
    popular_majors: string[];
  }
  
  export interface Scholarship {
    id: string;
    schoolId: string;
    school: string;
    name: string;
    description: string;
    amount: string;
    deadline: string;
    eligibility: string[];
    requirements: string[];
    applicationUrl: string;
    location: string;
    degreeLevel: string;
    category: string;
    international: boolean;
  }