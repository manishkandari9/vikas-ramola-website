"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MessageCircle, ZoomIn, ZoomOut } from "lucide-react"

const designProjects = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "Instagram Design",
    image: "/instagram-social-media-post-design-modern-colorful.jpg",
    description: "Complete social media design package for a local Dehradun brand.",
    height: "tall",
  },
  {
    id: 2,
    title: "Brand Identity",
    category: "Branding",
    image: "/brand-identity-logo-design-minimalist-modern.jpg",
    description: "Brand identity and visual design for a startup in Rishikesh.",
    height: "medium",
  },
  {
    id: 3,
    title: "Event Poster",
    category: "Poster Design",
    image: "/event-poster-design-creative-colorful-festival.jpg",
    description: "Eye-catching event poster design for cultural events in Uttarakhand.",
    height: "tall",
  },
  {
    id: 4,
    title: "Product Graphics",
    category: "E-commerce",
    image: "/product-photography-ecommerce-minimal-clean.jpg",
    description: "Product showcase graphics for e-commerce platform.",
    height: "short",
  },
  {
    id: 5,
    title: "YouTube Thumbnail Pack",
    category: "Thumbnails",
    image: "/youtube-thumbnail-design-pack-vibrant-bold.jpg",
    description: "Custom YouTube thumbnail designs for content creators.",
    height: "short",
  },
  {
    id: 6,
    title: "Restaurant Menu",
    category: "Print Design",
    image: "/restaurant-menu-design-elegant-food-photography.jpg",
    description: "Menu design for restaurants and cafes in Rishikesh.",
    height: "tall",
  },
  {
    id: 7,
    title: "Reel Covers",
    category: "Social Media",
    image: "/instagram-reel-cover-aesthetic-gradient-modern.jpg",
    description: "Instagram reel cover designs for consistent brand presence.",
    height: "medium",
  },
  {
    id: 8,
    title: "Business Cards",
    category: "Print Design",
    image: "/business-card-design-modern-creative-minimal.jpg",
    description: "Professional business card design for entrepreneurs.",
    height: "short",
  },
]

const heightClasses = {
  tall: "h-[400px] sm:h-[450px] lg:h-[500px]",
  medium: "h-[300px] sm:h-[320px] lg:h-[350px]",
  short: "h-[220px] sm:h-[240px] lg:h-[260px]",
}

export function GraphicProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const selectedProject = selectedIndex !== null ? designProjects[selectedIndex] : null

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? designProjects.length - 1 : selectedIndex - 1)
      setIsZoomed(false)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === designProjects.length - 1 ? 0 : selectedIndex + 1)
      setIsZoomed(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
    if (e.key === "Escape") {
      setSelectedIndex(null)
      setIsZoomed(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">Graphic Design Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Creative graphic design projects showcasing brand visuals, social media content, and marketing materials for
            clients across Uttarakhand.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-secondary/50 ${heightClasses[project.height as keyof typeof heightClasses]}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - Graphic design by Vikash Chand in Dehradun`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="p-4 bg-primary rounded-full shadow-lg shadow-primary/30">
                  <ZoomIn className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 text-xs text-primary bg-primary/10 rounded-full font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/98 backdrop-blur-md"
            onClick={() => {
              setSelectedIndex(null)
              setIsZoomed(false)
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl mx-4 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs text-primary bg-primary/10 rounded-full font-medium uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {(selectedIndex ?? 0) + 1} / {designProjects.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    {isZoomed ? (
                      <ZoomOut className="w-5 h-5 text-foreground" />
                    ) : (
                      <ZoomIn className="w-5 h-5 text-foreground" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setSelectedIndex(null)
                      setIsZoomed(false)
                    }}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>

                <div
                  className={`relative bg-secondary/30 overflow-auto transition-all duration-300 ${
                    isZoomed ? "h-[70vh] cursor-zoom-out" : "h-[50vh] md:h-[60vh] cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Graphic design by Vikash Chand`}
                    className={`w-full h-full transition-all duration-500 ${
                      isZoomed ? "object-contain scale-150" : "object-contain"
                    }`}
                  />
                </div>
              </div>

              <div className="p-6 bg-secondary/30 border-t border-border/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.description}</p>
                  </div>
                  <a
                    href={`https://wa.me/916398828373?text=${encodeURIComponent(`Hi, I saw your "${selectedProject.title}" design. I'm interested in similar work.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors shrink-0"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Want Similar Design?
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
