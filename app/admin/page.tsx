'use client'

import { useState, useEffect } from 'react'

export const dynamic = 'force-dynamic'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('zap-admin-unlocked') === 'true') {
      setUnlocked(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // YOUR PASSWORD - CHANGE THIS AFTER FIRST LOGIN MY QUEEN
    if (password === 'Zapsauce2026!') {
      setUnlocked(true)
      sessionStorage.setItem('zap-admin-unlocked', 'true')
      setError('')
    } else {
      setError('Wrong password. Lightning denied. ⚡')
    }
  }

  const handleLogout = () => {
    setUnlocked(false)
    sessionStorage.removeItem('zap-admin-unlocked')
    setPassword('')
  }

  if (!unlocked) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center p-4">
        <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black text-[#00A651] mb-2">ADMIN VAULT 🔐</h1>
            <p className="text-gray-400">Enter password to unlock</p>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full bg-black border-[#00A651]/50 rounded-lg px-4 py-3 text-white mb-4 focus:border-[#00E06D] outline-none"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg hover:bg-[#00E06D] transition"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="text-gray-600 text-xs text-center mt-6">
            Zap Sauce Empire. Authorized only.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-[#00A651]">ADMIN DASHBOARD ⚡</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white font-black px-4 py-2 rounded-lg hover:bg-red-500 transition text-sm"
          >
            Lock Vault
          </button>
        </div>

        <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6">
          <h2 className="text-xl font-black text-yellow-500 mb-2">Password Security Note</h2>
          <p className="text-gray-400 text-sm">
            Change 'Zapsauce2026!' in the code to something new now that you know it works.
            For production: Use Supabase Auth + environment variables. This gate keeps 99% out.
          </p>
        </div>
      </div>
    </div>
  )
}