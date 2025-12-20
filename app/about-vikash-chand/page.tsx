import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { AboutHeroSection } from "@/components/about-page/hero-section"
import { AboutStorySection } from "@/components/about-page/story-section"
import { AboutSkillsSection } from "@/components/about-page/skills-section"
import { AboutCtaSection } from "@/components/about-page/cta-section"

export const metadata: Metadata = {
  title: "About Vikash Chand | AI Creative Expert in Rishikesh & Dehradun",
  description:
    "Learn about Vikash Chand - AI-powered Graphic Designer and Video Editor based in Rishikesh and Dehradun, Uttarakhand. Professional creative services with 5+ years of experience.",
  alternates: {
    canonical: "/about-vikash-chand",
  },
  openGraph: {
    title: "About Vikash Chand | AI Creative Expert",
    description:
      "AI-powered Graphic Designer and Video Editor based in Rishikesh and Dehradun with 5+ years of experience.",
    url: "/about-vikash-chand",
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd type="about" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "About" }]} />
        </div>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutSkillsSection />
        <AboutCtaSection />
      </main>
    </>
  )
}
