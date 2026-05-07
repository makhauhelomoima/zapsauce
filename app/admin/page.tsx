'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [sales, setSales] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [newSale, setNewSale] = useState({ customer_name: '', product_type: 'PDF', amount: 250, affiliate_name: 'You', mpesa_code: '' })
  const [showAddSale, setShowAddSale] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('zap_admin_auth')
    if (auth === 'HEAL120') setIsAuthenticated(true)
  }, [])

  useEffect(() => {
    if (isAuthenticated) fetchSales()
  }, [isAuthenticated])

  const fetchSales = async () => {
    setLoading(true)
    const { data, error } = await supabase
.from('sales')
.select('*')
.order('sale_date', { ascending: false })
    
    if (error) console.error('Error:', error)
    else setSales(data || [])
    setLoading(false)
  }

  const handleLogin = () => {
    if (password === 'HEAL120') {
      localStorage.setItem('zap_admin_auth', 'HEAL120')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Wrong password. Lightning denied. ⚡')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zap_admin_auth')
    setIsAuthenticated(false)
    setPassword('')
  }

  const handleAddSale = async () => {
    if (newSale.customer_name && newSale.amount > 0) {
      const saleData = {
        customer_name: newSale.customer_name,
        tier: 'ZAP SAUCE ORIGIN',
        amount: newSale.amount,
        affiliate_name: newSale.affiliate_name,
        mpesa_code: newSale.mpesa_code
      }
      const { error } = await supabase.from('sales').insert([saleData])
      
      if (error) {
        alert('Error: ' + error.message)
      } else {
        setNewSale({ customer_name: '', product_type: 'PDF', amount: 250, affiliate_name: 'You', mpesa_code: '' })
        setShowAddSale(false)
        fetchSales()
      }
    }
  }

  const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.amount), 0)
  const pdfSales = sales.filter(s => Number(sale.amount) === 250).length
  const jarSales = sales.filter(s => Number(sale.amount) >= 120 && Number(sale.amount) < 250).length

  const affiliationPayouts = sales
.filter(sale => sale.affiliate_name!== 'You')
.reduce((acc, sale) => {
      const commission = Number(sale.amount) * 0.30
      if (!acc[sale.affiliate_name]) acc[sale.affiliate_name] = 0
      acc[sale.affiliate_name] += commission
      return acc
    }, {} as Record<string, number>)

  const totalCommission = Object.values(affiliationPayouts).reduce((sum: number, amount: number) => sum + amount, 0)

  if (!isAuthenticated) {
    return (
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 8px 0' }}>Admin Dashboard ⚡</h1>
          <p style={{ color: '#888', margin: '0 0 32px 0' }}>Zap Sauce ORIGIN</p>
          
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
            Unlock Dashboard
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: 0 }}>Zap Sauce ORIGIN Admin</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>One Product. Lightning Sales.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/" style={{ background: '#00ff88', color: '#000', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
              View Site
            </Link>
            <button onClick={handleLogout} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Revenue</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>M{Number(totalRevenue).toFixed(2)}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>PDF Sales (M250)</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{pdfSales}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Jar Sales (M120+)</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{jarSales}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Orders</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{sales.length}</p>
          </div>
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ color: '#00ff88', margin: 0 }}>Recent Sales</h2>
            <button onClick={() => setShowAddSale(!showAddSale)} style={{ background: '#00ff88', color: '#000', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
              + Add Sale
            </button>
          </div>

          {showAddSale && (
            <div style={{ background: '#0a0a0a', border: '1px solid #00ff88', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <input type="text" placeholder="Customer Name" value={newSale.customer_name} onChange={(e) => setNewSale({...newSale, customer_name: e.target.value})} style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                <select value={newSale.product_type} onChange={(e) => {
                  const type = e.target.value
                  setNewSale({...newSale, product_type: type, amount: type === 'PDF'? 250 : 120})
                }} style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }}>
                  <option value="PDF">PDF - M250</option>
                  <option value="JAR">Ready-Made Jar - M120+</option>
                </select>
                <input type="number" placeholder="Amount (M)" value={newSale.amount || ''} onChange={(e) => setNewSale({...newSale, amount: Number(e.target.value)})} style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                <input type="text" placeholder="Affiliate Name" value={newSale.affiliate_name} onChange={(e) => setNewSale({...newSale, affiliate_name: e.target.value})} style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }} />
                <input type="text" placeholder="MPESA Code" value={newSale.mpesa_code} onChange={(e) => setNewSale({...newSale, mpesa_code: e.target.value})} style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }} />
              </div>
              <button onClick={handleAddSale} style={{ background: '#00ff88', color: '#000', padding: '10px 24px', borderRadius: '6px', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
                Save Sale
              </button>
            </div>
          )}

          {loading? (
            <p style={{ color: '#888', textAlign: 'center', padding: '40px' }}>Loading sales...</p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Customer</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Product</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Amount</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Affiliate</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>MPESA</th>
                    <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map(sale => (
                    <tr key={sale.id} style={{ borderBottom: '1px solid #1f1f1f' }}>
                      <td style={{ padding: '12px', color: '#ccc' }}>{sale.customer_name}</td>
                      <td style={{ padding: '12px', color: '#00ff88' }}>Zap Sauce ORIGIN</td>
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{Number(sale.amount).toFixed(2)}</td>
                      <td style={{ padding: '12px', color: '#ccc' }}>{sale.affiliate_name}</td>
                      <td style={{ padding: '12px', color: '#888', fontSize: '0.85rem' }}>{sale.mpesa_code || '-'}</td>
                      <td style={{ padding: '12px', color: '#888' }}>{sale.sale_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ color: '#FFD700', margin: '0 0 20px 0' }}>Affiliation Payouts - 30%</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Affiliate</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Total Earned</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(affiliationPayouts).length === 0? (
                  <tr>
                    <td colSpan={3} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                      No affiliate sales yet. Share your link to start earning.
                    </td>
                  </tr>
                ) : (
                  Object.entries(affiliationPayouts).map(([name, amount]) => (
                    <tr key={name} style={{ borderBottom: '1px solid #1f1f1f' }}>
                      <td style={{ padding: '12px', color: '#ccc' }}>{name}</td>
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{Number(amount).toFixed(2)}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ background: '#00ff88', color: '#000', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '700' }}>
                          Ready to Pay
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0', marginTop: '40px' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            © 2026 Zap Sauce ORIGIN Admin | Lightning in a jar! ⚡
          </p>
        </div>

      </div>
    </div>
  )
}