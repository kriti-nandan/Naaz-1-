import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ProductCarousel from "@/components/ui/ProductCarousel"


export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-dark-green/10 z-10" />
        <div className="relative h-[80vh] w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Elegant woman in luxury cord set"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-dark-green mb-6 max-w-4xl">
            Timeless Elegance for the Modern Woman
          </h1>
          <p className="text-dark-green/80 text-lg md:text-xl max-w-2xl mb-8 font-light">
            Discover our exquisite collection of luxury cord sets designed for sophistication and comfort
          </p>
          <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium px-8 py-6 text-lg rounded-2xl">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-dark-green mb-4">Featured Collections</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <Link href="/shop" key={collection.id}>
                <Card className="overflow-hidden border-none bg-cream shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-2">{collection.name}</h3>
                      <p className="text-white/80 mb-4">{collection.description}</p>
                      <span className="text-rose-gold flex items-center text-sm font-medium">
                        View Collection <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* Brand Story Preview */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-dark-green mb-6">The Naaz Story</h2>
              <p className="text-dark-green/80 mb-6 leading-relaxed">
                Founded with a passion for timeless elegance, Naaz represents the perfect harmony between traditional
                craftsmanship and contemporary design. Our luxury cord sets are meticulously crafted using only the
                finest materials, ensuring both comfort and sophistication.
              </p>
              <p className="text-dark-green/80 mb-8 leading-relaxed">
                Each piece in our collection tells a story of dedication to quality and attention to detail, embodying
                our commitment to creating fashion that transcends seasons and trends.
              </p>
              <Link href="/about">
                <Button className="bg-transparent hover:bg-gold/10 text-dark-green border border-gold rounded-2xl">
                  Read Our Story
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=800&width=640" alt="Naaz atelier" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cream rounded-2xl shadow-md hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-2xl shadow-sm hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-dark-green/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-green mb-4">Join Our Community</h2>
          <p className="text-dark-green/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and styling
            tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-2xl border border-gold/30 focus:border-gold focus:outline-none bg-white"
            />
            <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-2xl">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const featuredCollections = [
  {
    id: 1,
    name: "Summer Elegance",
    description: "Lightweight cord sets for warm days",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 2,
    name: "Evening Soirée",
    description: "Sophisticated ensembles for special occasions",
    image: "/placeholder.svg?height=600&width=450",
  },
  {
    id: 3,
    name: "Casual Luxury",
    description: "Effortless style for everyday moments",
    image: "/placeholder.svg?height=600&width=450",
  },
]

const newArrivals = [
  {
    id: 1,
    name: "Emerald Silk Cord Set",
    price: 249.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 2,
    name: "Golden Hour Ensemble",
    price: 299.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 3,
    name: "Jade Velvet Collection",
    price: 279.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: 4,
    name: "Olive Elegance Set",
    price: 259.99,
    image: "/placeholder.svg?height=500&width=500",
  },
]
