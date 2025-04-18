"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useWishlist } from "@/app/providers/wishlist-provider"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { products } from "@/app/shop/page"

interface WishlistItem {
  id: string
  name: string
  category: string
  price: number
  image: string
}

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addItem } = useCart()
  const { toast } = useToast()

  // Get full product details for wishlist items
  const wishlistProducts = products.filter(product => 
    wishlistItems.includes(product.id)
  )

  const handleMoveToCart = (product: WishlistItem) => {
    addItem({
      id: parseInt(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      className: "bg-cream text-dark-green border-rose-gold",
    })
  }

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId)
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
      className: "bg-cream text-dark-green border-rose-gold",
    })
  }

  return (
    <main className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-dark-green text-center mb-12">My Wishlist</h1>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-dark-green/80 mb-6">Your wishlist is empty</p>
            <Link href="/shop">
              <Button className="bg-dark-green text-cream hover:bg-dark-green/90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <Link href={`/shop/product/${product.id}`}>
                      <h3 className="font-serif text-lg text-dark-green hover:text-rose-gold transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="text-dark-green/60 hover:text-rose-gold transition-colors"
                    >
                      <Heart className="h-5 w-5 fill-rose-gold text-rose-gold" />
                    </button>
                  </div>
                  <p className="text-sm text-dark-green/70">{product.category}</p>
                  <p className="text-lg font-medium text-dark-green">₹{product.price.toLocaleString()}</p>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-cream border-dark-green text-dark-green hover:bg-dark-green hover:text-cream"
                      onClick={() => handleMoveToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="sm"
                      className="w-full bg-dark-green text-cream hover:bg-dark-green/90"
                      onClick={() => handleMoveToCart(product)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
} 