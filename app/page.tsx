import Navbar from "@/components/navbar"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"
import { CartProvider } from "@/components/cart-context"
import { products } from "@/data/products"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

