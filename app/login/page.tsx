'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.refresh()
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🔥</div>
          <h1 className="text-3xl font-bold text-emerald-950">Zap Sauce™ Login</h1>
          <p className="text-emerald-700">Access your portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login →'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Want to earn? <Link href="/affiliate" className="text-emerald-700 font-medium">Join as affiliate</Link>
        </p>
      </div>
    </div>
  )
}