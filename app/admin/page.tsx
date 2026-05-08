'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminPage() {
  const [sales, setSales] = useState<any[]>([])
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (authed) fetchSales()
  }, [authed])

  const fetchSales = async () => {
    const { data } = await supabase.from('sales').select('*').order('sale_date', { ascending: false })
    if (data) setSales(data)
  }

  const handleLogin = () => {
    if (password === 'HEAL120') {
      setAuthed(true)
      setError('')
    } else {
      setError('Wrong password my Queen 🔒')
    }
  }

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0', textAlign: 'center' }}>Admin Login 🔒</h1>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} />
          <button onClick={handleLogin} style={{ background: '#ff4444', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Enter</button>
          {error && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0', textAlign: 'center' }}>{error}</p>}
        </div>
      </main>
    )
  }

  const totalRevenue = sales.reduce((sum, s) => sum + Number(s.amount), 0)
  const totalCommission = sales.reduce((sum, s) => sum + (Number(s.amount) * 0.3), 0)

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ color: '#ff4444', fontSize: '2rem', margin: 0 }}>Admin Dashboard 🔒</h1>
          <button onClick={() => window.location.href = '/'} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Back Home</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Revenue</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>M{totalRevenue}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Commission 30%</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>M{totalCommission.toFixed(0)}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Sales</p>
            <p style={{ color: '#ff4500', fontSize: '2.5rem', margin: 0, fontWeight: 'bold' }}>{sales.length}</p>
          </div>
        </div>

        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Revenue Ledger - From Supabase `sales`</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>ID</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Customer</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Tier</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Amount</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Affiliate</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>MPESA</th>
                  <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ color: '#666', padding: '12px', fontSize: '0.8rem' }}>{sale.id.slice(0, 8)}...</td>
                    <td style={{ color: '#fff', padding: '12px' }}>{sale.customer_name}</td>
                    <td style={{ color: sale.tier === 'ORIGIN'? '#FFD700' : '#ff4500', padding: '12px', fontWeight: 'bold' }}>{sale.tier}</td>
                    <td style={{ color: '#FFD700', padding: '12px', fontWeight: 'bold' }}>M{sale.amount}</td>
                    <td style={{ color: '#00ff88', padding: '12px' }}>{sale.affiliate_name}</td>
                    <td style={{ color: '#888', padding: '12px' }}>{sale.mpesa_code}</td>
                    <td style={{ color: '#888', padding: '12px' }}>{sale.sale_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}