// app/dashboard/preparations/entry-test/nust/page.tsx
'use client'

import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import NUSTHeader from '@/features/dashboard/preparations/entry-test/nust/components/NUSTHeader'
import PastPapersSection from '@/features/dashboard/preparations/entry-test/nust/components/PastPapersSection'
import ResourcesGrid from '@/features/dashboard/preparations/entry-test/nust/components/ResourcesGrid'
import SubjectProgress from '@/features/dashboard/preparations/entry-test/nust/components/SubjectProgress'
import MockTestCTA from '@/features/dashboard/preparations/entry-test/nust/components/MockTestCTA'
import { useState } from 'react'

export default function Page() {

  // const { isLoading } = useProtectedRoute()
  // const isLoading = useState<boolean>(false)

  // if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-zinc-900">
  //       <div className="text-center">
  //         <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-600 border-t-transparent mx-auto"></div>
  //         <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="space-y-6">
      <NUSTHeader />
      <PastPapersSection />
      <ResourcesGrid />
      <SubjectProgress />
      <MockTestCTA />
      {/* <h1>Hello World</h1> */}
    </div>
  )
}