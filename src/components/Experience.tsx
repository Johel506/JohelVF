"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Code } from "lucide-react"
import { Experience as ExperienceType } from "@/types"
import { formatDate } from "@/lib/utils"

const experiences: ExperienceType[] = [
  {
    id: "credecoop",
    title: "Software Developer",
    company: "Credecoop R.L.",
    location: "Costa Rica",
    startDate: "2025-01",
    endDate: "2025-05",
    current: false,
    description: [
      "Developed and maintained enterprise-level applications using Java and Jakarta EE technologies",
      "Migrated legacy Oracle Forms applications to modern Java architecture",
      "Optimized database queries and improved system performance by 40%",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented best practices for code quality and maintainability"
    ],
    technologies: ["Java", "Jakarta EE", "JSF", "JPA", "EJB", "CDI", "PL/SQL", "Oracle Database"]
  },
  {
    id: "freelance",
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Costa Rica",
    startDate: "2024-11",
    endDate: "2025-05",
    current: false,
    description: [
      "Developed a comprehensive electronic invoicing API serving 150+ businesses",
      "Implemented secure P12 certificate system for digital signatures",
      "Built tax calculation engine with government compliance requirements",
      "Designed multi-tenant architecture for scalable business operations",
      "Integrated with government APIs for invoice validation and compliance"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "JWT", "XML/XSD", "Cryptography"]
  }
]

export default function Experience() {
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
            Work Experience
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            My professional journey in software development and DevOps engineering
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
                          {experience.title}
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
                          Current
                        </span>
                      )}
                    </div>

                    {/* Job Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-heading mb-3">
                        Key Responsibilities & Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-sm text-body flex items-start gap-2"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-heading mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Technologies Used
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
              Education
            </h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-heading mb-1">
                    Bachelor&apos;s in Systems Engineering
                  </h4>
                  <div className="flex items-center gap-2 text-body mb-2">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">Latin University of Costa Rica</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>Expected Graduation: August 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-body">
                  Comprehensive education in software engineering, database systems, and software architecture.
                </p>
                <p className="text-sm text-body">
                  Focus areas include backend development, system design, and modern software development practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 