import { School, Scholarship } from "@/types/scholarship";

type ScholarshipFilters = {
  states?: string[];
  degreeLevels?: string[];
  categories?: string[];
  international?: boolean;
  minAmount?: number;
  maxAmount?: number;
};

const schools: School[] = [
  {
    id: "1",
    name: "Stanford University",
    location: "California",
    description: "Stanford University is a private research university in Stanford, California. The university was founded in 1885 by Leland and Jane Stanford in memory of their only child, Leland Stanford Jr., who had died of typhoid fever at age 15 the previous year.",
    website: "https://www.stanford.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
    type: "Private",
    ranking: 6,
    tuition: {
      inState: 56169,
      outOfState: 56169,
      international: 56169
    },
    acceptanceRate: 0.042,
    enrollmentSize: 7645,
    popular_majors: ["Computer Science", "Engineering", "Biology", "Economics"]
  },
  {
    id: "2",
    name: "Massachusetts Institute of Technology",
    location: "Massachusetts",
    description: "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. Founded in 1861, MIT has since played a key role in the development of modern technology and science.",
    website: "https://www.mit.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
    type: "Private",
    ranking: 2,
    tuition: {
      inState: 55450,
      outOfState: 55450,
      international: 55450
    },
    acceptanceRate: 0.067,
    enrollmentSize: 11520,
    popular_majors: ["Engineering", "Computer Science", "Mathematics", "Physics"]
  },
  {
    id: "3",
    name: "University of California, Berkeley",
    location: "California",
    description: "The University of California, Berkeley (UC Berkeley) is a public research university in Berkeley, California. Established in 1868, it is the flagship campus of the University of California system and is ranked among the world's top universities.",
    website: "https://www.berkeley.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/1200px-Seal_of_University_of_California%2C_Berkeley.svg.png",
    type: "Public",
    ranking: 22,
    tuition: {
      inState: 14312,
      outOfState: 44066,
      international: 44066
    },
    acceptanceRate: 0.16,
    enrollmentSize: 31780,
    popular_majors: ["Computer Science", "Economics", "Business", "Political Science"]
  },
  {
    id: "4",
    name: "Harvard University",
    location: "Massachusetts",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Founded in 1636, it is the oldest institution of higher learning in the United States.",
    website: "https://www.harvard.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Harvard_Wreath_Logo_1.svg/1200px-Harvard_Wreath_Logo_1.svg.png",
    type: "Private",
    ranking: 3,
    tuition: {
      inState: 54002,
      outOfState: 54002,
      international: 54002
    },
    acceptanceRate: 0.045,
    enrollmentSize: 20700,
    popular_majors: ["Economics", "Political Science", "Social Sciences", "Biology"]
  },
  {
    id: "5",
    name: "University of Texas at Austin",
    location: "Texas",
    description: "The University of Texas at Austin is a public research university in Austin, Texas. Founded in 1883, the University of Texas at Austin is the flagship institution of the University of Texas System.",
    website: "https://www.utexas.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/University_of_Texas_at_Austin_logo.svg/1200px-University_of_Texas_at_Austin_logo.svg.png",
    type: "Public",
    ranking: 38,
    tuition: {
      inState: 11448,
      outOfState: 40032,
      international: 40032
    },
    acceptanceRate: 0.31,
    enrollmentSize: 51525,
    popular_majors: ["Business", "Engineering", "Communications", "Biology"]
  },
  {
    id: "6",
    name: "New York University",
    location: "New York",
    description: "New York University (NYU) is a private research university in New York City. Founded in 1831, NYU's primary campus is in Greenwich Village with other campuses throughout New York City.",
    website: "https://www.nyu.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/New_York_University_Seal.svg/1200px-New_York_University_Seal.svg.png",
    type: "Private",
    ranking: 25,
    tuition: {
      inState: 56500,
      outOfState: 56500,
      international: 56500
    },
    acceptanceRate: 0.16,
    enrollmentSize: 51847,
    popular_majors: ["Business", "Visual and Performing Arts", "Social Sciences", "Liberal Arts"]
  },
  {
    id: "7",
    name: "University of Michigan",
    location: "Michigan",
    description: "The University of Michigan is a public research university in Ann Arbor, Michigan. Founded in 1817, it is the oldest university in Michigan and one of the founding members of the Association of American Universities.",
    website: "https://www.umich.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1200px-Michigan_Wolverines_logo.svg.png",
    type: "Public",
    ranking: 25,
    tuition: {
      inState: 15948,
      outOfState: 52266,
      international: 52266
    },
    acceptanceRate: 0.22,
    enrollmentSize: 47907,
    popular_majors: ["Business", "Engineering", "Social Sciences", "Health Professions"]
  },
  {
    id: "8",
    name: "Columbia University",
    location: "New York",
    description: "Columbia University is a private Ivy League research university in New York City. Founded in 1754 as King's College, it is the oldest institution of higher learning in New York and the fifth-oldest in the United States.",
    website: "https://www.columbia.edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png",
    type: "Private",
    ranking: 18,
    tuition: {
      inState: 64380,
      outOfState: 64380,
      international: 64380
    },
    acceptanceRate: 0.053,
    enrollmentSize: 32429,
    popular_majors: ["Social Sciences", "Engineering", "Computer Science", "Biological Sciences"]
  }
];

// Mock Scholarships Data
const scholarships: Scholarship[] = [
  {
    id: "1",
    schoolId: "1",
    school: "Stanford University",
    name: "Knight-Hennessy Scholars Program",
    description: "The Knight-Hennessy Scholars program provides full funding for graduate studies at Stanford University, including tuition, stipend, and travel funds. It aims to develop a community of future global leaders.",
    amount: "Full Tuition + Stipend",
    deadline: "October 12, 2025",
    eligibility: ["Apply to a Stanford graduate program", "Bachelor's degree received in 2017 or later", "Any country of origin"],
    requirements: ["Academic excellence", "Leadership potential", "Civic mindset"],
    applicationUrl: "https://knight-hennessy.stanford.edu/",
    location: "California",
    degreeLevel: "Graduate",
    category: "Merit-Based",
    international: true
  },
  {
    id: "2",
    schoolId: "2",
    school: "Massachusetts Institute of Technology",
    name: "MIT Legatum Fellowship",
    description: "The Legatum Fellowship is a competitive program designed to support entrepreneurs who aspire to improve the world through innovation. Fellows receive tuition, stipend, and mentorship.",
    amount: "$25,000 - $30,000",
    deadline: "January 15, 2025",
    eligibility: ["Enrolled in MIT graduate program", "Entrepreneurial mindset", "Focus on developing economies"],
    requirements: ["Business proposal", "Letters of recommendation", "Interview"],
    applicationUrl: "https://legatum.mit.edu/fellowship/",
    location: "Massachusetts",
    degreeLevel: "Graduate",
    category: "Entrepreneurship",
    international: true
  },
  {
    id: "3",
    schoolId: "3",
    school: "University of California, Berkeley",
    name: "Berkeley International Office Scholarship",
    description: "This scholarship is designed to support international students facing financial difficulties. It provides partial tuition coverage for one academic year.",
    amount: "$5,000 - $10,000",
    deadline: "March 2, 2026",
    eligibility: ["Currently enrolled international students", "Demonstrated financial need", "Good academic standing"],
    requirements: ["Personal statement", "Financial documentation", "Academic transcript"],
    applicationUrl: "https://internationaloffice.berkeley.edu/scholarships",
    location: "California",
    degreeLevel: "Undergraduate",
    category: "Need-Based",
    international: true
  },
  {
    id: "4",
    schoolId: "4",
    school: "Harvard University",
    name: "Harvard GlobalWE Scholarship",
    description: "The Harvard GlobalWE Scholarship supports women from developing countries pursuing undergraduate or graduate education at Harvard University.",
    amount: "$20,000",
    deadline: "December 15, 2025",
    eligibility: ["Female students", "From developing countries", "Admitted to Harvard University"],
    requirements: ["Essay on women's empowerment", "Leadership experience", "Academic excellence"],
    applicationUrl: "https://globalwe.harvard.edu/scholarship",
    location: "Massachusetts",
    degreeLevel: "Undergraduate",
    category: "Women",
    international: true
  },
  {
    id: "5",
    schoolId: "5",
    school: "University of Texas at Austin",
    name: "Texas Global Leadership Scholarship",
    description: "This scholarship recognizes international students who have demonstrated exceptional leadership potential and academic achievement.",
    amount: "$10,000",
    deadline: "February 1, 2026",
    eligibility: ["International students", "Minimum GPA of 3.5", "Leadership experience"],
    requirements: ["Leadership portfolio", "Academic transcript", "Two letters of recommendation"],
    applicationUrl: "https://global.utexas.edu/scholarships",
    location: "Texas",
    degreeLevel: "Undergraduate",
    category: "Merit-Based",
    international: true
  },
  {
    id: "6",
    schoolId: "6",
    school: "New York University",
    name: "NYU Wagner International Scholarship",
    description: "The Wagner International Scholarship supports international students pursuing a Master's degree in Public Administration or related fields at NYU's Wagner Graduate School of Public Service.",
    amount: "$15,000",
    deadline: "January 5, 2026",
    eligibility: ["International students", "Admitted to Wagner Graduate School", "Interest in public service"],
    requirements: ["Statement of purpose", "Resume", "Interview"],
    applicationUrl: "https://wagner.nyu.edu/financial-aid/scholarships",
    location: "New York",
    degreeLevel: "Graduate",
    category: "Merit-Based",
    international: true
  },
  {
    id: "7",
    schoolId: "7",
    school: "University of Michigan",
    name: "Rackham International Student Fellowship",
    description: "The Rackham International Student Fellowship supports outstanding international students pursuing doctoral degrees at the University of Michigan.",
    amount: "$15,000",
    deadline: "January 15, 2026",
    eligibility: ["International PhD students", "Demonstrated academic excellence", "Research potential"],
    requirements: ["Research proposal", "Academic statement", "Faculty nomination"],
    applicationUrl: "https://rackham.umich.edu/funding/",
    location: "Michigan",
    degreeLevel: "PhD",
    category: "Research",
    international: true
  },
  {
    id: "8",
    schoolId: "8",
    school: "Columbia University",
    name: "Columbia Global Fellowship",
    description: "The Columbia Global Fellowship supports international students pursuing graduate studies at Columbia University with a focus on global issues and leadership development.",
    amount: "$25,000",
    deadline: "December 1, 2025",
    eligibility: ["International graduate students", "Focus on global challenges", "Leadership potential"],
    requirements: ["Global challenge essay", "Letters of recommendation", "Academic excellence"],
    applicationUrl: "https://globalcenters.columbia.edu/fellowships",
    location: "New York",
    degreeLevel: "Graduate",
    category: "Merit-Based",
    international: true
  },
  {
    id: "9",
    schoolId: "1",
    school: "Stanford University",
    name: "Stanford EDGE Fellowship",
    description: "The EDGE Fellowship supports MBA students at Stanford Graduate School of Business from regions that are underrepresented in the MBA program.",
    amount: "Up to $160,000",
    deadline: "September 15, 2025",
    eligibility: ["Admitted to Stanford MBA", "From underrepresented regions", "Financial need"],
    requirements: ["Essay", "Financial documentation", "Interview"],
    applicationUrl: "https://www.gsb.stanford.edu/programs/mba/financial-aid/fellowships",
    location: "California",
    degreeLevel: "MBA",
    category: "Need-Based",
    international: true
  },
  {
    id: "10",
    schoolId: "2",
    school: "Massachusetts Institute of Technology",
    name: "MIT MISTI Global Internship Scholarship",
    description: "This scholarship supports MIT students undertaking international internships through the MIT International Science and Technology Initiatives (MISTI) program.",
    amount: "$5,000",
    deadline: "March 1, 2026",
    eligibility: ["MIT undergraduate or graduate students", "Accepted to MISTI internship", "Any nationality"],
    requirements: ["Internship proposal", "Faculty recommendation", "Language proficiency"],
    applicationUrl: "https://misti.mit.edu/student-programs/funding",
    location: "Massachusetts",
    degreeLevel: "Undergraduate",
    category: "Internship",
    international: true
  },
  {
    id: "11",
    schoolId: "3",
    school: "University of California, Berkeley",
    name: "Berkeley STEM Excellence Scholarship",
    description: "This scholarship supports outstanding international students pursuing STEM degrees at UC Berkeley, with a focus on research and innovation.",
    amount: "$20,000",
    deadline: "February 15, 2026",
    eligibility: ["International students in STEM fields", "Minimum GPA of 3.7", "Research experience"],
    requirements: ["Research statement", "Letters of recommendation", "Academic transcript"],
    applicationUrl: "https://engineering.berkeley.edu/students/scholarships/",
    location: "California",
    degreeLevel: "Graduate",
    category: "STEM",
    international: true
  },
  {
    id: "12",
    schoolId: "4",
    school: "Harvard University",
    name: "Harvard South Asia Institute Scholarship",
    description: "This scholarship supports students from South Asian countries pursuing studies at Harvard University in any discipline.",
    amount: "$15,000 - $25,000",
    deadline: "January 15, 2025",
    eligibility: ["Students from South Asian countries", "Any Harvard program", "Academic excellence"],
    requirements: ["Essay on South Asian development", "Academic transcript", "Two references"],
    applicationUrl: "https://southasiainstitute.harvard.edu/fellowships/",
    location: "Massachusetts",
    degreeLevel: "Graduate",
    category: "Regional",
    international: true
  },
  {
    id: "13",
    schoolId: "5",
    school: "University of Texas at Austin",
    name: "Texas Engineering International Scholarship",
    description: "This scholarship supports international students pursuing undergraduate or graduate studies in engineering fields at UT Austin.",
    amount: "$8,000 - $12,000",
    deadline: "March 1, 2026",
    eligibility: ["International engineering students", "Minimum GPA of 3.5", "Technical skills"],
    requirements: ["Technical portfolio", "Statement of purpose", "Academic transcript"],
    applicationUrl: "https://www.engr.utexas.edu/admissions/scholarships",
    location: "Texas",
    degreeLevel: "Undergraduate",
    category: "STEM",
    international: true
  },
  {
    id: "14",
    schoolId: "6",
    school: "New York University",
    name: "NYU Stern International Business Scholarship",
    description: "This scholarship supports international students pursuing business studies at NYU Stern School of Business with demonstrated leadership potential.",
    amount: "$20,000",
    deadline: "December 15, 2025",
    eligibility: ["International students at NYU Stern", "Business focus", "Leadership experience"],
    requirements: ["Business case analysis", "Leadership essay", "Interview"],
    applicationUrl: "https://www.stern.nyu.edu/programs-admissions/scholarships-financial-aid",
    location: "New York",
    degreeLevel: "Undergraduate",
    category: "Business",
    international: true
  },
  {
    id: "15",
    schoolId: "7",
    school: "University of Michigan",
    name: "Michigan Ross Global MBA Scholarship",
    description: "This scholarship supports international students pursuing an MBA at the Ross School of Business with a focus on global business leadership.",
    amount: "$30,000",
    deadline: "January 5, 2026",
    eligibility: ["International MBA students", "Global business experience", "Leadership potential"],
    requirements: ["Global business essay", "Resume", "Interview"],
    applicationUrl: "https://michiganross.umich.edu/graduate/full-time-mba/admissions/scholarships",
    location: "Michigan",
    degreeLevel: "MBA",
    category: "Business",
    international: true
  },
  {
    id: "16",
    schoolId: "8",
    school: "Columbia University",
    name: "Columbia Engineering International Scholarship",
    description: "This scholarship supports international students pursuing engineering degrees at Columbia University's Fu Foundation School of Engineering and Applied Science.",
    amount: "$15,000 - $25,000",
    deadline: "February 15, 2026",
    eligibility: ["International engineering students", "Academic excellence", "Technical skills"],
    requirements: ["Engineering project portfolio", "Technical statement", "Academic transcript"],
    applicationUrl: "https://engineering.columbia.edu/financial-aid-and-scholarships",
    location: "New York",
    degreeLevel: "Undergraduate",
    category: "STEM",
    international: true
  },
  {
    id: "17",
    schoolId: "1",
    school: "Stanford University",
    name: "Stanford Undergraduate Need-Based Grant",
    description: "Need-based financial aid for international undergraduate students demonstrating significant financial need.",
    amount: "Up to $50,000",
    deadline: "August 15, 2025",
    eligibility: ["International undergraduates", "Demonstrated financial need", "Full-time enrollment"],
    requirements: ["Financial documents", "Personal statement", "Academic records"],
    applicationUrl: "https://financialaid.stanford.edu",
    location: "California",
    degreeLevel: "Undergraduate",
    category: "Need-Based",
    international: true
  },
  {
    id: "18",
    schoolId: "3",
    school: "University of California, Berkeley",
    name: "Berkeley Graduate Merit Award",
    description: "Merit-based scholarship for outstanding international graduate students across all disciplines.",
    amount: "$15,000",
    deadline: "September 1, 2025",
    eligibility: ["International graduate students", "GPA 3.8+", "Research potential"],
    requirements: ["Research proposal", "Academic references", "Publication record"],
    applicationUrl: "https://grad.berkeley.edu/financial/awards/",
    location: "California",
    degreeLevel: "Graduate",
    category: "Merit-Based",
    international: true
  },
  {
    id: "19",
    schoolId: "5",
    school: "University of Texas at Austin",
    name: "Latin American Leadership Award",
    description: "Scholarship for exceptional students from Latin America pursuing any undergraduate degree at UT Austin.",
    amount: "$12,000",
    deadline: "October 10, 2025",
    eligibility: ["Latin American citizenship", "Undergraduate admission", "Leadership experience"],
    requirements: ["Leadership essay", "Community service record", "Two recommendations"],
    applicationUrl: "https://global.utexas.edu/latin-america",
    location: "Texas",
    degreeLevel: "Undergraduate",
    category: "Regional",
    international: true
  },
  {
    id: "20",
    schoolId: "7",
    school: "University of Michigan",
    name: "Social Sciences Doctoral Fellowship",
    description: "Full funding for international PhD students in social sciences with focus on global development.",
    amount: "Full Tuition + $30,000 stipend",
    deadline: "November 15, 2025",
    eligibility: ["PhD applicants in social sciences", "Research on global issues", "Academic excellence"],
    requirements: ["Research proposal", "Writing samples", "Faculty endorsement"],
    applicationUrl: "https://rackham.umich.edu/funding",
    location: "Michigan",
    degreeLevel: "PhD",
    category: "Research",
    international: true
  },
  {
    id: "21",
    schoolId: "8",
    school: "Columbia University",
    name: "Arts and Humanities Global Scholarship",
    description: "Supports international students in arts and humanities programs demonstrating creative excellence.",
    amount: "$18,000",
    deadline: "December 1, 2025",
    eligibility: ["Arts/humanities students", "Portfolio of work", "Admitted to Columbia"],
    requirements: ["Creative portfolio", "Artist statement", "Academic references"],
    applicationUrl: "https://arts.columbia.edu/financial-aid",
    location: "New York",
    degreeLevel: "Undergraduate",
    category: "Arts",
    international: true
  }

];

export const ScholarshipService = {
  getScholarships: (): Promise<Scholarship[]> => {
    return Promise.resolve(scholarships);
  },

  getScholarshipById: (id: string): Promise<Scholarship | undefined> => {
    return Promise.resolve(scholarships.find(scholarship => scholarship.id === id));
  },

  getScholarshipsBySchool: (schoolId: string): Promise<Scholarship[]> => {
    return Promise.resolve(scholarships.filter(scholarship => scholarship.schoolId === schoolId));
  },

  getSchools: (): Promise<School[]> => {
    return Promise.resolve(schools);
  },

  getSchoolById: (id: string): Promise<School | undefined> => {
    return Promise.resolve(schools.find(school => school.id === id));
  },

  searchScholarships: (
    query: string,
    filters: ScholarshipFilters = {}
  ): Promise<Scholarship[]> => {
    let results = [...scholarships];
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      results = results.filter(scholarship => 
        scholarship.name.toLowerCase().includes(lowercaseQuery) ||
        scholarship.school.toLowerCase().includes(lowercaseQuery) ||
        scholarship.description.toLowerCase().includes(lowercaseQuery) ||
        scholarship.location.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    if (filters.states && filters.states.length > 0) {
      results = results.filter(scholarship => 
        filters.states?.includes(scholarship.location)
      );
    }
    
    if (filters.degreeLevels && filters.degreeLevels.length > 0) {
      results = results.filter(scholarship => 
        filters.degreeLevels?.includes(scholarship.degreeLevel)
      );
    }
    
    // Filter by categories
    if (filters.categories && filters.categories.length > 0) {
      results = results.filter(scholarship => 
        filters.categories?.includes(scholarship.category)
      );
    }
    
    // Filter by international
    if (filters.international) {
      results = results.filter(scholarship => scholarship.international);
    }
    
    // Filter by amount
    if (filters.minAmount !== undefined && filters.maxAmount !== undefined) {
      results = results.filter(scholarship => {
        let amount = 0;
        if (scholarship.amount.includes("Full Tuition")) {
          amount = 50000;
        } else {
          const matches = scholarship.amount.match(/\$?(\d{1,3}(,\d{3})*(\.\d+)?)/);
          if (matches) {
            amount = parseInt(matches[1].replace(/,/g, ''));
          }
          
          if (scholarship.amount.includes("-")) {
            const rangeMatches = scholarship.amount.match(/\$?(\d{1,3}(,\d{3})*(\.\d+)?)\s*-\s*\$?(\d{1,3}(,\d{3})*(\.\d+)?)/);
            if (rangeMatches) {
              amount = parseInt(rangeMatches[4].replace(/,/g, ''));
            }
          }
        }
        return amount >= filters.minAmount! && amount <= filters.maxAmount!;
      });
    }
    
    return Promise.resolve(results);
  }
};