'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twnkxgblxtjrqihxzsjl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmt4Z2JseHRqcnFpaHh6c2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjIzMTgsImV4cCI6MjA5MzQzODMxOH0.-3zeeVyK8WbcForwd5zsaxSULUqmXQGPn_to-mBR9Zg'
const supabase = createClient(supabaseUrl, supabaseKey)

const ADMIN_PASSWORD = 'ZapSauce2026'

type Order = {
  id: number, product_name: string, amount_maloti: number, customer_name: string,
  customer_whatsapp: string, mpesa_code: string, payment_status: string,
  pdf_sent: boolean, created_at: string, paid_at: string
}

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [orders, setOrders] = useState<Order[]>([])
  const [todayStats, setTodayStats] = useState({ count: 0, total: 0 })

  const login = () => {
    if (password === ADMIN_PASSWORD) { setLoggedIn(true); fetchOrders() }
    else alert('Wrong password, my Queen')
  }

  const fetchOrders = async () => {
    const { data } = await supabase.from('zap_orders').select('*').order('created_at', { ascending: false }).limit(50)
    if (data) setOrders(data)
    const today = new Date().toISOString().split('T')[0]
    const { data: stats } = await supabase.from('zap_orders').select('amount_maloti').eq('payment_status', 'verified').gte('paid_at', today)
    if (stats) {
      const total = stats.reduce((sum, o) => sum + Number(o.amount_maloti), 0)
      setTodayStats({ count: stats.length, total })
    }
  }

  const markSent = async (id: number) => {
    await supabase.from('zap_orders').update({ pdf_sent: true, sent_at: new Date() }).eq('id', id)
    fetchOrders()
  }

  const addOrder = async (e: any) => {
    e.preventDefault()
    const form = e.target
    await supabase.from('zap_orders').insert({
      product_ref: form.ref.value, product_name: form.name.value, amount_maloti: form.amount.value,
      customer_name: form.customer.value, customer_whatsapp: form.whatsapp.value,
      mpesa_code: form.mpesa.value, payment_status: 'verified', paid_at: new Date()
    })
    form.reset(); fetchOrders()
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center" style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="bg-gray-900 p-8 rounded-lg border-2 border-yellow-500 w-96">
          <h1 className="text-3xl font-black text-yellow-400 mb-6" style={{fontFamily: 'Bebas Neue, cursive'}}>ZAP SAUCE VAULT ⚡</h1>
          <input type="password" placeholder="Enter password" className="w-full p-3 mb-4 bg-gray-800 rounded text-white" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === 'Enter' && login()}/>
          <button onClick={login} className="w-full bg-yellow-500 text-black font-bold p-3 rounded">ENTER VAULT</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-yellow-400 mb-8" style={{fontFamily: 'Bebas Neue, cursive'}}>ZAP SAUCE DASHBOARD ⚡</h1>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 p-6 rounded border-2 border-green-500"><p className="text-gray-400">SALES TODAY</p><p className="text-4xl font-black text-white">{todayStats.count}</p></div>
          <div className="bg-gray-900 p-6 rounded border-2 border-green-500"><p className="text-gray-400">BANKED TODAY</p><p className="text-4xl font-black text-green-400">M{todayStats.total}</p></div>
          <div className="bg-gray-900 p-6 rounded border-2 border-yellow-500"><p className="text-gray-400">JUNE TARGET</p><p className="text-4xl font-black text-yellow-400">M{todayStats.total}/6000</p></div>
        </div>
        <form onSubmit={addOrder} className="bg-gray-900 p-6 rounded mb-8 border-2 border-yellow-500">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">ADD MPESA ORDER</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input name="customer" placeholder="Customer Name" className="p-2 bg-gray-800 rounded" required/>
            <input name="whatsapp" placeholder="26657031600" className="p-2 bg-gray-800 rounded" required/>
            <input name="mpesa" placeholder="Mpesa Code" className="p-2 bg-gray-800 rounded" required/>
            <input name="ref" placeholder="ZAP/PRO/QUEEN" className="p-2 bg-gray-800 rounded" required/>
            <input name="name" placeholder="Product Name" className="p-2 bg-gray-800 rounded" required/>
            <input name="amount" type="number" placeholder="Amount M120" className="p-2 bg-gray-800 rounded" required/>
          </div>
          <button className="mt-4 bg-green-600 px-6 py-2 rounded font-bold">ADD SALE + SAVE</button>
        </form>
        <div className="bg-gray-900 rounded border-2 border-gray-700">
          <h2 className="text-2xl font-bold p-4 text-yellow-300">RECENT ORDERS</h2>
          {orders.map(o => (
            <div key={o.id} className="border-t border-gray-700 p-4 flex justify-between items-center">
              <div>
                <p className="font-bold text-white">{o.customer_name} | M{o.amount_maloti} | {o.product_name}</p>
                <p className="text-sm text-gray-400">Mpesa: {o.mpesa_code} | {new Date(o.created_at).toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <a href={`https://wa.me/${o.customer_whatsapp}`} target="_blank" className="bg-green-600 px-3 py-1 rounded text-sm">WhatsApp</a>
                {!o.pdf_sent && <button onClick={() => markSent(o.id)} className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-bold">Mark Sent</button>}
                {o.pdf_sent && <span className="text-green-400 text-sm">✓ Sent</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  }
