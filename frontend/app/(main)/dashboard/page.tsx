// app/dashboard/page.tsx
'use client'
import { useState } from 'react'
import Navbar from '@/features/dashboard/Navbar'
import Sidebar from '@/features/dashboard/Sidebar'
import ProgressCard from '@/features/dashboard/ProgressCard'
import RecentActivity from '@/features/dashboard/RecentActivity'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  FileText,
  Target,
  Award,
  Clock,
  Calendar,
  TrendingUp,
  Users,
  Video,
  Sparkles,
  ArrowRight,
  Plus,
  CheckCircle,
  Brain,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [selectedView, setSelectedView] = useState('overview')

  // Quick Stats Data
  const quickStats = [
    {
      title: "Study Streak",
      value: "7 days",
      icon: <Sparkles className="h-5 w-5 text-yellow-500" />,
      change: "+2 days",
      changeType: "positive"
    },
    {
      title: "Mock Tests",
      value: "12",
      icon: <Target className="h-5 w-5 text-blue-500" />,
      change: "+3 this week",
      changeType: "positive"
    },
    {
      title: "Resources Saved",
      value: "42",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      change: "+5 new",
      changeType: "positive"
    },
    {
      title: "Hours Studied",
      value: "48",
      icon: <Clock className="h-5 w-5 text-green-500" />,
      change: "+12 hrs",
      changeType: "positive"
    }
  ]

  // Upcoming Deadlines
  const deadlines = [
    {
      title: "NUST NET Mock Test",
      date: "2024-01-20",
      daysLeft: 4,
      priority: "high"
    },
    {
      title: "Physics Assignment",
      date: "2024-01-22",
      daysLeft: 6,
      priority: "medium"
    },
    {
      title: "Chemistry Quiz",
      date: "2024-01-18",
      daysLeft: 2,
      priority: "urgent"
    }
  ]

  // Recommended Resources
  const recommendedResources = [
    {
      title: "NUST NET Maths Formula Sheet",
      type: "PDF",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-blue-500"
    },
    {
      title: "Physics Vectors & Equilibrium",
      type: "Video",
      icon: <Video className="h-4 w-4" />,
      color: "bg-red-500"
    },
    {
      title: "Chemistry Organic Reactivity",
      type: "Document",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-green-500"
    }
  ]

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'urgent': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      default: return 'bg-blue-500'
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-zinc-900">
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed on left */}
        <Sidebar />
        
        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="container mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                  Welcome back, Usman! 👋
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  NUST NET Prep Mode • You're on a 7-day streak!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                  <Plus className="h-4 w-4" />
                  New Session
                </Button>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  View Calendar
                </Button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {stat.icon}
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {stat.title}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-green-500">
                        {stat.change}
                      </Badge>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Grid - 2 Columns */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Left Column - Progress (spans 2 columns) */}
              <div className="lg:col-span-2">
                <ProgressCard />
              </div>

              {/* Right Column - Quick Actions & Deadlines */}
              <div className="space-y-6">
                {/* Upcoming Deadlines */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-bold">Upcoming Deadlines</CardTitle>
                    <Link href="/calendar">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View All
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {deadlines.map((deadline, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${getPriorityColor(deadline.priority)}`} />
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {deadline.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {deadline.daysLeft} days left
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {new Date(deadline.date).toLocaleDateString()}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommended Resources */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-bold">Recommended</CardTitle>
                    <Link href="/resources">
                      <Button variant="ghost" size="sm" className="gap-1">
                        See All
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recommendedResources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${resource.color} text-white`}>
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {resource.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {resource.type} • Recommended
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Daily Goal Progress */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Daily Goal
                        </span>
                      </div>
                      <span className="text-sm font-bold text-purple-600">4 hrs</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-full rounded-full bg-purple-600 transition-all"
                        style={{ width: '60%' }}
                      />
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>2.4 hrs completed</span>
                      <span>60%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Section - Recent Activity (full width) */}
            <div className="grid grid-cols-1 gap-6">
              <RecentActivity />
            </div>

            {/* Footer Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-purple-600">14</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Topics</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-blue-600">28</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Quizzes</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-green-600">92%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Avg Score</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-yellow-600">8</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Achievements</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-red-600">45</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hours</p>
              </div>
              <div className="rounded-lg bg-white p-3 text-center dark:bg-zinc-800">
                <p className="text-2xl font-bold text-indigo-600">3</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tests Left</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}