import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Database, Brain, Search, ShoppingCart, BarChart } from 'lucide-react'

const steps = [
  {
    icon: <Database className="w-12 h-12 text-primary" />,
    title: "Data Ingestion",
    description: "Feed your product catalog into our secure system"
  },
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "AI Processing",
    description: "Our advanced AI analyzes and understands your product data"
  },
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Smart Search",
    description: "Customers use natural language to find products"
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: "Increased Sales",
    description: "Customers find exactly what they're looking for, boosting conversions"
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Analytics & Optimization",
    description: "Gain insights and continuously improve search results"
  }
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid gap-6 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                {step.icon}
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

