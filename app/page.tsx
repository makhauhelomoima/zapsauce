'use client';
import { useState } from 'react';
import { HERO_URL, RECIPES } from './recipes';
import Link from 'next/link';

export default function Home() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);

  const freeRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price === 0).slice(0, 2);

  const requestPdf = () => {
    const msg = `Hi! I need PDF Recipes. WhatsApp: 266... PDF = M197. Please send payment details + all recipe names.`;
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank');
  };

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

      {/* HERO */}
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
            className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-10 py-5 rounded-lg uppercase text-2xl tracking-wider shadow-2xl transition-all duration-200 hover:scale-105"
          >
            EXPLORE ALL RECIPES ↓
          </Link>
        </div>
      </div>

      {/* 2 TASTERS - BIGGER CARDS */}
      <div className="max-w-5xl mx-auto p-4 py-16" id="teasers">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-emerald-400 mb-4">START FREE ⚡</h2>
          <p className="text-2xl text-gray-300 font-montserrat">Taste the power. No payment needed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {freeRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] rounded-2xl border-3 border-emerald-500 shadow-2xl p-8 flex flex-col min-h-">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-400 uppercase font-montserrat">{recipe.category}</div>
                <div className="text-sm font-black px-4 py-2 rounded-lg bg-emerald-500 text-white">FREE</div>
              </div>

              <h3 className="text-4xl font-black mb-2 text-emerald-400">{recipe.name}</h3>
              <p className="text-gray-400 text-lg mb-6 font-montserrat">{recipe.subtitle}</p>

              <div className="mb-6">
                <p className="text-sm text-[#D4AF37] font-black mb-3 uppercase">CURES:</p>
                <ul className="space-y-2">
                  {recipe.cures.map((cure, idx) => (
                    <li key={idx} className="text-base text-gray-300 flex items-start font-montserrat">
                      <span className="text-emerald-500 mr-3 text-xl">✓</span>
                      {cure}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-400 mb-8 font-montserrat leading-relaxed flex-grow">
                {recipe.description}
              </p>

              <button
                onClick={() => setShowRecipe(key)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-xl uppercase text-xl shadow-xl transition-all hover:scale-105"
              >
                GET FREE 🔓
              </button>
            </div>
          ))}
        </div>

        {/* GIANT PDF BUTTON */}
        <div className="text-center">
          <button
            onClick={requestPdf}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-black px-12 py-6 rounded-xl uppercase text-2xl md:text-3xl tracking-wider shadow-2xl transition-all duration-200 hover:scale-105 border-4 border-white/20"
          >
            REQUEST PDF RECIPES M197 📄
          </button>
          <p className="text-base text-gray-400 mt-6 font-montserrat">
            WhatsApp delivery • All 11+ protocols • Same day
          </p>
          <Link
            href="/recipes"
            className="inline-block text-[#D4AF37] hover:text-[#F4B400] font-montserrat text-lg mt-4 underline"
          >
            Or view all recipes online →
          </Link>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl mt-16">
          <p className="text-sm text-gray-300 font-montserrat text-center leading-relaxed">
            <strong>DISCLAIMER:</strong> Zap Sauce recipes are nutritional support only. Not medical advice, diagnosis, or treatment.
            Always consult qualified healthcare providers. Never stop prescribed medication.
            Results vary. Heal responsibly.
          </p>
        </div>
      </div>

      {/* RECIPE POPUP */}
      {showRecipe && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-[#0A2E1D] p-8 rounded-2xl border-3 border-emerald-500 w-full max-w-lg my-8">
            <h3 className="text-4xl font-black text-emerald-400 mb-6 uppercase">
              {RECIPES[showRecipe].name} ⚡
            </h3>
            <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-base leading-relaxed mb-8">
              {RECIPES[showRecipe].content}
            </pre>
            <button
              onClick={() => setShowRecipe(null)}
              className="w-full bg-emerald-600 text-white font-black p-5 rounded-xl uppercase text-xl"
            >
              CLOSE RECIPE
            </button>
            <p className="text-sm text-gray-500 mt-6 text-center font-montserrat">
              Screenshot to save. Want more? Request PDF M197.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}