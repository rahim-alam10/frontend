// app/preparation/entry-tests/nust/components/IBAHeader.tsx
'use client'
import Image from 'next/image'

export default function IBAHeader() {
  return (
    <div className="my-7 flex items-center justify-center gap-4">
        {/* Title and Description */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
            IBA Entry Test
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Access full-length past papers, chapter-wise questions, and preparation guides for all NET series.
          </p>
        </div>
    </div>
  )
}