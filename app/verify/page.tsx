'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type PendingPayment = {
  id: string
  method: 'mpesa' | 'eft'
  code: string
  recipeId: string
  amount: number
  customerWhatsApp?: string
  timestamp: string
  status: 'pending' | 'confirmed' | 'rejected'
}

export default function VerifyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [pendingPayments, setPendingPayments] = useState<PendingPayment[]>([])
  const [selectedPayment, setSelectedPayment] = useState<PendingPayment | null>(null)

  useEffect(() => {
    const logged = localStorage.getItem('zapAdminLogged')
    if (logged === 'true') setIsLoggedIn(true)
    
    // Load pending payments from localStorage
    const saved = localStorage.getItem('zapPendingPayments')
    if (saved) {
      setPendingPayments(JSON.parse(saved))
    }
  }, [])

  const handleLogin = () => {
    if (password === 'HEAL120') {
      localStorage.setItem('zapAdminLogged', 'true')
      setIsLoggedIn(true)
      setPassword('')
    } else {
      alert('Wrong password. Try again.')
      setPassword('')
    }
  }

  const confirmPayment = (paymentId: string) => {
    const updated = pendingPayments.map(p => 
      p.id === paymentId? { ...p, status: 'confirmed' as const } : p
    )
    setPendingPayments(updated)
    localStorage.setItem('zapPendingPayments', JSON.stringify(updated))
    
    const payment = pendingPayments.find(p => p.id === paymentId)
    if (payment) {
      const unlocked = JSON.parse(localStorage.getItem('zapSauceUnlocked') || '["free-001","free-002"]')
      const newUnlocked = [...unlocked, payment.recipeId]
      localStorage.setItem('zapSauceUnlocked', JSON.stringify(newUnlocked))
      alert(`Payment confirmed! ${payment.recipeId.toUpperCase()} unlocked. Send PDF to customer now.`)
    }
    setSelectedPayment(null)
  }

  const rejectPayment = (paymentId: string) => {
    const updated = pendingPayments.map(p => 
      p.id === paymentId? { ...p, status: 'rejected' as const } : p
    )
    setPendingPayments(updated)
    localStorage.setItem('zapPendingPayments', JSON.stringify(updated))
    setSelectedPayment(null)
    alert('Payment rejected. Customer notified.')
  }

  if (!isLoggedIn) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex items-center justify-center">
        <div className="bg-gray-900 border border-[#00A651]/40 rounded-xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-[#00E06D] mb-2 text-center">Payment Verification</h1>
          <p className="text-sm text-gray-400 mb-6 text-center">Admin access only</p>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-black border border-gray-600 rounded px-4 py-3 mb-4 text-white"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-3 rounded"
          >
            Login
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">Only Makhauhelo has access</p>
        </div>
      </div>
    )
  }

  const pending = pendingPayments.filter(p => p.status === 'pending')
  const confirmed = pendingPayments.filter(p => p.status === 'confirmed')
  const rejected = pendingPayments.filter(p => p.status === 'rejected')

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce Verify</span>
            <span className="text-xs text-[#00A651]">Payment Ledger</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-xs text-gray-400 hover:text-[#00A651]">Dashboard</Link>
            <Link href="/" className="text-xs text-gray-400 hover:text-[#00A651]">Store</Link>
            <button
              onClick={() => {
                localStorage.removeItem('zapAdminLogged')
                setIsLoggedIn(false)
              }}
              className="text-xs text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#00E06D] mb-8">Payment Verification Center</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-xl p-6">
            <div className="text-yellow-400 text-sm mb-1">Pending</div>
            <div className="text-3xl font-black text-white">{pending.length}</div>
            <div className="text-xs text-yellow-400">Awaiting confirmation</div>
          </div>
          <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6">
            <div className="text-[#00A651] text-sm mb-1">Confirmed</div>
            <div className="text-3xl font-black text-white">{confirmed.length}</div>
            <div className="text-xs text-[#00A651]">Payments verified</div>
          </div>
          <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-6">
            <div className="text-red-400 text-sm mb-1">Rejected</div>
            <div className="text-3xl font-black text-white">{rejected.length}</div>
            <div className="text-xs text-red-400">Invalid payments</div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Pending Verifications</h2>
          {pending.length === 0? (
            <p className="text-gray-500 text-center py-8">No pending payments. All clear.</p>
          ) : (
            <div className="space-y-4">
              {pending.map((payment) => (
                <div key={payment.id} className="bg-black border border-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${payment.method === 'mpesa'? 'bg-[#00A651] text-black' : 'bg-blue-500 text-white'}`}>
                          {payment.method.toUpperCase()}
                        </span>
                        <span className="text-white font-bold">{payment.recipeId.toUpperCase()}</span>
                      </div>
                      <p className="text-sm text-gray-300">Code: <span className="text-[#00E06D] font-mono">{payment.code}</span></p>
                      <p className="text-sm text-gray-300">Amount: <span className="text-[#00E06D] font-bold">M{payment.amount}</span></p>
                      <p className="text-xs text-gray-500 mt-1">{new Date(payment.timestamp).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => confirmPayment(payment.id)}
                        className="bg-[#00A651] hover:bg-[#00C85F] text-black font-bold px-4 py-2 rounded text-xs"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => rejectPayment(payment.id)}
                        className="bg-red-500 hover:bg-red-400 text-white font-bold px-4 py-2 rounded text-xs"
                      >
                        Reject
                      </button>
                    </div>
                  {payment.recipeId === 'franchise-kit' && (
                    <div className="bg-yellow-500/10 border border-yellow-500/40 rounded p-2 mt-2">
                      <p className="text-xs text-yellow-400 font-bold">🌍 FRANCHISE KIT - Send PDF to WhatsApp after confirm</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Bank Details Reference</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white font-bold mb-2">MPESA</p>
              <p className="text-gray-300">Number: 57031600</p>
              <p className="text-gray-300">Name: Makhauhelo Moima</p>
              <p className="text-[#00A651]">USSD: *200#1*1*57031600*amount#</p>
            </div>
            <div>
              <p className="text-white font-bold mb-2">EFT - Lesotho Post Bank</p>
              <p className="text-gray-300">Account: 1036202900018</p>
              <p className="text-gray-300">Name: Makhauhelo Moima</p>
              <p className="text-gray-300">Branch: BONHOMME</p>
              <p className="text-gray-300">SWIFT: LESHLSMMXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}