// components/ProgressCard.tsx
'use client'
import { useState } from 'react'
import {
  TrendingUp,
  Target,
  Clock,
  Calendar,
  CheckCircle,
  Circle,
  AlertCircle,
  Award,
  BookOpen,
  Brain,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Percent,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface SubjectProgress {
  name: string
  progress: number
  color: string
  target?: number
  icon?: React.ReactNode
}

interface Exam {
  name: string
  daysLeft: number
  progress: number
  target?: number
  subjects: SubjectProgress[]
}

interface ProgressCardProps {
  className?: string
  title?: string
  exams?: Exam[]
  overallProgress?: number
  studyStreak?: number
  dailyGoal?: number
  dailyGoalProgress?: number
  showDetailed?: boolean
}

export default function ProgressCard({
  className,
  title = "Preparation Progress",
  exams = [
    {
      name: "NUST NET Engineering",
      daysLeft: 24,
      progress: 68,
      target: 85,
      subjects: [
        { name: "Maths", progress: 80, color: "bg-blue-500", target: 90 },
        { name: "Physics", progress: 55, color: "bg-red-500", target: 75 },
        { name: "Chemistry", progress: 40, color: "bg-green-500", target: 70 },
      ]
    },
    {
      name: "FAST-NUCES Computer Science",
      daysLeft: 45,
      progress: 55,
      target: 75,
      subjects: [
        { name: "Maths", progress: 65, color: "bg-blue-500", target: 80 },
        { name: "Physics", progress: 30, color: "bg-red-500", target: 70 },
        { name: "Chemistry", progress: 25, color: "bg-green-500", target: 65 },
      ]
    }
  ],
  overallProgress = 68,
  studyStreak = 7,
  dailyGoal = 4,
  dailyGoalProgress = 60,
  showDetailed = true
}: ProgressCardProps) {
  const [expandedExam, setExpandedExam] = useState<string | null>(exams[0]?.name || null)
  const [view, setView] = useState<'overview' | 'detailed'>('overview')

  const toggleExam = (examName: string) => {
    setExpandedExam(expandedExam === examName ? null : examName)
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-500'
    if (progress >= 60) return 'text-yellow-500'
    if (progress >= 40) return 'text-orange-500'
    return 'text-red-500'
  }

  const getProgressBarColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    if (progress >= 40) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getStatusIcon = (progress: number, target?: number) => {
    if (!target) return null
    const percentage = (progress / target) * 100
    if (percentage >= 90) return <Award className="h-4 w-4 text-green-500" />
    if (percentage >= 70) return <TrendingUp className="h-4 w-4 text-yellow-500" />
    return <AlertCircle className="h-4 w-4 text-red-500" />
  }

  const getDaysLeftColor = (days: number) => {
    if (days <= 7) return 'text-red-500'
    if (days <= 14) return 'text-orange-500'
    if (days <= 30) return 'text-yellow-500'
    return 'text-green-500'
  }

  // Custom Progress component with color support
  const ColoredProgress = ({ value, color }: { value: number; color: string }) => {
    return (
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    )
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">
            {exams.length} Exams
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8"
            onClick={() => setView(view === 'overview' ? 'detailed' : 'overview')}
          >
            {view === 'overview' ? 'Detailed' : 'Overview'}
            <BarChart3 className="ml-2 h-3.5 w-3.5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-4">
        {/* Overall Progress */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Overall Progress
              </span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-auto">
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">
                        <Percent className="mr-1 h-3 w-3" />
                        {overallProgress}%
                      </Badge>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your overall preparation progress</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
                <span>{studyStreak} day streak</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-3.5 w-3.5 text-blue-500" />
                <span>{dailyGoal} hrs daily</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Progress value={overallProgress} className="h-2.5" />
            <div className="mt-0.5 flex justify-between text-xs text-gray-400">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
          {dailyGoalProgress > 0 && (
            <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-1.5 dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  Today's Goal: {dailyGoal} hours
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={dailyGoalProgress} className="h-1.5 w-20" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {dailyGoalProgress}%
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Exams Progress */}
        <div className="space-y-3">
          {exams.map((exam) => (
            <div key={exam.name} className="space-y-2">
              <div
                className="group flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
                onClick={() => toggleExam(exam.name)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {exam.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span className={getDaysLeftColor(exam.daysLeft)}>
                          {exam.daysLeft} days left
                        </span>
                      </span>
                      {exam.target && (
                        <span className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          Target: {exam.target}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={cn(
                        "font-medium",
                        getProgressColor(exam.progress)
                      )}
                    >
                      {exam.progress}%
                    </Badge>
                    {getStatusIcon(exam.progress, exam.target)}
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    {expandedExam === exam.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Expanded Subject Details */}
              {expandedExam === exam.name && view === 'detailed' && (
                <div className="ml-4 space-y-2 border-l-2 border-gray-200 pl-4 dark:border-gray-700">
                  {exam.subjects.map((subject) => (
                    <div key={subject.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={cn("h-2 w-2 rounded-full", subject.color)} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {subject.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {subject.progress}%
                          </span>
                          {subject.target && (
                            <span className="text-xs text-gray-400">
                              Target: {subject.target}%
                            </span>
                          )}
                          {getStatusIcon(subject.progress, subject.target)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ColoredProgress
                          value={subject.progress}
                          color={getProgressBarColor(subject.progress)}
                        />
                        {subject.target && (
                          <div className="relative h-1.5 w-1.5">
                            <div
                              className="absolute top-0 h-1.5 w-0.5 bg-gray-400"
                              style={{ left: `${subject.target}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}