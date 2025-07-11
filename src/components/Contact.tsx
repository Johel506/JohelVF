"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, Send, MessageSquare } from "lucide-react"
import { ContactForm } from "@/types"
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

const contactLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    letsWork: "Let's Work Together",
    ready: "Ready to discuss your next project? I'm available for backend development, system modernization, and DevOps consulting. Let's build something amazing together.",
    getInTouch: "Get in Touch",
    email: "Email",
    phone: "Phone",
    location: "Location",
    schedule: "Schedule a Call",
    availability: "Availability",
    responseTime: "Response Time:",
    timezone: "Timezone:",
    projectType: "Project Type:",
    within24: "Within 24 hours",
    utc: "UTC-6 (Costa Rica)",
    backendDevOps: "Backend, DevOps, Modernization",
    sendMessage: "Send a Message",
    name: "Name *",
    emailField: "Email *",
    company: "Company",
    message: "Message *",
    messagePlaceholder: "Tell me about your project or how I can help...",
    send: "Send Message",
    yes: "Yes",
    preferred: "Preferred",
    fullTimePositions: "Full-time positions",
    contractWork: "Contract work",
    remoteWork: "Remote work",
    availableFor: "Available for",
    timeZone: "Time zone",
    directContact: "Direct Contact",
  },
  es: {
    letsWork: "Trabajemos juntos",
    ready: "¿Listo para hablar de tu próximo proyecto? Estoy disponible para desarrollo backend, modernización de sistemas y consultoría DevOps. Construyamos algo increíble juntos.",
    getInTouch: "Contacto",
    email: "Correo",
    phone: "Teléfono",
    location: "Ubicación",
    schedule: "Agendar llamada",
    availability: "Disponibilidad",
    responseTime: "Tiempo de respuesta:",
    timezone: "Zona horaria:",
    projectType: "Tipo de proyecto:",
    within24: "En menos de 24 horas",
    utc: "UTC-6 (Costa Rica)",
    backendDevOps: "Backend, DevOps, Modernización",
    sendMessage: "Enviar mensaje",
    name: "Nombre *",
    emailField: "Correo *",
    company: "Empresa",
    message: "Mensaje *",
    messagePlaceholder: "Cuéntame sobre tu proyecto o cómo puedo ayudar...",
    send: "Enviar mensaje",
    yes: "Sí",
    preferred: "Preferido",
    fullTimePositions: "Puestos de tiempo completo",
    contractWork: "Trabajo por contrato",
    remoteWork: "Trabajo remoto",
    availableFor: "Disponible para",
    timeZone: "Zona horaria",
    directContact: "Contacto directo",
  },
}

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    
    setSubmitStatus("success")
    setIsSubmitting(false)
    setFormData({ name: "", email: "", company: "", message: "" })
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleScheduleCall = () => {
    window.open("https://calendly.com/johelvf506/software-developer-career-conversation", "_blank")
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {t(contactLabels, language, "getInTouch")}
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            {t(contactLabels, language, "ready")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <h3 className="text-xl font-semibold text-heading">
                {t(contactLabels, language, "sendMessage")}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                    {t(contactLabels, language, "name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder={t(contactLabels, language, "name")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                    {t(contactLabels, language, "emailField")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder={t(contactLabels, language, "emailField")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-heading mb-2">
                  {t(contactLabels, language, "company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder={t(contactLabels, language, "company")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                  {t(contactLabels, language, "message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder={t(contactLabels, language, "messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    {t(contactLabels, language, "sending")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t(contactLabels, language, "send")}
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm"
                >
                  {t(contactLabels, language, "successMessage")}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm"
                >
                  {t(contactLabels, language, "errorMessage")}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-heading mb-6">
                {t(contactLabels, language, "directContact")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t(contactLabels, language, "email")}
                    </p>
                    <a
                      href="mailto:johelvf506@gmail.com"
                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      johelvf506@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t(contactLabels, language, "phone")}
                    </p>
                    <a
                      href="tel:+50670226553"
                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +506 7022 6553
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t(contactLabels, language, "location")}
                    </p>
                    <p className="text-gray-900 dark:text-white">
                      {t(contactLabels, language, "utc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule a Call */}
            <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-semibold text-heading">
                  {t(contactLabels, language, "schedule")}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t(contactLabels, language, "scheduleDescription")}
              </p>
              <button
                onClick={handleScheduleCall}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                {t(contactLabels, language, "bookMeeting")}
              </button>
            </div>

            {/* Availability */}
            <div className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-semibold text-heading mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                {t(contactLabels, language, "availability")}
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-[120px]">{t(contactLabels, language, "availableFor")}:</span>
                  <span>{t(contactLabels, language, "fullTimePositions")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-[120px]">{t(contactLabels, language, "contractWork")}:</span>
                  <span>{t(contactLabels, language, "yes")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-[120px]">{t(contactLabels, language, "remoteWork")}:</span>
                  <span>{t(contactLabels, language, "preferred")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium min-w-[120px]">{t(contactLabels, language, "timeZone")}:</span>
                  <span>{t(contactLabels, language, "utc")}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 