"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ImageIcon, FileImage, Palette, Sparkles, PenTool, LayoutGrid, Youtube, Megaphone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const designServices = [
  {
    icon: ImageIcon,
    title: "Social Media Design",
    description: "Eye-catching Instagram posts, stories, reels covers, and social media graphics.",
  },
  {
    icon: FileImage,
    title: "Poster Design",
    description: "Professional poster designs for events, promotions, and marketing campaigns.",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Memorable logo designs that represent your brand identity perfectly.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand identity packages including colors, typography, and visual guidelines.",
  },
  {
    icon: Youtube,
    title: "YouTube Thumbnails",
    description: "Click-worthy thumbnail designs that boost your video views and engagement.",
  },
  {
    icon: LayoutGrid,
    title: "Menu & Print Design",
    description: "Restaurant menus, brochures, business cards, and other print materials.",
  },
  {
    icon: Megaphone,
    title: "Marketing Graphics",
    description: "Banner ads, promotional graphics, and marketing campaign visuals.",
  },
  {
    icon: Sparkles,
    title: "AI Graphic Design",
    description: "AI-enhanced design workflows for faster delivery and innovative visuals.",
  },
]

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon
  title: string
  description: string
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export function GraphicServicesSection() {
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
            Graphic Design Services in Dehradun
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive graphic design services for all your creative needs. From social media to branding, I deliver
            professional designs with AI-enhanced workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
