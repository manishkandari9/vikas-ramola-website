"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"

export function ContactFormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916398828373?text=Hi%2C%20I%27m%20looking%20for%20creative%20services%20in%20Rishikesh."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp (Fastest)</p>
                  <p className="font-semibold text-foreground">+91-6398828373</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916398828373"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+91-6398828373</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:vikasviki46619@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">vikasviki46619@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Areas</p>
                  <p className="font-semibold text-foreground">Rishikesh & Dehradun, Uttarakhand</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Message CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">Quick Start</h3>
              <p className="text-muted-foreground mb-8">
                The fastest way to get started is through WhatsApp. Click below to send a pre-filled message and
                I&apos;ll respond within a few hours.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/916398828373?text=Hi%20Vikash%2C%20I%27m%20interested%20in%20your%20creative%20services.%20I%20need%20help%20with%3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <a
                  href="mailto:vikasviki46619@gmail.com?subject=Project%20Inquiry&body=Hi%20Vikash%2C%0A%0AI%27m%20interested%20in%20your%20creative%20services.%0A%0AProject%20details%3A%0A%0A"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Email
                </a>
              </div>

              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Average response time: <span className="text-foreground font-medium">2-4 hours</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Trusted by 50+ businesses and creators in Rishikesh, Dehradun, and across Uttarakhand.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-foreground">
              Let&apos;s create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
