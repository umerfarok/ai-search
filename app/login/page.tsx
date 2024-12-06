'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
          Sign in with Google
        </Button>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

