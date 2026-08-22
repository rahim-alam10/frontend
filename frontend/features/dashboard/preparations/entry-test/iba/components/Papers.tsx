// app/preparation/entry-tests/nust/components/PastPapersSection.tsx
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
  Calculator
} from 'lucide-react'
import { pastPapersData, IBAPaper } from '../data/iba.data'

export default function PastPapersSection() {
  const [expandedRound, setExpandedRound] = useState<string | null>('Round I')
  const [expandedYear, setExpandedYear] = useState<string | null>('2024')
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      case 'hard': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getPaperTypeIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'english': return <BookOpen className="h-4 w-4" />
      case 'math': return <Calculator className="h-4 w-4" />
      case 'analytical': return <Target className="h-4 w-4" />
      case 'essay': return <FileText className="h-4 w-4" />
      case 'interview': return <Users className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  // Group papers by round and year
  const getPapersByRoundAndYear = () => {
    const grouped: Record<string, Record<string, IBAPaper[]>> = {}
    
    pastPapersData.forEach(paper => {
      const round = paper.round
      const year = paper.year
      
      if (!grouped[round]) {
        grouped[round] = {}
      }
      if (!grouped[round][year]) {
        grouped[round][year] = []
      }
      grouped[round][year].push(paper)
    })
    
    return grouped
  }

  const papersByRound = getPapersByRoundAndYear()
  const rounds = Object.keys(papersByRound).sort()

  // Calculate stats
  const totalPapers = pastPapersData.length
  const availablePapers = pastPapersData.filter(p => p.isAvailable).length
  const round1Papers = pastPapersData.filter(p => p.round === 'Round I').length
  const round2Papers = pastPapersData.filter(p => p.round === 'Round II').length

  const toggleRound = (round: string) => {
    setExpandedRound(expandedRound === round ? null : round)
  }

  const toggleYear = (yearKey: string) => {
    setExpandedYear(expandedYear === yearKey ? null : yearKey)
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="border-b">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Layers className="h-5 w-5 text-purple-500" />
            IBA Past Papers
          </CardTitle>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <StatCard 
            label="Total Papers" 
            value={totalPapers}
            icon={<FileText className="h-4 w-4" />}
            color="blue"
          />
          <StatCard 
            label="Available" 
            value={availablePapers}
            icon={<CheckCircle2 className="h-4 w-4" />}
            color="green"
          />
          <StatCard 
            label="Round I" 
            value={round1Papers}
            icon={<Target className="h-4 w-4" />}
            color="purple"
          />
          <StatCard 
            label="Round II" 
            value={round2Papers}
            icon={<Award className="h-4 w-4" />}
            color="orange"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Papers by Round */}
        <div className="space-y-4">
          {rounds.map((round) => {
            const years = Object.keys(papersByRound[round]).sort((a, b) => Number(b) - Number(a))
            const roundPapers = pastPapersData.filter(p => p.round === round)
            const roundAvailable = roundPapers.filter(p => p.isAvailable).length

            return (
              <div key={round} className="border rounded-lg overflow-hidden">
                {/* Round Header */}
                <button
                  onClick={() => toggleRound(round)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${round === 'Round I' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                      {round === 'Round I' ? (
                        <Target className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Award className="h-5 w-5 text-purple-600" />
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{round}</h3>
                      <p className="text-sm text-gray-500">
                        {years.length} years • {roundPapers.length} papers
                      </p>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {roundPapers.length} papers
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">
                      {roundAvailable} available
                    </Badge>
                  </div>
                  <div>
                    {expandedRound === round ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </button>

                {/* Years */}
                {expandedRound === round && (
                  <div className="border-t p-4 space-y-3 bg-gray-50">
                    {years.map((year) => {
                      const papers = papersByRound[round][year]
                      const availableCount = papers.filter(p => p.isAvailable).length
                      const totalCount = papers.length
                      const yearKey = `${round}-${year}`

                      return (
                        <div key={yearKey} className="bg-white rounded-lg overflow-hidden border">
                          {/* Year Header */}
                          <button
                            onClick={() => toggleYear(yearKey)}
                            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{year}</span>
                              <Badge variant="secondary" className="text-xs">
                                {totalCount} papers
                              </Badge>
                              {availableCount === totalCount ? (
                                <Badge className="bg-green-100 text-green-700 text-xs">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  All available
                                </Badge>
                              ) : availableCount > 0 ? (
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                                  {availableCount}/{totalCount} available
                                </Badge>
                              ) : (
                                <Badge variant="outline" className="text-gray-400 text-xs">
                                  Coming soon
                                </Badge>
                              )}
                            </div>
                            <div>
                              {expandedYear === yearKey ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
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
      </CardContent>
    </Card>
  )
}

// Stat Card Component
function StatCard({ label, value, icon, color }: any) {
  const colorMap: any = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
  }

  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div className={`p-1.5 rounded ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="font-bold text-lg">{value}</p>
        </div>
      </div>
    </div>
  )
}

// Paper Card Component
function PaperCard({ paper, getDifficultyColor, getPaperTypeIcon }: any) {
  return (
    <div 
      className={`
        flex items-center justify-between p-3 rounded-lg border transition-all
        ${paper.isAvailable 
          ? 'bg-white hover:shadow-md hover:border-blue-300 cursor-pointer' 
          : 'bg-gray-50 opacity-60 cursor-not-allowed'
        }
      `}
    >
      <div className="flex items-start gap-3 flex-1">
        <div className={`p-2 rounded-lg ${paper.isAvailable ? 'bg-blue-50' : 'bg-gray-100'}`}>
          {getPaperTypeIcon(paper.type)}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className={`font-medium ${paper.isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
              {paper.title}
            </p>
            <Badge variant="outline" className="text-xs font-mono">
              {paper.code}
            </Badge>
            {paper.difficulty && (
              <Badge className={`text-xs ${getDifficultyColor(paper.difficulty)}`}>
                {paper.difficulty}
              </Badge>
            )}
            <Badge className="text-xs bg-gray-100 text-gray-600">
              {paper.type}
            </Badge>
            {paper.department && (
              <Badge className="text-xs bg-blue-100 text-blue-600">
                {paper.department}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {paper.duration || 60} min
            </span>
            <span className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              {paper.totalMarks || 100} marks
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {paper.year} • {paper.round}
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
              className="text-xs hidden sm:flex"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </Button>
            <Button 
              size="sm" 
              className="text-xs bg-purple-600 hover:bg-purple-700"
            >
              <FileCheck className="h-4 w-4 mr-1" />
              Start
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </>
        ) : (
          <Badge variant="outline" className="text-gray-400">
            <XCircle className="h-3 w-3 mr-1" />
            Unavailable
          </Badge>
        )}
      </div>
    </div>
  )
}