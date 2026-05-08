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
              Affiliate Portal
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
          <h2 style={{ color: '#00ff88', margin: '0 0 20px 0', textAlign: 'center' }}>WHAT ZAP SAUCE. ORIGIN DOES: {/* PAIN PICKER SECTION - START */}
<section style={{ background: '#000', padding: '60px 20px', borderTop: '4px solid #FFD700' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    
    {/* HEADLINE */}
    <div style={{ textAlign: 'center', marginBottom: '16px' }}>
      <h2 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>
        PICK YOUR PAIN POINT
      </h2>
      <p style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 8px 0' }}>
        WHAT'S STEALING YOUR LIFE?
      </p>
      <p style={{ color: '#00ff88', fontSize: '1.1rem', margin: '0 0 32px 0', fontWeight: 'bold' }}>
        Zap Sauce ORIGIN is not "just for flu". It's Lightning for Life! ⚡
      </p>
      <p style={{ color: '#888', fontSize: '1rem', margin: '0 0 40px 0' }}>
        Find your pain below. 1 tsp daily zaps it:
      </p>
    </div>

    {/* PAIN GRID */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '40px' }}>
      
      {/* FLU FAMILIES */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>😷 FOR FLU SEASON FAMILIES</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> M200+ weekly clinic bills. Kids always coughing. Missed work days.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Builds "lightning immune system". Zaps flu/colds before they start.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp daily = M750+/month saved. 3am coughing stops.
        </p>
      </div>

      {/* CHEST PROBLEMS */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>🤧 FOR CHEST & BREATHING PROBLEMS</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Stubborn mucus. Can't breathe at night. Wheezing. Post-COVID lungs.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Clears chest congestion overnight. Soothes airways. Rebuilds lung strength.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp morning + night = Breathe deep again.
        </p>
      </div>

      {/* BODY ACHES */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>😫 FOR BODY ACHES & INFLAMMATION</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Joint pain in cold. Back ache. Headaches. Period cramps. Fever.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Calms inflammation naturally. Eases pain without pills.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp every 4 hours = Move freely. Periods manageable.
        </p>
      </div>

      {/* TIRED PEOPLE */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>😴 FOR ALWAYS TIRED PEOPLE</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Wake up exhausted. 3pm crash. No motivation. Coffee doesn't work.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Boosts natural energy without jitters. Fights fatigue at root.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp morning = Liquid motivation. Energy lasts all day.
        </p>
      </div>

      {/* WEEKEND WARRIORS */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>🍺 FOR WEEKEND WARRIORS & PARTY PEOPLE</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Hangovers killing Monday. Body shakes. Nausea. Wasted weekends.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Zaps hangover fast. Rehydrates. Settles stomach. Detox support.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp morning after = Back to work fresh.
        </p>
      </div>

      {/* STRESSED MOTHERS */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>💃 FOR STRESSED MOTHERS</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Kids always sick. No sleep. Anxiety about bills. Burnout.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Stops "always sick" cycle. You sleep when kids sleep. M750 saved = Less stress.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp daily for whole family = Peace of mind.
        </p>
      </div>

      {/* MEN'S VITALITY */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>👨 FOR MEN'S VITALITY & CIRCULATION</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Low energy. Poor stamina. Stress affecting confidence. Circulation worries.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Traditional ingredients support healthy blood flow, energy, vitality.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp daily = Natural confidence support. NOT medicine. Ask doctor if on BP meds.
        </p>
      </div>

      {/* GRANDPARENTS */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>👴 FOR GRANDPARENTS</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Arthritis in cold. Slow recovery. Weak immunity. Chronic cough.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Reduces morning stiffness. Speeds healing 2x. Boosts immunity. Eases cough.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp daily = More independent days. More time with grandkids.
        </p>
      </div>

      {/* DIGESTION */}
      <div style={{ background: '#111', border: '2px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
        <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 12px 0' }}>🤢 FOR DIGESTION & BLOATING</h3>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong style={{ color: '#ccc' }}>Pain:</strong> Gas after meals. Bloated stomach. Heartburn. Slow digestion.
        </p>
        <p style={{ color: '#00ff88', fontSize: '0.9rem', margin: '0 0 12px 0', lineHeight: '1.5' }}>
          <strong>✓ Zap Sauce:</strong> Settles stomach. Kills bloat. Improves nutrient absorption. Gentle detox.
        </p>
        <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: 0, fontWeight: 'bold' }}>
          1 tsp after heavy meals = Comfort. Eat without fear.
        </p>
      </div>

    </div>

    {/* CLOSING CTA */}
    <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
      <p style={{ color: '#ccc', fontSize: '1.2rem', margin: '0 0 16px 0', lineHeight: '1.6' }}>
        <strong style={{ color: '#FFD700' }}>REAL TALK:</strong> You don't need 12 different products.
      </p>
      <p style={{ color: '#ccc', fontSize: '1.2rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
        You need <strong style={{ color: '#00ff88' }}>1 Lightning formula</strong> that zaps 12 pains.
      </p>
      <p style={{ color: '#FFD700', fontSize: '1.4rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
        One jar = M60 ingredients = 30 days = M2 per day
      </p>
      <p style={{ color: '#888', fontSize: '1rem', margin: '0 0 24px 0' }}>
        Pharmacy for 12 problems = M2,000+/month
      </p>
      <p style={{ color: '#00ff88', fontSize: '1.5rem', margin: 0, fontWeight: 'bold' }}>
        Math is math. 1 tsp daily keeps pharmacy away. ⚡
      </p>
    </div>

  </div>
</section>
{/* PAIN PICKER SECTION - END */}

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

        {/* ONE RECIPE CARD - THE ONLY ONE */}
        <div style={{ background: '#111', border: '3px solid #FFD700', borderRadius: '16px', padding: '40px', marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 20px 0' }}>Zap Sauce. ORIGIN</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem', margin: '0 0 30px 0', lineHeight: '1.6' }}>
            Lightning in a jar! ⚡<br/>
            Wisdom in a modern jar. For families with lightning immune systems.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ color: '#00ff88', margin: '0 0 12px 0' }}>ORIGIN PDF</h3>
              <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px 0' }}>M250</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                <span style={{ color: '#00ff88', fontWeight: '700' }}>LOCKED:</span> Complete recipe + exact measurements + 7-step method + cost calculator + warnings. Make it yourself. Own forever.
              </p>
              <button onClick={handleBuyPDF} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
                Unlock Recipe via WhatsApp
              </button>
              <p style={{ color: '#888', fontSize: '0.75rem', marginTop: '12px' }}>Instant PDF delivery after MPESA</p>
            </div>

            <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
              <h3 style={{ color: '#FFD700', margin: '0 0 12px 0' }}>Ready-Made Jar</h3>
              <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px 0' }}>M120+</p>
              <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                250ml jar. Made fresh with secret formula. Sterilized. Labelled. 6 months shelf life. 42% profit.
              </p>
              <button onClick={handleBuyJar} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: '700', width: '100%', cursor: 'pointer', fontSize: '1rem' }}>
                Order Jar via WhatsApp
              </button>
              <p style={{ color: '#888', fontSize: '0.75rem', marginTop: '12px' }}>Lesotho delivery only</p>
            </div>
          </div>
        </div>

        {/* LOCKED RECIPE TEASER - NO FULL RECIPE HERE */}
        <div style={{ background: '#111', border: '2px solid #ff4444', borderRadius: '12px', padding: '30px', marginBottom: '30px', textAlign: 'center' }}>
          <h3 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0' }}>🔒 SECRET FORMULA LOCKED</h3>
          <p style={{ color: '#ccc', fontSize: '1.1rem', margin: '0 0 20px 0', lineHeight: '1.6' }}>
            The 8 exact ingredients + measurements + 7-step method<br/>
            that zaps flu, coughs, and M200 pharmacy bills?<br/>
            <span style={{ color: '#FFD700', fontWeight: '700' }}>That knowledge costs M250.</span>
          </p>
          <div style={{ background: '#0a0a0a', border: '1px solid #1f1f1f', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
            <p style={{ color: '#00ff88', fontSize: '0.95rem', margin: '0 0 8px 0', fontWeight: '700' }}>INSIDE THE PDF:</p>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '4px 0' }}>✓ 8 Ingredients with exact gram/ml measurements</p>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '4px 0' }}>✓ 7-Step method - no guesswork</p>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '4px 0' }}>✓ Cost calculator - save M750+/month</p>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '4px 0' }}>✓ Shelf life + storage + warnings</p>
            <p style={{ color: '#888', fontSize: '0.9rem', margin: '4px 0' }}>✓ No substitutions allowed - why each matters</p>
          </div>
          <button onClick={handleBuyPDF} style={{ background: '#00ff88', color: '#000', padding: '14px 32px', borderRadius: '8px', border: 'none', fontWeight: '700', cursor: 'pointer', fontSize: '1.1rem' }}>
            Unlock Full Recipe for M250
          </button>
          <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '16px' }}>
            Your M250 pays for itself in 1 week. Families save M750+ monthly.
          </p>
        </div>

        {/* PAYMENT + WHATSAPP SUPPORT */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px', textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ color: '#00ff88', margin: '0 0 16px 0' }}>PAYMENT + SUPPORT</h3>
          <p style={{ color: '#ccc', margin: '0 0 8px 0' }}>MPESA: 57031600</p>
          <p style={{ color: '#ccc', margin: '0 0 8px 0' }}>Lesotho Post Bank: 1036202900018</p>
          <a href="https://wa.me/26657031600" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem', display: 'inline-block', marginTop: '12px' }}>
            WhatsApp Support: +266 57031600
          </a>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '16px' }}>Send proof of payment via WhatsApp for instant PDF delivery</p>
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