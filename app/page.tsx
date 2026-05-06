'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes, packages } from '../data/recipes'

export default function HomePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [mpesaCode, setMpesaCode] = useState('')
  const [eftRef, setEftRef] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'eft'>('mpesa')
  const [verifying, setVerifying] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      setUnlockedRecipes(JSON.parse(saved))
    }
  }, [])

  const verifyPayment = async (recipeId: string, amount: number) => {
    setVerifying(true)
    
    try {
      const payload = paymentMethod === 'mpesa' 
        ? { mpesaCode, recipeId, amount, method: 'mpesa' }
        : { eftRef, recipeId, amount, method: 'eft' }
      
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      
      const data = await response.json()
      
      if (data.success) {
        const newUnlocked = [...unlockedRecipes, recipeId]
        setUnlockedRecipes(newUnlocked)
        localStorage.setItem('zapSauceUnlocked', JSON.stringify(newUnlocked))
        setMpesaCode('')
        setEftRef('')
        setSelectedRecipe(null)
        alert(data.message)
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert('Verification failed. Check connection and try again.')
    }
    
    setVerifying(false)
  }

  const isLocked = (recipeId: string) => {
    return !unlockedRecipes.includes(recipeId) && recipeId !== 'free-001' && recipeId !== 'free-002'
  }

  const ussdString = (amount: number) => `*200#1*1*57031600*${amount}#`

  const freebies = recipes.filter(r => r.category === 'free')
  const favorites = recipes.filter(r => ['zap-001', 'master-001', 'excl-001'].includes(r.id))

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651]">Lightning in a jar! ⚡</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-xs text-gray-400 hover:text-[#00A651]">Login</Link>
            <Link href="/portal" className="text-xs text-gray-400 hover:text-[#00A651]">Customer Portal</Link>
            <a href="https://wa.me/26657031600" target="_blank" className="text-xs text-[#25D366] hover:text-[#20BD5C]">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-[#00E06D]">IMMUNITY</span> IN A JAR! ⚡
          </h1>
          <p className="text-xl text-gray-300 mb-2">21 Exclusive Recipes | Only from Makhauhelo Moima</p>
          <p className="text-lg text-[#00A651] font-bold">1 tablespoon daily keeps the doctor away</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-6 text-center">FREE SAMPLES</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {freebies.map((item) => (
              <div key={item.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <div className="text-[#00E06D] font-black text-xl">FREE</div>
                </div>
                <p className="text-sm text-[#00A651] mb-2">{item.subtitle}</p>
                <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3">
                  <p className="text-xs text-[#00E06D] font-bold mb-2">✅ UNLOCKED</p>
                  <p className="text-sm text-gray-300">{item.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-6 text-center">MY 3 EXCLUSIVES</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {favorites.map((item) => (
              <div key={item.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 hover:border-[#00E06D]/50 transition-all relative">
                <div className="absolute -top-3 -right-3 bg-[#00E06D] text-black text-xs font-black px-3 py-1 rounded-full">
                  EXCLUSIVE
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <div className="text-right">
                    <div className="text-[#00E06D] font-black text-xl">M{item.price}</div>
                    <div className="text-xs text-gray-500">Ref: {item.id.toUpperCase()}</div>
                  </div>
                </div>

                <p className="text-sm text-[#00A651] mb-3">{item.subtitle}</p>
                <p className="text-sm text-gray-300 mb-4">{item.benefits}</p>

                {isLocked(item.id)? (
                  <div className="border-t border-gray-700 pt-4">
                    <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-3">
                      <p className="text-xs text-red-400 font-bold mb-3">🔒 LOCKED - CHOOSE PAYMENT</p>
                      
                      <div className="flex gap-2 mb-3">
                        <button
                          onClick={() => setPaymentMethod('mpesa')}
                          className={`flex-1 py-2 text-xs rounded ${paymentMethod === 'mpesa'? 'bg-[#00A651] text-black font-bold' : 'bg-gray-700 text-gray-300'}`}
                        >
                          MPESA
                        </button>
                        <button
                          onClick={() => setPaymentMethod('eft')}
                          className={`flex-1 py-2 text-xs rounded ${paymentMethod === 'eft'? 'bg-[#00A651] text-black font-bold' : 'bg-gray-700 text-gray-300'}`}
                        >
                          EFT/Bank
                        </button>
                      </div>

                      {paymentMethod === 'mpesa'? (
                        <>
                          <p className="text-xs text-gray-400 mb-1">Send M{item.price} to 57031600</p>
                          <p className="text-xs text-gray-400 mb-1">Name: Makhauhelo Moima</p>
                          <p className="text-xs text-gray-400 mb-1">Ref: {item.id.toUpperCase()}</p>
                          <p className="text-xs text-[#00A651] mb-2">USSD: {ussdString(item.price)}</p>
                          <input
                            type="text"
                            placeholder="MPESA code (QK7X8Y9Z0W)"
                            value={selectedRecipe === item.id? mpesaCode : ''}
                            onChange={(e) => {
                              setMpesaCode(e.target.value.toUpperCase())
                              setSelectedRecipe(item.id)
                            }}
                            className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                          />
                        </>
                      ) : (
                        <>
                          <p className="text-xs text-gray-400 mb-1">Bank: Lesotho Post Bank</p>
                          <p className="text-xs text-gray-400 mb-1">Account: 1036202900018</p>
                          <p className="text-xs text-gray-400 mb-1">Name: Makhauhelo Moima</p>
                          <p className="text-xs text-gray-400 mb-1">Branch: BONHOMME</p>
                          <p className="text-xs text-gray-400 mb-1">SWIFT: LESHLSMMXXX</p>
                          <p className="text-xs text-gray-400 mb-2">Ref: {item.id.toUpperCase()}</p>
                          <input
                            type="text"
                            placeholder="EFT Reference Number"
                            value={selectedRecipe === item.id? eftRef : ''}
                            onChange={(e) => {
                              setEftRef(e.target.value)
                              setSelectedRecipe(item.id)
                            }}
                            className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                          />
                          <p className="text-xs text-yellow-400 mb-2">Allow 2hrs for EFT to reflect</p>
                        </>
                      )}

                      <button
                        onClick={() => verifyPayment(item.id, item.price)}
                        disabled={verifying || selectedRecipe !== item.id}
                        className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
                      >
                        {verifying && selectedRecipe === item.id? 'Verifying...' : 'Verify Payment'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="border-t border-gray-700 pt-4">
                    <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3">
                      <p className="text-xs text-[#00E06D] font-bold">✅ PURCHASED - Access in Customer Portal</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-6 text-center">BUSINESS PACKAGES</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">{packages.monthlyHeal.name}</h3>
              <div className="text-[#00E06D] font-black text-2xl mb-3">M{packages.monthlyHeal.price}<span className="text-sm">/mo</span></div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ Original + TANGY FUSION access</li>
                <li>✓ 30% affiliate on local sales</li>
                <li>✓ Monthly commission payout</li>
                <li className="text-yellow-400">📍 Lesotho Only</li>
              </ul>
              <a href={`https://wa.me/26657031600?text=I%20want%20${packages.monthlyHeal.name}`} className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm text-center">
                Subscribe Local
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: {ussdString(packages.monthlyHeal.price)}</p>
            </div>

            <div className="bg-gray-900/50 border border-[#00E06D]/50 rounded-xl p-6 relative">
              <div className="absolute -top-3 -right-3 bg-[#00E06D] text-black text-xs font-black px-3 py-1 rounded-full">POPULAR</div>
              <h3 className="text-lg font-bold text-white mb-2">{packages.hustlersVault.name}</h3>
              <div className="text-[#00E06D] font-black text-2xl mb-3">M{packages.hustlersVault.price}</div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ 11 Recipes instant unlock</li>
                <li>✓ 30% affiliate on local sales</li>
                <li>✓ Monthly commission payout</li>
                <li className="text-yellow-400">📍 Lesotho Only</li>
              </ul>
              <a href={`https://wa.me/26657031600?text=I%20want%20${packages.hustlersVault.name}`} className="block w-full bg-[#00E06D] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm text-center">
                Get Vault Access
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: {ussdString(packages.hustlersVault.price)}</p>
            </div>

            <div className="bg-gray-900/50 border border-yellow-500/40 rounded-xl p-6 relative">
              <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full">GLOBAL 🌍</div>
              <h3 className="text-lg font-bold text-white mb-2">{packages.franchiseKit.name}</h3>
              <div className="text-yellow-400 font-black text-2xl mb-3">M{packages.franchiseKit.price}</div>
              <ul className="text-sm text-gray-300 mb-4 space-y-1">
                <li>✓ Master Base + 17 recipes</li>
                <li>✓ Branding kit + Scripts</li>
                <li>✓ WhatsApp Support forever</li>
                <li>✓ <span className="text-[#00E06D] font-bold">Complete PDF package</span></li>
                <li>✓ <span className="text-[#00E06D] font-bold">Instant WhatsApp delivery</span></li>
                <li className="text-[#00E06D] font-bold">✗ No affiliate stress [You own it all]</li>
              </ul>
              <div className="bg-yellow-500/10 border border-yellow-500/40 rounded p-2 mb-3">
                <p className="text-xs text-yellow-400 font-bold">📦 GLOBAL: Complete PDF sent to your WhatsApp after payment confirmation</p>
              </div>
              <a href={`https://wa.me/26657031600?text=I%20want%20${packages.franchiseKit.name}%20-%20PDF%20Delivery`} className="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded text-sm text-center">
                Order Global PDF
              </a>
              <p className="text-xs text-gray-500 mt-2 text-center">USSD: *200#1*1*57031600*{packages.franchiseKit.price}# | EFT: 1036202900018</p>
            </div>
          </div>
        </div>

        <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-[#00E06D] mb-3 text-center">💳 Payment Options</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white font-bold mb-2">MPESA</p>
              <p className="text-gray-300">Number: 57031600</p>
              <p className="text-gray-300">Name: Makhauhelo Moima</p>
              <p className="text-[#00A651]">USSD: *200#1*1*57031600*amount#</p>
            </div>
            <div>
              <p className="text-white font-bold mb-2">EFT - Lesotho Post Bank</p>
              <p className="text-gray-300">Account: 1036202900018</p>
              <p className="text-gray-300">Name: Makhauhelo Moima</p>
              <p className="text-gray-300">Branch: BONHOMME</p>
              <p className="text-gray-300">SWIFT: LESHLSMMXXX</p>
            </div>
          </div>
          <p className="text-xs text-yellow-400 mt-3 text-center">Use product code as reference. EFT takes 2hrs to reflect.</p>
        </div>

        <div className="text-center">
          <div className="bg-blue-900/20 border border-blue-500/40 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-blue-400 mb-3">🔐 All 21 Recipes Available</h3>
            <p className="text-gray-300 mb-4">Purchase any package above to unlock full catalog in Customer Portal</p>
            <Link href="/portal" className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg">
              View Full Catalog →
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce. Lightning in a jar! ⚡</p>
          <p>For Considered Families. Product of Lesotho 🇱🇸</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/login" className="text-[#00A651] hover:text-[#00E06D]">Admin Login</Link>
            <Link href="/portal" className="text-[#00A651] hover:text-[#00E06D]">Customer Portal</Link>
            <a href="https://wa.me/26657031600" className="text-[#25D366] hover:text-[#20BD5C]">WhatsApp Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}