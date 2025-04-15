"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

// Mock cart data - in a real app, this would come from a cart context or state management
const cartItems = [
  {
    id: 1,
    name: "Emerald Silk Cord Set",
    category: "Evening Wear",
    price: 249.99,
    image: "/placeholder.svg?height=600&width=450",
    color: "Emerald Green",
    size: "M",
    quantity: 1
  },
  {
    id: 2,
    name: "Golden Hour Ensemble",
    category: "Summer Collection",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=450",
    color: "Royal Blue",
    size: "L",
    quantity: 1
  }
]

export default function CheckoutFormPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate the form and save the data
    // For now, we'll just redirect to the payment page
    router.push("/payment")
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-ivory">
      {/* Checkout Form Content */}
      <div className="container mx-auto py-12 px-4">
        <Link href="/cart" className="inline-flex items-center text-dark-green/70 hover:text-dark-green mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Return to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-green mb-6">Shipping Information</h2>

              <div className="bg-cream rounded-2xl p-8 shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-dark-green/80 text-sm">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-dark-green/80 text-sm">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-dark-green/80 text-sm">
                      Delivery Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete delivery address"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-dark-green/80 text-sm">
                        City
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-dark-green/80 text-sm">
                        State
                      </Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter your state"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pincode" className="text-dark-green/80 text-sm">
                      Pincode
                    </Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your pincode"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-dark-green hover:bg-dark-green/90 text-ivory font-medium rounded-xl"
                  >
                    Buy Now
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="font-serif text-2xl text-dark-green mb-6">Order Summary</h2>

            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <div className="space-y-6">
                {/* Order Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-dark-green font-medium">{item.name}</h3>
                        <p className="text-dark-green/60 text-sm">Size: {item.size}</p>
                        <div className="flex justify-between mt-2">
                          <p className="text-dark-green/60 text-sm">Qty: {item.quantity}</p>
                          <p className="text-dark-green font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Subtotal</span>
                      <span className="text-dark-green">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Shipping</span>
                      <span className="text-dark-green">${shipping.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <div className="flex justify-between font-medium">
                    <span className="text-dark-green">Total</span>
                    <span className="text-dark-green text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 