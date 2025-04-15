"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/app/providers/wishlist-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { wishlist } = useWishlist()
  const wishlistCount = wishlist.length

  return (
    <nav className="bg-ivory border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-dark-green hover:text-dark-green/70">
              Home
            </Link>
            <Link href="/shop" className="text-dark-green hover:text-dark-green/70">
              Shop
            </Link>
            <Link href="/about" className="text-dark-green hover:text-dark-green/70">
              About
            </Link>
            <Link href="/contact" className="text-dark-green hover:text-dark-green/70">
              Contact
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/wishlist" 
              className="text-dark-green hover:text-dark-green/70 relative group"
            >
              <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="text-dark-green hover:text-dark-green/70">
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-dark-green hover:text-dark-green/70"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-ivory border-gold/30">
                <DropdownMenuItem asChild>
                  <Link href="/auth/login" className="w-full cursor-pointer">
                    Sign In
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/signup" className="w-full cursor-pointer">
                    Sign Up
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-dark-green hover:text-dark-green/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-dark-green hover:text-dark-green/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-dark-green hover:text-dark-green/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-dark-green hover:text-dark-green/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gold/20">
                <Link
                  href="/auth/login"
                  className="text-dark-green hover:text-dark-green/70 block mb-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-dark-green hover:text-dark-green/70 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


