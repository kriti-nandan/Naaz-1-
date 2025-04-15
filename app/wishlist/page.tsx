"use client"

import { useWishlist } from "@/app/providers/wishlist-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/app/shop/page"

type Product = typeof products[number]

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  
  // Get all products that are in the wishlist
  const wishlistProducts = products.filter((product: Product) => wishlist.includes(product.id))

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {wishlistProducts.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  isNew={product.isNew}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-green/70 text-lg mb-4">Your wishlist is empty</p>
              <p className="text-dark-green/60 text-sm">
                Browse our collection and add your favorite items to your wishlist.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
} 