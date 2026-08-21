'use client'
import Link from "next/link"
import { useState } from "react"
import { Spotlight } from "../../../components/ui/Spotlight"
import { Eye, EyeOff } from "lucide-react"

function SignUp() {
    
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

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        if (!formData.agreeTerms) {
            newErrors.agreeTerms = 'You must agree to the terms'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Sign up data:', formData)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <div className="h-screen w-full bg-gray-900 flex items-center justify-center p-0 overflow-hidden">
            <div className="w-full h-full bg-white dark:bg-zinc-800 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Left Column - Testimonial */}
                    <div className="relative h-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 p-6 lg:p-8">
                        <Spotlight 
                            className="-top-40 left-0 md:left-60 md:-top-20" 
                            fill="white" 
                        />
                        <div className="relative z-10 text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-3">
                                StudyVault
                            </h1>
                            <p className="text-xs md:text-sm lg:text-base text-neutral-300 max-w-md mx-auto leading-relaxed">
                                The all-in-one vault for Pakistani students aiming for top universities and scholarships.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Sign Up Form */}
                    <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex flex-col justify-center h-full">
                        <div className="mb-3 lg:mb-4">
                            <h2 className="text-xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                                Create an Account
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                                Join thousands of students achieving academic excellence.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-2.5 lg:space-y-3">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-xs mt-0.5">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
                                )}
                            </div>

                            {/* Goal Selection */}
                            <div>
                                <label htmlFor="goal" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                                    What are you preparing for?
                                </label>
                                <select
                                    id="goal"
                                    name="goal"
                                    value={formData.goal}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                                        errors.goal ? 'border-red-500' : 'border-gray-300'
                                    }`}
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

                            {/* Password with Eye Icon */}
                            <div>
                                <label htmlFor="password" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Create a strong password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-1.5 pr-10 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                                            errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
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

                            {/* Confirm Password with Eye Icon */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-0.5">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Repeat your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={`w-full px-3 py-1.5 pr-10 text-sm border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                        }`}
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

                            {/* Terms Agreement */}
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="mt-0.5 w-3.5 h-3.5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor="agreeTerms" className="ml-1.5 text-xs text-gray-700 dark:text-gray-300">
                                    I agree to the <Link href="/terms" className="text-purple-600 hover:text-purple-500">Terms</Link> & <Link href="/privacy" className="text-purple-600 hover:text-purple-500">Privacy</Link>
                                </label>
                            </div>
                            {errors.agreeTerms && (
                                <p className="text-red-500 text-xs">{errors.agreeTerms}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-1.5 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Login Link */}
                        <p className="mt-2.5 text-center text-gray-600 dark:text-gray-400 text-xs">
                            Already have an account?{' '}
                            <Link href="/signin" className="text-purple-600 hover:text-purple-500 font-semibold">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp