'use client'
import Link from "next/link"
import { useState } from "react"
import { Spotlight } from "./ui/Spotlight"
import { Eye, EyeOff } from "lucide-react"

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {}

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Sign in data:', formData)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
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
                                The all-in-one vault for Pakistani students aiming for top universities and scholarships. Master your board exams and entry tests with structured, premium resources.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Sign In Form */}
                    <div className="p-8 sm:p-10 lg:p-16 xl:p-20 flex flex-col justify-center min-h-screen">
                        <div className="mb-8 lg:mb-10">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                Sign In
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mt-2">
                                Welcome back! Please sign in to continue.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 lg:py-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm lg:text-base ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password with Eye Icon */}
                            <div>
                                <label htmlFor="password" className="block text-sm lg:text-base font-medium text-black dark:text-gray-300 mb-1.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 lg:py-4 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm lg:text-base ${
                                            errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-black focus:outline-none"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right">
                                <Link href="/forgot-password" className="text-sm lg:text-base text-purple-600 hover:text-purple-500">
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 lg:py-4 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm lg:text-base"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Sign Up Link */}
                        <p className="mt-6 lg:mt-8 text-center text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-purple-600 hover:text-purple-500 font-semibold">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn