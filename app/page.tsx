'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function HomePage() {
  const [affiliateName, setAffiliateName] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')
  const [customerPass, setCustomerPass] = useState('')
  const [adminPass, setAdminPass] = useState('')
  const [customerError, setCustomerError] = useState('')
  const [adminError, setAdminError] = useState('')

  const CUSTOMER_PASSWORD = 'LIGHTNING2026'
  const ADMIN_PASSWORD = 'HEAL120'

  const handleGetLink = () => {
    if (!affiliateName.trim()) return alert('Please enter your name first 🤍')
    const link = `https://zapsauce.vercel.app?ref=${affiliateName.replace(/\s+/g, '')}`
    setAffiliateLink(link)
    navigator.clipboard.writeText(link)
    alert('Affiliate link copied! M75 for ORIGIN. M105 for FIREBALL.')
  }

  const handleCustomerAccess = () => {
    if (customerPass === CUSTOMER_PASSWORD) {
      window.location.href = '/affiliate'
    } else {
      setCustomerError('Wrong password. Check email after purchase 🥺')
    }
  }

  const handleAdminAccess = () => {
    if (adminPass === ADMIN_PASSWORD) {
      window.location.href = '/admin'
    } else {
      setAdminError('Wrong password my Queen 🔒')
    }
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui' }}>
      <a href="https://wa.me/26657031600?text=Hi%20Makhauhelo%2C%20I%20need%20help%20with%20Zap%20Sauce" style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#25d366', color: '#fff', padding: '16px', borderRadius: '50%', fontSize: '24px', textDecoration: 'none', zIndex: 1000 }}>💬</a>

      <section style={{ background: 'linear-gradient(180deg, #111 0%, #000 100%)', padding: '80px 20px 40px 20px', textAlign: 'center', borderBottom: '4px solid #FFD700' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#FFD700', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>ZAP SAUCE ⚡</h1>
          <p style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 24px 0', fontWeight: 'bold' }}>Lightning in a jar!</p>
          <p style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 32px 0' }}>Immunity for daily. Fire for braai. You choose 🥄🍯🔥</p>
        </div>
      </section>

      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '0 0 40px 0' }}>Choose Your Lightning ⚡</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px 24px' }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.8rem', margin: '0 0 16px 0' }}>ORIGIN PDF</h3>
              <p style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M250</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>Daily Immunity Recipe. 1 tsp daily keeps pharmacy away.</p>
              <a href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20ORIGIN%20PDF%20M250%20-%20Ref:MakhauheloMoima" style={{ background: '#00ff88', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Get Origin PDF</a>
            </div>
            <div style={{ background: '#111', border: '2px solid #ff4500', borderRadius: '16px', padding: '40px 24px', position: 'relative' }}>
              <div style={{ background: '#ff4500', color: '#fff', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>🔥 BRAAI SEASON 🔥</div>
              <h3 style={{ color: '#ff4500', fontSize: '1.8rem', margin: '16px 0 16px 0' }}>FIREBALL™ PDF</h3>
              <p style={{ color: '#ff4500', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M350</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>Party Hot Sauce Recipe. Turn bland braai into legend.</p>
              <a href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20FIREBALL%20PDF%20M350%20-%20Ref:MakhauheloMoima" style={{ background: '#ff4500', color: '#fff', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Get FIREBALL PDF</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#000', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>EARN 30% AFFILIATION</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>Share your link. Earn M75 for ORIGIN M250. M105 for FIREBALL M350.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input type="text" placeholder="Your Name" value={affiliateName} onChange={(e) => setAffiliateName(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }} />
              <button onClick={handleGetLink} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Get Link</button>
            </div>
            {affiliateLink && (<p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '16px 0 0 0', wordBreak: 'break-all' }}>Copied: {affiliateLink}</p>)}
          </div>
        </div>
      </section>

      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>AFFILIATE PORTAL ⚡</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>Manage your links, stats, and payouts. No downloads - PDF sent via WhatsApp.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input type="password" placeholder="Enter Password" value={customerPass} onChange={(e) => setCustomerPass(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }} />
              <button onClick={handleCustomerAccess} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Access Portal</button>
            </div>
            {customerError && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>{customerError}</p>}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#000', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>ADMIN DASHBOARD 🔒</h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>Makhauhelo only. Live revenue from Supabase.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input type="password" placeholder="Admin Password" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }} />
              <button onClick={handleAdminAccess} style={{ background: '#ff4444', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Enter Dashboard</button>
            </div>
            {adminError && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>{adminError}</p>}
          </div>
        </div>
      </section>

      <footer style={{ background: '#0a0a0a', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #1f1f1f' }}>
        <p style={{ color: '#FFD700', fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>ZAP SAUCE ⚡</p>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Lightning in a jar! Made in Lesotho 🇱🇸</p>
        <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>WhatsApp: +266 57031600 | MPESA: 57031600<br/>© 2026 Gold Luxury Builders</p>
      </footer>
    </main>
  )
}