import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zap Sauce ORIGIN ⚡ | Lightning in a jar! | Lesotho',
  description: '1 tsp daily keeps pharmacy away. Pick your pain point. Lightning-fast natural defense from Lesotho. M250 PDF or M120 Ready-Made Jar.',
}

export default function HomePage() {
  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{ background: 'linear-gradient(180deg, #111 0%, #000 100%)', padding: '80px 20px 40px 20px', textAlign: 'center', borderBottom: '4px solid #FFD700' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ color: '#FFD700', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold', lineHeight: '1.1' }}>
            ZAP SAUCE ORIGIN ⚡
          </h1>
          <p style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 24px 0', fontWeight: 'bold' }}>
            Lightning in a jar!
          </p>
          <p style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 32px 0', lineHeight: '1.6' }}>
            1 tsp daily keeps pharmacy away 🥄🍯
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20PDF%20M250%20-%20Ref:MakhauheloMoima" 
              style={{ background: '#FFD700', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}
            >
              Get PDF Recipe - M250
            </a>
            <a 
              href="https://wa.me/26657031600?text=I%20want%20Ready-Made%20Jar%20M120%20-%20Ref:MakhauheloMoima" 
              style={{ background: '#00ff88', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}
            >
              Buy Ready Jar - M120
            </a>
          </div>
        </div>
      </section>

      {/* PAIN PICKER GREEN BOX - START */}
      <section style={{ background: '#000', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
            <h3 style={{ color: '#00ff88', fontSize: '1.5rem', margin: '0 0 16px 0', textAlign: 'center', fontWeight: 'bold' }}>
              PICK YOUR PAIN POINT ⚡
            </h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 8px 0', textAlign: 'center' }}>
              WHAT'S STEALING YOUR LIFE?
            </p>
            <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 24px 0', textAlign: 'center', fontWeight: 'bold' }}>
              Zap Sauce ORIGIN is not "just for flu". It's Lightning for Life!
            </p>

            <div style={{ display: 'grid', gap: '12px' }}>
              
              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😷 FLU SEASON FAMILIES</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>M200+ weekly bills. Kids coughing. 1 tsp = M750+/month saved.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>🤧 CHEST & BREATHING</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Mucus. Can't breathe night. Post-COVID. 1 tsp = Clear overnight.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😫 BODY ACHES & PERIOD</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Joint pain. Cramps. Fever. 1 tsp every 4hrs = Move freely.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>😴 ALWAYS TIRED</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Exhausted. 3pm crash. 1 tsp morning = Liquid motivation.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>🍺 HANGOVER ZAPPER</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Monday dead. Nausea. 1 tsp morning after = Work fresh.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>💃 STRESSED MOTHERS</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Kids always sick. No sleep. 1 tsp daily = Peace of mind.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>👨 MEN'S VITALITY</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Low energy. Circulation. 1 tsp = Natural support. Ask doctor if on BP meds.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>👴 GRANDPARENTS</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Arthritis. Slow recovery. 1 tsp daily = More independent days.</p>
              </div>

              <div style={{ borderLeft: '3px solid #FFD700', paddingLeft: '12px' }}>
                <p style={{ color: '#FFD700', fontSize: '0.95rem', margin: '0 0 4px 0', fontWeight: 'bold' }}>🤢 DIGESTION & BLOAT</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Gas. Heartburn. 1 tsp after meals = Comfort. Eat without fear.</p>
              </div>

            </div>

            <p style={{ color: '#00ff88', fontSize: '1rem', margin: '24px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}>
              1 Lightning formula. 9 pains zapped. M120 jar or M250 PDF.
            </p>
          </div>
        </div>
      </section>
      {/* PAIN PICKER GREEN BOX - END */}

      {/* AFFILIATION SECTION */}
      <section style={{ background: '#111', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: '#000', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>
              EARN 30% AFFILIATION
            </h3>
            <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0' }}>
              Share your link. Earn M75 for every M250 PDF sale.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', minWidth: '200px' }}
              />
              <button style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Get Link
              </button>
            </div>
            <p style={{ color: '#666', fontSize: '0.8rem', margin: '16px 0 0 0' }}>
              Link: https://zapsauce.vercel.app?ref=YourName
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={{ background: '#000', padding: '60px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '0 0 40px 0' }}>
            Choose Your Lightning ⚡
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {/* PDF OPTION */}
            <div style={{ background: '#111', border: '2px solid #FFD700', borderRadius: '16px', padding: '40px 24px' }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.8rem', margin: '0 0 16px 0' }}>ORIGIN PDF</h3>
              <p style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M250</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                Complete recipe + exact measurements + 7-step method + cost calculator + warnings. Make unlimited batches yourself. Own forever.
              </p>
              <ul style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 32px 0', textAlign: 'left', paddingLeft: '20px' }}>
                <li>Instant WhatsApp delivery</li>
                <li>Ingredients cost M120/batch</li>
                <li>30 days supply per batch</li>
                <li>M4 per day cost</li>
                <li>Saves M3,870+/year</li>
              </ul>
              <a 
                href="https://wa.me/26657031600?text=I%20want%20Zap%20Sauce%20PDF%20M250%20-%20Ref:MakhauheloMoima" 
                style={{ background: '#00ff88', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}
              >
                Get PDF via WhatsApp
              </a>
            </div>

            {/* JAR OPTION */}
            <div style={{ background: '#111', border: '2px solid #00ff88', borderRadius: '16px', padding: '40px 24px' }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 16px 0' }}>Ready-Made Jar</h3>
              <p style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0', fontWeight: 'bold' }}>M120</p>
              <p style={{ color: '#ccc', fontSize: '1rem', margin: '0 0 24px 0', lineHeight: '1.6' }}>
                250ml jar. Made fresh with secret formula. Sterilized. Labelled. 6 months shelf life.
              </p>
              <ul style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 32px 0', textAlign: 'left', paddingLeft: '20px' }}>
                <li>Ready to use immediately</li>
                <li>30 days supply</li>
                <li>M4 per day cost</li>
                <li>Delivery Maseru M30</li>
                <li>Districts M50</li>
              </ul>
              <a 
                href="https://wa.me/26657031600?text=I%20want%20Ready-Made%20Jar%20M120%20-%20Ref:MakhauheloMoima" 
                style={{ background: '#FFD700', color: '#000', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}
              >
                Order Jar via WhatsApp
              </a>
              <p style={{ color: '#666', fontSize: '0.8rem', margin: '12px 0 0 0' }}>
                Lesotho delivery only
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#111', padding: '40px 20px', borderTop: '1px solid #1f1f1f' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#0a0a0a', border: '1px solid #ff4444', borderRadius: '8px', padding: '24px' }}>
            <h4 style={{ color: '#ff4444', margin: '0 0 16px 0', fontSize: '1.1rem' }}>⚠️ IMPORTANT DISCLAIMER</h4>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: '0 0 12px 0' }}>
              <strong>Zap Sauce ORIGIN is a food/beverage for general wellness and nutritional support.</strong> It is NOT a medicine, drug, or cure for any disease. NOT evaluated by FDA or Ministry of Health. NOT intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: '0 0 12px 0' }}>
              <strong>Do NOT use if:</strong> Pregnant, breastfeeding, on blood thinners, stomach ulcers, under 2 years old, high blood pressure meds, heart conditions, or allergic to garlic/ginger/honey.
            </p>
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>
              <strong>Always consult your doctor</strong> before use if you have medical conditions or take prescription medication. Results vary. Your body, your responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a0a0a', padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #1f1f1f' }}>
        <p style={{ color: '#FFD700', fontSize: '1.2rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
          ZAP SAUCE ORIGIN ⚡
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