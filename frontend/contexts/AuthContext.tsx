// contexts/AuthContext.tsx
'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  fullName: string
  goal?: string
  avatar?: string
  role: 'student' | 'admin'
  createdAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  signOut: () => Promise<void>
  updateUser: (data: Partial<User>) => Promise<void>
}

interface SignUpData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  goal: string
  agreeTerms: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data for frontend testing
const MOCK_USER: User = {
  id: '1',
  email: 'usman@example.com',
  fullName: 'Usman Sheikh',
  goal: 'entry-test',
  role: 'student',
  createdAt: new Date().toISOString()
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on mount (localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('mock_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('mock_user')
      }
    }
    setIsLoading(false)
  }, [])

  // Mock Sign In
  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo, accept any email/password
    const mockUser = {
      ...MOCK_USER,
      email: email,
      fullName: email.split('@')[0] === 'usman' ? 'Usman Sheikh' : 'Test User'
    }
    
    localStorage.setItem('mock_user', JSON.stringify(mockUser))
    setUser(mockUser)
    setIsLoading(false)
    
    router.push('/dashboard')
  }

  // Mock Sign Up
  const signUp = async (data: SignUpData) => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      fullName: data.fullName,
      goal: data.goal,
      role: 'student',
      createdAt: new Date().toISOString()
    }
    
    localStorage.setItem('mock_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsLoading(false)
    
    router.push('/dashboard')
  }

  // Mock Sign Out
  const signOut = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    localStorage.removeItem('mock_user')
    setUser(null)
    setIsLoading(false)
    router.push('/signin')
  }

  // Mock Update User
  const updateUser = async (data: Partial<User>) => {
    if (!user) return
    
    const updatedUser = { ...user, ...data }
    localStorage.setItem('mock_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    updateUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}