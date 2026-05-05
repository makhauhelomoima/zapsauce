'use client';
import { useState } from 'react';
import { HERO_URL, RECIPES } from './recipes';
import Link from 'next/link';

export default function Home() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);

  const freeRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price === 0).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#051B11] text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      {/* HEADER */}
      <header className="bg-[#0A2E1D]/95 backdrop-blur-sm border-b-2 border-[#D4AF37] p-4 sticky top-0 z-40 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-black text-[#D4AF37]">ZAP SAUCE ⚡</h1>
          <div className="flex gap-3">
            <a href="/portal" className="bg-[#D4AF37] hover:bg-[#F4B400] active:bg-[#B8860B] text-[#051B11] font-black px-6 py-3 md:px-8 md:py-3 rounded-lg text-sm md:text-base uppercase shadow-lg transition-all duration-200 hover:scale-105">
              SUBSCRIPTIONS
            </a>
            <a href="/admin" className="bg-transparent hover:bg-[#1B4332] text-[#D4AF37] font-black px-4 py-3 rounded-lg text-xs md:text-sm uppercase border-2 border-[#D4AF37] shadow-lg transition-all duration-200">
              ADMIN
            </a>
          </div>
        </div>
      </header>

      {/* HERO BEHIND TEXT */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={HERO_URL}
          alt="Zap Sauce"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051B11]/70 via-[#051B11]/50 to-[#051B11]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl md:text-9xl font-black text-[#D4AF37] mb-4 uppercase tracking-tight drop-shadow-2xl">
            ZAP SAUCE
          </h2>
          <p className="text-2xl md:text-5xl font-black text-white font-montserrat drop-shadow-2xl mb-6">
            'Immunity in a jar!'
          </p>
          <p className="text-lg text-gray-200 font-montserrat drop-shadow-lg mb-8">
            Product of Lesotho 🇱🇸 | By Makhauhelo Moima
          </p>
          <Link
            href="/recipes"
            className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-8 py-4 rounded-lg uppercase text-xl tracking-wider shadow-2xl transition-all duration-200 hover:scale-105"
          >
            EXPLORE ALL RECIPES ↓
          </Link>
        </div>
      </div>

      {/* 2 TASTERS ONLY */}
      <div className="max-w-4xl mx-auto p-4 py-12" id="teasers">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-emerald-400 mb-3">START FREE ⚡</h2>
          <p className="text-xl text-gray-300 font-montserrat">Taste the power. No payment needed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {freeRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] rounded-xl border-2 border-emerald-500 shadow-2xl p-6 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div className="text-xs text-gray-400 uppercase font-montserrat">{recipe.category}</div>
                <div className="text-xs font-black px-3 py-1 rounded bg-emerald-500 text-white">FREE</div>
              </div>

              <h3 className="text-3xl font-black mb-1 text-emerald-400">{recipe.name}</h3>
              <p className="text-gray-400 text-sm mb-4 font-montserrat">{recipe.subtitle}</p>

              <div className="mb-4">
                <p className="text-xs text-[#D4AF37] font-black mb-2 uppercase">CURES:</p>
                <ul className="space-y-1">
                  {recipe.cures.map((cure, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start font-montserrat">
                      <span className="text-emerald-500 mr-2">✓</span>
                      {cure}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-gray-400 mb-6 font-montserrat leading-relaxed flex-grow">
                {recipe.description}
              </p>

              <button
                onClick={() => setShowRecipe(key)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-lg uppercase text-lg shadow-lg transition-all"
              >
                GET FREE 🔓
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/recipes"
            className="inline-block bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-10 py-5 rounded-lg uppercase text-xl tracking-wider shadow-2xl transition-all duration-200 hover:scale-105"
          >
            VIEW ALL RECIPES 📋
          </Link>
          <p className="text-sm text-gray-400 mt-4 font-montserrat">
            11+ Healing Protocols | M120 & M197 | Instant USSD Unlock
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg mt-12">
          <p className="text-xs text-gray-300 font-montserrat text-center">
            <strong>DISCLAIMER:</strong> Zap Sauce recipes are nutritional support only. Not medical advice, diagnosis, or treatment.
            Always consult qualified healthcare providers. Never stop prescribed medication.
            Results vary. Heal responsibly.
          </p>
        </div>
      </div>

      {/* RECIPE POPUP */}
      {showRecipe && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-[#0A2E1D] p-6 rounded-xl border-2 border-emerald-500 w-full max-w-lg my-8">
            <h3 className="text-3xl font-black text-emerald-400 mb-4 uppercase">
              {RECIPES[showRecipe].name} ⚡
            </h3>
            <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-sm leading-relaxed mb-6">
              {RECIPES[showRecipe].content}
            </pre>
            <button
              onClick={() => setShowRecipe(null)}
              className="w-full bg-emerald-600 text-white font-black p-4 rounded-lg uppercase text-lg"
            >
              CLOSE RECIPE
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center font-montserrat">
              Screenshot to save. Want more? Explore all recipes.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}