'use client'

import { useState } from 'react'
import Link from 'next/link'
import { recipes, packages } from '../data/recipes'

export default function HomePage() {
  const [freeModal, setFreeModal] = useState<string | null>(null)

  // Free samples
  const freeSamples = [
    {
      id: 'morning-shot',
      name: 'MORNING SHOT',
      subtitle: 'Your first taste of lightning',
      desc: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
      fullRecipe: 'Mix: 1 tsp Ginger juice + 1 tsp Lemon + Pinch Cayenne + 1 tbsp Honey. Shot it!'
    },
    {
      id: 'immunity-teaser',
      name: 'IMMUNITY TEASER',
      subtitle: 'Second free sample',
      desc: 'Soothing immunity tea. Feel the warmth spread through chest.',
      fullRecipe: 'Steep: 1 tsp Turmeric + Black pepper + 1 cup Hot water + Honey. Sip slow.'
    }
  ]

  // Main products - horizontal row
  const mainRow = [
    recipes.find(r => r.id === 'tangy-fusion'), // TANGY FUSION
    packages['monthly-heal'], // MONTHLY HEAL
    packages['franchise-kit'] // FRANCHISE KIT
  ].filter(Boolean)

  const otherRecipes = recipes.filter(r => r.id!== 'tangy-fusion').slice(0, 2)

  const handleWhatsApp = (productName: string) => {
    const msg = `Hi! I want to order: ${productName} from Zap Sauce. Please send payment details.`
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      {/* Header */}
      <div className="bg-black border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00A651]">Zap Sauce.</span>
            <span className="text-sm text-[#00E06D]" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              *Zap Sauce.*
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/admin" className="text-sm text-gray-400 hover:text-[#00A651]">Admin</Link>
            <a href="https://wa.me/26657031600" className="text-sm text-[#00E06D] font-bold">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* HERO - REMOVED GREEN MARKED SECTIONS */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-black text-[#00A651] mb-8">Lightning in a jar! ⚡</h1>
      </div>

      {/* FREE SAMPLES - BIGGER TEXT + MODAL */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-black text-[#00A651] text-center mb-6">FREE SAMPLES</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {freeSamples.map((sample) => (
            <div key={sample.id} className="bg-gray-900 border border-[#00E06D]/50 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-[#00E06D]">{sample.name}</h3>
                <span className="bg-[#00A651] text-black text-xs font-black px-3 py-1 rounded-full">FREE</span>
              </div>
              <p className="text-gray-300 text-base mb-2">{sample.subtitle}</p>
              <p className="text-gray-400 text-sm mb-4">{sample.desc}</p>
              <button
                onClick={() => setFreeModal(sample.id)}
                className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg hover:bg-[#00E06D] transition text-lg"
              >
                Get Free Recipe →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN HORIZONTAL ROW: TANGY → MONTHLY → FRANCHISE */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {mainRow.map((item: any) => (
            <div key={item.id} className="bg-gray-900 border border-[#00A651]/40 rounded-xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-[#00E06D]">{item.name}</h3>
                {item.id === 'franchise-kit' && (
                  <span className="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full">GLOBAL</span>
                )}
                {item.id === 'monthly-heal' && (
                  <span className="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-full">POPULAR</span>
                )}
              </div>
              <p className="text-3xl font-black text-white mb-4">M{item.price}{item.id === 'monthly-heal'? '/mo' : ''}</p>
              <p className="text-gray-300 text-sm mb-4">{item.description || item.subtitle}</p>

              {/* ONLY PACKAGES TRIGGER WHATSAPP */}
              {item.id.includes('kit') || item.id.includes('heal') || item.id.includes('vault')? (
                <button
                  onClick={() => handleWhatsApp(item.name)}
                  className="w-full bg-yellow-500 text-black font-black py-3 rounded-lg hover:bg-yellow-400 transition"
                >
                  Order via WhatsApp
                </button>
              ) : (
                <Link href={`/recipes/${item.id}`}>
                  <button className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg hover:bg-[#00E06D] transition">
                    View Recipe
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* OTHER RECIPES */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-black text-white text-center mb-6">MORE RECIPES</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-900 border border-[#00A651]/30 rounded-xl p-6">
              <h3 className="text-xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
              <p className="text-2xl font-black text-white mb-4">M{recipe.price}</p>
              <Link href={`/recipes/${recipe.id}`}>
                <button className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg hover:bg-[#00E06D] transition">
                  View Recipe
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FREE RECIPE MODAL */}
      {freeModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setFreeModal(null)}>
          <div className="bg-gray-900 border border-[#00A651] rounded-xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-black text-[#00E06D] mb-4">
              {freeSamples.find(f => f.id === freeModal)?.name}
            </h3>
            <p className="text-white text-lg mb-6">
              {freeSamples.find(f => f.id === freeModal)?.fullRecipe}
            </p>
            <button
              onClick={() => setFreeModal(null)}
              className="w-full bg-[#00A651] text-black font-black py-3 rounded-lg"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-gray-500">
          <p>© 2026 Zap Sauce. Traditional wellness. Product of Lesotho 🇱🇸</p>
          <p className="mt-1">Not medical advice. Consult your doctor. For considered families.</p>
        </div>
      </footer>
    </div>
  )
}