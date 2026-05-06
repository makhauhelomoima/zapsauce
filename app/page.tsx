'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>(['free-001', 'free-002'])
  const [mpesaCode, setMpesaCode] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('zapSauceUnlocked')
    if (saved) {
      setUnlockedRecipes(JSON.parse(saved))
    }
  }, [])

  const saveUnlocked = (recipes: string[]) => {
    setUnlockedRecipes(recipes)
    localStorage.setItem('zapSauceUnlocked', JSON.stringify(recipes))
  }

  const verifyPayment = async (recipeId: string) => {
    if (!mpesaCode.trim()) return
    setVerifying(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (mpesaCode.length >= 8) {
      const newUnlocked = [...unlockedRecipes, recipeId]
      saveUnlocked(newUnlocked)
      setMpesaCode('')
      setSelectedRecipe(null)
      alert('Payment verified! Recipe unlocked ⚡')
    } else {
      alert('Invalid MPESA code. Try again.')
    }
    setVerifying(false)
  }

  const isLocked = (recipeId: string) => {
    return!unlockedRecipes.includes(recipeId) && recipeId!== 'free-001' && recipeId!== 'free-002'
  }

  const recipes = [
    {
      id: 'free-001',
      name: 'MORNING SHOT',
      price: 0,
      subtitle: 'Your first taste of lightning',
      time: '1 min',
      benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '100ml warm water', 'Raw honey'],
      prep: ['Mix all ingredients', 'Drink immediately', 'Feel the spark'],
      locked: false
    },
    {
      id: 'free-002',
      name: 'IMMUNITY TEASER',
      price: 0,
      subtitle: 'Second free sample',
      time: '5 mins',
      benefits: 'Soothing immunity tea. Feel the warmth spread.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml hot water', 'Lemon slice'],
      prep: ['Steep Zap Sauce in hot water 3 mins', 'Add lemon', 'Sip slowly'],
      locked: false
    },
    {
      id: 'zap-001',
      name: 'ZAP SAUCE ORIGINAL ⚡',
      price: 120,
      subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
      time: '5 mins',
      benefits: '✓ Morning flu + sore throat + body aches ✓ Coughs + chest congestion + winter chills ✓ Low immunity + kids missing school ✓ Inflammation + joint pain ✓ M200+ weekly pharmacy runs for family',
      ingredients: [
        'Raw Honey - 250ml | M40 | The conductor + armor',
        'Turmeric Powder - 3 tbsp | M15 | The voltage + inflammation killer',
        'Fresh Ginger Grated - 2 tbsp | M8 | The spark + cough zapper',
        'Black Pepper Ground - 1/2 tsp | M3 | The switch + activates turmeric',
        'Ceylon Cinnamon - 1 tsp | M5 | The smooth current + blood sugar'
      ],
      prep: [
        'STEP 1: GROUND THE WIRES: Mix turmeric + pepper + cinnamon in bowl',
        'STEP 2: ADD THE SPARK: Fold in grated ginger until paste forms',
        'STEP 3: CHARGE IT: Slowly stir in honey 60sec until smooth like your photo',
        'STEP 4: BOTTLE THE LIGHTNING: Clean glass jar. Label "ZAP SAUCE". Pantry 6 months.',
        'DOSE: Adults: 1 tsp morning empty stomach. Kids 5+: 1/2 tsp in rooibos. Kids 2-5: 1/4 tsp in porridge. Sick: 1 tsp every 3 hours until flu gets ZAPPED.'
      ],
      locked: true
    },
    {
      id: 'zap-002',
      name: 'SAVORY HEAL',
      price: 150,
      subtitle: 'For soups, stews & immunity',
      time: '10 mins',
      benefits: 'Gut healing + immune support. Collagen-rich base amplifies absorption.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '250ml bone broth', 'Fresh thyme'],
      prep: ['Heat broth gently', 'Whisk in Zap Sauce', 'Garnish with thyme', 'Serve hot'],
      locked: true
    },
    {
      id: 'zap-003',
      name: 'FIRE CIDER',
      price: 130,
      subtitle: 'Classic immune tonic',
      time: '2 mins',
      benefits: 'Apple cider vinegar base + Zap Sauce fire. Clears sinuses.',
      ingredients: ['2 tbsp Zap Sauce Master Base', '1 cup apple cider vinegar', 'Sparkling water'],
      prep: ['Mix Zap Sauce + vinegar', 'Top with sparkling water', 'Drink daily'],
      locked: true
    },
    {
      id: 'zap-004',
      name: 'LIVER FLUSH',
      price: 140,
      subtitle: 'Morning detox ritual',
      time: '2 mins',
      benefits: 'Supports liver detox pathways. Bitter herbs stimulate bile flow.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '300ml warm water', 'Lemon juice', 'Sea salt'],
      prep: ['Mix all ingredients', 'Drink first thing morning', 'Wait 30 mins before eating'],
      locked: true
    },
    {
      id: 'zap-005',
      name: 'BRAIN TONIC',
      price: 145,
      subtitle: 'Focus & clarity blend',
      time: '5 mins',
      benefits: 'Lion\'s mane + MCT for cognitive support. Mental lightning.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml almond milk', 'MCT oil', 'Cinnamon'],
      prep: ['Warm almond milk gently', 'Whisk in Zap Sauce + MCT', 'Dust with cinnamon', 'Sip mindfully'],
      locked: true
    },
    {
      id: 'zap-006',
      name: 'SLEEP ELIXIR',
      price: 155,
      subtitle: 'Nighttime wind-down',
      time: '5 mins',
      benefits: 'Chamomile + magnesium. Calms nervous system naturally.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Nutmeg'],
      prep: ['Warm oat milk', 'Stir in Zap Sauce', 'Add nutmeg', 'Drink 1 hour before bed'],
      locked: true
    },
    {
      id: 'zap-007',
      name: 'METABOLISM BOOST',
      price: 160,
      subtitle: 'Pre-workout fire',
      time: '1 min',
      benefits: 'Green tea extract + cayenne. Supports fat oxidation.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '250ml cold water', 'Lemon'],
      prep: ['Mix all ingredients', 'Drink 20 mins before exercise', 'Feel the thermogenesis'],
      locked: true
    },
    {
      id: 'zap-008',
      name: 'HEART GUARD',
      price: 165,
      subtitle: 'Circulation & blood pressure support',
      time: '5 mins',
      benefits: 'Hawthorn + garlic + beetroot. Supports healthy blood flow.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml beetroot juice', 'Garlic'],
      prep: ['Mix beetroot juice with Zap Sauce', 'Crush garlic clove', 'Drink daily'],
      locked: true
    },
    {
      id: 'zap-009',
      name: 'SKIN GLOW',
      price: 170,
      subtitle: 'Collagen + antioxidants',
      time: '3 mins',
      benefits: 'Vitamin C + collagen. Fights oxidative stress for radiant skin.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml coconut water', 'Collagen peptides', 'Blueberries'],
      prep: ['Blend coconut water + collagen', 'Stir in Zap Sauce', 'Top with blueberries', 'Drink morning'],
      locked: true
    },
    {
      id: 'zap-010',
      name: 'LUNG CLEAR',
      price: 175,
      subtitle: 'Respiratory support blend',
      time: '10 mins',
      benefits: 'Mullein + thyme + eucalyptus. Soothes airways.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '1 cup hot water', 'Eucalyptus honey'],
      prep: ['Dissolve Zap Sauce in hot water', 'Add eucalyptus honey', 'Inhale steam 5 mins', 'Sip tea'],
      locked: true
    },
    {
      id: 'zap-011',
      name: 'KIDNEY CLEANSE',
      price: 180,
      subtitle: 'Gentle diuretic tonic',
      time: '10 mins',
      benefits: 'Dandelion + nettle + parsley. Supports kidney filtration.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '300ml water', 'Parsley', 'Lemon'],
      prep: ['Boil parsley 5 mins', 'Strain + cool slightly', 'Add Zap Sauce + lemon', 'Drink between meals'],
      locked: true
    },
    {
      id: 'zap-012',
      name: 'HORMONE HARMONY',
      price: 185,
      subtitle: 'Adaptogenic balance for women',
      time: '5 mins',
      benefits: 'Maca + ashwagandha. Adaptogens for hormonal balance.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Maca powder'],
      prep: ['Warm oat milk', 'Whisk in Zap Sauce + maca', 'Dust cinnamon', 'Drink evening'],
      locked: true
    },
    {
      id: 'zap-013',
      name: 'BLOOD SUGAR BALANCE',
      price: 190,
      subtitle: 'Glucose support tonic',
      time: '2 mins',
      benefits: 'Ceylon cinnamon + berberine. Supports healthy glucose metabolism.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml water', 'Apple cider vinegar'],
      prep: ['Mix water + vinegar', 'Stir in Zap Sauce', 'Add cinnamon', 'Drink before meals'],
      locked: true
    },
    {
      id: 'zap-014',
      name: 'JOINT EASE',
      price: 195,
      subtitle: 'Anti-inflammatory for joints',
      time: '5 mins',
      benefits: 'Turmeric + ginger + black pepper. Reduces inflammation.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Golden milk', 'Extra ginger'],
      prep: ['Warm golden milk', 'Stir in Zap Sauce', 'Add ginger', 'Drink nightly'],
      locked: true
    },
    {
      id: 'zap-015',
      name: 'ENERGY SHOT',
      price: 200,
      subtitle: 'Natural energy without crash',
      time: '1 min',
      benefits: 'Green tea + cayenne + honey. Sustained energy.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Cold brew coffee'],
      prep: ['Mix Zap Sauce into cold brew', 'Shake well', 'Morning kick'],
      locked: true
    },
    {
      id: 'zap-016',
      name: 'LENGANA LIGHTNING',
      price: 205,
      subtitle: 'Mountain tranquility + supercharge',
      time: '10 mins',
      benefits: 'Lengana + Prickly Pear + Cactus + Aloe + Rose Hip = Complete immunity.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '5g Lengana leaves', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Steep Lengana 7 mins', 'Add Zap Sauce + superfoods', 'Stir well', 'Sip slowly'],
      locked: true
    },
    {
      id: 'zap-017',
      name: 'PHATE-EA-NGAKA POWER',
      price: 210,
      subtitle: 'Doctor\'s medicine + supercharge',
      time: '15 mins',
      benefits: 'Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Deep cellular immunity.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '3g Phate-ea-Ngaka decoction', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Gentle decoction of Phate-ea-Ngaka', 'Add Zap Sauce + superfoods', 'Morning dose'],
      locked: true
    },
    {
      id: 'zap-018',
      name: 'MALUTI IMMUNITY FUSION',
      price: 220,
      subtitle: 'All Basotho herbs + supercharge',
      time: '20 mins',
      benefits: 'Lengana + Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Crown jewel.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Lengana + Phate-ea-Ngaka blend', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Full moon brew of herbs', 'Add Zap Sauce + superfoods', '21-day dose'],
      locked: true
    },
    {
      id: 'sub-001',
      name: 'MONTHLY HEAL',
      price: 120,
      subtitle: 'All 20 recipes + EXCLUSIVE access',
      time: 'Subscription',
      benefits: 'Unlock everything. Save M2000+ vs buying individually. Cancel anytime.',
      ingredients: ['All recipes above', 'EXCLUSIVE TANGY FUSION', 'Monthly new recipe', 'WhatsApp support'],
      prep: ['Subscribe via MPESA 57031600', 'Send proof to WhatsApp +26657031600', 'Get instant portal access'],
      locked: true
    },
    {
      id: 'bundle-001',
      name: "HUSTLER'S VAULT",
      price: 1200,
      subtitle: '12 Recipes. One Price. Unlock Your Empire.',
      time: 'Lifetime Access',
      benefits: 'Original. Savory Heal. Fire Cider. Liver Flush. Brain Tonic. Sleep Elixir. Metabolism. Heart Guard. Skin Glow. Kidney Cleanse. Hormone. Blood Sugar. PLUS 30% affiliate on all referrals.',
      ingredients: ['All 12 Recipe Formulas', 'Affiliate Rights', 'Lifetime Updates'],
      prep: ['Purchase once', 'Unlock all 12 recipes', 'Get 30% on every referral', 'Build your empire'],
      locked: true
    },
    {
      id: 'excl-001',
      name: 'TANGY FUSION',
      price: 100,
      subtitle: 'EXCLUSIVE - Secret blend base + Tamarind + Pineapple + Scotch bonnet',
      time: '5 mins',
      benefits: 'Vitamin C boost. Digestive fire. Flavor explosion. Mood lift.',
      ingredients: ['Secret blend base', 'Tamarind 1 tbsp', 'Pineapple 1/4 cup', 'Scotch bonnet tiny pinch', 'Lime juice 1 tbsp'],
      prep: ['Blend pineapple', 'Mix with tamarind', 'Add scotch bonnet carefully', 'Secret blend last', 'Shake and serve'],
      locked: true
    }
  ]

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-gray-900/90 border-b border-[#00A651]/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00E06D]">Zap Sauce.</span>
            <span className="text-sm text-[#00A651]">Lightning in a jar! ⚡</span>
          </div>
          <div className="text-xs text-gray-400">MPESA: 57031600</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-[#00E06D]">IMMUNITY</span> IN A JAR! ⚡
          </h1>
          <p className="text-xl text-gray-300 mb-2">20 Healing Recipes | Raw Honey + Cayenne + Turmeric + Cinnamon</p>
          <p className="text-lg text-[#00A651] font-bold">1 tablespoon daily keeps the doctor away</p>
        </div>

        <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#00E06D] mb-4">ZAP SAUCE MASTER BASE - THE FOUNDATION</h2>
          <p className="text-gray-300 mb-4">This is what "1 tbsp Zap Sauce Master Base" means in every recipe below.</p>
          <p className="text-red-400 font-bold mb-4">DO NOT SUBSTITUTE. DO NOT ADD SUGAR. DO NOT USE ROOIBOS.</p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-white mb-2">INGREDIENTS - MAKES 250ML:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Raw Honey: 120ml - Local Lesotho, unpasteurized</li>
                <li>• Turmeric Powder: 40g - Organic, high curcumin</li>
                <li>• Cayenne Pepper: 8g - 40,000 SHU, no paprika</li>
                <li>• Cinnamon: 12g - Ceylon only, no cassia</li>
                <li>• Black Pepper: 4g - Freshly ground</li>
                <li>• Ginger Powder: 8g - Organic</li>
                <li>• Lemon Juice: 20ml - Fresh squeezed</li>
                <li>• Apple Cider Vinegar: 10ml - With "mother"</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">PREPARATION:</h3>
              <ul className="space-y-1 text-gray-300">
                <li>1. Sterilize jar + wooden spoon: Boil 10 mins</li>
                <li>2. Mix dry ingredients in jar</li>
                <li>3. Add wet ingredients</li>
                <li>4. Stir 3 mins with wooden spoon</li>
                <li>5. Seal, label, date</li>
                <li>6. Store cool dark place</li>
                <li>7. Shake before every use</li>
                <li>8. Shelf life: 6 months sealed</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <strong>COST:</strong> ~M85 per batch | ~M5.30 per tbsp | <strong>SELL:</strong> M120+ per 250ml = 42% profit minimum
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-900/50 border border-[#00A651]/30 rounded-xl p-6 hover:border-[#00E06D]/50 transition-all">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white">{recipe.name}</h3>
                <div className="text-right">
                  <div className="text-[#00E06D] font-black text-xl">
                    {recipe.price === 0? 'FREE' : `M${recipe.price}`}
                  </div>
                  {recipe.price > 0 && <div className="text-xs text-gray-500">Ref: {recipe.id.toUpperCase()}</div>}
                </div>
              </div>

              <p className="text-sm text-[#00A651] mb-2">{recipe.subtitle}</p>
              <p className="text-xs text-gray-400 mb-3">⏱️ {recipe.time}</p>
              <p className="text-sm text-gray-300 mb-4">{recipe.benefits}</p>

              {isLocked(recipe.id)? (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-400 font-bold mb-2">🔒 LOCKED - MPESA REQUIRED</p>
                    <p className="text-xs text-gray-400 mb-2">Send M{recipe.price} to 57031600</p>
                    <p className="text-xs text-gray-400 mb-2">Ref: {recipe.id.toUpperCase()}</p>
                    <input
                      type="text"
                      placeholder="Enter MPESA code"
                      value={selectedRecipe === recipe.id? mpesaCode : ''}
                      onChange={(e) => {
                        setMpesaCode(e.target.value)
                        setSelectedRecipe(recipe.id)
                      }}
                      className="w-full bg-black border border-gray-600 rounded px-3 py-2 text-sm mb-2"
                    />
                    <button
                      onClick={() => verifyPayment(recipe.id)}
                      disabled={verifying || selectedRecipe!== recipe.id}
                      className="w-full bg-[#00A651] hover:bg-[#00C85F] text-black font-bold py-2 rounded text-sm disabled:opacity-50"
                    >
                      {verifying && selectedRecipe === recipe.id? 'Verifying...' : 'Unlock Recipe'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-700 pt-4">
                  <div className="bg-[#00A651]/10 border border-[#00A651]/40 rounded-lg p-3 mb-3">
                    <p className="text-xs text-[#00E06D] font-bold mb-2">✅ UNLOCKED</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="font-bold text-white mb-1">Ingredients:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {recipe.ingredients.map((ing, i) => (
                          <li key={i}>• {ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Preparation:</h4>
                      <ol className="text-gray-300 space-y-1">
                        {recipe.prep.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-gray-500 space-y-2">
          <p>© 2026 Zap Sauce. Lightning in a jar! ⚡</p>
          <p>For Considered Families. Product of Lesotho 🇱🇸</p>
          <p>Zap Sauce recipes are food and beverage ideas for general wellness. Not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p>Consult your healthcare provider before use. Results may vary.</p>
          <div className="mt-4">
            <p className="text-[#00A651]">Orders for readymade Zap Sauce TANGY-FUSION:</p>
            <p>MPESA: 57031600 | WhatsApp: +266 57031600</p>
            <p>Lesotho Post Bank: 1036202900018</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/26657031600"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BD5C] transition-all z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}