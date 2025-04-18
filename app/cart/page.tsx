"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock cart data - in a real app, this would come from a cart context or state management
const initialCartItems = [
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

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 200 ? 0 : 15
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-serif text-dark-green mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-32 h-32">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-dark-green">{item.name}</h3>
                            <p className="text-sm text-dark-green/70">{item.category}</p>
                            <p className="text-sm text-dark-green/70">
                              {item.color} • Size {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-dark-green/50 hover:text-rose-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-gold/30 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 text-dark-green/70 hover:text-dark-green"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1 text-dark-green">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 text-dark-green/70 hover:text-dark-green"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="font-medium text-dark-green">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-medium text-dark-green mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Subtotal</span>
                      <span className="text-dark-green">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Shipping</span>
                      <span className="text-dark-green">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t border-gold/20 pt-3 flex justify-between">
                      <span className="font-medium text-dark-green">Total</span>
                      <span className="font-medium text-dark-green">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Link href="/checkout">
                    <Button className="w-full bg-dark-green hover:bg-dark-green/90 text-white">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <div className="mt-4 text-center">
                    <Link href="/shop" className="text-sm text-dark-green/70 hover:text-rose-gold">
                      Continue Shopping
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-dark-green/30 mx-auto mb-4" />
            <h2 className="text-xl font-medium text-dark-green mb-2">Your cart is empty</h2>
            <p className="text-dark-green/70 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/shop">
              <Button className="bg-dark-green hover:bg-dark-green/90 text-white">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
} 