export interface Recipe {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  category: 'free' | 'paid' | 'subscription' | 'exclusive' | 'bundle'
  featured?: boolean
  type: 'FREE' | 'PAID' | 'SUBSCRIPTION' | 'EXCLUSIVE' | 'BUNDLE'
  benefits: string
  ingredients: string[]
  time: string
  includes?: string[]
  affiliationEligible?: boolean
  ussd?: string
}

export const recipes: Recipe[] = [
  // FREE SAMPLES
  {
    id: 'free-001',
    name: 'MORNING ZAP',
    subtitle: 'Citrus Ginger Energy Shot',
    price: 0,
    category: 'free',
    type: 'FREE',
    benefits: 'Instant morning energy. Vitamin C boost. Metabolism kickstart.',
    ingredients: ['1 lemon, juiced', '1 inch ginger, grated', '1 tsp honey', 'Pinch cayenne', '50ml warm water'],
    time: '2 mins',
    affiliationEligible: false
  },
  {
    id: 'free-002',
    name: 'IMMUNE SHIELD',
    subtitle: 'Honey Turmeric Tea',
    price: 0,
    category: 'free',
    type: 'FREE',
    benefits: 'Daily immune support. Anti-inflammatory. Soothing warmth.',
    ingredients: ['1 tsp turmeric powder', '1 tbsp raw honey', '1 cup hot water', 'Pinch black pepper', 'Lemon slice'],
    time: '3 mins',
    affiliationEligible: false
  },

  // PAID RECIPES - HUSTLER'S VAULT INCLUDED
  {
    id: 'zap-001',
    name: 'ORIGINAL',
    subtitle: 'Turmeric Gold - The Foundation',
    price: 120,
    category: 'paid',
    featured: true,
    type: 'PAID',
    benefits: 'The original Zap Sauce formula. Daily wellness. Anti-inflammatory. Joint support.',
    ingredients: ['Fresh turmeric root', 'Black pepper', 'Coconut oil', 'Raw honey', 'Lemon', 'Ginger'],
    time: '5 mins',
    affiliationEligible: false,
    ussd: '*200#'
  },
  {
    id: 'zap-002',
    name: 'SAVORY HEAL',
    subtitle: 'Umami Wellness Broth',
    price: 150,
    category: 'paid',
    featured: true,
    type: 'PAID',
    benefits: 'Gut healing. Mineral rich. Savory energy without crash.',
    ingredients: ['Bone broth base', 'Mushroom powder', 'Seaweed', 'Turmeric', 'Garlic', 'Miso'],
    time: '10 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-004',
    name: 'FIRE CIDER',
    subtitle: 'Master Tonic for Immunity',
    price: 130,
    category: 'paid',
    type: 'PAID',
    benefits: 'Powerful immune boost. Circulation. Clears congestion.',
    ingredients: ['Apple cider vinegar', 'Horseradish', 'Garlic', 'Onion', 'Ginger', 'Turmeric', 'Cayenne', 'Honey'],
    time: '15 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-005',
    name: 'LIVER FLUSH',
    subtitle: 'Detox Morning Elixir',
    price: 140,
    category: 'paid',
    type: 'PAID',
    benefits: 'Liver support. Gentle detox. Morning cleanse.',
    ingredients: ['Beetroot juice', 'Lemon', 'Olive oil', 'Turmeric', 'Ginger', 'Cayenne'],
    time: '3 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-006',
    name: 'BRAIN TONIC',
    subtitle: 'Focus & Memory Blend',
    price: 145,
    category: 'paid',
    type: 'PAID',
    benefits: 'Mental clarity. Memory support. Sustained focus.',
    ingredients: ['Ginkgo biloba', 'Lion\'s mane', 'Turmeric', 'Black pepper', 'Coconut oil', 'Raw honey'],
    time: '5 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-007',
    name: 'SLEEP ELIXIR',
    subtitle: 'Nighttime Calm Formula',
    price: 155,
    category: 'paid',
    type: 'PAID',
    benefits: 'Deep sleep. Anxiety relief. Nighttime recovery.',
    ingredients: ['Chamomile', 'Ashwagandha', 'Turmeric', 'Warm milk', 'Honey', 'Nutmeg'],
    time: '5 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-008',
    name: 'METABOLISM BOOST',
    subtitle: 'Fat Burning Morning Shot',
    price: 160,
    category: 'paid',
    type: 'PAID',
    benefits: 'Metabolism boost. Appetite control. Energy without jitters.',
    ingredients: ['Green tea extract', 'Cayenne', 'Ginger', 'Lemon', 'Apple cider vinegar', 'Turmeric'],
    time: '2 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-009',
    name: 'HEART GUARD',
    subtitle: 'Circulation Support Blend',
    price: 165,
    category: 'paid',
    type: 'PAID',
    benefits: 'Heart health. Blood pressure support. Circulation.',
    ingredients: ['Hawthorn berry', 'Garlic', 'Turmeric', 'Cayenne', 'Lemon', 'Raw honey'],
    time: '5 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-010',
    name: 'SKIN GLOW',
    subtitle: 'Beauty From Within',
    price: 170,
    category: 'paid',
    type: 'PAID',
    benefits: 'Collagen support. Skin clarity. Anti-aging from inside.',
    ingredients: ['Collagen peptides', 'Vitamin C', 'Turmeric', 'Aloe vera', 'Honey', 'Lemon'],
    time: '3 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-012',
    name: 'KIDNEY CLEANSE',
    subtitle: 'Gentle Renal Support',
    price: 180,
    category: 'paid',
    type: 'PAID',
    benefits: 'Kidney support. Fluid balance. Gentle detox.',
    ingredients: ['Dandelion root', 'Parsley', 'Lemon', 'Turmeric', 'Ginger', 'Raw honey'],
    time: '5 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-013',
    name: 'HORMONE HARMONY',
    subtitle: 'Balance & Vitality',
    price: 185,
    category: 'paid',
    type: 'PAID',
    benefits: 'Hormone balance. Mood support. Energy regulation.',
    ingredients: ['Maca root', 'Ashwagandha', 'Turmeric', 'Cinnamon', 'Raw honey', 'Warm milk'],
    time: '5 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },
  {
    id: 'zap-014',
    name: 'BLOOD SUGAR BALANCE',
    subtitle: 'Glucose Support Shot',
    price: 190,
    category: 'paid',
    type: 'PAID',
    benefits: 'Blood sugar support. Craving control. Steady energy.',
    ingredients: ['Cinnamon', 'Fenugreek', 'Turmeric', 'Apple cider vinegar', 'Lemon', 'Stevia'],
    time: '3 mins',
    affiliationEligible: true,
    ussd: '*200#'
  },

  // EXCLUSIVE - NO AFFILIATE
  {
    id: 'excl-001',
    name: 'TANGY FUSION',
    subtitle: 'Signature Flavor Explosion',
    price: 100,
    category: 'exclusive',
    featured: true,
    type: 'EXCLUSIVE',
    benefits: 'The secret Zap Sauce flavor. Sweet, tangy, spicy perfection. Exclusive recipe.',
    ingredients: ['Secret blend base', 'Tamarind', 'Pineapple', 'Scotch bonnet', 'Turmeric', 'Special spices'],
    time: '10 mins',
    affiliationEligible: false,
    ussd: '*200#'
  },

  // SUBSCRIPTION - ORIGINAL + TANGY FUSION ONLY
  {
    id: 'sub-001',
    name: 'MONTHLY HEAL',
    subtitle: 'Original + TANGY FUSION Subscription',
    price: 120,
    category: 'subscription',
    featured: true,
    type: 'SUBSCRIPTION',
    benefits: 'Monthly access to Original Turmeric Gold + Exclusive TANGY FUSION. New variations monthly. Cancel anytime.',
    ingredients: ['Original Recipe', 'TANGY FUSION Recipe', 'Monthly variations', 'Subscriber support'],
    time: 'Monthly',
    includes: ['zap-001', 'excl-001'],
    affiliationEligible: false,
    ussd: '*200#'
  },

  // HUSTLER'S VAULT BUNDLE
  {
    id: 'bundle-001',
    name: "HUSTLER'S VAULT",
    subtitle: '12 Recipe Business Pack + 30% Affiliate Rights',
    price: 1200,
    originalPrice: 1890,
    category: 'bundle',
    featured: true,
    type: 'BUNDLE',
    benefits: 'Full commercial rights for Lesotho. Sell these 12 recipes. Keep 70% of every sale. Earn 30% on every referral you bring. Complete business in a box with WhatsApp scripts.',
    ingredients: ['12 Recipe PDFs', 'Affiliate Dashboard Access', 'WhatsApp Sales Scripts', 'MPESA Payment Templates', 'Customer Management Sheet'],
    time: 'Instant Access',
    includes: ['zap-001','zap-002','zap-004','zap-005','zap-006','zap-007','zap-008','zap-009','zap-010','zap-012','zap-013','zap-014'],
    affiliationEligible: true,
    ussd: '*200#'
  }
]