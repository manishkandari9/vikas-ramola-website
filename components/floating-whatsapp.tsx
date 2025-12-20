"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const phoneNumber = "916398828373"
  const message = encodeURIComponent("Hi, I'm looking for a video editor in Rishikesh.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
    </motion.a>
  )
}
