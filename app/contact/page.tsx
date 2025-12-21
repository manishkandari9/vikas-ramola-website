import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactHeroSection } from "@/components/contact-page/hero-section"
import { ContactFormSection } from "@/components/contact-page/form-section"

export const metadata: Metadata = {
  title: "Contact Graphic Designer & Video Editor in Rishikesh | Vikas Ramola",
  description:
    "Looking for the best graphic designer or video editor in Rishikesh or Dehradun? Contact Vikas Ramola for professional graphic design, video editing, reels, ads, and AI-powered creative services. Get a free quote today.",
  alternates: {
    canonical: "https://VikasRamolavdo.studio/contact",
  },
  openGraph: {
    title: "Contact Vikas Ramola – Graphic Designer & Video Editor in Rishikesh",
    description:
      "Hire a professional graphic designer and video editor in Rishikesh & Dehradun. Branding, reels, ads, and AI-powered creative services. Free quote available.",
    url: "https://VikasRamolavdo.studio/contact",
    siteName: "Vikas Ramola Creative Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Graphic Designer in Rishikesh | Video Editor Dehradun",
    description:
      "Best graphic design & video editing services in Rishikesh and Dehradun. Contact Vikas Ramola for a free quote.",
  },
}


export default function ContactPage() {
  return (
    <>
      <JsonLd type="contact" />
      <main className="pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb items={[{ label: "Contact" }]} />
        </div>
        <ContactHeroSection />
        <ContactFormSection />
      </main>
    </>
  )
}
