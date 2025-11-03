"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Zap } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

const strengths = [
  {
    icon: <Code className="h-6 w-6" />,
    key: "legacyModernization"
  },
  {
    icon: <Database className="h-6 w-6" />,
    key: "restMicroservices"
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    key: "cicdPipelines"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    key: "performanceOpt"
  },
]

const aboutLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    aboutMe: "About Me",
    background: "Professional Background",
    desc1: "I'm a Computer Systems Engineer from Costa Rica, specializing in backend development and DevOps practices. With experience in both Python and Java ecosystems, I focus on building robust APIs, optimizing database performance, and implementing modern cloud-native architectures.",
    desc2: "My recent work includes developing RESTful APIs for electronic invoicing systems serving 150+ businesses, ensuring compliance with government regulations while maintaining high performance and reliability standards.",
    desc3: "I'm passionate about system modernization, CI/CD automation, and Linux administration. I combine my systems engineering background with hands-on development experience to deliver scalable and maintainable solutions.",
    location: "Location",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    costaRica: "Costa Rica",
    utc: "UTC-6",
    years: "1+ Year",
    backendDevOps: "Backend & DevOps",
    systemsEng: "Systems Engineering",
    latinUniv: "Latin University",
    spanishEnglish: "Spanish, English",
    fluent: "Fluent",
    strengths: "Key Strengths",
    collabNote: "Available for international collaboration",
    legacyModernization: "Legacy System Modernization",
    legacyModernizationDesc: "Expert in migrating and modernizing legacy applications to modern architectures",
    restMicroservices: "RESTful APIs & Microservices",
    restMicroservicesDesc: "Designing and implementing scalable API solutions with microservices architecture",
    cicdPipelines: "CI/CD Pipelines",
    cicdPipelinesDesc: "Building robust deployment pipelines for automated testing and deployment",
    performanceOpt: "Performance Optimization",
    performanceOptDesc: "Optimizing database queries and application performance for better user experience",
    availability: "Availability",
    availableFor: "Available for",
    fullTimePositions: "Full-time positions",
    contractWork: "Contract work",
    contractYes: "Yes",
    remoteWork: "Remote work",
    remotePreferred: "Preferred",
    timeZone: "Time zone",
  },
  es: {
    aboutMe: "Sobre mí",
    background: "Trayectoria profesional",
    desc1: "Soy Ingeniero en Sistemas Computacionales de Costa Rica, especializado en desarrollo backend y prácticas DevOps. Con experiencia en los ecosistemas de Python y Java, me enfoco en construir APIs robustas, optimizar bases de datos e implementar arquitecturas modernas cloud-native.",
    desc2: "Mi trabajo reciente incluye el desarrollo de APIs RESTful para sistemas de facturación electrónica que sirven a más de 150 empresas, asegurando el cumplimiento con regulaciones gubernamentales y altos estándares de rendimiento y confiabilidad.",
    desc3: "Me apasiona la modernización de sistemas, la automatización CI/CD y la administración Linux. Combino mi formación en ingeniería de sistemas con experiencia práctica en desarrollo para entregar soluciones escalables y mantenibles.",
    location: "Ubicación",
    experience: "Experiencia",
    education: "Educación",
    languages: "Idiomas",
    costaRica: "Costa Rica",
    utc: "UTC-6",
    years: "1+ año",
    backendDevOps: "Backend & DevOps",
    systemsEng: "Ingeniería en Sistemas",
    latinUniv: "Universidad Latina",
    spanishEnglish: "Español, Inglés",
    fluent: "Fluido",
    strengths: "Puntos fuertes",
    collabNote: "Disponible para colaboración internacional",
    legacyModernization: "Modernización de sistemas heredados",
    legacyModernizationDesc: "Experto en migrar y modernizar aplicaciones heredadas a arquitecturas modernas",
    restMicroservices: "APIs RESTful y Microservicios",
    restMicroservicesDesc: "Diseño e implementación de soluciones API escalables con arquitectura de microservicios",
    cicdPipelines: "Pipelines CI/CD",
    cicdPipelinesDesc: "Construcción de pipelines robustos para pruebas y despliegue automatizado",
    performanceOpt: "Optimización de rendimiento",
    performanceOptDesc: "Optimización de consultas a bases de datos y rendimiento de aplicaciones para mejor experiencia de usuario",
    availability: "Disponibilidad",
    availableFor: "Disponible para",
    fullTimePositions: "Puestos de tiempo completo",
    contractWork: "Trabajo por contrato",
    contractYes: "Sí",
    remoteWork: "Trabajo remoto",
    remotePreferred: "Preferido",
    timeZone: "Zona horaria",
  },
}

export default function About() {
  const { language } = useLanguage()
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t(aboutLabels, language, "aboutMe")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(aboutLabels, language, "background")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-heading">
                {t(aboutLabels, language, "background")}
              </h3>
              <p className="text-body">
                {t(aboutLabels, language, "desc1")}
              </p>
              <p className="text-body">
                {t(aboutLabels, language, "desc2")}
              </p>
              <p className="text-body">
                {t(aboutLabels, language, "desc3")}
              </p>
            </div>

            {/* Key Information */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {/* Location */}
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">{t(aboutLabels, language, "location")}</h4>
                <p className="text-body">{t(aboutLabels, language, "costaRica")}</p>
                <p className="text-sm text-muted">{t(aboutLabels, language, "utc")}</p>
              </div>
              {/* Experience */}
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">{t(aboutLabels, language, "experience")}</h4>
                <p className="text-body">{t(aboutLabels, language, "years")}</p>
                <p className="text-sm text-muted">{t(aboutLabels, language, "backendDevOps")}</p>
              </div>
              {/* Education */}
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">{t(aboutLabels, language, "education")}</h4>
                <p className="text-body">{t(aboutLabels, language, "systemsEng")}</p>
                <p className="text-sm text-muted">{t(aboutLabels, language, "latinUniv")}</p>
              </div>
              {/* Languages */}
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">{t(aboutLabels, language, "languages")}</h4>
                <p className="text-body">{t(aboutLabels, language, "spanishEnglish")}</p>
                <p className="text-sm text-muted">{t(aboutLabels, language, "fluent")}</p>
              </div>
              {/* Availability */}
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm col-span-2">
                <h4 className="font-semibold text-heading mb-1">{t(aboutLabels, language, "availability")}</h4>
                <ul className="text-body text-sm space-y-1">
                  <li><span className="font-medium">{t(aboutLabels, language, "availableFor")}:</span> {t(aboutLabels, language, "fullTimePositions")}</li>
                  <li><span className="font-medium">{t(aboutLabels, language, "contractWork")}:</span> {t(aboutLabels, language, "contractYes")}</li>
                  <li><span className="font-medium">{t(aboutLabels, language, "remoteWork")}:</span> {t(aboutLabels, language, "remotePreferred")}</li>
                  <li><span className="font-medium">{t(aboutLabels, language, "timeZone")}:</span> UTC-6 ({t(aboutLabels, language, "costaRica")})</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {strength.icon}
                </div>
                <h4 className="text-lg font-semibold text-heading mb-2">
                  {t(aboutLabels, language, strength.key)}
                </h4>
                <p className="text-body text-sm leading-relaxed">
                  {t(aboutLabels, language, strength.key + "Desc")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* International Collaboration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800">
            <h4 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
              {t(aboutLabels, language, "collabNote")}
            </h4>
            <p className="text-primary-700 dark:text-primary-300">
              My timezone (UTC-6) is ideal for collaboration with teams across the Americas and Europe. 
              I&apos;m experienced in remote work and can adapt to various time zones for meetings and project coordination.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 