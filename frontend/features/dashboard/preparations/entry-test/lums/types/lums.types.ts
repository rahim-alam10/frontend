export interface LUMSPaper {
  id: string;
  title: string;
  code: string; // e.g., "LCAT-2024-MATH"
  type: 'english' | 'math' | 'analytical' | 'essay' | 'interview';
  totalMarks: number;
  duration: number; // in minutes
  isAvailable: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  year: string;
  testType: 'LCAT' | 'SAT';
  isActive?: boolean;
}

export interface LUMSYear {
  year: string;
  papers: LUMSPaper[];
  totalPapers: number;
  activePapers?: number;
}

export interface LUMSAdmissionTest {
  id: string;
  testType: 'LCAT' | 'SAT';
  title: string; // "LCAT" or "SAT"
  description: string; // e.g., "LUMS Common Admission Test" or "Scholastic Assessment Test"
  years: LUMSYear[];
  totalPapers: number;
  availablePapers: number;
}

export interface LUMSDepartment {
  id: string;
  name: string;
  code: string;
  description: string;
  tests: LUMSAdmissionTest[];
}

