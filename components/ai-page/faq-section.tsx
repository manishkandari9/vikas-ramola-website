"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AI video editing?",
    answer:
      "AI video editing uses artificial intelligence tools to enhance video quality, automate repetitive tasks, improve color grading, and create engaging content faster. It combines human creativity with machine efficiency to deliver superior results in less time.",
  },
  {
    question: "Is AI-based editing better for social media?",
    answer:
      "AI-based editing is highly effective for social media content. It helps optimize videos for platform algorithms, creates engaging captions automatically, enhances visual quality, and ensures faster turnarounds crucial for maintaining a consistent social media presence.",
  },
  {
    question: "Will AI replace human creativity?",
    answer:
      "No, AI enhances human creativity rather than replacing it. While AI handles technical tasks like color correction and audio enhancement, the creative vision, storytelling, and brand alignment remain human-driven. The best results come from combining both.",
  },
  {
    question: "How much faster is AI-powered creative work?",
    answer:
      "AI tools typically accelerate project delivery by 50-100%. Tasks that traditionally took days can be completed in hours, without compromising on quality. This means faster turnarounds and better value for clients.",
  },
  {
    question: "Are AI creative services more expensive?",
    answer:
      "Actually, AI creative services often provide better value. The efficiency gains from AI translate to competitive pricing while maintaining or even improving quality. You get premium results without premium pricing.",
  },
]

export function AIFaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">AI Creative Services Questions</h2>
            <p className="text-muted-foreground text-pretty">Common questions about AI-powered creative services.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-foreground font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
