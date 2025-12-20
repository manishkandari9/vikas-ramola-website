"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you provide graphic design services in Dehradun?",
    answer:
      "Yes, I provide professional graphic design services in both Rishikesh and Dehradun. I work with clients remotely, so all communication, file sharing, and project delivery can be handled online seamlessly.",
  },
  {
    question: "What types of graphic design do you offer?",
    answer:
      "I offer a wide range of graphic design services including social media design, poster design, logo design, brand identity, YouTube thumbnails, menu design, business cards, marketing graphics, and more. Each design is tailored to your specific needs.",
  },
  {
    question: "How long does a design project take?",
    answer:
      "Simple designs like social media posts can be completed in 1-2 days, while complex projects like brand identity may take 5-7 days. AI tools help accelerate the process without compromising quality. Rush delivery is available.",
  },
  {
    question: "What is AI graphic design?",
    answer:
      "AI graphic design uses artificial intelligence tools to enhance creativity, speed up workflows, and create innovative visuals. It combines human creativity with AI efficiency to deliver superior designs faster and at better value.",
  },
  {
    question: "Do you provide source files?",
    answer:
      "Yes, I provide all source files upon project completion including editable formats like PSD, AI, and more. You get full ownership of the designs and can make future modifications as needed.",
  },
]

export function GraphicFaqSection() {
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">Graphic Design Questions</h2>
            <p className="text-muted-foreground text-pretty">
              Common questions about graphic design services in Rishikesh and Dehradun.
            </p>
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
