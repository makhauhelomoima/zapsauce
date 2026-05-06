'use client'

import { useState, useEffect } from 'react'
import { recipes, packages } from '../../data/recipes'
import Link from 'next/link'

export default function PortalPage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      setUnlockedRecipes(JSON.parse(saved))
    }
  }, [])

  const isUnlocked = (recipeId: string) => {
    return unlockedRecipes.includes(recipeId) || recipeId === 'free-001' || recipeId === 'free-002'
  }

  const filteredRecipes = recipes.filter(r => {
    const matchesCategory = selectedCategory === 'all' || r.category === selectedCategory
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         r.benefits.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const unlockedCount = recipes.filter(r => isUnlocked(r.id)).length
  const hasHustlersVault = unlockedRecipes.includes('zap-001') && unlockedRecipes.includes('zap-011')
  const hasFranchiseKit = unlockedRecipes.includes('master-001')

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Customer Portal</span>
            <span className="text-xs text-[#00A651]">{unlockedCount}/21 Unlocked</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-[#00A651]">Store</Link>
            <Link href="/customer" className="text-xs text-gray-400 hover:text-[#00A651]">Legacy Portal</Link>
            <Link href="/franchise" className="text-xs text-yellow-400 hover:text-yellow-300">Franchise</Link>
            <a href="https://wa.me/26657031600" target="_blank" className="text-xs text-[#25D366] hover:text-[#20BD5C]">Support</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Legacy Customer Link Banner */}
        <div className="bg-blue-500/10 border border-blue-500/40 rounded-lg p-3 mb-6 max-w-4xl mx-auto">
          <p className="text-xs text-blue-400 text-center">
            Looking for the old customer area?
            <Link href="/customer" className="text-blue-300 font-bold hover:text-blue-200 ml-1">
              Click here for Legacy Portal →
            </Link>
          </p>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="text-[#00E06D]">YOUR RECIPE</span> VAULT ⚡
          </h1>
          <p className="text-lg text-gray-300">Access your purchased recipes below</p>
        </div>

        {hasFranchiseKit && (
          <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">🌍 FRANCHISE KIT ACTIVE</h3>
            <p className="text-sm text-gray-300 mb-3">You own all 18 recipes + Master Base. No affiliate restrictions.</p>
            <div className="flex gap-4 text-xs">
              <a href="https://wa.me/26657031600?text=Need%20Franchise%20Support" className="text-[#25D366] hover:text-[#20BD5C]">WhatsApp Support →</a>
              <Link href="/franchise" className="text-yellow-400 hover:text-yellow-300">Franchise Dashboard →</Link>
            </div>
          </div>
        )}

        {hasHustlersVault &&!hasFranchiseKit && (
          <div className="bg-[#00E06D]/10 border border-[#00E06D]/40 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-[#00E06D] mb-2">⚡ HUSTLER'S VAULT ACTIVE</h3>
            <p className="text-sm text-gray-300 mb-3">You have 11 recipes + 30% affiliate on local sales.</p>
            <a href="https://wa.me/26657031600?text=Need%20Affiliate%20Help" className="text-xs text-[#25D366] hover:text-[#20BD5C]">Get Affiliate Link →</a>
          </div>
        )}

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-700 rounded px-4 py-2 text-sm"
          />
          <div className="flex gap-2 overflow-x-auto">
            {['all', 'free', 'exclusive', 'signature', 'premium'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs whitespace-nowrap ${selectedCategory === cat? 'bg-[#00A651] text-black font-bold' : 'bg-gray-700 text-gray-300'}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((item) => (
            <div key={item.id} className={`bg-gray-900/50 border rounded-xl p-6 ${isUnlocked(item.id)? 'border-[#00A651]/40' : 'border-gray-700 opacity-60'}`}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <div className="text-right">
                  <div className={`font-black text-lg ${item.price === 0? 'text-[#00E06D]' : 'text-gray-400'}`}>
                    {item.price === 0? 'FREE' : `M${item.price}`}
                  </div>
                  {isUnlocked(item.id)? (
                    <div className="text-xs text-[#00E06D]">✅ UNLOCKED</div>
                  ) : (
                    <div className="text-xs text-red-400">🔒 LOCKED</div>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#00A651] mb-3">{item.subtitle}</p>

              {isUnlocked(item.id)? (
                <div className="space-y-3">
                  <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded p-3">
                    <p className="text-xs text-gray-300">{item.benefits}</p>
                  </div>
                  <div className="bg-black border border-gray-700 rounded p-3">
                    <p className="text-xs text-[#00E06D] font-bold mb-2">📋 FULL RECIPE:</p>
                    <p className="text-xs text-gray-400">Moringa leaf extract, Lemon peel extract, Garlic extract, Ginger extract, Echinacea extract, Olive leaf extract, Colloidal silver, Unpasteurized honey.</p>
                    <p className="text-xs text-gray-500 mt-2">Dosage: 1 tablespoon daily on empty stomach</p>
                  </div>
                  <a href={`https://wa.me/26657031600?text=Need%20help%20with%20${item.id}`} className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-xs text-center">
                    Get Support
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3">
                    <p className="text-xs text-gray-500">{item.benefits.substring(0, 80)}...</p>
                  </div>
                  <Link href="/" className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded text-xs text-center">
                    Purchase to Unlock
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No recipes found. Try a different search.</p>
          </div>
        )}

        <div className="mt-12 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce. Lightning in a jar! ⚡</p>
          <p>For Considered Families. Product of Lesotho 🇱🇸</p>
        </div>
      </div>
    </div>
  )
}