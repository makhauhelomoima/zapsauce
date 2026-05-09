'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AffiliatePage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [refCode, setRefCode] = useState('')
  const [affiliate, setAffiliate] = useState(null)
  const [downlines, setDownlines] = useState([])
  const [loading, setLoading] = useState(false)

  const PAYOUT_MINIMUM = 225
  const COMMISSION_PER_SALE = 36

  const handleLogin = async () => {
    if (password !== 'ZAP120') {
      alert('Wrong password. Use: ZAP120')
      return
    }
    const code = prompt('Enter your unique ref code. New? Create one: e.g. Thabo123')
    if (!code) return
    setLoading(true)
    
    let { data: existing } = await supabase.from('affiliates').select('*').eq('ref_code', code).single()
    
    if (!existing) {
      const name = prompt('Enter your full name for payouts:')
      const phone = prompt('Enter MPESA number 266XXXXXXXX:')
      const { data: newAff } = await supabase.from('affiliates').insert({
        name, ref_code: code, phone, is_active: false, total_earned: 0, pending_due: 0
      }).select().single()
      existing = newAff
    }
    
    setRefCode(code)
    setAffiliate(existing)
    setAuthed(true)
    
    if (existing.is_active) {
      const { data: sales } = await supabase.from('purchases').select('*').eq('ref_code_used', code).order('created_at', { ascending: false })
      setDownlines(sales || [])
    }
    setLoading(false)
  }

  const activateAccount = () => {
    window.open('https://zapsauce.vercel.app', '_blank')
    alert('After purchasing M120, WhatsApp +266 57031600 with your ref code to activate')
  }

  const requestPayout = () => {
    const message = `PAYOUT REQUEST ⚡%0AName: ${affiliate.name}%0ARef: ${refCode}%0AAmount: M${affiliate.pending_due}%0AMPESA: ${affiliate.phone}`
    window.open(`https://wa.me/26657031600?text=${message}`, '_blank')
  }

  const affiliateLink = `https://zapsauce.vercel.app?ref=${refCode}`
  const salesNeeded = Math.max(0, Math.ceil((PAYOUT_MINIMUM - (affiliate?.pending_due || 0)) / COMMISSION_PER_SALE))
  const canPayout = (affiliate?.pending_due || 0) >= PAYOUT_MINIMUM

  if (loading) return <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Loading...</p></main>

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 8px 0' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#FFD700', fontSize: '1.1rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>FREE TO JOIN</p>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} />
          <button onClick={handleLogin} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Access Portal</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Affiliate Dashboard ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Welcome, {affiliate?.name} | Ref: {refCode} | Status: {affiliate?.is_active ? 'ACTIVE' : 'INACTIVE'}</p>
          </div>
          <button onClick={() => setAuthed(false)} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
        </div>
        
        {!affiliate?.is_active ? (
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ color: '#ff4444', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Activate to Earn</h3>
            <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>Buy the M120 PDF recipe to activate. Then earn M36 per sale.</p>
            <button onClick={activateAccount} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Buy M120 to Activate</button>
          </div>
        ) : (
          <>
            <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Link 🔗</h3>
              <div style={{ background: '#111', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <p style={{ color: '#00ff88', fontSize: '1rem', margin: 0, wordBreak: 'break-all' }}>{affiliateLink}</p>
              </div>
              <button onClick={() => { navigator.clipboard.writeText(affiliateLink); alert('Copied!') }} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Copy Link</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Earned</p>
                <p style={{ color: '#FFD700', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliate?.total_earned || 0}</p>
              </div>
              <div style={{ background: '#0a0a0a', border: `2px solid ${canPayout ? '#00ff88' : '#ff4500'}`, borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Pending Payout</p>
                <p style={{ color: canPayout ? '#00ff88' : '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliate?.pending_due || 0}</p>
                <p style={{ color: '#666', fontSize: '0.7rem', margin: '4px 0 0 0' }}>
                  {canPayout ? 'Ready to cash out!' : `${salesNeeded} more sales to M225`}
                </p>
              </div>
              <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Level 1 Downlines</p>
                <p style={{ color: '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>{downlines.length}</p>
              </div>
            </div>

            {canPayout && (
              <button onClick={requestPayout} style={{ background: '#00ff88', color: '#000', padding: '16px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', width: '100%', marginBottom: '24px' }}>
                Request M{affiliate.pending_due} Payout via WhatsApp
              </button>
            )}

            <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Level 1 Sales</h3>
              {downlines.length === 0 ? (
                <p style={{ color: '#888' }}>No sales yet. Share your link. Each sale = M36 to you.</p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #333' }}>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Buyer</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Date</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Commission</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {downlines.map((sale, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                          <td style={{ color: '#fff', padding: '12px' }}>{sale.buyer_name}</td>
                          <td style={{ color: '#ccc', padding: '12px' }}>{new Date(sale.created_at).toLocaleDateString()}</td>
                          <td style={{ color: '#00ff88', padding: '12px', fontWeight: 'bold' }}>M36</td>
                          <td style={{ color: sale.commission_paid ? '#00ff88' : '#ff4500', padding: '12px' }}>{sale.commission_paid ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}