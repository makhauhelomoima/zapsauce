'use client'

import Link from 'next/link'

export default function AdminPage() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '60px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#00ff88', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
          <h1 style={{ color: '#00ff88', fontSize: '2.5rem', margin: '16px 0 8px' }}>Admin Dashboard ⚡</h1>
          <p style={{ color: '#ccc' }}>Zap Sauce Empire Control</p>
        </div>

        <div style={{ 
          background: '#111', 
          border: '2px solid #FFD700', 
          borderRadius: '12px', 
          padding: '32px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#FFD700', margin: '0 0 16px 0' }}>Phase 1: Manual Mode</h2>
          <p style={{ color: '#ccc', lineHeight: '1.8', marginBottom: '24px' }}>
            All orders come through WhatsApp for now.<br/>
            You verify MPESA payments manually.<br/>
            Customer gets recipes + business scripts PDF + WhatsApp Support after payment confirmed.
          </p>
          <a 
            href="https://wa.me/26657031600"
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
            Open WhatsApp Business
          </a>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px'
        }}>
          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#00ff88', margin: '0 0 12px 0' }}>MYHEAL Sales</h3>
            <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>M120</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>30% = M36 commission</p>
          </div>

          <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#00ff88', margin: '0 0 12px 0' }}> HUSTLER'S VAULT Sales</h3>
            <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>M1200</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>30% = M360 commission</p>
          </div>

          <div style={{ background: '#111', border: '1px solid #FFD700', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ color: '#FFD700', margin: '0 0 12px 0' }}>GLOBAL Sales</h3>
            <p style={{ color: '#FFD700', fontSize: '2rem', fontWeight: '700', margin: '0 0 8px 0' }}>M2500</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', margin: 0 }}>Not resellable</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f', marginTop: '40px' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Phase 2: Automated payments coming soon. ©2026 Zap Sauce. Lightning in a jar! ⚡, Product of Lesotho 🇱🇸.
          </p>
        </div>

      </div>
    </div>
  )
}