import { Check } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small e-commerce stores",
    features: [
      "Up to 1,000 products",
      "Basic AI search functionality",
      "24/7 customer support",
      "Monthly performance reports"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10,000 products",
      "Advanced AI search with personalization",
      "Priority 24/7 customer support",
      "Weekly performance reports",
      "A/B testing capabilities"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale e-commerce operations",
    features: [
      "Unlimited products",
      "Fully customized AI search solution",
      "Dedicated account manager",
      "Real-time performance dashboard",
      "Advanced analytics and insights",
      "Custom integrations"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Plan</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={index === 1 ? "border-primary" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.name !== "Enterprise" ? "per month" : "pricing"}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

