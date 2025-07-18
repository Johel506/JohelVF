import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export type SupportedLanguage = 'en' | 'es';

export type TranslationDict = Record<string, string>;

// Simple translation utility (to be used with context)
export function t(dict: Record<string, TranslationDict>, lang: SupportedLanguage, key: string): string {
  return dict[lang]?.[key] || dict['en']?.[key] || key;
}
