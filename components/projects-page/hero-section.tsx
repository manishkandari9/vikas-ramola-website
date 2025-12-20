"use client"

import { motion } from "framer-motion"
import { FolderOpen } from "lucide-react"

export function ProjectsHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <FolderOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="text-foreground">Creative </span>
            <span className="text-primary">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            A showcase of video editing and graphic design projects for businesses and creators in Rishikesh, Dehradun,
            and across Uttarakhand. Each project demonstrates quality, creativity, and attention to detail.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
