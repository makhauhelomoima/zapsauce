export type Recipe = {
  id: string
  name: string
  subtitle?: string
  type: 'FREE' | 'PAID' | 'SUBSCRIPTION' | 'EXCLUSIVE'
  price: number
  ref: string
  ussd?: string
  cures: string[]
  warning?: string
  ingredients?: string[]
  instructions?: string[]
  isSubscriberOnly?: boolean
}

export const RECIPES: Record<string, Recipe> = {
  // FREE TEASERS - 2 TOTAL
  'free-sample': {
    id: 'free-sample',
    name: 'FREE TEASER SHOT',
    subtitle: 'Taste of healing',
    type: 'FREE',
    price: 0,
    ref: 'FREE-001',
    cures: ['Morning energy boost', 'Digestive kickstart', 'Immune primer'],
    ingredients: ['Ginger 1 tsp', 'Lemon juice 1 tbsp', 'Warm water 100ml', 'Honey 1 tsp'],
    instructions: ['Mix all in warm water', 'Drink on empty stomach', 'Wait 15 mins before breakfast']
  },
  'immunity-teaser': {
    id: 'immunity-teaser',
    name: 'IMMUNITY TEASER',
    subtitle: 'Your first defense',
    type: 'FREE',
    price: 0,
    ref: 'FREE-002',
    cures: ['Cold prevention', 'Throat soothing', 'Vitamin C boost'],
    ingredients: ['Turmeric 1/2 tsp', 'Black pepper pinch', 'Honey 1 tbsp', 'Hot water 150ml'],
    instructions: ['Dissolve turmeric + pepper in hot water', 'Stir in honey', 'Sip slowly']
  },

  // PAID RECIPES - 14 TOTAL (13 + 1 NEW)
  'original': {
    id: 'original',
    name: 'ORIGINAL - Turmeric Gold',
    type: 'PAID',
    price: 120,
    ref: 'ZAP-001',
    ussd: '*234*1*1*120#',
    cures: ['Inflammation', 'Joint pain', 'Arthritis', 'Muscle recovery'],
    ingredients: ['Turmeric 2 tbsp', 'Black pepper 1 tsp', 'Coconut oil 1 tbsp', 'Raw honey 2 tbsp'],
    instructions: ['Mix dry ingredients', 'Add oil to form paste', 'Store in jar', '1 tsp daily']
  },
  'savory-heal': {
    id: 'savory-heal',
    name: 'SAVORY HEAL',
    type: 'PAID',
    price: 150,
    ref: 'ZAP-002',
    ussd: '*234*1*1*150#',
    cures: ['Gut health', 'Bloating', 'IBS symptoms', 'Appetite control'],
    ingredients: ['Apple cider vinegar 2 tbsp', 'Garlic 2 cloves', 'Cayenne 1/4 tsp', 'Olive oil 1 tbsp'],
    instructions: ['Crush garlic', 'Mix all ingredients', 'Take before meals', 'Shake before use']
  },
  'monthly-heal': {
    id: 'monthly-heal',
    name: 'MONTHLY HEAL',
    subtitle: 'Subscription Base',
    type: 'SUBSCRIPTION',
    price: 120,
    ref: 'SUB-001',
    ussd: '*234*1*2*120#',
    cures: ['Monthly immune reset', 'Hormone balance', 'Energy cycles', 'Stress relief'],
    warning: 'Subscription unlocks EXCLUSIVE recipe'
  },
  //... ADD YOUR OTHER 11 PAID RECIPES HERE - M130 to M180
  'recipe-4': { id: 'recipe-4', name: 'FIRE CIDER', type: 'PAID', price: 130, ref: 'ZAP-004', ussd: '*234*1*1*130#', cures: ['Sinus relief', 'Congestion'] },
  'recipe-5': { id: 'recipe-5', name: 'LIVER FLUSH', type: 'PAID', price: 140, ref: 'ZAP-005', ussd: '*234*1*1*140#', cures: ['Detox', 'Liver support'] },
  'recipe-6': { id: 'recipe-6', name: 'BRAIN TONIC', type: 'PAID', price: 145, ref: 'ZAP-006', ussd: '*234*1*1*145#', cures: ['Focus', 'Memory'] },
  'recipe-7': { id: 'recipe-7', name: 'SLEEP ELIXIR', type: 'PAID', price: 155, ref: 'ZAP-007', ussd: '*234*1*1*155#', cures: ['Insomnia', 'Anxiety'] },
  'recipe-8': { id: 'recipe-8', name: 'METABOLISM BOOST', type: 'PAID', price: 160, ref: 'ZAP-008', ussd: '*234*1*1*160#', cures: ['Weight loss', 'Energy'] },
  'recipe-9': { id: 'recipe-9', name: 'HEART GUARD', type: 'PAID', price: 165, ref: 'ZAP-009', ussd: '*234*1*1*165#', cures: ['Blood pressure', 'Circulation'] },
  'recipe-10': { id: 'recipe-10', name: 'SKIN GLOW', type: 'PAID', price: 170, ref: 'ZAP-010', ussd: '*234*1*1*170#', cures: ['Acne', 'Eczema'] },
  'recipe-11': { id: 'recipe-11', name: 'LUNG CLEAR', type: 'PAID', price: 175, ref: 'ZAP-011', ussd: '*234*1*1*175#', cures: ['Cough', 'Asthma'] },
  'recipe-12': { id: 'recipe-12', name: 'KIDNEY CLEANSE', type: 'PAID', price: 180, ref: 'ZAP-012', ussd: '*234*1*1*180#', cures: ['UTI', 'Kidney stones'] },
  'recipe-13': { id: 'recipe-13', name: 'HORMONE HARMONY', type: 'PAID', price: 185, ref: 'ZAP-013', ussd: '*234*1*1*185#', cures: ['PMS', 'Menopause'] },
  'recipe-14': { id: 'recipe-14', name: 'BLOOD SUGAR BALANCE', type: 'PAID', price: 190, ref: 'ZAP-014', ussd: '*234*1*1*190#', cures: ['Diabetes', 'Sugar cravings'] },

  // EXCLUSIVE - SUBSCRIBERS ONLY - 15TH RECIPE
  'exclusive-tangy': {
    id: 'exclusive-tangy',
    name: 'EXCLUSIVE TANGY FUSION',
    subtitle: 'Subscribers Only',
    type: 'EXCLUSIVE',
    price: 0,
    ref: 'EXCL-001',
    isSubscriberOnly: true,
    cures: ['Ultimate immunity', 'Fat burning', 'Anti-aging', 'Total body reset'],
    ingredients: ['Ginger 2 tbsp', 'Turmeric 2 tbsp', 'Raw Honey 3 tbsp', 'Cayenne Pepper 1 tsp', 'Cinnamon 1 tsp', 'Apple Cider Vinegar 3 tbsp'],
    instructions: ['Combine all in glass jar', 'Shake vigorously', 'Ferment 24hrs', '1 tbsp morning + night', 'WARNING: Extremely potent'],
    warning: 'SUBSCRIBERS ONLY - Subscribe to Monthly Heal to unlock'
  }
}