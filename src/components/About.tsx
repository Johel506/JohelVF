"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Zap } from "lucide-react"

const strengths = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Legacy System Modernization",
    description: "Expert in migrating and modernizing legacy applications to modern architectures",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "RESTful APIs & Microservices",
    description: "Designing and implementing scalable API solutions with microservices architecture",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "CI/CD Pipelines",
    description: "Building robust deployment pipelines for automated testing and deployment",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Optimizing database queries and application performance for better user experience",
  },
]

export default function About() {
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
            About Me
          </h2>
          <p className="text-lg text-body max-w-3xl mx-auto">
            Backend developer and DevOps engineer passionate about creating robust, scalable solutions
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
                Professional Background
              </h3>
              <p className="text-body">
                I&apos;m a Backend Developer and DevOps Engineer from Costa Rica, currently focused on 
                system modernization and cloud-native architectures. With experience in both Python 
                and Java ecosystems, I specialize in building robust APIs, optimizing database 
                performance, and implementing CI/CD pipelines.
              </p>
              <p className="text-body">
                My current work involves developing RESTful APIs for electronic invoicing systems 
                serving 150+ businesses, ensuring compliance with government regulations while 
                maintaining high performance and reliability standards.
              </p>
              <p className="text-body">
                I&apos;m passionate about DevOps practices and currently building a production-ready 
                CI/CD pipeline for Python microservices, incorporating monitoring, logging, and 
                infrastructure as code principles.
              </p>
            </div>

            {/* Key Information */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">Location</h4>
                <p className="text-body">Costa Rica</p>
                <p className="text-sm text-muted">UTC-6</p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">Experience</h4>
                <p className="text-body">2+ Years</p>
                <p className="text-sm text-muted">Backend & DevOps</p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">Education</h4>
                <p className="text-body">Systems Engineering</p>
                <p className="text-sm text-muted">Latin University</p>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-heading mb-1">Languages</h4>
                <p className="text-body">Spanish, English</p>
                <p className="text-sm text-muted">Fluent</p>
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
                key={strength.title}
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
                  {strength.title}
                </h4>
                <p className="text-body text-sm leading-relaxed">
                  {strength.description}
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
              International Collaboration Ready
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