// components/Sidebar.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Calendar,
    Users,
    BarChart3,
    Settings,
    HelpCircle,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Target,
    Award,
    FolderOpen,
    BookMarked,
    GraduationCap,
    Lightbulb,
    ChevronDown,
    ChevronUp,
    Sparkles,
    School,
    PenTool,
    BookCheck,
    ScrollText,
    FlaskConical,
    Atom,
    Calculator,
    Brain,
    Sigma,
    Microscope
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface NavItem {
    title: string
    href: string
    icon?: React.ReactNode
    badge?: string
    subItems?: NavSubItem[]
}

interface NavSubItem {
    title: string
    href: string
    icon?: React.ReactNode
    subItems?: NavSubItem[]
}

export default function Sidebar() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [expandedItems, setExpandedItems] = useState<string[]>(['Preparation', 'Board Exams', 'Entry Tests'])

    const toggleExpand = (title: string) => {
        setExpandedItems(prev =>
            prev.includes(title)
                ? prev.filter(item => item !== title)
                : [...prev, title]
        )
    }

    const navigationItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
            title: 'Preparation',
            href: '/dashboard/preparation',
            icon: <Target className="h-5 w-5" />,
            subItems: [
                { 
                    title: 'Board Exams',
                    href: '/dashboard/preparation/board',
                    icon: <School className="h-4 w-4" />,
                    subItems: [
                        { title: 'AKU', href: '/preparation/board/aku', icon: <BookCheck className="h-3.5 w-3.5" /> },
                        { title: 'Federal Board', href: '/preparation/board/federal', icon: <ScrollText className="h-3.5 w-3.5" /> },
                        { title: 'KIU', href: '/preparation/board/kiu', icon: <BookOpen className="h-3.5 w-3.5" /> },
                        { title: 'Sindh Board', href: '/preparation/board/sindh', icon: <BookCheck className="h-3.5 w-3.5" /> },
                        { title: 'Punjab Board', href: '/preparation/board/punjab', icon: <ScrollText className="h-3.5 w-3.5" /> },
                    ]
                },
                { 
                    title: 'Entry Tests',
                    href: '/preparation/entry-tests',
                    icon: <PenTool className="h-4 w-4" />,
                    subItems: [
                        { title: 'NUST NET', href: '/preparation/entry-tests/nust', icon: <Target className="h-3.5 w-3.5" /> },
                        { title: 'FAST-NUCES', href: '/preparation/entry-tests/fast', icon: <Atom className="h-3.5 w-3.5" /> },
                        { title: 'GIKI', href: '/preparation/entry-tests/giki', icon: <FlaskConical className="h-3.5 w-3.5" /> },
                        { title: 'LUMS', href: '/preparation/entry-tests/lums', icon: <Brain className="h-3.5 w-3.5" /> },
                        { title: 'UET', href: '/preparation/entry-tests/uet', icon: <Calculator className="h-3.5 w-3.5" /> },
                        { title: 'MDCAT', href: '/preparation/entry-tests/mdcat', icon: <Microscope className="h-3.5 w-3.5" /> },
                        { title: 'ECAT', href: '/preparation/entry-tests/ecat', icon: <Sigma className="h-3.5 w-3.5" /> },
                    ]
                },
            ],
        },
        {
            title: 'Resources',
            href: '/resources',
            icon: <BookOpen className="h-5 w-5" />,
            subItems: [
                { title: 'Saved Resources', href: '/resources/saved', icon: <BookMarked className="h-4 w-4" /> },
                { title: 'My Uploads', href: '/resources/uploads', icon: <FolderOpen className="h-4 w-4" /> },
                { title: 'Recommended', href: '/resources/recommended', icon: <Lightbulb className="h-4 w-4" /> },
            ],
        },
        {
            title: 'Mock Tests',
            href: '/mock-tests',
            icon: <FileText className="h-5 w-5" />,
            badge: '12',
        },
        {
            title: 'Study Streak',
            href: '/streak',
            icon: <Award className="h-5 w-5" />,
            badge: '7 days',
        },
        {
            title: 'Progress',
            href: '/progress',
            icon: <BarChart3 className="h-5 w-5" />,
        },
        {
            title: 'Calendar',
            href: '/calendar',
            icon: <Calendar className="h-5 w-5" />,
        },
        {
            title: 'Community',
            href: '/community',
            icon: <Users className="h-5 w-5" />,
        },
        {
            title: 'Settings',
            href: '/settings',
            icon: <Settings className="h-5 w-5" />,
        },
    ]

    const bottomItems: NavItem[] = [
        {
            title: 'Help & Support',
            href: '/help',
            icon: <HelpCircle className="h-5 w-5" />,
        },
    ]

    const isActive = (href: string) => {
        if (href === '/dashboard') {
            return pathname === href
        }
        return pathname?.startsWith(href)
    }

    const isSubItemActive = (subItems?: NavSubItem[]): boolean => {
        if (!subItems) return false
        return subItems.some(item => {
            if (pathname === item.href) return true
            if (item.subItems) return isSubItemActive(item.subItems)
            return false
        })
    }

    // Recursive function to render sub-items
    const renderSubItems = (items: NavSubItem[], depth: number = 0) => {
        return (
            <ul className={cn(
                "space-y-1",
                depth === 0 && "ml-4 mt-1",
                depth > 0 && "ml-6 mt-1"
            )}>
                {items.map((subItem) => {
                    const hasSubItems = subItem.subItems && subItem.subItems.length > 0
                    const isExpanded = expandedItems.includes(subItem.title)
                    const isActiveSub = pathname === subItem.href
                    const isSubActive = isSubItemActive(subItem.subItems)

                    return (
                        <li key={subItem.href}>
                            {hasSubItems ? (
                                <div className="flex flex-col">
                                    <Button
                                        variant={isActiveSub || isSubActive ? 'default' : 'ghost'}
                                        className={cn(
                                            'w-full justify-between px-3 text-sm',
                                            (isActiveSub || isSubActive) &&
                                            'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                                        )}
                                        onClick={() => toggleExpand(subItem.title)}
                                    >
                                        <span className="flex items-center gap-2">
                                            {subItem.icon && <span className="text-gray-500">{subItem.icon}</span>}
                                            <span>{subItem.title}</span>
                                        </span>
                                        {isExpanded ? (
                                            <ChevronUp className="h-3 w-3" />
                                        ) : (
                                            <ChevronDown className="h-3 w-3" />
                                        )}
                                    </Button>
                                    {isExpanded && subItem.subItems && (
                                        renderSubItems(subItem.subItems, depth + 1)
                                    )}
                                </div>
                            ) : (
                                <Link href={subItem.href}>
                                    <Button
                                        variant={isActiveSub ? 'default' : 'ghost'}
                                        className={cn(
                                            'w-full justify-start px-3 text-sm font-normal',
                                            isActiveSub &&
                                            'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
                                        )}
                                    >
                                        <span className="flex items-center gap-2">
                                            {subItem.icon && <span className="text-gray-400">{subItem.icon}</span>}
                                            <span>{subItem.title}</span>
                                        </span>
                                    </Button>
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <TooltipProvider>
            <aside
                className={cn(
                    'relative flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-zinc-900',
                    isCollapsed ? 'w-[72px]' : 'w-[280px]'
                )}
            >
                {/* Logo Section */}
                <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800">
                    {!isCollapsed && (
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-500">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-900 dark:text-white">
                                    StudyVault
                                </span>
                            </div>
                        </Link>
                    )}
                    {isCollapsed && (
                        <Link href="/dashboard" className="mx-auto">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-500">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                        </Link>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? (
                            <ChevronRight className="h-4 w-4" />
                        ) : (
                            <ChevronLeft className="h-4 w-4" />
                        )}
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <ul className="space-y-1">
                        {navigationItems.map((item) => {
                            const active = isActive(item.href)
                            const hasSubItems = item.subItems && item.subItems.length > 0
                            const isExpanded = expandedItems.includes(item.title)
                            const subActive = isSubItemActive(item.subItems)

                            if (isCollapsed) {
                                return (
                                    <li key={item.title}>
                                        <Tooltip>
                                            // className: "w-full"
                                            <TooltipTrigger className="w-full">
                                                <Link href={item.href}>
                                                    <Button
                                                        variant={active ? 'default' : 'ghost'}
                                                        className={cn(
                                                            'relative h-10 w-full justify-center px-2',
                                                            active && 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                                        )}
                                                    >
                                                        {item.icon}
                                                        {item.badge && (
                                                            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[8px] font-medium text-white">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </Button>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                {item.title}
                                            </TooltipContent>
                                        </Tooltip>
                                    </li>
                                )
                            }

                            return (
                                <li key={item.title}>
                                    <div className="flex flex-col">
                                        <Link href={hasSubItems ? '#' : item.href}>
                                            <Button
                                                variant={active || subActive ? 'default' : 'ghost'}
                                                className={cn(
                                                    'w-full justify-between px-3',
                                                    (active || subActive) &&
                                                    'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                                )}
                                                onClick={(e) => {
                                                    if (hasSubItems) {
                                                        e.preventDefault()
                                                        toggleExpand(item.title)
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    <span className="text-sm font-medium">{item.title}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {item.badge && (
                                                        <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                    {hasSubItems && (
                                                        isExpanded ?
                                                            <ChevronUp className="h-4 w-4" /> :
                                                            <ChevronDown className="h-4 w-4" />
                                                    )}
                                                </div>
                                            </Button>
                                        </Link>
                                        {hasSubItems && isExpanded && item.subItems && (
                                            renderSubItems(item.subItems)
                                        )}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 p-3 dark:border-gray-800">
                    <ul className="space-y-1">
                        {bottomItems.map((item) => {
                            const active = isActive(item.href)

                            if (isCollapsed) {
                                return (
                                    <li key={item.title}>
                                        <Tooltip>
                                            <TooltipTrigger className= "w-full">
                                                <Link href={item.href}>
                                                    <Button
                                                        variant={active ? 'default' : 'ghost'}
                                                        className={cn(
                                                            'h-10 w-full justify-center px-2',
                                                            active && 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                                        )}
                                                    >
                                                        {item.icon}
                                                    </Button>
                                                </Link>
                                            </TooltipTrigger>
                                            <TooltipContent side="right">
                                                {item.title}
                                            </TooltipContent>
                                        </Tooltip>
                                    </li>
                                )
                            }

                            return (
                                <li key={item.title}>
                                    <Link href={item.href}>
                                        <Button
                                            variant={active ? 'default' : 'ghost'}
                                            className={cn(
                                                'w-full justify-start gap-3 px-3',
                                                active && 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                            )}
                                        >
                                            {item.icon}
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </Button>
                                    </Link>
                                </li>
                            )
                        })}

                        {/* User Profile */}
                        {!isCollapsed ? (
                            <div className="mt-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src="/avatar.jpg" alt="User" />
                                        <AvatarFallback className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                                            US
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            Usman Sheikh
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            NUST NET Aspirant
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <LogOut className="h-4 w-4 text-gray-500" />
                                    </Button>
                                </div>
                                <div className="mt-3 flex items-center justify-between rounded bg-purple-50 px-3 py-1.5 dark:bg-purple-900/20">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-3 w-3 text-purple-600" />
                                        <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                                            Study Streak
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                                        7 days 🔥
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <li>
                                <Tooltip>
                                    <TooltipTrigger className= "w-full">
                                        <Link href="/profile">
                                            <Button variant="ghost" className="h-10 w-full justify-center px-2">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-purple-500 text-xs text-white">
                                                        US
                                                    </AvatarFallback>
                                                </Avatar>
                                            </Button>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Profile</TooltipContent>
                                </Tooltip>
                            </li>
                        )}
                    </ul>
                </div>
                
            </aside>
        </TooltipProvider>
    )
}