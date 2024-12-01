import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Zap, TrendingUp, Search, ShoppingCart, Lock, BarChart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Lightning Fast",
      description: "Our AI delivers search results in milliseconds, enhancing user experience and reducing bounce rates."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Increased Sales",
      description: "Customers find what they want quicker, leading to higher conversion rates and increased average order value."
    },
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Intelligent Search",
      description: "Understands context and intent, providing more accurate results and reducing search abandonment."
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "Personalized Results",
      description: "Tailors search results based on user behavior and preferences, improving customer loyalty and retention."
    },
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Data Security",
      description: "Advanced encryption and security measures ensure your customers' data remains private and protected."
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Actionable Insights",
      description: "Gain valuable insights into customer behavior and preferences to optimize your product offerings."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Our AI Search?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

