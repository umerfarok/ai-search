import { Shield, Lock, Key } from 'lucide-react'

export default function Security() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Your Data, Our Priority</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
            <p>All data is encrypted in transit and at rest, ensuring maximum protection of your customers' information.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lock className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Secure Data Storage</h3>
            <p>Your data is stored in state-of-the-art, secure data centers with multiple layers of protection.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Key className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Access Control</h3>
            <p>Strict access controls and authentication measures ensure only authorized personnel can access sensitive data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

