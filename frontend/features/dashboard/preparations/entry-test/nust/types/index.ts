import {  LucideIcon } from 'lucide-react'

export interface PastPaper {
  year: string
  count: number
  papers: string[]
}

export interface Resource {
  title: string
  description: string
  icon?: LucideIcon  
  color?: string
  count: number
}

export interface Subject {
  name: string
  icon: LucideIcon  
  progress?: number
  color?: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}