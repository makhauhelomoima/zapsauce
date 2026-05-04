'use client';
import { useState } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const recipes = [
    {
      id: 'original',
      name: 'ORIGINAL',
      subtitle: 'Turmeric Gold',
      price: 120,
      ussd: '*200*1*1*57031600*120#',
      time: 'Ready in 5 minutes',
      serves: 'Makes 1 jar',
      ingredients: [
        'Raw honey 250ml',
        'Organic turmeric powder 3 tbsp',
        'Black pepper pinch',
        'Ceylon cinnamon 1/2 tsp'
      ],
      prep: [
        'Warm honey gently - do not boil',
        'Whisk in turmeric until smooth',
        'Add black pepper + cinnamon',
        'Pour into sterilized jar',
        'Cool before sealing'
      ],
      tips: 'Take 1 tsp daily on empty stomach. Store in cool dark place. Lasts 6 months.'
    },
    {
      id: 'citrus',
      name: 'CITRUS',
      subtitle: 'Lemon Zest',
      price: 120,
      ussd: '*200*1*1*57031600*120#',
      time: 'Ready in 8 minutes',
      serves: 'Makes 1 jar',
      ingredients: [
        'Raw honey 250ml',
        'Organic turmeric 3 tbsp',
        'Lemon zest 1 tbsp',
        'Lemon juice 1 tsp'
      ],
      prep: [
        'Zest lemon, avoid white pith',
        'Warm honey gently',
        'Whisk in turmeric + zest',
        'Add lemon juice last',
        'Jar while warm'
      ],
      tips: 'Best for morning immunity. Vitamin C boost. Shake before use.'
    },
    {
      id: 'warrior',
      name: 'WARRIOR PRO',
      subtitle: 'Black Pepper Boost',
      price: 140,
      ussd: '*200*1*1*57031600*140#',
      time: 'Ready in 6 minutes',
      serves: 'Makes 1 jar',
      ingredients: [
        'Raw honey 250ml',
        'Organic turmeric 4 tbsp',
        'Fresh ground black pepper 1 tsp',
        'Coconut oil 1 tsp'
      ],
      prep: [
        'Warm honey + coconut oil',
        'Add turmeric gradually',
        'Grind pepper fresh - key step',
        'Whisk 2 minutes vigorously',
        'Jar immediately'
      ],
      tips: 'Piperine increases absorption 2000%. For post-workout. Intense heat.'
    },
    {
      id: 'queen',
      name: 'QUEEN',
      subtitle: 'Cinnamon Royal',
      price: 130,
      ussd: '*200*1*1*57031600*130#',
      time: 'Ready in 7 minutes',
      serves: 'Makes 1 jar',
      ingredients: [
        'Raw honey 250ml',
        'Organic turmeric 3 tbsp',
        'Ceylon cinnamon 2 tsp',
        'Cardamom pinch'
      ],
      prep: [
        'Warm honey slowly',
        'Sift turmeric + cinnamon',
        'Whisk dry into honey',
        'Add cardamom at end',
        'Cool completely before lid'
      ],
      tips: 'Balances blood sugar. Evening ritual. Pairs with warm milk.'
    },
    {
      id: 'bone',
      name: 'BONE',
      subtitle: 'Ginger Joint',
      price: 130,
      ussd: '*200*1*1*57031600*130#',
      time: 'Ready in 10 minutes',
      serves: 'Makes 1 jar',
      ingredients: [
        'Raw honey 250ml',
        'Organic turmeric 3 tbsp',
        'Fresh ginger grated 2 tbsp',
        'Black pepper pinch'
      ],
      prep: [
        'Grate ginger, squeeze juice',
        'Warm honey gently',
        'Whisk in turmeric first',
        'Add ginger + juice',
        'Black pepper last'
      ],
      tips: 'For joint mobility. Take with warm water. Morning + night for 30 days.'
    },
    {
      id: 'pack',
      name: 'ROYAL PACK',
      subtitle: 'All 5 Recipes',
      price: 500,
      ussd: '*200*1*1*57031600*500#',
      time: 'Full Arsenal',
      serves: '5 jars total',
      ingredients: [
        '1x ORIGINAL jar',
        '1x CITRUS jar',
        '1x WARRIOR PRO jar',
        '1x QUEEN jar',
        '1x BONE jar'
      ],
      prep: [
        'All recipes included above',
        'Mix + match daily',
        '30 day supply',
        'Save M120 vs buying single'
      ],
      tips: 'Best value. Try all 5. Find your favorite. Reorder singles after.',
      best: true
    },
    {
      id: 'franchise',
      name: 'FRANCHISE',
      subtitle: 'The Zap Sauce Code',
      price: 2500,
      ussd: '*200*1*1*57031600*2500#',
      time: 'Business in a box',
      serves: 'Unlimited revenue',
      ingredients: [
        'All 5 master recipes + exact ratios',
        'Wholesale supplier contacts Lesotho',
        'Cost calculator + M120 profit breakdown',
        'Label design files + printer specs',
        'Mpesa business till setup guide'
      ],
      prep: [
        'Pay M2500 via *200# BUY NOW',
        'Screenshot Mpesa confirmation',
        'WhatsApp screenshot to 57031600',
        'Receive "The Zap Sauce Code" PDF instantly',
        '30min onboarding call booked'
      ],
      tips: 'This PDF contains our full business model. Sections: Sourcing, Costing, Scaling, Marketing, Legal. Serious entrepreneurs only. Territory protected.',
      franchise: true
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="font-bebas text-5xl md:text-7xl text-gold-500 mb-2 tracking-wider">
            ZAP SAUCE
          </h1>
          <p className="text-base text-gray-400 font-montserrat">
            5 Recipes • 1 Pack • 1 Franchise
          </p>
        </div>

        {/* RECIPE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={`bg-zinc-900 rounded-lg border-2 p-6 ${
                recipe.best ? 'border-gold-500' : recipe.franchise ? 'border-red-500' : 'border-zinc-800'
              }`}
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs text-gray-500 font-montserrat uppercase">RECIPE</p>
                  <h2 className={`font-bebas text-3xl ${recipe.franchise ? 'text-red-500' : 'text-gold-500'}`}>
                    {recipe.name}
                  </h2>
                  <p className="text-gray-400 font-montserrat text-sm">{recipe.subtitle}</p>
                </div>
                {recipe.best && (
                  <span className="bg-gold-500 text-black text-xs font-bebas px-2 py-1 rounded">BEST VALUE</span>
                )}
                {recipe.franchise && (
                  <span className="bg-red-500 text-white text-xs font-bebas px-2 py-1 rounded">BUSINESS</span>
                )}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-gray-500 font-montserrat">
                <p>{recipe.time}</p>
                <p>{recipe.serves}</p>
              </div>

              {/* TOGGLE BUTTON */}
              <button
                onClick={() => setExpanded(expanded === recipe.id ? null : recipe.id)}
                className="w-full text-left text-gold-500 font-montserrat text-sm mb-4 hover:text-gold-400"
              >
                {expanded === recipe.id ? '▲ Hide Details' : '▼ View Recipe'}
              </button>

              {/* EXPANDED DETAILS */}
              {expanded === recipe.id && (
                <div className="space-y-4 mb-4">
                  <div>
                    <h3 className="text-gold-500 font-bebas text-lg mb-2">Ingredients</h3>
                    <ul className="space-y-1">
                      {recipe.ingredients.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm font-montserrat">• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-gold-500 font-bebas text-lg mb-2">Preparation</h3>
                    <ol className="space-y-1">
                      {recipe.prep.map((step, i) => (
                        <li key={i} className="text-gray-300 text-sm font-montserrat">{i + 1}. {step}</li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-gold-500 font-bebas text-lg mb-2">Tips</h3>
                    <p className="text-gray-300 text-sm font-montserrat">{recipe.tips}</p>
                  </div>
                </div>
              )}

              {/* PRICE + BUY */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-3xl font-bebas text-white">M{recipe.price}</span>
                <a
                  href={`tel:${recipe.ussd}`}
                  className={`px-6 py-3 rounded-lg font-bebas text-lg tracking-wider transition active:scale-95 ${
                    recipe.franchise 
                      ? 'bg-red-500 text-white hover:bg-red-400' 
                      : 'bg-gold-500 text-black hover:bg-gold-400'
                  }`}
                >
                  *200# BUY NOW 🔓
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-600 text-xs font-montserrat">
          <p>© 2026 Zap Sauce. Lesotho 🇱🇸</p>
          <p className="mt-2">Tap *200# BUY NOW • Screenshot confirmation • WhatsApp 57031600 for delivery</p>
        </div>

      </div>
    </main>
  );
      }
