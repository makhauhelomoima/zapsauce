'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type AffiliateData = {
  name: string
  ref_code: string
  mpesa_number: string
  total_earned: number
  total_paid: number
}

type OrderData = {
  id: string
  customer_email: string
  product_name: string
  amount: number
  paid: boolean
  created_at: string
}

export default function AffiliateLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState<any>(null)
  const [affiliateData, setAffiliateData] = useState<AffiliateData | null>(null)
  const [orders, setOrders] = useState<OrderData[]>([])
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      setUser(user)
      fetchAffiliateData(user.email!)
    }
  }

  async function fetchAffiliateData(userEmail: string) {
    // Get affiliate by matching email from auth
    const { data: affData } = await supabase
      .from('affiliates')
      .select('*')
      .single()

    if (affData) {
      setAffiliateData(affData)
      
      // Get orders with this ref code
      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .eq('ref_code', affData.ref_code)
        .order('created_at', { ascending: false })
      
      if (ordersData) setOrders(ordersData)
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    checkUser()
    setLoading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setAffiliateData(null)
    router.push('/')
  }

  // If logged in, show dashboard
  if (user && affiliateData) {
    const owed = affiliateData.total_earned - affiliateData.total_paid
    const yourLink = `https://zapsauce.vercel.app/?ref=${affiliateData.ref_code}`
    const paidOrders = orders.filter(o => o.paid).length
    const totalClicks = orders.length // Simple: 1 order = 1 click for now

    return (
      <div className="min-h-screen bg-emerald-50 p-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-emerald-950">🔥 Welcome, {affiliateData.name}</h1>
              <p className="text-emerald-700">Zap Sauce™ Affiliate Dashboard</p>
            </div>
            <button onClick={handleLogout} className="text-emerald-700 hover:text-emerald-900 font-medium">Logout</button>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500">
              <p className="text-gray-600 text-sm">Total Earned</p>
              <p className="text-3xl font-bold text-emerald-950">M{affiliateData.total_earned.toFixed(0)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <p className="text-gray-600 text-sm">Owed to You</p>
              <p className="text-3xl font-bold text-red-950">M{owed.toFixed(0)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <p className="text-gray-600 text-sm">Sales Made</p>
              <p className="text-3xl font-bold text-blue-950">{paidOrders}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
              <p className="text-gray-600 text-sm">Link Clicks</p>
              <p className="text-3xl font-bold text-amber-950">{totalClicks}</p>
            </div>
          </div>

          {/* YOUR LINK */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Your Affiliate Link</h2>
            <div className="bg-emerald-100 p-4 rounded-lg flex items-center justify-between">
              <p className="font-mono text-emerald-950 break-all">{yourLink}</p>
              <button 
                onClick={() => navigator.clipboard.writeText(yourLink)}
                className="ml-4 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">Share this link. Earn M45 per ORIGIN, M60 per FIREBALL.</p>
          </div>

          {/* PAYOUT INFO */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Payout Info</h2>
            <p className="text-gray-700"><strong>M-Pesa:</strong> {affiliateData.mpesa_number}</p>
            <p className="text-gray-700"><strong>Minimum payout:</strong> M225</p>
            <p className="text-gray-700"><strong>Frequency:</strong> Weekly on Fridays</p>
            {owed >= 225 ? (
              <p className="text-green-700 font-bold mt-2">✅ You qualify for payout this week!</p>
            ) : (
              <p className="text-amber-700 mt-2">M{(225 - owed).toFixed(0)} more to reach minimum</p>
            )}
          </div>

          {/* YOUR SALES */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Your Sales</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Product</th>
                    <th className="text-left py-2">Amount</th>
                    <th className="text-left py-2">Commission</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="py-3">{new Date(order.created_at).toLocaleDateString()}</td>
                      <td className="py-3">{order.product_name}</td>
                      <td className="py-3">M{order.amount}</td>
                      <td className="py-3 font-bold text-emerald-700">M{(order.amount * 0.3).toFixed(0)}</td>
                      <td className="py-3">
                        {order.paid ? (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Paid</span>
                        ) : (
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length === 0 && <p className="text-gray-500 text-center py-8">No sales yet. Share your link! 🔥</p>}
            </div>
          </div>

        </div>
      </div>
    )
  }

  // Login form
  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🔥</div>
          <h1 className="text-3xl font-bold text-emerald-950">Affiliate Login</h1>
          <p className="text-emerald-700">Access your dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login →'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <Link href="/affiliate" className="text-emerald-700 font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  )
}