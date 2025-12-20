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
  metadataBase: new URL("https://vikasramola.com"),
  title: {
    default: "Vikash Chand | AI-Powered Graphic Designer & Video Editor in Rishikesh & Dehradun",
    template: "%s | Vikash Chand - AI Creative Expert",
  },
  description:
    "Vikash Chand is a professional AI-powered Graphic Designer and Video Editor in Rishikesh & Dehradun, Uttarakhand. Expert in video editing, motion graphics, social media design, and AI-enhanced creative services.",
  keywords: [
    "Graphic Designer in Rishikesh",
    "Video Editor in Rishikesh",
    "Graphic Designer in Dehradun",
    "Video Editor in Dehradun",
    "AI Video Editor in Rishikesh",
    "AI Graphic Designer in Dehradun",
    "Freelance Video Editor Rishikesh",
    "Social Media Designer Dehradun",
    "Vikash Chand",
    "AI Creative Expert Uttarakhand",
  ],
  authors: [{ name: "Vikash Chand" }],
  creator: "Vikash Chand",
  openGraph: {
    title: "Vikash Chand | AI-Powered Graphic Designer & Video Editor",
    description:
      "Professional AI-powered creative services in Rishikesh & Dehradun. Video editing, graphic design, and AI-enhanced content creation.",
    type: "website",
    locale: "en_IN",
    siteName: "Vikash Chand - AI Creative Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikash Chand | AI-Powered Creative Studio",
    description: "Professional AI-powered creative services in Rishikesh & Dehradun.",
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
    canonical: "/",
  },
  generator: "v0.app",
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
