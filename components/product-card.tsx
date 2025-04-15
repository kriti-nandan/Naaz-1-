"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useWishlist } from "@/app/providers/wishlist-provider"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"

interface ProductCardProps {
  id: number
  name: string
  category: string
  price: number
  image: string
  isNew?: boolean
}

export function ProductCard({ id, name, category, price, image, isNew }: ProductCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const { toast } = useToast()
  const isWishlisted = isInWishlist(id)

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking the heart
    
    if (isWishlisted) {
      removeFromWishlist(id)
      toast({
        description: `${name} removed from your wishlist`,
        duration: 2000,
        className: "bg-cream text-dark-green border-gold"
      })
    } else {
      addToWishlist(id)
      toast({
        description: `${name} added to your wishlist`,
        duration: 2000,
        className: "bg-cream text-dark-green border-gold"
      })
    }
  }

  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-cream">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105 duration-500"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-gold px-2 py-1 rounded-full">
            <span className="text-dark-green text-xs font-medium">New</span>
          </div>
        )}
      </div>
      <Link href={`/shop/product/${id}`}>
        <div className="mt-4 space-y-1">
          <div className="flex items-center gap-2 group/wishlist">
            <h3 className="font-serif text-lg text-dark-green group-hover:text-dark-green/80 transition-colors">
              {name}
            </h3>
            <motion.button
              onClick={handleWishlist}
              className="focus:outline-none"
              whileTap={{ scale: 0.8 }}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isWishlisted ? "filled" : "outlined"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5 transition-all duration-300",
                      isWishlisted
                        ? "fill-rose-500 stroke-rose-500"
                        : "stroke-dark-green/60 group-hover/wishlist:stroke-rose-500"
                    )}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
          <p className="text-dark-green/60 text-sm">{category}</p>
          <p className="text-dark-green font-medium">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
} 