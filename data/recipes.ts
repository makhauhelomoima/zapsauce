export type Recipe = {
  id: string
  name: string
  subtitle: string
  price: number
  time: string
  benefits: string
  ingredients: string[]
  instructions: string[]
  category: 'free' | 'paid' | 'exclusive' | 'bundle'
  affiliationEligible: boolean
}

export const recipes: Recipe[] = [
  // FREE SAMPLES - 2
  {
    id: 'free-001',
    name: 'MORNING SHOT',
    subtitle: 'Your first taste of lightning',
    price: 0,
    time: '1 min',
    benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
    ingredients: ['1 tbsp Zap Sauce', '100ml warm water', 'Raw honey to taste'],
    instructions: ['Mix all ingredients', 'Drink immediately on empty stomach', 'Feel the spark within 5 mins'],
    category: 'free',
    affiliationEligible: false
  },
  {
    id: 'free-002',
    name: 'IMMUNITY TEASER',
    subtitle: 'Second free sample',
    price: 0,
    time: '5 mins',
    benefits: 'Soothing immunity tea. Feel the warmth spread through chest.',
    ingredients: ['1 tbsp Zap Sauce', '200ml hot water', 'Fresh lemon slice'],
    instructions: ['Steep Zap Sauce in hot water 3 mins', 'Add lemon', 'Sip slowly', 'Best before bed'],
    category: 'free',
    affiliationEligible: false
  },

  // YOUR 3 EXCLUSIVES
  {
    id: 'zap-001',
    name: 'ZAP SAUCE ORIGINAL ⚡',
    subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
    price: 120,
    time: '5 mins',
    benefits: '✓ Morning flu + sore throat ✓ Coughs + chest congestion ✓ Low immunity ✓ Inflammation + joint pain ✓ M200+ weekly pharmacy runs',
    ingredients: ['Premium Raw Honey - Local Lesotho', 'Organic Turmeric - High curcumin', 'Fresh Ginger', 'Black Pepper - Freshly ground', 'Ceylon Cinnamon - No cassia'],
    instructions: ['Full batch formula revealed after purchase', 'Sterilization method included', 'Dosing: 1 tbsp daily', '6 month shelf life protocol'],
    category: 'exclusive',
    affiliationEligible: true
  },
  {
    id: 'master-001',
    name: 'MASTER BASE JAR',
    subtitle: '250ml Readymade | Makes 16 doses',
    price: 150,
    time: 'Shipped',
    benefits: 'The foundation. Sterilized + sealed. 6 months shelf life. Resell at M200+ for 42% profit.',
    ingredients: ['Full 250ml jar of Zap Sauce Master Base', 'Sterilized glass jar', 'Sealed with tamper-proof lid'],
    instructions: ['Order via WhatsApp +266 57031600', 'MPESA 57031600 Ref: MASTER', 'Delivered in Maseru within 24hrs', 'Resell instructions included'],
    category: 'exclusive',
    affiliationEligible: true
  },
  {
    id: 'excl-001',
    name: 'TANGY FUSION',
    subtitle: 'EXCLUSIVE - Tamarind + Pineapple + Scotch Bonnet',
    price: 100,
    time: '5 mins',
    benefits: 'Vitamin C boost. Digestive fire. Flavor explosion. Mood lift. Only from Makhauhelo.',
    ingredients: ['Secret blend base', 'Tamarind pulp', 'Fresh pineapple', 'Scotch bonnet pepper', 'Fresh lime'],
    instructions: ['Full recipe revealed after purchase', 'Readymade available M150', 'Spice level adjustable', 'WhatsApp to order readymade'],
    category: 'exclusive',
    affiliationEligible: true
  },

  // STORE ITEMS 4-19 = 16 MORE RECIPES
  {
    id: 'zap-002',
    name: 'SAVORY HEAL',
    subtitle: 'For soups, stews & immunity',
    price: 150,
    time: '15 mins',
    benefits: 'Adds immunity to any meal. Bone broth compatible. Kid-friendly dose.',
    ingredients: ['1 tbsp Zap Sauce', 'Bone broth or soup base', 'Garlic', 'Onion'],
    instructions: ['Add to last 5 mins of cooking', 'Stir well', 'Serve hot', 'Not for boiling'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-003',
    name: 'FIRE CIDER',
    subtitle: 'Classic immune tonic',
    price: 130,
    time: '10 mins prep + 4 weeks brew',
    benefits: 'Traditional fire cider with Zap Sauce upgrade. Cold + flu destroyer.',
    ingredients: ['1 tbsp Zap Sauce', 'Apple Cider Vinegar', 'Horseradish', 'Onion', 'Garlic', 'Ginger'],
    instructions: ['Combine all in jar', 'Shake daily 4 weeks', 'Strain', '1 tbsp daily'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-004',
    name: 'LIVER FLUSH',
    subtitle: 'Morning detox ritual',
    price: 140,
    time: '3 mins',
    benefits: 'Liver support. Morning energy. Metabolic kickstart.',
    ingredients: ['1 tbsp Zap Sauce', 'Warm lemon water', 'Pinch of sea salt'],
    instructions: ['Mix in warm water', 'Drink on empty stomach', 'Wait 30 mins before food'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-005',
    name: 'BRAIN TONIC',
    subtitle: 'Focus & clarity blend',
    price: 145,
    time: '5 mins',
    benefits: 'Mental clarity. Memory support. No crash energy.',
    ingredients: ['1 tbsp Zap Sauce', 'Lion\'s Mane tea', 'Ginkgo', 'Raw honey'],
    instructions: ['Brew tea 5 mins', 'Stir in Zap Sauce', 'Drink during study/work'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-006',
    name: 'SLEEP ELIXIR',
    subtitle: 'Nighttime wind-down',
    price: 155,
    time: '5 mins',
    benefits: 'Deep sleep. Nighttime immunity. Morning freshness.',
    ingredients: ['1 tsp Zap Sauce', 'Chamomile tea', 'Raw honey', 'Warm milk optional'],
    instructions: ['Brew chamomile', 'Add Zap Sauce + honey', 'Drink 1hr before bed'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-007',
    name: 'METABOLISM BOOST',
    subtitle: 'Pre-workout fire',
    price: 160,
    time: '2 mins',
    benefits: 'Thermogenic. Energy without jitters. Fat burning support.',
    ingredients: ['1 tbsp Zap Sauce', 'Green tea', 'Lemon', 'Cayenne extra'],
    instructions: ['Brew green tea', 'Add Zap Sauce', 'Drink 30 mins pre-workout'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-008',
    name: 'HEART GUARD',
    subtitle: 'Circulation support',
    price: 165,
    time: '5 mins',
    benefits: 'Blood flow. Heart health. Cholesterol support.',
    ingredients: ['1 tbsp Zap Sauce', 'Hawthorn tea', 'Garlic', 'Lemon'],
    instructions: ['Brew hawthorn 10 mins', 'Add Zap Sauce', 'Daily maintenance'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-009',
    name: 'SKIN GLOW',
    subtitle: 'Collagen + antioxidants',
    price: 170,
    time: '5 mins',
    benefits: 'Skin health. Anti-aging. Internal glow.',
    ingredients: ['1 tbsp Zap Sauce', 'Rose hip tea', 'Collagen powder', 'Berries'],
    instructions: ['Mix all ingredients', 'Drink daily', 'Topical mask recipe included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-010',
    name: 'LUNG CLEAR',
    subtitle: 'Respiratory support',
    price: 175,
    time: '10 mins',
    benefits: 'Chest clearing. Breathing ease. Mucus support.',
    ingredients: ['1 tbsp Zap Sauce', 'Mullein tea', 'Thyme', 'Raw honey'],
    instructions: ['Steam inhale 5 mins', 'Drink tea slowly', 'Chest rub recipe included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-011',
    name: 'KIDNEY CLEANSE',
    subtitle: 'Gentle diuretic tonic',
    price: 180,
    time: '5 mins',
    benefits: 'Kidney support. Fluid balance. Gentle detox.',
    ingredients: ['1 tbsp Zap Sauce', 'Dandelion tea', 'Parsley', 'Lemon'],
    instructions: ['Brew dandelion 10 mins', 'Add Zap Sauce', 'Drink 2x daily'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-012',
    name: 'HORMONE HARMONY',
    subtitle: 'Adaptogenic balance',
    price: 185,
    time: '5 mins',
    benefits: 'Hormone support. Stress adaptation. Mood balance.',
    ingredients: ['1 tbsp Zap Sauce', 'Ashwagandha', 'Maca', 'Cinnamon'],
    instructions: ['Mix with warm milk', 'Drink evening', 'Cycle support protocol included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-013',
    name: 'BLOOD SUGAR BALANCE',
    subtitle: 'Glucose support',
    price: 190,
    time: '5 mins',
    benefits: 'Blood sugar stability. Insulin sensitivity. Craving control.',
    ingredients: ['1 tbsp Zap Sauce', 'Ceylon cinnamon extra', 'Fenugreek', 'Apple cider vinegar'],
    instructions: ['Mix before meals', 'Drink with water', 'Timing protocol included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-014',
    name: 'JOINT EASE',
    subtitle: 'Anti-inflammatory',
    price: 195,
    time: '5 mins',
    benefits: 'Joint comfort. Mobility. Inflammation reduction.',
    ingredients: ['1 tbsp Zap Sauce', 'Turmeric extra', 'Ginger extra', 'Black pepper'],
    instructions: ['Mix with warm milk', 'Golden milk recipe', 'Topical paste included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-015',
    name: 'ENERGY SHOT',
    subtitle: 'Natural energy',
    price: 200,
    time: '2 mins',
    benefits: 'Sustained energy. No crash. Mental alertness.',
    ingredients: ['1 tbsp Zap Sauce', 'Matcha', 'MCT oil', 'Lemon'],
    instructions: ['Blend all ingredients', 'Shoot immediately', 'Afternoon pick-me-up'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-016',
    name: 'LENGANA LIGHTNING',
    subtitle: 'Mountain tranquility + supercharge',
    price: 205,
    time: '15 mins',
    benefits: 'Indigenous Lengana herb. Respiratory. Calm energy.',
    ingredients: ['1 tbsp Zap Sauce', 'Lengana herb', 'Maluti honey', 'Lemon'],
    instructions: ['Steep Lengana 10 mins', 'Add Zap Sauce', 'Mountain ritual included'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-017',
    name: 'PHATE-EA-NGAKA POWER',
    subtitle: 'Doctor\'s medicine + supercharge',
    price: 210,
    time: '15 mins',
    benefits: 'Traditional Phate-ea-Ngaka. Immune powerhouse. Ancestral medicine.',
    ingredients: ['1 tbsp Zap Sauce', 'Phate-ea-Ngaka', 'Aloe', 'Honey'],
    instructions: ['Traditional preparation', 'Zap Sauce upgrade', 'Elder wisdom protocol'],
    category: 'paid',
    affiliationEligible: true
  },
  {
    id: 'zap-018',
    name: 'MALUTI IMMUNITY FUSION',
    subtitle: 'All Basotho herbs + supercharge | The Crown Jewel',
    price: 220,
    time: '20 mins',
    benefits: 'Lengana + Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Complete immunity. Mountain medicine.',
    ingredients: ['1 tbsp Zap Sauce Master Base', 'Lengana + Phate-ea-Ngaka blend', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
    instructions: ['Full moon brew of sacred herbs', 'Add Zap Sauce + superfoods', '21-day immunity protocol', 'Ceremonial instructions included'],
    category: 'paid',
    affiliationEligible: true
  }
]

// PACKAGE DEFINITIONS
export const packages = {
  monthlyHeal: {
    id: 'monthly-heal',
    name: 'MONTHLY HEAL',
    price: 120,
    interval: 'month',
    includes: ['zap-001', 'excl-001'],
    affiliateCommission: 0.30,
    description: 'Original + TANGY FUSION + 30% affiliate on all store sales'
  },
  hustlersVault: {
    id: 'hustlers-vault',
    name: 'HUSTLER\'S VAULT',
    price: 1200,
    interval: 'once',
    includes: ['zap-001', 'zap-002', 'zap-003', 'zap-004', 'zap-005', 'zap-006', 'zap-007', 'zap-008', 'zap-009', 'zap-010', 'zap-011'],
    affiliateCommission: 0.30,
    description: '11 Recipes + 30% affiliate on all store sales'
  },
  franchiseKit: {
    id: 'franchise-kit',
    name: 'FRANCHISE KIT',
    price: 2500,
    interval: 'once',
    includes: ['master-001', 'zap-001', 'zap-002', 'zap-003', 'zap-004', 'zap-005', 'zap-006', 'zap-007', 'zap-008', 'zap-009', 'zap-010', 'zap-011', 'zap-012', 'zap-013', 'zap-014', 'zap-015', 'zap-016', 'zap-017', 'zap-018'],
    affiliateCommission: 0,
    description: 'Master Base + 17 recipes + Branding + Scripts + WhatsApp Support [No affiliate - you sell direct]'
  }
}