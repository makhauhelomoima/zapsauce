'use client'
import { useState } from 'react'

export default function AffiliatePage() {
  const [name, setName] = useState('')
  const [hasName, setHasName] = useState(false)
  const [copied, setCopied] = useState(false)

  const affiliateData = {
    name: name || 'Affiliate',
    earned: 0,
    due: 0,
    rank: 'Starter',
    link: `https://zapsauce.vercel.app?ref=${encodeURIComponent(name || 'YourName')}`,
    clicks: 0,
    totalSales: 0
  }

  const copyLink = () => {
    navigator.clipboard.writeText(affiliateData.link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!hasName) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 8px 0' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#FFD700', fontSize: '1.1rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>FREE TO JOIN</p>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 24px 0' }}>No purchase needed. Enter name. Get link. Earn 30%.</p>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && name.trim() && setHasName(true)}
            style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} 
          />
          <button onClick={() => name.trim() && setHasName(true)} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Get My Free Link</button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: '0 0 8px 0' }}>Welcome, {affiliateData.name} ⚡</h1>
        <p style={{ color: '#888', margin: '0 0 32px 0' }}>Rank: {affiliateData.rank} | Share and earn M36 per M120 sale</p>
        
        <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
          <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Free Link 🔗</h3>
          <div style={{ background: '#111', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
            <p style={{ color: '#00ff88', fontSize: '1rem', margin: 0, wordBreak: 'break-all' }}>{affiliateData.link}</p>
          </div>
          <button onClick={copyLink} style={{ background: copied ? '#00ff88' : '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
            {copied ? 'Copied! Go Share!' : 'Copy My Link'}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Earned</p>
            <p style={{ color: '#FFD700', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliateData.earned}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Pending Payout</p>
            <p style={{ color: '#00ff88', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliateData.due}</p>
          </div>
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Sales</p>
            <p style={{ color: '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>{affiliateData.totalSales}</p>
          </div>
        </div>

        <button onClick={() => window.location.href = '/'} style={{ background: 'transparent', color: '#888', padding: '12px', border: 'none', cursor: 'pointer', width: '100%', marginTop: '32px' }}>Back Home</button>
      </div>
    </main>
  )
}