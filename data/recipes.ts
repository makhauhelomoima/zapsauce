export interface Recipe {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  time: string
  benefits: string
  ingredients: string[]
  instructions: string[]
  category: 'free' | 'paid' | 'subscription' | 'exclusive' | 'bundle'
  affiliationEligible?: boolean
  disclaimer?: string
  costBreakdown?: string
}

export const recipes: Recipe[] = [
  // ZAP SAUCE ORIGINAL - YOUR EXACT COPY
  {
    id: 'zap-001',
    name: 'ZAP SAUCE ORIGINAL ⚡',
    subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
    price: 120,
    time: '5 mins',
    benefits: '✓ Morning flu + sore throat + body aches ✓ Coughs + chest congestion + winter chills ✓ Low immunity + kids missing school ✓ Inflammation + joint pain ✓ M200+ weekly pharmacy runs for family',
    ingredients: [
      'Raw Honey - 250ml | M40 | The conductor + armor',
      'Turmeric Powder - 3 tbsp | M15 | The voltage + inflammation killer',
      'Fresh Ginger Grated - 2 tbsp | M8 | The spark + cough zapper',
      'Black Pepper Ground - 1/2 tsp | M3 | The switch + activates turmeric',
      'Ceylon Cinnamon - 1 tsp | M5 | The smooth current + blood sugar'
    ],
    instructions: [
      'STEP 1: GROUND THE WIRES: Mix turmeric + pepper + cinnamon in bowl',
      'STEP 2: ADD THE SPARK: Fold in grated ginger until paste forms',
      'STEP 3: CHARGE IT: Slowly stir in honey 60sec until smooth like your photo',
      'STEP 4: BOTTLE THE LIGHTNING: Clean glass jar. Label "ZAP SAUCE". Pantry 6 months.',
      'DOSE PROTOCOL: Adults: 1 tsp morning empty stomach. Kids 5+: 1/2 tsp in rooibos. Kids 2-5: 1/4 tsp in porridge. Sick: 1 tsp every 3 hours until flu gets ZAPPED.'
    ],
    category: 'paid',
    affiliationEligible: false,
    disclaimer: 'Traditional immunity tonic for education. Not medical advice. Not a cure for disease. Do NOT use if: gallstones, blood thinners, before surgery, stomach ulcers. Honey never for babies under 1. Consult clinic if pregnant or on diabetes/BP meds - turmeric interacts.',
    costBreakdown: 'TOTAL COST TO MAKE: M71 | MAKES: 30 doses of 1 tsp each | COST PER DOSE: M2.37 | PHARMACY COST PER DOSE: M15.00 | YOU SAVE: M378+ monthly for family of 4'
  },
  
  // MASTER BASE - YOUR EXACT COPY
  {
    id: 'master-base',
    name: 'ZAP SAUCE MASTER BASE',
    subtitle: 'THE FOUNDATION - Makes 250ml / 16 TBSP',
    price: 0,
    time: '15 mins',
    benefits: 'This is what "1 tbsp Zap Sauce Master Base" means in every recipe. DO NOT SUBSTITUTE. DO NOT ADD SUGAR. DO NOT USE ROOIBOS.',
    ingredients: [
      'Raw Honey: 120ml - Local Lesotho honey only. Unpasteurized.',
      'Turmeric Powder: 40g - Organic, high curcumin.',
      'Cayenne Pepper: 8g - 40,000 SHU. No paprika substitute.',
      'Cinnamon: 12g - Ceylon cinnamon only. No cassia.',
      'Black Pepper: 4g - Freshly ground. Activates turmeric.',
      'Ginger Powder: 8g - Organic. Anti-inflammatory.',
      'Lemon Juice: 20ml - Fresh squeezed. Preservative + Vitamin C.',
      'Apple Cider Vinegar: 10ml - With "mother". Shelf life.'
    ],
    instructions: [
      'Sterilize jar + spoon: Boil 10 mins. Air dry.',
      'Mix dry: Turmeric + Cayenne + Cinnamon + Black Pepper + Ginger in jar.',
      'Add wet: Raw honey + Lemon juice + ACV.',
      'Stir 3 mins with wooden spoon until no lumps. Metal kills enzymes.',
      'Seal. Label: "ZAP SAUCE BASE - Made [DATE]"',
      'Store: Cool dark place. Shake before every use.',
      'Shelf Life: 6 months unopened. 3 months after opening.'
    ],
    category: 'free',
    costBreakdown: 'COST PER BATCH: ~M85 | COST PER TBSP: ~M5.30 | SELL PRICE: M120+ per 250ml jar = 42% profit minimum'
  },

  // FREE SAMPLES
  {
    id: 'free-001',
    name: 'MORNING SHOT',
    subtitle: 'Your first taste of lightning',
    price: 0,
    time: '1 min',
    benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '100ml warm water', 'Raw honey'],
    instructions: ['Mix all ingredients', 'Drink immediately', 'Feel the spark'],
    category: 'free'
  },
  {
    id: 'free-002',
    name: 'IMMUNITY TEASER',
    subtitle: 'Second free sample',
    price: 0,
    time: '5 mins',
    benefits: 'Soothing immunity tea. Feel the warmth spread.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml hot water', 'Lemon slice'],
    instructions: ['Steep Zap Sauce in hot water 3 mins', 'Add lemon', 'Sip slowly'],
    category: 'free'
  },

  // PAID RECIPES USING MASTER BASE
  {
    id: 'zap-002',
    name: 'SAVORY HEAL',
    subtitle: 'For soups, stews & immunity',
    price: 150,
    time: '10 mins',
    benefits: 'Gut healing + immune support. Collagen-rich base amplifies absorption.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '250ml bone broth', 'Fresh thyme'],
    instructions: ['Heat broth gently', 'Whisk in Zap Sauce', 'Garnish with thyme', 'Serve hot'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-003',
    name: 'FIRE CIDER',
    subtitle: 'Classic immune tonic',
    price: 130,
    time: '2 mins',
    benefits: 'Apple cider vinegar base + Zap Sauce fire. Clears sinuses.',
    ingredients: ['2 tbsp Zap Sauce Master Base', '1 cup apple cider vinegar', 'Sparkling water'],
    instructions: ['Mix Zap Sauce + vinegar', 'Top with sparkling water', 'Drink daily'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-004',
    name: 'LIVER FLUSH',
    subtitle: 'Morning detox ritual',
    price: 140,
    time: '2 mins',
    benefits: 'Supports liver detox pathways. Bitter herbs stimulate bile flow.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '300ml warm water', 'Lemon juice', 'Sea salt'],
    instructions: ['Mix all ingredients', 'Drink first thing morning', 'Wait 30 mins before eating'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-005',
    name: 'BRAIN TONIC',
    subtitle: 'Focus & clarity blend',
    price: 145,
    time: '5 mins',
    benefits: 'Lion\'s mane + MCT for cognitive support. Mental lightning.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml almond milk', 'MCT oil', 'Cinnamon'],
    instructions: ['Warm almond milk gently', 'Whisk in Zap Sauce + MCT', 'Dust with cinnamon', 'Sip mindfully'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-006',
    name: 'SLEEP ELIXIR',
    subtitle: 'Nighttime wind-down',
    price: 155,
    time: '5 mins',
    benefits: 'Chamomile + magnesium. Calms nervous system naturally.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Nutmeg'],
    instructions: ['Warm oat milk', 'Stir in Zap Sauce', 'Add nutmeg', 'Drink 1 hour before bed'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-007',
    name: 'METABOLISM BOOST',
    subtitle: 'Pre-workout fire',
    price: 160,
    time: '1 min',
    benefits: 'Green tea extract + cayenne. Supports fat oxidation.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '250ml cold water', 'Lemon'],
    instructions: ['Mix all ingredients', 'Drink 20 mins before exercise', 'Feel the thermogenesis'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-008',
    name: 'HEART GUARD',
    subtitle: 'Circulation & blood pressure support',
    price: 165,
    time: '5 mins',
    benefits: 'Hawthorn + garlic + beetroot. Supports healthy blood flow.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml beetroot juice', 'Garlic'],
    instructions: ['Mix beetroot juice with Zap Sauce', 'Crush garlic clove', 'Drink daily'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-009',
    name: 'SKIN GLOW',
    subtitle: 'Collagen + antioxidants',
    price: 170,
    time: '3 mins',
    benefits: 'Vitamin C + collagen. Fights oxidative stress for radiant skin.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml coconut water', 'Collagen peptides', 'Blueberries'],
    instructions: ['Blend coconut water + collagen', 'Stir in Zap Sauce', 'Top with blueberries', 'Drink morning'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-010',
    name: 'LUNG CLEAR',
    subtitle: 'Respiratory support blend',
    price: 175,
    time: '10 mins',
    benefits: 'Mullein + thyme + eucalyptus. Soothes airways.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '1 cup hot water', 'Eucalyptus honey'],
    instructions: ['Dissolve Zap Sauce in hot water', 'Add eucalyptus honey', 'Inhale steam 5 mins', 'Sip tea'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-011',
    name: 'KIDNEY CLEANSE',
    subtitle: 'Gentle diuretic tonic',
    price: 180,
    time: '10 mins',
    benefits: 'Dandelion + nettle + parsley. Supports kidney filtration.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '300ml water', 'Parsley', 'Lemon'],
    instructions: ['Boil parsley 5 mins', 'Strain + cool slightly', 'Add Zap Sauce + lemon', 'Drink between meals'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-012',
    name: 'HORMONE HARMONY',
    subtitle: 'Adaptogenic balance for women',
    price: 185,
    time: '5 mins',
    benefits: 'Maca + ashwagandha. Adaptogens for hormonal balance.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Maca powder'],
    instructions: ['Warm oat milk', 'Whisk in Zap Sauce + maca', 'Dust cinnamon', 'Drink evening'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-013',
    name: 'BLOOD SUGAR BALANCE',
    subtitle: 'Glucose support tonic',
    price: 190,
    time: '2 mins',
    benefits: 'Ceylon cinnamon + berberine. Supports healthy glucose metabolism.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '200ml water', 'Apple cider vinegar'],
    instructions: ['Mix water + vinegar', 'Stir in Zap Sauce', 'Add cinnamon', 'Drink before meals'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-014',
    name: 'JOINT EASE',
    subtitle: 'Anti-inflammatory for joints',
    price: 195,
    time: '5 mins',
    benefits: 'Turmeric + ginger + black pepper. Reduces inflammation.',
    ingredients: ['1 tbsp Zap Sauce Master Base', 'Golden milk', 'Extra ginger'],
    instructions: ['Warm golden milk', 'Stir in Zap Sauce', 'Add ginger', 'Drink nightly'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-015',
    name: 'ENERGY SHOT',
    subtitle: 'Natural energy without crash',
    price: 200,
    time: '1 min',
    benefits: 'Green tea + cayenne + honey. Sustained energy.',
    ingredients: ['1 tbsp Zap Sauce Master Base', 'Cold brew coffee'],
    instructions: ['Mix Zap Sauce into cold brew', 'Shake well', 'Morning kick'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-016',
    name: 'LENGANA LIGHTNING',
    subtitle: 'Mountain tranquility + supercharge',
    price: 205,
    time: '10 mins',
    benefits: 'Lengana + Prickly Pear + Cactus + Aloe + Rose Hip = Complete immunity.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '5g Lengana leaves', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
    instructions: ['Steep Lengana 7 mins', 'Add Zap Sauce + superfoods', 'Stir well', 'Sip slowly'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-017',
    name: 'PHATE-EA-NGAKA POWER',
    subtitle: 'Doctor\'s medicine + supercharge',
    price: 210,
    time: '15 mins',
    benefits: 'Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Deep cellular immunity.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '3g Phate-ea-Ngaka decoction', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
    instructions: ['Gentle decoction of Phate-ea-Ngaka', 'Add Zap Sauce + superfoods', 'Morning dose'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-018',
    name: 'MALUTI IMMUNITY FUSION',
    subtitle: 'All Basotho herbs + supercharge',
    price: 220,
    time: '20 mins',
    benefits: 'Lengana + Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Crown jewel.',
    ingredients: ['1 tbsp Zap Sauce Master Base', 'Lengana + Phate-ea-Ngaka blend', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
    instructions: ['Full moon brew of herbs', 'Add Zap Sauce + superfoods', '21-day dose'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'sub-001',
    name: 'MONTHLY HEAL',
    subtitle: 'All 20 recipes + EXCLUSIVE access',
    price: 120,
    time: 'Subscription',
    benefits: 'Unlock everything. Save M2000+ vs buying individually. Cancel anytime.',
    ingredients: ['All recipes above', 'EXCLUSIVE TANGY FUSION', 'Monthly new recipe', 'WhatsApp support'],
    instructions: ['Subscribe via MPESA 57031600', 'Send proof to WhatsApp +26657031600', 'Get instant portal access'],
    category: 'subscription',
    affiliationEligible: false
  },
  {
    id: 'bundle-001',
    name: "HUSTLER'S VAULT",
    subtitle: '12 Recipes. One Price. Unlock Your Empire.',
    price: 1200,
    originalPrice: 1800,
    time: 'Lifetime Access',
    benefits: 'Original. Savory Heal. Fire Cider. Liver Flush. Brain Tonic. Sleep Elixir. Metabolism. Heart Guard. Skin Glow. Kidney Cleanse. Hormone. Blood Sugar. PLUS 30% affiliate on all referrals.',
    ingredients: ['All 12 Recipe Formulas', 'Affiliate Rights', 'Lifetime Updates'],
    instructions: ['Purchase once', 'Unlock all 12 recipes', 'Get 30% on every referral', 'Build your empire'],
    category: 'bundle',
    affiliationEligible: true
  },
  {
    id: 'excl-001',
    name: 'TANGY FUSION',
    subtitle: 'EXCLUSIVE - Secret blend base + Tamarind + Pineapple + Scotch bonnet',
    price: 100,
    time: '5 mins',
    benefits: 'Vitamin C boost. Digestive fire. Flavor explosion. Mood lift.',
    ingredients: ['Secret blend base', 'Tamarind 1 tbsp', 'Pineapple 1/4 cup', 'Scotch bonnet tiny pinch', 'Lime juice 1 tbsp'],
    instructions: ['Blend pineapple', 'Mix with tamarind', 'Add scotch bonnet carefully', 'Secret blend last', 'Shake and serve'],
    category: 'exclusive',
    affiliationEligible: false
  }
]