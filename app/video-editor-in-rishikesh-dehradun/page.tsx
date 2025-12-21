import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { VideoHeroSection } from "@/components/video-page/hero-section"
import { VideoServicesSection } from "@/components/video-page/services-section"
import { VideoProjectsSection } from "@/components/video-page/projects-section"
import { VideoFaqSection } from "@/components/video-page/faq-section"
import { VideoCtaSection } from "@/components/video-page/cta-section"

export const metadata: Metadata = {
  title: "Video Editor in Dehradun | Video Editor in Rishikesh – Vikas Ramola",
  description:
    "Looking for a professional video editor in Dehradun or Rishikesh, India? Vikas Ramola provides AI-powered video editing for reels, YouTube, Instagram, podcasts, ads, and events with fast delivery and premium quality.",
  keywords: [
    // Core (Low competition – local)
    "video editor in dehradun",
    "video editor in rishikesh",
    "best video editor in dehradun",
    "professional video editor rishikesh",
    "freelance video editor dehradun",

    // Services
    "reel editor in rishikesh",
    "instagram reel editor dehradun",
    "youtube video editor rishikesh",
    "podcast video editing dehradun",
    "event video editing rishikesh",

    // AI / Modern
    "ai video editor in dehradun",
    "ai video editing services rishikesh",

    // Near me / Local intent
    "video editor near me",
    "video editing services near me",

    // India (smooth inclusion)
    "video editing services india",
  ],
  alternates: {
    canonical: "https://Vikasramolavdo.studio/video-editor-in-rishikesh-dehradun",
  },
  openGraph: {
    title: "Video Editor in Dehradun & Rishikesh | Vikas Ramola",
    description:
      "Professional AI-powered video editing services in Dehradun and Rishikesh, India. Reels, YouTube, Instagram, podcasts, ads, and event videos.",
    url: "https://Vikasramolavdo.studio/video-editor-in-rishikesh-dehradun",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editor in Dehradun | Rishikesh – Vikas Ramola",
    description:
      "Hire a professional video editor in Dehradun & Rishikesh, India for reels, YouTube, ads, and AI-powered editing.",
  },
}


export default function VideoEditorPage() {
  return (
    <>
      <JsonLd type="video" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "Video Editing Services" }]} />
        </div>
        <VideoHeroSection />
        <VideoServicesSection />
        <VideoProjectsSection />
        <VideoFaqSection />
        <VideoCtaSection />
      </main>
    </>
  )
}
