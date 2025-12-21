import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectsHeroSection } from "@/components/projects-page/hero-section"
import { ProjectsGallery } from "@/components/projects-page/gallery"
import { ProjectsCtaSection } from "@/components/projects-page/cta-section"

export const metadata: Metadata = {
  title: "Graphic Design & Video Editing Projects in Rishikesh | Portfolio",
  description:
    "Explore graphic design and video editing projects by Vikas Ramola, a professional graphic designer and video editor in Rishikesh & Dehradun, India. Real client work including branding, reels, ads, social media, and business videos.",
  keywords: [
    // Core portfolio intent
    "graphic design portfolio rishikesh",
    "video editing portfolio dehradun",
    "graphic designer projects rishikesh",
    "video editor projects dehradun",

    // Service + location
    "logo design projects rishikesh",
    "branding design portfolio india",
    "social media design projects dehradun",
    "reel editing projects rishikesh",

    // India + near me
    "video editing portfolio india",
    "graphic design portfolio near me",
  ],
  alternates: {
    canonical: "https://Vikasramolavdo.studio/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Graphic Designer & Video Editor in Rishikesh",
    description:
      "View real graphic design and video editing projects by Vikas Ramola. Branding, reels, ads, and social media work for businesses in Rishikesh, Dehradun & India.",
    url: "https://Vikasramolavdo.studio/projects",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design & Video Editing Portfolio | Vikas Ramola",
    description:
      "Real client projects showcasing graphic design, branding, reels, and video editing work in Rishikesh, Dehradun & India.",
  },
}


export default function ProjectsPage() {
  return (
    <>
      <JsonLd type="projects" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "Projects" }]} />
        </div>
        <ProjectsHeroSection />
        <ProjectsGallery />
        <ProjectsCtaSection />
      </main>
    </>
  )
}
