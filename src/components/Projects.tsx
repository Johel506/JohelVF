"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Code, Database, Cloud } from "lucide-react"
import { Project } from "@/types"

const projects: Project[] = [
  {
    id: "electronic-invoicing",
    title: "Central Electronic Invoicing API",
    description: "RESTful API serving 150+ businesses for electronic invoicing compliance with government regulations. Handles tax calculations, secure certificate management, and government API integration.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT", "XML/XSD"],
    features: [
      "Multi-tenant architecture supporting 150+ businesses",
      "Tax calculation engine with government compliance",
      "Secure P12 certificate system for digital signatures",
      "Government API integration for invoice validation",
      "High-performance database optimization",
      "Automated invoice generation and delivery"
    ],
    status: "completed",
    githubUrl: "https://github.com/Johel506/electronic-invoicing-api",
  },
  {
    id: "devops-playground",
    title: "DevOps Playground",
    description: "Production-ready CI/CD pipeline for Python microservices with comprehensive monitoring, logging, and infrastructure automation. Designed for scalable deployment workflows.",
    techStack: ["Docker", "GitHub Actions", "AWS", "Prometheus", "Grafana", "Terraform"],
    features: [
      "Automated deployment pipeline with GitHub Actions",
      "Containerized microservices architecture",
      "Infrastructure monitoring with Prometheus & Grafana",
      "Centralized logging and error tracking",
      "Infrastructure as Code with Terraform",
      "Multi-environment deployment strategy"
    ],
    status: "in-progress",
    githubUrl: "https://github.com/Johel506/devops-playground",
  },
  {
    id: "enterprise-modernization",
    title: "Enterprise System Modernization",
    description: "Migration of legacy Oracle Forms applications to modern Java architecture. Improved performance, maintainability, and user experience while preserving business logic.",
    techStack: ["Java", "Jakarta EE", "JSF", "JPA", "EJB", "CDI", "PL/SQL"],
    features: [
      "Legacy Oracle Forms to Java migration",
      "Database query optimization and performance tuning",
      "Business logic adaptation and modernization",
      "Enhanced user interface with JSF",
      "Improved system maintainability",
      "Reduced technical debt"
    ],
    status: "completed",
  },
]

const getStatusColor = (status: Project["status"]) => {
  switch (status) {
    case "completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "in-progress": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "planned": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
  }
}

const getStatusIcon = (status: Project["status"]) => {
  switch (status) {
    case "completed": return "✅"
    case "in-progress": return "🔄"
    case "planned": return "📋"
    default: return "📋"
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            A showcase of my recent work in backend development, DevOps, and system modernization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-heading mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)} {project.status}
                    </span>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-body mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-body flex items-start gap-2"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {project.status === "completed" ? "Completed" : 
                       project.status === "in-progress" ? "In Progress" : "Planned"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cloud className="h-4 w-4" />
                    <span>{project.techStack.length} technologies</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-semibold text-heading mb-4">
              Interested in working together?
            </h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities and interesting projects. 
              Let&apos;s connect and explore how we can work together to bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get in Touch
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Johel506"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View More on GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 