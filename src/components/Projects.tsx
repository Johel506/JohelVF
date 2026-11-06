"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Calendar, Code, Database, Cloud } from "lucide-react"
import { Project } from "@/types"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

const projects: Project[] = [
  {
    id: "banking-modernization",
    title: {
      en: "Legacy Banking App Modernization (.NET 10)",
      es: "Modernización de App Bancaria Heredada (.NET 10)"
    },
    description: {
      en: "Client case study (S-COM). Incremental migration of an ASP.NET MVC/WebForms banking application to .NET 10, where legacy and modernized modules run side by side behind a reverse proxy and ship screen by screen.",
      es: "Caso de cliente (S-COM). Migración incremental de una aplicación bancaria ASP.NET MVC/WebForms a .NET 10, donde módulos heredados y modernizados conviven detrás de un reverse proxy y se liberan pantalla por pantalla."
    },
    techStack: [".NET 10", "C#", "YARP", "Strangler Fig", "SQL Server", "Razor", "DataTables", "SSRS"],
    features: {
      en: [
        "Strangler Fig pattern with YARP routing between legacy and new modules",
        "Shared authentication bridge: one session across both applications",
        "Functional parity validated across development, UAT and production",
        "Team-wide frontend standard for data grids on every migrated screen",
        "Proof of concept for SSRS reporting on .NET 10"
      ],
      es: [
        "Patrón Strangler Fig con YARP enrutando entre módulos heredados y nuevos",
        "Puente de autenticación compartido: una sola sesión en ambas aplicaciones",
        "Paridad funcional validada en desarrollo, UAT y producción",
        "Estándar de frontend para grids de datos en todas las pantallas migradas",
        "Prueba de concepto de reportes SSRS sobre .NET 10"
      ]
    },
    status: "in-progress",
  },
  {
    id: "electronic-invoicing",
    title: {
      en: "Electronic Invoicing API for Costa Rica (v4.4)",
      es: "API de Facturación Electrónica para Costa Rica (v4.4)"
    },
    description: {
      en: "RESTful API compliant with the electronic invoicing requirements of Costa Rica's Ministry of Finance (v4.4): tax calculation, digital signing and automated submissions for multiple tenants.",
      es: "API RESTful que cumple con los requisitos de facturación electrónica del Ministerio de Hacienda de Costa Rica (v4.4): cálculo de impuestos, firma digital y envíos automáticos para múltiples empresas."
    },
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "JWT", "XML/XSD"],
    features: {
      en: [
        "Tax calculation engine with CABYS validation",
        "Secure P12 certificate signing system",
        "Multi-tenant architecture with RBAC",
        "Contingency mode and automated submissions to the Ministry's API",
        "Reporting dashboard and automated processing of purchase receipts"
      ],
      es: [
        "Motor de cálculo de impuestos con validación CABYS",
        "Sistema seguro de firma con certificados P12",
        "Arquitectura multi-tenant con RBAC",
        "Modo de contingencia y envíos automáticos a la API de Hacienda",
        "Dashboard de reportes y procesamiento automático de comprobantes de compra"
      ]
    },
    status: "completed",
    githubUrl: "https://github.com/Johel506/electronic-invoicing-api",
  },
  {
    id: "banking-microservices",
    title: {
      en: "Cloud-native Banking Microservices on AKS",
      es: "Microservicios Bancarios Cloud-native en AKS"
    },
    description: {
      en: "Client case study (S-COM). Atomic and orchestrator microservices in .NET 8/10 for a national bank, deployed to Azure Kubernetes Service and exposed through Azure API Management.",
      es: "Caso de cliente (S-COM). Microservicios atómicos y orquestadores en .NET 8/10 para un banco nacional, desplegados en Azure Kubernetes Service y expuestos mediante Azure API Management."
    },
    techStack: [".NET 8", "Dapr", "EF Core", "Dapper", "Polly", "Docker", "AKS", "APIM", "GitHub Actions"],
    features: {
      en: [
        "Multi-database data access: SQL Server via EF Core, Oracle via Dapper",
        "Service-to-service communication with Dapr",
        "Retry and circuit breaker resilience with Polly",
        "CI/CD with GitHub Actions to AKS",
        "Production telemetry with Application Insights"
      ],
      es: [
        "Acceso a datos multi-base: SQL Server con EF Core, Oracle con Dapper",
        "Comunicación entre servicios con Dapr",
        "Resiliencia con retry y circuit breaker usando Polly",
        "CI/CD con GitHub Actions hacia AKS",
        "Telemetría de producción con Application Insights"
      ]
    },
    status: "completed",
  },
  {
    id: "devops-playground",
    title: {
      en: "DevOps Playground",
      es: "DevOps Playground"
    },
    description: {
      en: "Personal lab: CI/CD pipeline for containerized Python microservices with monitoring and infrastructure automation.",
      es: "Laboratorio personal: pipeline CI/CD para microservicios Python contenerizados con monitoreo y automatización de infraestructura."
    },
    techStack: ["Docker", "GitHub Actions", "AWS", "Prometheus", "Grafana", "Terraform"],
    features: {
      en: [
        "Automated deployment pipeline with GitHub Actions",
        "Containerized microservices",
        "Monitoring with Prometheus & Grafana",
        "Infrastructure as Code with Terraform"
      ],
      es: [
        "Pipeline de despliegue automatizado con GitHub Actions",
        "Microservicios contenerizados",
        "Monitoreo con Prometheus y Grafana",
        "Infraestructura como código con Terraform"
      ]
    },
    status: "completed",
    githubUrl: "https://github.com/Johel506/devops-playground",
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

const projectsLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    featured: "Featured Projects",
    showcase: "Selected work in .NET microservices, legacy modernization and backend APIs",
    techStack: "Tech Stack",
    interested: "Interested in working together?",
    contact: "I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we can work together to bring your ideas to life.",
    getInTouch: "Get in Touch",
    viewMore: "View More on GitHub",
    keyFeatures: "Key Features",
    completed: "Completed",
    "in-progress": "In progress",
    planned: "Planned",
    technologies: "technologies",
  },
  es: {
    featured: "Proyectos Destacados",
    showcase: "Trabajo seleccionado en microservicios .NET, modernización de sistemas heredados y APIs backend",
    techStack: "Tecnologías",
    interested: "¿Interesado en trabajar juntos?",
    contact: "Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes. Conectemos y exploremos cómo podemos trabajar juntos para hacer realidad tus ideas.",
    getInTouch: "Contáctame",
    viewMore: "Ver más en GitHub",
    keyFeatures: "Características clave",
    completed: "Completado",
    "in-progress": "En curso",
    planned: "Planeado",
    technologies: "tecnologías",
  },
}

export default function Projects() {
  const { language } = useLanguage()
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
            {t(projectsLabels, language, "featured")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(projectsLabels, language, "showcase")}
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
                    {project.title[language]}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)} {t(projectsLabels, language, project.status ?? "completed")}
                    </span>
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <div
                      className="p-2 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                      aria-label="GitHub repository (private)"
                    >
                      <Github className="h-5 w-5" />
                    </div>
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
                {project.description[language]}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  {t(projectsLabels, language, "techStack")}
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
                  {t(projectsLabels, language, "keyFeatures")}
                </h4>
                <ul className="space-y-2">
                  {(project.features[language] || project.features['en'] || []).map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-body">
                      <span className="w-2 h-2 bg-primary-400 dark:bg-primary-600 rounded-full" />
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
                      {t(projectsLabels, language, project.status ?? "completed")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Cloud className="h-4 w-4" />
                    <span>{project.techStack.length} {t(projectsLabels, language, "technologies")}</span>
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
              {t(projectsLabels, language, "interested")}
            </h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              {t(projectsLabels, language, "contact")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t(projectsLabels, language, "getInTouch")}
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Johel506"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                {t(projectsLabels, language, "viewMore")}
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 