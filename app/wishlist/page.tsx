"use client"

import { useWishlist } from "@/app/providers/wishlist-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { QuickBuyModal } from "@/components/quick-buy-modal"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  isNew?: boolean
}

// Sample products data - replace with your actual data
const products: Product[] = [
  {
    id: "1",
    name: "Classic Cord Set",
    category: "Cord Sets",
    price: 1299,
    image: "/images/products/cord-set-1.jpg",
    isNew: true,
  },
  {
    id: "2",
    name: "Embroidered Abaya",
    category: "Abayas",
    price: 2499,
    image: "/images/products/abaya-1.jpg",
  },
  // Add more products as needed
]

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { toast } = useToast()
  const [showQuickBuy, setShowQuickBuy] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Get all products that are in the wishlist
  const wishlistProducts = products.filter((product) => wishlistItems.includes(product.id))

  const handleMoveToCart = (product: Product) => {
    removeFromWishlist(product.id)
    toast({
      title: "Added to Cart",
      description: `${product.name} has been moved to your cart.`,
      className: "bg-cream text-dark-green border-rose-gold",
    })
  }

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product)
    setShowQuickBuy(true)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif text-dark-green mb-3 sm:mb-4">My Wishlist</h1>
            <p className="text-dark-green/70 max-w-2xl mx-auto text-sm sm:text-base">
              Your favorite items, all in one place.
            </p>
          </div>

          {/* Wishlist Products Grid */}
          {wishlistProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlistProducts.map((product) => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-green/70 text-lg mb-4">Your wishlist is empty</p>
              <Button
                variant="outline"
                className="mt-4 border-dark-green text-dark-green hover:bg-dark-green hover:text-cream"
                onClick={() => window.location.href = "/shop"}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <QuickBuyModal
          isOpen={showQuickBuy}
          onClose={() => {
            setShowQuickBuy(false)
            setSelectedProduct(null)
          }}
          product={selectedProduct}
        />
      )}

      <Footer />
    </div>
  )
} 