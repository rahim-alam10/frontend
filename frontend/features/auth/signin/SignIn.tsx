'use client'
import { useState } from "react"
import { Spotlight } from "../../../components/ui/Spotlight"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'




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
                    <div className="flex items-center justify-center">
                        <Card className="w-full max-w-sm ">
                            <CardHeader>
                                <CardTitle>Login to your account</CardTitle>
                                <CardDescription>
                                    Enter your email below to login to your account
                                </CardDescription>
                                <CardAction>
                                    <Link href={'/signup'} className="cursor-pointer">
                                        <Button variant="link">Sign Up</Button>
                                    </Link>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="flex flex-col gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">Password</Label>
                                                <a
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <Input id="password" type="password" required />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button type="submit" className="w-full cursor-pointer">
                                    Login
                                </Button>
                                <Button variant="outline" className="w-full cursor-pointer">
                                    Login with Google
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn