"use client"

import { motion } from "framer-motion"
import { ImageIcon, Sparkles } from "lucide-react"
import Link from "next/link"

export function GraphicHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <ImageIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Creative Graphic Design</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
          >
            <span className="text-primary">Graphic Designer</span>{" "}
            <span className="text-foreground">in Rishikesh & Dehradun</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          >
            Professional AI-powered graphic design services for social media, branding, posters, and marketing
            materials. Serving businesses and creators across Rishikesh, Dehradun, and all of Uttarakhand with creative
            designs that stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/916398828373?text=Hi%2C%20I%20need%20graphic%20design%20services%20in%20Dehradun."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
