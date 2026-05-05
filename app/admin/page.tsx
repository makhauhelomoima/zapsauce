'use client'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

  const paidRecipes = Object.values(RECIPES).filter(r => r.type === 'PAID' || r.type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r.type === 'FREE')
  const totalRevenue = paidRecipes.reduce((sum, r) => sum + r.price, 0)

  useEffect(() => {
    // Check if already logged in this session
    const adminAuth = sessionStorage.getItem('zap_admin_auth')
    if (adminAuth === 'HEAL120') {
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const handleLogin = () => {
    if (password === 'HEAL120') {
      sessionStorage.setItem('zap_admin_auth', 'HEAL120')
      setAuthenticated(true)
      setPassword('')
    } else {
      alert('Incorrect password. Try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('zap_admin_auth')
    setAuthenticated(false)
  }

  // Loading state
  if (loading) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="text-[#00E06D] text-2xl font-black">Loading...</div>
      </div>
    )
  }

  // Login screen
  if (!authenticated) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center p-4">
        <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 max-w-md w-full text-center shadow-2xl shadow-green-500/40">
          <h1 className="text-5xl font-black text-[#00E06D] mb-2">Zap Sauce</h1>
          <p className="text-xl text-[#00C85F] mb-8 font-bold">Admin Dashboard</p>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border-2 border-[#00A651] rounded-xl px-5 py-4 text-white text-xl mb-4 focus:border-[#00E06D] focus:outline-none text-center font-bold"
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#00A651] hover:bg-[#00C85F] text-white font-black py-4 rounded-xl text-xl shadow-2xl shadow-green-500/50 border-3 border-[#00E06D] transition-all active:scale-95"
          >
            🔓 Enter Dashboard
          </button>

          <Link href="/" className="text-gray-400 hover:text-[#00E06D] text-sm mt-6 block">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  // Authenticated - Show dashboard
  return (
    <div className="bg-black min-h-[100dvh] text-white p-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-black text-[#00E06D]">Admin Dashboard</h1>
            <p className="text-gray-400 text-base">Zap Sauce Management</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-lg text-lg">
              ← View Site
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3 rounded-lg text-lg"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Total Recipes</div>
            <div className="text-4xl font-black text-white">{Object.keys(RECIPES).length}</div>
          </div>
          <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Paid Recipes</div>
            <div className="text-4xl font-black text-white">{paidRecipes.length}</div>
          </div>
          <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Potential Revenue</div>
            <div className="text-4xl font-black text-yellow-400">M{totalRevenue}</div>
          </div>
          <div className="bg-gray-900 border-2 border-[#00E06D] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Free Samples</div>
            <div className="text-4xl font-black text-[#00E06D]">{freeRecipes.length}</div>
          </div>
        </div>

        {/* Recipes Management Table */}
        <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4">Recipe Inventory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-2 text-[#00C85F]">Name</th>
                  <th className="py-3 px-2 text-[#00C85F]">Type</th>
                  <th className="py-3 px-2 text-[#00C85F]">Price</th>
                  <th className="py-3 px-2 text-[#00C85F]">Ref</th>
                  <th className="py-3 px-2 text-[#00C85F]">USSD</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(RECIPES).map((recipe) => (
                  <tr key={recipe.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-3 px-2 text-white font-bold">{recipe.name}</td>
                    <td className="py-3 px-2">
                      <span className={`px-3 py-1 rounded-md text-xs font-black ${
                        recipe.type === 'FREE'? 'bg-[#00A651] text-white' :
                        recipe.type === 'SUBSCRIPTION'? 'bg-yellow-500 text-black' :
                        recipe.type === 'EXCLUSIVE'? 'bg-purple-600 text-white' :
                        'bg-[#00C85F] text-black'
                      }`}>
                        {recipe.type}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-white font-black">M{recipe.price}</td>
                    <td className="py-3 px-2 text-gray-400 text-sm">{recipe.ref}</td>
                    <td className="py-3 px-2 text-white font-mono text-sm">{recipe.ussd || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 Zap Sauce Admin | By Makhauhelo Moima | Password Protected 🔒</p>
        </div>
      </div>
    </div>
  )
}