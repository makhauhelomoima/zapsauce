'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* TOP NAV - ADMIN + CUSTOMER PORTAL */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '40px',
          paddingTop: '20px'
        }}>
          <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>
            Zap Sauce<span style={{ color: '#00ff88' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link 
              href="/portal"
              style={{
                color: '#00ff88',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
                padding: '8px 16px',
                border: '1px solid #00ff88',
                borderRadius: '6px'
              }}
            >
              Customer Portal
            </Link>
            <Link 
              href="/admin"
              style={{
                color: '#888',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              Admin
            </Link>
            <a 
              href="https://wa.me/26657031600"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ color: '#00ff88', fontSize: '3.5rem', margin: '0 0 16px 0' }}>
            Zap Sauce ⚡
          </h1>
          <p style={{ color: '#ccc', fontSize: '1.3rem', margin: '0 0 8px 0' }}>
            Lightning in a jar! ⚡
          </p>
          <p style={{ color: '#888', fontSize: '1rem' }}>
            Product of Lesotho 🇱🇸
          </p>
        </div>

        {/* TOP 2 TIERS - SIDE BY SIDE */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px',
          marginBottom: '30px'
        }}>
          
          {/* MYHEAL - NOW WITH 30% AFFILIATION */}
          <div style={{
            background: '#111',
            border: '2px solid #00ff88',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 12px 0' }}>MYHEAL</h2>
            <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>M120</p>
            <p style={{ color: '#ccc', margin: '0 0 20px 0', fontSize: '0.9rem' }}>Once-off. 30% Affiliation.</p>
            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '24px' }}>
              ORIGINAL + TANGY FUSION<br/>
              Own forever. Earn M36 per referral.
            </p>
            <Link 
              href="/recipes/zap-001"
              style={{
                background: '#00ff88',
                color: '#000',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                width: '100%'
              }}
            >
              Get MYHEAL - M120
            </Link>
          </div>

          {/* HUSTLER'S VAULT */}
          <div style={{
            background: '#111',
            border: '2px solid #00ff88',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 12px 0' }}>HUSTLER'S VAULT</h2>
            <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>M1200</p>
            <p style={{ color: '#ccc', margin: '0 0 20px 0', fontSize: '0.9rem' }}>Once-off. 30% Affiliation.</p>
            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '24px' }}>
              19 Recipes Total<br/>
              Earn M360 per sale. For serious healers & hustlers.
            </p>
            <Link 
              href="/recipes"
              style={{
                background: '#00ff88',
                color: '#000',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                width: '100%'
              }}
            >
              View 19 Recipes
            </Link>
          </div>
        </div>

        {/* ZAP SAUCE GLOBAL - FULL WIDTH */}
        <div style={{
          background: '#111',
          border: '2px solid #FFD700',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{ color: '#FFD700', fontSize: '2rem', margin: '0 0 12px 0' }}>ZAP SAUCE GLOBAL 🌍</h2>
          <p style={{ color: '#FFD700', fontSize: '2.5rem', fontWeight: '700', margin: '0 0 8px 0' }}>M2500</p>
          <p style={{ color: '#ccc', margin: '0 0 20px 0', fontSize: '1rem' }}>Once-off. NOT RESELLABLE.</p>
          <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '28px', fontSize: '1.1rem' }}>
            Master Base Formula + 18 Signature Recipes<br/>
            Global ingredients. Personal empire use only. Worldwide healing.
          </p>
          <Link 
            href="/recipes/global"
            style={{
              background: '#FFD700',
              color: '#000',
              padding: '16px 48px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block',
              fontSize: '1.1rem'
            }}
          >
            Get ZAP SAUCE GLOBAL - M2500
          </Link>
        </div>

        {/* FREE SAMPLES */}
        <div style={{ 
          background: '#111', 
          border: '1px solid #1f1f1f', 
          borderRadius: '12px', 
          padding: '32px', 
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h3 style={{ color: '#00ff88', margin: '0 0 16px 0' }}>Try Free First</h3>
          <p style={{ color: '#ccc', margin: '0 0 20px 0' }}>MORNING SHOT + IMMUNITY TEASER - No payment needed</p>
          <Link 
            href="/recipes/free-001"
            style={{
              background: 'transparent',
              color: '#00ff88',
              border: '2px solid #00ff88',
              padding: '12px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            Get Free Recipe →
          </Link>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: '0 0 8px 0' }}>
            © 2026 Zap Sauce. Traditional wellness. Product of Lesotho 🇱🇸
          </p>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
            Not medical advice. Consult your doctor. For considered families.
          </p>
          <a 
            href="https://wa.me/26657031600"
            style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700', marginTop: '16px', display: 'inline-block' }}
          >
            WhatsApp Support: +266 57031600
          </a>
        </div>

      </div>
    </div>
  )
}