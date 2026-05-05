'use client'
import { useEffect, useState } from 'react'
import { RECIPES } from '../data/recipes'
import Link from 'next/link'

export default function HomePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])
  const [showEFT, setShowEFT] = useState<string | null>(null)

  const featuredRecipes = Object.values(RECIPES).filter(r => r._type === 'PAID' || r._type === 'SUBSCRIPTION').slice(0, 3)
  const freeRecipes = Object.values(RECIPES).filter(r => r._type === 'FREE')

  useEffect(() => {
    const saved = localStorage.getItem('zap_unlocked_recipes')
    if (saved) setUnlockedRecipes(JSON.parse(saved))
  }, [])

  const copyEFT = (ref: string) => {
    navigator.clipboard.writeText(`Zap Sauce ${ref}`)
    alert(`EFT Reference copied: Zap Sauce ${ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME`)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A651]/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-[#00E06D] mb-4 drop-shadow-lg">
            Zap Sauce.
          </h1>
          <p className="text-2xl md:text-3xl text-[#00C85F] font-black mb-6">
            14 Healing Recipes
          </p>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-8">
            Traditional Wellness from Lesotho 🇱🇸
          </p>
          <Link href="/recipes" className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-4 rounded-xl text-xl inline-block transition-all shadow-lg shadow-[#00E06D]/30 hover:scale-105">
            View All Recipes
          </Link>
        </div>
      </div>

      {/* FREE SAMPLES */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-[#00E06D] mb-3">FREE SAMPLES</h2>
          <p className="text-gray-400 text-lg">Try Zap Sauce on us. No payment needed.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {freeRecipes.map((recipe) => (
            <div key={recipe.id} className="border-2 border-[#00E06D] bg-gradient-to-br from-black to-gray-900/60 p-8 rounded-2xl shadow-xl shadow-[#00A651]/20">
              <div className="text-sm bg-[#00A651] text-white px-4 py-1 rounded-full font-black inline-block mb-4">FREE</div>
              <h3 className="text-3xl font-black text-[#00E06D] mb-3">{recipe.name}</h3>
              <p className="text-gray-300 text-lg mb-5">{recipe.subtitle}</p>
              <div className="flex gap-6 text-sm mb-6 text-gray-400">
                <div><span className="text-[#00C85F] font-bold">Prep:</span> {recipe.prepTime}</div>
                <div><span className="text-[#00C85F] font-bold">Serves:</span> {recipe.servings}</div>
              </div>
              <Link href={`/recipes/${recipe.id}`} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full block text-center transition-all shadow-lg hover:scale-105">
                Get Free Recipe →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED RECIPES */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-white mb-3">FEATURED RECIPES</h2>
          <p className="text-gray-400 text-lg">MPESA *200# or EFT Bank Transfer</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-xl hover:border-[#00E06D] transition-all">
              {recipe._type === 'SUBSCRIPTION' && (
                <div className="text-sm bg-yellow-500 text-black px-4 py-1 rounded-full font-black inline-block mb-3">SUBSCRIPTION</div>
              )}
              {recipe._type === 'PAID' && (
                <div className="text-sm bg-[#00C85F] text-black px-4 py-1 rounded-full font-black inline-block mb-3">PAID</div>
              )}
              <h3 className="text-2xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
              {recipe.subtitle && <p className="text-sm text-gray-400 mb-4">{recipe.subtitle}</p>}
              <div className="text-4xl font-black text-white mb-4">M{recipe.cost}</div>
              <Link href={`/recipes/${recipe.id}`} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-xl text-lg w-full block text-center mb-3 transition-all">
                View Recipe
              </Link>
              {recipe._ussd && (
                <button onClick={() => setShowEFT(recipe.id)} className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651]/20 font-black px-4 py-2 rounded-xl text-base w-full transition-all">
                  EFT Bank Transfer
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-black text-xl transition-colors">
            View All 14 Recipes →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-lg text-gray-500 mb-2">© 2026 Zap Sauce. Traditional wellness. Product of Lesotho 🇱🇸</p>
          <p className="text-xs text-gray-600">Not medical advice. Consult your doctor. For considered families.</p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <Link href="/admin" className="text-gray-600 hover:text-[#00C85F]">Admin</Link>
            <Link href="/recipes" className="text-gray-600 hover:text-[#00C85F]">Recipes</Link>
          </div>
        </div>
      </div>

      {/* EFT Modal */}
      {showEFT && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowEFT(null)}>
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-[#00E06D]/30" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-4xl font-black text-[#00E06D] mb-6 text-center">EFT Bank Transfer</h2>
            <div className="space-y-4 text-lg">
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Bank:</p>
                <p className="text-white text-xl font-black">Lesotho Post Bank</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Account:</p>
                <p className="text-white text-xl font-black">1036202900018</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Branch:</p>
                <p className="text-white text-xl font-black">BONHOMME</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Reference:</p>
                <p className="text-white text-xl font-black">Zap Sauce {RECIPES[showEFT]._ref}</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Amount:</p>
                <p className="text-white text-3xl font-black">M{RECIPES[showEFT].cost}</p>
              </div>
            </div>
            <button onClick={() => copyEFT(RECIPES[showEFT]._ref)} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full mt-6 transition-all">
              Copy Reference
            </button>
            <button onClick={() => setShowEFT(null)} className="text-gray-400 hover:text-white mt-4 w-full text-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}