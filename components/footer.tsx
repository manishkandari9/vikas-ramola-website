import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              <span className="text-primary">Vikash</span> Chand
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-Powered Graphic Designer & Video Editor serving Rishikesh, Dehradun, and all of Uttarakhand.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/video-editor-in-rishikesh-dehradun" className="hover:text-foreground transition-colors">
                  Video Editing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/graphic-designer-in-rishikesh-dehradun"
                  className="hover:text-foreground transition-colors"
                >
                  Graphic Design Services
                </Link>
              </li>
              <li>
                <Link href="/ai-creative-services" className="hover:text-foreground transition-colors">
                  AI Creative Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  View Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about-vikash-chand" className="hover:text-foreground transition-colors">
                  About Vikash Chand
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+916398828373" className="hover:text-foreground transition-colors">
                  +91-6398828373
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <a
                  href="https://wa.me/916398828373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:vikasviki46619@gmail.com" className="hover:text-foreground transition-colors">
                  vikasviki46619@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Rishikesh & Dehradun, Uttarakhand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Vikash Chand. All rights reserved.</p>
          <p>AI-Powered Creative Studio in Rishikesh & Dehradun, Uttarakhand</p>
        </div>
      </div>
    </footer>
  )
}
