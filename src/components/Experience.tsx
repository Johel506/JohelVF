"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Code } from "lucide-react"
import { Experience as ExperienceType } from "@/types"
import { formatDate } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

// Newest first
const experiences: ExperienceType[] = [
  {
    id: "scom-bp",
    title: {
      en: "Backend Developer",
      es: "Desarrollador Backend"
    },
    company: "S-COM",
    client: "Banco Popular y de Desarrollo Comunal",
    location: "Costa Rica",
    startDate: "2026-07",
    current: true,
    description: {
      en: [
        "Migrating a legacy ASP.NET MVC/WebForms banking application to .NET 10 incrementally, using the Strangler Fig pattern with YARP as reverse proxy so legacy and modernized modules coexist and ship screen by screen without service interruption",
        "Implemented a shared authentication bridge that keeps a single user session across the legacy and the modernized application",
        "Attend production incidents and defects on an employer agreements and payroll-deduction system integrated with the core banking platform, from root-cause analysis to the fix across stored procedures, business logic and UI",
        "Develop and maintain business logic for loan collections, employer agreements and payment inconsistency handling on SQL Server",
        "Document each legacy module before migrating it and validate functional parity across development, UAT and production",
        "Defined, together with the team, the frontend standard for data grids adopted across all migrated screens, and built a proof of concept for SSRS reporting on .NET 10"
      ],
      es: [
        "Migro de forma incremental una aplicación bancaria heredada ASP.NET MVC/WebForms a .NET 10 con el patrón Strangler Fig y YARP como reverse proxy, para que módulos heredados y modernizados convivan y se liberen pantalla por pantalla sin interrupción del servicio",
        "Implementé un puente de autenticación compartido que mantiene una única sesión de usuario entre la aplicación heredada y la modernizada",
        "Atiendo incidentes y defectos en producción de un sistema de convenios patronales y deducciones de planilla integrado con el core bancario, desde el análisis de causa raíz hasta la corrección en procedimientos almacenados, lógica de negocio e interfaz",
        "Desarrollo y mantengo lógica de negocio para cobro de créditos, convenios patronales y manejo de inconsistencias de pago en SQL Server",
        "Documento el comportamiento de cada módulo heredado antes de migrarlo y valido la paridad funcional en desarrollo, UAT y producción",
        "Definí junto al equipo el estándar de frontend para grids de datos adoptado en todas las pantallas migradas, y construí una prueba de concepto de reportes SSRS sobre .NET 10"
      ]
    },
    technologies: [".NET 10", "C#", "ASP.NET MVC", "YARP", "Strangler Fig", "SQL Server", "Razor", "jQuery", "DataTables", "SSRS"]
  },
  {
    id: "scom-bn",
    title: {
      en: "Backend Developer",
      es: "Desarrollador Backend"
    },
    company: "S-COM",
    client: "Banco Nacional de Costa Rica",
    location: "Costa Rica",
    startDate: "2025-12",
    endDate: "2026-07",
    description: {
      en: [
        "Designed and implemented atomic microservices and orchestrator services using C# .NET 8 / .NET 10",
        "Designed data access layers for multi-database architectures: SQL Server through EF Core and Oracle through Dapper for complex stored procedures with multiple result sets",
        "Configured and used Dapr for service-to-service communication and integration",
        "Implemented resilience patterns (retry, circuit breaker) with Polly across distributed service calls",
        "Containerized services with Docker and deployed them to Azure Kubernetes Service (AKS) through GitHub Actions CI/CD pipelines",
        "Exposed and managed APIs through Azure API Management (APIM) and monitored production with Application Insights"
      ],
      es: [
        "Diseñé e implementé microservicios atómicos y servicios orquestadores con C# .NET 8 / .NET 10",
        "Diseñé capas de acceso a datos para arquitecturas multi-base de datos: SQL Server con EF Core y Oracle con Dapper para procedimientos almacenados complejos con múltiples result sets",
        "Configuré y utilicé Dapr para la comunicación e integración entre servicios",
        "Implementé patrones de resiliencia (retry, circuit breaker) con Polly en llamadas entre servicios distribuidos",
        "Contenericé servicios con Docker y los desplegué en Azure Kubernetes Service (AKS) mediante pipelines CI/CD en GitHub Actions",
        "Expuse y gestioné APIs con Azure API Management (APIM) y monitoreé producción con Application Insights"
      ]
    },
    technologies: [".NET 8", ".NET 10", "C#", "Dapr", "EF Core", "Dapper", "Polly", "Docker", "AKS", "APIM", "GitHub Actions", "Application Insights", "Oracle", "SQL Server"]
  },
  {
    id: "freelance",
    title: {
      en: "Backend Developer · Freelance",
      es: "Desarrollador Backend · Freelance"
    },
    company: "Electronic Invoicing API for Costa Rica (v4.4)",
    location: "Costa Rica",
    startDate: "2024-11",
    endDate: "2026-04",
    description: {
      en: [
        "Architected a RESTful API compliant with the electronic invoicing requirements of Costa Rica's Ministry of Finance",
        "Implemented a tax calculation engine with CABYS validation and a secure P12 certificate signing system",
        "Built a multi-tenant architecture with RBAC, contingency mode and automated submissions to the Ministry's API",
        "Automated request and response validation to guarantee integration reliability",
        "Developed a reporting dashboard with tax calculations and automated processing of purchase receipts"
      ],
      es: [
        "Diseñé una API RESTful que cumple con los requisitos de facturación electrónica del Ministerio de Hacienda de Costa Rica",
        "Implementé un motor de cálculo de impuestos con validación CABYS y un sistema seguro de firma con certificados P12",
        "Construí una arquitectura multi-tenant con RBAC, modo de contingencia y envíos automáticos a la API de Hacienda",
        "Automaticé la validación de solicitudes y respuestas para garantizar la confiabilidad de la integración",
        "Desarrollé un dashboard de reportes con cálculos de impuestos y procesamiento automático de comprobantes de compra"
      ]
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "Nginx", "JWT", "XML/XSD", "Cryptography"]
  },
  {
    id: "credecoop",
    title: {
      en: "Software Developer",
      es: "Desarrollador de Software"
    },
    company: "Credecoop R.L.",
    location: "Costa Rica",
    startDate: "2025-01",
    endDate: "2025-05",
    description: {
      en: [
        "Migrated legacy Oracle Forms applications to a modern Java-based architecture",
        "Optimized SQL queries to improve system performance",
        "Designed and implemented new database modules and ETL transformations using PL/SQL",
        "Collaborated with stakeholders to ensure data consistency and seamless integration across modules"
      ],
      es: [
        "Migré aplicaciones heredadas de Oracle Forms a una arquitectura moderna basada en Java",
        "Optimicé consultas SQL para mejorar el rendimiento del sistema",
        "Diseñé e implementé nuevos módulos de base de datos y transformaciones ETL con PL/SQL",
        "Colaboré con las partes interesadas para asegurar la consistencia de datos y la integración entre módulos"
      ]
    },
    technologies: ["Java", "Jakarta EE", "Oracle", "PL/SQL", "ETL"]
  }
]

const experienceLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    workExperience: "Work Experience",
    journey: "Backend engineering for the banking sector, cloud-native microservices and legacy modernization",
    current: "Current",
    present: "Present",
    client: "Client",
    keyResponsibilities: "Key Responsibilities & Achievements",
    technologiesUsed: "Technologies Used",
    education: "Education",
  },
  es: {
    workExperience: "Experiencia Laboral",
    journey: "Ingeniería backend para el sector bancario, microservicios cloud-native y modernización de sistemas heredados",
    current: "Actual",
    present: "Presente",
    client: "Cliente",
    keyResponsibilities: "Responsabilidades y logros clave",
    technologiesUsed: "Tecnologías utilizadas",
    education: "Educación",
  },
}

const education = {
  degree: {
    en: "Bachelor's Degree in Systems Engineering",
    es: "Bachillerato en Ingeniería en Sistemas"
  },
  university: {
    en: "Universidad Latina de Costa Rica",
    es: "Universidad Latina de Costa Rica"
  },
  period: "2022-01",
  graduation: "2025-08",
  description: {
    en: "Education in software engineering, database systems and software architecture, with a focus on backend development and system design.",
    es: "Formación en ingeniería de software, bases de datos y arquitectura de software, con enfoque en desarrollo backend y diseño de sistemas."
  },
}

export default function Experience() {
  const { language } = useLanguage()
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t(experienceLabels, language, "workExperience")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(experienceLabels, language, "journey")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}>
                  <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-200">
                    {/* Job Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-heading mb-1">
                          {experience.title[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-body mb-1">
                          <Building className="h-4 w-4 shrink-0" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        {experience.client && (
                          <p className="text-sm text-primary-700 dark:text-primary-300 mb-2">
                            {t(experienceLabels, language, "client")}: {experience.client}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(experience.startDate, language)} – {experience.current ? t(experienceLabels, language, "present") : formatDate(experience.endDate!, language)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {experience.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full font-medium shrink-0">
                          {t(experienceLabels, language, "current")}
                        </span>
                      )}
                    </div>

                    {/* Job Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-heading mb-3">
                        {t(experienceLabels, language, "keyResponsibilities")}
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {experience.description[language].map((desc: string, i: number) => (
                          <li key={i} className="text-body text-sm">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        {t(experienceLabels, language, "technologiesUsed")}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-heading mb-4">
              {t(experienceLabels, language, "education")}
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-xl font-semibold text-heading mb-1">
                {education.degree[language]}
              </h4>
              <div className="flex items-center gap-2 text-body mb-2">
                <Building className="h-4 w-4" />
                <span className="font-medium">{education.university[language]}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted mb-4">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(education.period, language)} – {formatDate(education.graduation, language)}</span>
              </div>
              <p className="text-sm text-body">
                {education.description[language]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
