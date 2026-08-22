// app/dashboard/preparations/entry-test/nust/page.tsx
'use client'

import FASTHeader from '@/features/dashboard/preparations/entry-test/fast/components/Header'
import PastPapersSection from '@/features/dashboard/preparations/entry-test/fast/components/Papers'

export default function Page() {

  return (
    <div className="space-y-6">
      <FASTHeader />
      <PastPapersSection />
    </div>
  )
}