"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = {
  "Video Editing Skills": [
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "CapCut",
    "Motion Graphics & Transitions",
  ],
  "Graphic Design Skills": [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "Figma",
    "Brand Identity Design",
  ],
  "AI-Powered Creative Tools": [
    "AI Video Enhancement",
    "AI Image Generation",
    "AI Prompt Engineering",
    "AI Color Grading",
    "AI Audio Enhancement",
  ],
  "Content I Create": [
    "YouTube Video Editing",
    "Instagram Reels & Shorts",
    "Podcast Video Editing",
    "Social Media Creatives",
    "Marketing & Ad Content",
  ],
}

export function AboutSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Professional Expertise
          </span>

          {/* SEO STRONG H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Graphic Design & Video Editing Skills by Vikas Ramola
          </h2>

          {/* AEO + GEO paragraph */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            As a professional graphic designer and video editor in Rishikesh,
            I use industry-leading design software and AI-powered tools to
            create high-quality branding, videos, reels, and digital content
            for businesses, creators, and brands across Rishikesh, Dehradun,
            and India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              {/* H3 = keyword buckets */}
              <h3 className="text-lg font-bold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
