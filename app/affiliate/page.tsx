'use client'
import Link from 'next/link'

export default function AffiliatePage() {
  const whatsappNumber = 26657031600 // Replace with your real WhatsApp number
  const whatsappLink = `https://wa.me/26657031600?text=Hi%20Queen%2C%20I%20want%20my%20Gold%20Luxury%20Empire%20affiliate%20link%20🤍`

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">⚜️ Gold Luxury Empire Affiliates</h1>
          <p className="text-xl text-gray-600">Earn 30% on every sale. Health + Beauty. One link.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Commission Structure</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">⚜️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">GoldLux Boutique</h3>
              <p className="text-gray-600 mb-4">Luxury Wall Art Collection</p>
              <p className="text-3xl font-bold text-gray-900">M199</p>
              <p className="text-xl text-green-600 font-bold">You earn: M60</p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">🔥</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Zap Sauce™</h3>
              <p className="text-gray-600 mb-4">Lightning in a Jar</p>
              <p className="text-3xl font-bold text-gray-900">M150</p>
              <p className="text-xl text-green-600 font-bold">You earn: M45</p>
            </div>
          </div>

          <div className="bg-black text-white rounded-xl p-6 text-center">
            <p className="text-lg mb-4">Weekly M-Pesa payouts. One dashboard. Two products.</p>
            <a 
              href={whatsappLink}
              target="_blank"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600"
            >
              WhatsApp Queen for Your Link 🤍
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-gray-600 hover:text-black font-medium">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
    }
