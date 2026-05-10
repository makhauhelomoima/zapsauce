'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Brand = 'ZapSauce' | 'GoldLux'

export default function AffiliatePage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [brand, setBrand] = useState<Brand>('ZapSauce')
  const [products, setProducts] = useState<any[]>([])
  const [productId, setProductId] = useState('')
  const [sales, setSales] = useState<any[]>([])
  const [totalCommission, setTotalCommission] = useState(0)
  const [paidCommission, setPaidCommission] = useState(0)

  useEffect(() => {
    async function init() {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (!authUser?.email) {
        setLoading(false)
        return
      }

      const { data: affiliate } = await supabase
      .from('affiliates')
      .select('*')
      .eq('email', authUser.email)
      .single()

      if (!affiliate) {
        setLoading(false)
        return
      }
      setUser(affiliate)

      const { data: prods } = await supabase
      .from('products')
      .select('*')
      .eq('active', true)
      .order('brand', { ascending: true })
      .order('price_m', { ascending: true })

      setProducts(prods || [])
      const firstZap = prods?.find(p => p.brand === 'ZapSauce')
      if (firstZap) setProductId(firstZap.id)

      const { data: salesData } = await supabase
      .from('admin_sales_view')
      .select('*')
      .eq('ref_code', affiliate.ref_code)
      .order('created_at', { ascending: false })

      setSales(salesData || [])
      const total = salesData?.reduce((sum, s) => sum + Number(s.commission_m), 0) || 0
      const paid = salesData?.filter(s => s.paid_out).reduce((sum, s) => sum + Number(s.commission_m), 0) || 0
      setTotalCommission(total)
      setPaidCommission(paid)
      setLoading(false)
    }
    init()
  }, [])

  const brandProducts = products.filter(p => p.brand === brand)

  useEffect(() => {
    if (brandProducts.length > 0) {
      setProductId(brandProducts[0].id)
    }
  }, [brand, products])

  async function handleSimulateSale() {
    const selected = products.find(p => p.id === productId)
    if (!selected ||!user) {
      alert('Please select a product first')
      return
    }

    const { error } = await supabase.from('sales').insert({
      buyer_name: 'Test Buyer',
      brand: selected.brand,
      product_id: selected.id,
      price_m: selected.price_m,
      commission_m: selected.commission_m,
      affiliate_id: user.id,
      ref_code: user.ref_code,
      paid_out: false
    })

    if (error) {
      alert('Error: ' + error.message)
      return
    }

    alert(`${selected.brand} sale added! You earned M${selected.commission_m} 🤍`)

    const { data: salesData } = await supabase
    .from('admin_sales_view')
    .select('*')
    .eq('ref_code', user.ref_code)
    .order('created_at', { ascending: false })

    setSales(salesData || [])
    const total = salesData?.reduce((sum, s) => sum + Number(s.commission_m), 0) || 0
    const paid = salesData?.filter(s => s.paid_out).reduce((sum, s) => sum + Number(s.commission_m), 0) || 0
    setTotalCommission(total)
    setPaidCommission(paid)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading your empire...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please Login</h1>
          <p>You need to be an approved affiliate to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold">Hi {user.name} 🤍</h1>
          <p className="text-sm opacity-80 mt-1">Ref Code: {user.ref_code}</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm opacity-80">Total Earned</p>
              <p className="text-4xl font-bold">M{totalCommission}</p>
            </div>
            <div>
              <p className="text-sm opacity-80">Paid Out</p>
              <p className="text-4xl font-bold text-green-400">M{paidCommission}</p>
            </div>
          </div>
          <p className="text-sm opacity-80 mt-2">Pending: M{totalCommission - paidCommission}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold">+ Record New Sale</h2>

          <div>
            <label className="block text-sm font-semibold mb-2">Select Empire</label>
            <select
              value={brand}
              onChange={e => setBrand(e.target.value as Brand)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-black outline-none"
            >
              <option value="ZapSauce">🔥 Zap Sauce - Hot Sauce</option>
              <option value="GoldLux">⚜️ GoldLux Boutique - Luxury Wall Art</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Select Product</label>
            <select
              value={productId}
              onChange={e => setProductId(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-black outline-none"
            >
              {brandProducts.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} - M{p.price_m} | Your cut: M{p.commission_m}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSimulateSale}
            className="w-full bg-black text-white p-5 rounded-xl font-bold text-xl hover:bg-gray-800 transition active:scale-95"
          >
            + Simulate Sale
          </button>
          <p className="text-xs text-gray-500 text-center">For testing. Real MPESA integration comes after TEST_MODE = false</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Your Sales History</h2>
          <div className="space-y-3">
            {sales.length === 0 && (
              <p className="text-gray-500 text-center py-8">No sales yet. Make your first one above ☝️</p>
            )}
            {sales.map(s => (
              <div key={s.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold">
                    {s.brand === 'GoldLux'? '⚜️' : '🔥'} {s.brand} - {s.product_name || 'Unknown'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(s.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-green-600">+M{s.commission_m}</p>
                  <p className="text-xs">
                    {s.paid_out? '✅ Paid' : '⏳ Pending'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}