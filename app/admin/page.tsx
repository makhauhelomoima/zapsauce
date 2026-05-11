'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Order = {
  id: string
  customer_email: string
  product_name: string
  amount: number
  ref_code: string | null
  paid: boolean
  created_at: string
}

type Affiliate = {
  id: string
  name: string
  ref_code: string
  mpesa_number: string
  total_earned: number
  total_paid: number
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [affiliates, setAffiliates] = useState<Affiliate[]>([])
  const [loading, setLoading] = useState(true)
  const [newOrderEmail, setNewOrderEmail] = useState('')
  const [newOrderProduct, setNewOrderProduct] = useState('ORIGIN')
  const [newOrderRef, setNewOrderRef] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    
    const { data: ordersData } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
    
    const { data: affiliatesData } = await supabase
      .from('affiliates')
      .select('*')
      .order('total_earned', { ascending: false })

    if (ordersData) setOrders(ordersData)
    if (affiliatesData) setAffiliates(affiliatesData)
    setLoading(false)
  }

  async function markPaid(orderId: string, amount: number, refCode: string | null) {
    // 1. Mark order paid
    await supabase.from('orders').update({ paid: true }).eq('id', orderId)
    
    // 2. Credit affiliate if ref exists
    if (refCode) {
      const commission = amount * 0.3
      const { data: affiliate } = await supabase
        .from('affiliates')
        .select('total_earned')
        .eq('ref_code', refCode)
        .single()
      
      if (affiliate) {
        await supabase
          .from('affiliates')
          .update({ total_earned: affiliate.total_earned + commission })
          .eq('ref_code', refCode)
      }
    }
    
    fetchData()
  }

  async function addManualOrder() {
    const amount = newOrderProduct === 'ORIGIN' ? 150 : 200
    await supabase.from('orders').insert({
      customer_email: newOrderEmail,
      product_name: newOrderProduct,
      amount: amount,
      ref_code: newOrderRef || null,
      paid: false
    })
    setNewOrderEmail('')
    setNewOrderRef('')
    fetchData()
  }

  const totalRevenue = orders.filter(o => o.paid).reduce((sum, o) => sum + o.amount, 0)
  const totalCommissionOwed = affiliates.reduce((sum, a) => sum + (a.total_earned - a.total_paid), 0)
  const unpaidOrders = orders.filter(o => !o.paid).length

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Empire Data... 🔥</div>

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">👑 Zap Sauce Admin</h1>
            <p className="text-gray-600">Maseru, Lesotho 🇱🇸</p>
          </div>
          <Link href="/" className="text-emerald-700 hover:text-emerald-900 font-medium">← Back to Store</Link>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
            <p className="text-gray-600 text-sm">Total Revenue</p>
            <p className="text-3xl font-bold text-emerald-950">M{totalRevenue}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <p className="text-gray-600 text-sm">Commission Owed</p>
            <p className="text-3xl font-bold text-red-950">M{totalCommissionOwed.toFixed(0)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
            <p className="text-gray-600 text-sm">Unpaid Orders</p>
            <p className="text-3xl font-bold text-amber-950">{unpaidOrders}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm">Affiliates</p>
            <p className="text-3xl font-bold text-blue-950">{affiliates.length}</p>
          </div>
        </div>

        {/* ADD MANUAL ORDER */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Add WhatsApp Order</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <input 
              type="email" 
              placeholder="Customer email" 
              value={newOrderEmail}
              onChange={(e) => setNewOrderEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <select 
              value={newOrderProduct}
              onChange={(e) => setNewOrderProduct(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="ORIGIN">ORIGIN M150</option>
              <option value="FIREBALL">FIREBALL M200</option>
            </select>
            <input 
              type="text" 
              placeholder="Ref code (optional)" 
              value={newOrderRef}
              onChange={(e) => setNewOrderRef(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <button 
              onClick={addManualOrder}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-700"
            >
              Add Order
            </button>
          </div>
        </div>

        {/* ORDERS TABLE */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Ref</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-3">{new Date(order.created_at).toLocaleDateString()}</td>
                    <td className="py-3">{order.customer_email}</td>
                    <td className="py-3">{order.product_name}</td>
                    <td className="py-3 font-bold">M{order.amount}</td>
                    <td className="py-3 text-emerald-700">{order.ref_code || '-'}</td>
                    <td className="py-3">
                      {order.paid ? (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                      ) : (
                        <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Pending</span>
                      )}
                    </td>
                    <td className="py-3">
                      {!order.paid && (
                        <button 
                          onClick={() => markPaid(order.id, order.amount, order.ref_code)}
                          className="bg-emerald-600 text-white px-3 py-1 rounded text-xs hover:bg-emerald-700"
                        >
                          Mark Paid
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AFFILIATES TABLE */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Affiliates</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Ref Code</th>
                  <th className="text-left py-2">M-Pesa</th>
                  <th className="text-left py-2">Earned</th>
                  <th className="text-left py-2">Paid</th>
                  <th className="text-left py-2">Owed</th>
                </tr>
              </thead>
              <tbody>
                {affiliates.map(aff => (
                  <tr key={aff.id} className="border-b border-gray-100">
                    <td className="py-3 font-medium">{aff.name}</td>
                    <td className="py-3 text-emerald-700">{aff.ref_code}</td>
                    <td className="py-3">{aff.mpesa_number}</td>
                    <td className="py-3">M{aff.total_earned.toFixed(0)}</td>
                    <td className="py-3">M{aff.total_paid.toFixed(0)}</td>
                    <td className="py-3 font-bold text-red-700">M{(aff.total_earned - aff.total_paid).toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}