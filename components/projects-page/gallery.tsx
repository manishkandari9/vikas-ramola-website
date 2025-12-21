"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Play, X, ChevronLeft, ChevronRight, MessageCircle, ZoomIn, ZoomOut, Video, ImageIcon } from "lucide-react"

const allProjects = [
  {
    id: 1,
    type: "video",
    title: "Brand Commercial",
    category: "Motion Graphics",
    image: "/video-editing-thumbnail-dark-cinematic-brand.jpg",
    description: "High-impact brand commercial with motion graphics for a local Rishikesh business.",
    height: "tall",
  },
  {
    id: 2,
    type: "design",
    title: "Social Media Campaign",
    category: "Instagram Design",
    image: "/instagram-social-media-post-design-modern-colorful.jpg",
    description: "Complete social media design package for a local Dehradun brand.",
    height: "medium",
  },
  {
    id: 3,
    type: "video",
    title: "YouTube Long Form",
    category: "Video Editing",
    image: "/youtube-video-editing-thumbnail-professional.jpg",
    description: "Professional YouTube video editing with color grading and transitions.",
    height: "short",
  },
  {
    id: 4,
    type: "design",
    title: "Brand Identity",
    category: "Branding",
    image: "/brand-identity-logo-design-minimalist-modern.jpg",
    description: "Brand identity and visual design for a startup in Rishikesh.",
    height: "tall",
  },
  {
    id: 5,
    type: "video",
    title: "Instagram Reel",
    category: "Short Form",
    image: "/instagram-reel-video-editing-vertical.jpg",
    description: "Engaging short-form content optimized for Instagram and social media.",
    height: "medium",
  },
  {
    id: 6,
    type: "design",
    title: "Event Poster",
    category: "Poster Design",
    image: "/event-poster-design-creative-colorful-festival.jpg",
    description: "Eye-catching event poster design for cultural events in Uttarakhand.",
    height: "tall",
  },
  {
    id: 7,
    type: "video",
    title: "Product Showcase",
    category: "E-commerce",
    image: "/product-video-editing-ecommerce-professional.jpg",
    description: "Product showcase video for e-commerce brand in Dehradun.",
    height: "short",
  },
  {
    id: 8,
    type: "design",
    title: "YouTube Thumbnail Pack",
    category: "Thumbnails",
    image: "/youtube-thumbnail-design-pack-vibrant-bold.jpg",
    description: "Custom YouTube thumbnail designs for content creators.",
    height: "medium",
  },
  {
    id: 9,
    type: "video",
    title: "Event Highlight",
    category: "Events",
    image: "/event-video-editing-highlight-reel.jpg",
    description: "Cinematic event highlights with slow motion and speed ramping.",
    height: "tall",
  },
  {
    id: 10,
    type: "design",
    title: "Restaurant Menu",
    category: "Print Design",
    image: "/restaurant-menu-design-elegant-food-photography.jpg",
    description: "Menu design for restaurants and cafes in Rishikesh.",
    height: "short",
  },
  {
    id: 11,
    type: "video",
    title: "Podcast Episode",
    category: "Podcast",
    image: "/podcast-video-editing-talking-head.jpg",
    description: "Professional podcast video editing with captions and overlays.",
    height: "medium",
  },
  {
    id: 12,
    type: "design",
    title: "Business Cards",
    category: "Print Design",
    image: "/business-card-design-modern-creative-minimal.jpg",
    description: "Professional business card design for entrepreneurs.",
    height: "short",
  },
  {
    id: 13,
    type: "design",
    title: "Logo Collection",
    category: "Logos",
    image: "/logo-design-collection-modern-minimalist.jpg",
    description: "Modern minimalist logo designs for businesses.",
    height: "medium",
  },
  {
    id: 14,
    type: "design",
    title: "Reel Cover Design",
    category: "Social Media",
    image: "/instagram-reel-cover-aesthetic-gradient-modern.jpg",
    description: "Aesthetic reel cover designs for Instagram creators.",
    height: "tall",
  },
  {
    id: 15,
    type: "design",
    title: "Product Design",
    category: "E-commerce",
    image: "/product-photography-ecommerce-minimal-clean.jpg",
    description: "Clean product graphics for e-commerce listings.",
    height: "short",
  },
]

type FilterType = "all" | "video" | "design"

const heightClasses: Record<string, string> = {
  tall: "row-span-2",
  medium: "row-span-1",
  short: "row-span-1",
}

const aspectClasses: Record<string, string> = {
  tall: "aspect-[3/4]",
  medium: "aspect-square",
  short: "aspect-[4/3]",
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<FilterType>("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = allProjects.filter((p) => filter === "all" || p.type === filter)
  const selectedProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredProjects.length - 1 : selectedIndex - 1)
      setIsZoomed(false)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredProjects.length - 1 ? 0 : selectedIndex + 1)
      setIsZoomed(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") {
        setSelectedIndex(null)
        setIsZoomed(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, filteredProjects.length])

  return (
    <section className="py-16 md:py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { value: "all" as FilterType, label: "All Projects" },
            { value: "video" as FilterType, label: "Video", icon: Video },
            { value: "design" as FilterType, label: "Design", icon: ImageIcon },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                filter === tab.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl break-inside-avoid ${aspectClasses[project.height]}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} - ${project.category} by Vikash Ramola`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Type indicator badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                    project.type === "video" ? "bg-red-500/90 text-white" : "bg-blue-500/90 text-white"
                  }`}
                >
                  {project.type === "video" ? <Video className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                  {project.type === "video" ? "Video" : "Design"}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    project.type === "video" ? "bg-red-500/90" : "bg-primary/90"
                  }`}
                >
                  {project.type === "video" ? (
                    <Play className="w-6 h-6 text-white ml-1" />
                  ) : (
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>

              {/* Click to preview badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-2 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full text-foreground">
                  Click to Preview
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl mx-4 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium uppercase tracking-wider ${
                      selectedProject.type === "video" ? "text-red-500 bg-red-500/10" : "text-primary bg-primary/10"
                    }`}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {(selectedIndex ?? 0) + 1} / {filteredProjects.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {selectedProject.type === "design" && (
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
                  )}
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

              {/* Content */}
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

                {selectedProject.type === "video" ? (
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-red-500 ml-1" />
                      </div>
                      <p className="text-muted-foreground">Click to play video</p>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative bg-secondary/30 overflow-auto transition-all duration-300 ${
                      isZoomed ? "h-[70vh] cursor-zoom-out" : "h-[50vh] md:h-[60vh] cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={`${selectedProject.title} - by Vikash Ramola`}
                      className={`w-full h-full transition-all duration-500 ${
                        isZoomed ? "object-contain scale-150" : "object-contain"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-secondary/30 border-t border-border/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.description}</p>
                  </div>
                  <a
                    href={`https://wa.me/916398828373?text=${encodeURIComponent(`Hi, I saw your "${selectedProject.title}" project. I'm interested in similar work.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors shrink-0"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Want Similar Work?
                  </a>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="p-4 bg-secondary/50 border-t border-border/50 overflow-x-auto">
                <div className="flex gap-2">
                  {filteredProjects.map((project, idx) => (
                    <button
                      key={project.id}
                      onClick={() => {
                        setSelectedIndex(idx)
                        setIsZoomed(false)
                      }}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 transition-all ${
                        idx === selectedIndex
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
