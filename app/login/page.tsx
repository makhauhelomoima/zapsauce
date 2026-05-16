'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers/nextjs'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      alert(error.message)
      return
    }

    // Check role and redirect
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profile?.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/customer')
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-gray-900 p-8 rounded-2xl border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">Zap Sauce™ Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-emerald-500"
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-emerald-500"
          required
        />
        
        <button type="submit" className="w-full bg-emerald-600 py-3 rounded-lg font-bold hover:bg-emerald-700">
          Sign In
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          No account? Sign up first in Supabase Auth
        </p>
      </form>
    </div>
  )
}