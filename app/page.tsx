'use client';
import { useState } from 'react';

const HERO_URL = 'https://drive.google.com/uc?export=download&id=1NjKBExO5geHyq0GsGLwLUZfYoFQbGNAa';

const RECIPES = {
  free1: {
    name: 'FREE TEASER SHOT',
    price: 0,
    category: 'FREE',
    content: `
ZAP SAUCE TEASER:

Warm water + lemon + honey
Drink now. Feel the difference in 10 mins.

This is 5% of the power.
Want 100%? See paid recipes below.
Heal Lesotho ⚡`
  },
  free2: {
    name: 'IMMUNITY TEASER',
    price: 0,
    category: 'FREE',
    content: `
IMMUNITY TEASER SHOT:

1 clove raw garlic, crushed
1 teaspoon raw honey
1/2 teaspoon grated ginger
Mix. Swallow. Chase with water.

Tastes like fire. Works like medicine.
Full protocols below. ⚡`
  },
  monthly: {
    name: 'MONTHLY HEAL',
    price: 120,
    ussd: '*777*57031600*120#',
    category: 'GENERAL',
    content: `
MONTHLY HEAL - 28 DAY PROTOCOL:

1. Raw honey: 1 tablespoon
2. Organic turmeric: 1 teaspoon
3. Black pepper: Pinch
4. Warm water: 200ml
5. Lemon juice: Half lemon

Every morning, empty stomach, 28 days.
Reduces inflammation. Boosts energy.
ZAP SAUCE ORIGINAL ⚡

Disclaimer: Not medical advice. Consult doctor.`
  },
  gout: {
    name: 'GOUT ZAP',
    price: 120,
    ussd: '*777*57031600*120#',
    category: 'CONDITION',
    content: `
GOUT ZAP - URIC ACID FLUSH:

Morning:
Tart cherry juice: 200ml
Celery seed powder: 1/2 teaspoon
Water: 500ml

Night:
Lemon water: 500ml
Baking soda: 1/4 teaspoon
Turmeric: 1 teaspoon

Drink 3L water daily. Avoid red meat.
7 days to reduce flare. 30 days for control.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  malnutrition: {
    name: 'MALNUTRITION ZAP',
    price: 120,
    ussd: '*777*57031600*120#',
    category: 'CONDITION',
    content: `
MALNUTRITION ZAP - WEIGHT GAIN:

Base shake 3x daily:
Peanut butter: 2 tablespoons
Banana: 1
Raw honey: 1 tablespoon
Full cream milk: 250ml
Moringa powder: 1 teaspoon
Blend.

Bonus: Boiled egg + avocado daily.
Target: +2kg per month safely.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  code: {
    name: 'THE ZAP SAUCE CODE',
    price: 197,
    ussd: '*777*57031600*197#',
    category: 'PROTOCOL',
    content: `
THE 3-STEP ZAP PROTOCOL:

STEP 1: MORNING ZAP
Warm water + lemon + honey + cayenne

STEP 2: MIDDAY ZAP
Turmeric + black pepper + coconut oil

STEP 3: NIGHT ZAP
Ginger + honey + chamomile

BONUS: Emergency Zap for colds
Raw garlic + honey + lemon

This is the code. ⚡`
  },
  original: {
    name: 'ORIGINAL BLEND',
    price: 197,
    ussd: '*777*57031600*197#',
    category: 'COMMERCIAL',
    content: `
ZAP SAUCE ORIGINAL BLEND - RATIOS:

Base: 500ml raw honey
Add: 100g organic turmeric powder
Add: 20g black pepper, finely ground
Add: 10g ginger powder
Add: 5g cayenne pepper

Mix in glass jar. Shake daily.
Dose: 1 teaspoon in warm water every morning.
Shelf life: 6 months.

Scale it. Sell it. Heal Lesotho. ⚡`
  },
  tb: {
    name: 'TB SUPPORT ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    category: 'CONDITION',
    content: `
TB SUPPORT ZAP - LUNG STRENGTH:

Daily support with medication:
Garlic: 2 cloves raw, crushed
Raw honey: 2 tablespoons
Ginger: 1 tablespoon grated
Black seed oil: 1 teaspoon
Warm milk: 250ml

Steam: Eucalyptus + hot water, inhale 10 mins.

NEVER stop TB meds. This supports only.
Nutrition + medicine = Recovery.

Disclaimer: Not medical advice. Take with prescribed TB treatment. ⚡`
  },
  lupus: {
    name: 'LUPUS CALM ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    category: 'CONDITION',
    content: `
LUPUS CALM ZAP - ANTI-INFLAMMATORY:

Morning:
Turmeric: 2 teaspoons
Black pepper: Pinch
Coconut oil: 1 tablespoon
Pineapple juice: 200ml

Night:
Chamomile tea + honey
Omega-3: Flaxseed 1 tablespoon

Avoid: Sun exposure, processed food.
Track flares. Rest during flares.

Disclaimer: Not medical advice. Consult rheumatologist. ⚡`
  },
  hiv: {
    name: 'HIV IMMUNE ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    category: 'CONDITION',
    content: `
HIV IMMUNE ZAP - IMMUNE SUPPORT:

Daily with ARVs:
Moringa powder: 2 teaspoons
Baobab powder: 1 tablespoon
Raw honey: 2 tablespoons
Garlic: 1 clove
Probiotic yogurt: 250ml

Eat: Eggs, beans, green vegetables daily.

NEVER stop ARVs. This is nutrition only.
Strong body = Strong fight.

Disclaimer: Not medical advice. Take with prescribed ARVs. Consult doctor. ⚡`
  }
};

export default function Home() {
  const [showRecipe, setShowRecipe] = useState<string | null>(null);
  const [mpesaCode, setMpesaCode] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [verifyStep, setVerifyStep] = useState<string | null>(null);

  const handleFree = (key: string) => setShowRecipe(key);
  const handlePaid = (recipeKey: string) => setVerifyStep(recipeKey);

  const verifyPayment = () => {
    if (mpesaCode.length < 8 || whatsapp.length < 9) {
      alert('Enter valid WhatsApp + Mpesa code from your SMS');
      return;
    }
    setShowRecipe(verifyStep);
    setVerifyStep(null);
    setMpesaCode('');
  };

  const requestPdf = (recipeName: string, price: number) => {
    const msg = `Hi! I need PDF for ${recipeName}. Paid Mpesa: ${mpesaCode}. WhatsApp: ${whatsapp}. PDF = M197. Confirm payment?`;
    window.open(`https://wa.me/26657031600?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const freeRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price === 0);
  const paidRecipes = Object.entries(RECIPES).filter(([k,v]) => v.price > 0);

  return (
    <main className="min-h-screen bg-[#051B11] text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      {/* HERO SECTION */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img
          src={HERO_URL}
          alt="Zap Sauce Hero"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051B11] via-[#051B11]/50 to-transparent flex items-end justify-center pb-8">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-black text-[#D4AF37] mb-2 uppercase tracking-tight">
              ZAP SAUCE KIOSK ⚡
            </h1>
            <p className="text-gray-200 font-montserrat font-bold text-lg md:text-xl">
              HEAL LESOTHO. ONE RECIPE AT A TIME.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* FREE RECIPES */}
        <h2 className="text-3xl font-black text-emerald-400 mb-4 mt-8 uppercase">FREE TEASERS ⚡</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {freeRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-emerald-500">
              <h3 className="text-xl font-black text-emerald-400 mb-2">{recipe.name}</h3>
              <p className="text-gray-300 mb-4 text-sm font-montserrat">Zero data. Instant popup.</p>
              <button
                onClick={() => handleFree(key)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black p-3 rounded uppercase"
              >
                VIEW FREE
              </button>
            </div>
          ))}
        </div>

        {/* PAID RECIPES */}
        <h2 className="text-3xl font-black text-[#D4AF37] mb-4 uppercase">HEALING PROTOCOLS 💯</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paidRecipes.map(([key, recipe]) => (
            <div key={key} className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37]">
              <div className="text-xs text-gray-500 mb-1 font-montserrat uppercase">{recipe.category}</div>
              <h3 className="text-xl font-black text-[#D4AF37] mb-2">{recipe.name}</h3>
              <p className="text-3xl font-black mb-2">M{recipe.price}</p>
              <a href={`tel:${recipe.ussd}`} className="w-full bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-3 rounded uppercase text-center block mb-2">
                PAY M{recipe.price}
              </a>
              <button
                onClick={() => handlePaid(key)}
                className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-black p-3 rounded uppercase"
              >
                I PAID - SHOW
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <a href="/portal" className="text-[#D4AF37] underline font-montserrat font-bold">
            M120 Subscribers: Customer Portal →
          </a>
        </div>

        <div className="bg-red-900/20 border border-red-500 p-4 rounded mb-8">
          <p className="text-xs text-gray-300 font-montserrat text-center">
            <strong>DISCLAIMER:</strong> Zap Sauce recipes are nutritional support only. Not medical advice, diagnosis, or treatment. 
            Always consult qualified healthcare providers. Never stop prescribed medication. 
            Results vary. Heal responsibly.
          </p>
        </div>

        {/* VERIFY PAYMENT MODAL */}
        {verifyStep && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37] w-full max-w-sm">
              <h3 className="text-xl font-black text-[#D4AF37] mb-4 uppercase">UNLOCK RECIPE</h3>
              <p className="text-sm text-gray-400 mb-4 font-montserrat">
                Paid M{RECIPES[verifyStep as keyof typeof RECIPES].price}? Enter SMS details:
              </p>
              <input
                type="text"
                placeholder="Your WhatsApp: 266..."
                className="w-full p-3 mb-3 bg-[#051B11] rounded border border-[#1B4332] text-white"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mpesa Code: QK..."
                className="w-full p-3 mb-4 bg-[#051B11] rounded border border-[#1B4332] text-white"
                value={mpesaCode}
                onChange={e => setMpesaCode(e.target.value)}
              />
              <button
                onClick={verifyPayment}
                className="w-full bg-[#D4AF37] text-[#051B11] font-black p-3 rounded uppercase mb-2"
              >
                SHOW RECIPE
              </button>
              <button
                onClick={() => setVerifyStep(null)}
                className="w-full bg-gray-600 text-white font-black p-3 rounded uppercase"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        {/* RECIPE POPUP MODAL */}
        {showRecipe && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-[#0A2E1D] p-6 rounded-lg border-2 border-[#D4AF37] w-full max-w-lg my-8">
              <h3 className="text-2xl font-black text-[#D4AF37] mb-4 uppercase">
                {RECIPES[showRecipe as keyof typeof RECIPES].name} ⚡
              </h3>
              <pre className="text-gray-200 whitespace-pre-wrap font-montserrat text-sm leading-relaxed mb-6">
                {RECIPES[showRecipe as keyof typeof RECIPES].content}
              </pre>
              {RECIPES[showRecipe as keyof typeof RECIPES].price > 0 && (
                <button
                  onClick={() => requestPdf(RECIPES[showRecipe as keyof typeof RECIPES].name, RECIPES[showRecipe as keyof typeof RECIPES].price)}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black p-3 rounded uppercase mb-2"
                >
                  WANT PDF? M197 VIA WHATSAPP 📄
                </button>
              )}
              <button
                onClick={() => setShowRecipe(null)}
                className="w-full bg-[#D4AF37] text-[#051B11] font-black p-3 rounded uppercase"
              >
                CLOSE RECIPE
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center font-montserrat">
                Screenshot this. PDF = M197 extra via WhatsApp.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}