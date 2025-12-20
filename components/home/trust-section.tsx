"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Users, Award, Clock, Target } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "200+", label: "Projects Completed" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Client Satisfaction" },
]

const trustPoints = [
  "AI-Enhanced Workflow for Faster Delivery",
  "Serving Rishikesh, Dehradun & All Uttarakhand",
  "Local Business Expertise",
  "Results-Driven Creative Approach",
]

export function HomeTrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-card border border-border rounded-xl text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
              Trusted Creative Partner in Uttarakhand
            </h2>
            <p className="text-muted-foreground mb-8">
              As a local creative professional in Rishikesh and Dehradun, I understand the unique needs of businesses in
              our region. My AI-powered approach ensures you get premium quality at competitive rates.
            </p>
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
