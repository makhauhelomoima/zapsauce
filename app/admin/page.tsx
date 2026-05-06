'use client'

import { useState } from 'react'
import { recipes, packages } from '../../data/recipes'

// Force dynamic - stops Next.js from pre-rendering this page at build time
export const dynamic = 'force-dynamic'

export default function AdminPage() {
  const [selectedRecipe, setSelectedRecipe] = useState('')
  const [status, setStatus] = useState('')

  // Safety check - prevents undefined error if packages doesn't load
  const franchiseKit = packages? packages['franchise-kit'] : null

  return (
    <div className="bg-black min-h-[100dvh] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-[#00A651] mb-6">ADMIN DASHBOARD ⚡</h1>

        <div className="bg-gray-900 border-[#00A651]/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Manual Unlock Tool</h2>

          <select
            value={selectedRecipe}
            onChange={(e) => setSelectedRecipe(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-3 mb-4 text-white"
          >
            <option value="">Select Recipe to Unlock</option>
            {recipes && recipes.map(r => (
              <option key={r.id} value={r.id}>{r.name} - M{r.price}</option>
            ))}
            {franchiseKit && (
              <option value="franchise-kit">
                FRANCHISE KIT - M{franchiseKit.price}
              </option>
            )}
          </select>

          <button
            onClick={() => setStatus('Unlocked for user!')}
            className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg hover:bg-[#00E06D] transition"
          >
            UNLOCK FOR CUSTOMER
          </button>

          {status && <p className="text-green-400 mt-4">{status}</p>}
        </div>
      </div>
    </div>
  )
}