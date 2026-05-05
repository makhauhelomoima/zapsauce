'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { RECIPES } from '../../../data/recipes'
import Link from 'next/link'

export default function RecipePage() {
  const params = useParams()
  const router = useRouter()
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])
  const [showEFT, setShowEFT] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const recipe = RECIPES[params.id as string]

  useEffect(() => {
    const saved = localStorage.getItem('zap_unlocked_recipes')
    if (saved) {
      const unlocked = JSON.parse(saved)
      setUnlockedRecipes(unlocked)
      setIsSubscribed(unlocked.includes('sub-001'))
    }
  }, [])

  if (!recipe) {
    return (
      <div className="bg-black min-h-[100dvh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#00E06D] mb-4">Recipe Not Found</h1>
          <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] font-bold">← Back to Home</Link>
        </div>
      </div>
    )
  }

  // PAYWALL LOGIC - THIS WAS MISSING
  const isFree = recipe._type === 'FREE'
  const isExclusive = recipe._type === 'EXCLUSIVE'
  const isUnlocked = isFree || unlockedRecipes.includes(recipe.id) || (isExclusive && isSubscribed)
  const canPurchase = recipe._type === 'PAID' || recipe._type === 'SUBSCRIPTION'

  const handlePurchase = () => {
    const newUnlocked = [...unlockedRecipes, recipe.id]
    localStorage.setItem('zap_unlocked_recipes', JSON.stringify(newUnlocked))
    setUnlockedRecipes(newUnlocked)
    if (recipe._type === 'SUBSCRIPTION') setIsSubscribed(true)
    alert(`Recipe unlocked! You now have access to ${recipe.name}`)
  }

  const copyEFT = () => {
    navigator.clipboard.writeText(`Zap Sauce ${recipe._ref}`)
    alert(`EFT Reference copied: Zap Sauce ${recipe._ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME`)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-[#00E06D]">Zap Sauce.</Link>
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-bold text-sm">
            ← All Recipes
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex gap-3 mb-4">
            <span className={`px-4 py-1 rounded-full font-black text-sm ${
              recipe._type === 'FREE'? 'bg-[#00A651] text-white' :
              recipe._type === 'PAID'? 'bg-[#00C85F] text-black' :
              recipe._type === 'SUBSCRIPTION'? 'bg-yellow-500 text-black' :
              'bg-purple-600 text-white'
            }`}>
              {recipe._type}
            </span>
            {recipe._type!== 'FREE' && (
              <span className="px-4 py-1 rounded-full font-black text-sm bg-gray-700 text-white">
                M{recipe.cost}
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#00E06D] mb-3">{recipe.name}</h1>
          {recipe.subtitle && <p className="text-xl text-gray-300 mb-6">{recipe.subtitle}</p>}

          <div className="flex gap-6 text-sm mb-8 text-gray-400">
            <div><span className="text-[#00C85F] font-bold">Prep:</span> {recipe.prepTime}</div>
            <div><span className="text-[#00C85F] font-bold">Serves:</span> {recipe.servings}</div>
          </div>
        </div>

        {/* PAYWALL - SHOWS IF LOCKED */}
        {!isUnlocked? (
          <div className="border-2 border-[#00A651] bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-center mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="text-3xl font-black text-[#00E06D] mb-4">Unlock This Recipe</h2>
            <p className="text-lg text-gray-300 mb-6">{recipe.benefits}</p>
            <div className="text-5xl font-black text-white mb-6">M{recipe.cost}</div>

            {canPurchase && (
              <div className="space-y-4">
                <button onClick={handlePurchase} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-4 rounded-xl text-xl w-full transition-all shadow-lg hover:scale-105">
                  Unlock with MPESA *200#
                </button>
                {recipe._ussd && (
                  <button onClick={() => setShowEFT(true)} className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651]/20 font-black px-8 py-4 rounded-xl text-xl w-full transition-all">
                    EFT Bank Transfer
                  </button>
                )}
              </div>
            )}

            {recipe._type === 'EXCLUSIVE' && (
              <div className="mt-6">
                <p className="text-yellow-400 font-bold mb-4">Unlock with MONTHLY HEAL subscription only</p>
                <Link href="/recipes/sub-001" className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-xl text-xl inline-block transition-all">
                  Subscribe to Unlock
                </Link>
              </div>
            )}
          </div>
        ) : (
          // UNLOCKED CONTENT - ONLY SHOWS AFTER PAYMENT
          <div className="space-y-8">
            <div className="border-2 border-[#00E06D] bg-gradient-to-br from-black to-gray-900/60 p-6 rounded-2xl">
              <h2 className="text-2xl font-black text-[#00E06D] mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#00C85F] font-black">•</span>
                    <span className="text-gray-300">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-[#00A651] bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl">
              <h2 className="text-2xl font-black text-[#00C85F] mb-4">Preparation</h2>
              <ol className="space-y-3">
                {recipe.preparations.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#00E06D] font-black min-w-[20px]">{i + 1}.</span>
                    <span className="text-gray-300">{step.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-900/20 to-black p-6 rounded-2xl">
              <h2 className="text-2xl font-black text-yellow-400 mb-4">Benefits</h2>
              <p className="text-gray-300 text-lg">{recipe.benefits}</p>
            </div>

            <div className="border-2 border-purple-600 bg-gradient-to-br from-purple-900/20 to-black p-6 rounded-2xl">
              <h2 className="text-2xl font-black text-purple-400 mb-4">Storage Tips</h2>
              <ul className="space-y-2">
                {recipe.storageTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-400 font-black">•</span>
                    <span className="text-gray-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/60 p-6 rounded-2xl text-center">
              <p className="text-xs text-gray-500">{recipe._disclaimer}</p>
            </div>
          </div>
        )}

        {/* EFT MODAL */}
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
    </div>
  )
}