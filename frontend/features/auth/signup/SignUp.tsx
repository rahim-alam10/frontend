// app/(auth)/signup/page.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spotlight } from '@/components/ui/Spotlight'
import { useAuth } from '@/contexts/AuthContext'
import { toast } from 'sonner'

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    goal: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const { signUp } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.goal) {
      newErrors.goal = 'Please select your goal'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      await signUp(formData)
      toast.success('Account created successfully! 🎉')
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-0">
      <div className="w-full h-full min-h-screen bg-white dark:bg-zinc-800 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-screen">
          {/* Left Column - Spotlight/Testimonial */}
          <div className="relative h-[60vh] md:h-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 p-8 lg:p-12">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                StudyVault
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
                Join thousands of Pakistani students preparing for top universities. Start your journey today!
              </p>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="flex items-center justify-center p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Start your journey with creating account
                  </CardDescription>
                  <CardAction>
                    <Link href="/signin">
                      <Button variant="link">Sign In</Button>
                    </Link>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'border-red-500' : ''}
                        disabled={isLoading}
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'border-red-500' : ''}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="goal">What are you preparing for?</Label>
                      <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.goal ? 'border-red-500' : 'border-gray-300'
                        }`}
                        disabled={isLoading}
                      >
                        <option value="">Select your primary goal</option>
                        <option value="board-exams">Board Exams</option>
                        <option value="entry-test">Entry Test Preparation</option>
                        <option value="competitive-exam">Competitive Exam</option>
                        <option value="skill-development">Skill Development</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.goal && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.goal}</p>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleChange}
                          className={errors.password ? 'border-red-500' : ''}
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Repeat your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={errors.confirmPassword ? 'border-red-500' : ''}
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>
                      )}
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-0.5 w-3.5 h-3.5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        disabled={isLoading}
                      />
                      <Label htmlFor="agreeTerms" className="ml-1.5 text-xs text-gray-700 dark:text-gray-300">
                        I agree to the <Link href="/terms" className="text-purple-600 hover:text-purple-500">Terms</Link> & <Link href="/privacy" className="text-purple-600 hover:text-purple-500">Privacy</Link>
                      </Label>
                    </div>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-xs">{errors.agreeTerms}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button 
                    type="submit" 
                    className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}