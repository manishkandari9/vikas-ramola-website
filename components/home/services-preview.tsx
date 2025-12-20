"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Video, ImageIcon, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Video,
    title: "Video Editing Services",
    description:
      "Professional video editing for YouTube, Instagram, podcasts, and more. Serving Rishikesh, Dehradun & Uttarakhand.",
    href: "/video-editor-in-rishikesh-dehradun",
    highlights: ["YouTube Videos", "Reels & Shorts", "Motion Graphics", "Event Videos"],
  },
  {
    icon: ImageIcon,
    title: "Graphic Design Services",
    description:
      "Creative graphic design for social media, branding, posters, and marketing materials in Rishikesh & Dehradun.",
    href: "/graphic-designer-in-rishikesh-dehradun",
    highlights: ["Social Media Design", "Brand Graphics", "Poster Design", "Thumbnails"],
  },
  {
    icon: Sparkles,
    title: "AI Creative Services",
    description:
      "AI-powered creative services combining human creativity with cutting-edge AI for faster, better results.",
    href: "/ai-creative-services",
    highlights: ["AI Video Editing", "AI Graphics", "Faster Delivery", "Cost Effective"],
  },
]

export function HomeServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Creative Services in Rishikesh & Dehradun
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional video editing, graphic design, and AI-enhanced creative services tailored for businesses and
            creators in Uttarakhand.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="block h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.highlights.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
