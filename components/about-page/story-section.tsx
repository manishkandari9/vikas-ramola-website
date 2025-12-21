"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Zap, Users, Target } from "lucide-react"

const highlights = [
  { icon: Zap, text: "AI-Enhanced Creative Workflow" },
  { icon: Users, text: "50+ Happy Clients Across Uttarakhand" },
  { icon: Target, text: "Results-Driven Design & Editing" },
  { icon: CheckCircle2, text: "Quality & Timely Delivery Guaranteed" },
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
            {/* SEO-STRONG H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              About Vikas Ramola – Graphic Designer & Video Editor in Rishikesh
            </h2>

            {/* AEO OPENING (WHO + WHAT + WHERE) */}
            <p className="text-lg">
              Vikas Ramola is a professional graphic designer and video editor based in
              Rishikesh, Uttarakhand, serving businesses and creators across Dehradun
              and India. He specializes in branding, social media creatives, reels,
              advertisements, and AI-powered video editing solutions.
            </p>

            <p className="text-lg">
              With a strong passion for visual storytelling, I help brands stand out
              in today’s competitive digital space. Whether it’s scroll-stopping
              social media designs, professional YouTube video editing, or engaging
              promotional videos, my work focuses on clarity, creativity, and
              conversions.
            </p>

            <p className="text-lg">
              By combining traditional creative skills with modern AI tools, I’m able
              to deliver faster turnarounds without compromising on quality. This
              AI-enhanced workflow allows businesses in Rishikesh and Dehradun to get
              premium creative services at competitive pricing.
            </p>

            <p className="text-lg">
              Over the years, I’ve worked with startups, local businesses, yoga
              retreats, and content creators across Uttarakhand. Every project is
              approached with a deep understanding of the brand’s goals, target
              audience, and desired results—ensuring visuals that not only look good
              but also perform.
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
