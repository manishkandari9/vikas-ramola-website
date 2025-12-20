"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"

export function HomeHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/dark-abstract-grid.png')] opacity-5" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Creative Studio</span>
          </motion.div>

          {/* Main Headline - H1 with primary keywords */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="text-foreground">AI-Powered </span>
            <span className="text-primary">Graphic Designer</span>
            <span className="text-foreground"> & </span>
            <span className="text-primary">Video Editor</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">in Rishikesh & Dehradun</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty"
          >
            Helping businesses and creators in Uttarakhand grow with stunning visuals, engaging videos, and AI-enhanced
            content that drives real results. Hi, I&apos;m Vikash Chand.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Hire Me
                <Sparkles className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links to Services */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/video-editor-in-rishikesh-dehradun"
              className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              Video Editing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/graphic-designer-in-rishikesh-dehradun"
              className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              Graphic Design <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ai-creative-services"
              className="flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              AI Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
