"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Zap, Users, Target } from "lucide-react"

const highlights = [
  { icon: Zap, text: "AI-Enhanced Workflow" },
  { icon: Users, text: "Local Businesses & Creators" },
  { icon: Target, text: "Results-Driven Approach" },
  { icon: CheckCircle2, text: "Quality Guaranteed" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <img
                src="/professional-creative-designer-portrait-dark-backg.jpg"
                alt="Vikas Ramola - AI-Powered Graphic Designer and Video Editor in Rishikesh"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl"
              >
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-balance">
              Namaste! I&apos;m Vikas Ramola
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an AI-powered Graphic Designer and Video Editor based in Rishikesh and serving clients across
                Dehradun and Uttarakhand. With a passion for visual storytelling and modern AI tools, I help businesses
                and creators stand out in the digital landscape.
              </p>
              <p>
                Whether you need scroll-stopping social media content, professional video editing for YouTube, or
                eye-catching brand graphics, I combine creative expertise with cutting-edge AI technology to deliver
                faster turnarounds and exceptional quality.
              </p>
              <p>
                Working with local businesses, content creators, and brands, I understand the unique needs of the
                Uttarakhand market while bringing global creative standards to every project.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                >
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
