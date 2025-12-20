"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Cpu, Palette, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Vision",
    description: "Tell me about your project, goals, and preferences. I listen to understand your unique needs.",
  },
  {
    icon: Cpu,
    title: "AI-Enhanced Creation",
    description: "I use AI tools to accelerate editing, enhance quality, and explore creative possibilities faster.",
  },
  {
    icon: Palette,
    title: "Human Creativity",
    description: "While AI handles technical tasks, I focus on creative decisions, storytelling, and brand alignment.",
  },
  {
    icon: CheckCircle,
    title: "Perfect Delivery",
    description: "You receive polished, professional content delivered faster and at better value.",
  },
]

export function AIWorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance">
            How AI Creative Services Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined process that combines the best of human creativity with AI efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative p-6 bg-card border border-border rounded-xl"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>
              <step.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
