export interface SubjectProgress {
  name: string
  progress: number
  color: string
  target?: number
  icon?: React.ReactNode
}

export interface Exam {
  name: string
  daysLeft: number
  progress: number
  target?: number
  subjects: SubjectProgress[]
}

export interface ProgressCardProps {
  className?: string
  title?: string
  exams?: Exam[]
  overallProgress?: number
  studyStreak?: number
  dailyGoal?: number
  dailyGoalProgress?: number
  showDetailed?: boolean
}

export interface NavSubItem {
    title: string
    href?: string
    icon?: React.ReactNode
    subItems?: NavSubItem[]
}

export interface NavItem {
    title: string
    href?: string
    icon?: React.ReactNode
    badge?: string
    subItems?: NavSubItem[]
}