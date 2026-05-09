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
  const [affiliates, setAffiliates] = useState([])
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(false)

  // CONFIG
  const COMMISSION_ORIGIN = 75
  const COMMISSION_FIREBALL = 105
  const ORIGIN_PRICE = 250
  const FIREBALL_PRICE = 350

  const loadData = async () => {
    setLoading(true)
    
    // Load all affiliates
    const { data: affs, error: affError } = await supabase
      .from('affiliates')
      .select('*')
      .order('created_at', { ascending: false })
    
    // Load all purchases
    const { data: sales, error: salesError } = await supabase
      .from('purchases')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (!affError) setAffiliates(affs || [])
    if (!salesError) setPurchases(sales || [])
    setLoading(false)
  }

  const handleLogin = () => {
    if (password === 'HEAL120') {
      setAuthed(true)
      loadData()
    } else {
      alert('Wrong password')
    }
  }

  const markAsPaid = async (purchaseId, refCode, commission) => {
    // 1. Mark purchase as paid
    await supabase
      .from('purchases')
      .update({ commission_paid: true })
      .eq('id', purchaseId)
    
    // 2. Deduct from affiliate pending_due
    await supabase
      .from('affiliates')
      .update({ pending_due: 0 })
      .eq('ref_code', refCode)
    
    alert(`Marked M${commission} as paid for ${refCode}`)
    loadData()
  }

  const activateAffiliate = async (refCode) => {
    await supabase
      .from('affiliates')
      .update({ is_active: true })
      .eq('ref_code', refCode)
    
    alert(`Activated ${refCode}`)
    loadData()
  }

  const isSuspiciousRef = (refCode) => {
    // Flag if: pure numbers, too short, random chars
    const isPureNumber = /^\d+$/.test(refCode)
    const tooShort = refCode.length < 3
    const randomChars = /^.{0,2}[0-9]{3,}/.test(refCode) // like a1b2c3
    return isPureNumber || tooShort || randomChars
  }

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#FFD700', fontSize: '1.8rem', margin: '0 0 16px 0' }}>Admin Portal ⚡</h1>
          <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 24px 0' }}>Name-based tracking active</p>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} 
          />
          <button onClick={handleLogin} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>
            Access Dashboard
          </button>
        </div>
      </main>
    )
  }

  const totalSales = purchases.reduce((sum, p) => sum + p.amount, 0)
  const totalCommissionsOwed = affiliates.reduce((sum, a) => sum + (a.pending_due || 0), 0)
  const yourNetRevenue = totalSales - totalCommissionsOwed
  const pendingPayouts = purchases.filter(p => !p.commission_paid)
  const suspiciousAffs = affiliates.filter(a => isSuspiciousRef(a.ref_code))

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: 0 }}>Zap Sauce Admin ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>HEAL120 Access | Name-Based Tracking ON</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={loadData} style={{ background: '#00ff88', color: '#000', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Refresh Data
            </button>
            <button onClick={() => setAuthed(false)} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Logout
            </button>
          </div>
        </div>

        {suspiciousAffs.length > 0 && (
          <div style={{ background: '#ff4444', color: '#fff', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>⚠️ SUSPICIOUS REF CODES DETECTED: {suspiciousAffs.length}</p>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              {suspiciousAffs.map(a => a.ref_code).join(', ')} - Review before paying
            </p>
          </div>
        )}

        {/* Revenue Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Sales</p>
            <p style={{ color: '#00ff88', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{totalSales}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Commissions Owed</p>
            <p style={{ color: '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{totalCommissionsOwed}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Your Net Revenue</p>
            <p style={{ color: '#FFD700', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{yourNetRevenue}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Pending Payouts</p>
            <p style={{ color: '#ff4444', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>{pendingPayouts.length}</p>
          </div>
        </div>

        {/* All Affiliates Table */}
        <h3 style={{ color: '#FFD700', fontSize: '1.5rem', margin: '32px 0 16px 0' }}>All Affiliates ({affiliates.length})</h3>
        <div style={{ background: '#0a0a0a', border: '2px solid #333', borderRadius: '16px', padding: '24px', overflowX: 'auto', marginBottom: '32px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #333' }}>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Name</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Ref Code</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Phone</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Status</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Total Earned</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Pending Due</th>
                <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {affiliates.map((aff, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #1a1a1a', background: isSuspiciousRef(aff.ref_code) ? '#2a0000' : 'transparent' }}>
                  <td style={{ color: '#fff', padding: '12px' }}>{aff.name}</td>
                  <td style={{ 
                    color: isSuspiciousRef(aff.ref_code) ? '#ff4444' : '#00ff88', 
                    padding: '12px', 
                    fontWeight: 'bold' 
                  }}>
                    {aff.ref_code} {isSuspiciousRef(aff.ref_code) && '⚠️'}
                  </td>
                  <td style={{ color: '#ccc', padding: '12px' }}>{aff.phone}</td>
                  <td style={{ color: aff.is_active ? '#00ff88' : '#ff4444', padding: '12px', fontWeight: 'bold' }}>
                    {aff.is_active ? 'ACTIVE' : 'INACTIVE'}
                  </td>
                  <td style={{ color: '#FFD700', padding: '12px', fontWeight: 'bold' }}>M{aff.total_earned}</td>
                  <td style={{ color: aff.pending_due >= 225 ? '#00ff88' : '#ff4500', padding: '12px', fontWeight: 'bold' }}>
                    M{aff.pending_due}
                  </td>
                  <td style={{ padding: '12px' }}>
                    {!aff.is_active && (
                      <button 
                        onClick={() => activateAffiliate(aff.ref_code)} 
                        style={{ background: '#FFD700', color: '#000', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pending Payouts */}
        <h3 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '32px 0 16px 0' }}>Payout Queue ({pendingPayouts.length})</h3>
        <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '24px', overflowX: 'auto' }}>
          {pendingPayouts.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center' }}>No pending payouts</p>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #333' }}>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Buyer</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Amount</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Affiliate</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Commission</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Date</th>
                  <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingPayouts.map((p, i) => {
                  const commission = p.amount === ORIGIN_PRICE ? COMMISSION_ORIGIN : COMMISSION_FIREBALL
                  const aff = affiliates.find(a => a.ref_code === p.ref_code_used)
                  return (
                    <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                      <td style={{ color: '#fff', padding: '12px' }}>{p.buyer_name}</td>
                      <td style={{ color: '#00ff88', padding: '12px', fontWeight: 'bold' }}>M{p.amount}</td>
                      <td style={{ 
                        color: isSuspiciousRef(p.ref_code_used) ? '#ff4444' : '#FFD700', 
                        padding: '12px' 
                      }}>
                        {p.ref_code_used} {isSuspiciousRef(p.ref_code_used) && '⚠️'}
                      </td>
                      <td style={{ color: '#ff4500', padding: '12px', fontWeight: 'bold' }}>M{commission}</td>
                      <td style={{ color: '#ccc', padding: '12px' }}>{new Date(p.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '12px' }}>
                        <button 
                          onClick={() => markAsPaid(p.id, p.ref_code_used, commission)} 
                          style={{ background: '#00ff88', color: '#000', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}
                        >
                          Mark Paid
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  )
}