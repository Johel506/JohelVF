"use client"

import { motion } from "framer-motion"
import { RefreshCw, Boxes, Cloud, Landmark } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"

const strengths = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    key: "legacyModernization"
  },
  {
    icon: <Boxes className="h-6 w-6" />,
    key: "restMicroservices"
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    key: "cicdPipelines"
  },
  {
    icon: <Landmark className="h-6 w-6" />,
    key: "performanceOpt"
  },
]

const aboutLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    aboutMe: "About Me",
    background: "Professional Background",
    desc1: "I'm a Backend Developer at S-COM, an IT consultancy serving major banks in Costa Rica. I work with C# .NET 8/10 building cloud-native microservices on Azure and modernizing legacy banking systems.",
    desc2: "I build REST APIs and microservices with Dapr, containerize them with Docker and deploy them to Azure Kubernetes Service through GitHub Actions pipelines. Right now I'm working on the incremental migration of a legacy ASP.NET banking application to .NET 10 using the Strangler Fig pattern, while supporting production incidents and business-critical logic.",
    desc3: "I'm a Microsoft Certified Azure Solutions Architect Expert and Azure Administrator Associate, currently preparing for the DevOps Engineer Expert certification (AZ-400). I communicate comfortably in English and enjoy collaborative engineering teams.",
    location: "Location",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    costaRica: "Costa Rica",
    utc: "UTC-6",
    years: "2+ Years",
    backendDevOps: "Backend · .NET · Azure",
    systemsEng: "Systems Engineering",
    latinUniv: "Latin University",
    spanishEnglish: "Spanish, English",
    fluent: "Native · Professional working",
    strengths: "Key Strengths",
    collabNote: "Available for international collaboration",
    collabDesc: "My timezone (UTC-6) works well with teams across the Americas and overlaps with Europe. I'm experienced in remote work and adapt to different time zones for meetings and coordination.",
    legacyModernization: "Legacy System Modernization",
    legacyModernizationDesc: "Incremental migration of legacy ASP.NET and Oracle Forms systems with the Strangler Fig pattern and YARP, without service interruption",
    restMicroservices: "Cloud-native Microservices",
    restMicroservicesDesc: "Atomic and orchestrator services in .NET with Dapr, EF Core, Dapper and Polly resilience patterns",
    cicdPipelines: "Azure & DevOps",
    cicdPipelinesDesc: "Docker, AKS, APIM, Key Vault and Application Insights, shipped through GitHub Actions CI/CD",
    performanceOpt: "Banking Domain & Data",
    performanceOptDesc: "Loan collections, payroll deductions and core-banking integrations on SQL Server and Oracle PL/SQL",
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
    desc1: "Soy Desarrollador Backend en S-COM, una consultora de TI que atiende a los principales bancos de Costa Rica. Trabajo con C# .NET 8/10 construyendo microservicios cloud-native en Azure y modernizando sistemas bancarios heredados.",
    desc2: "Construyo APIs REST y microservicios con Dapr, los conteinerizo con Docker y los despliego en Azure Kubernetes Service mediante pipelines de GitHub Actions. Actualmente trabajo en la migración incremental de una aplicación bancaria ASP.NET heredada a .NET 10 con el patrón Strangler Fig, mientras atiendo incidentes de producción y lógica crítica de negocio.",
    desc3: "Soy Microsoft Certified Azure Solutions Architect Expert y Azure Administrator Associate, y me preparo para la certificación DevOps Engineer Expert (AZ-400). Me comunico con fluidez en inglés y disfruto trabajar en equipos de ingeniería colaborativos.",
    location: "Ubicación",
    experience: "Experiencia",
    education: "Educación",
    languages: "Idiomas",
    costaRica: "Costa Rica",
    utc: "UTC-6",
    years: "2+ años",
    backendDevOps: "Backend · .NET · Azure",
    systemsEng: "Ingeniería en Sistemas",
    latinUniv: "Universidad Latina",
    spanishEnglish: "Español, Inglés",
    fluent: "Nativo · Profesional",
    strengths: "Puntos fuertes",
    collabNote: "Disponible para colaboración internacional",
    collabDesc: "Mi zona horaria (UTC-6) funciona muy bien con equipos de toda América y tiene traslape con Europa. Tengo experiencia en trabajo remoto y me adapto a distintas zonas horarias para reuniones y coordinación.",
    legacyModernization: "Modernización de sistemas heredados",
    legacyModernizationDesc: "Migración incremental de sistemas ASP.NET y Oracle Forms heredados con el patrón Strangler Fig y YARP, sin interrupción del servicio",
    restMicroservices: "Microservicios cloud-native",
    restMicroservicesDesc: "Servicios atómicos y orquestadores en .NET con Dapr, EF Core, Dapper y patrones de resiliencia con Polly",
    cicdPipelines: "Azure y DevOps",
    cicdPipelinesDesc: "Docker, AKS, APIM, Key Vault y Application Insights, desplegados con CI/CD en GitHub Actions",
    performanceOpt: "Dominio bancario y datos",
    performanceOptDesc: "Cobro de créditos, deducciones de planilla e integraciones con core bancario en SQL Server y Oracle PL/SQL",
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
              {t(aboutLabels, language, "collabDesc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 