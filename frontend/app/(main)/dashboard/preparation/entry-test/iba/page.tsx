
'use client'

import IBAHeader from '@/features/dashboard/preparations/entry-test/iba/components/Header'
import PastPapersSection from '@/features/dashboard/preparations/entry-test/iba/components/HeroSection'

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
      <IBAHeader />
      <PastPapersSection />
    </div>
  )
}