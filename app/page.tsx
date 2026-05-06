'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes, getFeaturedRecipes } from '@/data/recipes'

export default function HomePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) setUnlockedRecipes(JSON.parse(saved))
    const adminCheck = localStorage.getItem('zapSauceAdmin')
    if (adminCheck === 'true') setIsAdmin(true)
  }, [])

  const saveUnlocked = (recipes: string[]) => {
    setUnlockedRecipes(recipes)
    localStorage.setItem('zapSauceUnlocked', JSON.stringify(recipes))
  }

  const verifyPayment = async (recipeId: string) => {
    if (!mpesaCode.trim()) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const newUnlocked = [...unlockedRecipes, recipeId]
      saveUnlocked(newUnlocked)
      setMpesaCode('')
      alert('Payment verified! Recipe unlocked ⚡')
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  const isLocked = (recipeId: string) => {
    return! unlockedRecipes.includes(recipeId) && recipeId!== 'free-001' && recipeId!== 'free-002'
  }

  const homepageRecipes = getFeaturedRecipes()

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651]">Lightning in a jar! ⚡</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400 hidden sm:block">MPESA: 57031600</div>
            <Link href="/customer" className="text-sm text-[#00A651] hover:text-[#00E06D] font-bold">
              Customer Portal
            </Link>
            {isAdmin && (
              <Link href="/admin" className="text-sm text-red-400 hover:text-red-300 font-bold">
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-[#00E06D]">IMMUNITY</span> IN A JAR! ⚡
          </h1>
          <p className="text-xl text-gray-300 mb-2">20 Healing Recipes | Raw Honey + Cayenne + Turmeric + Cinnamon</p>
          <p className="text-lg text-[#00A651] font-bold">1 tablespoon daily keeps the doctor away</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {homepageRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 hover:border-[#00E06D]/50 transition-all relative">
              {isLocked(recipe.id) && (
                <div className="absolute top-3 right-3 bg-red-900/80 text-white text-xs px-2 py-1 rounded-full font-bold">
                  🔐 LOCKED
                </div>
              )}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{recipe.name}</h3>
                <div className="text-right">
                  <div className="text-[#00E06D] font-black text-xl">
                    {recipe.price === 0? 'FREE' : `M${recipe.price}`}
                  </div>
                  {recipe.price > 0 && <div className="text-xs text-gray-500">Ref: {recipe.id.toUpperCase()}</div>}
                </div>
              </div>

              <p className="text-sm text-[#00A651] mb-2">{recipe.subtitle}</p>
              <p className="text-xs text-gray-400 mb-3">⏱️ {recipe.time}</p>
              <p className="text-sm text-gray-300 mb-4">{recipe.benefits}</p>

              {isLocked(recipe.id)? (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-400 font-bold mb-2">🔒 PAYMENT GATED</p>
                    <p className="text-xs text-gray-400 mb-1">MPESA: 57031600 | USSD: *200#</p>
                    <p className="text-xs text-gray-400 mb-2">Ref: {recipe.id.toUpperCase()}</p>
                    <input
                      type="text"
                      placeholder="Enter MPESA code"
                      value={mpesaCode}
                      onChange={(e) => setMpesaCode(e.target.value)}
                      className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                    />
                    <button
                      onClick={() => verifyPayment(recipe.id)}
                      disabled={verifying}
                      className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
                    >
                      {verifying? 'Verifying...' : 'Unlock Recipe'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-[#00E06D] font-bold mb-2">✅ UNLOCKED</p>
                  </div>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="block w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded text-sm"
                  >
                    View Full Recipe
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/recipes"
            className="inline-block bg-[#00E06D] hover:bg-[#00C85F] text-black font-black px-8 py-4 rounded-lg text-lg"
          >
            View All 20 Recipes →
          </Link>
        </div>

        <div className="mt-16 text-center text-xs text-gray-500">
          <p>© 2026 Zap Sauce. For Considered Families.</p>
          <p>Not medical advice. Consult your doctor before use.</p>
          <p className="mt-2 text-[#00A651]">MPESA: 57031600 | USSD: *200# | WhatsApp: +266 57031600</p>
        </div>
      </div>

      <a
        href="https://wa.me/26657031600?text=Hello%20Zap%20Sauce%20Support%20⚡%20I%20need%20help"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-50 transition-all"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}