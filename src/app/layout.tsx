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
  title: "Johel Venegas",
  description: "Professional portfolio of Johel Venegas.",
  keywords: ["Johel Venegas", "Portfolio", "Backend Developer", "DevOps Engineer", "Costa Rica"],
  authors: [{ name: "Johel Venegas" }],
  creator: "Johel Venegas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johelvenegas.com",
    title: "Johel Venegas",
    description: "Professional portfolio of Johel Venegas.",
    siteName: "Johel Venegas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johel Venegas",
    description: "Professional portfolio of Johel Venegas.",
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
