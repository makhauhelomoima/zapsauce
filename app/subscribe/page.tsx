'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Subscribe() {
  const [phone, setPhone] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (phone.length === 8) {
      // In production: Call payment API here
      // For now: Simulate success + redirect to portal
      setSubscribed(true)
      setTimeout(() => {
        window.location.href = '/portal?subscribed=true'
      }, 2000)
    }
  }

  if (subscribed) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="text-5xl font-black text-[#00E06D] mb-4">Subscribed!</h1>
          <p className="text-2xl text-[#00C85F] mb-6 font-bold">Welcome to Monthly Heal</p>
          <p className="text-lg text-gray-300 mb-8">Redirecting to your dashboard...</p>
          <div className="text-base text-gray-500">Unlocking EXCLUSIVE Tangy Fusion recipe...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-4">
      <div className="max-w-md mx-auto pt-8">

        <Link href="/" className="inline-block mb-6">
          <h1 className="text-4xl font-black text-[#00E06D] drop-shadow-[0_0_30px_rgba(0,224,109,0.8)]">
            Zap Sauce.
          </h1>
        </Link>

        <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 border-3 border-yellow-300 rounded-2xl p-8 backdrop-blur shadow-2xl shadow-yellow-500/50 mb-6">
          <h2 className="text-4xl font-black text-black mb-3">🔒 Monthly Heal</h2>
          <p className="text-black text-xl mb-2 font-bold">M120/month Subscription</p>
          <p className="text-black text-base mb-6 font-semibold">Cancel anytime • Instant access</p>

          <div className="bg-black/20 rounded-xl p-5 mb-6">
            <div className="text-2xl font-black text-black mb-3">YOU GET:</div>
            <ul className="text-left space-y-2 text-black font-bold">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Original Recipe access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>EXCLUSIVE Tangy Fusion Recipe</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Daily dose reminders</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Loyalty points 2x</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Priority WhatsApp support</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/30 rounded-xl p-4 mb-6">
            <div className="text-sm text-black font-bold mb-2">EXCLUSIVE RECIPE PREVIEW:</div>
            <div className="text-base text-black font-black">Ginger + Turmeric + Honey + Cayenne + Cinnamon + ACV</div>
            <div className="text-sm text-black/80 mt-1">The most potent immunity fusion — TANGY</div>
          </div>
        </div>

        <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-6 backdrop-blur shadow-2xl shadow-green-500/40 mb-6">
          <label className="block text-lg text-[#00E06D] mb-3 font-black">Phone Number for MPESA</label>
          <input
            type="tel"
            placeholder="57031600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-black border-2 border-[#00A651] rounded-xl px-5 py-4 text-white text-xl mb-5 focus:border-[#00E06D] focus:outline-none font-bold"
            maxLength={8}
          />

          <button
            onClick={handleSubscribe}
            disabled={phone.length!== 8}
            className="w-full bg-[#00A651] hover:bg-[#00C85F] disabled:bg-gray-700 disabled:text-gray-500 text-white font-black py-5 rounded-xl text-2xl shadow-2xl shadow-green-500/50 border-3 border-[#00E06D] transition-all active:scale-95"
          >
            📱 Subscribe M120 via MPESA
          </button>

          <p className="text-sm text-gray-400 mt-4 text-center font-semibold">
            You'll be charged M120 now, then M120 monthly
          </p>
        </div>

        <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-5 text-center">
          <p className="text-gray-300 text-base mb-3 font-bold">Or pay via EFT:</p>
          <div className="text-sm text-gray-400 space-y-1">
            <div>Bank: Lesotho Post Bank</div>
            <div>Acc: 1036202900018</div>
            <div>Branch: BONHOMME</div>
            <div>Ref: Zap Sauce SUB-001</div>
            <div>Amount: M120</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">WhatsApp proof to 57031600 after payment</p>
        </div>

        <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] text-lg mt-8 block text-center font-bold">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}