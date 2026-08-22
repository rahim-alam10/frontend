// app/preparation/entry-tests/nust/components/MockTestCTA.tsx
'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function MockTestCTA() {
  return (
    <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Ready for the real thing?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Take our proctored mock NET exam to gauge your national standing.
            </p>
          </div>
          <Button className="gap-2 bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
            <Play className="h-4 w-4" />
            Start Mock Test
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}