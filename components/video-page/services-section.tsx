"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Video, Mic, Play, ShoppingBag, Calendar, Gauge, Wand2, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const videoServices = [
  {
    icon: Video,
    title: "YouTube Video Editing",
    description: "Professional editing for long-form YouTube content with color grading, transitions, and effects.",
  },
  {
    icon: Play,
    title: "Reels & Shorts",
    description: "Engaging short-form content optimized for Instagram Reels, YouTube Shorts, and TikTok.",
  },
  {
    icon: Mic,
    title: "Talking Head Videos",
    description: "Professional editing for talking head videos, interviews, and vlog-style content.",
  },
  {
    icon: ShoppingBag,
    title: "Product Videos",
    description: "E-commerce and product showcase videos that highlight features and drive sales.",
  },
  {
    icon: Calendar,
    title: "Event Videos",
    description: "Cinematic event highlights, wedding videos, and corporate event coverage.",
  },
  {
    icon: Gauge,
    title: "Slow Motion & Speed Ramp",
    description: "Dynamic slow motion effects and speed ramping for cinematic impact.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Animated brand commercials, intros, outros, and motion graphics elements.",
  },
  {
    icon: Sparkles,
    title: "AI Video Editing",
    description: "AI-enhanced editing workflows for faster delivery without compromising quality.",
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

export function VideoServicesSection() {
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
            Video Editing Services in Rishikesh
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive video editing services for all your content needs. From YouTube to social media, I deliver
            professional results with AI-enhanced workflows.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
