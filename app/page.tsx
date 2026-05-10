'use client'
import Link from 'next/link'

export default function HomePage() {
  const whatsappNumber = "26657031600" // Your number locked in
  const customerSupportLink = `https://wa.me/26657031600?text=Hi%20Queen%2C%20I%20need%20help%20with%20Gold%20Luxury%20Boutique%20🤍`

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 pb-24">
        
        {/* HEADER - DEEP GOLD */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="text-6xl drop-shadow-lg">⚜️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Gold Luxury Wall Art</h1>
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

      {/* FLOATING WHATSAPP - CUSTOMER SERVICE */}
      <a 
        href={customerSupportLink}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Customer Support WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* ADMIN LINK - BOTTOM LEFT */}
      <Link 
        href="/admin"
        className="fixed bottom-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl hover:bg-black transition text-sm opacity-70 hover:opacity-100 z-50"
      >
        👑 Admin
      </Link>

    </div>
  )
          }
