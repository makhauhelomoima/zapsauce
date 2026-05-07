'use client'

import Link from 'next/link'

export default function CustomerPortalPage() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '60px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#00ff88', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <h1 style={{ color: '#00ff88', fontSize: '2.5rem', margin: '16px 0 8px' }}>Customer Portal ⚡</h1>
          <p style={{ color: '#ccc' }}>Access Your Zap Sauce Recipes</p>
        </div>

        <div style={{ 
          background: '#111', 
          border: '2px solid #00ff88', 
          borderRadius: '12px', 
          padding: '32px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#00ff88', margin: '0 0 16px 0' }}>Already Purchased?</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '24px' }}>
            Send your MPESA confirmation to WhatsApp.<br/>
            We'll send your PDF + video instantly.<br/>
            No login needed. Lightning fast.
          </p>
          <a 
            href={`https://wa.me/26657031600?text=I%20paid%20for%20Zap%20Sauce.%20Here's%20my%20MPESA%20proof:`}
            style={{
              background: '#00ff88',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            Send MPESA Proof via WhatsApp
          </a>
        </div>

        <div style={{ 
          background: '#111', 
          border: '1px solid #1f1f1f', 
          borderRadius: '12px', 
          padding: '24px', 
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#FFD700', margin: '0 0 12px 0' }}>Haven't Purchased Yet?</h3>
          <p style={{ color: '#ccc', margin: '0 0 20px 0' }}>Choose your tier and start healing today.</p>
          <Link 
            href="/"
            style={{
              background: 'transparent',
              color: '#FFD700',
              border: '2px solid #FFD700',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            View All Tiers →
          </Link>
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f', marginTop: '40px' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Phase 2: Auto-login with email coming soon. For now, WhatsApp is fastest.
          </p>
        </div>

      </div>
    </div>
  )
}