import { DEPARTMENTS, PastPaper } from '../types/nust.types'

export const pastPapersData: PastPaper[] = [
  {
    year: '2021',
    departments: [
      {
        typeName: DEPARTMENTS.Engineering,
        count: 12,
        papers: ['NET-1', 'NET-2']
      },
      {
        typeName: DEPARTMENTS['Applied Sciences'],
        count: 8,
        papers: ['NET-1', 'NET-2', 'NET-3']
      },
      {
        typeName: DEPARTMENTS.Architecture,
        count: 5,
        papers: ['NET-1']
      }
    ]
  },
  {
    year: '2022',
    departments: [
      {
        typeName: DEPARTMENTS['Business Studies & Social Sciences'],
        count: 10,
        papers: ['NET-1', 'NET-2']
      },
      {
        typeName: DEPARTMENTS.Engineering,
        count: 15,
        papers: ['NET-1', 'NET-2', 'NET-3']
      },
      {
        typeName: DEPARTMENTS['Applied Sciences'],
        count: 7,
        papers: ['NET-1', 'NET-2']
      }
    ]
  },
  {
    year: '2023',
    departments: [
      {
        typeName: DEPARTMENTS.Architecture,
        count: 6,
        papers: ['NET-1', 'NET-2']
      },
      {
        typeName: DEPARTMENTS['Computer Science'],
        count: 9,
        papers: ['NET-1', 'NET-2', 'NET-3']
      }
    ]
  },
  {
    year: '2024',
    departments: [
      {
        typeName: DEPARTMENTS['Business Studies & Social Sciences'],
        count: 35,
        papers: ['NET-1', 'NET-2', 'NET-3']
      },
      {
        typeName: DEPARTMENTS['Computer Science'],
        count: 20,
        papers: ['NET-1', 'NET-2']
      },
      {
        typeName: DEPARTMENTS['Medical Sciences'],
        count: 18,
        papers: ['NET-1', 'NET-2', 'NET-3']
      }
    ]
  }
]