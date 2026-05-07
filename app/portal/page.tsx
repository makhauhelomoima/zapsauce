'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function AffiliatePortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [affiliateName, setAffiliateName] = useState('')
  const [sales, setSales] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [monthlyStats, setMonthlyStats] = useState<any[]>([])

  useEffect(() => {
    const auth = localStorage.getItem('zap_affiliate_auth')
    const name = localStorage.getItem('zap_affiliate_name')
    if (auth === 'Zapsauce2026' && name) {
      setIsAuthenticated(true)
      setAffiliateName(name)
      fetchAffiliateSales(name)
    }
  }, [])

  const fetchAffiliateSales = async (name: string) => {
    setLoading(true)
    const { data, error } = await supabase
  .from('sales')
  .select('*')
  .eq('affiliate_name', name)
  .neq('affiliate_name', 'You')
  .order('sale_date', { ascending: false })
    
    if (error) {
      console.error('Error fetching sales:', error)
    } else {
      setSales(data || [])
      calculateMonthlyStats(data || [])
    }
    setLoading(false)
  }

  const calculateMonthlyStats = (salesData: any[]) => {
    const months: Record<string, { count: number, revenue: number, commission: number }> = {}
    
    salesData.forEach(sale => {
      const date = new Date(sale.sale_date)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      
      if (!months[monthKey]) {
        months[monthKey] = { count: 0, revenue: 0, commission: 0 }
      }
      
      months[monthKey].count += 1
      months[monthKey].revenue += sale.amount
      months[monthKey].commission += sale.amount * 0.30
    })
    
    const stats = Object.entries(months)
     .map(([month, data]) => ({ month,...data }))
     .sort((a, b) => b.month.localeCompare(a.month))
    
    setMonthlyStats(stats)
  }

  const handleLogin = () => {
    if (password === 'Zapsauce2026' && affiliateName.trim()) {
      localStorage.setItem('zap_affiliate_auth', 'Zapsauce2026')
      localStorage.setItem('zap_affiliate_name', affiliateName.trim())
      setIsAuthenticated(true)
      setError('')
      fetchAffiliateSales(affiliateName.trim())
    } else if (!affiliateName.trim()) {
      setError('Please enter your name')
    } else {
      setError('Wrong password. Contact WhatsApp to become affiliate. ⚡')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zap_affiliate_auth')
    localStorage.removeItem('zap_affiliate_name')
    setIsAuthenticated(false)
    setPassword('')
    setAffiliateName('')
    setSales([])
  }

  const copyReferralLink = () => {
    const link = `${window.location.origin}?ref=${encodeURIComponent(affiliateName)}`
    navigator.clipboard.writeText(link)
    alert('Referral link copied! Share this link. You earn M75 for every M250 PDF sale.')
  }

  const totalReferrals = sales.length
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0)
  const totalCommission = totalRevenue * 0.30
  const thisMonth = new Date().toISOString().slice(0, 7)
  const thisMonthStats = monthlyStats.find(m => m.month === thisMonth) || { count: 0, revenue: 0, commission: 0 }

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 8px 0' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#888', margin: '0 0 32px 0' }}>Track Your Zap Sauce ORIGIN Earnings</p>
          
          <input
            type="text"
            placeholder="Your Name"
            value={affiliateName}
            onChange={(e) => setAffiliateName(e.target.value)}
            style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', color: '#fff', padding: '14px', borderRadius: '8px', width: '100%', marginBottom: '12px', fontSize: '1rem' }}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', color: '#fff', padding: '14px', borderRadius: '8px', width: '100%', marginBottom: '16px', fontSize: '1rem' }}
          />
          
          {error && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '0 0 16px 0' }}>{error}</p>}
          
          <button onClick={handleLogin} style={{ background: '#FFD700', color: '#000', padding: '14px 32px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
            View Earnings
          </button>
          
          <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '24px', lineHeight: '1.6' }}>
            Want to become an affiliate?<br/>
            Buy PDF for M250 or WhatsApp us:<br/>
            <a href="https://wa.me/26657031600" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: '700' }}>+266 57031600</a>
          </p>
        </div>
      </div>
    )
  }

  // AFFILIATE DASHBOARD
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: 0 }}>Welcome, {affiliateName} ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Zap Sauce ORIGIN Affiliate Dashboard</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/" style={{ background: '#00ff88', color: '#000', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
              Home
            </Link>
            <button onClick={handleLogout} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>

        {/* REFERRAL LINK */}
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', marginBottom: '30px', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', margin: '0 0 16px 0' }}>Your Referral Link</h2>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Share this link. Earn M75 for every M250 PDF sale (30%).</p>
          <div style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: '8px', padding: '12px', marginBottom: '16px', wordBreak: 'break-all' }}>
            <code style={{ color: '#00ff88', fontSize: '0.85rem' }}>
              {`${typeof window!== 'undefined'? window.location.origin : ''}?ref=${encodeURIComponent(affiliateName)}`}
            </code>
          </div>
          <button onClick={copyReferralLink} style={{ background: '#FFD700', color: '#000', padding: '12px 32px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' }}>
            Copy Referral Link
          </button>
        </div>

        {/* STATS CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Referrals</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{totalReferrals}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Commission Earned</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>M{totalCommission.toFixed(2)}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>This Month Referrals</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{thisMonthStats.count}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>This Month Commission</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>M{thisMonthStats.commission.toFixed(2)}</p>
          </div>
        </div>

        {/* MONTHLY BREAKDOWN */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0' }}>Monthly Breakdown</h2>
          {monthlyStats.length === 0? (
            <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>No referrals yet. Share your link to start earning.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Month</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Referrals</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Sales Revenue</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Your Commission (30%)</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyStats.map(stat => (
                    <tr key={stat.month} style={{ borderBottom: '1px solid #1f1f1f' }}>
                      <td style={{ padding: '12px', color: '#ccc' }}>{stat.month}</td>
                      <td style={{ padding: '12px', color: '#00ff88', fontWeight: '700' }}>{stat.count}</td>
                      <td style={{ padding: '12px', color: '#ccc' }}>M{stat.revenue}</td>
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{stat.commission.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* RECENT REFERRALS */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0' }}>Recent Referral Sales</h2>
          {loading? (
            <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>Loading your referrals...</p>
          ) : sales.length === 0? (
            <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>No referral sales yet. Share your link to start earning.</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Customer</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Product</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Sale Amount</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Your Commission</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map(sale => (
                    <tr key={sale.id} style={{ borderBottom: '1px solid #1f1f1f' }}>
                      <td style={{ padding: '12px', color: '#ccc' }}>{sale.customer_name}</td>
                      <td style={{ padding: '12px', color: '#00ff88' }}>Zap Sauce ORIGIN PDF</td>
                      <td style={{ padding: '12px', color: '#ccc' }}>M{sale.amount}</td>
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{(sale.amount * 0.30).toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#888' }}>{sale.sale_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* PAYOUT INFO */}
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
          <h3 style={{ color: '#FFD700', margin: '0 0 16px 0' }}>Payout Status</h3>
          <p style={{ color: '#ccc', margin: '0 0 8px 0' }}>Total Commission Earned: <span style={{ color: '#FFD700', fontWeight: '700' }}>M{totalCommission.toFixed(2)}</span></p>
          <p style={{ color: '#888', fontSize: '0.9rem', margin: '16px 0 0 0', lineHeight: '1.6' }}>
            Payouts processed weekly via MPESA.<br/>
            Minimum payout: M225. Contact WhatsApp to request payout:<br/>
            <a href="https://wa.me/26657031600" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700' }}>+266 57031600</a>
          </p>
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