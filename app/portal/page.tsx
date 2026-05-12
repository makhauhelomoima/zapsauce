'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type AffiliateData = {
  name: string
  ref_code: string
  payout_method: string
  payout_details: string
  total_earned: number
  total_paid: number
}

type Order = {
  id: string
  customer_name: string
  product_name: string
  amount: number
  commission_owed: number
  paid: boolean
  created_at: string
}

export default function Portal() {
  const [affiliateData, setAffiliateData] = useState<AffiliateData | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function loadData() {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      // Get affiliate data
      const { data: affiliate } = await supabase
       .from('affiliates')
       .select('*')
       .eq('email', session.user.email)
       .single()

      if (!affiliate) {
        router.push('/affiliate')
        return
      }

      setAffiliateData(affiliate)

      // Get orders with this ref_code
      const { data: orderData } = await supabase
       .from('orders')
       .select('*')
       .eq('ref_code', affiliate.ref_code)
       .order('created_at', { ascending: false })

      setOrders(orderData || [])
      setLoading(false)
    }

    loadData()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  if (!affiliateData) return null

  const owed = affiliateData.total_earned - affiliateData.total_paid
  const refLink = `https://zapsauce.vercel.app?ref=${affiliateData.ref_code}`

  return (
    <div className="min-h-screen bg-emerald-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h1 className="text-3xl font-bold text-emerald-950 mb-2">
            Welcome, {affiliateData.name} ⚡
          </h1>
          <p className="text-emerald-700">Your Zap Sauce™ Affiliate Portal</p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">Total Earned</p>
            <p className="text-3xl font-bold text-emerald-600">M{affiliateData.total_earned.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">Total Paid</p>
            <p className="text-3xl font-bold text-gray-700">M{affiliateData.total_paid.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-sm text-gray-600">Owed Now</p>
            <p className="text-3xl font-bold text-amber-600">M{owed.toFixed(2)}</p>
          </div>
        </div>

        {/* PAYOUT INFO */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Payout Info</h2>
          <p className="text-gray-700">
            <strong>Method:</strong> {affiliateData.payout_method?.toUpperCase()}
          </p>
          <p className="text-gray-700">
            <strong>Details:</strong> {affiliateData.payout_details}
          </p>
          <p className="text-gray-700"><strong>Minimum payout:</strong> M225</p>
          <p className="text-gray-700"><strong>Frequency:</strong> Weekly on Fridays</p>
          {owed >= 225? (
            <p className="text-green-700 font-bold mt-2">✅ You qualify for payout this week!</p>
          ) : (
            <p className="text-amber-700 mt-2">M{(225 - owed).toFixed(0)} more to reach minimum</p>
          )}
        </div>

        {/* REF LINK */}
        <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-bold mb-2">Your Unique Link</h2>
          <div className="bg-emerald-700 p-3 rounded-lg break-all text-sm mb-3">
            {refLink}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(refLink)}
            className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50"
          >
            Copy Link
          </button>
        </div>

        {/* ORDERS */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Your Sales</h2>
          {orders.length === 0? (
            <p className="text-gray-500">No sales yet. Share your link to start earning!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Customer</th>
                    <th className="text-left p-2">Product</th>
                    <th className="text-right p-2">Amount</th>
                    <th className="text-right p-2">Commission</th>
                    <th className="text-center p-2">Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b">
                      <td className="p-2">{new Date(order.created_at).toLocaleDateString()}</td>
                      <td className="p-2">{order.customer_name || 'N/A'}</td>
                      <td className="p-2">{order.product_name}</td>
                      <td className="p-2 text-right">M{order.amount.toFixed(2)}</td>
                      <td className="p-2 text-right text-emerald-600 font-bold">M{order.commission_owed.toFixed(2)}</td>
                      <td className="p-2 text-center">{order.paid? '✅' : '⏳'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}