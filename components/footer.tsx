"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-ivory overflow-hidden min-h-[800px] w-screen -mx-[calc(50vw-50%)]">
      {/* Background Illustration */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/footer section.jpg")',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          filter: 'contrast(1.2)',
        }}
      />

      {/* Semi-transparent overlay for better content contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/5 to-ivory/20" />

      {/* Content Container - This ensures content stays centered while background extends full width */}
      <div className="relative w-full max-w-[2000px] mx-auto">
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-dark-green">Naaz</h3>
              <p className="text-dark-green/80 max-w-xs">
                Celebrating the essence of Indian fashion with modern elegance and traditional charm.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-dark-green/60 hover:text-rose-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-dark-green/60 hover:text-rose-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-dark-green/60 hover:text-rose-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium text-dark-green mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-medium text-dark-green mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shipping" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-dark-green/80 hover:text-rose-gold transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium text-dark-green mb-4">Stay Updated</h4>
              <p className="text-dark-green/80 mb-4">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gold/30 bg-white/80 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 text-dark-green placeholder-dark-green/50"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-dark-green text-cream rounded-lg hover:bg-dark-green/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-dark-green/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-dark-green/60 text-sm">
                © {new Date().getFullYear()} Naaz. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-dark-green/60 hover:text-rose-gold text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-dark-green/60 hover:text-rose-gold text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
