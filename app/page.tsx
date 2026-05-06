'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { recipes } from '@/data/recipes'

export default function HomePage() {
  const freeRecipes = recipes.filter(r => r.category === 'free')
  const featuredRecipes = recipes.filter(r => r.featured && r.category!== 'free').slice(0, 3)

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651] hidden sm:block">Lightning in a jar! ⚡</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400 hidden sm:block">MPESA: 57031600</div>
            <Link href="/customer" className="text-sm text-[#00A651] hover:text-[#00E06D] font-bold">Customer Portal</Link>
            <Link href="/admin" className="text-sm text-gray-400 hover:text-[#00E06D] font-bold">Admin</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="text-[#00E06D]">Zap Sauce.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">14 Healing Recipes</p>
          <p className="text-lg text-[#00A651] mb-8">Traditional Wellness from Lesotho 🇱🇸</p>
          <Link href="/recipes" className="inline-block bg-[#00E06D] hover:bg-[#00C85F] text-black font-black px-8 py-3 rounded-lg text-lg">
            View All Recipes
          </Link>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-black text-[#00E06D] text-center mb-2">FREE SAMPLES</h2>
          <p className="text-gray-400 text-center mb-8">Try Zap Sauce on us. No payment needed.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {freeRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                <div className="text-xs text-[#00E06D] font-bold mb-2">FREE</div>
                <h3 className="text-xl font-bold text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>
                <div className="text-xs text-gray-500 mb-4">Prep: {recipe.time} | Serves: 1 {recipe.id === 'free-001'? 'shot' : 'cup'}</div>
                <Link href={`/recipes/${recipe.id}`} className="block w-full bg-[#00A651] hover:bg-[#00C85F] text-black text-center py-3 rounded-lg font-bold">
                  Get Free Recipe →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-black text-white text-center mb-2">FEATURED RECIPES</h2>
          <p className="text-gray-400 text-center mb-8">MPESA *200# or EFT Bank Transfer</p>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6">
                <div className="text-xs font-bold mb-2">
                  {recipe.category === 'subscription'?
                    <span className="text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded">SUBSCRIPTION</span> :
                    <span className="text-[#00E06D] bg-[#00E06D]/20 px-2 py-1 rounded">PAID</span>
                  }
                </div>
                <h3 className="text-lg font-bold text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{recipe.ingredients.slice(0, 4).join(' + ')}</p>
                <div className="text-2xl font-black text-white mb-4">M{recipe.price}</div>
                <Link href={`/recipes/${recipe.id}`} className="block w-full bg-gray-800 hover:bg-gray-700 text-white text-center py-2 rounded-lg mb-2">
                  View Recipe
                </Link>
                <button className="block w-full bg-transparent border border-[#00A651]/40 text-[#00A651] text-center py-2 rounded-lg text-sm">
                  EFT Bank Transfer
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/recipes" className="text-[#00A651] hover:text-[#00E06D] font-bold">View All 14 Recipes →</Link>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-16">
          <p>© 2026 Zap Sauce. Lightning in a jar. Product of Lesotho 🇱🇸</p>
          <p>Not medical advice. Consult your doctor. For considered families.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/admin" className="text-gray-600 hover:text-[#00A651]">Admin</Link>
            <Link href="/recipes" className="text-gray-600 hover:text-[#00A651]">Recipes</Link>
          </div>
        </div>
      </div>

      <a href="https://wa.me/26657031600?text=Hello%20Zap%20Sauce%20Support%20⚡%20I%20need%20help" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg z-50">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  )
}