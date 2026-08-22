// app/preparation/entry-tests/nust/components/ResourcesGrid.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { resourcesData } from '../data/resourcesData'

export default function ResourcesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {resourcesData.map((resource, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${resource.color} text-white mb-3`}>
              {/* {resource?.icon} */}
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {resource.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {resource.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <Badge variant="secondary">{resource.count} Resources</Badge>
              <Button variant="ghost" size="sm" className="gap-1">
                Explore
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}