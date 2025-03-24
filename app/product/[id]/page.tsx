import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import ProductDisplay from "@/components/product-display"
import Reviews from "@/components/reviews"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-context"
import { getProductById } from "@/data/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <ProductDisplay product={product} />
          <Reviews />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

