"use client"

import { useCart } from "./cart-context"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"

export default function CartDropdown({ onClose }: { onClose: () => void }) {
  const { items, removeFromCart, getCartTotal } = useCart()

  return (
    <div
      className="absolute right-0 top-10 z-50 w-80 rounded-md border bg-background p-4 shadow-md"
      role="dialog"
      aria-label="Shopping cart"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Your Cart</h3>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close cart">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground py-8 text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-3 max-h-[300px] overflow-auto">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3 py-2 border-b">
                <div className="h-16 w-16 rounded-md overflow-hidden relative flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{item.name}</h4>
                  <div className="text-xs text-muted-foreground">
                    <span>Size: {item.size}</span> • <span>Color: {item.color}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm">
                      {formatPrice(item.price)} × {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            <Button className="w-full bg-teal hover:bg-teal/90 text-white">Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}

