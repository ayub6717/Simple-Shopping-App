"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import VariantSelector from "./variant-selector"
import { formatPrice } from "@/lib/utils"
import { Minus, Plus, Star } from "lucide-react"
import type { Product } from "@/data/products"

type ProductDisplayProps = {
  product: Product
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor.name,
      quantity: quantity,
      image: product.images[0],
    })
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 py-6">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg border" aria-hidden="true">
          <Image
            src={product.images[activeImage] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-4 gap-2" role="group" aria-label="Product image gallery">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square overflow-hidden rounded-md border ${
                activeImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`View product image ${index + 1}`}
              aria-current={activeImage === index ? "true" : "false"}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <span className="sr-only">Rating: {product.rating} out of 5 stars</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-golden text-golden" : "fill-muted text-muted"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold mt-4">{formatPrice(product.price)}</p>
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        {/* Variant Selectors */}
        <VariantSelector
          sizes={product.sizes}
          colors={product.colors}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          onSizeChange={setSelectedSize}
          onColorChange={setSelectedColor}
        />

        {/* Quantity Selector */}
        <div className="space-y-2">
          <label htmlFor="quantity-input" className="text-sm font-medium">
            Quantity
          </label>
          <div className="flex items-center" role="group" aria-labelledby="quantity-label">
            <span id="quantity-label" className="sr-only">
              Product quantity
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-r-none"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div
              id="quantity-input"
              className="flex h-9 w-12 items-center justify-center border-y"
              aria-live="polite"
              aria-atomic="true"
            >
              {quantity}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-l-none"
              onClick={() => setQuantity(quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button size="lg" className="w-full bg-teal hover:bg-teal/90 text-white" onClick={handleAddToCart}>
          Add to Cart
        </Button>

        {/* Additional Info */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Free shipping on orders over $100</p>
          <p>30-day easy returns</p>
        </div>
      </div>
    </div>
  )
}

