'use client'

import { useEffect, useState } from 'react'
import { recipes } from '@/data/recipes'
import Link from 'next/link'

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [pin, setPin] = useState('')

  useEffect(() => {
    const adminCheck = localStorage.getItem('zapSauceAdmin')
    if (adminCheck === 'true') setIsAuthed(true)
  }, [])

  const handleLogin = () => {
    if (pin === 'HEAL120') {
      localStorage.setItem('zapSauceAdmin', 'true')
      setIsAuthed(true)
    } else {
      alert('Wrong PIN')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zapSauceAdmin')
    setIsAuthed(false)
    setPin('')
  }

  const allRecipes = recipes
  const totalRecipes = allRecipes.length
  const paidRecipes = allRecipes.filter(r => r.category!== 'free' && r.category!== 'subscription' && r.category!== 'exclusive').length
  const freeSamples = allRecipes.filter(r => r.category === 'free').length
  const potentialRevenue = allRecipes.filter(r => r.price > 0).reduce((sum, r) => sum + r.price, 0)

  const getTypeBadge = (category: string) => {
    switch(category) {
      case 'free':
        return <span className="text-xs font-bold text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">FREE</span>
      case 'subscription':
        return <span className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded">SUBSCRIPTION</span>
      case 'exclusive':
        return <span className="text-xs font-bold text-purple-400 bg-purple-400/20 px-2 py-1 rounded">EXCLUSIVE</span>
      default:
        return <span className="text-xs font-bold text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">PAID</span>
    }
  }

  const getUssd = (recipe: any) => {
    if (recipe.category === 'free' || recipe.category === 'exclusive') return 'N/A'
    return '*200#'
  }

  if (!isAuthed) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="bg-gray-900 border border-[#00A651]/40 rounded-xl p-8 max-w-sm w-full mx-4">
          <h1 className="text-2xl font-black text-[#00E06D] mb-6 text-center">Zap Sauce Admin</h1>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-center mb-4 text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-3 rounded"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black text-[#00E06D]">Admin Dashboard</h1>
            <p className="text-xs text-gray-400">Zap Sauce Management</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-bold">
              View Site
            </Link>
            <button onClick={handleLogout} className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Total Recipes</div>
            <div className="text-3xl font-black text-white">{totalRecipes}</div>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Paid Recipes</div>
            <div className="text-3xl font-black text-white">{paidRecipes}</div>
          </div>
          <div className="bg-gray-900/50 border border-yellow-500/40 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Potential Revenue</div>
            <div className="text-3xl font-black text-[#00E06D]">M{potentialRevenue}</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/40 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Free Samples</div>
            <div className="text-3xl font-black text-[#00E06D]">{freeSamples}</div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[#00E06D] mb-4">Recipe Inventory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left text-[#00A651] font-bold py-3 px-2">Name</th>
                  <th className="text-left text-[#00A651] font-bold py-3 px-2">Type</th>
                  <th className="text-left text-[#00A651] font-bold py-3 px-2">Price</th>
                  <th className="text-left text-[#00A651] font-bold py-3 px-2">Ref</th>
                  <th className="text-left text-[#00A651] font-bold py-3 px-2">USSD</th>
                </tr>
              </thead>
              <tbody>
                {allRecipes.map((recipe) => (
                  <tr key={recipe.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                    <td className="py-3 px-2 font-bold text-white">{recipe.name}</td>
                    <td className="py-3 px-2">{getTypeBadge(recipe.category)}</td>
                    <td className="py-3 px-2 text-white">M{recipe.price}</td>
                    <td className="py-3 px-2 text-gray-400 font-mono text-xs">{recipe.id.toUpperCase()}</td>
                    <td className="py-3 px-2 text-gray-400">{getUssd(recipe)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-gray-600">
          <p>© 2026 ZapSauce Admin | By Makhaukhelo Moima | Password Protected 🔒</p>
        </div>
      </div>
    </div>
  )
}