"use client"

import { motion } from "framer-motion"
import { BadgeCheck, ExternalLink, Clock, Award } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { t, formatDate, SupportedLanguage, TranslationDict } from "@/lib/utils"

type Level = "expert" | "associate" | "fundamentals" | "professional"

interface Certification {
  id: string
  code?: string
  name: string
  issuer: string
  level: Level
  earned?: string // YYYY-MM
  status: "earned" | "scheduled"
  scheduled?: string // YYYY-MM
  verifyUrl?: string
  featured?: boolean
}

const MS_LEARN = "https://learn.microsoft.com/en-us/users/johelvenegasfonseca/credentials/certification"

const certifications: Certification[] = [
  {
    id: "az305",
    code: "AZ-305",
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    level: "expert",
    earned: "2026-11",
    status: "earned",
    verifyUrl: `${MS_LEARN}/azure-solutions-architect`,
    featured: true,
  },
  {
    id: "az104",
    code: "AZ-104",
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    level: "associate",
    earned: "2026-08",
    status: "earned",
    verifyUrl: `${MS_LEARN}/azure-administrator`,
    featured: true,
  },
  {
    id: "az900",
    code: "AZ-900",
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    level: "fundamentals",
    earned: "2026-03",
    status: "earned",
    verifyUrl: `${MS_LEARN}/azure-fundamentals`,
    featured: true,
  },
  {
    id: "dp700",
    code: "DP-700",
    name: "Fabric Data Engineer Associate",
    issuer: "Microsoft",
    level: "associate",
    status: "scheduled",
    scheduled: "2026-11",
  },
  {
    id: "az400",
    code: "AZ-400",
    name: "DevOps Engineer Expert",
    issuer: "Microsoft",
    level: "expert",
    status: "scheduled",
    scheduled: "2027-01",
  },
  { id: "depc", name: "DevOps Essentials Professional Certification (DEPC)", issuer: "CertiProf", level: "professional", status: "earned" },
  { id: "sfpc", name: "Scrum Foundation Professional Certification (SFPC)", issuer: "CertiProf", level: "professional", status: "earned" },
  { id: "ccna", name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", level: "professional", status: "earned" },
]

const levelStyles: Record<Level, string> = {
  expert: "from-blue-700 to-blue-900",
  associate: "from-blue-500 to-blue-700",
  fundamentals: "from-sky-400 to-blue-600",
  professional: "from-gray-500 to-gray-700",
}

const certLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    title: "Certifications",
    subtitle: "Verified credentials in Azure architecture and administration, with data engineering and DevOps next",
    earned: "Earned",
    verify: "Verify credential",
    scheduled: "Exam scheduled",
    inProgress: "In progress",
    others: "Other certifications",
    expert: "Expert",
    associate: "Associate",
    fundamentals: "Fundamentals",
  },
  es: {
    title: "Certificaciones",
    subtitle: "Credenciales verificables en arquitectura y administración de Azure, con ingeniería de datos y DevOps en camino",
    earned: "Obtenida",
    verify: "Verificar credencial",
    scheduled: "Examen programado",
    inProgress: "En progreso",
    others: "Otras certificaciones",
    expert: "Expert",
    associate: "Associate",
    fundamentals: "Fundamentals",
  },
}

export default function Certifications() {
  const { language } = useLanguage()
  const featured = certifications.filter((c) => c.featured || c.status === "scheduled")
  const others = certifications.filter((c) => !c.featured && c.status !== "scheduled")

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t(certLabels, language, "title")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(certLabels, language, "subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featured.map((cert, index) => {
            const isScheduled = cert.status === "scheduled"
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`flex flex-col rounded-xl border bg-white dark:bg-gray-800 shadow-sm overflow-hidden ${
                  isScheduled
                    ? "border-dashed border-gray-300 dark:border-gray-600"
                    : "border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                }`}
              >
                <div className={`bg-gradient-to-br ${levelStyles[cert.level]} px-5 py-4 text-white ${isScheduled ? "opacity-60" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
                      {cert.issuer} · {t(certLabels, language, cert.level)}
                    </span>
                    {isScheduled ? <Clock className="h-5 w-5" /> : <BadgeCheck className="h-5 w-5" />}
                  </div>
                  {cert.code && <div className="mt-2 text-2xl font-bold">{cert.code}</div>}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-heading leading-snug mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted mb-4">
                    {isScheduled
                      ? `${t(certLabels, language, "scheduled")}: ${formatDate(cert.scheduled!, language)}`
                      : `${t(certLabels, language, "earned")}: ${formatDate(cert.earned!, language)}`}
                  </p>
                  <div className="mt-auto">
                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 dark:text-primary-300 hover:underline"
                      >
                        {t(certLabels, language, "verify")}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      isScheduled && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200">
                          {t(certLabels, language, "inProgress")}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Other certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted text-center mb-4">
            {t(certLabels, language, "others")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map((cert) => (
              <span
                key={cert.id}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-body"
              >
                <Award className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                {cert.name}
                <span className="text-muted">· {cert.issuer}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
