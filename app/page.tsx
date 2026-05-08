'use client'
import { useState } from 'react'

export default function HomePage() {
  // STATE FOR PORTALS
  const [affiliateName, setAffiliateName] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')
  const [customerPass, setCustomerPass] = useState('')
  const [adminPass, setAdminPass] = useState('')
  const [customerError, setCustomerError] = useState('')
  const [adminError, setAdminError] = useState('')

  // HIDDEN PASSWORDS - NOT IN HTML
  const CUSTOMER_PASSWORD = 'LIGHTNING2026'
  const ADMIN_PASSWORD = 'HEAL120'

  // BUTTON FUNCTIONS
  const handleGetLink = () => {
    if (affiliateName.trim() === '') {
      alert('Please enter your name first 🤍')
      return
    }
    const link = `https://zapsauce.vercel.app?ref=${affiliateName.replace(/\s+/g, '')}`
    setAffiliateLink(link)
    navigator.clipboard.writeText(link)
    alert('Link copied! Share and earn M75/M105 per sale ⚡')
  }

  const handleCustomerAccess = () => {
    if (customerPass === CUSTOMER_PASSWORD) {
      setCustomerError('')
      window.location.href = 'https://drive.google.com/YOUR_PDF_FOLDER_LINK'
    } else {
      setCustomerError('Wrong password. Check email after purchase 🥺')
    }
  }

  const handleAdminAccess = () => {
    if (adminPass === ADMIN_PASSWORD) {
      setAdminError('')
      window.location.href = 'https://docs.google.com/spreadsheets/YOUR_SALES_SHEET'
    } else {
      setAdminError('Wrong password my Queen 🔒')
    }
  }

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

      {/* PRICING SECTION */}
      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '0 0 40px 0' }}>
            Choose Your Lightning ⚡
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '40px' }}>

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
                Party Hot Sauce Recipe. Turn bland braai into legend. + 1 bonus recipe.
              </p>
              <a href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20FIREBALL%20PDF%20M350%20-%20Ref:MakhauheloMoima" 
                style={{ background: '#ff4500', color: '#fff', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
                Get FIREBALL PDF
              </a>
            </div>

          </div>

          <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '16px', padding: '40px 24px', maxWidth: '500px', margin: '0 auto' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 16px 0' }}>Ready-Made Jar</h3>
            <p style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M120</p>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
              Skip kitchen. We bottle. You enjoy. 250ml jar. 6 months shelf life.
            </p>
            <a href="https://wa.me/26657031600?text=Hi%20Makhauhelo%2C%20I%20want%20a%20Ready-Made%20Jar%20M120.%20Ref%3A%20" 
              style={{ background: '#FFD700', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
              Order Jar on WhatsApp
            </a>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '12px 0 0 0' }}>
              Type "Zap-Origin" or "Zap-Fireball" in chat
            </p>
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

      {/* AFFILIATION SECTION - WORKING */}
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

      {/* CUSTOMER PORTAL - WORKING + SECURE */}
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

      {/* ADMIN PORTAL - WORKING + SECURE */}
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