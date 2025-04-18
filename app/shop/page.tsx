"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  isNew: boolean
}

// Sample products data
export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cord Set",
    category: "evening wear",
    price: 129.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: true,
  },
  {
    id: "2",
    name: "Summer Breeze Set",
    category: "summer collection",
    price: 99.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: true,
  },
  {
    id: "3",
    name: "Casual Comfort Set",
    category: "casual wear",
    price: 89.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: false,
  },
  {
    id: "4",
    name: "Elegant Evening Set",
    category: "evening wear",
    price: 149.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: false,
  },
  {
    id: "5",
    name: "Modern Minimal Set",
    category: "modern collection",
    price: 119.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: true,
  },
  {
    id: "6",
    name: "Boho Chic Set",
    category: "boho collection",
    price: 139.99,
    image: "/placeholder.svg?height=800&width=600",
    isNew: false,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return b.isNew ? 1 : -1
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-serif text-dark-green mb-3 sm:mb-4">Our Collection</h1>
            <p className="text-dark-green/70 max-w-2xl mx-auto text-sm sm:text-base">
              Discover our exquisite range of luxury cord sets, designed with elegance and comfort in mind.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[160px] bg-white text-sm sm:text-base">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="evening wear">Evening Wear</SelectItem>
                  <SelectItem value="summer collection">Summer Collection</SelectItem>
                  <SelectItem value="casual wear">Casual Wear</SelectItem>
                  <SelectItem value="classic collection">Classic Collection</SelectItem>
                  <SelectItem value="boho collection">Boho Collection</SelectItem>
                  <SelectItem value="modern collection">Modern Collection</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[160px] bg-white text-sm sm:text-base">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="relative w-full sm:w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark-green/40" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 bg-white text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
          
          {sortedProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-dark-green/70 text-sm sm:text-base">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
