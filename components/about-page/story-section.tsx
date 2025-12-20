"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Zap, Users, Target } from "lucide-react"

const highlights = [
  { icon: Zap, text: "AI-Enhanced Workflow" },
  { icon: Users, text: "50+ Happy Clients" },
  { icon: Target, text: "Results-Driven" },
  { icon: CheckCircle2, text: "Quality Guaranteed" },
]

export function AboutStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">My Story</h2>

            <p className="text-lg">
              I&apos;m an AI-powered Graphic Designer and Video Editor based in Rishikesh and serving clients across
              Dehradun and Uttarakhand. With a passion for visual storytelling and modern AI tools, I help businesses
              and creators stand out in the digital landscape.
            </p>

            <p className="text-lg">
              Whether you need scroll-stopping social media content, professional video editing for YouTube, or
              eye-catching brand graphics, I combine creative expertise with cutting-edge AI technology to deliver
              faster turnarounds and exceptional quality.
            </p>

            <p className="text-lg">
              Working with local businesses, content creators, and brands, I understand the unique needs of the
              Uttarakhand market while bringing global creative standards to every project. My AI-enhanced workflow
              ensures you get premium quality at competitive rates.
            </p>

            <p className="text-lg">
              Over the years, I&apos;ve had the privilege of working with diverse clients ranging from small startups to
              established businesses, helping them communicate their brand story through compelling visuals. Every
              project is an opportunity to create something meaningful that resonates with the target audience and
              drives real results.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
