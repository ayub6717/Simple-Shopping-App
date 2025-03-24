"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import Image from "next/image"

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "2 months ago",
    rating: 5,
    title: "Perfect fit and great quality",
    content:
      "I've been looking for a good quality t-shirt for a while and this one exceeded my expectations. The fabric is soft yet durable, and the fit is perfect. Highly recommend!",
    helpful: 24,
    images: ["/placeholder.svg?height=100&width=100&text=Review+Image"],
  },
  {
    id: 2,
    author: "Sam Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "1 month ago",
    rating: 4,
    title: "Great shirt, slightly large",
    content:
      "The quality is excellent and the material feels premium. My only issue is that it runs slightly larger than expected. I would recommend sizing down if you prefer a more fitted look.",
    helpful: 18,
    images: [],
  },
  {
    id: 3,
    author: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "3 weeks ago",
    rating: 5,
    title: "Best t-shirt I've owned",
    content:
      "This is hands down the best t-shirt I've ever purchased. The cotton is incredibly soft and it washes well without losing shape. Will definitely buy more colors!",
    helpful: 32,
    images: [
      "/placeholder.svg?height=100&width=100&text=Review+Image+1",
      "/placeholder.svg?height=100&width=100&text=Review+Image+2",
    ],
  },
]

export default function Reviews() {
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([])

  const markHelpful = (reviewId: number) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId])
    }
  }

  return (
    <div className="mt-16 border-t pt-10">
      <Tabs defaultValue="reviews">
        <TabsList className="mb-6" aria-label="Product information">
          <TabsTrigger value="reviews" className="flex gap-2">
            <MessageSquare className="h-4 w-4" />
            Reviews ({reviews.length})
          </TabsTrigger>
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <Button>Write a Review</Button>
          </div>

          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-8">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{review.author}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="sr-only">Rating: {review.rating} out of 5 stars</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-golden text-golden" : "fill-muted text-muted"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium">{review.title}</h4>
                  <p className="mt-2 text-muted-foreground">{review.content}</p>

                  {review.images.length > 0 && (
                    <div className="mt-4 flex gap-2">
                      {review.images.map((image, index) => (
                        <div key={index} className="relative h-20 w-20 overflow-hidden rounded-md border">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Review image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 flex items-center gap-1 text-sm"
                    onClick={() => markHelpful(review.id)}
                    disabled={helpfulReviews.includes(review.id)}
                    aria-pressed={helpfulReviews.includes(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    <span>Helpful ({helpfulReviews.includes(review.id) ? review.helpful + 1 : review.helpful})</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="prose max-w-none">
            <h3>Product Details</h3>
            <ul>
              <li>100% organic cotton</li>
              <li>Regular fit</li>
              <li>Crew neck</li>
              <li>Short sleeves</li>
              <li>Machine washable at 30°C</li>
              <li>Made in Portugal</li>
            </ul>
            <h3>Fabric & Care</h3>
            <p>
              Our premium cotton is sourced from sustainable farms and processed without harmful chemicals. The fabric
              is pre-washed for extra softness and to minimize shrinkage.
            </p>
            <p>
              To keep your t-shirt looking its best, machine wash cold with similar colors and tumble dry on low heat.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="shipping">
          <div className="prose max-w-none">
            <h3>Shipping Information</h3>
            <p>
              We offer free standard shipping on all orders over $100. Standard shipping takes 3-5 business days.
              Express shipping is available for an additional fee and takes 1-2 business days.
            </p>
            <h3>Return Policy</h3>
            <p>
              We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with the original tags
              attached. Return shipping is free for customers in the United States.
            </p>
            <p>
              To initiate a return, please visit your order history in your account or contact our customer service
              team.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

