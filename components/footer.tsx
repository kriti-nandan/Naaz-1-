"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useWishlist } from "@/app/providers/wishlist-provider"

export function Footer() {
  const { wishlist } = useWishlist()
  const wishlistCount = wishlist.length

  return (
    <footer className="bg-ivory border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-dark-green">Naaz</h3>
            <p className="text-dark-green/70 text-sm leading-relaxed">
              Discover timeless elegance with our luxury fashion collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-green/60 hover:text-dark-green">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-green/60 hover:text-dark-green">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-green/60 hover:text-dark-green">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg text-dark-green mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-dark-green/70 hover:text-dark-green text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=new" className="text-dark-green/70 hover:text-dark-green text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-dark-green/70 hover:text-dark-green text-sm flex items-center gap-2">
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg text-dark-green mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dark-green/70 hover:text-dark-green text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-green/70 hover:text-dark-green text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-dark-green/70 hover:text-dark-green text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg text-dark-green mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-dark-green/70 hover:text-dark-green text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-dark-green/70 hover:text-dark-green text-sm">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-dark-green/70 hover:text-dark-green text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20">
          <p className="text-dark-green/60 text-sm text-center">
            © {new Date().getFullYear()} Naaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
