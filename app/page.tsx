'use client'
import { useEffect, useState } from 'react'
import { RECIPES } from '../data/recipes'
import Link from 'next/link'

export default function HomePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])
  const [showEFT, setShowEFT] = useState<string | null>(null)
  const [showPortal, setShowPortal] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const allPaidRecipes = Object.values(RECIPES).filter(r => r._type === 'PAID' || r._type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r._type === 'FREE')
  const exclusiveRecipe = Object.values(RECIPES).find(r => r._type === 'EXCLUSIVE')
  const subscriptionRecipe = Object.values(RECIPES).find(r => r._type === 'SUBSCRIPTION')
  const featuredRecipes = allPaidRecipes.slice(0, 3)

  useEffect(() => {
    const saved = localStorage.getItem('zap_unlocked_recipes')
    if (saved) {
      const unlocked = JSON.parse(saved)
      setUnlockedRecipes(unlocked)
      setIsSubscribed(unlocked.includes('sub-001'))
    }
  }, [])

  const copyEFT = (ref: string) => {
    navigator.clipboard.writeText(`Zap Sauce ${ref}`)
    alert(`EFT Reference copied: Zap Sauce ${ref}\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME\nSwift: LESHLSMMXXX\nAcc Holder: Makhauhelo Moima\n\nMPESA: 57031600`)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/26657031600?text=Hello%20Zap%20Sauce%20Support%20⚡%20I%20need%20help', '_blank')
  }

  const isLocked = (recipeId: string) => {
    return!unlockedRecipes.includes(recipeId) && recipeId!== 'free-001' && recipeId!== 'free-002'
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-xs text-[#00C85F] font-bold hidden sm:block">Lightning in a jar! ⚡</span>
          </div>
          <div className="flex gap-2 md:gap-3 text-xs md:text-sm">
            <button onClick={() => setShowPortal(true)} className="text-[#00C85F] hover:text-[#00E06D] font-bold transition-colors">
              Portal
            </button>
            <Link href="/admin" className="text-gray-400 hover:text-[#00C85F] font-bold transition-colors">
              Admin
            </Link>
            <button onClick={handleWhatsApp} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-2 md:px-3 py-1 rounded-lg transition-all">
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00A651]/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-[#00E06D] mb-4 drop-shadow-lg">
            Zap Sauce.
          </h1>
          <p className="text-2xl md:text-4xl text-[#00C85F] font-black mb-3">
            Lightning in a jar! ⚡
          </p>
          <p className="text-xl md:text-2xl text-white font-black mb-2">
            20 Healing Recipes
          </p>
          <p className="text-lg md:text-xl text-[#00E06D] font-black mb-8 italic">
            1 tablespoon daily keeps the doctor away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recipes" className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-4 rounded-xl text-xl inline-block transition-all shadow-lg shadow-[#00E06D]/30 hover:scale-105">
              View All Recipes
            </Link>
            {subscriptionRecipe && (
              <Link href={`/recipes/${subscriptionRecipe.id}`} className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-xl text-xl inline-block transition-all shadow-lg hover:scale-105">
                Subscribe Now
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#00A651]/20 via-[#00E06D]/10 to-[#00A651]/20 py-6 border-y border-[#00A651]/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-black text-[#00E06D]">
            Wisdom in a modern jar. For families with lightning immune systems.
          </p>
        </div>
      </div>

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

      {subscriptionRecipe && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="border-2 border-yellow-500 bg-gradient-to-br from-yellow-900/20 to-black p-8 md:p-12 rounded-2xl text-center shadow-xl shadow-yellow-500/20">
            <div className="text-sm bg-yellow-500 text-black px-4 py-1 rounded-full font-black inline-block mb-4">SUBSCRIPTION</div>
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">{subscriptionRecipe.name}</h2>
            <p className="text-xl text-gray-300 mb-3">{subscriptionRecipe.subtitle}</p>
            <p className="text-lg text-yellow-200 mb-6">Access all 20 recipes + EXCLUSIVE TANGY FUSION</p>
            <div className="text-6xl font-black text-yellow-400 mb-6">M{subscriptionRecipe.cost}/month</div>
            <Link href={`/recipes/${subscriptionRecipe.id}`} className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 py-5 rounded-xl text-2xl inline-block transition-all shadow-lg hover:scale-105">
              Subscribe & Unlock All
            </Link>
            <p className="text-sm text-gray-500 mt-4">Cancel anytime. Instant access.</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-white mb-3">FEATURED RECIPES</h2>
          <p className="text-gray-400 text-lg">MPESA 57031600 or EFT Bank Transfer</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-xl hover:border-[#00E06D] transition-all relative">
              {isLocked(recipe.id) && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <p className="text-[#00E06D] font-black text-xl">LOCKED</p>
                  </div>
                </div>
              )}

              {recipe._type === 'SUBSCRIPTION' && (
                <div className="text-sm bg-yellow-500 text-black px-4 py-1 rounded-full font-black inline-block mb-3">SUBSCRIPTION</div>
              )}
              {recipe._type === 'PAID' && (
                <div className="text-sm bg-[#00C85F] text-black px-4 py-1 rounded-full font-black inline-block mb-3">PAID</div>
              )}
              <h3 className="text-xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
              {recipe.subtitle && <p className="text-xs text-gray-400 mb-4">{recipe.subtitle}</p>}
              <div className="text-3xl font-black text-white mb-4">M{recipe.cost}</div>

              {isLocked(recipe.id)? (
                <Link href={`/recipes/${recipe.id}`} className="bg-gray-700 hover:bg-gray-600 text-white font-black px-4 py-3 rounded-xl text-base w-full block text-center mb-3 transition-all">
                  🔒 Unlock M{recipe.cost}
                </Link>
              ) : (
                <Link href={`/recipes/${recipe.id}`} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-4 py-3 rounded-xl text-base w-full block text-center mb-3 transition-all">
                  View Recipe
                </Link>
              )}

              {recipe._ussd && (
                <button onClick={() => setShowEFT(recipe.id)} className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651]/20 font-black px-4 py-2 rounded-xl text-sm w-full transition-all">
                  EFT Bank Transfer
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-black text-lg">
            View All 20 Recipes →
          </Link>
        </div>
      </div>

      {exclusiveRecipe && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="border-2 border-purple-600 bg-gradient-to-br from-purple-900/30 to-black p-8 md:p-12 rounded-2xl text-center shadow-xl shadow-purple-600/20">
            <div className="text-sm bg-purple-600 text-white px-4 py-1 rounded-full font-black inline-block mb-4">EXCLUSIVE</div>
            <h2 className="text-4xl md:text-5xl font-black text-purple-400 mb-3">{exclusiveRecipe.name}</h2>
            <p className="text-gray-300 text-lg mb-6">Unlocked with MONTHLY HEAL subscription only</p>
            <div className="text-6xl font-black text-purple-300 mb-6">🔒</div>
            {subscriptionRecipe && (
              <Link href={`/recipes/${subscriptionRecipe.id}`} className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-xl text-xl inline-block transition-all">
                Subscribe to Unlock
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-2 border-[#00E06D] bg-gradient-to-br from-[#00A651]/20 to-black p-8 rounded-2xl text-center">
          <h2 className="text-3xl font-black text-[#00E06D] mb-3">Need Help?</h2>
          <p className="text-lg text-gray-300 mb-6">Chat with Zap Sauce Support on WhatsApp</p>
          <button onClick={handleWhatsApp} className="bg-[#00E06D] hover:bg-[#00C85F] text-black font-black px-8 py-4 rounded-xl text-xl inline-block transition-all shadow-lg hover:scale-105">
            💬 WhatsApp Support
          </button>
          <p className="text-sm text-gray-500 mt-4">Mon-Fri 8am-6pm CAT</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-black text-[#00E06D] mb-3">Zap Sauce.</h3>
              <p className="text-sm text-gray-400">Lightning in a jar! ⚡</p>
              <p className="text-sm text-[#00C85F] font-bold mt-2">20 Products Locked ⚡</p>
            </div>
            <div>
              <h4 className="text-sm font-black text-[#00C85F] mb-3">Recipes</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/recipes" className="text-gray-400 hover:text-[#00E06D]">All Recipes</Link></li>
                <li><button onClick={() => setShowPortal(true)} className="text-gray-400 hover:text-[#00E06D]">Customer Portal</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-[#00C85F] mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={handleWhatsApp} className="text-gray-400 hover:text-[#00E06D]">WhatsApp</button></li>
                <li><Link href="/recipes" className="text-gray-400 hover:text-[#00E06D]">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-[#00C85F] mb-3">Admin</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/admin" className="text-gray-400 hover:text-[#00E06D]">Dashboard</Link></li>
                <li><Link href="/recipes" className="text-gray-400 hover:text-[#00E06D]">Manage</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-base text-gray-500 mb-2">© 2026 Zap Sauce. For considered families.</p>
            <p className="text-xs text-gray-600">Not medical advice. Consult your doctor.</p>
            <p className="text-sm text-[#00E06D] font-black mt-4 italic">Wisdom in a modern jar. For families with lightning immune systems.</p>
          </div>
        </div>
      </div>

      {showPortal && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowPortal(false)}>
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-[#00E06D]/30" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-4xl font-black text-[#00E06D] mb-6 text-center">Customer Portal</h2>
            <div className="space-y-4">
              <Link href="/recipes" onClick={() => setShowPortal(false)} className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-xl text-xl w-full block text-center transition-all">
                My Recipes
              </Link>
              <button onClick={handleWhatsApp} className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651]/20 font-black px-6 py-4 rounded-xl text-xl w-full transition-all">
                Contact Support
              </button>
              {subscriptionRecipe && (
                <Link href={`/recipes/${subscriptionRecipe.id}`} onClick={() => setShowPortal(false)} className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-6 py-4 rounded-xl text-xl w-full block text-center transition-all">
                  Manage Subscription
                </Link>
              )}
            </div>
            <button onClick={() => setShowPortal(false)} className="text-gray-400 hover:text-white mt-6 w-full text-lg">
              Close
            </button>
          </div>
        </div>
      )}

      {showEFT && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowEFT(null)}>
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-[#00E06D]/30" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-4xl font-black text-[#00E06D] mb-6 text-center">Payment Details</h2>
            <div className="space-y-4 text-lg">
              <div className="bg-green-900/30 p-4 rounded-xl border-[#00A651]">
                <p className="text-[#00C85F] font-black text-sm mb-2">MPESA PAYMENT:</p>
                <p className="text-white text-3xl font-black">57031600</p>
                <p className="text-gray-400 text-xs mt-1">Use reference: Zap Sauce {RECIPES[showEFT]._ref}</p>
              </div>

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
                <p className="text-[#00C85F] font-bold text-sm">Swift:</p>
                <p className="text-white text-xl font-black">LESHLSMMXXX</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Acc Holder:</p>
                <p className="text-white text-xl font-black">Makhauhelo Moima</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Reference:</p>
                <p className="text-white text-xl font-black">Zap Sauce {RECIPES[showEFT]._ref}</p>
              </div>
              <div className="bg-black/60 p-4 rounded-xl">
                <p className="text-[#00C85F] font-bold text-sm">Amount:</p>
                <p className="text-white text-3xl font-black">M{RECIPES[showEFT].cost}</p>
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