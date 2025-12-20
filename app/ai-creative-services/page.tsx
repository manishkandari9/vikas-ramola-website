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
  title: "AI Creative Services | AI Video Editing & Graphic Design in Uttarakhand",
  description:
    "AI-powered creative services combining human creativity with artificial intelligence. Faster delivery, better quality, and cost-effective video editing and graphic design in Rishikesh & Dehradun.",
  keywords: [
    "AI Video Editing Services",
    "AI Graphic Design Services",
    "AI Creative Services Rishikesh",
    "AI Prompting Services",
    "AI Video Editor Uttarakhand",
    "AI Enhanced Design Dehradun",
  ],
  alternates: {
    canonical: "/ai-creative-services",
  },
  openGraph: {
    title: "AI Creative Services | AI Video Editing & Graphic Design",
    description:
      "AI-powered creative services in Rishikesh & Dehradun. Faster delivery, better quality, cost-effective solutions.",
    url: "/ai-creative-services",
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
