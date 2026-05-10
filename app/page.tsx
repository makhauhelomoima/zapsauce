'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* HEADER - CENTERED */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="text-6xl">⚜️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gold Luxury Empire</h1>
          <p className="text-2xl text-gray-600 mb-4">From Lightning in a Jar to Gold on Your Walls</p>
          <p className="text-lg text-gray-500">Parent company of Zap Sauce™ & Gold Luxury Boutique</p>
          <p className="text-sm text-gray-400 mt-2">Maseru, Lesotho 🇱🇸</p>
        </div>

        {/* BRANDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* GOLD LUXURY BOUTIQUE */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-200 hover:scale-105 transition">
            <div className="text-center">
              <div className="text-5xl mb-4">⚜️</div>
              <h2 className="text-3xl font-bold mb-4">Gold Luxury Boutique</h2>
              <p className="text-gray-600 mb-2">Luxury Wall Art</p>
              <p className="text-4xl font-bold mb-6">M199</p>
              <p className="text-sm text-gray-500 mb-6">Curated collection. Digital download. A4 PDF. New styles added regularly.</p>
              <Link href="/catalog" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 w-full">
                Browse Collection →
              </Link>
            </div>
          </div>

          {/* ZAP SAUCE */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 hover:scale-105 transition">
            <div className="text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h2 className="text-3xl font-bold mb-4">Zap Sauce™</h2>
              <p className="text-gray-600 mb-2">Lightning in a Jar</p>
              <p className="text-4xl font-bold mb-6">M150</p>
              <p className="text-sm text-gray-500 mb-6">1 tsp daily. Family health. Lesotho made.</p>
              <Link href="/catalog" className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 w-full">
                Shop Zap Sauce →
              </Link>
            </div>
          </div>

        </div>

        {/* AFFILIATE CTA */}
        <div className="bg-black text-white rounded-2xl p-12 text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">EARN 30% COMMISSION</h3>
          <p className="text-xl mb-2">M60 per GoldLux M199 sale</p>
          <p className="text-xl mb-8">M45 per Zap Sauce M150 sale</p>
          <p className="mb-8">One dashboard. Two products. Weekly M-Pesa payouts.</p>
          <Link href="/affiliate" className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100">
            Join Affiliate Program →
          </Link>
        </div>

        {/* MIGRATION BANNER */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mb-16">
          <p className="font-bold text-lg mb-2">Looking for the old M250 Zap Sauce PDF?</p>
          <p className="text-gray-700">We've upgraded! Choose from the Gold Luxury Boutique collection for <strong>M199</strong> or get Zap Sauce for <strong>M150</strong> above. Same lightning, more gold 🤍</p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© 2026 Gold Luxury Empire</p>
          <p>Founded by Queens, for Queens. Health is wealth. Beauty is power. 🤍⚜️🔥👑</p>
        </div>

      </div>
    </div>
  )
            }
