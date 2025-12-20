"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const tools = [
  { name: "Adobe Premiere Pro", icon: "/placeholder.svg?height=60&width=60", category: "Video" },
  { name: "After Effects", icon: "/placeholder.svg?height=60&width=60", category: "Motion" },
  { name: "Photoshop", icon: "/placeholder.svg?height=60&width=60", category: "Design" },
  { name: "Illustrator", icon: "/placeholder.svg?height=60&width=60", category: "Design" },
  { name: "Canva", icon: "/placeholder.svg?height=60&width=60", category: "Design" },
  { name: "Figma", icon: "/placeholder.svg?height=60&width=60", category: "UI/UX" },
  { name: "DaVinci Resolve", icon: "/placeholder.svg?height=60&width=60", category: "Video" },
  { name: "ChatGPT", icon: "/placeholder.svg?height=60&width=60", category: "AI" },
  { name: "Midjourney", icon: "/placeholder.svg?height=60&width=60", category: "AI" },
  { name: "Runway ML", icon: "/placeholder.svg?height=60&width=60", category: "AI" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Tools & Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Professional Creative Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mastery of industry-standard software combined with cutting-edge AI tools for exceptional creative output.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-card/80 transition-all"
            >
              <div className="w-14 h-14 mb-4 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-medium text-foreground text-center text-sm">{tool.name}</h3>
              <span className="text-xs text-primary mt-1">{tool.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
