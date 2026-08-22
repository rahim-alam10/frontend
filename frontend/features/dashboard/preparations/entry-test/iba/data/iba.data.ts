// app/preparation/entry-tests/nust/data/iba.data.ts

export interface IBAPaper {
  id: string;
  title: string;
  code: string;
  type: string;
  totalMarks: number;
  duration: number;
  isAvailable: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  year: string;
  round: 'Round I' | 'Round II';
  department?: string;
}

export const pastPapersData: IBAPaper[] = [
  // Round I - 2024
  {
    id: 'iba-r1-2024-01',
    title: 'IBA BBA - English',
    code: 'IBA-ENG-2024',
    type: 'english',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'medium',
    year: '2024',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2024-02',
    title: 'IBA BBA - Mathematics',
    code: 'IBA-MATH-2024',
    type: 'math',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'hard',
    year: '2024',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2024-03',
    title: 'IBA BBA - Analytical',
    code: 'IBA-ANAL-2024',
    type: 'analytical',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'hard',
    year: '2024',
    round: 'Round I',
    department: 'BBA'
  },
  // Round I - 2023
  {
    id: 'iba-r1-2023-01',
    title: 'IBA BBA - English',
    code: 'IBA-ENG-2023',
    type: 'english',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'medium',
    year: '2023',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2023-02',
    title: 'IBA BBA - Mathematics',
    code: 'IBA-MATH-2023',
    type: 'math',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'hard',
    year: '2023',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2023-03',
    title: 'IBA BBA - Analytical',
    code: 'IBA-ANAL-2023',
    type: 'analytical',
    totalMarks: 100,
    duration: 60,
    isAvailable: false,
    difficulty: 'hard',
    year: '2023',
    round: 'Round I',
    department: 'BBA'
  },
  // Round I - 2022
  {
    id: 'iba-r1-2022-01',
    title: 'IBA BBA - English',
    code: 'IBA-ENG-2022',
    type: 'english',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'medium',
    year: '2022',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2022-02',
    title: 'IBA BBA - Mathematics',
    code: 'IBA-MATH-2022',
    type: 'math',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'hard',
    year: '2022',
    round: 'Round I',
    department: 'BBA'
  },
  {
    id: 'iba-r1-2022-03',
    title: 'IBA BBA - Analytical',
    code: 'IBA-ANAL-2022',
    type: 'analytical',
    totalMarks: 100,
    duration: 60,
    isAvailable: true,
    difficulty: 'hard',
    year: '2022',
    round: 'Round I',
    department: 'BBA'
  },
  // Round II - 2024
  {
    id: 'iba-r2-2024-01',
    title: 'IBA BBA - Essay Writing',
    code: 'IBA-ESS-2024',
    type: 'essay',
    totalMarks: 50,
    duration: 45,
    isAvailable: true,
    difficulty: 'medium',
    year: '2024',
    round: 'Round II',
    department: 'BBA'
  },
  {
    id: 'iba-r2-2024-02',
    title: 'IBA BBA - Interview',
    code: 'IBA-INT-2024',
    type: 'interview',
    totalMarks: 50,
    duration: 30,
    isAvailable: true,
    difficulty: 'hard',
    year: '2024',
    round: 'Round II',
    department: 'BBA'
  },
  // Round II - 2023
  {
    id: 'iba-r2-2023-01',
    title: 'IBA BBA - Essay Writing',
    code: 'IBA-ESS-2023',
    type: 'essay',
    totalMarks: 50,
    duration: 45,
    isAvailable: true,
    difficulty: 'medium',
    year: '2023',
    round: 'Round II',
    department: 'BBA'
  },
  {
    id: 'iba-r2-2023-02',
    title: 'IBA BBA - Interview',
    code: 'IBA-INT-2023',
    type: 'interview',
    totalMarks: 50,
    duration: 30,
    isAvailable: false,
    difficulty: 'hard',
    year: '2023',
    round: 'Round II',
    department: 'BBA'
  },
];