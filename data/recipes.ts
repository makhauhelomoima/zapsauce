export interface Recipe {
  id: string
  name: string
  price: number
  subtitle: string
  time: string
  benefits: string
  ingredients: string[]
  prep: string[]
  category: 'free' | 'core' | 'indigenous' | 'subscription'
  featured?: boolean
}

export const recipes: Recipe[] = [
  {
    id: 'free-001',
    name: 'FREE TEASER SHOT',
    price: 0,
    subtitle: 'Your first taste of lightning',
    time: '1 min',
    benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
    ingredients: ['1 tbsp Zap Sauce Master Base', '100ml warm water'],
    prep: ['Mix all ingredients', 'Drink immediately', 'Feel the spark'],
    category: 'free',
    featured: true
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
    category: 'free',
    featured: true
  },
  {
    id: 'zap-001',
    name: 'ORIGINAL - Turmeric Gold',
    price: 120,
    subtitle: 'The flagship healing blend',
    time: '3 mins',
    benefits: 'Anti-inflammatory powerhouse. Turmeric + ginger + cayenne.',
    ingredients: ['2 tbsp Zap Sauce Master Base', '1 cup warm water', 'Black pepper'],
    prep: ['Warm water to 40°C max', 'Stir in Zap Sauce until dissolved', 'Add pepper', 'Drink empty stomach'],
    category: 'core',
    featured: true
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'core'
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
    category: 'indigenous',
    featured: true
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
    category: 'indigenous'
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
    category: 'indigenous'
  },
  {
    id: 'sub-001',
    name: 'MONTHLY HEAL',
    price: 120,
    subtitle: 'All 20 recipes + EXCLUSIVE access',
    time: 'Subscription',
    benefits: 'Unlock everything. Save M2000+ vs buying individually. Cancel anytime.',
    ingredients: ['All 20 recipes', 'EXCLUSIVE TANGY FUSION', 'Monthly new recipe', 'WhatsApp support'],
    prep: ['Subscribe via MPESA 57031600', 'Send proof to WhatsApp +26657031600', 'Get instant portal access'],
    category: 'subscription',
    featured: true
  }
]

export const getRecipeById = (id: string) => recipes.find(r => r.id === id)
export const getFeaturedRecipes = () => recipes.filter(r => r.featured)
export const getFreeRecipes = () => recipes.filter(r => r.category === 'free')