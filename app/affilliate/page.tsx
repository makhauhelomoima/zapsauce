'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AffiliatePage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [refCode, setRefCode] = useState('')
  const [affiliate, setAffiliate] = useState(null)
  const [downlines, setDownlines] = useState([])
  const [loading, setLoading] = useState(false)

  // CONFIG
  const TEST_MODE = true // Set to false when going live
  const PAYOUT_MINIMUM = 0 // Set to 225 when going live
  const COMMISSION_ORIGIN = 75
  const COMMISSION_FIREBALL = 105
  const ORIGIN_PRICE = 250
  const FIREBALL_PRICE = 350

  const validateRefCode = (code) => {
    // Rule: Must contain letters, no pure numbers, 3-20 chars, no spaces
    const hasLetter = /[a-zA-Z]/.test(code)
    const notPureNumber = !/^\d+$/.test(code)
    const validLength = code.length >= 3 && code.length <= 20
    const noSpaces = !/\s/.test(code)
    
    if (!hasLetter) return 'Ref code must contain letters. Use NameSurname format.'
    if (!notPureNumber) return 'Ref code cannot be numbers only. Scammers use numbers.'
    if (!validLength) return 'Ref code must be 3-20 characters.'
    if (!noSpaces) return 'Ref code cannot have spaces. Use NameSurname.'
    return null
  }

  const fetchData = async (code) => {
    const { data: aff } = await supabase.from('affiliates').select('*').eq('ref_code', code).single()
    setAffiliate(aff)
    
    if (aff?.is_active) {
      const { data: sales } = await supabase
        .from('purchases')
        .select('*')
        .eq('ref_code_used', code)
        .order('created_at', { ascending: false })
      setDownlines(sales || [])
    }
  }

  const handleLogin = async () => {
    if (password !== 'ZAP120') {
      alert('Wrong password. Use: ZAP120')
      return
    }
    
    const code = prompt('Enter your unique ref code.\nNEW USER? Create one using NameSurname format:\nExample: ThaboMokhele')
    if (!code || code.trim() === '') return
    
    const cleanCode = code.trim()
    const validationError = validateRefCode(cleanCode)
    if (validationError) {
      alert(validationError)
      return
    }
    
    setLoading(true)
    setRefCode(cleanCode)
    
    try {
      let { data: existing, error } = await supabase
        .from('affiliates')
        .select('*')
        .eq('ref_code', cleanCode)
        .single()
      
      if (!existing && error?.code === 'PGRST116') {
        const name = prompt('Enter your full name for payouts:')
        if (!name) { setLoading(false); return }
        const phone = prompt('Enter MPESA number 266XXXXXXXX:')
        if (!phone) { setLoading(false); return }
        const email = prompt('Enter email address:')
        if (!email) { setLoading(false); return }
        
        const { data: newAff, error: insertError } = await supabase
          .from('affiliates')
          .insert({
            name: name.trim(),
            ref_code: cleanCode,
            phone: phone.trim(),
            email: email.trim(),
            is_active: false,
            total_earned: 0,
            pending_due: 0
          })
          .select()
          .single()
        
        if (insertError) throw insertError
        existing = newAff
      } else if (error) {
        throw error
      }
      
      setAffiliate(existing)
      setAuthed(true)
      await fetchData(cleanCode)
    } catch (err) {
      console.error('Login error:', err)
      alert('Error: Check Supabase connection or ref code already exists.')
    } finally {
      setLoading(false)
    }
  }

  const testActivate = async () => {
    if (!TEST_MODE) return
    const confirm = window.confirm('TEST: Activate your account now? Simulates buying M250/M350.')
    if (!confirm) return
    
    await supabase.from('affiliates').update({ is_active: true }).eq('ref_code', refCode)
    await fetchData(refCode)
    alert('Activated! You can now earn commissions.')
  }

  const testSimulateSale = async (productType) => {
    if (!TEST_MODE) return
    const buyerName = prompt('Enter test buyer name:')
    if (!buyerName) return
    
    const amount = productType === 'ORIGIN' ? ORIGIN_PRICE : FIREBALL_PRICE
    const commission = productType === 'ORIGIN' ? COMMISSION_ORIGIN : COMMISSION_FIREBALL
    
    await supabase.from('purchases').insert({
      buyer_name: buyerName,
      amount: amount,
      product_name: productType,
      ref_code_used: refCode,
      commission_paid: false
    })
    
    await supabase
      .from('affiliates')
      .update({ 
        total_earned: affiliate.total_earned + commission,
        pending_due: affiliate.pending_due + commission
      })
      .eq('ref_code', refCode)
    
    await fetchData(refCode)
    alert(`Test sale complete! M${commission} added to your wallet.`)
  }

  const requestPayout = () => {
    if (!affiliate || !canPayout) return
    const message = `PAYOUT REQUEST ⚡%0AName: ${affiliate.name}%0ARef: ${refCode}%0AAmount: M${affiliate.pending_due}%0AMPESA: ${affiliate.phone}`
    window.open(`https://wa.me/26657031600?text=${message}`, '_blank')
  }

  const affiliateLink = `https://zapsauce.vercel.app?ref=${refCode}`
  const canPayout = (affiliate?.pending_due || 0) >= PAYOUT_MINIMUM && affiliate?.is_active

  if (loading) return <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p style={{ color: '#00ff88' }}>Connecting to Supabase...</p></main>

  if (!authed) {
    return (
      <main style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
        <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ color: '#00ff88', fontSize: '1.8rem', margin: '0 0 8px 0' }}>Affiliate Portal ⚡</h1>
          <p style={{ color: '#FFD700', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>FREE TO JOIN</p>
          <p style={{ color: '#ccc', fontSize: '0.8rem', margin: '0 0 16px 0' }}>Use NameSurname for ref code</p>
          {TEST_MODE && <p style={{ color: '#ff4444', fontSize: '0.8rem', margin: '0 0 16px 0' }}>TEST MODE ACTIVE</p>}
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={{ background: '#111', border: '1px solid #333', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontSize: '1rem', width: '100%', marginBottom: '16px' }} 
          />
          <button onClick={handleLogin} style={{ background: '#00ff88', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', width: '100%' }}>
            Access Portal
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {TEST_MODE && (
          <div style={{ background: '#ff4444', color: '#fff', padding: '16px', borderRadius: '8px', textAlign: 'center', marginBottom: '24px' }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>⚠️ TEST MODE ACTIVE</p>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Use buttons below to simulate. Data saves to Supabase permanently.</p>
          </div>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ color: '#00ff88', fontSize: '2rem', margin: 0 }}>Affiliate Dashboard ⚡</h1>
            <p style={{ color: '#888', margin: '4px 0 0 0' }}>
              Welcome, {affiliate?.name} | Ref: {refCode} | Status: {affiliate?.is_active ? 'ACTIVE' : 'INACTIVE'}
            </p>
          </div>
          <button onClick={() => setAuthed(false)} style={{ background: '#ff4444', color: '#fff', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Logout
          </button>
        </div>

        {TEST_MODE && !affiliate?.is_active && (
          <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Test Activation</h3>
            <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>
              Click to simulate buying ORIGIN M250 OR FIREBALL M350 and activate your account instantly.
            </p>
            <button onClick={testActivate} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              Test Activate Now
            </button>
          </div>
        )}
        
        {!TEST_MODE && !affiliate?.is_active && (
          <div style={{ background: '#0a0a0a', border: '2px solid #ff4444', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ color: '#ff4444', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Activate to Earn</h3>
            <p style={{ color: '#ccc', margin: '0 0 24px 0' }}>
              Buy ORIGIN M250 OR FIREBALL M350 to activate. Then WhatsApp +266 57031600 with your ref code.
            </p>
            <button onClick={() => window.open('https://zapsauce.vercel.app', '_blank')} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              Buy to Activate
            </button>
          </div>
        )}

        {affiliate?.is_active && (
          <>
            {TEST_MODE && (
              <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Test Sales Simulator</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Click to simulate someone buying with your link. Commission adds instantly.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <button onClick={() => testSimulateSale('ORIGIN')} style={{ background: '#00ff88', color: '#000', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                    + Simulate ORIGIN Sale M75
                  </button>
                  <button onClick={() => testSimulateSale('FIREBALL')} style={{ background: '#ff4500', color: '#fff', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                    + Simulate FIREBALL Sale M105
                  </button>
                </div>
              </div>
            )}

            <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ color: '#FFD700', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Link 🔗</h3>
              <div style={{ background: '#111', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
                <p style={{ color: '#00ff88', fontSize: '1rem', margin: 0, wordBreak: 'break-all' }}>{affiliateLink}</p>
              </div>
              <button onClick={() => { navigator.clipboard.writeText(affiliateLink); alert('Copied! Share with friends.') }} style={{ background: '#FFD700', color: '#000', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '1rem' }}>
                Copy Link
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div style={{ background: '#0a0a0a', border: '2px solid #FFD700', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Total Earned</p>
                <p style={{ color: '#FFD700', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliate?.total_earned || 0}</p>
              </div>
              <div style={{ background: '#0a0a0a', border: `2px solid ${canPayout ? '#00ff88' : '#ff4500'}`, borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Pending Payout</p>
                <p style={{ color: canPayout ? '#00ff88' : '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>M{affiliate?.pending_due || 0}</p>
                <p style={{ color: '#666', fontSize: '0.7rem', margin: '4px 0 0 0' }}>
                  {PAYOUT_MINIMUM === 0 
                    ? 'Test Mode: M0 minimum' 
                    : canPayout 
                      ? 'Ready to cash out!' 
                      : `${Math.max(0, Math.ceil((PAYOUT_MINIMUM - (affiliate?.pending_due || 0)) / COMMISSION_ORIGIN))} more ORIGIN sales to M${PAYOUT_MINIMUM}`
                  }
                </p>
              </div>
              <div style={{ background: '#0a0a0a', border: '2px solid #ff4500', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 8px 0' }}>Level 1 Downlines</p>
                <p style={{ color: '#ff4500', fontSize: '2rem', margin: 0, fontWeight: 'bold' }}>{downlines.length}</p>
              </div>
            </div>

            {canPayout && (
              <button onClick={requestPayout} style={{ background: '#00ff88', color: '#000', padding: '16px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', width: '100%', marginBottom: '24px' }}>
                Request M{affiliate.pending_due} Payout via WhatsApp
              </button>
            )}

            <div style={{ background: '#0a0a0a', border: '2px solid #00ff88', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ color: '#00ff88', fontSize: '1.3rem', margin: '0 0 16px 0' }}>Your Level 1 Sales</h3>
              {downlines.length === 0 ? (
                <p style={{ color: '#888' }}>No sales yet. {TEST_MODE ? 'Use test buttons above.' : 'Share your link.'}</p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #333' }}>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Buyer</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Product</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Date</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Commission</th>
                        <th style={{ color: '#888', textAlign: 'left', padding: '12px' }}>Paid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {downlines.map((sale, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #1a1a1a' }}>
                          <td style={{ color: '#fff', padding: '12px' }}>{sale.buyer_name}</td>
                          <td style={{ color: sale.amount === ORIGIN_PRICE ? '#00ff88' : '#ff4500', padding: '12px', fontWeight: 'bold' }}>
                            {sale.product_name}
                          </td>
                          <td style={{ color: '#ccc', padding: '12px' }}>{new Date(sale.created_at).toLocaleDateString()}</td>
                          <td style={{ color: '#00ff88', padding: '12px', fontWeight: 'bold' }}>
                            M{sale.amount === ORIGIN_PRICE ? COMMISSION_ORIGIN : COMMISSION_FIREBALL}
                          </td>
                          <td style={{ color: sale.commission_paid ? '#00ff88' : '#ff4500', padding: '12px' }}>
                            {sale.commission_paid ? 'Yes' : 'No'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}