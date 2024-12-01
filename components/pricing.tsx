import { Check } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For small stores just getting started",
    features: [
      "Up to 100 products",
      "Basic AI search functionality",
      "Standard customer support",
      "Monthly performance report"
    ],
    badge: "Limited Time"
  },
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small e-commerce stores",
    features: [
      "Up to 1,000 products",
      "Advanced AI search functionality",
      "24/7 customer support",
      "Weekly performance reports",
      "Basic personalization"
    ]
  },
  {
    name: "Growth",
    price: "$99",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10,000 products",
      "Advanced AI search with deep personalization",
      "Priority 24/7 customer support",
      "Daily performance reports",
      "A/B testing capabilities",
      "Multi-language support"
    ],
    badge: "Popular"
  },
  {
    name: "Pro",
    price: "$199",
    description: "For established online retailers",
    features: [
      "Up to 50,000 products",
      "Enterprise-grade AI search engine",
      "Dedicated account manager",
      "Real-time performance dashboard",
      "Advanced analytics and insights",
      "Custom integrations",
      "Voice search capability"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale e-commerce operations",
    features: [
      "Unlimited products",
      "Fully customized AI search solution",
      "24/7 premium support with SLA",
      "Advanced security features",
      "Multi-store management",
      "AI-powered inventory forecasting",
      "Exclusive beta features access"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Choose Your Plan</h2>
        <p className="text-xl text-muted-foreground text-center mb-8">Flexible pricing options to suit businesses of all sizes</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan, index) => (
            <Card key={index} className={plan.name === "Growth" ? "border-primary" : ""}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.badge && <Badge variant="secondary">{plan.badge}</Badge>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.name !== "Enterprise" ? "per month" : "pricing"}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {plan.name === "Enterprise" ? "Contact Sales" : plan.name === "Free" ? "Start Free" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All plans come with a 30-day money-back guarantee. Need help choosing? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}

