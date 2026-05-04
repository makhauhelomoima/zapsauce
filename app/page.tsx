'use client';
import { useState } from 'react';

export default function Home() {
  const [showFree, setShowFree] = useState(false);

  const products = [
    {
      id: 'free',
      name: 'FREE SAMPLE',
      subtitle: 'Turmeric Starter',
      price: 0,
      cures: [
        'First-time inflammation test',
        'Morning energy boost',
        'Beginner-friendly intro',
        'Taste before you invest'
      ],
      teaser: 'Proof it works. Simple 3-ingredient version. No payment needed. Tap to unlock instantly.',
      free: true,
      ingredients: [
        'Raw honey 1 tbsp',
        'Organic turmeric powder 1/2 tsp', 
        'Warm water 200ml'
      ],
      prep: [
        'Heat water to warm, not boiling',
        'Stir in turmeric until dissolved',
        'Add honey, mix well',
        'Drink on empty stomach each morning'
      ],
      tips: 'Try this 7 days. If you feel less stiff, upgrade to ORIGINAL for 10x power. This free version = 5% potency. Paid recipes = 100%.'
    },
    {
      id: 'original',
      name: 'ORIGINAL',
      subtitle: 'Turmeric Gold',
      price: 120,
      ussd: '*200*1*1*57031600*120#',
      cures: [
        'Chronic inflammation',
        'Joint stiffness & arthritis pain',
        'Low immunity & frequent colds',
        'Digestive bloating'
      ],
      teaser: 'The classic. 4,000 years of Ayurvedic relief. M120 unlocks full recipe + dosage.'
    },
    {
      id: 'citrus',
      name: 'CITRUS',
      subtitle: 'Lemon Zest',
      price: 120,
      ussd: '*200*1*1*57031600*120#',
      cures: [
        'Vitamin C deficiency',
        'Seasonal flu & congestion',
        'Sluggish metabolism',
        'Skin breakouts from toxins'
      ],
      teaser: 'Immunity in a jar. Citrus fire meets turmeric gold. M120 for complete formula.'
    },
    {
      id: 'warrior',
      name: 'WARRIOR PRO',
      subtitle: 'Black Pepper Boost',
      price: 140,
      ussd: '*200*1*1*57031600*140#',
      cures: [
        'Poor nutrient absorption',
        'Post-workout inflammation',
        'Brain fog & low focus',
        'Chronic fatigue'
      ],
      teaser: '2000% absorption. For fighters. M140 unlocks warrior-grade ratios + timing.'
    },
    {
      id: 'queen',
      name: 'QUEEN',
      subtitle: 'Cinnamon Royal',
      price: 130,
      ussd: '*200*1*1*57031600*130#',
      cures: [
        'Blood sugar spikes',
        'Hormonal imbalance',
        'PMS & menstrual cramps',
        'Sugar cravings'
      ],
      teaser: 'Regal relief. Balances body. M130 reveals royal ratios + evening ritual.'
    },
    {
      id: 'bone',
      name: 'BONE',
      subtitle: 'Ginger Joint',
      price: 130,
      ussd: '*200*1*1*57031600*130#',
      cures: [
        'Knee & hip joint pain',
        'Morning stiffness',
        'Rheumatoid arthritis flare-ups',
        'Limited mobility'
      ],
      teaser: 'Mobility in a spoon. Ginger + turmeric synergy. M130 unlocks 30-day protocol.'
    },
    {
      id: 'pack',
      name: 'ROYAL PACK',
      subtitle: 'All 5 Recipes',
      price: 500,
      ussd: '*200*1*1*57031600*500#',
      cures: [
        'All of the above',
        'Save M120 vs buying singles',
        '30-day full system reset',
        'Find your perfect recipe'
      ],
      teaser: 'Complete arsenal. 5 cures. 1 payment. M500 unlocks all 5 formulas instantly.',
      best: true
    },
    {
      id: 'franchise',
      name: 'FRANCHISE',
      subtitle: 'The Zap Sauce Code',
      price: 2500,
      ussd: '*200*1*1*57031600*2500#',
      cures: [
        'No income? Start M10,000/month business',
        'No suppliers? Get wholesale contacts',
        'No marketing? Get scripts + funnels',
        'No legal? Get compliance checklist'
      ],
      teaser: 'Own the business. "The Zap Sauce Code" PDF + suppliers + pricing + Mpesa setup. M2500 unlocks lifetime access.',
      franchise: true
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A2E1D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="font-bebas text-5xl md:text-7xl text-[#D4AF37] mb-3 tracking-wider">
            ZAP SAUCE
          </h1>
          <p className="text-base md:text-lg text-gray-300 font-montserrat mb-2">
            What hurts? We have a recipe for that.
          </p>
          <p className="text-xs text-gray-400 font-montserrat">
            Start free. Upgrade for full power.
          </p>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-[#0F3D28] rounded-lg border-2 p-6 flex flex-col ${
                product.best ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/30' : 
                product.franchise ? 'border-red-500' : 
                product.free ? 'border-emerald-400' : 'border-[#1B5E3A]'
              }`}
            >
              {/* BADGES */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-400 font-montserrat uppercase mb-1">
                    {product.franchise ? 'BUSINESS' : product.free ? 'FREE' : 'RECIPE'}
                  </p>
                  <h2 className={`font-bebas text-3xl ${
                    product.franchise ? 'text-red-400' : 
                    product.free ? 'text-emerald-400' : 'text-[#D4AF37]'
                  }`}>
                    {product.name}
                  </h2>
                  <p className="text-gray-300 font-montserrat text-sm">{product.subtitle}</p>
                </div>
                {product.best && (
                  <span className="bg-[#D4AF37] text-[#0A2E1D] text-xs font-bebas px-2 py-1 rounded">BEST VALUE</span>
                )}
                {product.franchise && (
                  <span className="bg-red-500 text-white text-xs font-bebas px-2 py-1 rounded">M2500</span>
                )}
                {product.free && (
                  <span className="bg-emerald-400 text-[#0A2E1D] text-xs font-bebas px-2 py-1 rounded">FREE</span>
                )}
              </div>

              {/* CURES */}
              <div className="mb-5 flex-grow">
                <h3 className={`font-bebas text-lg mb-3 ${
                  product.free ? 'text-emerald-400' : 'text-[#D4AF37]'
                }`}>CURES:</h3>
                <ul className="space-y-2">
                  {product.cures.map((cure, i) => (
                    <li key={i} className="text-gray-200 text-sm font-montserrat flex items-start">
                      <span className={product.free ? 'text-emerald-400' : 'text-[#D4AF37]'} mr-2>✓</span>
                      {cure}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FREE RECIPE DETAILS */}
              {product.free && showFree && (
                <div className="mb-4 space-y-3 bg-[#0A2E1D] p-4 rounded border border-emerald-400/30">
                  <div>
                    <h4 className="text-emerald-400 font-bebas text-sm mb-1">INGREDIENTS:</h4>
                    <ul className="space-y-1">
                      {product.ingredients?.map((item, i) => (
                        <li key={i} className="text-gray-300 text-xs font-montserrat">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-bebas text-sm mb-1">PREPARATION:</h4>
                    <ol className="space-y-1">
                      {product.prep?.map((step, i) => (
                        <li key={i} className="text-gray-300 text-xs font-montserrat">{i + 1}. {step}</li>
                      ))}
                    </ol>
                  </div>
                  <p className="text-gray-400 text-xs font-montserrat italic">{product.tips}</p>
                </div>
              )}

              {/* TEASER */}
              <p className="text-gray-400 text-xs font-montserrat mb-4 italic border-l-2 border-[#D4AF37]/30 pl-3">
                {product.teaser}
              </p>

              {/* PRICE + BUTTON */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1B5E3A]">
                <span className="text-3xl font-bebas text-white">
                  {product.free ? 'FREE' : `M${product.price}`}
                </span>
                {product.free ? (
                  <button
                    onClick={() => setShowFree(!showFree)}
                    className="px-5 py-3 rounded-lg font-bebas text-lg tracking-wider transition active:scale-95 text-center bg-emerald-400 text-[#0A2E1D] hover:bg-emerald-300"
                  >
                    {showFree ? 'HIDE RECIPE' : 'GET FREE 🔓'}
                  </button>
                ) : (
                  <a
                    href={`tel:${product.ussd}`}
                    className={`px-5 py-3 rounded-lg font-bebas text-lg tracking-wider transition active:scale-95 text-center ${
                      product.franchise 
                        ? 'bg-red-500 text-white hover:bg-red-400' 
                        : 'bg-[#1B5E3A] text-white hover:bg-[#247347]'
                    }`}
                  >
                    GET RECIPE 🔓
                  </a>
                )}
              </div>
              <p className="text-center text-gray-500 text-xs mt-2 font-montserrat">
                {product.free ? 'Tap to view instantly' : 'Tap → Pay via Mpesa → Screenshot recipe'}
              </p>
            </div>
          ))}
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-[#0F3D28]/50 p-6 rounded-lg border border-[#D4AF37]/20 mt-10 text-center">
          <h3 className="font-bebas text-2xl text-[#D4AF37] mb-3">HOW IT WORKS</h3>
          <ol className="text-gray-200 font-montserrat space-y-2 text-sm max-w-md mx-auto">
            <li>1. Try FREE SAMPLE first - no payment</li>
            <li>2. Feel the difference in 7 days</li>
            <li>3. Upgrade to paid recipes for full power</li>
            <li>4. WhatsApp 57031600 to order jars OR keep recipes</li>
          </ol>
          <p className="text-[#D4AF37] text-xs mt-4 font-montserrat">
            M2500 Franchise: PDF "The Zap Sauce Code" sent via WhatsApp after payment
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-500 text-xs font-montserrat">
          <p>© 2026 Zap Sauce. Lesotho 🇱🇸</p>
          <p className="mt-2">Free recipe instant. Paid recipes unlock after Mpesa to 57031600</p>
          <p className="mt-1 text-[#D4AF37]/70">Green = Healing. Gold = Yield. 💰</p>
        </div>

      </div>
    </main>
  );
      }
