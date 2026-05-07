'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminPage() {
  // PASSWORD PROTECTION
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Check if already logged in
  useEffect(() => {
    const auth = localStorage.getItem('zap_admin_auth')
    if (auth === 'HEAL120') setIsAuthenticated(true)
  }, [])

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

  // SALES DATA - YOU ADD THESE AFTER WHATSAPP MPESA CONFIRMATION
  const [sales, setSales] = useState([
    { id: 1, customer: 'Mpho D.', recipe: 'MYHEAL', amount: 120, date: '2026-05-07', affiliate: 'You', paid: true },
    { id: 2, customer: 'Lerato M.', recipe: 'HUSTLERS-VAULT', amount: 1200, date: '2026-05-06', affiliate: 'Thabo', paid: true },
    { id: 3, customer: 'Tsepo K.', recipe: 'ZAP SAUCE GLOBAL', amount: 2500, date: '2026-05-05', affiliate: 'You', paid: true },
  ])

  const [newSale, setNewSale] = useState({ customer: '', recipe: '', amount: 0, affiliate: 'You' })
  const [showAddSale, setShowAddSale] = useState(false)

  // ALL 42 RECIPES - YOUR EXACT WORDS
  const allRecipes = [
    // FREE - 2
    { name: 'MORNING SHOT', type: 'FREE', price: 0, ref: 'free-001', tier: 'FREE' },
    { name: 'IMMUNITY TEASER', type: 'FREE', price: 0, ref: 'free-002', tier: 'FREE' },
    
    // MYHEAL - 2 - M120 EACH - 30% AFFILIATION
    { name: 'ZAP SAUCE ORIGINAL ⚡', type: 'MYHEAL', price: 120, ref: 'zap-001', tier: 'MYHEAL' },
    { name: 'TANGY FUSION', type: 'MYHEAL', price: 120, ref: 'excl-001', tier: 'MYHEAL' },
    
    // HUSTLERS-VAULT - 19 - M1200 TOTAL
    { name: 'SAVORY HEAL', type: 'VAULT', price: 1200, ref: 'zap-002', tier: 'HUSTLERS-VAULT' },
    { name: 'FIRE CIDER', type: 'VAULT', price: 1200, ref: 'zap-003', tier: 'HUSTLERS-VAULT' },
    { name: 'LIVER FLUSH', type: 'VAULT', price: 1200, ref: 'zap-004', tier: 'HUSTLERS-VAULT' },
    { name: 'BRAIN TONIC', type: 'VAULT', price: 1200, ref: 'zap-005', tier: 'HUSTLERS-VAULT' },
    { name: 'SLEEP ELIXIR', type: 'VAULT', price: 1200, ref: 'zap-006', tier: 'HUSTLERS-VAULT' },
    { name: 'METABOLISM BOOST', type: 'VAULT', price: 1200, ref: 'zap-007', tier: 'HUSTLERS-VAULT' },
    { name: 'HEART GUARD', type: 'VAULT', price: 1200, ref: 'zap-008', tier: 'HUSTLERS-VAULT' },
    { name: 'SKIN GLOW', type: 'VAULT', price: 1200, ref: 'zap-009', tier: 'HUSTLERS-VAULT' },
    { name: 'LUNG CLEAR', type: 'VAULT', price: 1200, ref: 'zap-010', tier: 'HUSTLERS-VAULT' },
    { name: 'KIDNEY CLEANSE', type: 'VAULT', price: 1200, ref: 'zap-011', tier: 'HUSTLERS-VAULT' },
    { name: 'HORMONE HARMONY', type: 'VAULT', price: 1200, ref: 'zap-012', tier: 'HUSTLERS-VAULT' },
    { name: 'BLOOD SUGAR BALANCE', type: 'VAULT', price: 1200, ref: 'zap-013', tier: 'HUSTLERS-VAULT' },
    { name: 'JOINT EASE', type: 'VAULT', price: 1200, ref: 'zap-014', tier: 'HUSTLERS-VAULT' },
    { name: 'ENERGY SHOT', type: 'VAULT', price: 1200, ref: 'zap-015', tier: 'HUSTLERS-VAULT' },
    { name: 'LENGANA LIGHTNING', type: 'VAULT', price: 1200, ref: 'zap-016', tier: 'HUSTLERS-VAULT' },
    { name: 'PHATE-EA-NGAKA POWER', type: 'VAULT', price: 1200, ref: 'zap-017', tier: 'HUSTLERS-VAULT' },
    { name: 'MALUTI IMMUNITY FUSION', type: 'VAULT', price: 1200, ref: 'zap-018', tier: 'HUSTLERS-VAULT' },
    
    // ZAP SAUCE GLOBAL - 19 - M2500 TOTAL
    { name: 'MASTER BASE FORMULA', type: 'GLOBAL', price: 2500, ref: 'master-base', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ZAP SAUCE ORIGINAL - Turmeric Gold', type: 'GLOBAL', price: 2500, ref: 'turmeric-gold', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'COUGH & COLD RELIEF - Bronchial Lightning', type: 'GLOBAL', price: 2500, ref: 'bronchial-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'HYPERTENSION FORMULA - Heart Lightning', type: 'GLOBAL', price: 2500, ref: 'heart-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ARTHRITIS RELIEF - Joint Lightning', type: 'GLOBAL', price: 2500, ref: 'joint-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'DIABETES SUPPORT - Sugar Lightning', type: 'GLOBAL', price: 2500, ref: 'sugar-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'DIGESTIVE EASE - Gut Lightning', type: 'GLOBAL', price: 2500, ref: 'gut-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ENERGY BOOST - Vitality Lightning', type: 'GLOBAL', price: 2500, ref: 'vitality-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'SLEEP SUPPORT - Night Lightning', type: 'GLOBAL', price: 2500, ref: 'night-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'SKIN GLOW - Beauty Lightning', type: 'GLOBAL', price: 2500, ref: 'beauty-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'MENS VITALITY - King Lightning', type: 'GLOBAL', price: 2500, ref: 'king-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'WOMENS BALANCE - Queen Lightning', type: 'GLOBAL', price: 2500, ref: 'queen-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'KIDS IMMUNITY - Little Lightning', type: 'GLOBAL', price: 2500, ref: 'little-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ATHLETE RECOVERY - Champion Lightning', type: 'GLOBAL', price: 2500, ref: 'champion-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'DETOX CLEANSE - Pure Lightning', type: 'GLOBAL', price: 2500, ref: 'pure-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'BRAIN BOOST - Mind Lightning', type: 'GLOBAL', price: 2500, ref: 'mind-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ALLERGY SHIELD - Defense Lightning', type: 'GLOBAL', price: 2500, ref: 'defense-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'THYROID SUPPORT - Balance Lightning', type: 'GLOBAL', price: 2500, ref: 'balance-lightning', tier: 'ZAP SAUCE GLOBAL' },
    { name: 'ULTIMATE IMMUNITY - Supreme Lightning', type: 'GLOBAL', price: 2500, ref: 'supreme-lightning', tier: 'ZAP SAUCE GLOBAL' },
  ]

  // CALCULATIONS
  const totalRecipes = allRecipes.length
  const paidRecipes = allRecipes.filter(r => r.price > 0).length
  const freeSamples = allRecipes.filter(r => r.price === 0).length
  const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0)
  const potentialRevenue = (2 * 120) + 1200 + 2500

  // AFFILIATION CALCULATIONS - 30% FOR MYHEAL + VAULT
  const affiliationPayouts = sales
 .filter(sale => sale.affiliate!== 'You' && (sale.recipe === 'MYHEAL' || sale.recipe === 'HUSTLERS-VAULT'))
 .reduce((acc, sale) => {
      const commission = sale.amount * 0.30
      if (!acc[sale.affiliate]) acc[sale.affiliate] = 0
      acc[sale.affiliate] += commission
      return acc
    }, {} as Record<string, number>)

  const handleAddSale = () => {
    if (newSale.customer && newSale.recipe && newSale.amount > 0) {
      setSales([...sales, { 
        id: Date.now(), 
      ...newSale, 
        date: new Date().toISOString().split('T')[0],
        paid: true 
      }])
      setNewSale({ customer: '', recipe: '', amount: 0, affiliate: 'You' })
      setShowAddSale(false)
    }
  }

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'FREE': return '#00ff88'
      case 'MYHEAL': return '#00ff88'
      case 'VAULT': return '#00ff88'
      case 'GLOBAL': return '#FFD700'
      default: return '#888'
    }
  }

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 8px 0' }}>Zap Sauce Admin ⚡</h1>
          <p style={{ color: '#888', margin: '0 0 32px 0' }}>Enter password to access dashboard</p>
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{ 
              background: '#0a0a0a', 
              border: '1px solid #1f1f1f', 
              color: '#fff', 
              padding: '14px', 
              borderRadius: '8px', 
              width: '100%',
              marginBottom: '16px',
              fontSize: '1rem'
            }}
          />
          
          {error && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '0 0 16px 0' }}>{error}</p>}
          
          <button
            onClick={handleLogin}
            style={{
              background: '#FFD700',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '700',
              width: '100%',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Unlock Dashboard
          </button>
          
          <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '24px' }}>
            Password Protected 🔒 | By Makhauhelo Moma
          </p>
        </div>
      </div>
    )
  }

  // DASHBOARD - SHOWS ONLY IF PASSWORD CORRECT
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Admin Dashboard</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>Zap Sauce Management</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link 
              href="/"
              style={{
                background: '#00ff88',
                color: '#000',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '0.9rem'
              }}
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: '#ff4444',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        </div>

        {/* STATS CARDS */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Recipes</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{totalRecipes}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Paid Recipes</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{paidRecipes}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Revenue Collected</p>
            <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>M{totalRevenue}</p>
          </div>
          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Free Samples</p>
            <p style={{ color: '#00ff88', fontSize: '2.5rem', fontWeight: '700', margin: 0 }}>{freeSamples}</p>
          </div>
        </div>

        {/* SALES TABLE */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ color: '#00ff88', margin: 0 }}>Recent Sales</h2>
            <button
              onClick={() => setShowAddSale(!showAddSale)}
              style={{
                background: '#00ff88',
                color: '#000',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              + Add Sale
            </button>
          </div>

          {showAddSale && (
            <div style={{ background: '#0a0a0a', border: '1px solid #00ff88', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                <input
                  type="text"
                  placeholder="Customer Name"
                  value={newSale.customer}
                  onChange={(e) => setNewSale({...newSale, customer: e.target.value})}
                  style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }}
                />
                <select
                  value={newSale.recipe}
                  onChange={(e) => setNewSale({...newSale, recipe: e.target.value})}
                  style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }}
                >
                  <option value="">Select Tier</option>
                  <option value="MYHEAL">MYHEAL - M120</option>
                  <option value="HUSTLERS-VAULT">HUSTLERS-VAULT - M1200</option>
                  <option value="ZAP SAUCE GLOBAL">ZAP SAUCE GLOBAL - M2500</option>
                </select>
                <input
                  type="number"
                  placeholder="Amount (M)"
                  value={newSale.amount || ''}
                  onChange={(e) => setNewSale({...newSale, amount: Number(e.target.value)})}
                  style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }}
                />
                <input
                  type="text"
                  placeholder="Affiliate Name"
                  value={newSale.affiliate}
                  onChange={(e) => setNewSale({...newSale, affiliate: e.target.value})}
                  style={{ background: '#111', border: '1px solid #1f1f1f', color: '#fff', padding: '10px', borderRadius: '6px' }}
                />
              </div>
              <button
                onClick={handleAddSale}
                style={{
                  background: '#00ff88',
                  color: '#000',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Save Sale
              </button>
            </div>
          )}

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Customer</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Recipe</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Amount</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Affiliate</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {sales.map(sale => (
                  <tr key={sale.id} style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <td style={{ padding: '12px', color: '#ccc' }}>{sale.customer}</td>
                    <td style={{ padding: '12px', color: '#00ff88' }}>{sale.recipe}</td>
                    <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{sale.amount}</td>
                    <td style={{ padding: '12px', color: '#ccc' }}>{sale.affiliate}</td>
                    <td style={{ padding: '12px', color: '#888' }}>{sale.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AFFILIATION PAYOUTS TABLE */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
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
                      <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>M{amount.toFixed(2)}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          background: '#00ff88', 
                          color: '#000', 
                          padding: '4px 12px', 
                          borderRadius: '4px', 
                          fontSize: '0.85rem',
                          fontWeight: '700'
                        }}>
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

        {/* RECIPE INVENTORY */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0' }}>Recipe Inventory - {totalRecipes} Total</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #1f1f1f' }}>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Name</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Type</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Price</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Ref</th>
                  <th style={{ textAlign: 'left', padding: '12px', color: '#888' }}>Tier</th>
                </tr>
              </thead>
              <tbody>
                {allRecipes.map((recipe, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #1f1f1f' }}>
                    <td style={{ padding: '12px', color: '#ccc' }}>{recipe.name}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ 
                        background: getTypeColor(recipe.type), 
                        color: '#000', 
                        padding: '4px 10px', 
                        borderRadius: '4px', 
                        fontSize: '0.75rem',
                        fontWeight: '700'
                      }}>
                        {recipe.type}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#FFD700', fontWeight: '700' }}>
                      {recipe.price === 0? 'M0' : `M${recipe.price}`}
                    </td>
                    <td style={{ padding: '12px', color: '#888', fontSize: '0.85rem' }}>{recipe.ref}</td>
                    <td style={{ padding: '12px', color: '#ccc', fontSize: '0.85rem' }}>{recipe.tier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', marginTop: '40px' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            © 2026 Zap Sauce Admin | By Makhauhelo Moma | Password Protected 🔒
          </p>
        </div>

      </div>
    </div>
  )
}