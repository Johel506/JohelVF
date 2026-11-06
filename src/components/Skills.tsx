"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Zap, Layers, Monitor } from "lucide-react"
import { Skill } from "@/types"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

// Mirrors the SKILLS section of the CV (Nov 2026)
const skills: Skill[] = [
  // Languages
  { id: "csharp", name: "C#", category: "backend" },
  { id: "sql", name: "SQL", category: "backend" },
  { id: "java", name: "Java", category: "backend" },
  { id: "python", name: "Python", category: "backend" },
  { id: "bash", name: "Bash", category: "backend" },
  // Backend & Architecture
  { id: "aspnetcore", name: "ASP.NET Core (.NET 8 / 10)", category: "frameworks" },
  { id: "aspnetmvc", name: "ASP.NET MVC", category: "frameworks" },
  { id: "rest", name: "REST APIs", category: "frameworks" },
  { id: "microservices", name: "Microservices", category: "frameworks" },
  { id: "dapr", name: "Dapr", category: "frameworks" },
  { id: "yarp", name: "YARP", category: "frameworks" },
  { id: "strangler", name: "Strangler Fig pattern", category: "frameworks" },
  { id: "efcore", name: "EF Core", category: "frameworks" },
  { id: "dapper", name: "Dapper", category: "frameworks" },
  { id: "polly", name: "Polly", category: "frameworks" },
  { id: "jwt", name: "JWT / OAuth", category: "frameworks" },
  // Cloud & DevOps
  { id: "aks", name: "Azure Kubernetes Service", category: "devops" },
  { id: "apim", name: "Azure API Management", category: "devops" },
  { id: "entra", name: "Microsoft Entra ID", category: "devops" },
  { id: "keyvault", name: "Azure Key Vault", category: "devops" },
  { id: "appinsights", name: "Application Insights", category: "devops" },
  { id: "docker", name: "Docker", category: "devops" },
  { id: "github-actions", name: "GitHub Actions", category: "devops" },
  { id: "git", name: "Git", category: "devops" },
  { id: "aws", name: "AWS (EC2, S3, IAM)", category: "devops" },
  { id: "nginx", name: "Nginx", category: "devops" },
  { id: "linux", name: "Linux", category: "devops" },
  // Databases
  { id: "sqlserver", name: "SQL Server", category: "database" },
  { id: "oracle", name: "Oracle PL/SQL", category: "database" },
  { id: "postgresql", name: "PostgreSQL", category: "database" },
  { id: "mysql", name: "MySQL", category: "database" },
  { id: "redis", name: "Redis", category: "database" },
  // Frontend & Reporting
  { id: "razor", name: "Razor", category: "frontend" },
  { id: "javascript", name: "JavaScript", category: "frontend" },
  { id: "jquery", name: "jQuery", category: "frontend" },
  { id: "datatables", name: "DataTables", category: "frontend" },
  { id: "ssrs", name: "SSRS", category: "frontend" },
  // Other frameworks & tools
  { id: "fastapi", name: "FastAPI", category: "other" },
  { id: "spring", name: "Spring Boot", category: "other" },
  { id: "jakarta", name: "Jakarta EE", category: "other" },
  { id: "celery", name: "Celery", category: "other" },
  { id: "postman", name: "Postman", category: "other" },
  { id: "grafana", name: "Grafana", category: "other" },
  { id: "xml", name: "XML/XSD", category: "other" },
];

const categories = [
  {
    id: "backend",
    name: { en: "Languages", es: "Lenguajes" },
    color: "primary",
    icon: <Code className="h-5 w-5" />,
  },
  {
    id: "frameworks",
    name: { en: "Backend & Architecture", es: "Backend y Arquitectura" },
    color: "yellow",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "devops",
    name: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
    color: "blue",
    icon: <Cloud className="h-5 w-5" />,
  },
  {
    id: "database",
    name: { en: "Databases", es: "Bases de datos" },
    color: "green",
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: "frontend",
    name: { en: "Frontend & Reporting", es: "Frontend y Reportes" },
    color: "pink",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    id: "other",
    name: { en: "Other Frameworks & Tools", es: "Otros frameworks y herramientas" },
    color: "purple",
    icon: <Zap className="h-5 w-5" />,
  },
]

const getCategoryColor = (color: string) => {
  switch (color) {
    case "primary": return "text-primary-600 dark:text-primary-400"
    case "blue": return "text-blue-600 dark:text-blue-400"
    case "green": return "text-green-600 dark:text-green-400"
    case "pink": return "text-pink-600 dark:text-pink-400"
    case "yellow": return "text-yellow-600 dark:text-yellow-400"
    case "orange": return "text-orange-600 dark:text-orange-400"
    case "purple": return "text-purple-600 dark:text-purple-400"
    default: return "text-gray-600 dark:text-gray-400"
  }
}

const getSkillBadgeColor = (color: string) => {
  switch (color) {
    case "primary": return "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800"
    case "blue": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
    case "green": return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
    case "pink": return "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800"
    case "yellow": return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800"
    case "orange": return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800"
    case "purple": return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
    default: return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800"
  }
}

const skillsLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    skills: "Skills & Technologies",
    description: "My technical expertise spans backend development, DevOps practices, and cloud-native architectures",
  },
  es: {
    skills: "Habilidades y Tecnologías",
    description: "Mi experiencia técnica abarca desarrollo backend, prácticas DevOps y arquitecturas cloud-native",
  },
}

export default function Skills() {
  const { language } = useLanguage()
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t(skillsLabels, language, "skills")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(skillsLabels, language, "description")}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Category-based Skills Grid */}
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.id)
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${getCategoryColor(category.color)}`}>{category.icon}</div>
                  <h3 className={`text-2xl font-semibold ${getCategoryColor(category.color)}`}>{category.name[language]}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className={`px-4 py-3 rounded-lg border-2 font-medium text-sm text-center transition-all duration-200 hover:scale-105 hover:shadow-md ${getSkillBadgeColor(category.color)}`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
} 