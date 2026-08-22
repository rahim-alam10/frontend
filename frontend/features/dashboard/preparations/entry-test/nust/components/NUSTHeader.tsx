// app/preparation/entry-tests/nust/components/NUSTHeader.tsx
'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function NUSTHeader() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="/preparation" className="hover:text-purple-600">Preparation</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/preparation/entry-tests" className="hover:text-purple-600">Entry Tests</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gray-900 dark:text-white font-medium">NUST NET</span>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
          NUST Entry Test (NET) Resources
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Access full-length past papers, chapter-wise questions, and preparation guides for all NET series.
        </p>
      </div>
    </div>
  )
}