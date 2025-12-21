"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export function AboutCtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* SHORT HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work With Me
          </h2>

          {/* SEO + GEO paragraph */}
          <p className="text-lg text-muted-foreground mb-10">
            Looking for a graphic designer or video editor in Rishikesh or
            Dehradun? Vikas Ramola helps businesses and creators with branding,
            reels, ads, video editing, and AI-powered creative services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/916398828373?text=Hi%20Vikas%20Ramola%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </motion.a>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Free Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
