'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Affiliate = {
  id: string
  name: string
  email: string
  ref_code: string
  payout_method: string
  payout_details: string
  total_earned: number
  total_paid: number
  created_at: string
}

type Order = {
  id: string
  customer_name: string
  customer_email: string
  product_name: string
  amount: number
  ref_code: string
  commission_owed: number
  paid: boolean
  delivered: boolean
  created_at: string
}

export default function AdminDashboard() {
  const [affiliates, setAffiliates] = useState<Affiliate[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [markingPaid, setMarkingPaid] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session || session.user.email!== 'makhauhelomoima@gmail.com') {
        router.push('/login')
        return
      }

      const { data: affiliateData } = await supabase
       .from('affiliates')
       .select('*')
       .order('total_earned', { ascending: false })

      const { data: orderData } = await supabase
       .from('orders')
       .select('*')
       .order('created_at', { ascending: false })

      setAffiliates(affiliateData || [])
      setOrders(orderData || [])
      setLoading(false)
    }

    loadData()
  }, [router])

  async function markOrderPaid(orderId: string) {
    setMarkingPaid(orderId)
    const { error } = await supabase
     .from('orders')
     .update({ paid: true })
     .eq('id', orderId)

    if (!error) {
      // Refresh data
      const { data: orderData } = await supabase
       .from('orders')
       .select('*')
       .order('created_at', { ascending: false })

      const { data: affiliateData } = await supabase
       .from('affiliates')
       .select('*')
       .order('total_earned', { ascending: false })

      setOrders(orderData || [])
      setAffiliates(affiliateData || [])
    }
    setMarkingPaid(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
      </div>
    )
  }

  const totalRevenue = orders.reduce((sum, o) => sum + o.amount, 0)
  const totalCommissionOwed = affiliates.reduce((sum, a) => sum + (a.total_earned - a.total_paid), 0)
  const unpaidOrders = orders.filter(o =>!o.paid).length

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-400 mb-2">Zap Sauce™ Empire HQ 👑</h1>
          <p className="text-gray-400">Welcome back, Queen Makhauhelo</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-sm text-gray-400">Total Revenue</p>
            <p className="text-3xl font-bold text-emerald-400">M{totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-sm text-gray-400">Commission Owed</p>
            <p className="text-3xl font-bold text-amber-400">M{totalCommissionOwed.toFixed(2)}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-sm text-gray-400">Affiliates</p>
            <p className="text-3xl font-bold text-blue-400">{affiliates.length}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-sm text-gray-400">Unpaid Orders</p>
            <p className="text-3xl font-bold text-red-400">{unpaidOrders}</p>
          </div>
        </div>

        {/* AFFILIATES TABLE */}
        <div className="bg-gray-800 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Affiliate Army</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Ref Code</th>
                  <th className="text-left p-3">Payout</th>
                  <th className="text-right p-3">Earned</th>
                  <th className="text-right p-3">Paid</th>
                  <th className="text-right p-3">Owed</th>
                </tr>
              </thead>
              <tbody>
                {affiliates.map((a) => (
                  <tr key={a.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-3 font-medium">{a.name}</td>
                    <td className="p-3 text-gray-400">{a.email}</td>
                    <td className="p-3 text-emerald-400">{a.ref_code}</td>
                    <td className="p-3">
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {a.payout_method?.toUpperCase()}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{a.payout_details}</p>
                    </td>
                    <td className="p-3 text-right">M{a.total_earned.toFixed(2)}</td>
                    <td className="p-3 text-right text-gray-400">M{a.total_paid.toFixed(2)}</td>
                    <td className="p-3 text-right font-bold text-amber-400">
                      M{(a.total_earned - a.total_paid).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ORDERS TABLE */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">All Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Customer</th>
                  <th className="text-left p-3">Product</th>
                  <th className="text-left p-3">Ref</th>
                  <th className="text-right p-3">Amount</th>
                  <th className="text-right p-3">Commission</th>
                  <th className="text-center p-3">Status</th>
                  <th className="text-center p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="p-3">{new Date(o.created_at).toLocaleDateString()}</td>
                    <td className="p-3">{o.customer_name || 'N/A'}</td>
                    <td className="p-3">{o.product_name}</td>
                    <td className="p-3 text-emerald-400">{o.ref_code || 'Direct'}</td>
                    <td className="p-3 text-right">M{o.amount.toFixed(2)}</td>
                    <td className="p-3 text-right text-amber-400">M{o.commission_owed.toFixed(2)}</td>
                    <td className="p-3 text-center">
                      {o.paid? (
                        <span className="text-green-400">✅ Paid</span>
                      ) : (
                        <span className="text-yellow-400">⏳ Pending</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {!o.paid && (
                        <button
                          onClick={() => markOrderPaid(o.id)}
                          disabled={markingPaid === o.id}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-xs font-bold disabled:opacity-50"
                        >
                          {markingPaid === o.id? '...' : 'Mark Paid'}
                        </button>
                      )}
                    </td>
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