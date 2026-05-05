'use client'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'
import { useState, useEffect } from 'react'[id]

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)
  const [showEFT, setShowEFT] = useState<string | null>(null)
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])

  const paidRecipes = Object.values(RECIPES).filter(r => r.type === 'PAID' || r.type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r.type === 'FREE')

  useEffect(() => {
    // Load unlocked recipes from browser
    const unlocked: string[] = []
    Object.keys(RECIPES).forEach(id => {
      if (localStorage.getItem(`zap_unlocked_${id}`) === 'true') {
        unlocked.push(id)
      }
    })
    setUnlockedRecipes(unlocked)
  }, [])

  const handleUSSD = (ussd: string) => {
    window.location.href = `tel:${ussd}`
  }

  const copyEFT = (ref: string) => {
    navigator.clipboard.writeText(`Zap Sauce ${ref}`)
    alert(`EFT Reference copied: Zap Sauce ${ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME\nAcc Holder: Makhauhelo Moima`)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3">
            <h1 className="text-5xl font-black text-[#00E06D] drop-shadow-[0_0_30px_rgba(0,224,109,0.8)]">
              Zap Sauce.
            </h1>
          </Link>
          <p className="text-2xl text-[#00C85F] mb-2 font-black">14 Paid Recipes</p>
          <p className="text-base text-gray-300 font-semibold">Tap USSD to pay • EFT available • Subscribe for EXCLUSIVE</p>
        </div>

        {/* Subscribe CTA Banner */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 border-3 border-yellow-300 rounded-2xl p-6 mb-6 backdrop-blur text-center shadow-2xl shadow-yellow-500/40">
          <h3 className="text-3xl font-black text-black mb-2">🔒 SUBSCRIBERS GET EXCLUSIVE RECIPE</h3>
          <p className="text-black text-lg mb-4 font-bold">Monthly Heal M120 unlocks: Ginger+Turmeric+Honey+Cayenne+Cinnamon+ACV — TANGY FUSION</p>
          <Link
            href="/subscribe"
            className="bg-black hover:bg-gray-900 text-yellow-400 font-black px-8 py-4 rounded-xl text-xl shadow-xl inline-block border-2 border-black"
          >
            Subscribe Now M120/month →
          </Link>
        </div>

        {/* FREE TEASERS */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4 text-center">FREE SAMPLES</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {freeRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00E06D] bg-black/60 backdrop-blur p-5 rounded-xl">
                <div className="text-sm bg-[#00A651] text-white px-3 py-1 rounded-md font-black inline-block mb-2">FREE</div>
                <h3 className="text-2xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-gray-300 text-base mb-3">{recipe.subtitle}</p>
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-lg text-lg w-full block text-center"
                >
                  View Recipe 🎁
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PAID RECIPES GRID - 14 TOTAL */}
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white mb-4 text-center">14 PAID RECIPES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paidRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-gray-900/90 backdrop-blur p-5 rounded-xl hover:border-[#00C85F] hover:shadow-xl hover:shadow-green-500/30 transition-all">

                {recipe.type === 'SUBSCRIPTION' && (
                  <div className="text-sm bg-yellow-500 text-black px-3 py-1 rounded-md font-black inline-block mb-2">SUBSCRIPTION</div>
                )}
                {recipe.type === 'PAID' && (
                  <div className="text-sm bg-[#00C85F] text-black px-3 py-1 rounded-md font-black inline-block mb-2">PAID</div>
                )}

                <h3 className="text-2xl font-black text-[#00E06D] mb-1">{recipe.name}</h3>
                {recipe.subtitle && <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>}

                <div className="text-sm text-[#00C85F] mb-2 mt-3 font-bold">CURES:</div>
                <ul className="text-sm mb-4">
                  {recipe.cures.slice(0, 3).map((cure, i) => (
                    <li key={i} className="mb-1 text-gray-300 flex items-start">
                      <span className="text-[#00E06D] mr-2">✓</span>
                      <span>{cure}</span>
                    </li>
                  ))}
                  {recipe.cures.length > 3 && <li className="text-gray-500 text-xs">+{recipe.cures.length - 3} more</li>}
                </ul>

                {recipe.warning && (
                  <div className="bg-yellow-900/40 border border-yellow-600 p-2 rounded mb-3 text-sm text-yellow-200">
                    ⚠️ {recipe.warning}
                  </div>
                )}

                <div className="border-t border-gray-700 pt-4 mt-3">
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <div className="text-4xl font-black text-white">M{recipe.price}</div>
                      <div className="text-xs text-gray-500">Ref: {recipe.ref}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#00C85F] font-bold mb-1">MPESA:</div>
                      <div className="text-sm text-white font-mono">{recipe.ussd}</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {unlockedRecipes.includes(recipe.id)? (
                      <div className="bg-[#00A651]/20 border-2 border-[#00E06D] rounded-lg p-3 text-center">
                        <p className="text-[#00E06D] font-black text-lg mb-2">✅ UNLOCKED</p>
                        <Link
                          href={`/recipes/${recipe.id}`}
                          className="text-[#00C85F] underline text-base font-bold"
                        >
                          View Full Recipe →
                        </Link>
                      </div>
                    ) : (
                      <>
                        {recipe.ussd && (
                          <button
                            onClick={() => handleUSSD(recipe.ussd!)}
                            className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-4 py-3 rounded-lg text-lg border-2 border-[#00E06D] active:scale-95"
                          >
                            📱 Pay {recipe.ussd}
                          </button>
                        )}
                        <button
                          onClick={() => setShowEFT(recipe.id)}
                          className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651] hover:text-white font-black px-4 py-3 rounded-lg text-base transition-all active:scale-95"
                        >
                          🏦 EFT Bank Transfer
                        </button>
                        <Link
                          href={`/recipes/${recipe.id}`}
                          className="text-gray-400 hover:text-[#00E06D] text-sm underline text-center"
                        >
                          Preview & Unlock Page →
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 mb-6">
          <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] font-black text-lg">
            ← Back to Home
          </Link>
          <div className="text-base text-gray-500 mt-6 font-semibold">
            <p className="mb-1">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
            <p>© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
          </div>
        </div>
      </div>

      {/* EFT MODAL */}
      {showEFT && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowEFT(null)}>
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-black text-[#00E06D] mb-4">EFT Bank Details</h2>
            <div className="space-y-3 text-lg">
              <div><span className="text-[#00C85F] font-bold">Bank:</span> <span className="text-white">Lesotho Post Bank</span></div>
              <div><span className="text-[#00C85F] font-bold">Account:</span> <span className="text-white">1036202900018</span></div>
              <div><span className="text-[#00C85F] font-bold">Branch:</span> <span className="text-white">BONHOMME</span></div>
              <div><span className="text-[#00C85F] font-bold">Reference:</span> <span className="text-white">Zap Sauce {RECIPES[showEFT].ref}</span></div>
              <div><span className="text-[#00C85F] font-bold">Amount:</span> <span className="text-white">M{RECIPES[showEFT].price}</span></div>
            </div>
            <button
              onClick={() => copyEFT(RECIPES[showEFT].ref)}
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full mt-6"
            >
              Copy Reference
            </button>
            <p className="text-sm text-gray-400 mt-4 text-center">After payment, click "Preview & Unlock" on recipe card</p>
            <button onClick={() => setShowEFT(null)} className="text-gray-400 hover:text-white mt-4 w-full">Close</button>
          </div>
        </div>
      )}

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#00A651] hover:bg-[#00C85F] text-white p-4 rounded-full shadow-2xl shadow-green-500/60 transition-all z-50 border-2 border-[#00E06D]"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}