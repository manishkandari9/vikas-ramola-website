"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, TrendingUp, Sparkles, Brain, Workflow, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "2x Faster Turnarounds",
    description: "AI tools help deliver projects twice as fast without compromising on quality or creativity.",
  },
  {
    icon: TrendingUp,
    title: "Better Engagement",
    description: "AI-optimized content that performs better on social media algorithms and drives more views.",
  },
  {
    icon: Sparkles,
    title: "Consistent Quality",
    description: "Every project maintains high standards through AI-assisted quality control and workflows.",
  },
  {
    icon: Brain,
    title: "Smart Automation",
    description: "Repetitive tasks handled by AI, freeing more time for creative excellence and innovation.",
  },
  {
    icon: Workflow,
    title: "Modern Workflow",
    description: "Cutting-edge tools combined with traditional creative expertise for best results.",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "AI efficiency translates to better value for your investment in creative services.",
  },
]

export function AIBenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            Why Choose AI Creative Services?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            AI-powered workflows deliver superior results for businesses and creators in Rishikesh and Dehradun.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
            >
              <benefit.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
