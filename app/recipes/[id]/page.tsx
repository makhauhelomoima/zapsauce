'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getRecipeById } from '@/data/recipes'

export default function RecipePage() {
  const params = useParams()
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)
  const recipe = getRecipeById(params.id as string)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) setUnlockedRecipes(JSON.parse(saved))
  }, [])

  const saveUnlocked = (recipes: string[]) => {
    setUnlockedRecipes(recipes)
    localStorage.setItem('zapSauceUnlocked', JSON.stringify(recipes))
  }

  const verifyPayment = async () => {
    if (!mpesaCode.trim() ||!recipe) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const newUnlocked = [...unlockedRecipes, recipe.id]
      saveUnlocked(newUnlocked)
      setMpesaCode('')
      alert('Payment verified! Recipe unlocked ⚡')
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  const isLocked = () => {
    if (!recipe) return true
    return !unlockedRecipes.includes(recipe.id) && recipe.id!== 'free-001' && recipe.id!== 'free-002'
  }

  if (!recipe) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe Not Found</h1>
          <Link href="/recipes" className="text-[#00A651] hover:text-[#00E06D]">← Back to All Recipes</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-[#00E06D]">Zap Sauce.</Link>
          <Link href="/recipes" className="text-sm text-[#00A651] hover:text-[#00E06D]">← All Recipes</Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-black text-white mb-2">{recipe.name}</h1>
              <p className="text-[#00A651]">{recipe.subtitle}</p>
              <p className="text-sm text-gray-400 mt-1">⏱️ {recipe.time}</p>
            </div>
            <div className="text-right">
              <div className="text-[#00E06D] font-black text-3xl">{recipe.price === 0? 'FREE' : `M${recipe.price}`}</div>
              {recipe.price > 0 && <div className="text-xs text-gray-500">Ref: {recipe.id.toUpperCase()}</div>}
            </div>
          </div>

          {isLocked()? (
            <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🔐</div>
              <h2 className="text-2xl font-bold text-red-400 mb-4">Recipe Locked</h2>
              <p className="text-gray-300 mb-6">{recipe.benefits}</p>
              <div className="max-w-sm mx-auto">
                <p className="text-sm text-gray-400 mb-2">MPESA: 57031600 | USSD: *200#</p>
                <p className="text-sm text-gray-400 mb-4">Ref: {recipe.id.toUpperCase()}</p>
                <input type="text" placeholder="Enter MPESA code" value={mpesaCode} onChange={(e) => setMpesaCode(e.target.value)} className="w-full bg-black border border-gray-600 rounded px-4 py-3 text-center mb-3" />
                <button onClick={verifyPayment} disabled={verifying} className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-3 rounded disabled:opacity-50">
                  {verifying? 'Verifying...' : `Unlock for M${recipe.price}`}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-4 mb-6">
                <p className="text-[#00E06D] font-bold">✅ UNLOCKED</p>
                <p className="text-gray-300 mt-2">{recipe.benefits}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Ingredients:</h3>
                  <ul className="space-y-2">{recipe.ingredients.map((ing, i) => (<li key={i} className="text-gray-300 flex items-start gap-2"><span className="text-[#00E06D]">•</span> {ing}</li>))}</ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Preparation:</h3>
                  <ol className="space-y-2">{recipe.prep.map((step, i) => (<li key={i} className="text-gray-300 flex gap-3"><span className="text-[#00E06D] font-bold">{i + 1}.</span> {step}</li>))}</ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <a href={`https://wa.me/26657031600?text=Hello%20Zap%20Sauce%20Support%20⚡%20I%20need%20help%20with%20${recipe.id.toUpperCase()}`} target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  )
}