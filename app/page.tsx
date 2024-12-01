import Hero from '../components/hero'
import Features from '../components/features'
import HowItWorks from '../components/how-it-works'
import Testimonials from '../components/testimonials'
import Security from '../components/security'
import Pricing from '../components/pricing'
import CTA from '../components/cta'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  )
}

