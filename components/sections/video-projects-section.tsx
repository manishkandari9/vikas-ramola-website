"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Play, X, MessageCircle } from "lucide-react"

const videoProjects = [
  {
    id: 1,
    title: "Brand Commercial",
    category: "Motion Graphics",
    thumbnail: "/video-editing-thumbnail-dark-cinematic-brand.jpg",
    videoUrl: "https://example.com/video1.mp4",
    description: "High-impact brand commercial with motion graphics for a local Rishikesh business.",
  },
  {
    id: 2,
    title: "YouTube Long Form",
    category: "Video Editing",
    thumbnail: "/youtube-video-editing-thumbnail-professional.jpg",
    videoUrl: "https://example.com/video2.mp4",
    description: "Professional YouTube video editing with color grading and transitions.",
  },
  {
    id: 3,
    title: "Instagram Reel",
    category: "Short Form",
    thumbnail: "/instagram-reel-video-editing-vertical.jpg",
    videoUrl: "https://example.com/video3.mp4",
    description: "Engaging short-form content optimized for Instagram and social media.",
  },
  {
    id: 4,
    title: "Product Showcase",
    category: "E-commerce",
    thumbnail: "/product-video-editing-ecommerce-professional.jpg",
    videoUrl: "https://example.com/video4.mp4",
    description: "Product showcase video for e-commerce brand in Dehradun.",
  },
  {
    id: 5,
    title: "Event Highlight",
    category: "Events",
    thumbnail: "/event-video-editing-highlight-reel.jpg",
    videoUrl: "https://example.com/video5.mp4",
    description: "Cinematic event highlights with slow motion and speed ramping.",
  },
  {
    id: 6,
    title: "Podcast Episode",
    category: "Podcast",
    thumbnail: "/podcast-video-editing-talking-head.jpg",
    videoUrl: "https://example.com/video6.mp4",
    description: "Professional podcast video editing with captions and overlays.",
  },
]

export function VideoProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof videoProjects)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="video-work" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Video Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Video Editing Work in Rishikesh
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of professional video editing projects for businesses and creators in Rishikesh, Dehradun, and
            across Uttarakhand.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-video"}`}>
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`${project.title} - Video editing project by Vikas Ramola`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-secondary/50 rounded-full hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Video Placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Video player loads on interaction</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <a
                  href={`https://wa.me/916398828373?text=${encodeURIComponent(`Hi, I saw your "${selectedProject.title}" project. I'm interested in a similar video.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Want a Similar Video?
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
