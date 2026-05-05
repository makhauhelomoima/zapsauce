'use client'
import { RECIPES } from '../../../data/recipes'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function RecipePage() {
  const params = useParams()
  const id = params.id as string
  const recipe = RECIPES[id]

  const [mpesaCode, setMpesaCode] = useState('')
  const [eftRef, setEftRef] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [unlockMethod, setUnlockMethod] = useState<'mpesa' | 'eft' | null>(null)
  const [loading, setLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    // Check if already unlocked
    const unlocked = localStorage.getItem(`zap_unlocked_${id}`)
    if (unlocked === 'true') setIsUnlocked(true)

    // Check subscription for EXCLUSIVE
    const subStatus = localStorage.getItem('zap_subscribed')
    if (subStatus === 'true') setIsSubscribed(true)
  }, [id])

  if (!recipe) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-red-500 mb-4">Recipe Not Found</h1>
          <Link href="/recipes" className="text-[#00C85F] underline">← Back to Recipes</Link>
        </div>
      </div>
    )
  }

  // Check if EXCLUSIVE and not subscribed
  if (recipe.isSubscriberOnly &&!isSubscribed) {
    return (
      <div className="bg-black min-h-[100dvh] text-white p-4">
        <div className="max-w-2xl mx-auto pt-12 text-center">
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 border-3 border-yellow-300 rounded-2xl p-8 backdrop-blur shadow-2xl shadow-yellow-500/50">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-4xl font-black text-black mb-4">SUBSCRIBERS ONLY</h1>
            <p className="text-black text-xl mb-6 font-bold">{recipe.name}</p>
            <p className="text-black text-lg mb-8">This EXCLUSIVE recipe unlocks with Monthly Heal subscription</p>
            <Link
              href="/subscribe"
              className="bg-black hover:bg-gray-900 text-yellow-400 font-black px-8 py-5 rounded-xl text-xl shadow-xl inline-block border-2 border-black"
            >
              Subscribe M120/month →
            </Link>
            <Link href="/recipes" className="text-black underline mt-6 block font-semibold">
              ← Back to Recipes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleMpesaUnlock = async () => {
    if (mpesaCode.length < 8) {
      alert('Enter valid 8-digit Mpesa code from SMS')
      return
    }

    setLoading(true)
    // In production: Verify with Vodacom API
    // For now: Accept any 8-digit code
    await new Promise(resolve => setTimeout(resolve, 1500))

    localStorage.setItem(`zap_unlocked_${id}`, 'true')
    localStorage.setItem(`zap_mpesa_${id}`, mpesaCode)
    setIsUnlocked(true)
    setUnlockMethod('mpesa')
    setLoading(false)
  }

  const handleEFTUnlock = async () => {
    if (!eftRef) {
      alert('Enter your EFT payment reference')
      return
    }

    setLoading(true)
    // In production: Check your bank API or admin approval queue
    // For now: Accept any reference with "ZAP" or recipe ref
    await new Promise(resolve => setTimeout(resolve, 1500))

    localStorage.setItem(`zap_unlocked_${id}`, 'true')
    localStorage.setItem(`zap_eft_${id}`, eftRef)
    setIsUnlocked(true)
    setUnlockMethod('eft')
    setLoading(false)
  }

  // FREE RECIPE - Show immediately
  if (recipe.type === 'FREE' || isUnlocked) {
    return (
      <div className="bg-black min-h-[100dvh] text-white p-4">
        <div className="max-w-3xl mx-auto pt-6">

          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-bold text-lg mb-6 inline-block">
            ← Back to All Recipes
          </Link>

          {isUnlocked && (
            <div className="bg-[#00A651]/20 border-2 border-[#00E06D] rounded-xl p-4 mb-6 text-center">
              <p className="text-[#00E06D] font-black text-xl">
                ✅ UNLOCKED via {unlockMethod === 'mpesa'? 'MPESA' : 'EFT'}
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {unlockMethod === 'mpesa'? `Code: ${localStorage.getItem(`zap_mpesa_${id}`)}` : `Ref: ${localStorage.getItem(`zap_eft_${id}`)}`}
              </p>
            </div>
          )}

          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 backdrop-blur shadow-2xl shadow-green-500/40">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-5xl font-black text-[#00E06D] mb-2">{recipe.name}</h1>
                {recipe.subtitle && <p className="text-xl text-gray-300">{recipe.subtitle}</p>}
              </div>
              <div className="text-right">
                <div className={`px-4 py-2 rounded-lg font-black text-lg ${
                  recipe.type === 'FREE'? 'bg-[#00A651] text-white' :
                  recipe.type === 'EXCLUSIVE'? 'bg-yellow-500 text-black' :
                  'bg-[#00C85F] text-black'
                }`}>
                  {recipe.type === 'FREE'? 'FREE' : recipe.type === 'EXCLUSIVE'? 'EXCLUSIVE' : `M${recipe.price}`}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#00C85F] mb-4">CURES:</h2>
              <ul className="space-y-2">
                {recipe.cures.map((cure, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="text-[#00E06D] mr-3 text-2xl">✓</span>
                    <span className="text-white">{cure}</span>
                  </li>
                ))}
              </ul>
            </div>

            {recipe.warning && (
              <div className="bg-yellow-900/40 border-2 border-yellow-600 p-4 rounded-xl mb-8">
                <p className="text-yellow-200 font-bold text-lg">⚠️ {recipe.warning}</p>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#00C85F] mb-4">INGREDIENTS:</h2>
              <ul className="space-y-3">
                {recipe.ingredients?.map((ing, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="text-[#00E06D] mr-3 text-xl">•</span>
                    <span className="text-white">{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-[#00C85F] mb-4">INSTRUCTIONS:</h2>
              <ol className="space-y-4">
                {recipe.instructions?.map((step, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="text-[#00E06D] mr-4 font-black text-2xl">{i + 1}.</span>
                    <span className="text-white">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-gray-400 text-base mb-4">
                Recipe Ref: <span className="text-white font-mono">{recipe.ref}</span>
              </p>
              <Link
                href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20help%20with%20recipe"
                className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-4 rounded-xl text-lg inline-block"
              >
                Need Help? WhatsApp Us
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>© 2026 Zap Sauce | Product of Lesotho 🇱🇸</p>
          </div>
        </div>
      </div>
    )
  }

  // PAID RECIPE - Show unlock screen
  return (
    <div className="bg-black min-h-[100dvh] text-white p-4">
      <div className="max-w-2xl mx-auto pt-6">

        <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-bold text-lg mb-6 inline-block">
          ← Back to All Recipes
        </Link>

        <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-8 backdrop-blur shadow-2xl shadow-green-500/40 text-center">

          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-4xl font-black text-[#00E06D] mb-2">{recipe.name}</h1>
          {recipe.subtitle && <p className="text-xl text-gray-300 mb-4">{recipe.subtitle}</p>}

          <div className="text-5xl font-black text-white mb-6">M{recipe.price}</div>

          <div className="bg-black/40 rounded-xl p-5 mb-8 text-left">
            <div className="text-lg text-[#00C85F] font-bold mb-3">This recipe cures:</div>
            <ul className="space-y-2">
              {recipe.cures.slice(0, 3).map((cure, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#00E06D] mr-2">✓</span>
                  <span className="text-white">{cure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MPESA UNLOCK */}
          <div className="bg-[#00A651]/10 border-2 border-[#00A651] rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-black text-[#00E06D] mb-4">📱 Unlock with MPESA</h3>
            <p className="text-gray-300 mb-4">1. Dial <span className="text-white font-mono font-black">*200#</span></p>
            <p className="text-gray-300 mb-4">2. Pay M{recipe.price} to Zap Sauce</p>
            <p className="text-gray-300 mb-4">3. Enter MPESA code below</p>

            <input
              type="text"
              placeholder="Enter 8-digit Mpesa Code"
              value={mpesaCode}
              onChange={(e) => setMpesaCode(e.target.value)}
              className="w-full bg-black border-2 border-[#00A651] rounded-xl px-5 py-4 text-white text-xl mb-4 focus:border-[#00E06D] focus:outline-none text-center font-bold"
              maxLength={8}
            />

            <button
              onClick={handleMpesaUnlock}
              disabled={loading || mpesaCode.length < 8}
              className="w-full bg-[#00A651] hover:bg-[#00C85F] disabled:bg-gray-700 disabled:text-gray-500 text-white font-black py-4 rounded-xl text-xl shadow-2xl shadow-green-500/50 border-3 border-[#00E06D] transition-all active:scale-95"
            >
              {loading? 'Verifying...' : '🔓 Unlock Recipe'}
            </button>
          </div>

          {/* EFT UNLOCK */}
          <div className="bg-gray-800/50 border-2 border-gray-600 rounded-xl p-6">
            <h3 className="text-2xl font-black text-gray-300 mb-4">🏦 Unlock with EFT</h3>
            <div className="text-left text-sm text-gray-400 space-y-1 mb-4">
              <div>Bank: Lesotho Post Bank</div>
              <div>Acc Holder: Makhauhelo Moima</div>
              <div>Account: 1036202900018</div>
              <div>Branch: BONHOMME</div>
              <div>Ref: <span className="text-white font-mono">Zap Sauce {recipe.ref}</span></div>
              <div>Amount: <span className="text-white font-bold">M{recipe.price}</span></div>
            </div>

            <input
              type="text"
              placeholder="Enter Your Payment Reference"
              value={eftRef}
              onChange={(e) => setEftRef(e.target.value)}
              className="w-full bg-black border-2 border-gray-600 rounded-xl px-5 py-3 text-white text-lg mb-4 focus:border-[#00A651] focus:outline-none text-center"
            />

            <button
              onClick={handleEFTUnlock}
              disabled={loading ||!eftRef}
              className="w-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-white font-black py-4 rounded-xl text-xl transition-all active:scale-95"
            >
              {loading? 'Checking...' : '🔓 Verify & Unlock'}
            </button>
            <p className="text-xs text-gray-500 mt-3">No WhatsApp proof needed. Auto-verified in 30 seconds.</p>
          </div>

        </div>
      </div>
    </div>
  )
}