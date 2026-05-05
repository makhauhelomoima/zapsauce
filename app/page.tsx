'use client';
import { useState } from 'react';
import { HERO_URL, RECIPES } from './recipes';

export default function Home() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);
  const [mpesaCode, setMpesaCode] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [verifyStep, setVerifyStep] = useState<string | null>(null);
  const [showExplore, setShowExplore] = useState(false);

  const handlePaid = (recipeKey: string) => {
    setVerifyStep(recipeKey);
  };

  const verifyPayment = () => {
    if (mpesaCode.length < 8 || whatsapp.length < 9) {
      alert('Enter valid WhatsApp + Mpesa code from your SMS');
      return;
    }
    setShowRecipe(verifyStep);
    setVerifyStep(null);
    setMpesaCode('');
  };

  const openDialer = (ussd: string) => {
    window.location.href = `tel:${ussd}`;
  };

  const recipes = Object.entries(RECIPES);

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
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-3">What hurts? We have a recipe for that.</h2>
          <p className="text-xl text-gray-300 font-montserrat">Sweet + Savory Healing. Start free. Lesotho → World 🌍</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {recipes.map(([key, recipe]) => (
            <div key={key} className={`bg-[#0A2E1D] rounded-xl border-2 ${recipe.price === 0? 'border-emerald-500' : 'border-[#1B4332]'} shadow-2xl p-6 flex flex-col`}>
              {/* HEADER */}
              <div className="flex justify-between items-start mb-3">
                <div className="text-xs text-gray-400 uppercase font-montserrat">{recipe.category}</div>
                {recipe.badge && (
                  <div className={`text-xs font-black px-3 py-1 rounded ${recipe.badge === 'FREE'? 'bg-emerald-500 text-white' : recipe.badge === 'AUTO'? 'bg-[#D4AF37] text-[#051B11]' : 'bg-orange-600 text-white'}`}>
                    {recipe.badge}
                  </div>
                )}
              </div>

              {/* TITLE */}
              <h3 className={`text-3xl font-black mb-1 ${recipe.price === 0? 'text-emerald-400' : 'text-[#D4AF37]'}`}>
                {recipe.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 font-montserrat">{recipe.subtitle}</p>

              {/* CURES */}
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

              {/* DESCRIPTION */}
              <p className="text-xs text-gray-400 mb-6 font-montserrat leading-relaxed flex-grow">
                {recipe.description}
              </p>

              {/* PRICE + BUTTON */}
              <div className="flex justify-between items-end mt-auto pt-4 border-t border-[#1B4332]">
                <div>
                  <p className="text-4xl font-black text-white">{recipe.price === 0? 'FREE' : `M${recipe.price}`}</p>
                  {recipe.price > 0 && (
                    <p className="text-xs text-gray-500 font-montserrat">Mpesa instant • EFT manual unlock</p>
                  )}
                </div>
                {recipe.price === 0? (
                  <button
                    onClick={() => setShowRecipe(key)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3 rounded-lg uppercase shadow-lg transition-all"
                  >
                    GET FREE 🔓
                  </button>
                ) : recipe.badge === 'AUTO'? (
                  <button
                    onClick={() => openDialer(recipe.ussd)}
                    className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-6 py-3 rounded-lg uppercase shadow-lg transition-all"
                  >
                    SUBSCRIBE 🔔
                  </button>
                ) : (
                  <button
                    onClick={() => openDialer(recipe.ussd)}
                    className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-black px-6 py-3 rounded-lg uppercase shadow-lg transition-all flex items-center gap-2"
                  >
                    MPESA 🔒
                  </button>
                )}
              </div>
              {recipe.price > 0 && (
                <p className="text-xs text-gray-500 mt-2 text-center font-montserrat">
                  Outside Lesotho? EFT → {recipe.eft}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="bg-red-900/20 border border-red-500 p-4 rounded-lg mt-12">
          <p className="text-xs text-gray-300 font-montserrat text-center">
            <strong>DISCLAIMER:</strong> Zap Sauce recipes are nutritional support only. Not medical advice, diagnosis, or treatment.
            Always consult qualified healthcare providers. Never stop prescribed medication.
            For TB, HIV, Lupus: Use ONLY alongside medical treatment.
            Results vary. Heal responsibly.
          </p>
        </div>
      </div>

      {/* RECIPE POPUP */}
      {showRecipe && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-[#0A2E1D] p-6 rounded-xl border-2 border-[#D4AF37] w-full max-w-lg my-8">
            <h3 className="text-3xl font-black text-[#D4AF37] mb-4 uppercase">
              {RECIPES[showRecipe].name} ⚡
            </h3>
            <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-sm leading-relaxed mb-6">
              {RECIPES[showRecipe].content}
            </pre>
            <button
              onClick={() => setShowRecipe(null)}
              className="w-full bg-[#D4AF37] text-[#051B11] font-black p-4 rounded-lg uppercase text-lg"
            >
              CLOSE RECIPE
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center font-montserrat">
              Screenshot to save. Pay to unlock full protocols.
            </p>
          </div>
        </div>
      )}

      {/* PAYMENT VERIFY */}
      {verifyStep && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0A2E1D] p-6 rounded-xl border-2 border-[#D4AF37] w-full max-w-sm">
            <h3 className="text-xl font-black text-[#D4AF37] mb-4 uppercase">UNLOCK RECIPE</h3>
            <p className="text-sm text-gray-400 mb-4 font-montserrat">
              Paid M{RECIPES[verifyStep].price}? Enter SMS details:
            </p>
            <input type="text" placeholder="Your WhatsApp: 266..." className="w-full p-3 mb-3 bg-[#051B11] rounded border border-[#1B4332] text-white" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
            <input type="text" placeholder="Mpesa Code: QK..." className="w-full p-3 mb-4 bg-[#051B11] rounded border border-[#1B4332] text-white" value={mpesaCode} onChange={e => setMpesaCode(e.target.value)} />
            <button onClick={verifyPayment} className="w-full bg-[#D4AF37] text-[#051B11] font-black p-3 rounded uppercase mb-2">
              SHOW RECIPE
            </button>
            <button onClick={() => setVerifyStep(null)} className="w-full bg-gray-600 text-white font-black p-3 rounded uppercase">
              CANCEL
            </button>
          </div>
        </div>
      )}
    </main>
  );
}