'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Product = {
  name: string
  price: number
  commission: number
  description: string
  emoji: string
}

const PRODUCTS: Product[] = [
  {
    name: 'ORIGIN',
    price: 150,
    commission: 45,
    description: 'The original Zap Sauce™. Perfect heat, perfect flavor.',
    emoji: '🌶️'
  },
  {
    name: 'FIREBALL',
    price: 200,
    commission: 60,
    description: 'Extra hot. For the brave. Explosive flavor.',
    emoji: '🔥'
  }
]

export default function Catalog() {
  const [refCode, setRefCode] = useState<string | null>(null)

  useEffect(() => {
    // Get ref from URL
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setRefCode(ref)
      // Store in localStorage for checkout
      localStorage.setItem('zap_ref', ref)
    } else {
      // Check localStorage
      const stored = localStorage.getItem('zap_ref')
      if (stored) setRefCode(stored)
    }
  }, [])

  async function handleBuy(product: Product) {
    const customerName = prompt('Your name:')
    if (!customerName) return

    const customerWhatsapp = prompt('WhatsApp number for delivery:')
    if (!customerWhatsapp) return

    const { error } = await supabase.from('orders').insert([{
      customer_name: customerName,
      customer_whatsapp: customerWhatsapp,
      product_name: product.name,
      amount: product.price,
      ref_code: refCode || null,
      paid: false,
      delivered: false
    }])

    if (error) {
      alert('Error creating order. Try again.')
    } else {
      alert(`Order placed! We'll WhatsApp you at ${customerWhatsapp} for payment. Thank you!`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50">
      {/* HEADER */}
      <div className="bg-emerald-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-1">⚡ Zap Sauce™</h1>
              <p className="text-emerald-100">Lesotho's Hottest Sauce Empire</p>
            </div>
            <Link
              href="/affiliate"
              className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50"
            >
              Become Affiliate →
            </Link>
          </div>
        </div>
      </div>

      {refCode && (
        <div className="bg-amber-400 text-amber-900 p-3 text-center text-sm font-medium">
          🎉 You're shopping through affiliate: <strong>{refCode}</strong>
        </div>
      )}

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Heat</h2>
          <p className="text-xl text-gray-600">Handcrafted in Lesotho. Loved worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 p-12 text-center">
                <div className="text-8xl mb-4">{product.emoji}</div>
                <h3 className="text-4xl font-bold text-white">{product.name}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-4xl font-bold text-gray-900">M{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Affiliate Earns</p>
                    <p className="text-2xl font-bold text-emerald-600">M{product.commission}</p>
                  </div>
                <button
                  onClick={() => handleBuy(product)}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700"
                >
                  Buy Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AFFILIATE CTA */}
        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Earn M45-60 Per Sale</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Join the Zap Sauce™ affiliate army. Share your link. Get paid weekly.
          </p>
          <Link
            href="/affiliate"
            className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600"
          >
            Start Earning Now →
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-gray-900 text-gray-400 p-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2026 Zap Sauce™ Empire. Made in Lesotho 🇱🇸</p>
          <p className="text-sm">M-Pesa + EFT Supported. Weekly Payouts.</p>
        </div>
      </div>
    </div>
  )
}