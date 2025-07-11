export interface Project {
  id: string
  title: { en: string; es: string }
  description: { en: string; es: string }
  techStack: string[]
  features: { en: string[]; es: string[] }
  githubUrl?: string
  liveUrl?: string
  status?: "completed" | "in-progress" | "planned"
  image?: string
}

export interface Skill {
  id: string
  name: string
  category: "backend" | "devops" | "frontend" | "database" | "other" | "frameworks" | "libraries"
  level?: "beginner" | "intermediate" | "advanced" | "expert"
  icon?: string
}

export interface Experience {
  id: string
  title: { en: string; es: string }
  company: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: { en: string[]; es: string[] }
  technologies: string[]
}

export interface ContactForm {
  name: string
  email: string
  company: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}
