'use client'

import { useState } from 'react'
import Link from 'next/link'
import { recipes, packages } from '../../data/recipes'

export default function FranchisePage() {
  const [mpesaCode, setMpesaCode] = useState('')
  const [eftRef, setEftRef] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'eft'>('mpesa')
  const [verifying, setVerifying] = useState(false)
  const [email, setEmail] = useState('')

  const franchiseRecipes = recipes.filter(r =>
    packages.franchiseKit.includes.includes(r.id)
  )

  const verifyPayment = async () => {
    setVerifying(true)
    try {
      const payload = paymentMethod === 'mpesa'
       ? { mpesaCode, recipeId: 'franchise-kit', amount: 2500, method: 'mpesa', email }
        : { eftRef, recipeId: 'franchise-kit', amount: 2500, method: 'eft', email }

      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await response.json()
      alert(data.message)
      if (data.success) {
        setMpesaCode('')
        setEftRef('')
        setEmail('')
      }
    } catch (error) {
      alert('Verification failed. Check connection and try again.')
    }
    setVerifying(false)
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-yellow-500/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-yellow-400">Franchise Kit</span>
            <span className="text-sm text-yellow-500">Global License 🌍</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-yellow-400">Main Store</Link>
            <Link href="/portal" className="text-xs text-gray-400 hover:text-yellow-400">Customer Portal</Link>
            <a href="https://wa.me/26657031600" target="_blank" className="text-xs text-[#25D366] hover:text-[#20BD5C]">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-yellow-400">FRANCHISE KIT</span> ⚡
          </h1>
          <p className="text-xl text-gray-300 mb-2">Master Base + 17 Recipes + Full Business System</p>
          <p className="text-lg text-yellow-500 font-bold">0% Affiliate | 100% Yours | Ships Worldwide as PDF</p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">What You Get - M2500</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-bold mb-3">📋 Complete Recipe System</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Master Base Formula [The foundation]</li>
                <li>✓ 17 Signature Recipes [Full ingredients + steps]</li>
                <li>✓ Dosage guides + Timing protocols</li>
                <li>✓ Batch scaling formulas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">🎨 Business Assets</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Branding Kit [Colors, fonts, logo rules]</li>
                <li>✓ Sales Scripts [WhatsApp, Facebook, D2D]</li>
                <li>✓ Pricing strategy [Local + Global]</li>
                <li>✓ WhatsApp Support forever</li>
              </ul>
            </div>
          <div className="bg-black/50 border border-yellow-500/40 rounded p-4 mt-6">
            <p className="text-xs text-yellow-400 font-bold text-center">📦 DELIVERY: Complete PDF sent to your WhatsApp after payment clears. Instant. Global. No shipping costs.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Included Recipes [18 Total]</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {franchiseRecipes.map((item) => (
              <div key={item.id} className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-yellow-500 mb-2">{item.subtitle}</p>
                <p className="text-xs text-gray-400">{item.benefits.substring(0, 80)}...</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 border border-yellow-500/40 rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Secure Your Franchise - M2500</h2>

          <div className="mb-4">
            <label className="text-xs text-gray-400 mb-1 block">Your Email [For PDF Delivery]</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setPaymentMethod('mpesa')}
              className={`flex-1 py-2 text-xs rounded ${paymentMethod === 'mpesa'? 'bg-yellow-500 text-black font-bold' : 'bg-gray-700 text-gray-300'}`}
            >
              MPESA
            </button>
            <button
              onClick={() => setPaymentMethod('eft')}
              className={`flex-1 py-2 text-xs rounded ${paymentMethod === 'eft'? 'bg-yellow-500 text-black font-bold' : 'bg-gray-700 text-gray-300'}`}
            >
              EFT - Post Bank
            </button>
          </div>

          {paymentMethod === 'mpesa'? (
            <>
              <p className="text-xs text-gray-400 mb-1">Send M2500 to 57031600</p>
              <p className="text-xs text-gray-400 mb-1">Name: Makhauhelo Moima</p>
              <p className="text-xs text-gray-400 mb-1">Ref: FRANCHISE-KIT</p>
              <p className="text-xs text-yellow-500 mb-2">USSD: *200#1*1*57031600*2500#</p>
              <input
                type="text"
                placeholder="MPESA code (QK7X8Y9Z0W)"
                value={mpesaCode}
                onChange={(e) => setMpesaCode(e.target.value.toUpperCase())}
                className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-3"
              />
            </>
          ) : (
            <>
              <p className="text-xs text-gray-400 mb-1">Bank: Lesotho Post Bank</p>
              <p className="text-xs text-gray-400 mb-1">Account: 1036202900018</p>
              <p className="text-xs text-gray-400 mb-1">Name: Makhauhelo Moima</p>
              <p className="text-xs text-gray-400 mb-1">Branch: BONHOMME</p>
              <p className="text-xs text-gray-400 mb-1">SWIFT: LESHLSMMXXX</p>
              <p className="text-xs text-gray-400 mb-2">Ref: FRANCHISE-KIT</p>
              <input
                type="text"
                placeholder="EFT Reference Number"
                value={eftRef}
                onChange={(e) => setEftRef(e.target.value)}
                className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-3"
              />
              <p className="text-xs text-yellow-400 mb-3">Allow 2hrs for EFT to reflect. PDF sent after confirmation.</p>
            </>
          )}

          <button
            onClick={verifyPayment}
            disabled={verifying ||!email}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded disabled:opacity-50"
          >
            {verifying? 'Verifying...' : 'Verify Payment & Get PDF'}
          </button>

          <div className="bg-yellow-500/10 border border-yellow-500/40 rounded p-3 mt-4">
            <p className="text-xs text-yellow-400 font-bold">⚡ 0% Affiliate = You keep 100% of all sales. No monthly fees. No royalties. This is your business.</p>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce Franchise. Lightning in a jar! ⚡</p>
          <p>Global License. Product of Lesotho 🇱🇸</p>
        </div>
      </div>
    </div>
  )
}