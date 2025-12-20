"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Clock, TrendingUp, Sparkles, Brain, Workflow } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Faster Turnarounds",
    description: "AI tools help deliver projects 2x faster without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Better Engagement",
    description: "AI-optimized content that performs better on social media algorithms.",
  },
  {
    icon: Sparkles,
    title: "Consistent Quality",
    description: "Every project maintains high standards through AI-assisted workflows.",
  },
  {
    icon: Brain,
    title: "Smart Automation",
    description: "Repetitive tasks handled by AI, more time for creative excellence.",
  },
  {
    icon: Workflow,
    title: "Modern Workflow",
    description: "Cutting-edge tools combined with traditional creative expertise.",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "AI efficiency translates to better value for your investment.",
  },
]

export function AIDifferentiatorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why AI-Powered?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 text-balance">
              The Vikas AI Advantage
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a modern AI-powered creative expert in Rishikesh and Dehradun, I combine the best of human creativity
              with cutting-edge AI technology. This unique approach delivers faster results, better quality, and more
              value for your business.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              While AI handles the technical heavy-lifting – color correction, audio enhancement, repetitive editing
              tasks – I focus on what matters most: crafting compelling stories and visuals that connect with your
              audience and drive real business results.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Experience the Difference
            </motion.a>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <benefit.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
