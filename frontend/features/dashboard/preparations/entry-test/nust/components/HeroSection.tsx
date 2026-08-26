'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  Download, 
  FileCheck, 
  ArrowRight,
  Building,
  Layers,
  Clock,
  Award,
  Target,
  BookOpen,
  Calculator,
  Users,
  CheckCircle2,
  XCircle
} from 'lucide-react'
import { pastPapersData } from '../data/nust.data'

export default function PastPapersSection() {
  const [expandedYear, setExpandedYear] = useState<string | null>('2024')
  const [expandedDepartments, setExpandedDepartments] = useState<{[key: string]: boolean}>({})

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  const toggleDepartment = (year: string, deptIndex: number) => {
    const key = `${year}-${deptIndex}`
    setExpandedDepartments(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Check if a department is expanded
  const isDepartmentExpanded = (year: string, deptIndex: number) => {
    const key = `${year}-${deptIndex}`
    return expandedDepartments[key] !== undefined ? expandedDepartments[key] : true // Default to expanded
  }

  // Calculate total papers for a year
  const getTotalPapersForYear = (departments: any[]) => {
    return departments.reduce((total, dept) => total + dept.count, 0)
  }

  // Calculate stats
  const totalPapers = pastPapersData.reduce((total, year) => 
    total + year.departments.reduce((sum, dept) => sum + dept.count, 0), 0
  )
  const totalDepartments = pastPapersData.reduce((total, year) => 
    total + year.departments.length, 0
  )
  const totalYears = pastPapersData.length

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="border-b">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Layers className="h-5 w-5 text-purple-500" />
            NUST Past Papers
          </CardTitle>
          
          {/* Stats Overview */}
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <FileText className="h-3 w-3 mr-1" />
              {totalPapers} Papers
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <Building className="h-3 w-3 mr-1" />
              {totalDepartments} Departments
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <Calendar className="h-3 w-3 mr-1" />
              {totalYears} Years
            </Badge>
          </div>
        </div>

        {/* Stats Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <StatCard 
            label="Total Papers" 
            value={totalPapers}
            icon={<FileText className="h-4 w-4" />}
            color="blue"
          />
          <StatCard 
            label="Departments" 
            value={totalDepartments}
            icon={<Building className="h-4 w-4" />}
            color="purple"
          />
          <StatCard 
            label="Years" 
            value={totalYears}
            icon={<Calendar className="h-4 w-4" />}
            color="green"
          />
          <StatCard 
            label="Available" 
            value={totalPapers}
            icon={<CheckCircle2 className="h-4 w-4" />}
            color="orange"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Year Section - Outer Loop */}
          {pastPapersData.map((yearData) => (
            <div 
              key={yearData.year} 
              className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Year Toggle Header - IBA Style */}
              <button
                onClick={() => toggleYear(yearData.year)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-white dark:bg-gray-900"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {yearData.year}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {yearData.departments.length} Departments • {getTotalPapersForYear(yearData.departments)} Papers
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    {getTotalPapersForYear(yearData.departments)} papers
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Available
                  </Badge>
                </div>
                <div>
                  {expandedYear === yearData.year ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Departments Section - Inner Loop - IBA Style */}
              {expandedYear === yearData.year && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800/30 space-y-3">
                  
                  {/* Loop through each department in this year */}
                  {yearData.departments.map((department, deptIndex) => {
                    const isExpanded = isDepartmentExpanded(yearData.year, deptIndex)
                    
                    return (
                      <div 
                        key={deptIndex}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                      >
                        {/* Department Header with Toggle - IBA Style */}
                        <button
                          onClick={() => toggleDepartment(yearData.year, deptIndex)}
                          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Building className="h-4 w-4 text-purple-500" />
                            <span className="font-medium text-gray-900 dark:text-white">
                              {department.typeName}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {department.count} papers
                            </Badge>
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Available
                            </Badge>
                          </div>
                          <div>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {/* Papers Grid - IBA Style */}
                        {isExpanded && (
                          <div className="border-t border-gray-200 dark:border-gray-700 p-3 space-y-2">
                            {department.papers.length > 0 ? (
                              <>
                                {department.papers.map((paperName, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                                  >
                                    <div className="flex items-center gap-3 flex-1">
                                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                        <FileCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <p className="font-medium text-gray-800 dark:text-gray-200">
                                            {paperName}
                                          </p>
                                          <Badge variant="outline" className="text-xs font-mono">
                                            NET
                                          </Badge>
                                          <Badge className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                            Easy
                                          </Badge>
                                          <Badge className="text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                            Math
                                          </Badge>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400 flex-wrap">
                                          <span className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            60 min
                                          </span>
                                          <span className="flex items-center gap-1">
                                            <Award className="h-3 w-3" />
                                            100 marks
                                          </span>
                                          <span className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {yearData.year}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 ml-4">
                                      <Button 
                                        size="sm" 
                                        variant="ghost"
                                        className="text-xs hidden sm:flex hover:bg-purple-50 dark:hover:bg-purple-900/20"
                                        title="View paper"
                                      >
                                        <Eye className="h-4 w-4 mr-1" />
                                        Preview
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        className="text-xs bg-purple-600 hover:bg-purple-700 text-white"
                                      >
                                        <FileCheck className="h-4 w-4 mr-1" />
                                        Start
                                        <ArrowRight className="h-3 w-3 ml-1" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}

                                {/* View All Button for this department */}
                                <div className="mt-3 flex justify-end">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="gap-1 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                                  >
                                    View All {department.typeName} Papers
                                    <ArrowRight className="h-3 w-3" />
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                                No papers available for this department
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}

                  {/* View All Papers for this year */}
                  <div className="mt-4 flex justify-center">
                    <Button 
                      variant="default" 
                      className="gap-2 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      View All Papers for {yearData.year}
                      <ArrowRight className="h-4 w-4" />
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

// Stat Card Component (copied from IBA)
function StatCard({ label, value, icon, color }: any) {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    green: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
          <p className="font-bold text-lg text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  )
}