'use client'

import { useState, useEffect } from 'react'
import { recipes, packages } from '../data/recipes'
import Link from 'next/link'

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    const logged = localStorage.getItem('zapAdminLogged')
    if (logged === 'true') setIsLoggedIn(true)
  }, [])

  const handleLogin = () => {
    if (password === 'HEAL120') {
      localStorage.setItem('zapAdminLogged', 'true')
      setIsLoggedIn(true)
      setPassword('')
    } else {
      alert('Wrong password. Try again.')
      setPassword('')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="bg-gray-900 border border-[#00A651]/40 rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-[#00E06D] mb-2 text-center">Zap Sauce Admin</h1>
          <p className="text-sm text-gray-400 mb-6 text-center">Enter your password to access dashboard</p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-black border border-gray-600 rounded px-4 py-3 mb-4 text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-3 rounded"
          >
            Login
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">Only Makhauhelo has access</p>
        </div>
      </div>
    )
  }

  const paidRecipes = recipes.filter(r => r.price > 0)
  const totalValue = paidRecipes.reduce((sum, r) => sum + r.price, 0)
  const affiliateRecipes = recipes.filter(r => r.affiliationEligible)

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce Admin</span>
            <span className="text-xs text-[#00A651]">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-[#00A651]">View Store</Link>
            <Link href="/portal" className="text-xs text-gray-400 hover:text-[#00A651]">Customer Portal</Link>
            <button
              onClick={() => {
                localStorage.removeItem('zapAdminLogged')
                setIsLoggedIn(false)
              }}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#00E06D] mb-8">Empire Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Total Products</div>
            <div className="text-3xl font-black text-white">21</div>
            <div className="text-xs text-[#00A651]">2 Free + 19 Paid</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Store Value</div>
            <div className="text-3xl font-black text-white">M{totalValue}</div>
            <div className="text-xs text-[#00A651]">If sold separately</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Affiliate Items</div>
            <div className="text-3xl font-black text-white">{affiliateRecipes.length}</div>
            <div className="text-xs text-[#00A651]">30% Commission</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">Franchise Kit</div>
            <div className="text-3xl font-black text-white">M{packages.franchiseKit.price}</div>
            <div className="text-xs text-[#00A651]">18 Recipes + Support</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Monthly Heal</h3>
            <div className="text-2xl font-black text-[#00E06D] mb-2">M{packages.monthlyHeal.price}/mo</div>
            <p className="text-sm text-gray-300 mb-3">{packages.monthlyHeal.description}</p>
            <div className="text-xs text-[#00A651]">USSD: *200#1*1*57031600*{packages.monthlyHeal.price}#</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00E06D]/50 rounded-xl p-6 relative">
            <div className="absolute -top-3 -right-3 bg-[#00E06D] text-black text-xs font-black px-3 py-1 rounded-full">POPULAR</div>
            <h3 className="text-lg font-bold text-white mb-3">Hustler's Vault</h3>
            <div className="text-2xl font-black text-[#00E06D] mb-2">M{packages.hustlersVault.price}</div>
            <p className="text-sm text-gray-300 mb-3">{packages.hustlersVault.description}</p>
            <div className="text-xs text-[#00A651]">USSD: *200#1*1*57031600*{packages.hustlersVault.price}#</div>
          </div>
          <div className="bg-gray-900/50 border border-yellow-500/40 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Franchise Kit</h3>
            <div className="text-2xl font-black text-yellow-400 mb-2">M{packages.franchiseKit.price}</div>
            <p className="text-sm text-gray-300 mb-3">{packages.franchiseKit.description}</p>
            <div className="text-xs text-[#00A651]">USSD: *200#1*1*57031600*{packages.franchiseKit.price}#</div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">All 21 Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Name</th>
                  <th className="text-left py-2 text-gray-400">Price</th>
                  <th className="text-left py-2 text-gray-400">Category</th>
                  <th className="text-left py-2 text-gray-400">Affiliate</th>
                  <th className="text-left py-2 text-gray-400">USSD</th>
                </tr>
              </thead>
              <tbody>
                {recipes.map((r) => (
                  <tr key={r.id} className="border-b border-gray-800">
                    <td className="py-2 text-white">{r.name}</td>
                    <td className="py-2 text-[#00E06D]">{r.price === 0? 'FREE' : `M${r.price}`}</td>
                    <td className="py-2 text-gray-400">{r.category}</td>
                    <td className="py-2 text-gray-400">{r.affiliationEligible? 'Yes 30%' : 'No'}</td>
                    <td className="py-2 text-xs text-[#00A651]">{r.price > 0? `*200#1*1*57031600*${r.price}#` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}