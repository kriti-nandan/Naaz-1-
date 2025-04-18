"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import { useWishlist } from "@/app/providers/wishlist-provider"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  id: string
  name: string
  category: string
  price: number
  image: string
  isNew?: boolean
}

export function ProductCard({ id, name, category, price, image, isNew }: ProductCardProps) {
  const router = useRouter()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleWishlistClick = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id)
      toast({
        title: "Removed from Wishlist",
        description: `${name} has been removed from your wishlist.`,
        className: "bg-cream text-dark-green border-rose-gold",
      })
    } else {
      addToWishlist(id)
      toast({
        title: "Added to Wishlist",
        description: `${name} has been added to your wishlist.`,
        className: "bg-cream text-dark-green border-rose-gold",
      })
    }
  }

  const handleMoveToCart = () => {
    addItem({
      id: parseInt(id),
      name,
      price,
      image,
      quantity: 1
    })
    
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart.`,
      className: "bg-cream text-dark-green border-rose-gold",
    })

    // Redirect to cart page after adding the item
    router.push('/cart')
  }

  return (
    <div className="group relative bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {isNew && (
        <div className="absolute top-2 left-2 z-10 bg-rose-gold text-white px-2 py-1 rounded-full text-xs font-medium">
          New
        </div>
      )}

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <Link href={`/shop/product/${id}`}>
            <h3 className="font-serif text-lg text-dark-green hover:text-rose-gold transition-colors">
              {name}
            </h3>
          </Link>
          <button
            onClick={handleWishlistClick}
            className="text-dark-green/60 hover:text-rose-gold transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${isInWishlist(id) ? "fill-rose-gold text-rose-gold" : ""}`}
            />
          </button>
        </div>
        <p className="text-sm text-dark-green/70">{category}</p>
        <p className="text-lg font-medium text-dark-green">₹{price.toLocaleString()}</p>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-cream border-dark-green text-dark-green hover:bg-dark-green hover:text-cream"
            onClick={handleMoveToCart}
          >
            Add to Cart
          </Button>
          <Button
            size="sm"
            className="w-full bg-dark-green text-cream hover:bg-dark-green/90"
            onClick={handleMoveToCart}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
} 