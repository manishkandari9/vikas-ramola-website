"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is AI video editing?",
    answer:
      "AI video editing uses artificial intelligence to enhance video quality, automate repetitive tasks, improve color grading, and speed up editing. Vikas Ramola combines AI tools with human creativity to deliver professional video editing services in Rishikesh and Dehradun.",
  },
  {
    question: "Is AI-based editing good for social media?",
    answer:
      "Yes, AI-based editing is highly effective for social media. It helps optimize videos for Instagram, YouTube, and reels, improves engagement, and ensures faster turnaround—ideal for businesses and creators in Rishikesh and Dehradun.",
  },
  {
    question: "Will AI replace human creativity?",
    answer:
      "No. AI enhances human creativity but does not replace it. Creative direction, storytelling, and brand understanding remain human-led, while AI supports tasks like color correction and audio enhancement for better results.",
  },
  {
    question: "How fast is AI-powered creative work?",
    answer:
      "AI-powered workflows can reduce turnaround time by 50–100%. Projects that usually take days can often be delivered in hours without compromising on quality.",
  },
  {
    question: "Are AI creative services expensive?",
    answer:
      "AI creative services often provide better value. Faster workflows reduce costs while maintaining high-quality output, making professional graphic design and video editing more affordable.",
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              FAQ
            </span>

            {/* SHORT H2 */}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Common Questions
            </h2>

            {/* AEO helper line */}
            <p className="text-muted-foreground text-pretty">
              Answers about AI-powered graphic design and video editing services.
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
