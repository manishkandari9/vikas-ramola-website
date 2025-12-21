import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { GraphicHeroSection } from "@/components/graphic-page/hero-section"
import { GraphicServicesSection } from "@/components/graphic-page/services-section"
import { GraphicProjectsSection } from "@/components/graphic-page/projects-section"
import { GraphicFaqSection } from "@/components/graphic-page/faq-section"
import { GraphicCtaSection } from "@/components/graphic-page/cta-section"

export const metadata: Metadata = {
  title: "Graphic Designer in Rishikesh | Logo, Branding & Social Media Design",
  description:
    "Looking for the best graphic designer in Rishikesh or Dehradun? Vikas Ramola provides professional logo design, branding, social media creatives, posters, banners, and AI-powered graphic design services for businesses and creators.",
  keywords: [
    // Core Graphic Design
    "graphic designer in rishikesh",
    "graphic designer in dehradun",
    "best graphic designer in rishikesh",
    "professional graphic designer rishikesh",
    "freelance graphic designer rishikesh",

    // Logo & Branding
    "logo designer in rishikesh",
    "branding designer in rishikesh",
    "logo design services dehradun",

    // Social Media Design
    "social media graphic designer rishikesh",
    "instagram post designer dehradun",
    "reel editor in rishikesh",

    // Business & Ads
    "ad creative designer rishikesh",
    "poster designer in rishikesh",
    "banner design services dehradun",

    // Near Me / Local Intent
    "best graphic designer near me",
    "graphic designer near me",
    "graphic design services near me",
    "video editor near me",
  ],
  alternates: {
    canonical: "https://VikasRamolavdo.studio/graphic-designer-in-rishikesh-dehradun",
  },
  openGraph: {
    title: "Graphic Designer in Rishikesh & Dehradun | Vikas Ramola",
    description:
      "Professional graphic design services in Rishikesh and Dehradun including logo design, branding, social media creatives, posters, and AI-powered graphic design.",
    url: "https://VikasRamolavdo.studio/graphic-designer-in-rishikesh-dehradun",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
}

export default function GraphicDesignerPage() {
  return (
    <>
      <JsonLd type="graphic" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "Graphic Design Services" }]} />
        </div>
        <GraphicHeroSection />
        <GraphicServicesSection />
        <GraphicProjectsSection />
        <GraphicFaqSection />
        <GraphicCtaSection />
      </main>
    </>
  )
}
