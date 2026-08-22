import { Resource } from '../types';
import { Target} from 'lucide-react'

export const resourcesData: Resource[] = [
  {
    title: 'Full-Length Mock Tests',
    description: 'Timed simulations for NET-I, NET-II, and NET-III environments.',
    icon: Target,
    color: 'bg-blue-500',
    count: 12
  },
  {
    title: 'Subject-wise Preparation',
    description: 'Targeted practice for Math, Physics, Chemistry, English & Intelligence.',
    icon: Target,
    color: 'bg-purple-500',
    count: 45
  },
  {
    title: 'Notes & Formula Sheets',
    description: 'Curated hand-written notes and quick-reference formula guides.',
    icon: Target,
    color: 'bg-green-500',
    count: 28
  }
]