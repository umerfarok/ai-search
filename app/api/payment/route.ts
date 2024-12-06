import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import clientPromise from '../../../lib/mongodb'

export async function POST(req: Request) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { planId } = await req.json()

  // Dummy function to simulate payment processing
  const processPayment = async (amount: number) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000)
    })
  }

  let amount
  switch (planId) {
    case 'starter':
      amount = 49
      break
    case 'growth':
      amount = 99
      break
    case 'pro':
      amount = 199
      break
    default:
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const paymentSuccessful = await processPayment(amount)

  if (paymentSuccessful) {
    const client = await clientPromise
    const db = client.db()
    await db.collection('users').updateOne(
      { email: session.user?.email },
      { $set: { plan: planId } }
    )

    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: 'Payment failed' }, { status: 400 })
  }
}

