export interface DepartmentPapers {
  typeName: string
  count: number
  papers: string[]
}

export interface PastPaper {
  year: string
  departments: DepartmentPapers[]  // Array of departments for each year
}

export enum DEPARTMENTS {
  Engineering = 'Engineering',
  'Applied Sciences' = 'Applied Sciences',
  Architecture = 'Architecture',
  'Business Studies & Social Sciences' = 'Business Studies & Social Sciences',
  'Computer Science' = 'Computer Science',
  'Medical Sciences' = 'Medical Sciences'
}