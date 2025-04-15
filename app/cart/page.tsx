"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-ivory">
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <h1 className="font-serif text-2xl md:text-3xl text-dark-green mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <Card className="border-gold/30 p-8 text-center">
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-dark-green/40" />
              <h2 className="font-serif text-xl text-dark-green mb-2">Your cart is empty</h2>
              <p className="text-dark-green/60 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link href="/shop">
                <Button className="bg-dark-green text-ivory hover:bg-dark-green/90">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="border-gold/30">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative aspect-[3/4] w-24 overflow-hidden rounded-lg bg-cream">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-serif text-lg text-dark-green">{item.name}</h3>
                              <p className="text-dark-green/60 text-sm">{item.category}</p>
                              <p className="text-dark-green/60 text-sm mt-1">
                                Color: {item.color} | Size: {item.size}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-dark-green/40 hover:text-dark-green"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full border border-gold/30 text-dark-green flex items-center justify-center hover:border-gold"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full border border-gold/30 text-dark-green flex items-center justify-center hover:border-gold"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <p className="text-dark-green font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-gold/30 sticky top-4">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-xl text-dark-green mb-4">Order Summary</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-dark-green/60">Subtotal</span>
                        <span className="text-dark-green">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-green/60">Shipping</span>
                        <span className="text-dark-green">${shipping.toFixed(2)}</span>
                      </div>
                      <div className="border-t border-gold/30 pt-3">
                        <div className="flex justify-between">
                          <span className="font-medium text-dark-green">Total</span>
                          <span className="font-medium text-dark-green">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <Link href="/checkout-form">
                      <Button className="w-full bg-dark-green hover:bg-dark-green/90 text-ivory font-medium mt-6">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link href="/shop" className="block text-center text-dark-green/60 hover:text-dark-green text-sm mt-4">
                      Continue Shopping
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 