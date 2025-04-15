"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, Smartphone, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: ""
  })

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails(prev => ({ ...prev, [name]: value }))
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    // For now, we'll just show a success message
    alert("Payment successful! Thank you for your purchase.")
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-ivory">
      {/* Payment Content */}
      <div className="container mx-auto py-12 px-4">
        <Link href="/checkout-form" className="inline-flex items-center text-dark-green/70 hover:text-dark-green mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Return to Checkout
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-green mb-6">Payment Method</h2>

              <div className="bg-cream rounded-2xl p-8 shadow-md">
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-6"
                >
                  {/* Card Payment Option */}
                  <div className="flex items-start space-x-4">
                    <RadioGroupItem value="card" id="card" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="card" className="text-dark-green font-medium flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-gold" />
                        Credit/Debit Card
                      </Label>
                      
                      {paymentMethod === "card" && (
                        <div className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber" className="text-dark-green/80 text-sm">
                              Card Number
                            </Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              value={cardDetails.cardNumber}
                              onChange={handleCardChange}
                              placeholder="1234 5678 9012 3456"
                              className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cardName" className="text-dark-green/80 text-sm">
                              Name on Card
                            </Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              value={cardDetails.cardName}
                              onChange={handleCardChange}
                              placeholder="John Doe"
                              className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiry" className="text-dark-green/80 text-sm">
                                Expiry Date
                              </Label>
                              <Input
                                id="expiry"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleCardChange}
                                placeholder="MM/YY"
                                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv" className="text-dark-green/80 text-sm">
                                CVV
                              </Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardChange}
                                placeholder="123"
                                className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PhonePe Option */}
                  <div className="flex items-start space-x-4">
                    <RadioGroupItem value="phonepe" id="phonepe" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="phonepe" className="text-dark-green font-medium flex items-center">
                        <Smartphone className="h-5 w-5 mr-2 text-gold" />
                        PhonePe
                      </Label>
                      
                      {paymentMethod === "phonepe" && (
                        <div className="mt-4 p-4 bg-white rounded-xl border border-gold/30">
                          <p className="text-dark-green/80 text-sm">
                            You will be redirected to PhonePe to complete your payment.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Razorpay Option */}
                  <div className="flex items-start space-x-4">
                    <RadioGroupItem value="razorpay" id="razorpay" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="razorpay" className="text-dark-green font-medium flex items-center">
                        <Wallet className="h-5 w-5 mr-2 text-gold" />
                        Razorpay
                      </Label>
                      
                      {paymentMethod === "razorpay" && (
                        <div className="mt-4 p-4 bg-white rounded-xl border border-gold/30">
                          <p className="text-dark-green/80 text-sm">
                            You will be redirected to Razorpay to complete your payment.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </RadioGroup>

                <div className="mt-8">
                  <Button 
                    onClick={handlePayment}
                    className="w-full bg-dark-green hover:bg-dark-green/90 text-ivory font-medium rounded-xl"
                  >
                    Pay ${total.toFixed(2)}
                  </Button>
                </div>
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