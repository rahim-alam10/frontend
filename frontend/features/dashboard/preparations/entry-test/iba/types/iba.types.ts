// types/iba.types.ts
export interface IBAPaper {
  id: string;
  title: string;
  code: string; // e.g., "IBA-R1-2024"
  type: 'english' | 'math' | 'analytical' | 'essay' | 'interview';
  totalMarks: number;
  duration: number; // in minutes
  isAvailable: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  year: string;
  round: 1 | 2;
  isActive?: boolean;
}

export interface IBAYear {
  year: string;
  papers: IBAPaper[];
  totalPapers: number;
  activePapers?: number;
}

export interface IBARound {
  id: string;
  round: 1 | 2;
  title: string; // "Round I" or "Round II"
  description: string;
  years: IBAYear[];
  totalPapers: number;
  availablePapers: number;
}

export interface IBADepartment {
  id: string;
  name: string;
  code: string;
  description: string;
  rounds: IBARound[];
}