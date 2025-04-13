import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-cream/30 border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <h2 className="text-2xl font-serif font-bold text-dark-green">Naaz</h2>
            </Link>
            <p className="text-dark-green/70 mt-4 max-w-xs">
              Elevating everyday fashion with timeless elegance and sustainable luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-dark-green hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-dark-green hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-dark-green hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-dark-green mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-dark-green mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-dark-green mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green/70 hover:text-dark-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20 text-center text-dark-green/60 text-sm">
          <p>© {new Date().getFullYear()} Naaz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
