import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/context/LanguageContext"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Johel Venegas - Backend Developer & DevOps Engineer",
  description: "Professional portfolio of Johel Venegas, a Backend Developer & DevOps Engineer from Costa Rica specializing in system modernization and cloud-native architectures.",
  keywords: ["Backend Developer", "DevOps Engineer", "Python", "Java", "FastAPI", "Docker", "Kubernetes", "AWS", "Costa Rica"],
  authors: [{ name: "Johel Venegas" }],
  creator: "Johel Venegas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johelvenegas.com",
    title: "Johel Venegas - Backend Developer & DevOps Engineer",
    description: "Professional portfolio of Johel Venegas, a Backend Developer & DevOps Engineer from Costa Rica specializing in system modernization and cloud-native architectures.",
    siteName: "Johel Venegas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johel Venegas - Backend Developer & DevOps Engineer",
    description: "Professional portfolio of Johel Venegas, a Backend Developer & DevOps Engineer from Costa Rica specializing in system modernization and cloud-native architectures.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
