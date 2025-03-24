import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-context"

export default function ProductNotFound() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-16 text-center flex-grow">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

