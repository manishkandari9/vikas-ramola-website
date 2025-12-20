"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ZoomIn,
  ZoomOut,
  Video,
  ImageIcon,
  Sparkles,
} from "lucide-react"

// AI Generated Projects with masonry heights
const aiProjects = [
  {
    id: 1,
    type: "video",
    title: "AI Motion Graphics",
    category: "AI Video",
    image: "/video-editing-thumbnail-dark-cinematic-brand.jpg",
    description: "AI-enhanced motion graphics with automated color grading and smooth transitions.",
    height: "tall",
    aiTools: ["Runway ML", "DaVinci Resolve"],
  },
  {
    id: 2,
    type: "design",
    title: "AI Social Media Pack",
    category: "AI Graphics",
    image: "/instagram-social-media-post-design-modern-colorful.jpg",
    description: "AI-generated social media designs with intelligent layout and color optimization.",
    height: "medium",
    aiTools: ["Midjourney", "Adobe Firefly"],
  },
  {
    id: 3,
    type: "video",
    title: "AI Video Enhancement",
    category: "AI Upscaling",
    image: "/youtube-video-editing-thumbnail-professional.jpg",
    description: "4K upscaling and AI noise reduction for professional video quality.",
    height: "short",
    aiTools: ["Topaz AI", "Premiere Pro AI"],
  },
  {
    id: 4,
    type: "design",
    title: "AI Brand Identity",
    category: "AI Branding",
    image: "/brand-identity-logo-design-minimalist-modern.jpg",
    description: "AI-assisted brand identity creation with intelligent color palette generation.",
    height: "tall",
    aiTools: ["Adobe Firefly", "Canva AI"],
  },
  {
    id: 5,
    type: "video",
    title: "AI Reel Creation",
    category: "AI Short Form",
    image: "/instagram-reel-video-editing-vertical.jpg",
    description: "AI-powered short-form content with auto-captions and smart transitions.",
    height: "medium",
    aiTools: ["CapCut AI", "Descript"],
  },
  {
    id: 6,
    type: "design",
    title: "AI Poster Design",
    category: "AI Graphics",
    image: "/event-poster-design-creative-colorful-festival.jpg",
    description: "AI-generated event posters with dynamic composition and typography.",
    height: "tall",
    aiTools: ["Midjourney", "Photoshop AI"],
  },
  {
    id: 7,
    type: "video",
    title: "AI Product Video",
    category: "AI E-commerce",
    image: "/product-video-editing-ecommerce-professional.jpg",
    description: "AI-enhanced product showcases with automated background removal.",
    height: "short",
    aiTools: ["Runway ML", "Remove.bg"],
  },
  {
    id: 8,
    type: "design",
    title: "AI Thumbnail Pack",
    category: "AI YouTube",
    image: "/youtube-thumbnail-design-pack-vibrant-bold.jpg",
    description: "AI-optimized thumbnails designed for maximum click-through rate.",
    height: "medium",
    aiTools: ["Adobe Firefly", "VidIQ AI"],
  },
  {
    id: 9,
    type: "video",
    title: "AI Event Highlights",
    category: "AI Events",
    image: "/event-video-editing-highlight-reel.jpg",
    description: "AI auto-edit highlight reels with intelligent scene detection.",
    height: "tall",
    aiTools: ["Magisto AI", "Premiere Pro AI"],
  },
  {
    id: 10,
    type: "design",
    title: "AI Menu Design",
    category: "AI Print",
    image: "/restaurant-menu-design-elegant-food-photography.jpg",
    description: "AI-enhanced menu designs with smart food photography touchups.",
    height: "short",
    aiTools: ["Canva AI", "Adobe Photoshop"],
  },
  {
    id: 11,
    type: "video",
    title: "AI Podcast Edit",
    category: "AI Podcast",
    image: "/podcast-video-editing-talking-head.jpg",
    description: "AI-powered podcast editing with auto-silences removal and captions.",
    height: "medium",
    aiTools: ["Descript", "Opus Clip"],
  },
  {
    id: 12,
    type: "design",
    title: "AI Business Cards",
    category: "AI Print",
    image: "/business-card-design-modern-creative-minimal.jpg",
    description: "AI-designed business cards with intelligent typography pairing.",
    height: "short",
    aiTools: ["Looka AI", "Canva AI"],
  },
]

type FilterType = "all" | "video" | "design"

const aspectClasses: Record<string, string> = {
  tall: "aspect-[3/4]",
  medium: "aspect-square",
  short: "aspect-[4/3]",
}

export function AIPortfolioSection() {
  const [filter, setFilter] = useState<FilterType>("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = aiProjects.filter((p) => filter === "all" || p.type === filter)
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            AI Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">AI-Generated Creative Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our AI-enhanced video editing and graphic design projects - combining artificial intelligence with
            human creativity.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { value: "all" as FilterType, label: "All AI Work" },
            { value: "video" as FilterType, label: "AI Video", icon: Video },
            { value: "design" as FilterType, label: "AI Graphics", icon: ImageIcon },
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

        {/* CSS Columns Masonry Layout */}
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
                alt={`${project.title} - ${project.category} by Vikash Chand`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* AI Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                    project.type === "video" ? "bg-purple-500/90 text-white" : "bg-cyan-500/90 text-white"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  {project.type === "video" ? "AI Video" : "AI Design"}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    project.type === "video" ? "bg-purple-500/90" : "bg-cyan-500/90"
                  }`}
                >
                  {project.type === "video" ? (
                    <Play className="w-6 h-6 text-white ml-1" />
                  ) : (
                    <ZoomIn className="w-6 h-6 text-white" />
                  )}
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                {/* AI Tools used */}
                <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.aiTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[10px] bg-background/60 backdrop-blur-sm rounded text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
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
                    className={`inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full font-medium uppercase tracking-wider ${
                      selectedProject.type === "video"
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-cyan-400 bg-cyan-500/10"
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
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
                      <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-10 h-10 text-purple-400 ml-1" />
                      </div>
                      <p className="text-muted-foreground">Click to play AI-enhanced video</p>
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
                      alt={`${selectedProject.title} - by Vikash Chand`}
                      className={`w-full h-full transition-all duration-500 ${
                        isZoomed ? "object-contain scale-150" : "object-contain"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-secondary/30 border-t border-border/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{selectedProject.description}</p>
                    {/* AI Tools */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-muted-foreground">AI Tools:</span>
                      {selectedProject.aiTools.map((tool) => (
                        <span key={tool} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/916398828373?text=${encodeURIComponent(`Hi, I saw your AI-powered "${selectedProject.title}" project. I'm interested in similar AI-enhanced work.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors shrink-0"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get AI-Enhanced Work
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
