"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t, SupportedLanguage, TranslationDict } from "@/lib/utils";

const footerLabels: Record<SupportedLanguage, TranslationDict> = {
  en: {
    copyright: "© {year} Johel Venegas. All rights reserved.",
    built: "Built with Next.js, TypeScript & Tailwind CSS",
  },
  es: {
    copyright: "© {year} Johel Venegas. Todos los derechos reservados.",
    built: "Desarrollado con Next.js, TypeScript y Tailwind CSS",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="w-full mt-16 border-t border-gray-200 dark:border-gray-800 py-6 text-sm text-gray-500 dark:text-gray-400 bg-transparent">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <div>{t(footerLabels, language, "copyright").replace("{year}", String(new Date().getFullYear()))}</div>
        <div>{t(footerLabels, language, "built")}</div>
      </div>
    </footer>
  );
} 