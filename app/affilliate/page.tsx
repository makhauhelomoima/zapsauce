'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AffiliatePage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState<any>(null)

  const handleLogin = async () => {
    if (password === 'LIGHTNING2026') {
      // Replace 'duduca@example.com' with email lookup when you add real auth
      const { data } = await supabase.from('affiliates').select('*').eq('email', 'duduca@example.com').single()
      if (data) {
        setCurrentUser(data)
        setAuthed(true)
        setError('')
      } else {
        setError('Affiliate not found 🥺')
      }
    } else {
      setError('Wrong password. Check email after purchase 🥺')
    }
  }

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0', textAlign: 'center' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 24px 0', textAlign: 'center' }}>No downloads - PDF sent via WhatsApp</p>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} />
          <button onClick={handleLogin} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Access Portal</button>
          {error && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0', textAlign: 'center' }}>{error}</p>}
          <button onClick={() => window.location.href = '/'} style={{ background: 'transparent', color: '#888', padding: '12px', border: 'none', cursor: 'pointer', width: '100%', marginTop: '8px' }}>Back Home</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Affiliate Dashboard ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Welcome back, {currentUser.name}</p>
          </div>
          <button onClick={() => window.location.href = '/'} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Logout</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Earned</p>
            <p style={{ color: '#FFD700', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{currentUser.earned}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Pending Payout</p>
            <p style={{ color: '#00ff88', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{currentUser.due}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Your Rank</p>
            <p style={{ color: '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>{currentUser.rank}</p>
          </div>
        </div>

        <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
          <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Affiliate Link</h3>
          <div style={{ background: '#111', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            <p style={{ color: '#00ff88', fontSize: '1rem', margin: 0, wordBreak: 'break-all' }}>{currentUser.link}</p>
          </div>
          <button onClick={() => { navigator.clipboard.writeText(currentUser.link); alert('Link copied! Share and earn 30% ⚡') }}
            style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            Copy Link
          </button>
        </div>

        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
          <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Performance</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ color: '#888' }}>Link Clicks</span>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>{currentUser.clicks}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ color: '#888' }}>Conversions</span>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>{currentUser.totalSales}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ color: '#888' }}>Your Sponsor</span>
              <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{currentUser.sponsor}</span>
            </div>
          </div>
        </div>

        <p style={{ color: '#666', textAlign: 'center', fontSize: '0.8rem', margin: '32px 0 0 0' }}>
          Payouts processed weekly via MPESA. Minimum M50. Questions? WhatsApp +266 57031600
        </p>
      </div>
    </main>
  )
}