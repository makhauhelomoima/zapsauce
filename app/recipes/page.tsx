'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function RecipesPage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [hasVault, setHasVault] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      const unlocked = JSON.parse(saved)
      setUnlockedRecipes(unlocked)
      setHasVault(unlocked.includes('bundle-001'))
    }
  }, [])

  const vaultBundle = recipes.find(r => r.id === 'bundle-001')
  const freeRecipes = recipes.filter(r => r.category === 'free')
  const paidRecipes = recipes.filter(r => r.category === 'paid' || r.category === 'subscription' || r.category === 'exclusive')

  const getTypeBadge = (category: string) => {
    switch(category) {
      case 'free':
        return <span className="text-xs font-bold text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">FREE</span>
      case 'subscription':
        return <span className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded">SUBSCRIPTION</span>
      case 'exclusive':
        return <span className="text-xs font-bold text-purple-400 bg-purple-400/20 px-2 py-1 rounded">EXCLUSIVE</span>
      default:
        return <span className="text-xs font-bold text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">PAID</span>
    }
  }

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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black text-white text-center mb-2">All Recipes</h1>
        <p className="text-gray-400 text-center mb-8">Lightning in a jar! ⚡ From Lesotho 🇱🇸</p>

        {/* HUSTLER'S VAULT - Featured at top */}
        {vaultBundle && (
          <div className="mb-12 bg-gradient-to-r from-[#00A651]/20 to-[#00E06D]/20 border-2 border-[#00E06D] rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-3 py-1 rounded inline-block mb-3">💚 BUSINESS OPPORTUNITY</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">HUSTLER'S VAULT</h2>
              <p className="text-[#00E06D] font-bold">12 Recipes. One Price. Unlock Your Empire.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-sm text-gray-300 mb-3">Inside the Vault:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                  <div>✓ Original</div><div>✓ Savory Heal</div>
                  <div>✓ Fire Cider</div><div>✓ Liver Flush</div>
                  <div>✓ Brain Tonic</div><div>✓ Sleep Elixir</div>
                  <div>✓ Metabolism</div><div>✓ Heart Guard</div>
                  <div>✓ Skin Glow</div><div>✓ Kidney Cleanse</div>
                  <div>✓ Hormone</div><div>✓ Blood Sugar</div>
                </div>
              </div>
              <div className="bg-black/40 rounded-xl p-6">
                <div className="text-gray-400 text-sm line-through mb-1">M{vaultBundle.originalPrice}</div>
                <div className="text-4xl font-black text-[#00E06D] mb-2">M{vaultBundle.price}</div>
                <div className="text-xs text-yellow-400 font-bold mb-4">SAVE M{vaultBundle.originalPrice! - vaultBundle.price} + UNLOCK 30% AFFILIATE</div>
                <button className="w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-black py-3 rounded-lg text-lg mb-3">
                  📱 MPESA *200# M{vaultBundle.price}
                </button>
                <button className="w-full bg-transparent border border-[#00A651]/40 text-[#00A651] py-2 rounded-lg text-sm">
                  EFT Bank Transfer
                </button>
                <div className="text-xs text-gray-500 mt-3 text-center">Ref: {vaultBundle.id.toUpperCase()}</div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/40 rounded-lg p-3 text-center">
              <p className="text-sm text-yellow-400 font-bold">⚡ ONLY Hustler's Vault owners earn 30% on referrals</p>
            </div>
          </div>
        )}

        {/* FREE SAMPLES */}
        {freeRecipes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-black text-[#00E06D] text-center mb-2">FREE SAMPLES</h2>
            <p className="text-gray-400 text-center mb-6">Try Zap Sauce on us. No payment needed.</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {freeRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                  <div className="text-xs text-[#00E06D] font-bold mb-2">FREE</div>
                  <h3 className="text-xl font-bold text-[#00E06D] mb-2">{recipe.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>
                  <div className="text-xs text-gray-500 mb-4">Prep: {recipe.time} | Serves: 1</div>
                  <Link href={`/recipes/${recipe.id}`} className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black text-center py-3 rounded-lg font-bold">
                    Get Free Recipe →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAID RECIPES - YOUR LAYOUT */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white text-center mb-2">FEATURED RECIPES</h2>
          <p className="text-gray-400 text-center mb-8">MPESA *200# or EFT Bank Transfer</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                <div className="text-xs font-bold mb-2">
                  {getTypeBadge(recipe.category)}
                </div>

                <h3 className="text-lg font-bold text-[#00E06D] mb-2">{recipe.name}</h3>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">CURES:</div>
                  <div className="text-xs text-gray-300 space-y-1">
                    {recipe.benefits.split('. ').slice(0, 3).map((benefit, i) => (
                      <div key={i}>✓ {benefit}</div>
                    ))}
                  </div>
                </div>

                {recipe.category === 'subscription' && (
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-2 mb-3">
                    <div className="text-xs text-yellow-400">⚡ Subscription unlocks EXCLUSIVE recipe</div>
                  </div>
                )}

                <div className="text-2xl font-black text-white mb-1">M{recipe.price}</div>
                <div className="text-xs text-gray-500 mb-4">Ref: {recipe.id.toUpperCase()}</div>

                <button className="w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-bold py-3 rounded-lg mb-2 text-sm">
                  📱 MPESA *200# M{recipe.price}
                </button>

                <button className="w-full bg-transparent border border-[#00A651]/40 text-[#00A651] py-2 rounded-lg text-sm mb-3">
                  EFT Bank Transfer
                </button>

                <Link href={`/recipes/${recipe.id}`} className="block text-center text-xs text-gray-400 hover:text-[#00E06D]">
                  Preview Ingredients
                </Link>

                {recipe.affiliationEligible === false && (
                  <div className="text-xs text-red-400/70 text-center mt-2">No affiliate commissions</div>
                )}
                {hasVault && recipe.affiliationEligible && (
                  <div className="text-xs text-[#00E06D] text-center mt-2">✓ 30% affiliate applies</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-12">
          <p>© 2026 Zap Sauce. Lightning in a jar. Product of Lesotho 🇱🇸</p>
          <p>Recipe collection. Not medical advice. Consult your doctor.</p>
        </div>
      </div>

      <a href="https://wa.me/26657031600?text=Hello%20Zap%20Sauce%20Support%20⚡" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  )
}