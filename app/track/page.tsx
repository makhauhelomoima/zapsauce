'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://twnkxgblxtjrqihxzsjl.supabase.co', 'P')

export default function TrackOrder() {
  const [code, setCode] = useState('')
  const [order, setOrder] = useState<any>(null)
  const [error, setError] = useState('')

  const track = async () => {
    setError('')
    const { data } = await supabase.from('zap_orders').select('product_name, amount_maloti, payment_status, pdf_sent, sent_at').eq('mpesa_code', code.toUpperCase()).single()
    if (data) setOrder(data)
    else setError('Order not found. Check Mpesa code or WhatsApp 57031600.')
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="bg-gray-900 p-8 rounded-lg border-2 border-yellow-500 w-full max-w-md">
        <h1 className="text-4xl font-black text-yellow-400 mb-6 text-center" style={{fontFamily: 'Bebas Neue, cursive'}}>TRACK ORDER ⚡</h1>
        <input placeholder="Enter Mpesa Code: QK123ABC" className="w-full p-3 mb-4 bg-gray-800 rounded text-white text-center text-lg" value={code} onChange={e => setCode(e.target.value)}/>
        <button onClick={track} className="w-full bg-yellow-500 text-black font-bold p-3 rounded mb-6">CHECK STATUS</button>
        {error && <p className="text-red-400 text-center">{error}</p>}
        {order && (
          <div className="bg-gray-800 p-4 rounded">
            <p className="text-xl font-bold text-white mb-2">{order.product_name}</p>
            <p className="mb-2">Amount: <span className="text-green-400 font-bold">M{order.amount_maloti}</span></p>
            <p className="mb-2">Payment: {order.payment_status === 'verified'? '✅ Verified' : '⏳ Pending'}</p>
            <p>PDF: {order.pdf_sent? `✅ Sent ${new Date(order.sent_at).toLocaleString()}` : '⏳ Sending soon'}</p>
          </div>
        )}
        <p className="text-xs text-gray-500 text-center mt-6">Questions? WhatsApp 57031600</p>
      </div>
    </div>
  )
    }
