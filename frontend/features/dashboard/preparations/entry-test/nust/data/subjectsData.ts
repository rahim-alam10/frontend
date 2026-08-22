// app/preparation/entry-tests/nust/data/subjectsData.ts
import { Subject } from '../types'
import { Target} from 'lucide-react'

export const subjectsData: Subject[] = [
  { name: 'Mathematics', icon: Target},
  { name: 'Physics', icon: Target, progress: 65, color: 'bg-red-500' },
  { name: 'Chemistry', icon: Target, progress: 78, color: 'bg-blue-500'}, 
  { name: 'English', icon: Target, progress: 70, color: 'bg-yellow-500' },
  { name: 'Intelligence', icon: Target, progress: 60, color: 'bg-purple-500' },
]