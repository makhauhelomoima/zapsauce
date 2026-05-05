'use client';
import { useState } from 'react';
import { HERO_URL, RECIPES } from '../recipes';
import Link from 'next/link';

export default function RecipesPage() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);
  const [mpesaCode, setMpesaCode] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [verifyStep, setVerifyStep] = useState<string | null>(null);

  const paidRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price > 0);

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

  const requestPdf = (recipeName: string) => {
    const msg = `Hi! I need PDF for ${recipeName}. WhatsApp: ${whatsapp}. PDF = M197. Please confirm payment details.`;
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#051B11] text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      {/* HEADER */}
      <header className="bg-[#0A2E1D]/95 backdrop-blur-sm border-b-2 border-[#D4AF37] p-4 sticky top-0 z-40 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-black text-[#D4AF37]">ZAP SAUCE ⚡</Link>
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

      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto p-4 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="text-[#D4AF37] hover:text-[#F4B400] font-montserrat mb-6 inline-block text-lg">← Back to Home</Link>
          <h2 className="text-5xl md:text-7xl font-black text-[#D4AF37] mb-4">ALL RECIPES</h2>
          <p className="text-2xl text-gray-300 font-montserrat">What hurts? We have a recipe for that.</p>
          <p className="text-lg text-gray-400 mt-2 font-montserrat">11+ Healing Protocols | M120 & M197 | Instant USSD Unlock</p>
        </div>

        {/* PRODUCTS GRID - BIG CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {paidRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] rounded-2xl border-3 border-[#1B4332] shadow-2xl p-8 flex flex-col min-h-">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-400 uppercase font-montserrat">{recipe.category}</div>
                {recipe.badge && (
                  <div className={`text-sm font-black px-4 py-2 rounded-lg ${recipe.badge === 'AUTO'? 'bg-[#D4AF37] text-[#051B11]' : 'bg-orange-600 text-white'}`}>
                    {recipe.badge}
                  </div>
                )}
              </div>

              <h3 className="text-4xl font-black mb-2 text-[#D4AF37]">{recipe.name}</h3>
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

              <div className="flex justify-between items-end mt-auto pt-6 border-t-2 border-[#1B4332]">
                <div>
                  <p className="text-5xl font-black text-white">M{recipe.price}</p>
                  <p className="text-xs text-gray-500 font-montserrat">Mpesa instant • EFT manual unlock</p>
                </div>
                {recipe.badge === 'AUTO'? (
                  <button
                    onClick={() => openDialer(recipe.ussd)}
                    className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-8 py-4 rounded-xl uppercase text-lg shadow-xl transition-all hover:scale-105"
                  >
                    SUBSCRIBE 🔔
                  </button>
                ) : (
                  <button
                    onClick={() => openDialer(recipe.ussd)}
                    className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-black px-8 py-4 rounded-xl uppercase text-lg shadow-xl transition-all hover:scale-105 flex items-center gap-2"
                  >
                    MPESA 🔒
                  </button>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xs text-gray-500 font-montserrat">
                  Outside Lesotho? EFT → {recipe.eft}
                </p>
                <button
                  onClick={() => requestPdf(recipe.name)}
                  className="text-[#25D366] hover:text-[#20BA5A] font-black text-sm underline font-montserrat"
                >
                  PDF M197 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const msg = `Hi! I need ALL PDF Recipes. WhatsApp: 266... PDF = M197 each or bundle. Please confirm.`;
              window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank');
            }}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-black px-12 py-6 rounded-xl uppercase text-2xl md:text-3xl tracking-wider shadow-2xl transition-all duration-200 hover:scale-105 border-4 border-white/20"
          >
            REQUEST ALL PDF RECIPES M197 📄
          </button>
          <p className="text-base text-gray-400 mt-6 font-montserrat">
            WhatsApp delivery • All protocols • Same day
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-red-900/20 border-2 border-red-500 p-6 rounded-xl mt-16">
          <p className="text-sm text-gray-300 font-montserrat text-center leading-relaxed">
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
          <div className="bg-[#0A2E1D] p-8 rounded-2xl border-3 border-[#D4AF37] w-full max-w-lg my-8">
            <h3 className="text-4xl font-black text-[#D4AF37] mb-6 uppercase">
              {RECIPES[showRecipe].name} ⚡
            </h3>
            <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-base leading-relaxed mb-8">
              {RECIPES[showRecipe].content}
            </pre>
            <button
              onClick={() => setShowRecipe(null)}
              className="w-full bg-[#D4AF37] text-[#051B11] font-black p-5 rounded-xl uppercase text-xl"
            >
              CLOSE RECIPE
            </button>
            <p className="text-sm text-gray-500 mt-6 text-center font-montserrat">
              Screenshot to save. PDF = M197 via WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* PAYMENT VERIFY */}
      {verifyStep && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-[#0A2E1D] p-8 rounded-2xl border-3 border-[#D4AF37] w-full max-w-md">
            <h3 className="text-2xl font-black text-[#D4AF37] mb-4 uppercase">UNLOCK RECIPE</h3>
            <p className="text-base text-gray-400 mb-6 font-montserrat">
              Paid M{RECIPES[verifyStep].price}? Enter SMS details:
            </p>
            <input type="text" placeholder="Your WhatsApp: 266..." className="w-full p-4 mb-4 bg-[#051B11] rounded-lg border-2 border-[#1B4332] text-white text-lg" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
            <input type="text" placeholder="Mpesa Code: QK..." className="w-full p-4 mb-6 bg-[#051B11] rounded-lg border-2 border-[#1B4332] text-white text-lg" value={mpesaCode} onChange={e => setMpesaCode(e.target.value)} />
            <button onClick={verifyPayment} className="w-full bg-[#D4AF37] text-[#051B11] font-black p-4 rounded-xl uppercase text-lg mb-3">
              SHOW RECIPE
            </button>
            <button onClick={() => setVerifyStep(null)} className="w-full bg-gray-600 text-white font-black p-4 rounded-xl uppercase text-lg">
              CANCEL
            </button>
          </div>
        </div>
      )}
    </main>
  );
}