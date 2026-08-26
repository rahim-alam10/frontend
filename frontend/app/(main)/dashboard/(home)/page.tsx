// app/dashboard/page.tsx
'use client'
import { useAuth } from '@/contexts/AuthContext'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import Navbar from '@/features/dashboard/home/components/Navbar'
import Sidebar from '@/features/dashboard/home/components/Sidebar'
import ProgressCard from '@/features/dashboard/home/components/ProgressCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  FileText,
  Target,
  Clock,
  Calendar,
  Plus,
  LogOut,
  Video,
  Download,
  Eye,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function DashboardPage() {
  const { user, signOut, isLoading } = useAuth()
  const { isLoading: routeLoading } = useProtectedRoute()


  // Saved Resources
  const savedResources = [
    {
      title: "FSc Part 2 Physics Complete Notes",
      type: "PDF",
      added: "2 days ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-blue-500",
      size: "4.2 MB"
    },
    {
      title: "BISE Lahore 2023 Chemistry Paper",
      type: "PDF",
      added: "1 week ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-green-500",
      size: "2.8 MB"
    },
    {
      title: "Calculus Integration - Video Lesson",
      type: "Video",
      added: "2 weeks ago",
      icon: <Video className="h-4 w-4" />,
      color: "bg-red-500",
      duration: "45 mins"
    },
    {
      title: "NUST NET Maths Formula Sheet",
      type: "PDF",
      added: "2 weeks ago",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-purple-500",
      size: "1.5 MB"
    }
  ]

  // Recently Viewed
  const recentlyViewed = [
    {
      title: "FSc Pre-Engineering Syllabus 2024",
      type: "PDF Document",
      viewed: "2 hours ago",
      icon: <Eye className="h-4 w-4" />
    },
    {
      title: "Vectors & Equilibrium Review",
      type: "Video Lesson",
      viewed: "2 hours ago",
      icon: <Video className="h-4 w-4" />
    },
    {
      title: "Vector Algebra Quiz Results",
      type: "Quiz Results",
      viewed: "Yesterday",
      icon: <Target className="h-4 w-4" />
    },
    {
      title: "NUST NET Mock Test 4 - Attempted",
      type: "Quiz Results",
      viewed: "3 days ago",
      icon: <Target className="h-4 w-4" />
    }
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Signed out successfully')
    } catch (error) {
      toast.error('Failed to sign out')
    }
  }

  // Show loading state
  if (isLoading || routeLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-600 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-zinc-900">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="container mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                  Welcome back, {user?.fullName || 'Student'}! 👋
                </h1>
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
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleSignOut}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Resources Section */}
            <div className="grid grid-cols-1 gap-6">
              {/* Saved Resources */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                    <CardTitle className="text-lg font-bold">Saved Resources</CardTitle>
                    <Badge variant="secondary">{savedResources.length}</Badge>
                  </div>
                  <Link href="/resources/saved">
                    <Button variant="ghost" size="sm" className="gap-1">
                      View All
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {savedResources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${resource.color} text-white`}>
                            {resource.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {resource.title}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <span>{resource.type}</span>
                              <span>•</span>
                              <span>Added {resource.added}</span>
                              {resource.size && (
                                <>
                                  <span>•</span>
                                  <span>{resource.size}</span>
                                </>
                              )}
                              {resource.duration && (
                                <>
                                  <span>•</span>
                                  <span>{resource.duration}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recently Viewed */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <CardTitle className="text-lg font-bold">Recently Viewed</CardTitle>
                    <Badge variant="secondary">{recentlyViewed.length}</Badge>
                  </div>
                  <Link href="/history">
                    <Button variant="ghost" size="sm" className="gap-1">
                      View History
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {recentlyViewed.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {item.type}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {item.viewed}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Section - Full Width */}
            <div className="grid grid-cols-1 gap-6">
              <ProgressCard />
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}