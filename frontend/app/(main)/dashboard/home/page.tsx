// app/dashboard/page.tsx
'use client'
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import Navbar from '@/features/dashboard/Navbar'
import Sidebar from '@/features/dashboard/home/Sidebar'
import ProgressCard from '@/features/dashboard/home/ProgressCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  FileText,
  Target,
  Clock,
  Calendar,
  Sparkles,
  Plus,
  LogOut,
  Video,
  Download,
  Eye,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import ResourseSection from '@/features/dashboard/home/ResourseSection'

export default function DashboardPage() {
  const { user, signOut, isLoading } = useAuth()
  const { isLoading: routeLoading } = useProtectedRoute()

  // Recently Viewed
  
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
            <ResourseSection />
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