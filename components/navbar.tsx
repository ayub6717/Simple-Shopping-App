"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-context"
import CartDropdown from "./cart-dropdown"

export default function Navbar() {
  const { getCartCount } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-teal">StyleShop</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-teal">
              Home
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-teal/10"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-medium text-white">
                  {getCartCount()}
                </span>
              )}
            </Button>
            {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-teal"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

