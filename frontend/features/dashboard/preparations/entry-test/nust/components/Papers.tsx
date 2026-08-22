// app/preparation/entry-tests/nust/components/PastPapersSection.tsx
'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Calendar, ChevronDown, ChevronUp, Eye, Download, FileCheck, ArrowRight } from 'lucide-react'
import { pastPapersData } from '../data/nust.data'

export default function PastPapersSection() {
  const [expandedYear, setExpandedYear] = useState<string | null>('2024')

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <FileText className="h-5 w-5 text-purple-500" />
          Past Papers by Year
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pastPapersData.map((paper) => (
            <div
              key={paper.year}
              className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div
                className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={() => toggleYear(paper.year)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {paper.year}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {paper.count} Papers Available
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    {paper.count} Papers
                  </Badge>
                  {expandedYear === paper.year ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
              
              {expandedYear === paper.year && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/30">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {paper.papers.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-lg bg-white p-3 dark:bg-gray-800"
                      >
                        <div className="flex items-center gap-2">
                          <FileCheck className="h-4 w-4 text-purple-500" />
                          <span className="text-sm font-medium">{p}</span>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button variant="outline" size="sm" className="gap-1">
                      View All Papers
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}