'use client';
import { useState } from 'react';
import { HERO_URL, RECIPES } from './recipes';

export default function Home() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);
  const [mpesaCode, setMpesaCode] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [verifyStep, setVerifyStep] = useState<string | null>(null);
  const [showExplore, setShowExplore] = useState(false);
  const [showPdfMenu, setShowPdfMenu] = useState(false);

  const handleFree = (key: string) => setShowRecipe(key);
  const handlePaid = (recipeKey: string) => {
    setVerifyStep(recipeKey);
    setShowExplore(false);
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

  const requestPdf = (recipeName: string) => {
    const msg = `Hi! I need PDF for ${recipeName}. WhatsApp: ${whatsapp}. PDF = M197. Please confirm payment details.`;
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank');
    setShowPdfMenu(false);
  };

  const freeRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price === 0);
  const paidRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price > 0);

  return (
    <main className="min-h-screen bg-[#051B11] text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      {/* HEADER NAV - GOLD PORTAL */}
      <header className="bg-[#0A2E1D]/95 backdrop-blur-sm border-b-2 border-[#D4AF37] p-4 sticky top-0 z-40 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-black text-[#D4AF37]">ZAP SAUCE ⚡</h1>
          <div className="flex gap-3">
            <a href="/portal" className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-6 py-3 rounded-lg text-sm md:text-base uppercase shadow-lg">
              PORTAL
            </a>
            <a href="/admin" className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-black px-6 py-3 rounded-lg text-sm md:text-base uppercase border-2 border-[#D4AF37] shadow-lg">
              ADMIN
            </a>
          </div>
        </div>
      </header>

      {/* HERO BEHIND TEXT - FULL SCREEN FIRE */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={HERO_URL}
          alt="Zap Sauce"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051B11]/70 via-[#051B11]/50 to-[#051B11]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-6xl md:text-9xl font-black text-[#D4AF37] mb-4 uppercase tracking-tight drop-shadow-2xl animate-pulse">
            ZAP SAUCE
          </h2>
          <p className="text-3xl md:text-5xl font-black text-white font-montserrat drop-shadow-2xl mb-6">
            'Immunity in a jar!'
          </p>
          <p className="text-xl text-gray-200 font-montserrat drop-shadow-lg mb-8">
            Product of Lesotho 🇱🇸 | By Makhauhelo Moima
          </p>
          <button
            onClick={() => document.getElementById('teasers')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-8 py-4 rounded-lg uppercase text-xl tracking-wider shadow-2xl animate-bounce"
          >
            START HEALING ↓
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4" id="teasers">
        {/* TEASERS */}
        <h2 className="text-3xl font-black text-emerald-400 mb-4 mt-12 uppercase">FREE TEASERS ⚡</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {freeRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-emerald-500 shadow-2xl">
              <h3 className="text-xl font-black text-emerald-400 mb-3">{recipe.name}</h3>
              <button onClick={() => handleFree(key)} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black p-4 rounded uppercase tracking-wider">
                VIEW FREE
              </button>
            </div>
          ))}
        </div>

        {/* MONEY BUTTONS */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button onClick={() => setShowExplore(true)} className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-6 rounded-lg uppercase text-xl tracking-wider shadow-2xl">
            EXPLORE RECIPES 📋
          </button>
          <button onClick={() => setShowPdfMenu(true)} className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-black p-6 rounded-lg uppercase text-xl tracking-wider shadow-2xl border-2 border-[#D4AF37]">
            REQUEST PDF 📄 M197
          </button>
        </div>

        {/* TRUST BAR */}
        <div className="bg-gradient-to-r from-[#0A2E1D] to-[#1B4332] p-6 rounded-lg border-2 border-[#D4AF37] mb-8 text-center shadow-2xl">
          <p className="text-[#D4AF37] font-black font-montserrat text-lg">
            M120 = 28 Days Healing | M197 = Full Protocols | 0MB Data Popups
          </p>
        </div>

        {showExplore && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37] w-full max-w-2xl my-8">
              <h3 className="text-3xl font-black text-[#D4AF37] mb-6 uppercase text-center">RECIPE DESCRIPTIONS</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {paidRecipes.map(([key, recipe]) => (
                  <div key={key} className="bg-[#051B11] p-4 rounded border border-[#1B4332]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-black text-[#D4AF37]">{recipe.name}</h4>
                      <p className="text-2xl font-black">M{recipe.price}</p>
                    </div>
                    {'ussd' in recipe && <p className="text-sm text-gray-400 mb-3 font-montserrat">USSD: {recipe.ussd} | {recipe.eft}</p>}
                    <button onClick={() => handlePaid(key)} className="w-full bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-3 rounded uppercase">
                      I PAID - UNLOCK RECIPE
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowExplore(false)} className="w-full bg-gray-600 text-white font-black p-3 rounded uppercase mt-6">
                CLOSE
              </button>
            </div>
          </div>
        )}

        {showPdfMenu && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#25D366] w-full max-w-2xl my-8">
              <h3 className="text-3xl font-black text-[#25D366] mb-2 uppercase text-center">REQUEST PDF</h3>
              <p className="text-center text-gray-400 mb-6 font-montserrat">M197 Universal Price | WhatsApp Delivery</p>
              <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                {paidRecipes.map(([key, recipe]) => (
                  <button key={key} onClick={() => requestPdf(recipe.name)} className="bg-[#051B11] hover:bg-[#1B4332] p-4 rounded border border-[#25D366] text-left transition-colors">
                    <p className="font-black text-[#D4AF37]">{recipe.name}</p>
                    <p className="text-xs text-gray-500">M197 PDF</p>
                  </button>
                ))}
              </div>
              <button onClick={() => setShowPdfMenu(false)} className="w-full bg-gray-600 text-white font-black p-3 rounded uppercase mt-6">
                CLOSE
              </button>
            </div>
          </div>
        )}

        {verifyStep && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37] w-full max-w-sm">
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

        {showRecipe && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37] w-full max-w-lg my-8">
              <h3 className="text-2xl font-black text-[#D4AF37] mb-4 uppercase">
                {RECIPES[showRecipe].name} ⚡
              </h3>
              <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-sm leading-relaxed mb-6">
                {RECIPES[showRecipe].content}
              </pre>
              <button onClick={() => setShowRecipe(null)} className="w-full bg-[#D4AF37] text-[#051B11] font-black p-3 rounded uppercase">
                CLOSE RECIPE
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center font-montserrat">
                Screenshot to save. Need PDF? Use "REQUEST PDF" button.
              </p>
            </div>
          </div>
        )}

        <div className="bg-red-900/20 border border-red-500 p-4 rounded mb-8 mt-8">
          <p className="text-xs text-gray-300 font-montserrat text-center">
            <strong>DISCLAIMER:</strong> Zap Sauce recipes are nutritional support only. Not medical advice, diagnosis, or treatment.
            Always consult qualified healthcare providers. Never stop prescribed medication.
            For TB, HIV, Lupus: Use ONLY alongside medical treatment.
            Results vary. Heal responsibly.
          </p>
        </div>
      </div>
    </main>
  );
}