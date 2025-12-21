import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { AIHeroSection } from "@/components/ai-page/hero-section"
import { AIBenefitsSection } from "@/components/ai-page/benefits-section"
import { AIPortfolioSection } from "@/components/ai-page/portfolio-section"
import { AIWorkflowSection } from "@/components/ai-page/workflow-section"
import { AIFaqSection } from "@/components/ai-page/faq-section"
import { AICtaSection } from "@/components/ai-page/cta-section"

export const metadata: Metadata = {
  title: "AI Services | Video Editing & Design in Dehradun & Rishikesh",
  description:
    "AI creative services by Vikas Ramola in Dehradun and Rishikesh, India. AI-powered video editing, graphic design, reels, ads, branding, and content creation with faster delivery and better results for businesses and creators.",
  keywords: [
    "ai creative services",
    "ai video editing services",
    "ai graphic design services",
    "ai video editor in dehradun",
    "ai graphic designer in rishikesh",
    "ai creative services india",
    "ai reel editing services",
    "ai branding services",
    "Vikas Ramola",
  ],
  alternates: {
    canonical: "https://VikasRamolavdo.studio/ai-creative-services",
  },
  openGraph: {
    title: "AI Creative Services in Dehradun & Rishikesh | Vikas Ramola",
    description:
      "Professional AI-powered video editing and graphic design services in Dehradun & Rishikesh by Vikas Ramola. Faster, smarter, and conversion-focused creative solutions.",
    url: "https://VikasRamolavdo.studio/ai-creative-services",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Services | Video Editing & Design in Dehradun",
    description:
      "AI-powered creative services including video editing, graphic design, reels, and branding for businesses and creators in Dehradun & Rishikesh.",
  },
}



export default function AICreativeServicesPage() {
  return (
    <>
      <JsonLd type="ai" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "AI Creative Services" }]} />
        </div>
        <AIHeroSection />
        <AIBenefitsSection />
        <AIPortfolioSection />
        <AIWorkflowSection />
        <AIFaqSection />
        <AICtaSection />
      </main>
    </>
  )
}
