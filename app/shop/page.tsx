import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Shop Header */}
      <section className="py-16 px-4 bg-cream/30">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-dark-green mb-4">Our Collection</h1>
          <p className="text-dark-green/70 max-w-2xl mx-auto">
            Discover our exquisite range of luxury cord sets, designed with elegance and comfort in mind.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-dark-green" />
              <span className="text-dark-green font-medium">Filter by:</span>

              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[140px] border-gold/30 rounded-2xl bg-cream/50 text-dark-green">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="summer">Summer Collection</SelectItem>
                    <SelectItem value="evening">Evening Wear</SelectItem>
                    <SelectItem value="casual">Casual Luxury</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[140px] border-gold/30 rounded-2xl bg-cream/50 text-dark-green">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">$100 - $200</SelectItem>
                    <SelectItem value="medium">$200 - $300</SelectItem>
                    <SelectItem value="high">$300+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Select>
              <SelectTrigger className="w-[180px] border-gold/30 rounded-2xl bg-cream/50 text-dark-green">
                <SelectValue placeholder="Sort by: Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link href="/shop/product" key={product.id}>
                <Card className="overflow-hidden border-none bg-cream shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-gold text-dark-green text-xs font-medium px-3 py-1 rounded-full">
                        New
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg text-dark-green">{product.name}</h3>
                    <p className="text-dark-green/60 text-sm mt-1">{product.category}</p>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-dark-green/80 font-medium">${product.price}</p>
                      <span className="text-rose-gold text-sm">View Details</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-gold/30 text-dark-green w-10 h-10">
                <ChevronDown className="h-4 w-4 rotate-90" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="outline" className="rounded-full border-gold/30 bg-gold/10 text-dark-green w-10 h-10">
                1
              </Button>
              <Button variant="outline" className="rounded-full border-gold/30 text-dark-green w-10 h-10">
                2
              </Button>
              <Button variant="outline" className="rounded-full border-gold/30 text-dark-green w-10 h-10">
                3
              </Button>
              <span className="text-dark-green/60">...</span>
              <Button variant="outline" className="rounded-full border-gold/30 text-dark-green w-10 h-10">
                8
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gold/30 text-dark-green w-10 h-10">
                <ChevronDown className="h-4 w-4 -rotate-90" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const products = [
  {
    id: 1,
    name: "Emerald Silk Cord Set",
    category: "Evening Wear",
    price: 249.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: true,
  },
  {
    id: 2,
    name: "Golden Hour Ensemble",
    category: "Summer Collection",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: true,
  },
  {
    id: 3,
    name: "Jade Velvet Collection",
    category: "Evening Wear",
    price: 279.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: 4,
    name: "Olive Elegance Set",
    category: "Casual Luxury",
    price: 259.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: 5,
    name: "Sage Comfort Cord Set",
    category: "Casual Luxury",
    price: 229.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: 6,
    name: "Emerald Evening Gown",
    category: "Evening Wear",
    price: 349.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: 7,
    name: "Forest Green Ensemble",
    category: "Summer Collection",
    price: 289.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: 8,
    name: "Mint Breeze Collection",
    category: "Summer Collection",
    price: 269.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: true,
  },
]
