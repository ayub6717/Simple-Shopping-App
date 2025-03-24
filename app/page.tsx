import Navbar from "@/components/navbar"
import ProductDisplay from "@/components/product-display"
import Reviews from "@/components/reviews"
import { CartProvider } from "@/components/cart-context"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <ProductDisplay />
          <Reviews />
        </main>
      </div>
    </CartProvider>
  )
}

