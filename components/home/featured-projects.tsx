"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    type: "video",
    title: "Brand Commercial",
    category: "Motion Graphics",
    image: "/video-editing-thumbnail-dark-cinematic-brand.jpg",
  },
  {
    type: "design",
    title: "Social Media Campaign",
    category: "Instagram Design",
    image: "/instagram-social-media-post-design-modern-colorful.jpg",
  },
  {
    type: "video",
    title: "YouTube Long Form",
    category: "Video Editing",
    image: "/youtube-video-editing-thumbnail-professional.jpg",
  },
  {
    type: "design",
    title: "Brand Identity",
    category: "Branding",
    image: "/brand-identity-logo-design-minimalist-modern.jpg",
  },
]

export function HomeFeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-balance">Featured Projects</h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - ${project.category} by Vikash Chand`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {project.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
