// data/sidebarData.tsx
import { NavItem } from '@/features/dashboard/home/types/types.home'
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Calendar,
    Users,
    BarChart3,
    Settings,
    HelpCircle,
    Target,
    Award,
    FolderOpen,
    BookMarked,
    Lightbulb,
    School,
    PenTool,
    BookCheck,
    ScrollText,
    FlaskConical,
    Atom,
    Calculator,
    Brain,
    Sigma,
    Microscope,
    Building2
} from 'lucide-react'

export const navigationItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        title: 'Preparation',
        href: "/preparation",
        icon: <Target className="h-5 w-5" />,
        subItems: [
            {
                title: 'Entry Tests',
                icon: <PenTool className="h-4 w-4" />,
                subItems: [
                    { title: 'LUMS', href: '/dashboard/preparation/entry-test/lums', icon: <Brain className="h-3.5 w-3.5" /> },
                    { title: 'IBA', href:'/dashboard/preparation/entry-test/iba', icon: <Building2 className="h-3.5 w-3.5"/>},
                    { title: 'NUST', href: '/dashboard/preparation/entry-test/nust', icon: <Target className="h-3.5 w-3.5" /> },
                    { title: 'FAST-NUCES', href: '/dashboard/preparation/entry-test/fast', icon: <Atom className="h-3.5 w-3.5" /> },
                    { title: 'GIKI', href: '/dashboard/preparation/entry-test/giki', icon: <FlaskConical className="h-3.5 w-3.5" /> },                    { title: 'UET', href: '/dashboard/preparation/entry-test/uet', icon: <Calculator className="h-3.5 w-3.5" /> },
                    { title: 'MDCAT', href: '/dashboard/preparation/entry-test/mdcat', icon: <Microscope className="h-3.5 w-3.5" /> },
                    { title: 'ECAT', href: '/dashboard/preparation/entry-test/ecat', icon: <Sigma className="h-3.5 w-3.5" /> },
                ]
            },
            {
                title: 'Board Exams',
                icon: <School className="h-4 w-4" />,
                subItems: [
                    { title: 'AKU', href: '/dashboard/preparation/board/aku', icon: <BookCheck className="h-3.5 w-3.5" /> },
                    { title: 'Federal Board', href: '/dashboard/preparation/board/federal', icon: <ScrollText className="h-3.5 w-3.5" /> },
                    { title: 'KIU', href: '/dashboard/preparation/board/kiu', icon: <BookOpen className="h-3.5 w-3.5" /> },
                    { title: 'Sindh Board', href: '/dashboard/preparation/board/sindh', icon: <BookCheck className="h-3.5 w-3.5" /> },
                    { title: 'Punjab Board', href: '/dashboard/preparation/board/punjab', icon: <ScrollText className="h-3.5 w-3.5" /> },
                ]
            },
        ]
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

export const bottomItems: NavItem[] = [
    {
        title: 'Help & Support',
        href: '/help',
        icon: <HelpCircle className="h-5 w-5" />,
    },
]