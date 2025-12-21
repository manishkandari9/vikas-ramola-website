"use client"

import { motion } from "framer-motion"
import { User, MapPin } from "lucide-react"

export function AboutHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <img
                src="/professional-creative-designer-portrait-dark-backg.jpg"
                alt="Vikas Ramola - Graphic Designer and Video Editor in Rishikesh"
                className="w-full h-full object-cover rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl"
              >
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            {/* SEO H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-primary">Vikas Ramola</span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl">
                Graphic Designer & Video Editor in Rishikesh
              </span>
            </h1>

            {/* Supporting SEO text */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Professional graphic designer and video editor specializing in
              branding, reels, ads, motion graphics, and AI-powered creative
              services for businesses and creators.
            </p>

            {/* GEO signal */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Rishikesh & Dehradun, Uttarakhand, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
