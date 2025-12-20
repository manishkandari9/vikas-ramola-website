import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { GraphicHeroSection } from "@/components/graphic-page/hero-section"
import { GraphicServicesSection } from "@/components/graphic-page/services-section"
import { GraphicProjectsSection } from "@/components/graphic-page/projects-section"
import { GraphicFaqSection } from "@/components/graphic-page/faq-section"
import { GraphicCtaSection } from "@/components/graphic-page/cta-section"

export const metadata: Metadata = {
  title: "Graphic Designer in Rishikesh & Dehradun | AI Graphic Design Services",
  description:
    "Looking for a professional Graphic Designer in Rishikesh or Dehradun? Vikash Chand offers AI-powered graphic design services for social media, branding, posters, and more. Creative designs that stand out.",
  keywords: [
    "Graphic Designer in Rishikesh",
    "Graphic Designer in Dehradun",
    "AI Graphic Designer Rishikesh",
    "Social Media Designer Dehradun",
    "Logo Design Rishikesh",
    "Poster Design Uttarakhand",
  ],
  alternates: {
    canonical: "/graphic-designer-in-rishikesh-dehradun",
  },
  openGraph: {
    title: "Graphic Designer in Rishikesh & Dehradun | AI Graphic Design Services",
    description:
      "Professional AI-powered graphic design services in Rishikesh and Dehradun. Social media, branding, posters & more.",
    url: "/graphic-designer-in-rishikesh-dehradun",
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
