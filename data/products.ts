export type Product = {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  sizes: string[]
  colors: { name: string; value: string }[]
  rating: number
  reviewCount: number
}

export const products: Product[] = [
  {
    id: "prod_01",
    name: "Premium Cotton T-Shirt",
    price: 39.99,
    description:
      "Our premium cotton t-shirt is made from 100% organic cotton for maximum comfort and durability. Perfect for everyday wear, this versatile piece features a classic fit and comes in a variety of colors to match your style.",
    images: [
      "/placeholder.svg?height=600&width=500",
      "/placeholder.svg?height=600&width=500&text=Image+2",
      "/placeholder.svg?height=600&width=500&text=Image+3",
      "/placeholder.svg?height=600&width=500&text=Image+4",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Teal", value: "#008080" },
      { name: "Maroon", value: "#800000" },
      { name: "Pink", value: "#FF69B4" },
    ],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "prod_02",
    name: "Slim Fit Jeans",
    price: 59.99,
    description:
      "These slim fit jeans are designed for comfort and style. Made from premium denim with a touch of stretch, they provide a modern silhouette while allowing freedom of movement. Perfect for casual everyday wear.",
    images: [
      "/placeholder.svg?height=600&width=500&text=Jeans",
      "/placeholder.svg?height=600&width=500&text=Jeans+2",
      "/placeholder.svg?height=600&width=500&text=Jeans+3",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Teal", value: "#008080" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
    ],
    rating: 4.5,
    reviewCount: 89,
  },
  {
    id: "prod_03",
    name: "Casual Hoodie",
    price: 49.99,
    description:
      "Stay warm and stylish with our casual hoodie. Made from a soft cotton blend, this hoodie features a comfortable fit, adjustable drawstring hood, and kangaroo pocket. Perfect for layering or wearing on its own.",
    images: [
      "/placeholder.svg?height=600&width=500&text=Hoodie",
      "/placeholder.svg?height=600&width=500&text=Hoodie+2",
      "/placeholder.svg?height=600&width=500&text=Hoodie+3",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Teal", value: "#008080" },
      { name: "Maroon", value: "#800000" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
    ],
    rating: 4.7,
    reviewCount: 102,
  },
  {
    id: "prod_04",
    name: "Summer Dress",
    price: 45.99,
    description:
      "This lightweight summer dress is perfect for warm days. Made from breathable fabric with a flowy silhouette, it features a flattering cut and comfortable fit. Dress it up with accessories or keep it casual.",
    images: [
      "/placeholder.svg?height=600&width=500&text=Dress",
      "/placeholder.svg?height=600&width=500&text=Dress+2",
      "/placeholder.svg?height=600&width=500&text=Dress+3",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Pink", value: "#FF69B4" },
      { name: "Teal", value: "#008080" },
      { name: "White", value: "#FFFFFF" },
    ],
    rating: 4.6,
    reviewCount: 78,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

