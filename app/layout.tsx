import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://Vikasramolavdo.studio"),

  title: {
    default: "Vikas Ramola | Graphic Designer & Video Editor in Rishikesh",
    template: "%s | Vikas Ramola – Graphic Designer & Video Editor",
  },

  description:
    "Vikas Ramola is a professional graphic designer and video editor in Rishikesh & Dehradun, India. Specializing in graphic design, video editing, reels, branding, and AI-powered creative services for businesses and creators.",

  keywords: [
    // Core
    "graphic designer in rishikesh",
    "video editor in rishikesh",
    "graphic designer in dehradun",
    "video editor in dehradun",

    // Professional intent
    "best graphic designer in rishikesh",
    "professional video editor dehradun",
    "freelance graphic designer rishikesh",
    "freelance video editor dehradun",

    // AI / modern
    "ai graphic designer india",
    "ai video editing services india",

    // Brand
    "Vikas Ramola",
    "Vikas Ramola Creative Studio",
  ],

  authors: [{ name: "Vikas Ramola" }],
  creator: "Vikas Ramola",

  openGraph: {
    title: "Vikas Ramola | Graphic Designer & Video Editor in Rishikesh",
    description:
      "Professional graphic design and video editing services in Rishikesh & Dehradun. Branding, reels, ads, and AI-powered creative solutions.",
    url: "https://Vikasramolavdo.studio",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vikas Ramola | Graphic Designer & Video Editor",
    description:
      "Graphic design and video editing services in Rishikesh & Dehradun by Vikas Ramola.",
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

  alternates: {
    canonical: "https://Vikasramolavdo.studio/",
  },

  verification: {
    google: "t2TxxFDuSHtg39AFywrj0c-Mn9yBXwLyZmLC0_Dwps0",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
