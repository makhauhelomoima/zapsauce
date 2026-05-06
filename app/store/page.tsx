'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StorePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      setUnlockedRecipes(JSON.parse(saved))
    }
  }, [])

  const verifyPayment = async (recipeId: string, amount: number) => {
    if (!mpesaCode.trim()) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const newUnlocked = [...unlockedRecipes, recipeId]
      setUnlockedRecipes(newUnlocked)
      localStorage.setItem('zapSauceUnlocked', JSON.stringify(newUnlocked))
      setMpesaCode('')
      setSelectedRecipe(null)
      alert(`Payment verified! ${recipeId.toUpperCase()} unlocked ⚡`)
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  const isLocked = (recipeId: string) => {
    return !unlockedRecipes.includes(recipeId)
  }

  const ussdString = (amount: number) => `*200#1*1*57031600*${amount}#`

  const storeItems = [
    {
      id: 'zap-001',
      name: 'ZAP SAUCE ORIGINAL ⚡',
      price: 120,
      subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
      desc: 'Full formula + batch method + dosing protocol. The core lightning.',
      badge: 'BESTSELLER'
    },
    {
      id: 'master-001',
      name: 'MASTER BASE JAR',
      price: 150,
      subtitle: '250ml Readymade | Makes 16 doses',
      desc: 'Sterilized + sealed. 6 months shelf life. Resell at M200+ for 42% profit.',
      badge: 'EXCLUSIVE'
    },
    {
      id: 'excl-001',
      name: 'TANGY FUSION',
      price: 100,
      subtitle: 'EXCLUSIVE - Tamarind + Pineapple + Scotch Bonnet',
      desc: 'Full recipe + readymade option. Only from Makhauhelo.',
      badge: 'EXCLUSIVE'
    }
  ]

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651]">Store ⚡</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-[#00A651]">Home</Link>
            <Link href="/portal" className="text-xs text-gray-400 hover:text-[#00A651]">Customer Portal</Link>
            <a href="https://wa.me/26657031600" target="_blank" className="text-xs text-[#25D366] hover:text-[#20BD5C]">WhatsApp</a>
            <div className="text-xs text-gray-400">MPESA: 57031600</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#00E06D]">OFFICIAL</span> STORE ⚡
          </h1>
          <p className="text-xl text-gray-300 mb-2">Original + Master Base + TANGY FUSION</p>
          <p className="text-lg text-[#00A651] font-bold">Only from Makhauhelo Moima</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {storeItems.map((item) => (
            <div key={item.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 hover:border-[#00E06D]/50 transition-all relative">
              {item.badge && (
                <div className="absolute -top-3 -right-3 bg-[#00E06D] text-black text-xs font-black px-3 py-1 rounded-full">
                  {item.badge}
                </div>
              )}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <div className="text-right">
                  <div className="text-[#00E06D] font-black text-2xl">M{item.price}</div>
                  <div className="text-xs text-gray-500">Ref: {item.id.toUpperCase()}</div>
                </div>
              </div>

              <p className="text-sm text-[#00A651] mb-3">{item.subtitle}</p>
              <p className="text-sm text-gray-300 mb-4">{item.desc}</p>

              {isLocked(item.id)? (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-400 font-bold mb-2">🔒 PAYMENT REQUIRED</p>
                    <p className="text-xs text-gray-400 mb-1">MPESA: 57031600 | Ref: {item.id.toUpperCase()}</p>
                    <p className="text-xs text-[#00A651] mb-2">USSD: {ussdString(item.price)}</p>
                    <input
                      type="text"
                      placeholder="Enter MPESA code"
                      value={selectedRecipe === item.id? mpesaCode : ''}
                      onChange={(e) => {
                        setMpesaCode(e.target.value)
                        setSelectedRecipe(item.id)
                      }}
                      className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                    />
                    <button
                      onClick={() => verifyPayment(item.id, item.price)}
                      disabled={verifying || selectedRecipe!== item.id}
                      className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
                    >
                      {verifying && selectedRecipe === item.id? 'Verifying...' : 'Buy Now'}
                    </button>
                  </div>
                  <a
                    href={`https://wa.me/26657031600?text=I%20want%20to%20order%20${item.name}`}
                    target="_blank"
                    className="block text-center text-xs text-[#25D366] hover:text-[#20BD5C]"
                  >
                    WhatsApp Order →
                  </a>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3">
                    <p className="text-xs text-[#00E06D] font-bold">✅ PURCHASED</p>
                    <Link href="/portal" className="text-xs text-[#00A651] hover:text-[#00E06D] mt-1 block">
                      View in Customer Portal →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-6 text-center">BUSINESS PACKAGES</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">MONTHLY HEAL</h3>
              <div className="text-[#00E06D] font-black text-2xl mb-3">M120<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ Original + TANGY FUSION access</li>
                <li>✓ 30% affiliate on all store sales</li>
                <li>✓ Monthly commission payout</li>
                <li>✓ Customer Portal dashboard</li>
              </ul>
              <a href="https://wa.me/26657031600?text=I%20want%20Monthly%20Heal" className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm text-center">
                Subscribe
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: {ussdString(120)}</p>
            </div>

            <div className="bg-gray-900/50 border border-[#00E06D]/50 rounded-xl p-6 relative">
              <div className="absolute -top-3 -right-3 bg-[#00E06D] text-black text-xs font-black px-3 py-1 rounded-full">POPULAR</div>
              <h3 className="text-lg font-bold text-white mb-2">HUSTLER'S VAULT</h3>
              <div className="text-[#00E06D] font-black text-2xl mb-3">M1200</div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ 11 Recipes instant unlock</li>
                <li>✓ 30% affiliate on all store sales</li>
                <li>✓ Monthly commission payout</li>
                <li>✓ Full Customer Portal access</li>
              </ul>
              <a href="https://wa.me/26657031600?text=I%20want%20Hustlers%20Vault" className="block w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm text-center">
                Get Vault Access
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: {ussdString(1200)}</p>
            </div>

            <div className="bg-gray-900/50 border border-yellow-500/40 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">FRANCHISE KIT</h3>
              <div className="text-yellow-400 font-black text-2xl mb-3">M2500</div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ Master Base + 17 recipes</li>
                <li>✓ Branding + Scripts included</li>
                <li>✓ WhatsApp Support</li>
                <li>✗ No affiliate [You sell direct]</li>
              </ul>
              <a href="https://wa.me/26657031600?text=I%20want%20Franchise%20Kit" className="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded text-sm text-center">
                Become Franchisee
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: {ussdString(2500)}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce. Lightning in a jar! ⚡</p>
          <p>For Considered Families. Product of Lesotho 🇱🇸</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/" className="text-[#00A651] hover:text-[#00E06D]">Home</Link>
            <Link href="/login" className="text-[#00A651] hover:text-[#00E06D]">Admin Login</Link>
            <Link href="/portal" className="text-[#00A651] hover:text-[#00E06D]">Customer Portal</Link>
            <a href="https://wa.me/26657031600" className="text-[#25D366] hover:text-[#20BD5C]">WhatsApp Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}