'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* HEADER - DEEP GOLD */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="text-6xl drop-shadow-lg">⚜️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Gold Luxury Boutique</h1>
          <p className="text-2xl text-gray-700 mb-4 font-medium">From Lightning in a Jar to Gold on Your Walls</p>
          <p className="text-lg text-gray-600">Parent company of Zap Sauce™ & Gold Luxury Wall Art</p>
          <p className="text-sm text-gray-500 mt-2">Maseru, Lesotho 🇱🇸</p>
        </div>

        {/* BRANDS - DEEP COLORS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* GOLD LUXURY WALL ART- RICH GOLD */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl shadow-2xl p-8 border-2 border-amber-400 hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4 drop-shadow-md">⚜️</div>
              <h2 className="text-3xl font-bold mb-4 text-amber-900">Gold Luxury Wall Art</h2>
              <p className="text-amber-800 mb-2 font-medium">Gold Luxury Wall Art Pdf</p>
              <p className="text-5xl font-bold mb-6 text-amber-950">M199 per pdf</p>
              <p className="text-sm text-amber-700 mb-6">Curated collection. Digital download. A4 PDF. New styles added regularly.</p>
              <Link href="/catalog" className="inline-block bg-amber-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-950 w-full shadow-lg">
                Shop Wall Art →
              </Link>
            </div>
          </div>

          {/* ZAP SAUCE - DEEP GREEN */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl shadow-2xl p-8 border-2 border-emerald-500 hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="text-5xl mb-4 drop-shadow-md">🔥</div>
              <h2 className="text-3xl font-bold mb-4 text-emerald-900">Zap Sauce™</h2>
              <p className="text-emerald-800 mb-2 font-medium">Lightning in a Jar. Two Signature Flavors</p>
              <p className="text-5xl font-bold mb-6 text-emerald-950">M150 per pdf</p>
              <p className="text-sm text-emerald-700 mb-6">1 tsp daily. Family health. Lesotho made.</p>
              <Link href="/catalog" className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 w-full shadow-lg">
                Shop Zap Sauce →
              </Link>
            </div>
          </div>

        </div>

        {/* AFFILIATE CTA - DEEP BLACK GOLD */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-12 text-center mb-16 shadow-2xl border border-amber-500">
          <h3 className="text-3xl font-bold mb-4 text-amber-400">EARN 30% COMMISSION</h3>
          <p className="text-xl mb-2">M60 per Gold Luxury Wall Art M199 sale</p>
          <p className="text-xl mb-8">M45 per Zap Sauce M150 sale</p>
          <p className="mb-8 text-gray-300">One dashboard. Two products. Weekly M-Pesa payouts. Minimum payouts: M225.</p>
          <Link href="/affiliate" className="inline-block bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 shadow-lg">
            Join Affiliate Program →
          </Link>
        </div>

        {/* MIGRATION BANNER - RICH AMBER */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-xl mb-16 shadow-md">
          <p className="font-bold text-lg mb-2 text-amber-900">Looking for the old M250 Zap Sauce PDF?</p>
          <p className="text-amber-800">We've upgraded! Choose from the Gold Luxury Wall Art collection for <strong>M199</strong> or get Zap Sauce for <strong>M150</strong> above. Same lightning, more gold 🤍</p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-600 text-sm">
          <p className="mb-2">© 2026 Gold Luxury Boutique</p>
          <p>Founded by Queens, for Queens. Health is wealth. Beauty is power. 🤍⚜️🔥👑</p>
        </div>

      </div>
    </div>
  )
              }
