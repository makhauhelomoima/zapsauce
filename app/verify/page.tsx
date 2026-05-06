'use client'

import { useState, useEffect } from 'react'

export default function VerifyPage() {
  const [pendingPayments, setPendingPayments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPending()
  }, [])

  const fetchPending = async () => {
    // Fetch from Supabase here
    setPendingPayments([])
    setLoading(false)
  }

  const confirmPayment = async (paymentId: string) => {
    // Confirm logic here
    alert('Payment confirmed!')
  }

  const rejectPayment = async (paymentId: string) => {
    // Reject logic here
    alert('Payment rejected!')
  }

  const pending = pendingPayments.filter(p => p.status === 'pending')
  const confirmed = pendingPayments.filter(p => p.status === 'confirmed')
  const rejected = pendingPayments.filter(p => p.status === 'rejected')

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00A651]">Verify Payments</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black text-[#00A651] mb-6">ADMIN VERIFICATION 👑</h1>

        {loading? (
          <p className="text-gray-400">Loading payments...</p>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-3">Pending ({pending.length})</h2>
              {pending.length === 0? (
                <p className="text-gray-500">No pending payments</p>
              ) : (
                pending.map(payment => (
                  <div key={payment.id} className="bg-gray-900 border border-yellow-500/30 rounded-lg p-4 mb-3">
                    <p>Amount: M{payment.amount} | Ref: {payment.reference_code}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => confirmPayment(payment.id)}
                        className="bg-green-600 px-4 py-1 rounded text-sm font-bold"
                      >
                        CONFIRM
                      </button>
                      <button
                        onClick={() => rejectPayment(payment.id)}
                        className="bg-red-600 px-4 py-1 rounded text-sm font-bold"
                      >
                        REJECT
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}