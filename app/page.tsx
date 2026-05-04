'use client';

export default function Home() {
  const products = [
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
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER - NO RECIPE LEAKS */}
        <div className="text-center mb-10">
          <h1 className="font-bebas text-5xl md:text-7xl text-gold-500 mb-3 tracking-wider">
            ZAP SAUCE
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-montserrat mb-2">
            What hurts? We have a recipe for that.
          </p>
          <p className="text-xs text-gray-600 font-montserrat">
            Pay to unlock ingredients + preparation + dosage
          </p>
        </div>

        {/* PRODUCT CARDS - CURES ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-zinc-900 rounded-lg border-2 p-6 flex flex-col ${
                product.best ? 'border-gold-500 ring-1 ring-gold-500/30' : 
                product.franchise ? 'border-red-500' : 'border-zinc-800'
              }`}
            >
              {/* BADGES */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs text-gray-500 font-montserrat uppercase mb-1">
                    {product.franchise ? 'BUSINESS' : 'RECIPE'}
                  </p>
                  <h2 className={`font-bebas text-3xl ${product.franchise ? 'text-red-500' : 'text-gold-500'}`}>
                    {product.name}
                  </h2>
                  <p className="text-gray-400 font-montserrat text-sm">{product.subtitle}</p>
                </div>
                {product.best && (
                  <span className="bg-gold-500 text-black text-xs font-bebas px-2 py-1 rounded">BEST VALUE</span>
                )}
                {product.franchise && (
                  <span className="bg-red-500 text-white text-xs font-bebas px-2 py-1 rounded">M2500</span>
                )}
              </div>

              {/* CURES - THIS IS THE HOOK */}
              <div className="mb-5 flex-grow">
                <h3 className="text-gold-500 font-bebas text-lg mb-3">CURES:</h3>
                <ul className="space-y-2">
                  {product.cures.map((cure, i) => (
                    <li key={i} className="text-gray-300 text-sm font-montserrat flex items-start">
                      <span className="text-gold-500 mr-2">✓</span>
                      {cure}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TEASER */}
              <p className="text-gray-500 text-xs font-montserrat mb-4 italic border-l-2 border-gold-500/30 pl-3">
                {product.teaser}
              </p>

              {/* PRICE + PAYGATE BUTTON */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-3xl font-bebas text-white">M{product.price}</span>
                <a
                  href={`tel:${product.ussd}`}
                  className={`px-5 py-3 rounded-lg font-bebas text-lg tracking-wider transition active:scale-95 text-center ${
                    product.franchise 
                      ? 'bg-red-500 text-white hover:bg-red-400' 
                      : 'bg-gold-500 text-black hover:bg-gold-400'
                  }`}
                >
                  GET RECIPE 🔓
                </a>
              </div>
              <p className="text-center text-gray-600 text-xs mt-2 font-montserrat">
                Tap → Pay via Mpesa → Screenshot recipe
              </p>
            </div>
          ))}
        </div>

        {/* INSTRUCTIONS */}
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-gold-500/20 mt-10 text-center">
          <h3 className="font-bebas text-2xl text-gold-500 mb-3">HOW IT WORKS</h3>
          <ol className="text-gray-300 font-montserrat space-y-2 text-sm max-w-md mx-auto">
            <li>1. Find your ailment above</li>
            <li>2. Tap GET RECIPE 🔓</li>
            <li>3. Confirm Mpesa payment</li>
            <li>4. Screenshot the unlocked recipe page</li>
            <li>5. WhatsApp 57031600 to order jar OR keep recipe</li>
          </ol>
          <p className="text-gold-500 text-xs mt-4 font-montserrat">
            M2500 Franchise buyers: PDF "The Zap Sauce Code" sent via WhatsApp after payment
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-600 text-xs font-montserrat">
          <p>© 2026 Zap Sauce. Lesotho 🇱🇸</p>
          <p className="mt-2">Recipes unlock after Mpesa payment to 57031600</p>
        </div>

      </div>
    </main>
  );
      }
