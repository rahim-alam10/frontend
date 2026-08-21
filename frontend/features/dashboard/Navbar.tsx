// components/Navbar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
    Search,
    Bell,
    User,
    ChevronDown,
    BookOpen,
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-zinc-900/95">
            <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left Section - Logo */}
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600">
                            <BookOpen className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            StudyValt
                        </span>
                    </Link>
                </div>

                {/* Center Section - Search Bar (Desktop) */}
                <div className="hidden flex-1 items-center justify-center px-6 md:flex lg:px-8">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="Search resources, tests, topics..."
                            className="w-full rounded-full border-gray-200 bg-gray-50 pl-10 pr-4 py-2 text-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                </div>

                {/* Right Section - Actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Mobile Search Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-2 md:flex">
                        {/* Notifications */}
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900"></span>
                        </Button>

                        {/* User Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="flex items-center gap-2 px-2 rounded-lg hover:bg-muted"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatar.jpg" alt="User" />
                                    <AvatarFallback className="bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                                        US
                                    </AvatarFallback>
                                </Avatar>

                                <span className="hidden text-sm font-medium text-gray-700 dark:text-gray-300 lg:inline-block">
                                    Usman
                                </span>

                                <ChevronDown className="hidden h-4 w-4 text-gray-400 lg:inline-block" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    <span>Dashboard</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FileText className="mr-2 h-4 w-4" />
                                    <span>My Resources</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
                <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-zinc-900 md:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-full border-gray-200 bg-gray-50 pl-10 pr-4 py-2 text-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="border-t border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-zinc-900 lg:hidden">
                    <div className="flex flex-col space-y-3">
                        <Button variant="ghost" className="justify-start gap-2">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Button>
                        <Button variant="ghost" className="justify-start gap-2">
                            <FileText className="h-4 w-4" />
                            My Resources
                        </Button>
                        <Button variant="ghost" className="justify-start gap-2">
                            <Bell className="h-4 w-4" />
                            Notifications
                        </Button>
                        <Button variant="ghost" className="justify-start gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </Button>
                        <hr className="border-gray-200 dark:border-gray-800" />
                        <Button variant="ghost" className="justify-start gap-2 text-red-600">
                            <LogOut className="h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}