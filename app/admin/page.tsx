'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [payoutQueue, setPayoutQueue] = useState([])
  const [allAffiliates, setAllAffiliates] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [loading, setLoading] = useState(false)

  const PAYOUT_MINIMUM = 225

  const fetchData = async () => {
    setLoading(true)

    // 1. Get all affiliates who hit M225+
    const { data: queue } = await supabase
     .from('affiliates')
     .select('*')
     .gte('pending_due', PAYOUT_MINIMUM)
     .order('pending_due', { ascending: false })
    setPayoutQueue(queue || [])

    // 2. Get all affiliates for overview
    const { data: all } = await supabase
     .from('affiliates')
     .select('*')
     .order('total_earned', { ascending: false })
    setAllAffiliates(all || [])

    // 3. Calculate total revenue from purchases table
    const { data: sales } = await supabase
     .from('purchases')
     .select('amount')
    const revenue = sales?.reduce((sum, sale) => sum + sale.amount, 0) || 0
    setTotalRevenue(revenue)

    setLoading(false)
  }

  useEffect(() => {
    if (authed) fetchData()
  }, [authed])

  const markAsPaid = async (affiliateId, amount, phone, name) => {
    const confirm = window.confirm(`Confirm you sent M${amount} to ${name} - ${phone} via MPESA?`)
    if (!confirm) return

    // 1. Subtract from pending_due
    await supabase
     .from('affiliates')
     .update({ pending_due: 0 })
     .eq('id', affiliateId)

    // 2. Mark their sales as paid
    await supabase
     .from('purchases')
     .update({ commission_paid: true })
     .eq('ref_code_used', allAffiliates.find(a => a.id === affiliateId)?.ref_code)
     .eq('commission_paid', false)

    alert(`Marked as PAID. ${name} balance reset to M0.`)
    fetchData() // Refresh list
  }

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0' }}>ADMIN DASHBOARD 🔒</h1>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 24px 0' }}>Makhauhelo only</p>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} />
          <button onClick={() => password === 'HEAL120' && setAuthed(true)} style={{ background: '#ff4444', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Enter Dashboard</button>
          {password && password!== 'HEAL120' && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>Wrong password my Queen 🔒</p>}
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ color: '#ff4444', fontSize: '2rem', margin: 0 }}>Zap Sauce Admin ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Total Revenue: M{totalRevenue} | Affiliates: {allAffiliates.length}</p>
          </div>
          <button onClick={() => setAuthed(false)} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
        </div>

        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
          <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0' }}>PAYOUT QUEUE - M{PAYOUT_MINIMUM}+ ONLY 💰</h3>
          <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 24px 0' }}>These people legit earned it. Pay them. Then click "Mark Paid" to reset their balance.</p>

          {loading? <p style={{ color: '#ccc' }}>Loading...</p> : payoutQueue.length === 0? (
            <p style={{ color: '#888' }}>No payouts due. Nobody has hit M225 yet.</p>
          ) : (
            <div style={{ display: 'grid', gap: '16px' }}>
              {payoutQueue.map((aff) => (
                <div key={aff.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#111', borderRadius: '8px', border: '1px solid #00ff88' }}>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 4px 0' }}>{aff.name} - {aff.ref_code}</p>
                    <p style={{ color: '#00ff88', margin: '0 0 4px 0' }}>MPESA: {aff.phone}</p>
                    <p style={{ color: '#FFD700', margin: 0 }}>Due: M{aff.pending_due} | Total Earned: M{aff.total_earned}</p>
                  </div>
                  <button
                    onClick={() => markAsPaid(aff.id, aff.pending_due, aff.phone, aff.name)}
                    style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                    Mark Paid M{aff.pending_due}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: '#0a0a0a', border: '2px solid #333', borderRadius: '16px', padding: '32px' }}>
          <h3 style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 16px 0' }}>All Affiliates Overview</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #333' }}>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Name</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Ref Code</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Active</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Total Earned</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Pending</th>
                </tr>
              </thead>
              <tbody>
                {allAffiliates.map((aff) => (
                  <tr key={aff.id} style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <td style={{ color: '#fff', padding: '12px' }}>{aff.name}</td>
                    <td style={{ color: '#00ff88', padding: '12px' }}>{aff.ref_code}</td>
                    <td style={{ color: aff.is_active? '#00ff88' : '#ff4444', padding: '12px' }}>{aff.is_active? 'Yes' : 'No'}</td>
                    <td style={{ color: '#FFD700', padding: '12px' }}>M{aff.total_earned}</td>
                    <td style={{ color: aff.pending_due >= PAYOUT_MINIMUM? '#00ff88' : '#ccc', padding: '12px', fontWeight: aff.pending_due >= PAYOUT_MINIMUM? 'bold' : 'normal' }}>M{aff.pending_due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button onClick={fetchData} style={{ background: '#333', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%', marginTop: '24px' }}>Refresh Data</button>
      </div>
    </main>
  )
}