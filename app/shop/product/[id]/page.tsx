"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Heart, Share2, Info, Truck, Star, Package, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

// Review interface
interface Review {
  id: number;
  rating: number;
  comment: string;
  date: string;
  userName: string;
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const { toast } = useToast()
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [showSizeChart, setShowSizeChart] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [pincode, setPincode] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("April 20, 2024")
  const [activeAccordion, setActiveAccordion] = useState<string | null>("description")
  const [userRating, setUserRating] = useState(0)
  const [userReview, setUserReview] = useState("")
  const [userName, setUserName] = useState("")
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      rating: 5,
      comment: "Absolutely love this set! The quality is exceptional and it's so comfortable to wear.",
      date: "April 15, 2024",
      userName: "Sarah J."
    },
    {
      id: 2,
      rating: 4,
      comment: "Beautiful design and great fit. The color is exactly as shown in the picture.",
      date: "April 10, 2024",
      userName: "Michael R."
    },
    {
      id: 3,
      rating: 5,
      comment: "This is my second purchase from Naaz. The craftsmanship is outstanding!",
      date: "April 5, 2024",
      userName: "Emily T."
    }
  ])
  const imageRef = useRef<HTMLDivElement>(null)

  // In a real app, fetch product data based on ID
  const product = {
    id: Number(params.id),
    name: "Emerald Silk Cord Set",
    brand: "Naaz",
    category: "Evening Wear",
    price: 249.99,
    mrp: 299.99,
    discount: 17,
    rating: 4.5,
    reviews: 128,
    isNew: true,
    description: "Our signature Emerald Silk Cord Set features a luxurious blend of silk and cotton, creating a lightweight yet elegant ensemble perfect for special occasions. The set includes a beautifully crafted top and matching pants, both adorned with our signature cord detailing.",
    features: [
      "Made from premium silk-cotton blend",
      "Signature cord detailing",
      "Comfortable elastic waistband",
      "Machine washable",
      "Available in multiple colors",
      "Sizes XS to XL"
    ],
    colors: ["Emerald", "Sapphire", "Ruby", "Amethyst"],
    sizes: [
      { size: "XS", inStock: true },
      { size: "S", inStock: true },
      { size: "M", inStock: false },
      { size: "L", inStock: true },
      { size: "XL", inStock: true }
    ],
    images: [
      "/images/products/emerald-silk-1.jpg",
      "/images/products/emerald-silk-2.jpg",
      "/images/products/emerald-silk-3.jpg"
    ],
    sizeChart: {
      "XS": { chest: "32-34", waist: "26-28", hips: "34-36" },
      "S": { chest: "34-36", waist: "28-30", hips: "36-38" },
      "M": { chest: "36-38", waist: "30-32", hips: "38-40" },
      "L": { chest: "38-40", waist: "32-34", hips: "40-42" },
      "XL": { chest: "40-42", waist: "34-36", hips: "42-44" }
    }
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Selection Required",
        description: "Please select both color and size",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity
    })

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      className: "bg-cream text-dark-green border-rose-gold",
    })

    // Redirect to cart page after adding the item
    router.push('/cart')
  }

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Selection Required",
        description: "Please select both color and size",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity
    })

    router.push('/checkout')
  }

  const handleImageZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const checkDelivery = () => {
    // In a real app, this would make an API call to check delivery
    setDeliveryDate("April 20, 2024")
  }

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section)
  }

  const handleStarClick = (rating: number) => {
    setUserRating(rating)
  }

  const handleSubmitReview = () => {
    if (userRating === 0) {
      alert("Please select a rating")
      return
    }
    
    if (!userName.trim()) {
      alert("Please enter your name")
      return
    }
    
    if (!userReview.trim()) {
      alert("Please write a review")
      return
    }

    const newReview: Review = {
      id: reviews.length + 1,
      rating: userRating,
      comment: userReview,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      userName: userName
    }

    setReviews([newReview, ...reviews])
    setUserRating(0)
    setUserReview("")
    setUserName("")
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-dark-green/70">
          <Link href="/" className="hover:text-dark-green">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/shop" className="hover:text-dark-green">Shop</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-dark-green">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div 
              ref={imageRef}
              className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-md cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleImageZoom}
            >
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
              {product.isNew && (
                <span className="absolute top-3 right-3 bg-gold text-dark-green text-xs font-medium px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-green p-2 rounded-full shadow-md"
                onClick={prevImage}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark-green p-2 rounded-full shadow-md"
                onClick={nextImage}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow ${
                    currentImageIndex === index ? "ring-2 ring-gold" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Sticky Panel */}
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Brand & Title */}
            <div>
              <p className="text-rose-gold text-sm font-medium mb-1">{product.brand}</p>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-dark-green mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-gold fill-gold"
                          : "text-dark-green/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-dark-green/60 text-sm">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <p className="text-2xl sm:text-3xl font-medium text-dark-green">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-dark-green/60 line-through">
                  ${product.mrp.toFixed(2)}
                </p>
                <span className="text-rose-gold text-sm font-medium">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-dark-green/60 text-sm">
                EMI starting at $83/month
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-dark-green font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 rounded-lg border text-sm ${
                      selectedColor === color
                        ? "border-gold bg-gold/10 text-dark-green font-medium"
                        : "border-gold/30 text-dark-green/70 hover:border-gold/50"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-dark-green font-medium">Size</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-rose-gold text-sm flex items-center hover:underline">
                      <Info className="h-4 w-4 mr-1" />
                      Size Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Size Chart (inches)</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gold/20">
                            <th className="py-2 px-3 text-left text-dark-green/70">Size</th>
                            <th className="py-2 px-3 text-left text-dark-green/70">Chest</th>
                            <th className="py-2 px-3 text-left text-dark-green/70">Waist</th>
                            <th className="py-2 px-3 text-left text-dark-green/70">Hips</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(product.sizeChart).map(([size, measurements]) => (
                            <tr key={size} className="border-b border-gold/10">
                              <td className="py-2 px-3 font-medium">{size}</td>
                              <td className="py-2 px-3">{measurements.chest}</td>
                              <td className="py-2 px-3">{measurements.waist}</td>
                              <td className="py-2 px-3">{measurements.hips}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(({ size, inStock }) => (
                  <button
                    key={size}
                    disabled={!inStock}
                    className={`w-12 h-12 flex items-center justify-center rounded-lg border text-sm ${
                      !inStock
                        ? "border-dark-green/20 text-dark-green/40 cursor-not-allowed"
                        : selectedSize === size
                        ? "border-gold bg-gold/10 text-dark-green font-medium"
                        : "border-gold/30 text-dark-green/70 hover:border-gold/50"
                    }`}
                    onClick={() => inStock && setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Section */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="h-5 w-5 text-dark-green" />
                <h3 className="text-dark-green font-medium">Delivery</h3>
              </div>
              <div className="flex gap-2 mb-3">
                <Input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="outline"
                  onClick={checkDelivery}
                  className="whitespace-nowrap"
                >
                  Check
                </Button>
              </div>
              <div className="flex items-center gap-2 text-dark-green/70 text-sm">
                <Package className="h-4 w-4" />
                <span>Get it by {deliveryDate}</span>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-dark-green font-medium mb-2">Quantity</h3>
              <div className="flex items-center w-32">
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-l-lg border border-gold/30 text-dark-green hover:bg-gold/10"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-10 text-center border-x-0 border-gold/30 rounded-none focus:ring-0"
                  min="1"
                />
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-r-lg border border-gold/30 text-dark-green hover:bg-gold/10"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full bg-dark-green hover:bg-dark-green/90 text-white h-12 text-base"
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedSize}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline"
                className="w-full border-gold/30 text-dark-green hover:bg-gold/10 h-12 text-base"
                onClick={handleBuyNow}
                disabled={!selectedColor || !selectedSize}
              >
                Buy Now
              </Button>
              <div className="flex gap-4 justify-center">
                <button className="text-dark-green/70 hover:text-dark-green flex items-center">
                  <Share2 className="h-5 w-5 mr-1" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>

            {/* Return Policy */}
            <div className="text-dark-green/60 text-sm">
              <p>✓ 30 Days Return Policy</p>
              <p>✓ Free Shipping on orders above $200</p>
            </div>
          </div>
        </div>

        {/* Product Information Accordion */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            {/* Description Accordion */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleAccordion("description")}
                aria-expanded={activeAccordion === "description"}
              >
                <h3 className="text-dark-green font-medium">Description</h3>
                {activeAccordion === "description" ? (
                  <ChevronUp className="h-5 w-5 text-dark-green/60" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-dark-green/60" />
                )}
              </button>
              {activeAccordion === "description" && (
                <div className="px-4 pb-4 text-dark-green/80">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

            {/* Features Accordion */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleAccordion("features")}
                aria-expanded={activeAccordion === "features"}
              >
                <h3 className="text-dark-green font-medium">Features</h3>
                {activeAccordion === "features" ? (
                  <ChevronUp className="h-5 w-5 text-dark-green/60" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-dark-green/60" />
                )}
              </button>
              {activeAccordion === "features" && (
                <div className="px-4 pb-4">
                  <ul className="list-disc pl-5 space-y-2 text-dark-green/80">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping Accordion */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleAccordion("shipping")}
                aria-expanded={activeAccordion === "shipping"}
              >
                <h3 className="text-dark-green font-medium">Shipping & Returns</h3>
                {activeAccordion === "shipping" ? (
                  <ChevronUp className="h-5 w-5 text-dark-green/60" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-dark-green/60" />
                )}
              </button>
              {activeAccordion === "shipping" && (
                <div className="px-4 pb-4 text-dark-green/80">
                  <p>
                    Free shipping on all orders over $200. Standard delivery takes 3-5 business days. 
                    Express shipping is available at checkout for an additional fee.
                  </p>
                  <p className="mt-4">
                    All items are carefully packaged to ensure they arrive in perfect condition. 
                    If you're not completely satisfied with your purchase, we offer a 30-day return policy.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-dark-green mb-6">Customer Reviews</h2>
          
          {/* Review Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-dark-green font-medium mb-4">Write a Review</h3>
            
            <div className="space-y-4">
              {/* Star Rating */}
              <div>
                <label htmlFor="rating" className="block text-sm text-dark-green/70 mb-2">
                  Your Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      className="focus:outline-none"
                      aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= userRating
                            ? "text-gold fill-gold"
                            : "text-dark-green/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm text-dark-green/70 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>
              
              {/* Review Textarea */}
              <div>
                <label htmlFor="review" className="block text-sm text-dark-green/70 mb-2">
                  Your Review
                </label>
                <Textarea
                  id="review"
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  placeholder="Write your review here..."
                  className="w-full min-h-[100px]"
                />
              </div>
              
              {/* Submit Button */}
              <Button
                onClick={handleSubmitReview}
                className="bg-dark-green hover:bg-dark-green/90 text-white"
              >
                Submit Review
              </Button>
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-dark-green">{review.userName}</h4>
                    <p className="text-sm text-dark-green/60">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-gold fill-gold"
                            : "text-dark-green/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-dark-green/80">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 