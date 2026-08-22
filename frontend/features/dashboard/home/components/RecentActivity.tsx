// components/RecentActivity.tsx
'use client'
import { useState } from 'react'
import {
  Clock,
  FileText,
  Video,
  CheckCircle,
  Award,
  BookOpen,
  Target,
  Calendar,
  ChevronRight,
  Eye,
  ThumbsUp,
  MessageSquare,
  Star,
  Loader2,
  Filter,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface Activity {
  id: string
  type: 'quiz' | 'resource' | 'video' | 'test' | 'achievement' | 'study' | 'upload'
  title: string
  description: string
  timestamp: string
  timeAgo: string
  icon: React.ReactNode
  color: string
  metadata?: {
    score?: string
    duration?: string
    pages?: string
    questions?: string
    status?: 'completed' | 'in-progress' | 'pending'
  }
  actions?: {
    label: string
    href: string
  }[]
}

interface RecentActivityProps {
  limit?: number
  showFilter?: boolean
  showSearch?: boolean
  className?: string
}

export default function RecentActivity({ 
  limit = 6, 
  showFilter = true,
  showSearch = true,
  className 
}: RecentActivityProps) {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewAll, setViewAll] = useState(false)

  // Mock data - In production, this would come from your API
  const activities: Activity[] = [
    {
      id: '1',
      type: 'quiz',
      title: 'NUST NET Mock Test 4 - Attempted',
      description: 'You scored 78% in the latest mock test',
      timestamp: '2024-01-15T14:30:00',
      timeAgo: '3 days ago',
      icon: <Target className="h-4 w-4" />,
      color: 'bg-blue-500',
      metadata: {
        score: '78%',
        questions: '120 questions',
        status: 'completed'
      },
      actions: [
        { label: 'Review Answers', href: '/mock-tests/review/4' },
        { label: 'Retry Test', href: '/mock-tests/retry/4' }
      ]
    },
    {
      id: '2',
      type: 'video',
      title: 'Vectors & Equilibrium Review',
      description: 'Watched video lesson on Physics',
      timestamp: '2024-01-15T10:15:00',
      timeAgo: '2 hours ago',
      icon: <Video className="h-4 w-4" />,
      color: 'bg-red-500',
      metadata: {
        duration: '45 mins',
        status: 'completed'
      },
      actions: [
        { label: 'Watch Again', href: '/videos/vectors-equilibrium' },
        { label: 'Take Notes', href: '/notes/vectors' }
      ]
    },
    {
      id: '3',
      type: 'resource',
      title: 'FSc Pre-Engineering Syllabus 2024',
      description: 'Downloaded the updated syllabus',
      timestamp: '2024-01-14T16:45:00',
      timeAgo: 'Yesterday',
      icon: <FileText className="h-4 w-4" />,
      color: 'bg-purple-500',
      metadata: {
        pages: '24 pages',
        status: 'completed'
      },
      actions: [
        { label: 'Open PDF', href: '/resources/syllabus-2024' },
        { label: 'Share', href: '/resources/syllabus-2024/share' }
      ]
    },
    {
      id: '4',
      type: 'achievement',
      title: '7-Day Study Streak! 🔥',
      description: 'You\'ve studied for 7 days in a row',
      timestamp: '2024-01-14T08:00:00',
      timeAgo: 'Yesterday',
      icon: <Award className="h-4 w-4" />,
      color: 'bg-yellow-500',
      metadata: {
        status: 'completed'
      },
      actions: [
        { label: 'View Achievements', href: '/achievements' },
        { label: 'Share', href: '/achievements/share' }
      ]
    },
    {
      id: '5',
      type: 'study',
      title: 'NUST NET Maths Formula Sheet',
      description: 'Reviewed 45 formulas for upcoming test',
      timestamp: '2024-01-13T20:30:00',
      timeAgo: '2 days ago',
      icon: <BookOpen className="h-4 w-4" />,
      color: 'bg-green-500',
      metadata: {
        status: 'in-progress'
      },
      actions: [
        { label: 'Continue Studying', href: '/study/maths-formulas' },
        { label: 'Take Quiz', href: '/quizzes/maths-formulas' }
      ]
    },
    {
      id: '6',
      type: 'upload',
      title: 'Physics Notes - Chapter 5',
      description: 'Uploaded new study notes',
      timestamp: '2024-01-12T14:20:00',
      timeAgo: '3 days ago',
      icon: <FileText className="h-4 w-4" />,
      color: 'bg-indigo-500',
      metadata: {
        status: 'completed'
      },
      actions: [
        { label: 'View Notes', href: '/resources/uploads/physics-ch5' },
        { label: 'Edit', href: '/resources/uploads/physics-ch5/edit' }
      ]
    },
    {
      id: '7',
      type: 'test',
      title: 'FAST-NUCES Entry Test Practice',
      description: 'Completed 50 questions practice session',
      timestamp: '2024-01-11T11:00:00',
      timeAgo: '4 days ago',
      icon: <CheckCircle className="h-4 w-4" />,
      color: 'bg-teal-500',
      metadata: {
        score: '82%',
        questions: '50 questions',
        status: 'completed'
      },
      actions: [
        { label: 'View Results', href: '/tests/fast-practice/results' },
        { label: 'Practice More', href: '/tests/fast-practice' }
      ]
    },
    {
      id: '8',
      type: 'resource',
      title: 'Calculus Integration - Video Lesson',
      description: 'Watched video lesson and took notes',
      timestamp: '2024-01-10T09:30:00',
      timeAgo: '5 days ago',
      icon: <Video className="h-4 w-4" />,
      color: 'bg-orange-500',
      metadata: {
        duration: '45 mins',
        status: 'completed'
      },
      actions: [
        { label: 'Watch Again', href: '/videos/calculus-integration' },
        { label: 'Download Notes', href: '/notes/calculus-integration' }
      ]
    }
  ]

  // Filter activities
  const filterActivities = (activities: Activity[]) => {
    let filtered = activities

    // Filter by type
    if (filter !== 'all') {
      filtered = filtered.filter(activity => activity.type === filter)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(activity =>
        activity.title.toLowerCase().includes(query) ||
        activity.description.toLowerCase().includes(query)
      )
    }

    return filtered
  }

  const filteredActivities = filterActivities(activities)
  const displayedActivities = viewAll ? filteredActivities : filteredActivities.slice(0, limit)

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500 text-white">Completed</Badge>
      case 'in-progress':
        return <Badge variant="default" className="bg-yellow-500 text-white">In Progress</Badge>
      case 'pending':
        return <Badge variant="default" className="bg-gray-500 text-white">Pending</Badge>
      default:
        return null
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'quiz':
        return <Target className="h-4 w-4" />
      case 'video':
        return <Video className="h-4 w-4" />
      case 'resource':
        return <FileText className="h-4 w-4" />
      case 'achievement':
        return <Award className="h-4 w-4" />
      case 'study':
        return <BookOpen className="h-4 w-4" />
      case 'upload':
        return <FileText className="h-4 w-4" />
      case 'test':
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'quiz': return 'Quiz'
      case 'video': return 'Video'
      case 'resource': return 'Resource'
      case 'achievement': return 'Achievement'
      case 'study': return 'Study Session'
      case 'upload': return 'Upload'
      case 'test': return 'Test'
      default: return type
    }
  }

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
          <Badge variant="secondary" className="ml-2">
            {filteredActivities.length}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          {showFilter && (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuItem onClick={() => setFilter('all')}>
                  All Activity
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('quiz')}>
                  Quizzes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('video')}>
                  Videos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('resource')}>
                  Resources
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('study')}>
                  Study Sessions
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('achievement')}>
                  Achievements
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('upload')}>
                  Uploads
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('test')}>
                  Tests
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="h-8 w-[120px] pl-8 text-sm sm:w-[160px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
          {filteredActivities.length > limit && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1"
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? 'Show Less' : 'View All'}
              <ChevronRight className={cn(
                "h-3.5 w-3.5 transition-transform",
                viewAll && "rotate-90"
              )} />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {filteredActivities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
              <Clock className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
              No recent activity
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start studying to see your activity here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayedActivities.map((activity) => (
              <div
                key={activity.id}
                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                {/* Icon */}
                <div className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white",
                  activity.color
                )}>
                  {getActivityIcon(activity.type)}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {activity.title}
                        </h4>
                        {activity.metadata?.status && (
                          <span className="hidden sm:inline">
                            {getStatusBadge(activity.metadata.status)}
                          </span>
                        )}
                      </div>
                      <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                        {activity.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-gray-400 dark:text-gray-500">
                      {activity.timeAgo}
                    </span>
                  </div>

                  {/* Metadata */}
                  {(activity.metadata?.score || activity.metadata?.duration || activity.metadata?.questions) && (
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      {activity.metadata.score && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {activity.metadata.score}
                        </span>
                      )}
                      {activity.metadata.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.metadata.duration}
                        </span>
                      )}
                      {activity.metadata.questions && (
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {activity.metadata.questions}
                        </span>
                      )}
                      {activity.metadata.pages && (
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {activity.metadata.pages}
                        </span>
                      )}
                      <span className="hidden sm:inline">
                        {getStatusBadge(activity.metadata?.status)}
                      </span>
                    </div>
                  )}

                  {/* Actions */}
                  {activity.actions && activity.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap items-center gap-1">
                      {activity.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-xs"
                        >
                          <a href={action.href}>
                            {action.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* View All Button (if not showing all) */}
            {!viewAll && filteredActivities.length > limit && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setViewAll(true)}
              >
                View All {filteredActivities.length} Activities
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}