"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface WishlistContextType {
  wishlistItems: string[]
  addToWishlist: (productId: string) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
}

const defaultWishlistContext: WishlistContextType = {
  wishlistItems: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
}

const WishlistContext = createContext<WishlistContextType>(defaultWishlistContext)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<string[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("wishlist")
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist)
        // Ensure all IDs are strings
        const stringWishlist = parsedWishlist.map((id: any) => String(id))
        setWishlistItems(stringWishlist)
      }
    } catch (error) {
      console.error("Error loading wishlist:", error)
      setWishlistItems([])
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
    } catch (error) {
      console.error("Error saving wishlist:", error)
    }
  }, [wishlistItems])

  const addToWishlist = (productId: string) => {
    setWishlistItems((prev) => {
      const stringId = String(productId)
      return prev.includes(stringId) ? prev : [...prev, stringId]
    })
  }

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => {
      const stringId = String(productId)
      return prev.filter((id) => id !== stringId)
    })
  }

  const isInWishlist = (productId: string) => {
    const stringId = String(productId)
    return wishlistItems.includes(stringId)
  }

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
} 