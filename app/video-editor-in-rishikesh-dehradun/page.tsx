import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { VideoHeroSection } from "@/components/video-page/hero-section"
import { VideoServicesSection } from "@/components/video-page/services-section"
import { VideoProjectsSection } from "@/components/video-page/projects-section"
import { VideoFaqSection } from "@/components/video-page/faq-section"
import { VideoCtaSection } from "@/components/video-page/cta-section"

export const metadata: Metadata = {
  title: "Video Editor in Rishikesh & Dehradun | AI Video Editing Services",
  description:
    "Looking for a professional Video Editor in Rishikesh or Dehradun? Vikash Chand offers AI-powered video editing services for YouTube, Instagram, podcasts, events, and more. Fast delivery, premium quality.",
  keywords: [
    "Video Editor in Rishikesh",
    "Video Editor in Dehradun",
    "AI Video Editor in Rishikesh",
    "YouTube Video Editing Rishikesh",
    "Video Editing Services Dehradun",
    "Freelance Video Editor Uttarakhand",
  ],
  alternates: {
    canonical: "/video-editor-in-rishikesh-dehradun",
  },
  openGraph: {
    title: "Video Editor in Rishikesh & Dehradun | AI Video Editing Services",
    description:
      "Professional AI-powered video editing services in Rishikesh and Dehradun. YouTube, Reels, Podcasts, Events & more.",
    url: "/video-editor-in-rishikesh-dehradun",
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
