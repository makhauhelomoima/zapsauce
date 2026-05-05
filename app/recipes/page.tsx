'use client'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'
import { useState } from 'react'

export default function RecipesPage() {
  const [showEFT, setShowEFT] = useState<string | null>(null)
  const paidRecipes = Object.values(RECIPES).filter(r => r._type === 'PAID' || r._type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r._type === 'FREE')

  const copyEFT = (ref: string) => {
    navigator.clipboard.writeText(`Zap Sauce ${ref}`)
    alert(`EFT Reference copied: Zap Sauce ${ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME`)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <Link href="/"><h1 className="text-5xl font-black text-[#00E06D]">Zap Sauce.</h1></Link>
          <p className="text-2xl text-[#00C85F] font-black">14 Recipes</p>
          <p className="text-base text-gray-300 font-semibold">Product of Lesotho 🇱🇸</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4 text-center">FREE SAMPLES</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {freeRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00E06D] bg-black/60 p-5 rounded-xl">
                <div className="text-sm bg-[#00A651] text-white px-3 py-1 rounded-md font-black inline-block mb-2">FREE</div>
                <h3 className="text-2xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-gray-300 text-base mb-3">{recipe.subtitle}</p>
                <Link href={`/recipes/${recipe.id}`} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-lg text-lg w-full block text-center">View Recipe</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-4 text-center">PAID RECIPES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paidRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-gray-900/90 p-5 rounded-xl">
                {recipe._type === 'SUBSCRIPTION' && <div className="text-sm bg-yellow-500 text-black px-3 py-1 rounded-md font-black inline-block mb-2">SUBSCRIPTION</div>}
                {recipe._type === 'PAID' && <div className="text-sm bg-[#00C85F] text-black px-3 py-1 rounded-md font-black inline-block mb-2">PAID</div>}

                <h3 className="text-2xl font-black text-[#00E06D] mb-1">{recipe.name}</h3>
                {recipe.subtitle && <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>}

                <div className="text-sm mb-3">
                  <div><span className="text-[#00C85F] font-bold">ID:</span> {recipe.id}</div>
                  <div><span className="text-[#00C85F] font-bold">Prep Time:</span> {recipe.prepTime}</div>
                  <div><span className="text-[#00C85F] font-bold">Servings:</span> {recipe.servings}</div>
                </div>

                <div className="border-t border-gray-700 pt-4 mt-3">
                  <div className="text-4xl font-black text-white mb-3">M{recipe.cost}</div>
                  <Link href={`/recipes/${recipe.id}`} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-xl text-lg w-full block text-center mb-2">View Recipe</Link>
                  {recipe._ussd && <button onClick={() => setShowEFT(recipe.id)} className="border-2 border-[#00A651] text-[#00C85F] font-black px-4 py-2 rounded-lg text-base w-full">EFT Bank Transfer</button>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 mb-6">
          <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] font-black text-lg">← Back to Home</Link>
          <p className="text-base text-gray-500 mt-6">© 2026 Zap Sauce. Traditional wellness. Not medical advice.</p>
        </div>
      </div>

      {showEFT && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowEFT(null)}>
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-black text-[#00E06D] mb-4">EFT Bank Details</h2>
            <div className="space-y-3 text-lg">
              <div><span className="text-[#00C85F] font-bold">Bank:</span> Lesotho Post Bank</div>
              <div><span className="text-[#00C85F] font-bold">Account:</span> 1036202900018</div>
              <div><span className="text-[#00C85F] font-bold">Branch:</span> BONHOMME</div>
              <div><span className="text-[#00C85F] font-bold">Reference:</span> Zap Sauce {RECIPES[showEFT]._ref}</div>
              <div><span className="text-[#00C85F] font-bold">Amount:</span> M{RECIPES[showEFT].cost}</div>
            </div>
            <button onClick={() => copyEFT(RECIPES[showEFT]._ref)} className="bg-[#00A651] text-white font-black px-6 py-4 rounded-xl text-xl w-full mt-6">Copy Reference</button>
            <button onClick={() => setShowEFT(null)} className="text-gray-400 hover:text-white mt-4 w-full">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}