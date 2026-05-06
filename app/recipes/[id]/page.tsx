'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function RecipePage() {
  const params = useParams()
  const [recipe, setRecipe] = useState<typeof recipes[0] | null>(null)
  const [unlocked, setUnlocked] = useState(false)
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)

  useEffect(() => {
    const found = recipes.find(r => r.id === params.id)
    setRecipe(found || null)

    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      const unlockedList = JSON.parse(saved)
      setUnlocked(unlockedList.includes(params.id) || params.id === 'free-001' || params.id === 'free-002')
    }
  }, [params.id])

  const verifyPayment = async () => {
    if (!mpesaCode.trim() ||!recipe) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const saved = localStorage.getItem('zapSauceUnlocked')
      const current = saved? JSON.parse(saved) : []
      const newUnlocked = [...current, recipe.id]
      localStorage.setItem('zapSauceUnlocked', JSON.stringify(newUnlocked))
      setUnlocked(true)
      setMpesaCode('')
      alert('Payment verified! Recipe unlocked ⚡')
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  if (!recipe) return <div className="bg-black min-h-screen text-white p-8">Recipe not found</div>

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#00A651] mb-8 block">← Back to Recipes</Link>

        <h1 className="text-4xl font-black mb-2 text-[#00E06D]">{recipe.name}</h1>
        <p className="text-xl text-gray-300 mb-4">{recipe.subtitle}</p>
        <p className="text-2xl font-bold text-white mb-8">M{recipe.price}</p>

        {!unlocked? (
          <div className="bg-red-900/20 border border-red-500/40 rounded-xl p-6 mb-8">
            <p className="text-red-400 font-bold mb-3">🔒 LOCKED - Purchase to unlock full recipe</p>
            <p className="text-sm text-gray-400 mb-2">Send M{recipe.price} to MPESA 57031600</p>
            <p className="text-sm text-gray-400 mb-4">Ref: {recipe.id.toUpperCase()}</p>
            <input
              type="text"
              placeholder="Enter MPESA code"
              value={mpesaCode}
              onChange={(e) => setMpesaCode(e.target.value)}
              className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-3"
            />
            <button
              onClick={verifyPayment}
              disabled={verifying}
              className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
            >
              {verifying? 'Verifying...' : 'Unlock Recipe'}
            </button>
          </div>
        ) : (
          <>
            <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#00E06D] mb-4">Benefits</h2>
              <p className="text-gray-300">{recipe.benefits}</p>
            </div>

            <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#00E06D] mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="text-gray-300">• {ing}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#00E06D] mb-4">Instructions</h2>
              <ol className="space-y-2">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="text-gray-300">{step}</li>
                ))}
              </ol>
            </div>

            {recipe.id === 'bundle-001' && recipe.includes && (
              <div className="bg-[#00E06D]/10 border border-[#00E06D]/40 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-[#00E06D] mb-4">Inside the Vault:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
                  {recipe.includes.map((incId) => {
                    const incRecipe = recipes.find(r => r.id === incId)
                    return <div key={incId}>✓ {incRecipe?.name}</div>
                  })}
                </div>
              </div>
            )}

            {recipe.disclaimer && (
              <div className="bg-yellow-900/20 border border-yellow-500/40 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold text-yellow-400 mb-3">⚠️ Disclaimer</h2>
                <p className="text-sm text-gray-300">{recipe.disclaimer}</p>
              </div>
            )}

            {recipe.costBreakdown && (
              <div className="bg-blue-900/20 border border-blue-500/40 rounded-xl p-6">
                <h2 className="text-xl font-bold text-blue-400 mb-3">💰 Cost Breakdown</h2>
                <p className="text-sm text-gray-300">{recipe.costBreakdown}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}