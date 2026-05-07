'use client'

import Link from 'next/link'

export default function GlobalRecipesPage() {
  
  // ALL 19 ZAP SAUCE GLOBAL RECIPES
  const globalRecipes = [
    {
      id: 'master-base',
      name: 'MASTER BASE FORMULA',
      subtitle: 'The Original Foundation - All recipes build on this',
      time: '1L batch',
      url: '/recipes/global/master-base'
    },
    {
      id: 'turmeric-gold',
      name: 'ZAP SAUCE ORIGINAL - Turmeric Gold',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/turmeric-gold'
    },
    {
      id: 'bronchial-lightning',
      name: 'COUGH & COLD RELIEF - Bronchial Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/bronchial-lightning'
    },
    {
      id: 'heart-lightning',
      name: 'HYPERTENSION FORMULA - Heart Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/heart-lightning'
    },
    {
      id: 'joint-lightning',
      name: 'ARTHRITIS RELIEF - Joint Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/joint-lightning'
    },
    {
      id: 'sugar-lightning',
      name: 'DIABETES SUPPORT - Sugar Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/sugar-lightning'
    },
    {
      id: 'gut-lightning',
      name: 'DIGESTIVE EASE - Gut Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/gut-lightning'
    },
    {
      id: 'vitality-lightning',
      name: 'ENERGY BOOST - Vitality Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/vitality-lightning'
    },
    {
      id: 'night-lightning',
      name: 'SLEEP SUPPORT - Night Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/night-lightning'
    },
    {
      id: 'beauty-lightning',
      name: 'SKIN GLOW - Beauty Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/beauty-lightning'
    },
    {
      id: 'king-lightning',
      name: 'MENS VITALITY - King Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/king-lightning'
    },
    {
      id: 'queen-lightning',
      name: 'WOMENS BALANCE - Queen Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/queen-lightning'
    },
    {
      id: 'little-lightning',
      name: 'KIDS IMMUNITY - Little Lightning',
      subtitle: 'Base: Master Base 50% + Honey 50%',
      time: 'Add to base',
      url: '/recipes/global/little-lightning'
    },
    {
      id: 'champion-lightning',
      name: 'ATHLETE RECOVERY - Champion Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/champion-lightning'
    },
    {
      id: 'pure-lightning',
      name: 'DETOX CLEANSE - Pure Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/pure-lightning'
    },
    {
      id: 'mind-lightning',
      name: 'BRAIN BOOST - Mind Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/mind-lightning'
    },
    {
      id: 'defense-lightning',
      name: 'ALLERGY SHIELD - Defense Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/defense-lightning'
    },
    {
      id: 'balance-lightning',
      name: 'THYROID SUPPORT - Balance Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/balance-lightning'
    },
    {
      id: 'supreme-lightning',
      name: 'ULTIMATE IMMUNITY - Supreme Lightning',
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      url: '/recipes/global/supreme-lightning'
    }
  ]

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '40px' }}>
          <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <h1 style={{ color: '#FFD700', fontSize: '3rem', margin: '16px 0 8px 0' }}>
            ZAP SAUCE GLOBAL 🌍
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.2rem', margin: '0 0 8px 0' }}>
            M2500 once-off. NOT RESELLABLE.
          </p>
          <p style={{ color: '#888', fontSize: '1rem' }}>
            Master Base + 18 Signature Recipes. Global ingredients.
          </p>
        </div>

        {/* LOCK NOTICE */}
        <div style={{ 
          background: '#111', 
          border: '2px solid #FFD700', 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#FFD700', margin: '0 0 8px 0' }}>ZAP SAUCE GLOBAL - M2500 once-off</h3>
          <p style={{ color: '#ccc', margin: '0 0 16px 0', fontSize: '0.95rem' }}>
            Personal empire use only. All 19 recipes + Master Base Formula.
          </p>
          <a 
            href={`https://wa.me/26657031600?text=I%20want%20ZAP%20SAUCE%20GLOBAL%20M2500%20once-off.%20MPESA%20proof:`}
            style={{
              background: '#FFD700',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            Get ZAP SAUCE GLOBAL - M2500
          </a>
        </div>

        {/* RECIPES GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '24px',
          marginBottom: '60px'
        }}>
          {globalRecipes.map((recipe) => (
            <Link 
              key={recipe.id} 
              href={recipe.url}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#111',
                border: '2px solid #FFD700',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                height: '100%'
              }}>
                <h3 style={{ 
                  color: '#FFD700', 
                  margin: '0 0 8px 0', 
                  fontSize: '1.2rem'
                }}>
                  {recipe.name}
                </h3>
                <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 8px 0' }}>
                  {recipe.subtitle}
                </p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>
                  ⏱️ {recipe.time}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Not medical advice. Consult your doctor. For considered families worldwide.
          </p>
          <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: '700', marginTop: '16px', display: 'inline-block' }}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}