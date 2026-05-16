'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [affiliateName, setAffiliateName] = useState('')
  const WHATSAPP_NUMBER = '26657031600' // Your number: 57031600 with country code 266

  function generateLink() {
    if (!affiliateName.trim()) {
      alert('Enter your name first')
      return
    }
    const link = `https://zapsauce.vercel.app?ref=${encodeURIComponent(affiliateName)}`
    navigator.clipboard.writeText(link)
    alert(`Affiliate link copied! Share this link. You earn 30% commission.\n\nLink: ${link}`)
  }

  function openWhatsApp(message: string) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HEADER */}
      <nav className="border-b border-gray-800 sticky top-0 bg-gray-950/80 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <h1 className="text-2xl font-bold">Zap Sauce™</h1>
          </div>
          <Link href="/login" className="text-sm bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
            Login
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Heat</span>
        </h2>
        <p className="text-xl text-gray-400 mb-4">Handcrafted in Lesotho. Bold flavors. Zero compromise.</p>
        <p className="text-sm text-gray-500">MPESA: *200# → 57031600</p>
      </section>

      {/* WHAT ZAP SAUCE ZAPS */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="border border-emerald-500/30 rounded-2xl p-6">
          <h3 className="text-emerald-400 font-bold mb-4 text-center">WHAT ZAP SAUCE ORIGIN ZAPS:</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✓ Morning flu + sore throat + body aches</li>
            <li>✓ Coughs + chest congestion + winter chills</li>
            <li>✓ Low immunity + kids missing school</li>
            <li>✓ Inflammation + joint pain</li>
            <li>✓ M200+ weekly pharmacy runs for the family</li>
          </ul>
        </div>
      </section>

      {/* AFFILIATE PORTAL */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="border border-amber-500/30 rounded-2xl p-6">
          <h3 className="text-amber-400 font-bold text-center mb-2">EARN 30% AFFILIATION</h3>
          <p className="text-center text-gray-400 text-sm mb-6">Share your link. Earn commission on every sale.</p>
          
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              value={affiliateName}
              onChange={(e) => setAffiliateName(e.target.value)}
              className="flex-1 bg-gray-900 border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500"
            />
            <button 
              onClick={generateLink}
              className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
            >
              Get Link
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* ORIGIN M155 */}
          <div className="border border-emerald-500/30 rounded-2xl p-6">
            <div className="text-center mb-4">
              <p className="text-xs text-emerald-400 font-bold">ORIGIN</p>
              <p className="text-4xl font-bold mt-2">M155</p>
            </div>
            <div className="text-xs text-gray-400 mb-6 text-center">
              <p>The original Zap Sauce™. Perfect balance of heat and flavor. Your daily driver.</p>
            </div>
            <button 
              onClick={() => openWhatsApp('Hi, I want to order ORIGIN M155')}
              className="w-full bg-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
            >
              Order via WhatsApp
            </button>
          </div>

          {/* FIREBALL M205 */}
          <div className="border border-amber-500/30 rounded-2xl p-6">
            <div className="text-center mb-4">
              <p className="text-xs text-amber-400 font-bold">FIREBALL</p>
              <p className="text-4xl font-bold mt-2">M205</p>
            </div>
            <div className="text-xs text-gray-400 mb-6 text-center">
              <p>Extra hot blend for heat seekers. One taste and you’ll know why it’s legendary.</p>
            </div>
            <button 
              onClick={() => openWhatsApp('Hi, I want to order FIREBALL M205')}
              className="w-full bg-amber-500 text-black py-3 rounded-xl font-bold hover:bg-amber-600 transition"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Zap Sauce™ Empire. Proudly made in Lesotho 🇱🇸</p>
        <p className="mt-2">MPESA: *200# → 57031600 | WhatsApp: 57031600</p>
      </footer>
    </div>
  )
}