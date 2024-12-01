import { Button } from "../components/ui/button"
import { Rocket, Check } from 'lucide-react'

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Rocket className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Revolutionize Your E-commerce Search?</h2>
          <p className="max-w-[600px] text-gray-200 md:text-xl">
            Join the AI revolution and watch your sales soar. Get started with our AI-powered search today and enjoy a 30-day free trial.
          </p>
          <ul className="flex flex-col items-center space-y-2 text-left">
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No credit card required</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Full access to all features</span>
            </li>
            <li className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>24/7 support during trial</span>
            </li>
          </ul>
          <div className="w-full max-w-sm space-y-2 mt-6">
            <Button className="w-full bg-white text-primary hover:bg-gray-200 text-lg py-6">
              Start Your Free 30-Day Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

