// app/preparation/entry-tests/lums/components/PastPapersSection.tsx
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
  FileCheck, 
  ArrowRight,
  Award,
  Clock,
  Target,
  BookOpen,
  CheckCircle2,
  XCircle,
  Layers,
  Users,
  Calculator,
  GraduationCap,
  Globe,
  Brain,
  PenTool,
  Sparkles,
  BarChart3
} from 'lucide-react'
import { lumsDepartment } from '../data/lums.data'

export default function PastPapersSection() {
  const [expandedTest, setExpandedTest] = useState<string | null>('LCAT')
  const [expandedYear, setExpandedYear] = useState<string | null>('2024')

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'hard': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getPaperTypeIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'english': return <BookOpen className="h-4 w-4" />
      case 'math': return <Calculator className="h-4 w-4" />
      case 'analytical': return <Brain className="h-4 w-4" />
      case 'essay': return <PenTool className="h-4 w-4" />
      case 'interview': return <Users className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const getTestIcon = (testType: string) => {
    switch (testType?.toLowerCase()) {
      case 'lcat': return <GraduationCap className="h-5 w-5" />
      case 'sat': return <Globe className="h-5 w-5" />
      default: return <FileText className="h-5 w-5" />
    }
  }

  const getTestColor = (testType: string) => {
    switch (testType?.toLowerCase()) {
      case 'lcat': return 'bg-blue-100 text-blue-600 border-blue-200'
      case 'sat': return 'bg-purple-100 text-purple-600 border-purple-200'
      default: return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  const getTestButtonColor = (testType: string) => {
    switch (testType?.toLowerCase()) {
      case 'lcat': return 'bg-blue-600 hover:bg-blue-700'
      case 'sat': return 'bg-purple-600 hover:bg-purple-700'
      default: return 'bg-gray-600 hover:bg-gray-700'
    }
  }

  const toggleTest = (testType: string) => {
    setExpandedTest(expandedTest === testType ? null : testType)
  }

  const toggleYear = (yearKey: string) => {
    setExpandedYear(expandedYear === yearKey ? null : yearKey)
  }

  // Calculate total stats from the department data
  const allPapers = lumsDepartment.tests.flatMap(t => 
    t.years.flatMap(y => y.papers)
  )
  const totalPapers = allPapers.length
  const availablePapers = allPapers.filter(p => p.isAvailable).length
  const lcatPapers = allPapers.filter(p => p.testType === 'LCAT').length
  const satPapers = allPapers.filter(p => p.testType === 'SAT').length

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow border-2 border-purple-100">
      <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <GraduationCap className="h-6 w-6 text-purple-600" />
              {lumsDepartment.name}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1">
              {lumsDepartment.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-purple-300 text-purple-700">
              <Sparkles className="h-3 w-3 mr-1" />
              Updated {new Date().getFullYear()}
            </Badge>
            <Badge className="bg-purple-600 hover:bg-purple-700">
              {lumsDepartment.code}
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <StatCard 
            label="Total Papers" 
            value={totalPapers}
            icon={<Layers className="h-4 w-4" />}
            color="blue"
          />
          <StatCard 
            label="Available" 
            value={availablePapers}
            icon={<CheckCircle2 className="h-4 w-4" />}
            color="green"
          />
          <StatCard 
            label="LCAT Papers" 
            value={lcatPapers}
            icon={<GraduationCap className="h-4 w-4" />}
            color="purple"
          />
          <StatCard 
            label="SAT Papers" 
            value={satPapers}
            icon={<Globe className="h-4 w-4" />}
            color="orange"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Papers by Test Type */}
        <div className="space-y-4">
          {lumsDepartment.tests.map((test) => {
            const years = [...test.years].sort((a, b) => Number(b.year) - Number(a.year))
            const testColor = getTestColor(test.testType)

            return (
              <div key={test.id} className="border rounded-lg overflow-hidden shadow-sm">
                {/* Test Header */}
                <button
                  onClick={() => toggleTest(test.testType)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${testColor}`}>
                      {getTestIcon(test.testType)}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-lg">{test.title}</h3>
                        <Badge className={`${testColor} border-0`}>
                          {test.testType === 'LCAT' ? 'LUMS Common Admission Test' : 'Scholastic Assessment Test'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        {test.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">
                          {years.length} years • {test.totalPapers} papers
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {test.totalPapers} total
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      {test.availablePapers} available
                    </Badge>
                  </div>
                  <div>
                    {expandedTest === test.testType ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Years */}
                {expandedTest === test.testType && (
                  <div className="border-t p-4 space-y-3 bg-gray-50">
                    {years.map((yearData) => {
                      const papers = yearData.papers
                      const availableCount = papers.filter(p => p.isAvailable).length
                      const totalCount = papers.length
                      const yearKey = `${test.testType}-${yearData.year}`

                      return (
                        <div key={yearKey} className="bg-white rounded-lg overflow-hidden border shadow-sm">
                          {/* Year Header */}
                          <button
                            onClick={() => toggleYear(yearKey)}
                            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span className="font-medium text-gray-700">{yearData.year}</span>
                              <Badge variant="secondary" className="text-xs">
                                {totalCount} papers
                              </Badge>
                              {availableCount === totalCount ? (
                                <Badge className="bg-green-100 text-green-700 text-xs border-green-200">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  All available
                                </Badge>
                              ) : availableCount > 0 ? (
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs border-yellow-200">
                                  {availableCount}/{totalCount} available
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="text-gray-400 text-xs">
                                  <XCircle className="h-3 w-3 mr-1" />
                                  Coming soon
                                </Badge>
                              )}
                              {yearData.activePapers && yearData.activePapers > 0 && (
                                <Badge className="bg-blue-100 text-blue-700 text-xs border-blue-200">
                                  <Sparkles className="h-3 w-3 mr-1" />
                                  {yearData.activePapers} active
                                </Badge>
                              )}
                            </div>
                            <div>
                              {expandedYear === yearKey ? (
                                <ChevronUp className="h-4 w-4 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                          </button>

                          {/* Papers */}
                          {expandedYear === yearKey && (
                            <div className="border-t p-3 space-y-2">
                              {papers.map((paper) => (
                                <PaperCard 
                                  key={paper.id} 
                                  paper={paper}
                                  getDifficultyColor={getDifficultyColor}
                                  getPaperTypeIcon={getPaperTypeIcon}
                                  getTestButtonColor={getTestButtonColor}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{availablePapers}</span> out of{' '}
                <span className="font-semibold">{totalPapers}</span> papers available
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Badge className="bg-green-100 text-green-700 border-green-200">Easy</Badge>
              </span>
              <span className="flex items-center gap-1">
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">Medium</Badge>
              </span>
              <span className="flex items-center gap-1">
                <Badge className="bg-red-100 text-red-700 border-red-200">Hard</Badge>
              </span>
            </div>
            <Button variant="outline" size="sm" className="border-purple-300 text-purple-700">
              <BarChart3 className="h-4 w-4 mr-1" />
              View All Statistics
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Stat Card Component
function StatCard({ label, value, icon, color }: any) {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  }

  return (
    <div className="bg-white rounded-lg p-3 border shadow-sm">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded border ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="font-bold text-xl">{value}</p>
        </div>
      </div>
    </div>
  )
}

// Paper Card Component
function PaperCard({ paper, getDifficultyColor, getPaperTypeIcon, getTestButtonColor }: any) {
  return (
    <div 
      className={`
        flex items-center justify-between p-3 rounded-lg border transition-all
        ${paper.isAvailable 
          ? 'bg-white hover:shadow-md hover:border-purple-300 cursor-pointer hover:bg-purple-50/30' 
          : 'bg-gray-50 opacity-60 cursor-not-allowed'
        }
      `}
    >
      <div className="flex items-start gap-3 flex-1">
        <div className={`p-2 rounded-lg ${paper.isAvailable ? 'bg-purple-50' : 'bg-gray-100'}`}>
          {getPaperTypeIcon(paper.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className={`font-medium ${paper.isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
              {paper.title}
            </p>
            <Badge variant="outline" className="text-xs font-mono border-gray-300">
              {paper.code}
            </Badge>
            {paper.difficulty && (
              <Badge className={`text-xs ${getDifficultyColor(paper.difficulty)}`}>
                {paper.difficulty}
              </Badge>
            )}
            <Badge className="text-xs bg-gray-100 text-gray-600 border-gray-200">
              {paper.type}
            </Badge>
            <Badge className={`text-xs ${
              paper.testType === 'LCAT' 
                ? 'bg-blue-100 text-blue-600 border-blue-200' 
                : 'bg-purple-100 text-purple-600 border-purple-200'
            }`}>
              {paper.testType}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {paper.duration} min
            </span>
            <span className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              {paper.totalMarks} marks
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {paper.year}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        {paper.isAvailable ? (
          <>
            <Button 
              size="sm" 
              variant="ghost"
              className="text-xs hidden sm:flex hover:bg-purple-50"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button 
              size="sm" 
              className={`text-xs ${getTestButtonColor(paper.testType)}`}
            >
              <FileCheck className="h-4 w-4 mr-1" />
              Start
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </>
        ) : (
          <Badge variant="outline" className="text-gray-400 border-gray-300">
            <XCircle className="h-3 w-3 mr-1" />
            Unavailable
          </Badge>
        )}
      </div>
    </div>
  )
}