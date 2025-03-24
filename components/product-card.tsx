import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { formatPrice } from "@/lib/utils"

type ProductCardProps = {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviewCount: number
}

export default function ProductCard({ id, name, price, image, rating, reviewCount }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium line-clamp-1">{name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex items-center">
              <span className="sr-only">Rating: {rating} out of 5 stars</span>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-golden text-golden" : "fill-muted text-muted"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <p className="mt-2 font-bold text-teal">{formatPrice(price)}</p>
        </div>
      </div>
    </Link>
  )
}

