'use client'

import { useState, useEffect } from 'react'

export default function FranchisePage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Supabase auth check goes here
  }, [])

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-yellow-500/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-yellow-400">Franchise Portal</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black text-yellow-400 mb-4">FRANCHISE KIT ACTIVE 🌍</h1>
        <p className="text-gray-300 mb-6">Your global license dashboard. Manage your territory, downloads, and affiliate links here.</p>

        <div className="grid gap-4">
          <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6">
            <h3 className="font-bold text-yellow-400 mb-2">License Status</h3>
            <p className="text-white">ACTIVE - Global Rights</p>
          </div>

          <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-6">
            <h3 className="font-bold text-yellow-400 mb-2">Downloads</h3>
            <button className="bg-yellow-500 text-black font-black px-6 py-2 rounded-lg">
              DOWNLOAD PDF KIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}