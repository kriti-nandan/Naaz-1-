"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User, Heart } from "lucide-react"
import { useWishlist } from "@/app/providers/wishlist-provider"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { wishlistItems } = useWishlist()

  return (
    <nav className="bg-ivory border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-serif text-dark-green">
                Naaz
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-dark-green hover:text-rose-gold inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="border-transparent text-dark-green hover:text-rose-gold inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="border-transparent text-dark-green hover:text-rose-gold inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-dark-green hover:text-rose-gold inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link
              href="/wishlist"
              className="text-dark-green hover:text-rose-gold p-2 relative"
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="text-dark-green hover:text-rose-gold p-2"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link
              href="/auth/login"
              className="text-dark-green hover:text-rose-gold p-2"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-green hover:text-rose-gold focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Contact
          </Link>
          <Link
            href="/wishlist"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
          </Link>
          <Link
            href="/cart"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Cart
          </Link>
          <Link
            href="/auth/login"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-dark-green hover:text-rose-gold hover:bg-cream"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  )
}


