import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">© 2023 AI Search. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link>
        </nav>
      </div>
    </footer>
  )
}

