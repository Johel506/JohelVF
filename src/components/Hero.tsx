"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Calendar, ArrowRight } from "lucide-react"
import { SocialLink } from "@/types"
import { useLanguage } from "@/context/LanguageContext"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"
import Image from "next/image"

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Johel506",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/johel-venegas/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:johelvf506@gmail.com",
    icon: "mail",
  },
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <Github className="h-5 w-5" />
    case "linkedin":
      return <Linkedin className="h-5 w-5" />
    case "mail":
      return <Mail className="h-5 w-5" />
    default:
      return null
  }
}

const heroLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    name: "Johel Venegas",
    title: "Backend Developer & DevOps Engineer",
    description: "Specializing in system modernization and cloud-native architectures",
    downloadCVSpanish: "Download CV (Spanish)",
    downloadCVEnglish: "Download CV (English)",
    scheduleCall: "Schedule a Call",
    viewWork: "View My Work",
    basedIn: "Based in Costa Rica • UTC-6",
  },
  es: {
    name: "Johel Venegas",
    title: "Desarrollador Backend & Ingeniero DevOps",
    description: "Especializado en modernización de sistemas y arquitecturas cloud-native",
    downloadCVSpanish: "Descargar CV (Español)",
    downloadCVEnglish: "Descargar CV (Inglés)",
    scheduleCall: "Agendar una llamada",
    viewWork: "Ver mi trabajo",
    basedIn: "Con base en Costa Rica • UTC-6",
  },
}

export default function Hero() {
  const { language } = useLanguage()

  const handleScheduleCall = () => {
    window.open("https://calendly.com/johelvf506/software-developer-career-conversation", "_blank")
  }

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 dark:bg-primary-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-primary-400"
          >
            <Image
              src="/profile.png"
              alt="Profile picture of Johel Venegas"
              className="w-full h-full object-cover"
              width={128}
              height={128}
              priority={false}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-heading mb-4"
          >
            {t(heroLabels, language, "name")}
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-4"
          >
            {t(heroLabels, language, "title")}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-body mb-8 max-w-3xl mx-auto"
          >
            {t(heroLabels, language, "description")}
          </motion.p>

          {/* CV Download Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <a
              href="/CV_JohelVenegas_ES.pdf"
              download
              className="btn-secondary flex items-center gap-2 group"
            >
              {t(heroLabels, language, "downloadCVSpanish")}
            </a>
            <a
              href="/ResumeATS_JohelVenegas.pdf"
              download
              className="btn-secondary flex items-center gap-2 group"
            >
              {t(heroLabels, language, "downloadCVEnglish")}
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={handleScheduleCall}
              className="btn-primary flex items-center gap-2 group"
            >
              <Calendar className="h-5 w-5" />
              {t(heroLabels, language, "scheduleCall")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={handleViewWork}
              className="btn-secondary flex items-center gap-2 group"
            >
              {t(heroLabels, language, "viewWork")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {getIcon(link.icon)}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm text-muted mt-8"
          >
            {t(heroLabels, language, "basedIn")}
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 