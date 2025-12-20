import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"
import { Breadcrumb } from "@/components/breadcrumb"
import { ContactHeroSection } from "@/components/contact-page/hero-section"
import { ContactFormSection } from "@/components/contact-page/form-section"

export const metadata: Metadata = {
  title: "Contact Vikash Chand | Get a Free Quote for Creative Services",
  description:
    "Contact Vikash Chand for professional video editing and graphic design services in Rishikesh and Dehradun. Get a free quote via WhatsApp or email. Fast response guaranteed.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Vikash Chand | Get a Free Quote",
    description:
      "Contact for video editing and graphic design services in Rishikesh and Dehradun. Fast response guaranteed.",
    url: "/contact",
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
