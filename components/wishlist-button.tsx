"use client"

import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useWishlist } from "@/app/providers/wishlist-provider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface WishlistButtonProps {
  productId: number
  className?: string
  variant?: "default" | "card"
}

export function WishlistButton({ productId, className, variant = "default" }: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const isWishlisted = isInWishlist(productId)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent click from bubbling to parent links
    if (isWishlisted) {
      removeFromWishlist(productId)
    } else {
      addToWishlist(productId)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            className={cn(
              "transition-all duration-300",
              variant === "card" && "absolute top-4 right-4 z-10",
              className
            )}
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-colors duration-300",
                isWishlisted
                  ? "fill-rose-500 stroke-rose-500"
                  : variant === "default"
                  ? "stroke-dark-green hover:stroke-rose-500"
                  : "stroke-white hover:stroke-rose-500"
              )}
            />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 