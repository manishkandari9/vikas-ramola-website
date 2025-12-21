"use client"

import { motion } from "framer-motion"
import { Sparkles, Bot } from "lucide-react"
import Link from "next/link"

export function AIHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
          >
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Creativity
            </span>
          </motion.div>

          {/* SHORT H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-primary">AI Services</span>
          </motion.h1>

          {/* SEO + GEO paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          >
            Professional AI creative services in Rishikesh and Dehradun,
            combining human creativity with advanced AI tools to deliver
            high-quality graphic design, video editing, reels, ads, and
            branding for businesses and creators across Uttarakhand.
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
              Get Started
            </Link>

            <a
              href="https://wa.me/916398828373?text=Hi%20Vikas%20Ramola%2C%20I%27m%20interested%20in%20AI%20creative%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
