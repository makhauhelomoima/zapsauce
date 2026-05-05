'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { RECIPES } from '../../../data/recipes'
import Link from 'next/link'

export default function RecipePage() {
  const params = useParams()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showEFT, setShowEFT] = useState(false)
  const [loading, setLoading] = useState(true)

  const recipe = RECIPES[params.id as string]

  useEffect(() => {
    const unlocked = localStorage.getItem('zap_unlocked_recipes')
    if (unlocked) {
      const unlockedList = JSON.parse(unlocked)
      setIsSubscribed(unlockedList.includes('monthly') || unlockedList.includes('subscription'))
    }
    setLoading(false)
  }, [])

  const copyEFT = () => {
    if (!recipe) return
    navigator.clipboard.writeText(`Zap Sauce ${recipe._ref}`)
    alert(`EFT Reference copied: Zap Sauce ${recipe._ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME`)
  }

  if (loading) {
    return (
      <div className="bg-black min-h-[100dvh] flex items-center justify-center">
        <div className="text-[#00E06D] text-2xl font-black">Loading...</div>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="bg-black min-h-[100dvh] text-white p-4">
        <div className="max-w-2xl mx-auto pt-12 text-center">
          <h1 className="text-4xl font-black text-red-500 mb-4">Recipe Not Found</h1>
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-black text-xl">
            ← Back to All Recipes
          </Link>
        </div>
      </div>
    )
  }

  // Check if EXCLUSIVE and not subscribed
  if (recipe._type === 'EXCLUSIVE' &&!isSubscribed) {
    return (
      <div className="bg-black min-h-[100dvh] text-white p-4">
        <div className="max-w-2xl mx-auto pt-12 text-center">
          <div className="border-2 border-purple-600 bg-gradient-to-br from-purple-900/30 to-black p-8 rounded-2xl mb-8">
            <div className="text-sm bg-purple-600 text-white px-4 py-1 rounded-full font-black inline-block mb-4">EXCLUSIVE</div>
            <h1 className="text-4xl font-black text-purple-400 mb-4">{recipe.name}</h1>
            <p className="text-xl text-gray-300 mb-6">This recipe is for MONTHLY HEAL subscribers only</p>
            <div className="text-6xl font-black text-purple-300 mb-6">🔒</div>
            <Link href="/recipes/monthly" className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-xl text-xl inline-block transition-all">
              Subscribe to Unlock
            </Link>
          </div>
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-black text-xl">
            ← Back to All Recipes
          </Link>
        </div>
      </div>
    )
  }

  const isFree = recipe._type === 'FREE'
  const isSubscription = recipe._type === 'SUBSCRIPTION'

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-bold text-base mb-4 inline-block">
            ← All Recipes
          </Link>

          {isFree && <div className="text-sm bg-[#00A651] text-white px-4 py-1 rounded-full font-black inline-block mb-3">FREE</div>}
          {isSubscription && <div className="text-sm bg-yellow-500 text-black px-4 py-1 rounded-full font-black inline-block mb-3">SUBSCRIPTION</div>}
          {recipe._type === 'PAID' && <div className="text-sm bg-[#00C85F] text-black px-4 py-1 rounded-full font-black inline-block mb-3">PAID</div>}
          {recipe._type === 'EXCLUSIVE' && <div className="text-sm bg-purple-600 text-white px-4 py-1 rounded-full font-black inline-block mb-3">EXCLUSIVE</div>}

          <h1 className="text-4xl md:text-5xl font-black text-[#00E06D] mb-3">{recipe.name}</h1>
          {recipe.subtitle && <p className="text-xl text-gray-300 mb-4">{recipe.subtitle}</p>}

          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
            <div><span className="text-[#00C85F] font-bold">ID:</span> {recipe.id}</div>
            <div><span className="text-[#00C85F] font-bold">Prep Time:</span> {recipe.prepTime}</div>
            <div><span className="text-[#00C85F] font-bold">Servings:</span> {recipe.servings}</div>
            {!isFree && <div><span className="text-[#00C85F] font-bold">Cost:</span> M{recipe.cost}</div>}
          </div>
        </div>

        {/* Payment Section for Paid Recipes */}
        {!isFree &&!isSubscription && (
          <div className="border-2 border-[#00A651] bg-gray-900/60 p-6 rounded-2xl mb-8">
            <div className="text-5xl font-black text-white mb-4 text-center">M{recipe.cost}</div>
            <button onClick={() => setShowEFT(true)} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full transition-all">
              EFT Bank Transfer
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">MPESA: *200# | Reference: Zap Sauce {recipe._ref}</p>
          </div>
        )}

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00C85F] mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#00E06D] mr-3 font-black">•</span>
                <span className="text-lg text-gray-200">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preparations */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00C85F] mb-4">Preparations</h2>
          <ol className="space-y-3">
            {recipe.preparations.map((step, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#00E06D] mr-3 font-black text-lg">{idx + 1}.</span>
                <span className="text-lg text-gray-200">{step.replace(/^\d+\.\s*/, '')}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00C85F] mb-4">Benefits</h2>
          <p className="text-lg text-gray-200">{recipe.benefits}</p>
        </div>

        {/* Storage Tips */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00C85F] mb-4">Storage Tips</h2>
          <ul className="space-y-2">
            {recipe.storageTips.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#00E06D] mr-3 font-black">•</span>
                <span className="text-lg text-gray-200">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mt-8 mb-8">
          <p className="text-xs text-gray-500 text-center">
            Zap Sauce. Traditional wellness. Not medical advice. Consult your doctor.
          </p>
        </div>
      </div>

      {/* EFT Modal */}
      {showEFT && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowEFT(false)}>
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
                <p className="text-white text-xl font-black">Zap Sauce {recipe._ref}</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Amount:</p>
                <p className="text-white text-3xl font-black">M{recipe.cost}</p>
              </div>
            </div>
            <button onClick={copyEFT} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full mt-6 transition-all">
              Copy Reference
            </button>
            <button onClick={() => setShowEFT(false)} className="text-gray-400 hover:text-white mt-4 w-full text-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}