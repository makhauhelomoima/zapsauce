'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function PortalPage() {
  const [affiliateName, setAffiliateName] = useState('')
  const [sales, setSales] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem('zap_affiliate_name')
    if (savedName) {
      setAffiliateName(savedName)
      setIsLoggedIn(true)
      fetchSales(savedName)
    }
  }, [])

  const fetchSales = async (name: string) => {
    setLoading(true)
    const { data, error } = await supabase
     .from('sales')
     .select('*')
     .eq('affiliate_name', name)
     .order('sale_date', { ascending: false })
    
    if (error) console.error('Error:', error)
    else setSales(data || [])
    setLoading(false)
  }

  const handleLogin = () => {
    if (affiliateName.trim()) {
      localStorage.setItem('zap_affiliate_name', affiliateName)
      setIsLoggedIn(true)
      fetchSales(affiliateName)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zap_affiliate_name')
    setIsLoggedIn(false)
    setAffiliateName('')
    setSales([])
  }

  const handleCopyLink = () => {
    const link = `${window.location.origin}?ref=${encodeURIComponent(affiliateName)}`
    navigator.clipboard.writeText(link)
    alert(`Link copied! Share it to earn M75 per M250 sale. Link: ${link}`)
  }

  const totalEarned = sales.reduce((sum, s) => sum + (Number(s.amount) * 0.30), 0)
  const salesCount = sales.length
  const canPayout = totalEarned >= 225
  const remainingSales = Math.max(0, 3 - salesCount)

  if (!isLoggedIn) {
    return (
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '16px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: '0 0 8px 0' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#888', margin: '0 0 32px 0' }}>Zap Sauce ORIGIN</p>
          
          <input
            type="text"
            placeholder="Your Affiliate Name"
            value={affiliateName}
            onChange={(e) => setAffiliateName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', color: '#fff', padding: '14px', borderRadius: '8px', width: '100%', marginBottom: '16px', fontSize: '1rem' }}
          />
          
          <button onClick={handleLogin} style={{ background: '#00ff88', color: '#000', padding: '14px 32px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
            View My Earnings
          </button>
          
          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '24px' }}>
            Enter the exact name you used when sharing your link
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Welcome, {affiliateName} ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Your Zap Sauce ORIGIN earnings</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/" style={{ background: '#FFD700', color: '#000', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
              Home
            </Link>
            <button onClick={handleLogout} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Earned</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>M{Number(totalEarned).toFixed(2)}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Sales Made</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{salesCount}/3</p>
          </div>
          <div style={{ background: '#111', border: canPayout? '2px solid #00ff88' : '2px solid #ff4444', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Payout Status</p>
            <p style={{ color: canPayout? '#00ff88' : '#ff4444', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
              {canPayout? 'Ready 🥄' : `Need ${remainingSales} more 🍯`}
            </p>
          </div>
        </div>

        {/* M225 THRESHOLD NOTICE */}
        <div style={{ background: canPayout? '#0a0a0a' : '#111', border: canPayout? '2px solid #00ff88' : '2px solid #ff4444', borderRadius: '12px', padding: '24px', marginBottom: '30px', textAlign: 'center' }}>
          <h3 style={{ color: canPayout? '#00ff88' : '#FFD700', margin: '0 0 12px 0' }}>
            {canPayout? '🥄 JAR CLEANED - PAYOUT READY 🥄' : '🍯 CLEAN MY JAR RULE 🍯'}
          </h3>
          <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 16px 0', lineHeight: '1.6' }}>
            {canPayout? 
              `You earned M${Number(totalEarned).toFixed(2)} from ${salesCount} sales. WhatsApp +266 57031600 to claim your payout.` : 
              `Minimum payout: M225 (3 sales). You need ${remainingSales} more sale${remainingSales===1? '' : 's'} to unlock your M${Number(totalEarned).toFixed(2)}.`
            }
          </p>
          <button onClick={handleCopyLink} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
            Copy My Affiliate Link
          </button>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0' }}>My Sales</h2>
          
          {loading? (
            <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>Loading your sales...</p>
          ) : sales.length === 0? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p style={{ color: '#666', fontSize: '1.1rem', margin: '0 0 16px 0' }}>No sales yet. Share your link to start earning!</p>
              <button onClick={handleCopyLink} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
                Copy My Link
              </button>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Customer</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Amount</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Your Cut (30%)</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map(s => (
                    <tr key={s.id} style={{ borderBottom: '1px solid #1f1f1f' }}>
                      <td style={{ padding: '12px', color: '#ccc' }}>{s.customer_name}</td>
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{Number(s.amount).toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#00ff88', fontWeight: '700' }}>M{(Number(s.amount) * 0.30).toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#888' }}>{s.sale_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0', marginTop: '40px' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            © 2026 Zap Sauce ORIGIN Affiliate Portal | Lightning in a jar! ⚡
          </p>
        </div>

      </div>
    </div>
  )
}