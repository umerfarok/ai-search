import { Button } from "../components/ui/button"
import { Database, Brain, Search, ShoppingCart, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered E-commerce Search Revolution
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl dark:text-gray-400">
                Elevate your online store with our cutting-edge AI search technology. Boost sales, enhance customer satisfaction, and stay ahead of the competition.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-primary hover:bg-gray-200">Get Started</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center animate-bounce-delay-0">
                <Database className="w-12 h-12 text-primary" />
                <span className="text-sm font-medium mt-2">Product Data</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
              <div className="flex flex-col items-center animate-bounce-delay-1">
                <Brain className="w-12 h-12 text-primary" />
                <span className="text-sm font-medium mt-2">AI Model</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
              <div className="flex flex-col items-center animate-bounce-delay-2">
                <Search className="w-12 h-12 text-primary" />
                <span className="text-sm font-medium mt-2">Smart Search</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
              <div className="flex flex-col items-center animate-bounce-delay-3">
                <ShoppingCart className="w-12 h-12 text-primary" />
                <span className="text-sm font-medium mt-2">Increased Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

