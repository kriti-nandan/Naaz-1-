import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gold/20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-dark-green">Naaz</h1>
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-gold" />
              <span className="text-dark-green/80 text-sm">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <div className="container mx-auto py-12 px-4">
        <Link href="/shop" className="inline-flex items-center text-dark-green/70 hover:text-dark-green mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Return to Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Payment Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-dark-green mb-6">Payment Details</h2>

              <div className="bg-cream rounded-2xl p-8 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium text-dark-green">Credit Card Information</h3>
                  <div className="flex gap-2">
                    <CreditCard className="h-5 w-5 text-gold" />
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="card-name" className="text-dark-green/80 text-sm">
                      Cardholder Name
                    </label>
                    <Input
                      id="card-name"
                      placeholder="Name as it appears on card"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="card-number" className="text-dark-green/80 text-sm">
                      Card Number
                    </label>
                    <Input
                      id="card-number"
                      placeholder="•••• •••• •••• ••••"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="expiry" className="text-dark-green/80 text-sm">
                        Expiration Date
                      </label>
                      <Input
                        id="expiry"
                        placeholder="MM / YY"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cvv" className="text-dark-green/80 text-sm">
                        Security Code (CVV)
                      </label>
                      <Input
                        id="cvv"
                        placeholder="•••"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-dark-green mb-6">Billing Address</h2>

              <div className="bg-cream rounded-2xl p-8 shadow-md">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-dark-green/80 text-sm">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-dark-green/80 text-sm">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="text-dark-green/80 text-sm">
                      Street Address
                    </label>
                    <Input
                      id="address"
                      className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-dark-green/80 text-sm">
                        City
                      </label>
                      <Input
                        id="city"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="postal-code" className="text-dark-green/80 text-sm">
                        Postal Code
                      </label>
                      <Input
                        id="postal-code"
                        className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-dark-green/80 text-sm">
                        Country
                      </label>
                      <Select>
                        <SelectTrigger className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="state" className="text-dark-green/80 text-sm">
                        State / Province
                      </label>
                      <Select>
                        <SelectTrigger className="border-gold/30 rounded-xl focus:border-gold focus:ring-gold/30 bg-white">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="shipping"
                      className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:text-dark-green mt-1"
                    />
                    <label htmlFor="shipping" className="text-sm text-dark-green/70 leading-tight">
                      Shipping address is the same as billing address
                    </label>
                  </div>
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
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
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
                      <span className="text-dark-green">$529.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Shipping</span>
                      <span className="text-dark-green">$12.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-green/70">Tax</span>
                      <span className="text-dark-green">$43.20</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4">
                  <div className="flex justify-between font-medium">
                    <span className="text-dark-green">Total</span>
                    <span className="text-dark-green text-lg">$585.18</span>
                  </div>
                </div>

                <Button className="bg-gold hover:bg-gold/90 text-dark-green font-medium rounded-xl w-full">
                  Complete Purchase
                </Button>

                <p className="text-dark-green/60 text-xs text-center">
                  By completing your purchase, you agree to our{" "}
                  <Link href="/terms" className="text-rose-gold hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-rose-gold hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const orderItems = [
  {
    id: 1,
    name: "Emerald Silk Cord Set",
    size: "Medium",
    quantity: 1,
    price: 249.99,
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 2,
    name: "Golden Hour Ensemble",
    size: "Small",
    quantity: 1,
    price: 279.99,
    image: "/placeholder.svg?height=200&width=150",
  },
]
