'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Generate unique ref code from name
function generateRefCode(name: string) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  const random = Math.floor(Math.random() * 1000)
  return `${clean}${random}`
}

export default function AffiliateSignup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [payoutMethod, setPayoutMethod] = useState('mpesa')
  const [payoutDetails, setPayoutDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // 1. Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    if (!authData.user) {
      setError('Signup failed. Try again.')
      setLoading(false)
      return
    }

    // 2. Create affiliate record
    const refCode = generateRefCode(name)
    const { error: insertError } = await supabase
      .from('affiliates')
      .insert([{
        email,
        name,
        ref_code: refCode,
        payout_method: payoutMethod,
        payout_details: payoutDetails,
        total_earned: 0,
        total_paid: 0
      }])

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
    
    // Redirect to portal after 2 seconds
    setTimeout(() => {
      router.push('/portal')
    }, 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-emerald-950 mb-2">Welcome to the Empire!</h1>
          <p className="text-emerald-700 mb-6">Your affiliate account is ready. Redirecting to your portal...</p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">⚡</div>
          <h1 className="text-3xl font-bold text-emerald-950">Join Zap Sauce™</h1>
          <p className="text-emerald-700">Earn M45+ per jar. Build your empire.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Makhauhelo Moima"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payout Method</label>
            <select
              value={payoutMethod}
              onChange={(e) => setPayoutMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            >
              <option value="mpesa">M-Pesa</option>
              <option value="eft">EFT / Bank Transfer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {payoutMethod === 'mpesa' ? 'M-Pesa Number' : 'Bank Name + Account Number'}
            </label>
            <input
              type="text"
              required
              placeholder={payoutMethod === 'mpesa' ? '266 5703 1600' : 'Lesotho Post Bank 1036202900018'}
              value={payoutDetails}
              onChange={(e) => setPayoutDetails(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-emerald-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              {payoutMethod === 'mpesa' 
                ? 'Enter your M-Pesa registered number' 
                : 'Example: Standard Bank 123456789'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Start Earning →'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-700 font-medium hover:underline">
              Login here
            </Link>
          </p>
        </div>

        <div className="mt-4 bg-emerald-50 p-4 rounded-lg">
          <p className="text-xs text-emerald-800 font-medium">💰 How you earn:</p>
          <ul className="text-xs text-emerald-700 mt-1 space-y-1">
            <li>• M45 commission per ORIGIN jar sold</li>
            <li>• M60 commission per FIREBALL bottle sold</li>
            <li>• Weekly payouts every Friday, minimum M225</li>
            <li>• Your unique link tracks all sales automatically</li>
          </ul>
        </div>
      </div>
    </div>
  )
}