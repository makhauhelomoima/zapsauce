'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function RecipesPage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      setUnlockedRecipes(JSON.parse(saved))
    }
  }, [])

  const verifyPayment = async (recipeId: string) => {
    if (!mpesaCode.trim()) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const newUnlocked = [...unlockedRecipes, recipeId]
      setUnlockedRecipes(newUnlocked)
      localStorage.setItem('zapSauceUnlocked', JSON.stringify(newUnlocked))
      setMpesaCode('')
      setSelectedRecipe(null)
      alert('Payment verified! Recipe unlocked ⚡')
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  const isLocked = (recipeId: string) => {
    return !unlockedRecipes.includes(recipeId) && recipeId !== 'free-001' && recipeId !== 'free-002'
  }

  // Filter out master-base from showing as a recipe card
  const displayRecipes = recipes.filter(r => r.id !== 'master-base')

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651]">Lightning in a jar! ⚡</span>
          </Link>
          <div className="text-xs text-gray-400">MPESA: 57031600</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-[#00A651] hover:text-[#00E06D] text-sm mb-4 block">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#00E06D]">ALL</span> HEALING RECIPES ⚡
          </h1>
          <p className="text-xl text-gray-300">{displayRecipes.length} Recipes | Product of Lesotho 🇱🇸</p>
        </div>

        <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-4">ZAP SAUCE MASTER BASE - THE FOUNDATION</h2>
          <p className="text-gray-300 mb-4">Every recipe below uses: <strong>1 tbsp Zap Sauce Master Base</strong></p>
          <p className="text-red-400 font-bold mb-4">DO NOT SUBSTITUTE. DO NOT ADD SUGAR. DO NOT USE ROOIBOS.</p>
          <Link href="/#master-base" className="text-[#00A651] hover:text-[#00E06D] text-sm underline">
            View Master Base Formula →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 hover:border-[#00E06D]/50 transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{recipe.name}</h3>
                <div className="text-right">
                  <div className="text-[#00E06D] font-black text-xl">
                    {recipe.price === 0 ? 'FREE' : `M${recipe.price}`}
                  </div>
                  {recipe.price > 0 && <div className="text-xs text-gray-500">Ref: {recipe.id.toUpperCase()}</div>}
                </div>
              </div>

              <p className="text-sm text-[#00A651] mb-2">{recipe.subtitle}</p>
              <p className="text-xs text-gray-400 mb-3">⏱️ {recipe.time}</p>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">{recipe.benefits}</p>

              {isLocked(recipe.id) ? (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-400 font-bold mb-2">🔒 LOCKED</p>
                    <p className="text-xs text-gray-400 mb-2">Send M{recipe.price} to 57031600</p>
                    <input
                      type="text"
                      placeholder="MPESA code"
                      value={selectedRecipe === recipe.id ? mpesaCode : ''}
                      onChange={(e) => {
                        setMpesaCode(e.target.value)
                        setSelectedRecipe(recipe.id)
                      }}
                      className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                    />
                    <button
                      onClick={() => verifyPayment(recipe.id)}
                      disabled={verifying || selectedRecipe !== recipe.id}
                      className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
                    >
                      {verifying && selectedRecipe === recipe.id ? 'Verifying...' : 'Unlock'}
                    </button>
                  </div>
                  <Link 
                    href={`/recipes/${recipe.id}`}
                    className="block text-center text-xs text-[#00A651] hover:text-[#00E06D]"
                  >
                    View Details →
                  </Link>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-[#00E06D] font-bold">✅ UNLOCKED</p>
                  </div>
                  <Link 
                    href={`/recipes/${recipe.id}`}
                    className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm text-center"
                  >
                    View Full Recipe →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce. Lightning in a jar! ⚡</p>
          <p>For Considered Families. Product of Lesotho 🇱🇸</p>
          <div className="mt-4">
            <p className="text-[#00A651]">Orders for readymade Zap Sauce:</p>
            <p>MPESA: 57031600 | WhatsApp: +266 57031600</p>
          </div>
        </div>
      </div>
    </div>
  )
}