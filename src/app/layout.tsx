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

const SITE_URL = "https://johel.dev";
const TITLE = "Johel Venegas | Backend Developer · C# .NET & Azure";
const DESCRIPTION =
  "Backend Developer in Costa Rica building cloud-native .NET microservices on Azure and modernizing legacy banking systems. Microsoft Certified Azure Solutions Architect Expert.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Johel Venegas",
    "Backend Developer",
    "C#",
    ".NET",
    "Azure",
    "Azure Solutions Architect Expert",
    "Microservices",
    "AKS",
    "Costa Rica",
  ],
  authors: [{ name: "Johel Venegas", url: SITE_URL }],
  creator: "Johel Venegas",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Johel Venegas",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inline SVG favicon with code icon </> and transparent background */}
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext x='50%' y='58%' dominant-baseline='middle' text-anchor='middle' font-size='32' font-family='Inter,Arial,sans-serif' fill='white' font-weight='bold'%3E%3C![CDATA[</>]]%3E%3C/text%3E%3C/svg%3E`} />
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
