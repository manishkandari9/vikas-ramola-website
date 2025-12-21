"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is the best video editor in Rishikesh?",
    answer:
      "Vikash Ramola is a leading AI-powered video editor in Rishikesh, helping businesses and creators grow with high-quality, optimized video content. With years of experience and modern AI tools, he delivers exceptional video editing services tailored to your specific needs.",
  },
  {
    question: "What types of videos do you edit?",
    answer:
      "I edit a wide range of videos including YouTube long-form content, YouTube Shorts, Instagram Reels, talking head videos, podcast episodes, product showcases, event highlights, brand commercials, and motion graphics. Each project is tailored to meet your specific goals.",
  },
  {
    question: "How long does video editing take?",
    answer:
      "Project timelines vary based on complexity. Simple edits can be completed in 1-2 days, while complex projects with motion graphics may take 3-7 days. AI tools help accelerate the process without compromising quality. Rush delivery is available for urgent projects.",
  },
  {
    question: "Do you provide video editing services in Dehradun?",
    answer:
      "Yes, I provide professional video editing services in both Rishikesh and Dehradun. I work with clients remotely, so all communication, file sharing, and project delivery can be handled online seamlessly.",
  },
  {
    question: "What is AI video editing?",
    answer:
      "AI video editing uses artificial intelligence tools to enhance video quality, automate repetitive tasks, improve color grading, and create engaging content faster. It combines human creativity with machine efficiency to deliver superior results in less time.",
  },
]

export function VideoFaqSection() {
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">Video Editing Questions</h2>
            <p className="text-muted-foreground text-pretty">
              Common questions about video editing services in Rishikesh and Dehradun.
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
