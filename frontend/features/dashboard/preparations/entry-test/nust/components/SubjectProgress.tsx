// app/preparation/entry-tests/nust/components/SubjectProgress.tsx
'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain } from 'lucide-react'
import { subjectsData } from '../data/subjectsData'

export default function SubjectProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Brain className="h-5 w-5 text-purple-500" />
          Subject-wise Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subjectsData.map((subject, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={subject.color}>
                    < subject.icon />
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {subject.name}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {subject.progress}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className={`h-full rounded-full ${subject.color} transition-all`}
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}