'use client'
import { useState } from 'react'

export default function HomePage() {
  // MAIN PAGE STATE
  const [affiliateName, setAffiliateName] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')
  const [customerPass, setCustomerPass] = useState('')
  const [adminPass, setAdminPass] = useState('')
  const [customerError, setCustomerError] = useState('')
  const [adminError, setAdminError] = useState('')

  // DASHBOARD STATE
  const [showCustomerDashboard, setShowCustomerDashboard] = useState(false)
  const [showAdminDashboard, setShowAdminDashboard] = useState(false)

  // HIDDEN PASSWORDS
  const CUSTOMER_PASSWORD = 'LIGHTNING2026'
  const ADMIN_PASSWORD = 'HEAL120'

  // FAKE DATA - REPLACE WITH REAL DATABASE LATER
  const [salesData] = useState([
    { customer: 'Thabo M.', product: 'ORIGIN PDF', amount: 'M250', affiliate: 'Duduca', mpesa: '85xxx123', date: '08 May' },
    { customer: 'Lineo K.', product: 'FIREBALL PDF', amount: 'M350', affiliate: 'You', mpesa: '86xxx456', date: '08 May' },
  ])

  const [affiliateData] = useState([
    { name: 'Duduca Moima', earned: 'M75', status: 'Paid' },
    { name: 'You', earned: 'M105', status: 'Pending' },
  ])

  // BUTTON FUNCTIONS
  const handleGetLink = () => {
    if (affiliateName.trim() === '') {
      alert('Please enter your name first 🤍')
      return
    }
    const link = `https://zapsauce.vercel.app?ref=${affiliateName.replace(/\s+/g, '')}`
    setAffiliateLink(link)
    navigator.clipboard.writeText(link)
    alert('Affiliate link copied! Share this link. You earn M75 for ORIGIN M250. M105 for FIREBALL M350. Link: ' + link)
  }

  const handleCustomerAccess = () => {
    if (customerPass === CUSTOMER_PASSWORD) {
      setCustomerError('')
      setShowCustomerDashboard(true)
      setShowAdminDashboard(false)
    } else {
      setCustomerError('Wrong password. Check email after purchase 🥺')
    }
  }

  const handleAdminAccess = () => {
    if (adminPass === ADMIN_PASSWORD) {
      setAdminError('')
      setShowAdminDashboard(true)
      setShowCustomerDashboard(false)
    } else {
      setAdminError('Wrong password my Queen 🔒')
    }
  }

  const handleLogout = () => {
    setShowCustomerDashboard(false)
    setShowAdminDashboard(false)
    setCustomerPass('')
    setAdminPass('')
  }

  // CUSTOMER DASHBOARD VIEW
  if (showCustomerDashboard) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Customer Portal ⚡</h1>
            <button onClick={handleLogout} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Logout
            </button>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 0 16px 0' }}>Your Zap Sauce ORIGIN PDF</h3>
            <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>Complete recipe + exact measurements + 7-step method + cost calculator + warnings. Make unlimited batches. Own forever.</p>
            <a href="/Zap-Sauce-Origin-Recipe.pdf" download
              style={{ background: '#00ff88', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
              📥 Download ORIGIN PDF
            </a>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ color: '#ff4500', fontSize: '1.5rem', margin: '0 0 16px 0' }}>Your Zap Sauce FIREBALL™ PDF</h3>
            <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>Party hot sauce recipe. Turn bland braai into legend. + 5 bonus recipes.</p>
            <a href="/Zap-Sauce-Fireball-Recipe.pdf" download
              style={{ background: '#ff4500', color: '#fff', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
              📥 Download FIREBALL PDF
            </a>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0' }}>Bonus Vault</h3>
            <p style={{ color: '#ccc', margin: '0 0 16px 0' }}>Mohoete Fire, Morning Spread, Throat Fire, Lightning Tonic, Braai Boss Guide</p>
            <a href="/Bonus-Recipes.pdf" download
              style={{ background: '#FFD700', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
              📥 Download All Bonuses
            </a>
          </div>
        </div>
      </main>
    )
  }

  // ADMIN DASHBOARD VIEW
  if (showAdminDashboard) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <h1 style={{ color: '#ff4444', fontSize: '2rem', margin: 0 }}>Admin Dashboard 🔒</h1>
            <button onClick={handleLogout} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              Logout
            </button>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: 0 }}>Recent Sales</h3>
              <button style={{ background: '#00ff88', color: '#000', padding: '8px 16px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                + Add Sale
              </button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Customer</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Product</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Amount</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Affiliate</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>MPESA</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #1a1a1a' }}>
                      <td style={{ color: '#fff', padding: '12px' }}>{sale.customer}</td>
                      <td style={{ color: '#ccc', padding: '12px' }}>{sale.product}</td>
                      <td style={{ color: '#FFD700', padding: '12px', fontWeight: 'bold' }}>{sale.amount}</td>
                      <td style={{ color: '#00ff88', padding: '12px' }}>{sale.affiliate}</td>
                      <td style={{ color: '#888', padding: '12px' }}>{sale.mpesa}</td>
                      <td style={{ color: '#888', padding: '12px' }}>{sale.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Affiliation Payouts - 30%</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Affiliate</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Total Earned</th>
                    <th style={{ color: '#888', padding: '12px', textAlign: 'left' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {affiliateData.map((aff, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #1a1a1a' }}>
                      <td style={{ color: '#fff', padding: '12px' }}>{aff.name}</td>
                      <td style={{ color: '#FFD700', padding: '12px', fontWeight: 'bold' }}>{aff.earned}</td>
                      <td style={{ color: aff.status === 'Paid'? '#00ff88' : '#ff4444', padding: '12px' }}>{aff.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {affiliateData.length === 0 && (
              <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
                No affiliate sales yet. Share your link to start earning.
              </p>
            )}
          </div>

          <p style={{ color: '#666', textAlign: 'center', fontSize: '0.8rem', margin: '32px 0 0 0' }}>
            © 2026 Zap Sauce ORIGIN Admin | Lightning in a jar ⚡
          </p>
        </div>
      </main>
    )
  }

  // MAIN HOMEPAGE VIEW - 2 PRODUCTS ONLY
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* WHATSAPP SUPPORT FLOATING BUTTON */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Makhauhelo%2C%20I%20need%20help%20with%20Zap%20Sauce"
        style={{
          position: 'fixed', bottom: '20px', right: '20px', background: '#25d366',
          color: '#fff', padding: '16px', borderRadius: '50%', fontSize: '24px',
          textDecoration: 'none', boxShadow: '0 4px 12px rgba(37,211,102,0.4)', zIndex: 1000
        }}
      >💬</a>

      {/* HERO SECTION */}
      <section style={{ background: 'linear-gradient(180deg, #111 0%, #000 100%)', padding: '80px 20px 40px 20px', textAlign: 'center', borderBottom: '4px solid #FFD700' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#FFD700', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold', lineHeight: '1.1' }}>
            ZAP SAUCE ⚡
          </h1>
          <p style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 24px 0', fontWeight: 'bold' }}>
            Lightning in a jar!
          </p>
          <p style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 32px 0', lineHeight: '1.6' }}>
            Immunity for daily. Fire for braai. You choose 🥄🍯🔥
          </p>
        </div>
      </section>

      {/* PRICING SECTION - 2 PRODUCTS ONLY */}
      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '0 0 40px 0' }}>
            Choose Your Lightning ⚡
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

            <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px 24px' }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.8rem', margin: '0 0 16px 0' }}>ORIGIN PDF</h3>
              <p style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M250</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                Daily Immunity Recipe. 1 tsp daily keeps pharmacy away. + 5 bonus recipes.
              </p>
              <a href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20ORIGIN%20PDF%20M250%20-%20Ref:MakhauheloMoima"
                style={{ background: '#00ff88', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
                Get Origin PDF
              </a>
            </div>

            <div style={{ background: '#111', border: '2px solid #ff4500', borderRadius: '16px', padding: '40px 24px', position: 'relative' }}>
              <div style={{ background: '#ff4500', color: '#fff', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                🔥 BRAAI SEASON 🔥
              </div>
              <h3 style={{ color: '#ff4500', fontSize: '1.8rem', margin: '16px 0 16px 0' }}>FIREBALL™ PDF</h3>
              <p style={{ color: '#ff4500', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M350</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                Party Hot Sauce Recipe. Turn bland braai into legend. + 5 bonus recipes.
              </p>
              <a href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20FIREBALL%20PDF%20M350%20-%20Ref:MakhauheloMoima"
                style={{ background: '#ff4500', color: '#fff', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
                Get FIREBALL PDF
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS SECTION - 3 ORIGIN + 3 FIREBALL */}
      <section style={{ background: '#000', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 24px 0', textAlign: 'center', fontWeight: 'bold' }}>
              ORIGIN: LIGHTNING FOR LIFE ⚡
            </h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😷 FLU SEASON FAMILIES</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>M200+ weekly bills. 1 tsp daily = M750+/month saved. Clear chest overnight.</p>
              </div>
              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😫 BODY ACHES & PERIOD</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Joint pain. Cramps. Fever. 1 tsp every 4hrs = Move freely again.</p>
              </div>
              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😴 ALWAYS TIRED</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>3pm crash. No energy. 1 tsp morning = Liquid motivation all day.</p>
              </div>
            </div>
          </div>

          <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#ff4500', fontSize: '1.5rem', margin: '0 0 24px 0', textAlign: 'center', fontWeight: 'bold' }}>
              FIREBALL™: PARTY WITH POWER 🔥
            </h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ borderLeft: '3px solid #ff4500', paddingLeft: '12px' }}>
                <p style={{ color: '#ff4500', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>🍖 BRAAI BOSS STATUS</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Bland meat illegal. Baste last 5min = Glazed crust. Guests beg recipe.</p>
              </div>
              <div style={{ borderLeft: '3px solid #ff4500', paddingLeft: '12px' }}>
                <p style={{ color: '#ff4500', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>💥 DIGESTION CHIEF</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Capsaicin + ginger = No bloating after big plate. Dance all night.</p>
              </div>
              <div style={{ borderLeft: '3px solid #ff4500', paddingLeft: '12px' }}>
                <p style={{ color: '#ff4500', fontSize: '1rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>💰 SELL & PROFIT</p>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>Make M70. Bottle M120. Profit M50. December weddings = M500/week.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AFFILIATION SECTION */}
      <section style={{ background: '#111', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#000', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>
              EARN 30% AFFILIATION
            </h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>
              Share your link. Earn M75 for ORIGIN M250. M105 for FIREBALL M350.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={affiliateName}
                onChange={(e) => setAffiliateName(e.target.value)}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }}
              />
              <button
                onClick={handleGetLink}
                style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Get Link
              </button>
            </div>
            {affiliateLink && (
              <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '16px 0 0 0', wordBreak: 'break-all' }}>
                Copied: {affiliateLink}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CUSTOMER PORTAL */}
      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>
              CUSTOMER PORTAL ⚡
            </h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>
              Paid customers: Access your PDFs, bonuses, and updates here.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="password"
                placeholder="Enter Password"
                value={customerPass}
                onChange={(e) => setCustomerPass(e.target.value)}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }}
              />
              <button
                onClick={handleCustomerAccess}
                style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Access Portal
              </button>
            </div>
            {customerError && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>{customerError}</p>}
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '16px 0 0 0' }}>
              Check email after purchase for password
            </p>
          </div>
        </div>
      </section>

      {/* ADMIN PORTAL */}
      <section style={{ background: '#111', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#000', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>
              ADMIN DASHBOARD 🔒
            </h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>
              Makhauhelo only. Track sales, affiliates, downloads.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="password"
                placeholder="Admin Password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }}
              />
              <button
                onClick={handleAdminAccess}
                style={{ background: '#ff4444', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Enter Dashboard
              </button>
            </div>
            {adminError && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>{adminError}</p>}
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#111', padding: '40px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#0a0a0a', border: '1px solid #ff4444', borderRadius: '8px', padding: '24px' }}>
            <h4 style={{ color: '#ff4444', margin: '0 0 16px 0', fontSize: '1.1rem' }}>⚠️ IMPORTANT DISCLAIMER</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: '0 0 12px 0' }}>
              <strong>Zap Sauce products are food/beverages for general wellness and nutritional support.</strong> They are NOT medicines, drugs, or cures for any disease. NOT evaluated by FDA or Ministry of Health. NOT intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: '0 0 12px 0' }}>
              <strong>Do NOT use if:</strong> Pregnant, breastfeeding, on blood thinners, stomach ulcers, under 2 years old, high blood pressure meds, heart conditions, or allergic to garlic/ginger/honey/chili.
            </p>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              <strong>Always consult your doctor</strong> before use if you have medical conditions or take prescription medication. Results vary. Your body, your responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* VISITOR COUNTER */}
      <section style={{ background: '#0a0a0a', padding: '20px', textAlign: 'center', borderTop: '1px solid #1f1f1f' }}>
        <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>
          ⚡ Lightning viewed by <span id="visits" style={{ color: '#FFD700', fontWeight: 'bold' }}>...</span> considered souls
        </p>
        <script dangerouslySetInnerHTML={{__html: `
          fetch('https://api.countapi.xyz/hit/zapsauce-lesotho/visits')
       .then(r => r.json())
       .then(r => {document.getElementById('visits').innerText = r.value})
        `}} />
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a0a0a', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #1f1f1f' }}>
        <p style={{ color: '#FFD700', fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
          ZAP SAUCE ⚡
        </p>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 16px 0' }}>
          Lightning in a jar! Made in Lesotho 🇱🇸
        </p>
        <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>
          WhatsApp: +266 57031600 | MPESA: 57031600<br/>
          © 2026 Gold Luxury Builders | For considered families
        </p>
      </footer>

    </main>
  )
}