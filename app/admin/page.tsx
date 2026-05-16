'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers/nextjs'
import { useRouter } from 'next/navigation'

type Order = {
  id: string
  customer_name: string
  product: string
  amount: number
  status: string
  created_at: string
}

export default function AdminPage() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      setUserEmail(user.email || '')

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (profile?.role !== 'admin') {
        router.push('/customer')
        return
      }

      // Load orders
      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })
      
      setOrders(ordersData || [])
      setLoading(false)
    }
    checkAuth()
  }, [router, supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      Loading Admin Dashboard...
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">⚡ Zap Sauce™ Admin</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">{userEmail}</span>
          <button onClick={handleLogout} className="text-sm bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6 text-amber-400">Orders</h2>
        
        <div className="bg-gray-900 rounded-2xl border-gray-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-t border-gray-800">
                  <td className="px-6 py-4">{order.customer_name}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4">M{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      order.status === 'paid' ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(order.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {orders.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No orders yet. Empire is waiting.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}