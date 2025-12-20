"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Video,
  ImageIcon,
  Sparkles,
  Play,
  Mic,
  ShoppingBag,
  Calendar,
  Gauge,
  Wand2,
  FileImage,
  Palette,
  Bot,
  Lightbulb,
} from "lucide-react"

const videoServices = [
  { icon: Video, title: "Video Editing", desc: "YouTube Shorts & Long Videos" },
  { icon: Mic, title: "Talking Head Videos", desc: "Professional talking videos" },
  { icon: Play, title: "Podcast Ads Videos", desc: "Engaging podcast promotions" },
  { icon: ShoppingBag, title: "Product Videos", desc: "E-commerce & showcase videos" },
  { icon: Calendar, title: "Event Videos", desc: "Memorable event highlights" },
  { icon: Gauge, title: "Slow Motion & Speed Ramping", desc: "Cinematic effects" },
  { icon: Wand2, title: "Motion Graphics & Brand Ads", desc: "Animated brand content" },
]

const designServices = [
  { icon: ImageIcon, title: "Social Media Design", desc: "Instagram Reels & Posts" },
  { icon: FileImage, title: "Poster Design", desc: "Eye-catching promotional posters" },
  { icon: Palette, title: "Creative Graphics", desc: "Brand visuals & artwork" },
]

const aiServices = [
  { icon: Bot, title: "AI Video Editing", desc: "Enhanced with AI tools" },
  { icon: Sparkles, title: "AI Graphic Design", desc: "AI-powered visuals" },
  { icon: Lightbulb, title: "AI Prompting", desc: "Content creation assistance" },
]

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: { icon: React.ElementType; title: string; desc: string; index: number }) {
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
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">What I Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Creative Services in Rishikesh & Dehradun
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional video editing, graphic design, and AI-enhanced creative services tailored for businesses and
            creators in Uttarakhand.
          </p>
        </motion.div>

        {/* Video Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Video className="w-6 h-6 text-primary" />
            Video Editing Services in Rishikesh
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videoServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>

        {/* Design Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <ImageIcon className="w-6 h-6 text-primary" />
            Graphic Design Services in Dehradun
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6 text-primary" />
            AI-Powered Creative Services
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get a Free Quote
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
