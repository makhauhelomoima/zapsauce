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
    if (pin === '2026') {
      localStorage.setItem('zapSauceAdmin', 'true')
      setIsAuthed(true)
    } else {
      alert('Wrong PIN')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zapSauceAdmin')
    setIsAuthed(false)
  }

  const allRecipes = recipes
  const totalRecipes = allRecipes.length
  const paidRecipes = allRecipes.filter(r => r.category!== 'free' && r.category!== 'subscription').length
  const freeSamples = allRecipes.filter(r => r.category === 'free').length
  const potentialRevenue = allRecipes.reduce((sum, r) => sum + r.price, 0)

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
            className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-center mb-4"
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
          <Link href="/" className="text-2xl font-black text-[#00E06D]">Zap Sauce Admin</Link>
          <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300">Logout</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm">Total Recipes</div>
            <div className="text-3xl font-black text-white">{totalRecipes}</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm">Paid Recipes</div>
            <div className="text-3xl font-black text-[#00E06D]">{paidRecipes}</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm">Free Samples</div>
            <div className="text-3xl font-black text-white">{freeSamples}</div>
          </div>
          <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
            <div className="text-gray-400 text-sm">Total Value</div>
            <div className="text-3xl font-black text-[#00E06D]">M{potentialRevenue}</div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">All Recipes</h2>
          <div className="space-y-2">
            {allRecipes.map((recipe) => (
              <div key={recipe.id} className="flex justify-between items-center py-2 border-b border-gray-800">
                <div>
                  <div className="font-bold">{recipe.name}</div>
                  <div className="text-xs text-gray-500">Ref: {recipe.id.toUpperCase()}</div>
                </div>
                <div className="text-right">
                  <div className="text-[#00E06D] font-bold">M{recipe.price}</div>
                  <div className="text-xs text-gray-400">{recipe.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}