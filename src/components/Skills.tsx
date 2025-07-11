"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Server, Cpu, Shield, Globe, Zap } from "lucide-react"
import { Skill } from "@/types"

const skills: Skill[] = [
  // Backend Development
  { id: "python", name: "Python", category: "backend", level: "expert" },
  { id: "java", name: "Java", category: "backend", level: "advanced" },
  { id: "fastapi", name: "FastAPI", category: "backend", level: "expert" },
  { id: "jakarta", name: "Jakarta EE", category: "backend", level: "advanced" },
  { id: "rest", name: "RESTful APIs", category: "backend", level: "expert" },
  { id: "microservices", name: "Microservices", category: "backend", level: "advanced" },
  
  // DevOps & Cloud
  { id: "docker", name: "Docker", category: "devops", level: "expert" },
  { id: "kubernetes", name: "Kubernetes", category: "devops", level: "advanced" },
  { id: "aws", name: "AWS", category: "devops", level: "advanced" },
  { id: "github-actions", name: "GitHub Actions", category: "devops", level: "expert" },
  { id: "terraform", name: "Terraform", category: "devops", level: "intermediate" },
  { id: "prometheus", name: "Prometheus", category: "devops", level: "intermediate" },
  { id: "grafana", name: "Grafana", category: "devops", level: "intermediate" },
  
  // Database
  { id: "postgresql", name: "PostgreSQL", category: "database", level: "expert" },
  { id: "redis", name: "Redis", category: "database", level: "advanced" },
  { id: "plsql", name: "PL/SQL", category: "database", level: "advanced" },
  
  // Additional Technologies
  { id: "jwt", name: "JWT", category: "other", level: "expert" },
  { id: "xml", name: "XML/XSD", category: "other", level: "advanced" },
  { id: "nginx", name: "Nginx", category: "other", level: "advanced" },
  { id: "linux", name: "Linux", category: "other", level: "advanced" },
  { id: "celery", name: "Celery", category: "other", level: "intermediate" },
  { id: "cryptography", name: "Cryptography", category: "other", level: "intermediate" },
]

const categories = [
  { 
    id: "backend", 
    name: "Backend Development", 
    color: "primary",
    icon: <Code className="h-5 w-5" />
  },
  { 
    id: "devops", 
    name: "DevOps & Cloud", 
    color: "blue",
    icon: <Cloud className="h-5 w-5" />
  },
  { 
    id: "database", 
    name: "Database", 
    color: "green",
    icon: <Database className="h-5 w-5" />
  },
  { 
    id: "other", 
    name: "Additional Technologies", 
    color: "purple",
    icon: <Zap className="h-5 w-5" />
  },
]

const getCategoryColor = (color: string) => {
  switch (color) {
    case "primary": return "text-primary-600 dark:text-primary-400"
    case "blue": return "text-blue-600 dark:text-blue-400"
    case "green": return "text-green-600 dark:text-green-400"
    case "purple": return "text-purple-600 dark:text-purple-400"
    default: return "text-gray-600 dark:text-gray-400"
  }
}

const getSkillBadgeColor = (color: string) => {
  switch (color) {
    case "primary": return "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:border-primary-800"
    case "blue": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
    case "green": return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
    case "purple": return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
    default: return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800"
  }
}

export default function Skills() {
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            My technical expertise spans backend development, DevOps practices, and cloud-native architectures
          </p>
        </motion.div>

        <div className="space-y-12">
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
                  <div className={`${getCategoryColor(category.color)}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold ${getCategoryColor(category.color)}`}>
                    {category.name}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-4 py-3 rounded-lg border-2 font-medium text-sm text-center transition-all duration-200 hover:scale-105 hover:shadow-md ${getSkillBadgeColor(category.color)}`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-8">
            <h3 className="text-xl font-semibold text-heading mb-6 text-center">
              Technology Stack Overview
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.filter(s => s.category === "backend").length}
                </div>
                <div className="text-sm text-body">Backend Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {skills.filter(s => s.category === "devops").length}
                </div>
                <div className="text-sm text-body">DevOps & Cloud</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {skills.filter(s => s.category === "database").length}
                </div>
                <div className="text-sm text-body">Database Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {skills.filter(s => s.category === "other").length}
                </div>
                <div className="text-sm text-body">Additional Tools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 