import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { AboutHeroSection } from "@/components/about-page/hero-section"
import { AboutStorySection } from "@/components/about-page/story-section"
import { AboutSkillsSection } from "@/components/about-page/skills-section"
import { AboutCtaSection } from "@/components/about-page/cta-section"

export const metadata: Metadata = {
  title: "About Vikas Ramola | Graphic Designer & Video Editor in Rishikesh",
  description:
    "Learn about Vikas Ramola, a professional graphic designer and video editor in Rishikesh & Dehradun, India. With 5+ years of experience, he delivers branding, reels, ads, video editing, and AI-powered creative services for businesses and creators.",
  keywords: [
    "Vikas Ramola",
    "graphic designer in rishikesh",
    "video editor in rishikesh",
    "graphic designer in dehradun",
    "video editor in dehradun",
    "ai graphic designer india",
    "ai video editor india",
  ],
  alternates: {
    canonical: "https://Vikasramolavdo.studio/about-vikas-ramola",
  },
  openGraph: {
    title: "About Vikas Ramola | Graphic Designer & Video Editor",
    description:
      "Vikas Ramola is a professional graphic designer and video editor based in Rishikesh & Dehradun, India, specializing in branding, reels, ads, and AI-powered creative services.",
    url: "https://Vikasramolavdo.studio/about-vikas-ramola",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "profile",
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
