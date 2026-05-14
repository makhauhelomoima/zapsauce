'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Product = {
  id: string
  name: string
  price: number
  commission: number
  description: string
  emoji: string
  badge?: string
}

const PRODUCTS: Product[] = [
  {
    id: 'origin',
    name: 'ORIGIN',
    price: 150,
    commission: 45,
    description: 'The original Zap Sauce™. Perfect balance of heat and flavor. Your daily driver.',
    emoji: '🌶️',
    badge: 'BESTSELLER'
  },
  {
    id: 'fireball',
    name: 'FIREBALL',
    price: 200,
    commission: 60,
    description: 'Extra hot blend for heat seekers. One taste and you’ll know why it’s legendary.',
    emoji: '🔥',
    badge: 'HOTTEST'
  }
]

export default function CatalogPage() {
  const [refCode, setRefCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setRefCode(ref)
      localStorage.setItem('zap_ref', ref)
    } else {
      const stored = localStorage.getItem('zap_ref')
      if (stored) setRefCode(stored)
    }
  }, [])

  async function handleBuy(product: Product) {
    const customerName = prompt('Enter your full name:')
    if (!customerName) return

    const customerWhatsapp = prompt('Enter your WhatsApp number for delivery:')
    if (!customerWhatsapp) return

    setLoading(true)

    const { error } = await supabase.from('orders').insert([{
      customer_name: customerName,
      customer_whatsapp: customerWhatsapp,
      product_name: product.name,
      amount: product.price,
      ref_code: refCode || null,
      paid: false,
      delivered: false
    }])

    setLoading(false)

    if (error) {
      alert('Order failed. Please try again.')
      console.error(error)
    } else {
      alert(`Order placed! We'll WhatsApp you at ${customerWhatsapp} to confirm payment and delivery. Thank you for supporting Zap Sauce™!`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* NAV */}
      <nav className="border-b border-gray-800 sticky top-0 bg-gray-950/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <h1 className="text-2xl font-bold">Zap Sauce™</h1>
          </Link>
          <div className="flex gap-4">
            <Link href="/affiliate" className="text-sm text-gray-400 hover:text-white transition">
              Become Affiliate
            </Link>
            <Link href="/login" className="text-sm bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-amber-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          {refCode && (
            <div className="inline-block bg-amber-500/10 border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm mb-6">
              Shopping via affiliate: <strong>{refCode}</strong>
            </div>
          )}
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Catalog
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Handcrafted in Lesotho. Bold flavors. Zero compromise.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-gray-900 border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition">
              {product.badge && (
                <div className="absolute top-4 right-4 bg-emerald-600 text-xs font-bold px-3 py-1 rounded-full z-10">
                  {product.badge}
                </div>
              )}

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-center">
                <div className="text-7xl mb-4 group-hover:scale-110 transition">{product.emoji}</div>
                <h4 className="text-3xl font-bold">{product.name}</h4>
              </div>

              <div className="p-6">
                <p className="text-gray-400 mb-6 min-h-20">{product.description}</p>

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-800">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-3xl font-bold">M{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Affiliate Earns</p>
                    <p className="text-xl font-bold text-emerald-400">M{product.commission}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleBuy(product)}
                  disabled={loading}
                  className="w-full bg-emerald-600 py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50 transition"
                >
                  {loading ? 'Processing...' : 'Buy Now →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AFFILIATE CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Earn While You Share</h3>
          <p className="text-xl text-emerald-100 mb-8">
            Get your link. Share with friends. Earn 30% commission on every sale.
          </p>
          <Link href="/affiliate" className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
            Become Affiliate →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p className="mb-2">© 2026 Zap Sauce™ Empire. Proudly made in Lesotho 🇱🇸</p>
          <p className="text-sm">M-Pesa • EFT • Weekly Payouts</p>
        </div>
      </footer>
    </div>
  )
}