// app/preparation/entry-tests/nust/components/NUSTHeader.tsx
'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function NUSTHeader() {
  return (
    <div className="my-7  flex justify-center">
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