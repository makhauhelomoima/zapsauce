'use client'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'
import { useState } from 'react'

export default function RecipesPage() {
  const [showEFT, setShowEFT] = useState<string | null>(null)
  const paidRecipes = Object.values(RECIPES).filter(r => r._type === 'PAID' || r._type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r._type === 'FREE')
  const exclusiveRecipe = Object.values(RECIPES).find(r => r._type === 'EXCLUSIVE')

  const copyEFT = (ref: string) => {
    navigator.clipboard.writeText(`Zap Sauce ${ref}`)
    alert(`EFT Reference copied: Zap Sauce ${ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME`)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-5xl font-black text-[#00E06D] mb-2">Zap Sauce.</h1>
          </Link>
          <p className="text-2xl text-[#00C85F] font-black mb-1">14 Healing Recipes</p>
          <p className="text-base text-gray-300 font-semibold">Product of Lesotho 🇱🇸</p>
        </div>

        {/* FREE SAMPLES */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-[#00E06D] mb-2">FREE SAMPLES</h2>
            <p className="text-gray-400 text-base">Try Zap Sauce on us. No payment needed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {freeRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00E06D] bg-gradient-to-br from-black to-gray-900/60 p-6 rounded-2xl shadow-lg shadow-[#00A651]/20 hover:shadow-[#00E06D]/40 transition-all">
                <div className="text-sm bg-[#00A651] text-white px-4 py-1 rounded-full font-black inline-block mb-3">FREE</div>
                <h3 className="text-3xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-gray-300 text-lg mb-4">{recipe.subtitle}</p>

                <div className="flex gap-4 text-sm mb-5 text-gray-400">
                  <div><span className="text-[#00C85F] font-bold">Prep:</span> {recipe.prepTime}</div>
                  <div><span className="text-[#00C85F] font-bold">Serves:</span> {recipe.servings}</div>
                </div>

                <Link
                  href={`/recipes/${recipe.id}`}
                  className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full block text-center transition-all shadow-lg hover:scale-105"
                >
                  View Full Recipe →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PAID RECIPES */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-white mb-2">PAID RECIPES</h2>
            <p className="text-gray-400 text-base">MPESA *200# or EFT Bank Transfer</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paidRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-lg shadow-black/50 hover:border-[#00E06D] transition-all">
                {recipe._type === 'SUBSCRIPTION' && (
                  <div className="text-sm bg-yellow-500 text-black px-4 py-1 rounded-full font-black inline-block mb-3">SUBSCRIPTION</div>
                )}
                {recipe._type === 'PAID' && (
                  <div className="text-sm bg-[#00C85F] text-black px-4 py-1 rounded-full font-black inline-block mb-3">PAID</div>
                )}

                <h3 className="text-2xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                {recipe.subtitle && <p className="text-sm text-gray-400 mb-4">{recipe.subtitle}</p>}

                <div className="space-y-1 text-sm mb-5 text-gray-400">
                  <div><span className="text-[#00C85F] font-bold">ID:</span> {recipe.id}</div>
                  <div><span className="text-[#00C85F] font-bold">Prep Time:</span> {recipe.prepTime}</div>
                  <div><span className="text-[#00C85F] font-bold">Servings:</span> {recipe.servings}</div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="text-5xl font-black text-white mb-4">M{recipe.cost}</div>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-xl text-lg w-full block text-center mb-3 transition-all"
                  >
                    View Recipe
                  </Link>
                  {recipe._ussd && (
                    <button
                      onClick={() => setShowEFT(recipe.id)}
                      className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651]/20 font-black px-4 py-2 rounded-xl text-base w-full transition-all"
                    >
                      EFT Bank Transfer
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EXCLUSIVE TEASER */}
        {exclusiveRecipe && (
          <div className="mb-10">
            <div className="border-2 border-purple-600 bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl text-center shadow-lg shadow-purple-600/20">
              <div className="text-sm bg-purple-600 text-white px-4 py-1 rounded-full font-black inline-block mb-4">EXCLUSIVE</div>
              <h2 className="text-4xl font-black text-purple-400 mb-3">{exclusiveRecipe.name}</h2>
              <p className="text-gray-300 text-lg mb-6">Unlocked with MONTHLY HEAL subscription only</p>
              <div className="text-2xl font-black text-purple-300">Subscription Holders Only</div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] font-black text-xl transition-colors">
            ← Back to Home
          </Link>
          <p className="text-base text-gray-500 mt-8">© 2026 Zap Sauce. Traditional wellness. Product of Lesotho 🇱🇸</p>
          <p className="text-xs text-gray-600 mt-2">Not medical advice. Consult your doctor.</p>
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
                <p className="text-[#00C85F] font-bold text-sm">Account Number:</p>
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
            <button
              onClick={() => copyEFT(RECIPES[showEFT]._ref)}
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full mt-6 transition-all"
            >
              Copy Reference
            </button>
            <button
              onClick={() => setShowEFT(null)}
              className="text-gray-400 hover:text-white mt-4 w-full text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}