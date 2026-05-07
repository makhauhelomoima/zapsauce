'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [affiliateName, setAffiliateName] = useState('')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const ref = urlParams.get('ref')
    if (ref) setAffiliateName(ref)
  }, [])

  const handleBuyPDF = () => {
    const ref = affiliateName? `?ref=${encodeURIComponent(affiliateName)}` : ''
    const msg = `Hi, I want the Zap Sauce ORIGIN PDF for M250. MPESA proof attached.${ref? ` Affiliate: ${affiliateName}` : ''}`
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleBuyJar = () => {
    const ref = affiliateName? `?ref=${encodeURIComponent(affiliateName)}` : ''
    const msg = `Hi, I want a ready-made Zap Sauce ORIGIN jar for M120+. MPESA proof attached.${ref? ` Affiliate: ${affiliateName}` : ''}`
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleAffiliate = () => {
    if (!affiliateName.trim()) {
      alert('Enter your name to create affiliate link')
      return
    }
    const link = `${window.location.origin}?ref=${encodeURIComponent(affiliateName)}`
    navigator.clipboard.writeText(link)
    alert(`Affiliate link copied! Share this link. You earn M75 for every M250 PDF sale. Link: ${link}`)
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40px' }}>
        
        {/* NAV - ADMIN + PORTAL LINKS */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '700' }}>Zap Sauce ⚡</div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/admin" style={{ background: '#1f1f1f', color: '#FFD700', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', border: '1px solid #FFD700' }}>
              Admin
            </Link>
            <Link href="/portal" style={{ background: '#1f1f1f', color: '#00ff88', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem', border: '1px solid #00ff88' }}>
              Customer Portal
            </Link>
          </div>
        </div>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#FFD700', fontSize: '3rem', margin: '0 0 8px 0' }}>Zap Sauce. ORIGIN</h1>
          <p style={{ color: '#00ff88', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0' }}>Lightning in a jar! ⚡</p>
          <p style={{ color: '#ccc', fontSize: '1.1rem', fontStyle: 'italic' }}>"Let food be thy medicine" - Hippocrates</p>
          <p style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '700', marginTop: '16px' }}>Original Recipe: 1 tsp daily keeps pharmacy away</p>
        </div>

        {/* WHAT IT ZAPS */}
        <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '12px', padding: '30px', marginBottom: '30px' }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0', textAlign: 'center' }}>WHAT ZAP SAUCE ORIGIN ZAPS:</h2>
          <div style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p>✓ Morning flu + sore throat + body aches</p>
            <p>✓ Coughs + chest congestion + winter chills</p>
            <p>✓ Low immunity + kids missing school</p>
            <p>✓ Inflammation + joint pain</p>
            <p>✓ M200+ weekly pharmacy runs for the family</p>
          </div>
        </div>

        {/* AFFILIATION BOX */}
        <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', marginBottom: '30px', textAlign: 'center' }}>
          <h3 style={{ color: '#FFD700', margin: '0 0 16px 0' }}>EARN 30% AFFILIATION</h3>
          <p style={{ color: '#ccc', margin: '0 0 16px 0' }}>Share your link. Earn M75 for every M250 PDF sale.</p>
          <div style={{ display: 'flex', gap: '12px', maxWidth: '400px', margin: '0 auto' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={affiliateName}
              onChange={(e) => setAffiliateName(e.target.value)}
              style={{ background: '#0a0a0a', border: '1px solid #FFD700', color: '#fff', padding: '12px', borderRadius: '8px', flex: 1 }}
            />
            <button onClick={handleAffiliate} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
              Get Link
            </button>
          </div>
        </div>

        {/* ONE RECIPE CARD - ONE ZAP SAUCE. */}
        <div style={{ background: '#111', border: '3px solid #FFD700', borderRadius: '16px', padding: '40px', marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 20px 0' }}>Zap Sauce. ORIGIN</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', margin: '0 0 30px 0', lineHeight: '1.6' }}>
            Lightning in a jar! ⚡<br/>
            Wisdom in a modern jar. For families with lightning immune systems. Lesotho Product 🇱🇸
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ color: '#00ff88', margin: '0 0 12px 0' }}>ORIGIN PDF</h3>
              <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px 0' }}>M250</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                Complete recipe + method + cost calculator + warnings. Make it yourself. Own forever.
              </p>
              <button onClick={handleBuyPDF} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
                Get PDF via WhatsApp
              </button>
              <p style={{ color: '#888', fontSize: '0.75rem', marginTop: '12px' }}>Instant delivery after MPESA</p>
            </div>

            <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ color: '#FFD700', margin: '0 0 12px 0' }}>Ready-Made Jar</h3>
              <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px 0' }}>M120+</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                250ml jar. Made fresh. Sterilized. Labelled. 6 months shelf life. 42% profit.
              </p>
              <button onClick={handleBuyJar} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
                Order Jar via WhatsApp
              </button>
              <p style={{ color: '#888', fontSize: '0.75rem', marginTop: '12px' }}>Lesotho delivery only</p>
            </div>
          </div>
        </div>

        {/* FULL RECIPE */}
        <details style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <summary style={{ color: '#00ff88', fontSize: '1.3rem', fontWeight: '700', cursor: 'pointer', marginBottom: '16px' }}>
            VIEW FULL RECIPE + INGREDIENTS + METHOD ▼
          </summary>
          
          <div style={{ color: '#ccc', lineHeight: '1.8' }}>
            <h4 style={{ color: '#FFD700', marginTop: '20px' }}>INGREDIENTS - LIGHTNING FORMULA:</h4>
            <p>1. Raw Honey - 250ml | M40 | The conductor + armor</p>
            <p>2. Turmeric Powder - 3 tbsp | M15 | The voltage + inflammation killer</p>
            <p>3. Fresh Ginger Grated - 2 tbsp | M8 | The spark + cough zapper</p>
            <p>4. Black Pepper Ground - 1/2 tsp | M3 | The switch + activates turmeric</p>
            <p>5. Ceylon Cinnamon - 1 tsp | M5 | The smooth current + blood sugar</p>
            <p>6. Apple cider vinegar - 1 tbsp | M5 | With 'Mother' + shelf life</p>
            <p>7. Lemon juice - 2ml | M5 | Freshly squeezed + Vitamin C + Preservative</p>
            <p>8. Cayenne Pepper - 8 g | M4 | 40,000 SHU, no paprika substitute</p>

            <h4 style={{ color: '#FFD700', marginTop: '20px' }}>EQUIPMENT:</h4>
            <p>Glass Jar 300ml Sterilized | Wooden Spoon Sterilized | Funnel sterilized</p>

            <h4 style={{ color: '#FFD700', marginTop: '20px' }}>PREPARATION - EXACT METHOD:</h4>
            <p>1. Sterilize jar + spoon: Boil 10 mins. The air is dry.</p>
            <p>2. Mix dry: Turmeric + Cayenne + Cinnamon + Black Pepper + Ginger in a jar.</p>
            <p>3. Add wet: Raw honey + Lemon juice + ACV.</p>
            <p>4. Stir 3 mins with a wooden spoon until no lumps. Metal kills enzymes.</p>
            <p>5. Seal. Label: "ZAP SAUCE. ORIGIN - Made [DATE]"</p>
            <p>6. Store: Cool dark place. Shake before every use.</p>
            <p>7. Shelf Life: 6 months unopened. 3 months after opening.</p>

            <h4 style={{ color: '#FFD700', marginTop: '20px' }}>COST CALCULATOR:</h4>
            <p>TOTAL COST TO MAKE: M85</p>
            <p>MAKES: 30 doses of 1 tsp each</p>
            <p>COST PER DOSE: M5.30</p>
            <p>PHARMACY COST PER DOSE: M25.00</p>
            <p style={{ color: '#00ff88', fontWeight: '700' }}>YOU SAVE: M750+ monthly for family of 4</p>

            <h4 style={{ color: '#ff4444', marginTop: '20px' }}>WARNING - NO SUBSTITUTIONS:</h4>
            <p>❌ No white sugar - feeds inflammation</p>
            <p>❌ No cassia cinnamon - liver toxic in daily doses</p>
            <p>❌ No paprika instead of cayenne - no capsaicin</p>
            <p>❌ No metal spoons - kills raw honey enzymes</p>
            <p>❌ No Rooibos - dilutes potency, not part of formula</p>
          </div>
        </details>

        {/* PAYMENT + WHATSAPP SUPPORT */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ color: '#00ff88', margin: '0 0 16px 0' }}>PAYMENT + SUPPORT</h3>
          <p style={{ color: '#ccc', margin: '0 0 8px 0' }}>MPESA: 57031600</p>
          <p style={{ color: '#ccc', margin: '0 0 8px 0' }}>Lesotho Post Bank: 1036202900018</p>
          <a href="https://wa.me/26657031600" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem', display: 'inline-block', marginTop: '12px' }}>
            WhatsApp Support: +266 57031600
          </a>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '16px' }}>Send proof of payment via WhatsApp for instant delivery</p>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: '0 0 8px 0' }}>
            © 2026 Zap Sauce. Lightning in a jar!⚡
          </p>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: '0 0 8px 0' }}>
            For Considered Families. Product of Lesotho 🇱🇸
          </p>
          <p style={{ color: '#666', fontSize: '0.75rem', margin: '16px 0 0', lineHeight: '1.6' }}>
            Zap Sauce recipe is a food and beverage idea for general wellness. Not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before use. Results may vary.
          </p>
          <p style={{ color: '#00ff88', fontSize: '0.9rem', marginTop: '16px', fontStyle: 'italic' }}>
            Wisdom in a modern jar. For families with lightning immune systems.
          </p>
        </div>

      </div>
    </div>
  )
}