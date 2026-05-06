'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function RecipePage() {
  const params = useParams()
  const id = params.id as string
  const recipe = recipes.find(r => r.id === id)
  const [unlocked, setUnlocked] = useState(false)
  const [hasVault, setHasVault] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      const unlockedList = JSON.parse(saved)
      setUnlocked(unlockedList.includes(id))
      setHasVault(unlockedList.includes('bundle-001'))
    }
  }, [id])

  if (!recipe) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <Link href="/recipes" className="text-[#00E06D] hover:text-[#00C85F]">Back to Recipes</Link>
        </div>
      </div>
    )
  }

  const isFree = recipe.category === 'free'
  const isBundle = recipe.category === 'bundle'
  const showAffiliateNote = hasVault && recipe.affiliationEligible

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-[#00E06D]">Zap Sauce.</Link>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400 hidden sm:block">MPESA: 57031600</div>
            <Link href="/customer" className="text-sm text-[#00A651] hover:text-[#00E06D] font-bold">Customer Portal</Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/recipes" className="text-[#00A651] hover:text-[#00E06D] text-sm">← Back to All Recipes</Link>
        </div>

        {isBundle && (
          <div className="bg-gradient-to-r from-[#00A651]/20 to-[#00E06D]/20 border-2 border-[#00E06D] rounded-xl p-6 mb-8">
            <div className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded inline-block mb-3">💚 BUSINESS OPPORTUNITY</div>
            <h1 className="text-4xl font-black text-white mb-2">{recipe.name}</h1>
            <p className="text-[#00E06D] font-bold text-lg mb-4">{recipe.subtitle}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-gray-400 text-sm line-through">M{recipe.originalPrice}</div>
              <div className="text-3xl font-black text-[#00E06D]">M{recipe.price}</div>
              <div className="text-xs text-yellow-400 font-bold bg-yellow-400/20 px-2 py-1 rounded">SAVE M{recipe.originalPrice! - recipe.price}</div>
            </div>
            <p className="text-gray-300 mb-6">{recipe.benefits}</p>

            <div className="bg-black/40 rounded-lg p-4 mb-6">
              <div className="text-sm font-bold text-white mb-3">Inside the Vault:</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-300">
                {recipe.includes?.map((incId) => {
                  const incRecipe = recipes.find(r => r.id === incId)
                  return <div key={incId}>✓ {incRecipe?.name}</div>
                })}
              </div>
            </div>

            <button className="w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-black py-4 rounded-lg text-lg mb-4">
              📱 MPESA *200# M{recipe.price} Ref: {recipe.id.toUpperCase()}
            </button>

            <div className="bg-yellow-900/20 border border-yellow-500/40 rounded-lg p-4 text-center">
              <p className="text-sm text-yellow-400 font-bold">⚡ ONLY Hustler's Vault owners earn 30% on referrals</p>
            </div>
          </div>
        )}

        {!isBundle && (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-black text-[#00E06D]">{recipe.name}</h1>
                {recipe.category === 'free' && <span className="text-xs font-bold text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">FREE</span>}
                {recipe.category === 'subscription' && <span className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded">SUBSCRIPTION</span>}
                {recipe.category === 'exclusive' && <span className="text-xs font-bold text-purple-400 bg-purple-400/20 px-2 py-1 rounded">EXCLUSIVE</span>}
              </div>
              <p className="text-gray-400 text-lg">{recipe.subtitle}</p>
            </div>

            {!isFree &&!unlocked && (
              <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 mb-8">
                <div className="text-3xl font-black text-white mb-4">M{recipe.price}</div>
                <button className="w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-black py-3 rounded-lg mb-3">
                  📱 MPESA *200# M{recipe.price}
                </button>
                <div className="text-xs text-gray-500 text-center">Ref: {recipe.id.toUpperCase()}</div>
                {recipe.affiliationEligible === false && (
                  <div className="text-xs text-gray-500 mt-3 text-center">No affiliate commissions on this item</div>
                )}
                {showAffiliateNote && (
                  <div className="text-xs text-[#00E06D] mt-3 text-center">✓ Your 30% affiliate applies if you refer others</div>
                )}
              </div>
            )}

            {(isFree || unlocked) && (
              <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Ingredients</h2>
                <ul className="space-y-2 mb-6">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="text-[#00E06D]">•</span> {ing}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-400">Prep time: {recipe.time}</div>
              </div>
            )}
          </>
        )}

        <div className="mt-12 text-center text-xs text-gray-500">
          <p>Zap Sauce recipes are food and beverage ideas for general wellness.</p>
          <p>Not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p>Consult your healthcare provider before use. Results may vary.</p>
        </div>
      </div>
    </div>
  )
}