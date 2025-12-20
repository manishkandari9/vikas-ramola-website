import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectsHeroSection } from "@/components/projects-page/hero-section"
import { ProjectsGallery } from "@/components/projects-page/gallery"
import { ProjectsCtaSection } from "@/components/projects-page/cta-section"

export const metadata: Metadata = {
  title: "Projects | Video Editing & Graphic Design Portfolio",
  description:
    "Browse the portfolio of Vikash Chand - Professional video editing and graphic design projects for businesses and creators in Rishikesh, Dehradun, and Uttarakhand.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Vikash Chand Creative Portfolio",
    description: "Video editing and graphic design portfolio showcasing work for businesses in Rishikesh and Dehradun.",
    url: "/projects",
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
