"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { CheckoutForm } from "@/components/checkout-form"

interface ProductDetailsProps {
  product: {
    id: number
    name: string
    category: string
    price: number
    description: string
    colors: string[]
    sizes: string[]
    sizeChart: {
      size: string
      chest: string
      waist: string
      hips: string
    }[]
  }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [showSizeChart, setShowSizeChart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: `/images/products/${product.id}.jpg`,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-xl font-semibold mt-2">₹{product.price}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Color</h2>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? "border-black" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Size</h2>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 border rounded-md ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button
          className="text-sm text-gray-600 underline mt-2"
          onClick={() => setShowSizeChart(!showSizeChart)}
        >
          Size Guide
        </button>
      </div>

      {showSizeChart && (
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Size Chart</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center">Size</th>
                    <th className="px-4 py-2 text-center">Chest (in)</th>
                    <th className="px-4 py-2 text-center">Waist (in)</th>
                    <th className="px-4 py-2 text-center">Hips (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.sizeChart).map(([size, measurements]) => (
                    <tr key={size}>
                      <td className="px-4 py-2 text-center">{size}</td>
                      <td className="px-4 py-2 text-center">{measurements.chest}</td>
                      <td className="px-4 py-2 text-center">{measurements.waist}</td>
                      <td className="px-4 py-2 text-center">{measurements.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        className="w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>

      {showCheckout && (
        <CheckoutForm
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  )
} 