import { LUMSDepartment } from "../types/lums.types";

export const lumsDepartment: LUMSDepartment = {
  id: "lums-001",
  name: "LUMS Test Preparation",
  code: "LUMS-TP",
  description: "Complete test preparation for LUMS admissions (LCAT & SAT)",
  tests: [
    {
      id: "lcat-2024",
      testType: "LCAT",
      title: "LCAT",
      description: "LUMS Common Admission Test - University's own standardized test",
      years: [
        {
          year: "2024",
          papers: [
            {
              id: "p1",
              title: "LCAT English 2024",
              code: "LCAT-2024-ENG",
              type: "english",
              totalMarks: 100,
              duration: 60,
              isAvailable: true,
              difficulty: "medium",
              year: "2024",
              testType: "LCAT"
            },
            {
              id: "p2",
              title: "LCAT Math 2024",
              code: "LCAT-2024-MATH",
              type: "math",
              totalMarks: 100,
              duration: 60,
              isAvailable: true,
              difficulty: "hard",
              year: "2024",
              testType: "LCAT"
            },
            {
              id: "p3",
              title: "LCAT Analytical 2024",
              code: "LCAT-2024-ANALYTICAL",
              type: "analytical",
              totalMarks: 100,
              duration: 60,
              isAvailable: false,
              difficulty: "hard",
              year: "2024",
              testType: "LCAT"
            }
          ],
          totalPapers: 3,
          activePapers: 2
        },
        {
          year: "2023",
          papers: [
            {
              id: "p4",
              title: "LCAT English 2023",
              code: "LCAT-2023-ENG",
              type: "english",
              totalMarks: 100,
              duration: 60,
              isAvailable: true,
              difficulty: "easy",
              year: "2023",
              testType: "LCAT"
            }
          ],
          totalPapers: 1,
          activePapers: 1
        }
      ],
      totalPapers: 4,
      availablePapers: 3
    },
    {
      id: "sat-2024",
      testType: "SAT",
      title: "SAT",
      description: "Scholastic Assessment Test - International standardized test",
      years: [
        {
          year: "2024",
          papers: [
            {
              id: "p5",
              title: "SAT Reading 2024",
              code: "SAT-2024-READING",
              type: "english",
              totalMarks: 100,
              duration: 65,
              isAvailable: true,
              difficulty: "medium",
              year: "2024",
              testType: "SAT"
            },
            {
              id: "p6",
              title: "SAT Math 2024",
              code: "SAT-2024-MATH",
              type: "math",
              totalMarks: 100,
              duration: 80,
              isAvailable: true,
              difficulty: "hard",
              year: "2024",
              testType: "SAT"
            },
            {
              id: "p7",
              title: "SAT Essay 2024",
              code: "SAT-2024-ESSAY",
              type: "essay",
              totalMarks: 50,
              duration: 50,
              isAvailable: false,
              difficulty: "medium",
              year: "2024",
              testType: "SAT"
            }
          ],
          totalPapers: 3,
          activePapers: 2
        }
      ],
      totalPapers: 3,
      availablePapers: 2
    }
  ]
};