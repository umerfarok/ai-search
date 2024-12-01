'use client'

import { useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    avatar: "/avatar1.png",
    company: "TechCorp",
    testimonial: "Since implementing this AI search, our sales have increased by 30%. Customers are finding products faster than ever!"
  },
  {
    name: "Jane Smith",
    avatar: "/avatar2.png",
    company: "E-Shop Inc.",
    testimonial: "The AI understands exactly what our customers are looking for. It's like having a personal shopping assistant for each visitor."
  },
  {
    name: "Robert Johnson",
    avatar: "/avatar3.png",
    company: "MegaMart",
    testimonial: "Our customer satisfaction scores have skyrocketed. The AI-powered search has transformed our e-commerce experience."
  },
  {
    name: "Emily Brown",
    avatar: "/avatar4.png",
    company: "FashionFinder",
    testimonial: "The personalized search results have significantly improved our conversion rates. It's a game-changer for our business."
  },
  {
    name: "Michael Lee",
    avatar: "/avatar5.png",
    company: "GadgetWorld",
    testimonial: "We've seen a 25% reduction in search abandonment since implementing this AI search. Our customers love how easy it is to find what they need."
  }
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = Array.from(scrollContainer.children)
      scrollContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollContainer.appendChild(duplicatedItem)
      })

      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }

      const scrollInterval = setInterval(scroll, 50)

      return () => clearInterval(scrollInterval)
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ width: "200%" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-[350px] flex-shrink-0">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

