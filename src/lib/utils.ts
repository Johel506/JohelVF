import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Accepts "YYYY-MM" strings. Parsed as a local date so a UTC-6 visitor
// doesn't see "2025-01" rendered as December 2024.
export function formatDate(date: string | Date, lang: "en" | "es" = "en") {
  const d = typeof date === "string"
    ? new Date(Number(date.slice(0, 4)), Number(date.slice(5, 7) || "1") - 1, 1)
    : date
  return new Intl.DateTimeFormat(lang === "es" ? "es-CR" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(d)
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
