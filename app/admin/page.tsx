'use client'
import { useState } from 'react'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#ff4444', fontSize: '1.5rem', margin: '0 0 16px 0' }}>ADMIN DASHBOARD 🔒</h1>
          <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 24px 0' }}>Makhauhelo only</p>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} />
          <button onClick={() => password === 'ZAP@120' && setAuthed(true)} style={{ background: '#ff4444', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>Enter Dashboard</button>
          {password && password !== 'ZAP@120' && <p style={{ color: '#ff4444', fontSize: '0.9rem', margin: '16px 0 0 0' }}>Wrong password my Queen 🔒</p>}
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ color: '#ff4444', fontSize: '2rem' }}>Welcome Home, Makhauhelo ⚡</h1>
      <p style={{ color: '#888' }}>Revenue dashboard coming next. For now: You have access.</p>
      <button onClick={() => setAuthed(false)} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>Logout</button>
    </main>
  )
}