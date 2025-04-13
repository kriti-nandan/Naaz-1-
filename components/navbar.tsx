"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-ivory/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-dark-green">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-ivory">
            <div className="flex flex-col gap-6 py-6">
              <Link href="/" className="text-dark-green hover:text-dark-green/80 font-serif text-lg">
                Home
              </Link>
              <Link href="/shop" className="text-dark-green hover:text-dark-green/80 font-serif text-lg">
                Shop
              </Link>
              <Link href="/about" className="text-dark-green hover:text-dark-green/80 font-serif text-lg">
                About
              </Link>
              <Link href="/contact" className="text-dark-green hover:text-dark-green/80 font-serif text-lg">
                Contact
              </Link>
              <div className="border-t border-gold/20 pt-6">
                <Link href="/auth/login" className="text-dark-green hover:text-dark-green/80 font-serif text-lg">
                  Sign In
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-dark-green hover:text-dark-green/80 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-dark-green hover:text-dark-green/80 transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-dark-green hover:text-dark-green/80 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-dark-green hover:text-dark-green/80 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="absolute inset-0 bg-ivory/95 flex items-center justify-center px-4 z-50">
              <div className="w-full max-w-md flex items-center">
                <Input
                  placeholder="Search for products..."
                  className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-dark-green"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="text-dark-green" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/auth/login">
            <Button variant="ghost" size="icon" className="text-dark-green">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/checkout">
            <Button variant="ghost" size="icon" className="text-dark-green">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
