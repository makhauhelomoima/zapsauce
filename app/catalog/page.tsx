'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function CatalogPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [buyerName, setBuyerName] = useState('')
  const [buyerPhone, setBuyerPhone] = useState('')
  const [refCode, setRefCode] = useState('')

  // 1. Load all GoldLux products
  useEffect(() => {
    async function loadProducts() {
      const { data } = await supabase
      .from('products')
      .select('*')
      .eq('brand', 'GoldLux')
      .eq('active', true)
      .order('price_m', { ascending: true })
      
      setProducts(data || [])
      
      // Check URL for ?ref=TSE123
      const urlParams = new URLSearchParams(window.location.search)
      const ref = urlParams.get('ref')
      if (ref) setRefCode(ref)
      
      setLoading(false)
    }
    loadProducts()
  }, [])

  // 2. Handle MPESA payment simulation
  async function handleBuyNow() {
    if (!selectedProduct || !buyerName || !buyerPhone) {
      alert('Please fill in your name and phone number')
      return
    }

    // Get affiliate by ref_code if provided
    let affiliateId = null
    if (refCode) {
      const { data: affiliate } = await supabase
      .from('affiliates')
      .select('id')
      .eq('ref_code', refCode)
      .single()
      if (affiliate) affiliateId = affiliate.id
    }

    // Insert sale
    const { error } = await supabase.from('sales').insert({
      buyer_name: buyerName,
      buyer_phone: buyerPhone,
      brand: 'GoldLux',
      product_id: selectedProduct.id,
      price_m: selectedProduct.price_m,
      commission_m: selectedProduct.commission_m,
      affiliate_id: affiliateId,
      ref_code: refCode || null,
      paid_out: false
    })

    if (error) {
      alert('Error: ' + error.message)
      return
    }

    alert(`Success! ${selectedProduct.name} purchased for M${selectedProduct.price_m}. Check your email for download link 🤍`)
    setSelectedProduct(null)
    setBuyerName('')
    setBuyerPhone('')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading GoldLux Collection...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">⚜️ GoldLux Boutique</h1>
          <p className="text-xl text-gray-600">Luxury Wall Art for Modern Queens</p>
          {refCode && <p className="text-sm text-green-600 mt-2">Referred by: {refCode}</p>}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center">
                <span className="text-6xl">⚜️</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-4xl font-bold mb-4">M{p.price_m}</p>
                <p className="text-sm text-gray-600 mb-6">Instant digital download. Print at home or any print shop.</p>
                <button
                  onClick={() => setSelectedProduct(p)}
                  className="w-full bg-black text-white p-4 rounded-xl font-bold text-lg hover:bg-gray-800 active:scale-95"
                >
                  Buy Now M{p.price_m}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CHECKOUT MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-6">Checkout - {selectedProduct.name}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={e => setBuyerName(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl"
                    placeholder="Reitumetse Mokoena"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">MPESA Number</label>
                  <input
                    type="tel"
                    value={buyerPhone}
                    onChange={e => setBuyerPhone(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl"
                    placeholder="58123456"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="flex justify-between"><span>Total:</span> <span className="font-bold text-2xl">M{selectedProduct.price_m}</span></p>
                </div>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-green-600 text-white p-4 rounded-xl font-bold text-lg hover:bg-green-700"
                >
                  Pay with MPESA M{selectedProduct.price_m}
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full text-gray-600 p-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 GoldLux Boutique. Powered by Zap Sauce Empire.</p>
        </div>

      </div>
    </div>
  )
}