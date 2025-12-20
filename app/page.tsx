import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { HomeHeroSection } from "@/components/home/hero-section"
import { HomeServicesPreview } from "@/components/home/services-preview"
import { HomeFeaturedProjects } from "@/components/home/featured-projects"
import { HomeTrustSection } from "@/components/home/trust-section"
import { HomeCtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "AI-Powered Graphic Designer & Video Editor in Rishikesh & Dehradun",
  description:
    "Vikash Chand is a professional AI-powered Graphic Designer and Video Editor in Rishikesh & Dehradun, Uttarakhand. Expert in video editing, motion graphics, social media design, and AI-enhanced creative services for businesses and creators.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vikash Chand | AI-Powered Graphic Designer & Video Editor in Rishikesh & Dehradun",
    description:
      "Professional AI-powered creative services in Rishikesh & Dehradun. Video editing, graphic design, and AI-enhanced content creation.",
    url: "/",
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
