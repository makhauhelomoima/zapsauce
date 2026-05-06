'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function CustomerPortal() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) setUnlockedRecipes(JSON.parse(saved))
  }, [])

  const myRecipes = recipes.filter(r => unlockedRecipes.includes(r.id))
  const paidUnlocked = myRecipes.filter(r => r.price > 0)

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-[#00E06D]">Zap Sauce.</Link>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400">MPESA: 57031600</div>
            <Link href="/recipes" className="text-sm text-[#00A651] hover:text-[#00E06D] font-bold">All Recipes</Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black mb-2 text-center text-white">Customer Portal</h1>
        <p className="text-gray-400 text-center mb-8">Your unlocked recipes</p>

        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-gray-400 text-xs mb-1">Unlocked Recipes</div>
              <div className="text-3xl font-black text-[#00E06D]">{myRecipes.length}</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">Total Value</div>
              <div className="text-3xl font-black text-white">M{paidUnlocked.reduce((sum, r) => sum + r.price, 0)}</div>
            </div>
          </div>
        </div>

        {myRecipes.length === 0? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-6">You haven't unlocked any recipes yet</p>
            <Link href="/recipes" className="inline-block bg-[#00E06D] hover:bg-[#00C85F] text-black font-bold px-8 py-3 rounded-lg">
              Browse Recipes
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#00E06D] mb-4">My Recipes</h2>
            {myRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">{recipe.name}</div>
                  <div className="text-xs text-gray-400">{recipe.subtitle}</div>
                  <div className="text-xs text-[#00E06D] mt-1">Ref: {recipe.id.toUpperCase()}</div>
                </div>
                <Link href={`/recipes/${recipe.id}`} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-bold">
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center text-xs text-gray-500">
          <p>Need help? WhatsApp: +266 57031600</p>
          <p className="mt-2">MPESA: 57031600 | USSD: *200#</p>
        </div>
      </div>
    </div>
  )
}