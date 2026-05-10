'use client'
import Link from 'next/link'

export default function AffiliatePage() {
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
              <h3 className="text-2xl font-bold mb-2">GoldLux Boutique</h3>
              <p className="text-gray-600 mb-4">Luxury Wall Art Collection</p>
              <p className="text-3xl font-bold">M199</p>
              <p className="text-xl text-green-600 font-bold">You earn: M60</p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="text-4xl mb-2">🔥</div>
              <h3 className="text-2xl font-bold mb-2">Zap Sauce™</h3>
              <p className="text-gray-600 mb-4">Lightning in a Jar</p>
              <p className="text-3xl font-bold">M150</p>
              <p className="text-xl text-green-600 font-bold">You earn: M45</p>
            </div>
          </div>

          <div className="bg-black text-white rounded-xl p-6 text-center">
            <p className="text-lg mb-4">Weekly M-Pesa payouts. One dashboard. Two products.</p>
            <p className="font-bold">DM @goldluxuryempire on Instagram to get your link 🤍</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-gray-600 hover:text-black">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
              }
