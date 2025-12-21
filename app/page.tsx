import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { HomeHeroSection } from "@/components/home/hero-section"
import { HomeServicesPreview } from "@/components/home/services-preview"
import { HomeFeaturedProjects } from "@/components/home/featured-projects"
import { HomeTrustSection } from "@/components/home/trust-section"
import { HomeCtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
  description:
    "Vikas Ramola is a professional graphic designer and video editor in Rishikesh & Dehradun, India. Expert in branding, logo design, reels, ads, video editing, motion graphics, and AI-powered creative services for businesses, creators, and yoga retreats.",
  keywords: [
    // Core money keywords
    "graphic designer in rishikesh",
    "video editor in rishikesh",
    "graphic designer in dehradun",
    "video editor in dehradun",
    "best graphic designer in rishikesh",
    "professional video editor rishikesh",

    // Services
    "logo designer in rishikesh",
    "branding designer rishikesh",
    "reel editor in rishikesh",
    "instagram reel editor dehradun",
    "ad creative designer rishikesh",

    // Near me + India
    "graphic designer near me",
    "video editor near me",
    "graphic design services india",
    "video editing services india",

    // Brand
    "Vikas Ramola",
    "Vikas Ramola Creative Studio",
  ],
  alternates: {
    canonical: "https://VikasRamolavdo.studio/",
  },
  openGraph: {
    title: "Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
    description:
      "Hire Vikas Ramola, a professional graphic designer and video editor in Rishikesh & Dehradun. Branding, reels, ads, and AI-powered creative services.",
    url: "https://VikasRamolavdo.studio/",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
    description:
      "Professional graphic design and video editing services in Rishikesh & Dehradun by Vikas Ramola.",
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
