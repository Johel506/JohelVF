"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Code } from "lucide-react"
import { Experience as ExperienceType } from "@/types"
import { formatDate } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

const experiences: ExperienceType[] = [
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
    current: false,
    description: {
      en: [
        "Developed and maintained enterprise-level applications using Java and Jakarta EE technologies",
        "Migrated legacy Oracle Forms applications to modern Java architecture",
        "Optimized database queries and improved system performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented best practices for code quality and maintainability"
      ],
      es: [
        "Desarrollé y mantuve aplicaciones empresariales usando Java y Jakarta EE",
        "Migré aplicaciones heredadas de Oracle Forms a arquitectura moderna en Java",
        "Optimicé consultas a bases de datos y mejoré el rendimiento del sistema en un 40%",
        "Colaboré con equipos multidisciplinarios para entregar soluciones de software de alta calidad",
        "Implementé mejores prácticas para la calidad y mantenibilidad del código"
      ]
    },
    technologies: ["Java", "Jakarta EE", "JSF", "JPA", "EJB", "CDI", "PL/SQL", "Oracle Database"]
  },
  {
    id: "freelance",
    title: {
      en: "Freelance Developer",
      es: "Desarrollador Freelance"
    },
    company: "Self-Employed",
    location: "Costa Rica",
    startDate: "2024-11",
    endDate: "2025-05",
    current: false,
    description: {
      en: [
        "Developed a comprehensive electronic invoicing API serving 150+ businesses",
        "Implemented secure P12 certificate system for digital signatures",
        "Built tax calculation engine with government compliance requirements",
        "Designed multi-tenant architecture for scalable business operations",
        "Integrated with government APIs for invoice validation and compliance"
      ],
      es: [
        "Desarrollé una API integral de facturación electrónica para más de 150 empresas",
        "Implementé un sistema seguro de certificados P12 para firmas digitales",
        "Construí un motor de cálculo de impuestos con cumplimiento gubernamental",
        "Diseñé arquitectura multi-tenant para operaciones empresariales escalables",
        "Integré con APIs gubernamentales para validación y cumplimiento de facturas"
      ]
    },
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT", "XML/XSD", "Cryptography"]
  }
]

const experienceLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    workExperience: "Work Experience",
    journey: "My professional journey in software development and DevOps engineering",
    current: "Current",
    keyResponsibilities: "Key Responsibilities & Achievements",
    technologiesUsed: "Technologies Used",
  },
  es: {
    workExperience: "Experiencia Laboral",
    journey: "Mi trayectoria profesional en desarrollo de software e ingeniería DevOps",
    current: "Actual",
    keyResponsibilities: "Responsabilidades y logros clave",
    technologiesUsed: "Tecnologías utilizadas",
  },
}

// Add education data with translations
const education = {
  degree: {
    en: "Bachelor's in Systems Engineering",
    es: "Bachillerato en Ingeniería en Sistemas"
  },
  university: {
    en: "Latin University of Costa Rica",
    es: "Universidad Latina de Costa Rica"
  },
  graduation: {
    en: "Expected Graduation: August 2025",
    es: "Graduación esperada: Agosto 2025"
  },
  description: {
    en: "Comprehensive education in software engineering, database systems, and software architecture.",
    es: "Formación integral en ingeniería de software, bases de datos y arquitectura de software."
  },
  focus: {
    en: "Focus areas include backend development, system design, and modern software development practices.",
    es: "Áreas de enfoque incluyen desarrollo backend, diseño de sistemas y prácticas modernas de desarrollo de software."
  }
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
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-heading mb-1">
                          {experience.title[language]}
                        </h3>
                        <div className="flex items-center gap-2 text-body mb-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(experience.startDate)} - {experience.current ? "Present" : formatDate(experience.endDate!)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {experience.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full font-medium">
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
              {language === "es" ? "Educación" : "Education"}
            </h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-heading mb-1">
                    {education.degree[language]}
                  </h4>
                  <div className="flex items-center gap-2 text-body mb-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{education.university[language]}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>{education.graduation[language]}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-body">
                  {education.description[language]}
                </p>
                <p className="text-sm text-body">
                  {education.focus[language]}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 