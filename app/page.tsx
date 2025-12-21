import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { HomeHeroSection } from "@/components/home/hero-section"
import { HomeServicesPreview } from "@/components/home/services-preview"
import { HomeFeaturedProjects } from "@/components/home/featured-projects"
import { HomeTrustSection } from "@/components/home/trust-section"
import { HomeCtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "AI Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
  description:
    "Vikas Ramola is an AI-powered graphic designer and professional video editor in Rishikesh & Dehradun, Uttarakhand. Specializing in branding, reels, ads, motion graphics, and AI-enhanced creative services for businesses, creators, and yoga retreats.",
  alternates: {
    canonical: "https://yourdomain.com/",
  },
  openGraph: {
    title: "Vikas Ramola – AI Graphic Designer & Video Editor in Rishikesh",
    description:
      "Hire Vikas Ramola, an AI-powered graphic designer & video editor in Rishikesh and Dehradun. High-converting visuals, reels, ads, and branding.",
    url: "https://yourdomain.com/",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
    description:
      "AI-powered graphic design & video editing services in Rishikesh and Dehradun by Vikas Ramola.",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd type="home" />
      <main>
        <HomeHeroSection />
        <HomeServicesPreview />
        <HomeFeaturedProjects />
        <HomeTrustSection />
        <HomeCtaSection />
      </main>
    </>
  )
}
